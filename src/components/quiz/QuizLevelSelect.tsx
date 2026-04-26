"use client";

import Link from "next/link";
import {ChevronRight, HelpCircle, List, RotateCcw} from "lucide-react";
import {useState} from "react";
import {cn} from "@/lib/utils";
import type {Quiz, QuizLevel} from "@/types";
import {RESOURCE_TYPE_NAMES} from "@/types";
import {ResetProgressionDialog} from "./ResetProgressionDialog";
import {useProgress} from "@/hooks/useProgress";

const LEVEL_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  facile: { bg: "bg-green-50", border: "border-green-400", text: "text-green-700" },
  intermediaire: { bg: "bg-yellow-50", border: "border-yellow-400", text: "text-yellow-700" },
  expert: { bg: "bg-red-50", border: "border-red-400", text: "text-red-700" },
};

function getLevelColors(levelId: string) {
  return LEVEL_COLORS[levelId] ?? {
    bg: "bg-warm-50",
    border: "border-warm-300",
    text: "text-warm-700",
  };
}

interface QuizLevelSelectProps {
  quiz: Quiz;
  ficheHref: string | null;
  questionsHref?: string | null;
  resourceSlug: string;
  onSelectLevel: (level: QuizLevel) => void;
}

export function QuizLevelSelect({
  quiz,
  questionsHref,
  resourceSlug,
  onSelectLevel,
}: QuizLevelSelectProps) {
  const { resetQuizProgress } = useProgress();
  const [resetTarget, setResetTarget] = useState<{ levelId?: string; levelName?: string } | null>(null);

  const handleResetConfirm = () => {
    if (!resetTarget) return;
    resetQuizProgress(resourceSlug, resetTarget.levelId);
    setResetTarget(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
          <HelpCircle className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-medium text-purple-600">{RESOURCE_TYPE_NAMES.quiz}</span>
          <h1 className="text-xl font-bold text-warm-800">{quiz.title}</h1>
        </div>
      </div>

      <div className="rounded-2xl border border-warm-200 bg-white/80 p-5">
        <p className="mb-5 text-warm-700">{quiz.description}</p>
        <div className="space-y-3">
          {quiz.levels!.map((level) => {
            const c = getLevelColors(level.id);
            return (
              <div key={level.id} className="space-y-1">
                <button
                  onClick={() => onSelectLevel(level)}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all hover:scale-[1.01] active:scale-[0.99]",
                    c.bg, c.border
                  )}
                >
                  <span className="text-2xl leading-none">{level.emoji}</span>
                  <div className="flex-1">
                    <div className={cn("font-bold text-base", c.text)}>{level.name}</div>
                    <div className="mt-0.5 text-sm text-warm-600">{level.description}</div>
                    <div className="mt-1.5 text-xs text-warm-500">
                      {quiz.sessionSize ?? 10} questions par session · {level.questions.length} au total
                    </div>
                  </div>
                  <ChevronRight className={cn("mt-1 h-5 w-5 shrink-0", c.text)} />
                </button>
                {/* Reset button for this level */}
                <button
                  onClick={() => setResetTarget({ levelId: level.id, levelName: level.name })}
                  className="flex items-center gap-1 px-2 py-0.5 text-xs text-warm-400 hover:text-red-400 transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                  Réinitialiser ma progression
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer links */}
      <div className="flex flex-col items-center gap-2">
        {questionsHref && (
          <Link
            href={questionsHref}
            className="flex items-center gap-1.5 text-sm text-warm-500 hover:text-accent-600 transition-colors"
          >
            <List className="h-4 w-4" />
            Voir toutes les questions →
          </Link>
        )}
        <button
          onClick={() => setResetTarget({})}
          className="flex items-center gap-1.5 text-xs text-warm-400 hover:text-red-400 transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
          Réinitialiser toute ma progression sur ce quiz
        </button>
      </div>

      {/* Reset confirmation dialog */}
      {resetTarget !== null && (
        <ResetProgressionDialog
          levelName={resetTarget.levelName}
          onConfirm={handleResetConfirm}
          onCancel={() => setResetTarget(null)}
        />
      )}
    </div>
  );
}
