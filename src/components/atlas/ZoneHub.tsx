"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight, RotateCcw } from "lucide-react";
import { countriesOf, getZoneInfo, ALL_MAPS, type MapId } from "@/data/atlas/countries";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  EMPTY_PROGRESS,
  PLAY_MODES,
  PROGRESS_KEY,
  countByMastery,
  masteryOf,
  resetProgress,
  sessionKey,
  type AtlasProgress,
  type PlayMode,
  type SavedSession,
} from "@/lib/atlas/progress";
import { cn } from "@/lib/utils";
import { AtlasMap, MAP_COLORS } from "./AtlasMap";
import { MapPlaceholder } from "./LearnView";
import { Legend } from "./PlayView";
import { useMapData } from "./useMapData";

const MASTERY_COLOR = {
  new: undefined,
  learning: MAP_COLORS.learning,
  review: MAP_COLORS.review,
  mastered: MAP_COLORS.mastered,
} as const;

export function ZoneHub({ mapId }: { mapId: MapId }) {
  const zone = getZoneInfo(mapId)!;
  const ids = useMemo(() => countriesOf(mapId).map((c) => c.id), [mapId]);
  const playable = useMemo(() => new Set(ids), [ids]);
  const { data, error } = useMapData(mapId);
  const [progress, setProgress] = useLocalStorage<AtlasProgress>(PROGRESS_KEY, EMPTY_PROGRESS);
  const [heatMode, setHeatMode] = useState<PlayMode>("qcm");
  const [confirmReset, setConfirmReset] = useState(false);

  const fills = useMemo(() => {
    const f: Record<string, string> = {};
    for (const id of ids) {
      const color = MASTERY_COLOR[masteryOf(progress[id]?.[heatMode])];
      if (color) f[id] = color;
    }
    return f;
  }, [ids, progress, heatMode]);

  const counts = countByMastery(progress, ids, heatMode);

  const doReset = () => {
    setProgress((p) => resetProgress(p, ids));
    const maps = mapId === "monde" ? ALL_MAPS.map((z) => z.id) : [mapId];
    try {
      for (const m of maps) {
        localStorage.removeItem(`teacher-loulou-atlas-seen:${m}`);
        for (const mode of PLAY_MODES) localStorage.removeItem(sessionKey(m, mode.id));
      }
      window.dispatchEvent(new StorageEvent("storage"));
    } catch {
      /* ignore */
    }
    setConfirmReset(false);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <Link href="/atlas" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-warm-600 hover:text-warm-800">
        <ArrowLeft className="h-4 w-4" /> Atlas
      </Link>

      <section className={cn("rounded-2xl bg-gradient-to-br p-5 text-white shadow-lg", zone.gradient)}>
        <p className="text-4xl">{zone.emoji}</p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{zone.name}</h1>
        <p className="text-white/90">{ids.length} pays à connaître</p>
      </section>

      {/* Step 1 — learn */}
      <Link
        href={`/atlas/${mapId}/apprendre`}
        className="flex items-center gap-4 rounded-2xl border-2 border-accent-300 bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.99]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
          <BookOpen className="h-6 w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-bold text-warm-900">📖 Apprendre</span>
          <span className="block text-sm text-warm-600">Explore la carte : touche un pays pour voir et entendre son nom.</span>
        </span>
        <ChevronRight className="h-5 w-5 shrink-0 text-warm-400" />
      </Link>

      {/* Step 2 — practice */}
      <section className="space-y-2">
        <h2 className="text-lg font-bold text-warm-800">
          {mapId === "monde" ? "🎯 Le grand test" : "🎯 S'entraîner"}
        </h2>
        {PLAY_MODES.map((m) => (
          <ModeCard key={m.id} mapId={mapId} mode={m.id} ids={ids} progress={progress} />
        ))}
      </section>

      {/* Progress map */}
      <section className="space-y-3 rounded-2xl border border-warm-200 bg-white p-4">
        <h2 className="text-lg font-bold text-warm-800">📊 Ma carte de progression</h2>
        <div className="grid grid-cols-3 gap-1.5" role="tablist">
          {PLAY_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={heatMode === m.id}
              onClick={() => setHeatMode(m.id)}
              className={cn(
                "min-h-11 rounded-xl border-2 px-2 text-sm font-semibold",
                heatMode === m.id ? "border-accent-500 bg-accent-100 text-accent-700" : "border-warm-200 text-warm-600"
              )}
            >
              {m.emoji} {m.name}
            </button>
          ))}
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-warm-200">
          {data ? (
            <AtlasMap data={data} playable={playable} fills={fills} interactive={false} ariaLabel="Carte de progression" />
          ) : (
            <MapPlaceholder error={error} />
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-warm-700">
          <Legend color={MAP_COLORS.mastered} label={`Maîtrisé (${counts.mastered})`} />
          <Legend color={MAP_COLORS.learning} label={`En cours (${counts.learning})`} />
          <Legend color={MAP_COLORS.review} label={`À revoir (${counts.review})`} />
          <Legend color={MAP_COLORS.land} label={`Pas encore vu (${counts.new})`} />
        </div>
        <p className="text-center text-xs text-warm-500">Un pays est maîtrisé après 3 bonnes réponses de suite.</p>
      </section>

      <button
        type="button"
        onClick={() => setConfirmReset(true)}
        className="mx-auto flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-warm-500 hover:bg-warm-100 hover:text-red-600"
      >
        <RotateCcw className="h-4 w-4" /> Remettre à zéro : {zone.name}
      </button>

      {confirmReset && (
        <ConfirmDialog
          title="Remettre à zéro ?"
          message={
            mapId === "monde"
              ? "Tu vas effacer toute ta progression de l'Atlas, sur tous les continents."
              : `Tu vas effacer ta progression pour « ${zone.name} ».`
          }
          onConfirm={doReset}
          onCancel={() => setConfirmReset(false)}
        />
      )}
    </div>
  );
}

