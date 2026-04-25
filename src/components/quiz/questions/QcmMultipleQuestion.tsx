"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function QcmMultipleQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [multiSelected, setMultiSelected] = useState<Set<string>>(new Set());

  const correctSet = new Set(
    Array.isArray(question.correctAnswer) ? (question.correctAnswer as string[]) : []
  );

  const handleToggle = (option: string) => {
    if (showFeedback) return;
    setMultiSelected((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  };

  const handleValidate = () => {
    if (showFeedback) return;
    const isCorrect =
      multiSelected.size === correctSet.size &&
      [...multiSelected].every((s) => correctSet.has(s));
    onAnswer(isCorrect, [...multiSelected]);
  };

  return (
    <div className="space-y-2.5">
      <p className="text-xs text-warm-500">Plusieurs réponses correctes possibles.</p>
      {question.options?.map((option) => {
        const isSelected = multiSelected.has(option);
        const isCorrect = correctSet.has(option);

        let optionStyle = isSelected
          ? "border-accent-400 bg-accent-50 text-accent-700"
          : "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
        if (showFeedback) {
          if (isCorrect) optionStyle = "border-success-500 bg-success-100 text-success-600";
          else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600";
          else optionStyle = "border-warm-200 bg-warm-50 opacity-50";
        }

        return (
          <button
            key={option}
            onClick={() => handleToggle(option)}
            disabled={showFeedback}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
              optionStyle,
              !showFeedback && "active:scale-[0.98]"
            )}
          >
            <div className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all",
              showFeedback
                ? isCorrect ? "border-success-500 bg-success-500" : isSelected ? "border-red-400 bg-red-400" : "border-warm-300"
                : isSelected ? "border-accent-500 bg-accent-500" : "border-warm-300"
            )}>
              {(isSelected || (showFeedback && isCorrect)) && (
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
              )}
            </div>
            <span>{option}</span>
          </button>
        );
      })}

      {!showFeedback && multiSelected.size > 0 && (
        <button
          onClick={handleValidate}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
        >
          Valider ma sélection
        </button>
      )}
    </div>
  );
}
