"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Play, RotateCcw, Timer, Volume2 } from "lucide-react";
import {
  COUNTRY_BY_ID,
  countriesOf,
  getZoneInfo,
  withArticle,
  type Country,
  type MapId,
} from "@/data/atlas/countries";
import NEIGHBOURS from "@/data/atlas/neighbours.json";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { checkTypedAnswer, type AnswerCheck } from "@/lib/atlas/answer";
import {
  EMPTY_PROGRESS,
  PROGRESS_KEY,
  getPlayMode,
  mistakesOf,
  pickCountries,
  recordAnswer,
  sessionKey,
  type AtlasProgress,
  type PlayMode,
  type SavedSession,
} from "@/lib/atlas/progress";
import { speak, useCanSpeak } from "@/lib/atlas/speech";
import { playCorrect, playIncorrect, playVictory } from "@/lib/sounds";
import { vibrateCorrect, vibrateIncorrect } from "@/lib/haptics";
import { cn } from "@/lib/utils";
import { AtlasMap, MAP_COLORS } from "./AtlasMap";
import { FullscreenShell, SidePanel } from "./FullscreenShell";
import { MapPlaceholder } from "./LearnView";
import { useMapData } from "./useMapData";

const NEIGHBOUR_MAP = NEIGHBOURS as Record<string, string[]>;
const PASSING = 60;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 4 choices: the answer, up to 2 neighbours (harder), the rest from the same zone. */
function buildOptions(id: string, mapId: MapId): string[] {
  const zone = COUNTRY_BY_ID[id].zone;
  const pool = countriesOf(mapId === "monde" ? zone : mapId).map((c) => c.id);
  const allowed = new Set(mapId === "monde" ? countriesOf("monde").map((c) => c.id) : pool);
  const picked = shuffle((NEIGHBOUR_MAP[id] ?? []).filter((n) => allowed.has(n))).slice(0, 2);
  const rest = shuffle(pool.filter((p) => p !== id && !picked.includes(p)));
  return shuffle([id, ...picked, ...rest].slice(0, 4));
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function formatTime(ms: number) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// ═════════════════════════════════════════════════════════════════
// Page: setup → game → result
// ═════════════════════════════════════════════════════════════════

export function PlayView({ mapId, mode }: { mapId: MapId; mode: PlayMode }) {
  const [progress, setProgress] = useLocalStorage<AtlasProgress>(PROGRESS_KEY, EMPTY_PROGRESS);
  const [saved, setSaved] = useLocalStorage<SavedSession | null>(sessionKey(mapId, mode), null);
  const [phase, setPhase] = useState<"setup" | "playing" | "result">("setup");
  const [finished, setFinished] = useState<SavedSession | null>(null);
  // Live session in React state; localStorage is only for pause/resume
  const [active, setActive] = useState<SavedSession | null>(null);

  const start = (session: SavedSession) => {
    setActive(session);
    setSaved(session);
    setPhase("playing");
  };

  if (phase === "playing" && active) {
    return (
      <GameSession
        mapId={mapId}
        mode={mode}
        initial={active}
        onProgress={setProgress}
        onSave={setSaved}
        onQuit={() => setPhase("setup")}
        onFinish={(s) => {
          setSaved(null);
          setFinished(s);
          setPhase("result");
        }}
      />
    );
  }

  if (phase === "result" && finished) {
    return (
      <ResultView
        mapId={mapId}
        mode={mode}
        session={finished}
        onReplay={(ids) => {
          start(newSession(ids, finished.timer, finished.retries));
        }}
        onNew={() => setPhase("setup")}
      />
    );
  }

  return <SetupView mapId={mapId} mode={mode} progress={progress} saved={saved} onStart={start} onDiscard={() => setSaved(null)} />;
}

function newSession(ids: string[], timer: boolean, retries: boolean): SavedSession {
  return {
    queue: ids.map((id) => ({ id })),
    index: 0,
    answers: [],
    total: ids.length,
    timer,
    elapsedMs: 0,
    retries,
  };
}

// ═════════════════════════════════════════════════════════════════
// Setup
// ═════════════════════════════════════════════════════════════════

function SetupView({
  mapId,
  mode,
  progress,
  saved,
  onStart,
  onDiscard,
}: {
  mapId: MapId;
  mode: PlayMode;
  progress: AtlasProgress;
  saved: SavedSession | null;
  onStart: (s: SavedSession) => void;
  onDiscard: () => void;
}) {
  const zone = getZoneInfo(mapId)!;
  const modeInfo = getPlayMode(mode)!;
  const ids = useMemo(() => countriesOf(mapId).map((c) => c.id), [mapId]);
  const mistakes = mistakesOf(progress, ids, mode);
  const isWorld = mapId === "monde";

  const sizes = isWorld ? [20, 50, ids.length] : [10, 20, ids.length].filter((n, i, a) => n <= ids.length && a.indexOf(n) === i);
  const [count, setCount] = useState<number | "erreurs">(sizes[0]);
  const [timer, setTimer] = useState(false);
  const [retries, setRetries] = useState(!isWorld);

  const begin = () => {
    const chosen =
      count === "erreurs"
        ? shuffle(mistakes)
        : pickCountries(ids, count, progress, mode);
    onStart(newSession(chosen, timer, retries));
  };

  const answered = saved ? saved.answers.filter((a) => !a.retry).length : 0;

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <Link href={`/atlas/${mapId}`} className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-warm-600 hover:text-warm-800">
        <ArrowLeft className="h-4 w-4" /> {zone.emoji} {zone.name}
      </Link>

      <div className="rounded-2xl border border-warm-200 bg-white p-5 shadow-sm">
        <span className={cn("inline-block rounded-full border px-3 py-0.5 text-xs font-semibold", modeInfo.badge)}>
          {modeInfo.emoji} {modeInfo.level}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-warm-900">{modeInfo.name}</h1>
        <p className="mt-1 text-warm-700">{modeInfo.description}</p>
      </div>

      {saved && saved.index < saved.queue.length && (
        <div className="space-y-3 rounded-2xl border-2 border-accent-300 bg-accent-100/50 p-4">
          <p className="font-semibold text-warm-800">
            ⏸️ Tu as une partie en pause : {answered} / {saved.total} questions faites.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onStart(saved)}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent-600 font-semibold text-white shadow active:scale-95"
            >
              <Play className="h-5 w-5" /> Reprendre
            </button>
            <button
              type="button"
              onClick={onDiscard}
              className="h-12 rounded-xl border border-warm-300 bg-white px-4 font-medium text-warm-700 active:scale-95"
            >
              Abandonner
            </button>
          </div>
        </div>
      )}

      <fieldset className="space-y-2">
        <legend className="mb-2 font-semibold text-warm-800">Combien de pays ?</legend>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((n) => (
            <ChoiceButton key={n} active={count === n} onClick={() => setCount(n)}>
              {n === ids.length ? `Tous (${n})` : n}
            </ChoiceButton>
          ))}
        </div>
        <ChoiceButton active={count === "erreurs"} disabled={!mistakes.length} onClick={() => setCount("erreurs")} wide>
          🔁 Mes erreurs ({mistakes.length})
        </ChoiceButton>
        <p className="text-sm text-warm-500">
          Les pays que tu rates reviennent plus souvent, mais ceux que tu connais reviennent aussi de temps en temps.
        </p>
      </fieldset>

      <div className="space-y-2">
        <Switch checked={retries} onChange={setRetries} label="Deuxième chance" hint="Un pays raté revient quelques questions plus tard." />
        <Switch checked={timer} onChange={setTimer} label="Chronomètre" hint="Pour te lancer un défi. Pas obligatoire !" />
      </div>

      <button
        type="button"
        onClick={begin}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-700 text-lg font-bold text-white shadow-lg active:scale-[0.98]"
      >
        <Play className="h-6 w-6" /> C&apos;est parti !
      </button>
    </div>
  );
}

