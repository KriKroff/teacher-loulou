"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function TexteATrousQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    const isCorrect = question.correctAnswer === option;
    onAnswer(isCorrect, option);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {question.options?.map((option) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = question.correctAnswer === option;

        let chipStyle = "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
        if (showFeedback) {
          if (isCorrect) chipStyle = "border-success-500 bg-success-100 text-success-600";
          else if (isSelected && !isCorrect) chipStyle = "border-red-400 bg-red-50 text-red-600";
          else chipStyle = "border-warm-200 bg-warm-50 opacity-40";
        }

        return (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={showFeedback}
            className={cn(
              "flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all",
              chipStyle,
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
  );
}
