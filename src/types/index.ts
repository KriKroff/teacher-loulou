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
  content?: string;
  quizData?: Quiz;
  videoUrl?: string;
  externalUrl?: string;
  htmlPath?: string;
}

export interface Quiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: "qcm" | "vrai-faux" | "texte-a-trous" | "association";
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  hint?: string;
}

export interface UserProgress {
  resourceSlug: string;
  level: SchoolLevel;
  subject: Subject;
  lastAccessedAt: string;
  completedAt?: string;
  quizScores?: number[];
  currentPosition?: number;
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
