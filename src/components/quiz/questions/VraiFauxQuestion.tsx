"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function VraiFauxQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    const isCorrect = question.correctAnswer === option;
    onAnswer(isCorrect, option);
  };

  const options = question.options?.length ? question.options : ["Vrai", "Faux"];

  return (
    <div className="space-y-2.5">
      {options.map((option) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = question.correctAnswer === option;

        let optionStyle = "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
        if (showFeedback) {
          if (isCorrect) optionStyle = "border-success-500 bg-success-100 text-success-600";
          else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600";
          else optionStyle = "border-warm-200 bg-warm-50 opacity-50";
        }

        return (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={showFeedback}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
              optionStyle,
              !showFeedback && "active:scale-[0.98]"
            )}
          >
            {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />}
            {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );
}