function ChoiceButton({
  active,
  disabled,
  onClick,
  wide,
  children,
}: {
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-12 rounded-xl border-2 px-3 font-semibold transition-all active:scale-95 disabled:opacity-40",
        wide && "w-full",
        active ? "border-accent-500 bg-accent-100 text-accent-700" : "border-warm-200 bg-white text-warm-700"
      )}
    >
      {children}
    </button>
  );
}

function Switch({
  checked,
  onChange,
  label,
  hint,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center gap-3 rounded-xl border border-warm-200 bg-white p-3 text-left"
    >
      <span
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full transition-colors",
          checked ? "bg-accent-500" : "bg-warm-300"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all",
            checked ? "left-[1.375rem]" : "left-0.5"
          )}
        />
      </span>
      <span>
        <span className="block font-semibold text-warm-800">{label}</span>
        <span className="block text-sm text-warm-500">{hint}</span>
      </span>
    </button>
  );
}

// ═════════════════════════════════════════════════════════════════
// Game
// ═════════════════════════════════════════════════════════════════

type Feedback = {
  ok: boolean;
  /** Clean answer → move on automatically */
  perfect: boolean;
  chosenId?: string;
  typed?: string;
  check?: AnswerCheck;
  skipped?: boolean;
};

function GameSession({
  mapId,
  mode,
  initial,
  onProgress,
  onSave,
  onQuit,
  onFinish,
}: {
  mapId: MapId;
  mode: PlayMode;
  initial: SavedSession;
  onProgress: (fn: (p: AtlasProgress) => AtlasProgress) => void;
  onSave: (s: SavedSession) => void;
  onQuit: () => void;
  onFinish: (s: SavedSession) => void;
}) {
  const zone = getZoneInfo(mapId)!;
  const modeInfo = getPlayMode(mode)!;
  const { data, error } = useMapData(mapId);
  const playable = useMemo(() => new Set(countriesOf(mapId).map((c) => c.id)), [mapId]);
  const speechOk = useCanSpeak();

  const [session, setSession] = useState(initial);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [options, setOptions] = useState<string[]>(() =>
    mode === "qcm" && initial.queue[initial.index] ? buildOptions(initial.queue[initial.index].id, mapId) : []
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [typed, setTyped] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [focus, setFocus] = useState(() => ({
    id: mode === "placer" ? null : initial.queue[initial.index]?.id ?? null,
    key: 1,
  }));
  const inputRef = useRef<HTMLInputElement>(null);
  // Ignores taps for a moment after a new question appears, so a tap meant for
  // "Continuer" (or a double tap) can't land on the next question's answers
  const lockedUntil = useRef(0);

  const item = session.queue[session.index];
  const country = item ? COUNTRY_BY_ID[item.id] : undefined;

  // ── Timer ──
  const [elapsed, setElapsed] = useState(initial.elapsedMs);
  const elapsedRef = useRef(initial.elapsedMs);
  useEffect(() => {
    if (!initial.timer) return;
    let last = performance.now();
    const t = setInterval(() => {
      const now = performance.now();
      if (document.visibilityState === "visible") {
        elapsedRef.current += now - last;
        setElapsed(elapsedRef.current);
      }
      last = now;
    }, 500);
    return () => clearInterval(t);
  }, [initial.timer]);

  // Toast auto-hide
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const answer = useCallback(
    (ok: boolean, extra: Omit<Feedback, "ok" | "perfect"> & { perfect?: boolean }) => {
      if (!item || feedback || Date.now() < lockedUntil.current) return;
      if (ok) {
        playCorrect();
        vibrateCorrect();
      } else {
        playIncorrect();
        vibrateIncorrect();
      }
      onProgress((p) => recordAnswer(p, item.id, mode, ok));

      const queue = [...session.queue];
      if (!ok && session.retries && !item.retry) {
        queue.splice(Math.min(session.index + 4, queue.length), 0, { id: item.id, retry: true });
      }
      const next: SavedSession = {
        ...session,
        queue,
        index: session.index + 1,
        answers: [
          ...session.answers,
          { id: item.id, ok, ...(item.retry ? { retry: true } : {}), ...(extra.typed ? { given: extra.typed } : {}) },
        ],
        elapsedMs: elapsedRef.current,
      };
      setSession(next);
      onSave(next);
      setFeedback({ ok, perfect: extra.perfect ?? ok, ...extra });
      if (mode === "placer" && !ok) setFocus((f) => ({ id: item.id, key: f.key + 1 }));
    },
    [item, feedback, mode, onProgress, onSave, session]
  );

  const goNext = useCallback(() => {
    if (session.index >= session.queue.length) {
      onFinish({ ...session, elapsedMs: elapsedRef.current });
      return;
    }
    const nextId = session.queue[session.index].id;
    lockedUntil.current = Date.now() + 450;
    setFeedback(null);
    setSelected(null);
    setTyped("");
    if (mode === "qcm") setOptions(buildOptions(nextId, mapId));
    setFocus((f) => ({ id: mode === "placer" ? null : nextId, key: f.key + 1 }));
  }, [session, mode, mapId, onFinish]);

  // Perfect answers move on by themselves
  useEffect(() => {
    if (!feedback?.perfect) return;
    const t = setTimeout(goNext, 1100);
    return () => clearTimeout(t);
  }, [feedback, goNext]);

  // Typing mode: focus the field on each question
  useEffect(() => {
    if (mode === "ecrire" && !feedback) inputRef.current?.focus({ preventScroll: true });
  }, [mode, feedback, session.index]);

  // Speak the target name in "placer"
  useEffect(() => {
    if (mode === "placer" && country && !feedback && speechOk) {
      // Only when the voice setting is on in learn mode
      try {
        if (JSON.parse(localStorage.getItem("teacher-loulou-atlas-speak") ?? "true")) speak(country.name);
      } catch {
        /* ignore */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- once per question
  }, [session.index, mode, feedback === null]);

  const quit = () => {
    onSave({ ...session, elapsedMs: elapsedRef.current });
    onQuit();
  };

  // ── Map state ──
  // During feedback the index has already moved on: show the answered question
  const shown = feedback ? session.queue[session.index - 1] : item;
  const shownCountry = shown ? COUNTRY_BY_ID[shown.id] : undefined;
  const mapFills = useMemo(() => {
    const f: Record<string, string> = {};
    if (!shown) return f;
    if (feedback) {
      f[shown.id] = MAP_COLORS.correct;
      if (feedback.chosenId && feedback.chosenId !== shown.id) f[feedback.chosenId] = MAP_COLORS.wrong;
    } else if (mode !== "placer") {
      f[shown.id] = MAP_COLORS.highlight;
    } else if (selected) {
      f[selected] = MAP_COLORS.selected;
    }
    return f;
  }, [shown, feedback, mode, selected]);

  const pulseId = feedback ? shown?.id : mode === "placer" ? null : item?.id;
  const labelIds = feedback && shown ? [shown.id, ...(feedback.chosenId ? [feedback.chosenId] : [])] : undefined;

  const onMapTap = (id: string) => {
    if (mode !== "placer" || feedback) return;
    if (!playable.has(id)) {
      setToast(COUNTRY_BY_ID[id] ? "Ce pays n'est pas dans cette zone 🙂" : "Ça, ce n'est pas un pays indépendant 🙂");
      return;
    }
    setSelected(id);
  };

  const scored = session.answers.filter((a) => !a.retry);
  const good = scored.filter((a) => a.ok).length;
  const isRetry = shown?.retry;

  return (
    <FullscreenShell
      onClose={quit}
      closeLabel="Mettre en pause et quitter"
      title={
        <div className="leading-tight">
          <p className="truncate text-sm font-bold text-warm-800">
            {modeInfo.emoji} {modeInfo.name} · {zone.name}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-warm-200">
              <div
                className="h-full rounded-full bg-accent-500 transition-all"
                style={{ width: `${(scored.length / Math.max(1, session.total)) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium tabular-nums text-warm-600">
              {scored.length}/{session.total}
            </span>
          </div>
        </div>
      }
      right={
        <>
          {session.timer && (
            <span className="flex items-center gap-1 rounded-lg bg-warm-100 px-2 py-1 text-sm font-semibold tabular-nums text-warm-700">
              <Timer className="h-4 w-4" /> {formatTime(elapsed)}
            </span>
          )}
          <span className="rounded-lg bg-success-100 px-2 py-1 text-sm font-bold tabular-nums text-success-600">
            ✓ {good}
          </span>
        </>
      }
    >
      <div className="relative min-h-0 flex-1">
        {data ? (
          <AtlasMap
            data={data}
            playable={playable}
            fills={mapFills}
            pulseId={pulseId}
            focusId={focus.id}
            focusKey={focus.key}
            labelIds={labelIds}
            onTap={onMapTap}
            ariaLabel={`Carte : ${zone.name}`}
          />
        ) : (
          <MapPlaceholder error={error} />
        )}
        {toast && (
          <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-center px-4">
            <span className="rounded-full bg-warm-800/90 px-4 py-2 text-sm font-medium text-warm-50 shadow-lg">{toast}</span>
          </div>
        )}
      </div>

      <SidePanel>
        {shownCountry && (
          <div className="space-y-3">
            <div className="flex min-h-11 items-center gap-2">
              {isRetry && (
                <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">🔁 2ᵉ chance</span>
              )}
              <p className="flex-1 text-lg font-bold text-warm-900">
                {mode === "qcm" && "Quel est ce pays ?"}
                {mode === "ecrire" && "Écris le nom de ce pays"}
                {mode === "placer" && <>Où est {withArticle(shownCountry)} ?</>}
              </p>
              {mode === "placer" && speechOk && (
                <button
                  type="button"
                  onClick={() => speak(shownCountry.name)}
                  aria-label="Écouter le nom"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700 active:scale-90"
                >
                  <Volume2 className="h-5 w-5" />
                </button>
              )}
            </div>

            {feedback ? (
              <FeedbackBox feedback={feedback} country={shownCountry} mode={mode} onNext={goNext} />
            ) : mode === "qcm" ? (
              <div className="grid grid-cols-2 gap-2">
                {options.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => answer(id === item!.id, { chosenId: id })}
                    className="min-h-14 rounded-xl border-2 border-warm-200 bg-white px-2 py-2 text-[0.95rem] font-semibold leading-tight text-warm-800 shadow-sm transition-all [hyphens:auto] active:scale-95 active:bg-accent-100"
                    lang="fr"
                  >
                    {COUNTRY_BY_ID[id].name}
                  </button>
                ))}
              </div>
            ) : mode === "placer" ? (
              <div className="space-y-2">
                <p className="text-sm text-warm-600">
                  {selected ? "Tu as choisi un pays (en bleu). Tu confirmes ?" : "Zoome avec deux doigts, puis touche le pays."}
                </p>
                <button
                  type="button"
                  disabled={!selected}
                  onClick={() => selected && answer(selected === item!.id, { chosenId: selected })}
                  className="h-12 w-full rounded-xl bg-accent-600 font-bold text-white shadow transition-all active:scale-95 disabled:bg-warm-300"
                >
                  Valider
                </button>
              </div>
            ) : (
              <form
                className="space-y-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!typed.trim()) return;
                  const check = checkTypedAnswer(typed, COUNTRY_BY_ID[item!.id]);
                  const ok = check.kind === "exact" || check.kind === "typo";
                  answer(ok, {
                    typed,
                    check,
                    perfect: check.kind === "exact",
                    chosenId: check.kind === "other" ? check.other.id : undefined,
                  });
                }}
              >
                <input
                  ref={inputRef}
                  value={typed}
                  onChange={(e) => setTyped(e.target.value)}
                  placeholder="Nom du pays…"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="words"
                  spellCheck={false}
                  enterKeyHint="done"
                  aria-label="Nom du pays"
                  className="h-12 w-full rounded-xl border-2 border-warm-300 bg-white px-3 text-lg text-warm-900 outline-none focus:border-accent-500"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => answer(false, { skipped: true })}
                    className="h-12 rounded-xl border border-warm-300 bg-white px-3 text-sm font-medium text-warm-700 active:scale-95"
                  >
                    Je ne sais pas
                  </button>
                  <button
                    type="submit"
                    disabled={!typed.trim()}
                    className="h-12 flex-1 rounded-xl bg-accent-600 font-bold text-white shadow active:scale-95 disabled:bg-warm-300"
                  >
                    Valider
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </SidePanel>
    </FullscreenShell>
  );
}

function FeedbackBox({
  feedback,
  country,
  mode,
  onNext,
}: {
  feedback: Feedback;
  country: Country;
  mode: PlayMode;
  onNext: () => void;
}) {
  const name = withArticle(country);
  const chosen = feedback.chosenId ? COUNTRY_BY_ID[feedback.chosenId] : undefined;
  const check = feedback.check;
  let message: React.ReactNode;

  if (feedback.ok && check?.kind === "typo") {
    message = (
      <>
        ✅ Accepté ! On l&apos;écrit : <strong>{country.name}</strong>
      </>
    );
  } else if (feedback.ok) {
    message = (
      <>
        ✅ Bravo ! C&apos;est bien <strong>{name}</strong>.
      </>
    );
  } else if (feedback.skipped) {
    message = (
      <>
        C&apos;était <strong>{name}</strong>. Tu l&apos;auras la prochaine fois 💪
      </>
    );
  } else if (check?.kind === "near") {
    message = (
      <>
        🤏 Presque ! {check.hint} La réponse : <strong>{country.name}</strong>.
      </>
    );
  } else if (mode === "placer" && chosen) {
    message = (
      <>
        ❌ Là, c&apos;est {withArticle(chosen)} (en rouge). <strong>{capitalize(name)}</strong> est en vert.
      </>
    );
  } else if (chosen) {
    message = (
      <>
        ❌ Non, {withArticle(chosen)} est en rouge. Ici, c&apos;est <strong>{name}</strong>.
      </>
    );
  } else {
    message = (
      <>
        ❌ C&apos;était <strong>{name}</strong>.
        {feedback.typed && <span className="block text-sm text-warm-600">Tu as écrit : « {feedback.typed} »</span>}
      </>
    );
  }

  return (
    <div className="space-y-2" aria-live="assertive">
      <div
        className={cn(
          "rounded-xl border-2 p-3 text-base leading-snug",
          feedback.ok ? "border-green-300 bg-green-50 text-green-900" : "border-red-200 bg-red-50 text-red-900"
        )}
      >
        {message}
      </div>
      {feedback.perfect ? (
        // Moves on by itself: no button here, so nothing to tap where the next answers appear
        <div className="flex h-12 flex-col justify-center gap-1.5 px-1" aria-hidden>
          <span className="text-sm font-medium text-warm-500">Question suivante…</span>
          <span className="h-1.5 overflow-hidden rounded-full bg-warm-200">
            <span className="atlas-next-bar block h-full rounded-full bg-success-500" />
          </span>
        </div>
      ) : (
        <button
          type="button"
          onClick={onNext}
          autoFocus
          className="h-12 w-full rounded-xl bg-warm-800 font-bold text-warm-50 shadow active:scale-95"
        >
          Continuer →
        </button>
      )}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════
// Result
// ═════════════════════════════════════════════════════════════════

function ResultView({
  mapId,
  mode,
  session,
  onReplay,
  onNew,
}: {
  mapId: MapId;
  mode: PlayMode;
  session: SavedSession;
  onReplay: (ids: string[]) => void;
  onNew: () => void;
}) {
  const router = useRouter();
  const zone = getZoneInfo(mapId)!;
  const modeInfo = getPlayMode(mode)!;
  const { settings } = useAccessibility();
  const { data } = useMapData(mapId);
  const playable = useMemo(() => new Set(countriesOf(mapId).map((c) => c.id)), [mapId]);

  const scored = useMemo(() => session.answers.filter((a) => !a.retry), [session]);
  const scoredIds = useMemo(() => scored.map((a) => a.id), [scored]);
  const good = scored.filter((a) => a.ok).length;
  const pct = scored.length ? Math.round((good / scored.length) * 100) : 0;
  const errors = scored.filter((a) => !a.ok).map((a) => a.id);
  const passed = pct >= PASSING;

  const fills = useMemo(() => {
    const f: Record<string, string> = {};
    for (const a of scored) f[a.id] = a.ok ? MAP_COLORS.mastered : MAP_COLORS.review;
    return f;
  }, [scored]);

  const celebrated = useRef(false);
  useEffect(() => {
    if (!passed || celebrated.current) return;
    celebrated.current = true;
    playVictory();
    if (settings.confetti) {
      import("canvas-confetti").then(({ default: confetti }) =>
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } })
      );
    }
  }, [passed, settings.confetti]);

  const emoji = pct === 100 ? "🏆" : pct >= 80 ? "🌟" : passed ? "👍" : "💪";
  const message =
    pct === 100
      ? "Parfait, aucune erreur !"
      : pct >= 80
        ? "Excellent travail !"
        : passed
          ? "Bien joué, continue comme ça !"
          : "Chaque essai t'aide à retenir. On recommence ?";

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <div className="rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm">
        <p className="text-5xl">{emoji}</p>
        <p className="mt-2 text-4xl font-bold text-warm-900">{pct} %</p>
        <p className="text-warm-600">
          {good} / {scored.length} · {modeInfo.emoji} {modeInfo.name} · {zone.name}
        </p>
        {session.timer && <p className="mt-1 text-sm text-warm-500">⏱️ {formatTime(session.elapsedMs)}</p>}
        <p className="mt-3 text-lg font-semibold text-warm-800">{message}</p>
      </div>

      {data && (
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-warm-200">
          <AtlasMap
            data={data}
            playable={playable}
            fills={fills}
            fitIds={scoredIds}
            interactive={false}
            ariaLabel="Résultat sur la carte"
          />
        </div>
      )}
      <p className="flex justify-center gap-4 text-sm text-warm-600">
        <Legend color={MAP_COLORS.mastered} label="Réussi" />
        <Legend color={MAP_COLORS.review} label="Raté" />
      </p>

      {errors.length > 0 && (
        <div className="rounded-2xl border border-warm-200 bg-white p-4">
          <p className="mb-2 font-semibold text-warm-800">À revoir ({errors.length})</p>
          <div className="flex flex-wrap gap-2">
            {errors.map((id) => (
              <span key={id} className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                {COUNTRY_BY_ID[id].name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-2">
        {errors.length > 0 && (
          <button
            type="button"
            onClick={() => onReplay(shuffle(errors))}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-700 text-lg font-bold text-white shadow-lg active:scale-[0.98]"
          >
            <RotateCcw className="h-5 w-5" /> Rejouer mes erreurs
          </button>
        )}
        <button
          type="button"
          onClick={onNew}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-warm-300 bg-white font-semibold text-warm-800 active:scale-95"
        >
          <Check className="h-5 w-5" /> Nouvelle partie
        </button>
        <button
          type="button"
          onClick={() => router.push(`/atlas/${mapId}`)}
          className="h-12 w-full rounded-xl font-medium text-warm-600 hover:bg-warm-100"
        >
          Retour : {zone.name}
        </button>
      </div>
    </div>
  );
}

export function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-3.5 w-3.5 rounded border border-warm-400" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}