function ModeCard({
  mapId,
  mode,
  ids,
  progress,
}: {
  mapId: MapId;
  mode: PlayMode;
  ids: string[];
  progress: AtlasProgress;
}) {
  const info = PLAY_MODES.find((m) => m.id === mode)!;
  const [saved] = useLocalStorage<SavedSession | null>(sessionKey(mapId, mode), null);
  const counts = countByMastery(progress, ids, mode);
  const paused = saved && saved.index < saved.queue.length;

  return (
    <Link
      href={`/atlas/${mapId}/${mode}`}
      className="flex items-center gap-3 rounded-2xl border border-warm-200 bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-[0.99]"
    >
      <span className="text-3xl" aria-hidden>
        {info.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-bold text-warm-900">{info.name}</span>
          <span className={cn("rounded-full border px-2 py-0.5 text-xs font-semibold", info.badge)}>{info.level}</span>
          {paused && (
            <span className="rounded-full bg-accent-100 px-2 py-0.5 text-xs font-semibold text-accent-700">⏸️ En pause</span>
          )}
        </span>
        <span className="block text-sm text-warm-600">{info.description}</span>
        <span className="mt-1.5 flex items-center gap-2">
          <span className="h-2 flex-1 overflow-hidden rounded-full bg-warm-100">
            <span
              className="block h-full rounded-full bg-success-500"
              style={{ width: `${(counts.mastered / ids.length) * 100}%` }}
            />
          </span>
          <span className="text-xs font-medium tabular-nums text-warm-600">
            {counts.mastered}/{ids.length}
          </span>
        </span>
      </span>
      <ChevronRight className="h-5 w-5 shrink-0 text-warm-400" />
    </Link>
  );
}

export function ConfirmDialog({
  title,
  message,
  onConfirm,
  onCancel,
}: {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} aria-hidden="true" />
      <div className="relative w-full max-w-sm space-y-4 rounded-2xl border border-warm-200 bg-white p-6 shadow-xl">
        <h2 className="text-lg font-bold text-warm-800">{title}</h2>
        <p className="text-sm text-warm-600">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-warm-300 px-4 py-2 text-sm font-medium text-warm-700 hover:bg-warm-100"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 active:scale-95"
          >
            Remettre à zéro
          </button>
        </div>
      </div>
    </div>
  );
}
