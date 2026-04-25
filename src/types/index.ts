export type ResourceType =
  | "cours"
  | "fiche"
  | "exercice"
  | "quiz"
  | "video"
  | "lien"
  | "html";

export type SchoolLevel =
  | "6e"
  | "5e"
  | "4e"
  | "3e"
  | "2nde"
  | "1ere"
  | "terminale";

export type Subject =
  | "francais"
  | "mathematiques"
  | "svt"
  | "histoire-geo"
  | "anglais"
  | "physique-chimie"
  | "espagnol"
  | "technologie";

export interface Resource {
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  level: SchoolLevel;
  subject: Subject;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  /** Path to .mdx file under src/data/, resolved at build time */
  mdxPath?: string;
  quizData?: Quiz;
  videoUrl?: string;
  externalUrl?: string;
  htmlPath?: string;
  chapter?: string;
}

export interface QuizLevel {
  id: string;
  name: string;
  emoji: string;
  description: string;
  questions: QuizQuestion[];
}

export interface Quiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number;
  levels?: QuizLevel[];
  /** Number of questions per session (default: 10) */
  sessionSize?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type:
    | "qcm"
    | "vrai-faux"
    | "texte-a-trous"
    | "texte-a-trous-select"
    | "conjugaison"
    | "association"
    | "qcm-multiple"
    | "ordre"
    | "nombre"
    | "slider"
    | "intrus"
    // Phase 8 — new interactive types
    | "drag-on-image"
    | "click-on-image"
    | "audio-listen"
    | "tri-categories"
    | "completion-tableau";
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  hint?: string;
  pairs?: { left: string; right: string }[]; // for "association" type
  /** Allowed tolerance for "slider" and "nombre" types (default: 0 — exact match) */
  tolerance?: number;

  // ── drag-on-image ──────────────────────────────────────────────────────────
  /** Path under /public, e.g. /images/svt/appareil-feminin.jpg */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Drop zones on the image. x/y in % of image dimensions (0-100). */
  zones?: { id: string; x: number; y: number; correctLabel: string }[];
  /** Label bank to drag onto zones (may include distractors). */
  labels?: string[];

  // ── click-on-image ─────────────────────────────────────────────────────────
  // imageSrc and imageAlt are shared with drag-on-image
  /** Clickable rectangular zones. x, y, w, h in % of image dimensions. */
  clickZones?: {
    id: string;
    x: number;
    y: number;
    w: number;
    h: number;
    isCorrect: boolean;
    label?: string;
  }[];

  // ── audio-listen ───────────────────────────────────────────────────────────
  /** Path under /public/sounds/ or data: URI. Rendered as an <audio> element. */
  audioSrc?: string;
  // options + correctAnswer reuse the same fields as qcm

  // ── tri-categories ─────────────────────────────────────────────────────────
  /** Items to classify into categories. */
  items?: { id: string; label: string }[];
  /** Target categories. correctItemIds lists which item ids belong here. */
  categories?: { id: string; label: string; correctItemIds: string[] }[];

  // ── completion-tableau ─────────────────────────────────────────────────────
  /** Table to complete. Cells are either fixed values or blanks with a correct answer. */
  table?: {
    headers: string[];
    rows: ({ value: string } | { blank: true; correctAnswer: string })[][];
  };
}

export interface QuizQuestionHistory {
  questionId: string;
  lastResult: "correct" | "incorrect";
  attempts: number;
  lastSeenAt: string;
}

export interface UserProgress {
  resourceSlug: string;
  level: SchoolLevel;
  subject: Subject;
  lastAccessedAt: string;
  completedAt?: string;
  quizScores?: number[];
  currentPosition?: number;
  // keyed by quizLevelId ("facile", "intermediaire", "expert", or "__root__" for flat quizzes)
  questionHistory?: Record<string, QuizQuestionHistory[]>;
}

export interface AccessibilitySettings {
  font: "default" | "opendyslexic";
  fontSize: number; // 1 = normal, 1.1, 1.2, etc.
  letterSpacing: number; // em
  wordSpacing: number; // em
  lineHeight: number;
  readingRuler: boolean;
  highContrast: boolean;
  syllableColors: boolean;
  sounds: boolean;      // quiz sound effects via Web Audio API (default false — can distract ADHD)
  vibration: boolean;   // haptic feedback on mobile (default true)
  confetti: boolean;    // confetti animation on quiz success (default true)
}

export const DEFAULT_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  font: "default",
  fontSize: 1,
  letterSpacing: 0.05,
  wordSpacing: 0.1,
  lineHeight: 1.8,
  readingRuler: false,
  highContrast: false,
  syllableColors: false,
  sounds: false,
  vibration: true,
  confetti: true,
};

// Display names for UI
export const LEVEL_NAMES: Record<SchoolLevel, string> = {
  "6e": "6ème",
  "5e": "5ème",
  "4e": "4ème",
  "3e": "3ème",
  "2nde": "2nde",
  "1ere": "1ère",
  terminale: "Terminale",
};

export const SUBJECT_NAMES: Record<Subject, string> = {
  francais: "Français",
  mathematiques: "Mathématiques",
  svt: "SVT",
  "histoire-geo": "Histoire-Géo",
  anglais: "Anglais",
  "physique-chimie": "Physique-Chimie",
  espagnol: "Espagnol",
  technologie: "Technologie",
};

export const RESOURCE_TYPE_NAMES: Record<ResourceType, string> = {
  cours: "Cours",
  fiche: "Fiche",
  exercice: "Exercice",
  quiz: "Quiz",
  video: "Vidéo",
  lien: "Lien",
  html: "Page",
};

export const SUBJECT_ICONS: Record<Subject, string> = {
  francais: "📖",
  mathematiques: "🔢",
  svt: "🌿",
  "histoire-geo": "🌍",
  anglais: "🇬🇧",
  "physique-chimie": "⚗️",
  espagnol: "🇪🇸",
  technologie: "💻",
};

export const SUBJECT_COLORS: Record<Subject, string> = {
  francais: "bg-rose-100 text-rose-800 border-rose-200",
  mathematiques: "bg-blue-100 text-blue-800 border-blue-200",
  svt: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "histoire-geo": "bg-amber-100 text-amber-800 border-amber-200",
  anglais: "bg-violet-100 text-violet-800 border-violet-200",
  "physique-chimie": "bg-cyan-100 text-cyan-800 border-cyan-200",
  espagnol: "bg-orange-100 text-orange-800 border-orange-200",
  technologie: "bg-slate-100 text-slate-800 border-slate-200",
};
