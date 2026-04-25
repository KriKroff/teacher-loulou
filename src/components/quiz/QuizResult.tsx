"use client";

import Link from "next/link";
import { Trophy, RotateCcw, BookOpen, List, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import type { Quiz, QuizLevel } from "@/types";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { playVictory } from "@/lib/sounds";

const LEVEL_BADGE: Record<string, string> = {
  facile: "bg-green-100 text-green-700",
  intermediaire: "bg-yellow-100 text-yellow-700",
  expert: "bg-red-100 text-red-700",
};

const LEVEL_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  facile: { bg: "bg-green-50", border: "border-green-400", text: "text-green-700" },
  intermediaire: { bg: "bg-yellow-50", border: "border-yellow-400", text: "text-yellow-700" },
  expert: { bg: "bg-red-50", border: "border-red-400", text: "text-red-700" },
};

const LEVEL_ORDER = ["facile", "intermediaire", "expert"];

function getLevelColors(levelId: string) {
  return LEVEL_COLORS[levelId] ?? {
    bg: "bg-warm-50",
    border: "border-warm-300",
    text: "text-warm-700",
  };
}

interface QuizResultProps {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  selectedLevel: QuizLevel | null;
  hasLevels: boolean;
  ficheHref: string | null;
  questionsHref?: string | null;
  onRestart: () => void;
  onSelectLevel: (level: QuizLevel) => void;
  onNextLevel?: () => void;
}

export function QuizResult({
  quiz,
  score,
  totalQuestions,
  selectedLevel,
  hasLevels,
  ficheHref,
  questionsHref,
  onRestart,
  onSelectLevel,
  onNextLevel,
}: QuizResultProps) {
  const { settings } = useAccessibility();
  const finalScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const passed = finalScore >= quiz.passingScore;
  const levelBadgeClass = selectedLevel ? (LEVEL_BADGE[selectedLevel.id] ?? "bg-warm-100 text-warm-700") : null;

  // Determine next level
  const nextLevel = (() => {
    if (!hasLevels || !quiz.levels || !selectedLevel) return null;
    const idx = LEVEL_ORDER.indexOf(selectedLevel.id);
    if (idx < 0 || idx >= LEVEL_ORDER.length - 1) return null;
    const nextId = LEVEL_ORDER[idx + 1];
    return quiz.levels.find((l) => l.id === nextId) ?? null;
  })();

  // Confetti on success
  const confettiRef = useRef(false);
  useEffect(() => {
    if (!passed || confettiRef.current) return;
    confettiRef.current = true;

    if (settings.confetti && typeof window !== "undefined") {
      import("canvas-confetti").then(({ default: confetti }) => {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      }).catch(() => {/* ignore */});
    }

    playVictory();
  }, [passed, settings.confetti]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-warm-200 bg-white/80 p-6 text-center">
        <div className="mb-4">
          {passed
            ? <Trophy className="mx-auto h-16 w-16 text-amber-400" />
            : <RotateCcw className="mx-auto h-16 w-16 text-warm-400" />}
        </div>

        {selectedLevel && levelBadgeClass && (
          <div className="mb-3 flex justify-center">
            <span className={cn("rounded-full px-3 py-1 text-sm font-semibold", levelBadgeClass)}>
              {selectedLevel.emoji} Niveau : {selectedLevel.name}
            </span>
          </div>
        )}

        <h2 className="mb-2 text-2xl font-bold text-warm-800">
          {passed ? "Bravo ! 🎉" : "Pas mal ! 💪"}
        </h2>
        <p className="mb-1 text-lg text-warm-700">
          Tu as obtenu{" "}
          <span className={cn("font-bold", passed ? "text-success-600" : "text-warm-600")}>
            {finalScore}%
          </span>
        </p>
        <p className="mb-6 text-sm text-warm-500">
          {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""} sur {totalQuestions}
        </p>

        {passed ? (
          <p className="mb-6 text-warm-600">Super travail ! Tu maîtrises bien ce sujet. 🌟</p>
        ) : (
          <p className="mb-6 text-warm-600">Continue comme ça, tu progresses ! Réessaie pour améliorer ton score. 🚀</p>
        )}

        <div className="flex flex-col items-center gap-3">
          {/* Next level CTA */}
          {passed && nextLevel && onNextLevel && (
            <button
              onClick={onNextLevel}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 font-bold text-white shadow-md transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95"
            >
              <Rocket className="h-5 w-5" />
              Passer au niveau suivant {nextLevel.emoji}
            </button>
          )}

          <button
            onClick={onRestart}
            className="rounded-xl bg-accent-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            {hasLevels ? "Choisir un niveau" : "Recommencer"}
          </button>
          {ficheHref && (
            <Link
              href={ficheHref}
              className="flex items-center gap-1.5 text-sm text-warm-600 hover:text-accent-600"
            >
              <BookOpen className="h-4 w-4" />
              Revoir la fiche de révision
            </Link>
          )}
          {questionsHref && (
            <Link
              href={questionsHref}
              className="flex items-center gap-1.5 text-sm text-warm-500 hover:text-accent-600 transition-colors"
            >
              <List className="h-4 w-4" />
              Voir toutes les questions
            </Link>
          )}
        </div>
      </div>

      {hasLevels && quiz.levels && (
        <div className="rounded-2xl border border-warm-200 bg-white/80 p-4">
          <p className="mb-3 text-sm font-semibold text-warm-700">Changer de niveau :</p>
          <div className="flex flex-wrap gap-2">
            {quiz.levels.map((level) => {
              const c = getLevelColors(level.id);
              const isCurrent = selectedLevel?.id === level.id;
              return (
                <button
                  key={level.id}
                  onClick={() => onSelectLevel(level)}
                  disabled={isCurrent}
                  className={cn(
                    "flex items-center gap-1.5 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all",
                    isCurrent
                      ? cn(c.bg, c.border, c.text, "opacity-50 cursor-default")
                      : cn(c.bg, c.border, c.text, "hover:scale-[1.03] active:scale-[0.97]")
                  )}
                >
                  <span>{level.emoji}</span>
                  <span>{level.name}</span>
                  {isCurrent && <span className="ml-1 text-xs opacity-70">(actuel)</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
