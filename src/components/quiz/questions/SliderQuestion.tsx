"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function SliderQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const hasOptions = !!(question.options && question.options.length >= 2);
  const min = hasOptions ? parseFloat(question.options![0]) : 0;
  const max = hasOptions ? parseFloat(question.options![1]) : 100;
  const correct = parseFloat(String(question.correctAnswer));
  const tolerance = question.tolerance ?? 0;
  const step = hasOptions && question.options![2] ? parseFloat(question.options![2]) : 1;

  const [sliderValue, setSliderValue] = useState<number>(Math.round((min + max) / 2));
  const [submitted, setSubmitted] = useState(false);

  if (!hasOptions) return null;

  const isSliderCorrect = Math.abs(sliderValue - correct) <= tolerance;

  const handleValidate = () => {
    if (showFeedback || submitted) return;
    setSubmitted(true);
    onAnswer(isSliderCorrect, String(sliderValue));
  };

  const pct = ((sliderValue - min) / (max - min)) * 100;
  const trackColor = showFeedback
    ? isSliderCorrect ? "var(--color-success-500, #22c55e)" : "var(--color-red-400, #f87171)"
    : "var(--color-accent-600, #6d28d9)";

  return (
    <div className="space-y-4">
      <p className="text-xs text-warm-500">Déplace le curseur pour choisir ta réponse.</p>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-warm-500">
          <span>{min}</span>
          <span className={cn(
            "text-lg font-bold",
            showFeedback
              ? isSliderCorrect ? "text-success-600" : "text-red-500"
              : "text-accent-600"
          )}>
            {sliderValue}
          </span>
          <span>{max}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={(e) => !showFeedback && setSliderValue(parseFloat(e.target.value))}
          disabled={showFeedback}
          className="w-full h-3 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${trackColor} ${pct}%, #e8ddd0 ${pct}%)`,
          }}
        />
      </div>

      {showFeedback && !isSliderCorrect && (
        <p className="text-sm text-warm-600">
          Bonne réponse : <strong className="text-warm-800">{correct}</strong>
        </p>
      )}

      {!showFeedback && (
        <button
          onClick={handleValidate}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
        >
          Valider
        </button>
      )}
    </div>
  );
}
