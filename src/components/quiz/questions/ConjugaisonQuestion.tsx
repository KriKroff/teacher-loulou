"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .normalize("NFC");
}

export function ConjugaisonQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const correctAnswers = Array.isArray(question.correctAnswer)
    ? (question.correctAnswer as string[])
    : [String(question.correctAnswer)];

  const fieldLabels =
    question.options && question.options.length === correctAnswers.length
      ? question.options
      : correctAnswers.map((_, index) => `Forme ${index + 1}`);

  const [values, setValues] = useState<string[]>(Array(correctAnswers.length).fill(""));

  const allFilled = values.every((v) => v.trim().length > 0);

  const handleChange = (index: number, value: string) => {
    if (showFeedback) return;
    setValues((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleValidate = () => {
    if (showFeedback || !allFilled) return;
    const isCorrect = correctAnswers.every(
      (answer, index) => normalize(values[index] ?? "") === normalize(answer)
    );
    onAnswer(isCorrect, values);
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-warm-500">
        Tape la/les forme(s) au subjonctif. Accents acceptés selon l&apos;orthographe attendue.
      </p>
      <div className="space-y-2">
        {fieldLabels.map((label, index) => {
          const current = values[index] ?? "";
          const expected = correctAnswers[index] ?? "";
          const isCorrect = normalize(current) === normalize(expected);
          return (
            <label key={`${label}-${index}`} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-warm-600">{label}</span>
              <input
                type="text"
                value={current}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={showFeedback}
                className={cn(
                  "w-full rounded-xl border-2 px-3 py-2 text-sm outline-none transition-colors",
                  showFeedback
                    ? isCorrect
                      ? "border-success-500 bg-success-50 text-success-700"
                      : "border-red-400 bg-red-50 text-red-700"
                    : "border-warm-300 bg-white text-warm-800 focus:border-accent-400"
                )}
                placeholder="Écris ta réponse"
                autoComplete="off"
              />
            </label>
          );
        })}
      </div>
      {showFeedback && (
        <p className="text-sm text-warm-600">
          Réponses attendues :{" "}
          <strong className="text-warm-800">{correctAnswers.join(" • ")}</strong>
        </p>
      )}
      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={!allFilled}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-all",
            allFilled
              ? "bg-accent-500 hover:bg-accent-600 active:scale-95"
              : "bg-warm-300 cursor-not-allowed"
          )}
        >
          Valider
        </button>
      )}
    </div>
  );
}
