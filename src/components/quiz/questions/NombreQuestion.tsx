"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function NombreQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [nombreValue, setNombreValue] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const correct = String(question.correctAnswer).trim();
  const tolerance = question.tolerance ?? 0;

  const isNombreCorrect = (value: string): boolean => {
    const userVal = parseFloat(value.trim());
    const correctVal = parseFloat(correct);
    if (!isNaN(userVal) && !isNaN(correctVal)) {
      return Math.abs(userVal - correctVal) <= tolerance;
    }
    return value.trim() === correct;
  };

  const handleValidate = () => {
    if (showFeedback || !nombreValue.trim() || submitted) return;
    setSubmitted(true);
    onAnswer(isNombreCorrect(nombreValue), nombreValue.trim());
  };

  const userCorrect = submitted ? isNombreCorrect(nombreValue) : false;

  return (
    <div className="space-y-3">
      <p className="text-xs text-warm-500">Tape ta réponse (nombre ou année).</p>
      <div className="flex gap-2">
        <input
          type="number"
          value={nombreValue}
          onChange={(e) => setNombreValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !showFeedback && handleValidate()}
          disabled={showFeedback}
          placeholder="Ex: 1848"
          className={cn(
            "flex-1 rounded-xl border-2 px-4 py-3 text-lg font-bold text-center transition-all outline-none",
            showFeedback
              ? userCorrect
                ? "border-success-500 bg-success-100 text-success-700"
                : "border-red-400 bg-red-50 text-red-700"
              : "border-warm-300 bg-warm-50 focus:border-accent-400 focus:ring-2 focus:ring-accent-200"
          )}
        />
      </div>
      {showFeedback && (
        <p className="text-sm text-warm-600">
          Bonne réponse : <strong className="text-warm-800">{correct}</strong>
        </p>
      )}
      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={!nombreValue.trim()}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95 disabled:opacity-50"
        >
          Valider
        </button>
      )}
    </div>
  );
}
