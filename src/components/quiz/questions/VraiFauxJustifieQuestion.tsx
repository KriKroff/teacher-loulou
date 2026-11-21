"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";
import { InlineMarkdown } from "@/components/quiz/InlineMarkdown";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * "Vrai ou faux ? Justifie." — step 1: Vrai / Faux, step 2: pick the sentence
 * that justifies (or corrects) the statement. Both must be right.
 */
export function VraiFauxJustifieQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [verdict, setVerdict] = useState<string | null>(null);
  const [justif, setJustif] = useState<string | null>(null);
  const [justifications] = useState(() => shuffle(question.justifications ?? []));

  const correctVerdict = question.correctAnswer as string;
  const correctJustif = question.correctJustification;

  const handleValidate = () => {
    if (showFeedback || !verdict || !justif) return;
    onAnswer(verdict === correctVerdict && justif === correctJustif, [verdict, justif]);
  };

  const optionClass = (isSelected: boolean, isRight: boolean) => {
    if (showFeedback) {
      if (isRight) return "border-success-500 bg-success-100 text-success-700";
      if (isSelected) return "border-red-400 bg-red-50 text-red-600";
      return "border-warm-200 bg-warm-50 opacity-50";
    }
    return isSelected
      ? "border-accent-500 bg-accent-100 text-accent-800"
      : "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">1. Vrai ou faux ?</p>
        <div className="grid grid-cols-2 gap-2.5">
          {["Vrai", "Faux"].map((v) => (
            <button
              key={v}
              type="button"
              disabled={showFeedback}
              aria-pressed={verdict === v}
              onClick={() => setVerdict(v)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all",
                optionClass(verdict === v, v === correctVerdict)
              )}
            >
              {showFeedback && v === correctVerdict && <CheckCircle2 className="h-4 w-4" />}
              {showFeedback && verdict === v && v !== correctVerdict && <XCircle className="h-4 w-4" />}
              {v}
            </button>
          ))}
        </div>
      </div>

      {(verdict || showFeedback) && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">
            2. Choisis la bonne justification
          </p>
          <div className="space-y-2">
            {justifications.map((j) => (
              <button
                key={j}
                type="button"
                disabled={showFeedback}
                aria-pressed={justif === j}
                onClick={() => setJustif(j)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                  optionClass(justif === j, j === correctJustif)
                )}
              >
                {showFeedback && j === correctJustif && <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />}
                {showFeedback && justif === j && j !== correctJustif && <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
                <span><InlineMarkdown text={j} /></span>
              </button>
            ))}
          </div>
        </div>
      )}

      {!showFeedback && (
        <button
          type="button"
          onClick={handleValidate}
          disabled={!verdict || !justif}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            verdict && justif
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          Valider
        </button>
      )}
    </div>
  );
}
