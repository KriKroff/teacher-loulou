import type { MapId } from "@/data/atlas/countries";

export type PlayMode = "qcm" | "placer" | "ecrire";

export const PLAY_MODES: {
  id: PlayMode;
  name: string;
  emoji: string;
  level: string;
  description: string;
  badge: string;
}[] = [
  {
    id: "qcm",
    name: "Reconnaître",
    emoji: "🟢",
    level: "Niveau 1",
    description: "Un pays s'allume sur la carte : choisis son nom parmi 4.",
    badge: "bg-green-100 text-green-800 border-green-300",
  },
  {
    id: "placer",
    name: "Situer",
    emoji: "🟡",
    level: "Niveau 2",
    description: "On te donne un nom : touche le bon pays sur la carte.",
    badge: "bg-yellow-100 text-yellow-800 border-yellow-300",
  },
  {
    id: "ecrire",
    name: "Nommer",
    emoji: "🔴",
    level: "Niveau 3",
    description: "Un pays s'allume : écris son nom (les petites fautes sont pardonnées).",
    badge: "bg-red-100 text-red-800 border-red-300",
  },
];

export function getPlayMode(id: string) {
  return PLAY_MODES.find((m) => m.id === id);
}

// ── Per-country statistics ───────────────────────────────────────

export interface Stat {
  /** attempts */
  n: number;
  /** correct answers */
  ok: number;
  /** current streak of correct answers */
  streak: number;
  /** last answer was wrong */
  wrong: boolean;
}

export type AtlasProgress = Record<string, Partial<Record<PlayMode, Stat>>>;

export const PROGRESS_KEY = "teacher-loulou-atlas";
export const EMPTY_PROGRESS: AtlasProgress = {};

/** Correct answers in a row needed to call a country "maîtrisé". */
export const MASTERY_STREAK = 3;

export type Mastery = "new" | "learning" | "review" | "mastered";

export function masteryOf(stat: Stat | undefined): Mastery {
  if (!stat || stat.n === 0) return "new";
  if (stat.wrong) return "review";
  if (stat.streak >= MASTERY_STREAK) return "mastered";
  return "learning";
}

export function recordAnswer(
  progress: AtlasProgress,
  countryId: string,
  mode: PlayMode,
  correct: boolean
): AtlasProgress {
  const prev = progress[countryId]?.[mode] ?? { n: 0, ok: 0, streak: 0, wrong: false };
  const next: Stat = {
    n: prev.n + 1,
    ok: prev.ok + (correct ? 1 : 0),
    streak: correct ? prev.streak + 1 : 0,
    wrong: !correct,
  };
  return { ...progress, [countryId]: { ...progress[countryId], [mode]: next } };
}

export function countByMastery(progress: AtlasProgress, ids: string[], mode: PlayMode) {
  const counts: Record<Mastery, number> = { new: 0, learning: 0, review: 0, mastered: 0 };
  for (const id of ids) counts[masteryOf(progress[id]?.[mode])]++;
  return counts;
}

/** Share of (country, mode) pairs mastered — the global progress bar. */
export function overallMastery(progress: AtlasProgress, ids: string[]): number {
  if (!ids.length) return 0;
  let mastered = 0;
  for (const id of ids)
    for (const m of PLAY_MODES) if (masteryOf(progress[id]?.[m.id]) === "mastered") mastered++;
  return mastered / (ids.length * PLAY_MODES.length);
}

export function resetProgress(progress: AtlasProgress, ids: string[]): AtlasProgress {
  const next = { ...progress };
  for (const id of ids) delete next[id];
  return next;
}

// ── Question selection ───────────────────────────────────────────

/**
 * Known countries keep coming back (never weight 0), mistakes come back
 * much more often.
 */
const WEIGHTS: Record<Mastery, number> = { new: 2, learning: 2.5, review: 6, mastered: 0.8 };

/** Weighted random order (Efraimidis–Spirakis), then keep the first `count`. */
export function pickCountries(
  ids: string[],
  count: number,
  progress: AtlasProgress,
  mode: PlayMode
): string[] {
  return ids
    .map((id) => ({ id, key: Math.random() ** (1 / WEIGHTS[masteryOf(progress[id]?.[mode])]) }))
    .sort((a, b) => b.key - a.key)
    .slice(0, count)
    .map((x) => x.id);
}

export function mistakesOf(progress: AtlasProgress, ids: string[], mode: PlayMode): string[] {
  return ids.filter((id) => masteryOf(progress[id]?.[mode]) === "review");
}

// ── Saved sessions (pause / resume) ──────────────────────────────

export interface SessionAnswer {
  id: string;
  ok: boolean;
  /** Second chance inside the same session — not counted in the score */
  retry?: boolean;
  /** What was typed or picked when wrong */
  given?: string;
}

export interface QueueItem {
  id: string;
  /** Second chance after a mistake */
  retry?: boolean;
}

export interface SavedSession {
  queue: QueueItem[];
  index: number;
  answers: SessionAnswer[];
  /** Number of scored questions (queue length before retries) */
  total: number;
  timer: boolean;
  elapsedMs: number;
  /** Wrong answers come back a few questions later */
  retries: boolean;
}

export function sessionKey(map: MapId, mode: PlayMode) {
  return `teacher-loulou-atlas-session:${map}:${mode}`;
}
