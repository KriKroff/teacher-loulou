"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function IntrusQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    const isCorrect = question.correctAnswer === option;
    onAnswer(isCorrect, option);
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-warm-500">
        Tous les éléments ont un point commun… sauf un. Clique sur celui qui n&apos;appartient pas au même groupe que les autres.
      </p>
      <div className="flex flex-wrap gap-2">
        {question.options?.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = question.correctAnswer === option;

          let style = "border-warm-200 bg-warm-50 text-warm-700 hover:border-red-300 hover:bg-red-50";
          if (showFeedback) {
            if (isCorrect) style = "border-success-500 bg-success-100 text-success-700";
            else if (isSelected && !isCorrect) style = "border-red-400 bg-red-50 text-red-600";
            else style = "border-warm-200 bg-warm-50 opacity-50";
          } else if (isSelected) {
            style = "border-red-400 bg-red-50 text-red-700 ring-2 ring-red-200";
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={cn(
                "flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all",
                style,
                !showFeedback && "active:scale-[0.97]"
              )}
            >
              {showFeedback && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />}
              {showFeedback && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
