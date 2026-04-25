"use client";

import Link from "next/link";
import { HelpCircle, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Quiz, QuizLevel } from "@/types";
import { RESOURCE_TYPE_NAMES } from "@/types";

const LEVEL_BADGE: Record<string, string> = {
  facile: "bg-green-100 text-green-700",
  intermediaire: "bg-yellow-100 text-yellow-700",
  expert: "bg-red-100 text-red-700",
};

interface QuizIntroProps {
  quiz: Quiz;
  selectedLevel: QuizLevel | null;
  hasLevels: boolean;
  ficheHref: string | null;
  onStart: () => void;
  onChangeLevel: () => void;
}

export function QuizIntro({ quiz, selectedLevel, hasLevels, ficheHref, onStart, onChangeLevel }: QuizIntroProps) {
  const levelBadgeClass = selectedLevel ? (LEVEL_BADGE[selectedLevel.id] ?? "bg-warm-100 text-warm-700") : null;

  return (
    <div className="space-y-4">
      {ficheHref && (
        <Link
          href={ficheHref}
          className="flex items-center justify-center gap-2 rounded-2xl border-2 border-accent-300 bg-accent-50 px-6 py-3 text-sm font-bold text-accent-700 transition-all hover:bg-accent-100 active:scale-95"
        >
          <BookOpen className="h-4 w-4" />
          Revoir la fiche avant de commencer →
        </Link>
      )}

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-medium text-purple-600">{RESOURCE_TYPE_NAMES.quiz}</span>
          <h1 className="text-xl font-bold text-warm-800">{quiz.title}</h1>
        </div>
      </div>

      <div className="rounded-2xl border border-warm-200 bg-white/80 p-6 text-center">
        {selectedLevel && levelBadgeClass && (
          <div className="mb-3 flex justify-center">
            <span className={cn("rounded-full px-3 py-1 text-sm font-semibold", levelBadgeClass)}>
              {selectedLevel.emoji} Niveau : {selectedLevel.name}
            </span>
          </div>
        )}
        <p className="mb-2 text-warm-700">
          {selectedLevel ? selectedLevel.description : quiz.description}
        </p>
        <p className="mb-6 text-sm text-warm-500">
          {quiz.sessionSize ?? 10} questions · Score minimum : {quiz.passingScore}%
        </p>
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={onStart}
            className="rounded-xl bg-accent-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg active:scale-95"
          >
            C&apos;est parti ! 🚀
          </button>
          {hasLevels && (
            <button
              onClick={onChangeLevel}
              className="text-sm text-warm-500 hover:text-accent-600"
            >
              ← Changer de niveau
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
