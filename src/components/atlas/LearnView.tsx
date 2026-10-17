"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, List, Tag, Volume2, VolumeX, Check } from "lucide-react";
import {
  COUNTRY_BY_ID,
  countriesOf,
  getZoneInfo,
  type MapId,
} from "@/data/atlas/countries";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { speak, useCanSpeak } from "@/lib/atlas/speech";
import { cn } from "@/lib/utils";
import { AtlasMap, MAP_COLORS } from "./AtlasMap";
import { FullscreenShell, SidePanel } from "./FullscreenShell";
import { useMapData, type MapData } from "./useMapData";

const EMPTY: string[] = [];

/** Guided tour order: hop from each country to the nearest unvisited one. */
function tourOrder(data: MapData, ids: string[]): string[] {
  const pos = new Map(data.f.map((f) => [f.id, f.c]));
  const left = ids.filter((id) => pos.has(id));
  if (!left.length) return ids;
  // Start in the north-west
  left.sort((a, b) => pos.get(a)![0] + pos.get(a)![1] - (pos.get(b)![0] + pos.get(b)![1]));
  const order = [left.shift()!];
  while (left.length) {
    const [x, y] = pos.get(order[order.length - 1])!;
    let best = 0;
    let bestD = Infinity;
    left.forEach((id, i) => {
      const [x2, y2] = pos.get(id)!;
      const d = (x - x2) ** 2 + (y - y2) ** 2;
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    order.push(left.splice(best, 1)[0]);
  }
  return order;
}

export function LearnView({ mapId }: { mapId: MapId }) {
  const router = useRouter();
  const zone = getZoneInfo(mapId)!;
  const { data, error } = useMapData(mapId);
  const countries = useMemo(() => countriesOf(mapId), [mapId]);
  const playable = useMemo(() => new Set(countries.map((c) => c.id)), [countries]);

  const speechOk = useCanSpeak();
  const [selected, setSelected] = useState<string | null>(null);
  const [focus, setFocus] = useState<{ id: string | null; key: number }>({ id: null, key: 0 });
  const [showLabels, setShowLabels] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [autoSpeak, setAutoSpeak] = useLocalStorage("teacher-loulou-atlas-speak", true);
  const [seen, setSeen] = useLocalStorage<string[]>(`teacher-loulou-atlas-seen:${mapId}`, EMPTY);

  const order = useMemo(() => (data ? tourOrder(data, countries.map((c) => c.id)) : []), [data, countries]);
  const seenSet = useMemo(() => new Set(seen), [seen]);
  const seenCount = countries.filter((c) => seenSet.has(c.id)).length;

  const territory = selected && !COUNTRY_BY_ID[selected] ? data?.f.find((f) => f.id === selected) : undefined;
  const country = selected ? COUNTRY_BY_ID[selected] : undefined;

  function select(id: string, zoom: boolean) {
    setSelected(id);
    if (zoom) setFocus((f) => ({ id, key: f.key + 1 }));
    const c = COUNTRY_BY_ID[id];
    if (c && playable.has(id)) {
      if (!seenSet.has(id)) setSeen((prev) => [...prev, id]);
      if (autoSpeak) speak(c.name);
    }
  }

  function step(delta: number) {
    if (!order.length) return;
    const i = selected ? order.indexOf(selected) : -1;
    // Nothing from the tour selected yet: start at the first (or last) country
    const nextIndex = i < 0 ? (delta > 0 ? 0 : order.length - 1) : (i + delta + order.length) % order.length;
    select(order[nextIndex], true);
  }

  const fills = useMemo(() => {
    const f: Record<string, string> = {};
    for (const id of seen) if (playable.has(id)) f[id] = "#FDEBC8";
    if (selected) f[selected] = MAP_COLORS.selected;
    return f;
  }, [seen, selected, playable]);

  const close = () => router.push(`/atlas/${mapId}`);

  return (
    <FullscreenShell
      onClose={close}
      title={
        <div className="leading-tight">
          <p className="truncate text-sm font-bold text-warm-800">
            📖 Apprendre · {zone.name}
          </p>
          <p className="text-xs text-warm-500">
            Découverts : {seenCount} / {countries.length}
          </p>
        </div>
      }
      right={
        <>
          <ToolbarToggle
            active={showLabels}
            onClick={() => setShowLabels((v) => !v)}
            label={showLabels ? "Cacher les noms" : "Afficher les noms"}
          >
            <Tag className="h-5 w-5" />
          </ToolbarToggle>
          {speechOk && (
            <ToolbarToggle
              active={autoSpeak}
              onClick={() => setAutoSpeak(!autoSpeak)}
              label={autoSpeak ? "Couper la voix" : "Lire les noms à voix haute"}
            >
              {autoSpeak ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </ToolbarToggle>
          )}
          <ToolbarToggle active={listOpen} onClick={() => setListOpen((v) => !v)} label="Liste des pays">
            <List className="h-5 w-5" />
          </ToolbarToggle>
        </>
      }
    >
      <div className="relative min-h-0 flex-1">
        {data ? (
          <AtlasMap
            data={data}
            playable={playable}
            fills={fills}
            pulseId={selected}
            focusId={focus.id}
            focusKey={focus.key}
            showLabels={showLabels}
            labelIds={selected ? [selected] : undefined}
            onTap={(id) => select(id, false)}
            ariaLabel={`Carte : ${zone.name}`}
          />
        ) : (
          <MapPlaceholder error={error} />
        )}

        {listOpen && (
          <div className="absolute inset-0 z-10 overflow-y-auto bg-warm-50/97 p-3">
            <p className="mb-2 text-sm text-warm-600">Touche un pays pour le voir sur la carte.</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[...countries]
                .sort((a, b) => a.name.localeCompare(b.name, "fr"))
                .map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setListOpen(false);
                      select(c.id, true);
                    }}
                    className={cn(
                      "flex min-h-11 items-center gap-1.5 rounded-xl border px-3 py-2 text-left text-sm font-medium",
                      seenSet.has(c.id)
                        ? "border-amber-300 bg-amber-50 text-warm-800"
                        : "border-warm-200 bg-white text-warm-700"
                    )}
                  >
                    {seenSet.has(c.id) && <Check className="h-4 w-4 shrink-0 text-amber-600" />}
                    <span className="min-w-0 break-words">{c.name}</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>

      <SidePanel>
        <div className="flex min-h-[7.5rem] flex-col justify-between gap-3 landscape:h-full">
          <div aria-live="polite" className="min-h-[3.5rem]">
            {country ? (
              <>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-warm-900 sm:text-3xl">{country.name}</p>
                  {speechOk && (
                    <button
                      type="button"
                      onClick={() => speak(country.name)}
                      aria-label={`Écouter : ${country.name}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700 active:scale-90"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                {country.alsoKnownAs && (
                  <p className="text-sm text-warm-600">Aussi appelé : {country.alsoKnownAs}</p>
                )}
                {!playable.has(country.id) && (
                  <p className="text-sm text-warm-600">
                    Ce pays fait partie de la zone « {getZoneInfo(country.zone)?.name} ».
                  </p>
                )}
              </>
            ) : territory ? (
              <>
                <p className="text-xl font-bold text-warm-800">{territory.t}</p>
                <p className="text-sm text-warm-600">Ce n&apos;est pas un pays indépendant : pas besoin de l&apos;apprendre.</p>
              </>
            ) : (
              <p className="text-base text-warm-600">
                👆 Touche un pays pour découvrir son nom, ou utilise les flèches pour les voir un par un.
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => step(-1)}
              className="flex h-12 flex-1 items-center justify-center gap-1 rounded-xl border border-warm-300 bg-white font-semibold text-warm-700 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" /> Précédent
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="flex h-12 flex-1 items-center justify-center gap-1 rounded-xl bg-accent-600 font-semibold text-white shadow active:scale-95"
            >
              Suivant <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </SidePanel>
    </FullscreenShell>
  );
}

export function ToolbarToggle({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      title={label}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
        active ? "bg-accent-100 text-accent-700" : "text-warm-500 hover:bg-warm-100"
      )}
    >
      {children}
    </button>
  );
}

export function MapPlaceholder({ error }: { error: string | null }) {
  return (
    <div className="flex h-full items-center justify-center p-6 text-center text-warm-600" style={{ backgroundColor: MAP_COLORS.ocean }}>
      {error ? `😕 ${error}` : "🌍 Chargement de la carte…"}
    </div>
  );
}
