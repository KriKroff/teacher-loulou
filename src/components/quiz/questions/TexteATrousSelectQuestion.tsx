"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

export function TexteATrousSelectQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const correctAnswers = Array.isArray(question.correctAnswer)
    ? (question.correctAnswer as string[])
    : [String(question.correctAnswer)];
  const blanksCount = correctAnswers.length;

  const tileBank = (question.options ?? []).map((word, index) => ({
    id: `tile-${index}`,
    word,
  }));
  const wordById = new Map(tileBank.map((tile) => [tile.id, tile.word]));

  const [chosen, setChosen] = useState<(string | null)[]>(Array(blanksCount).fill(null));

  const chosenWords = chosen.map((tileId) => (tileId ? wordById.get(tileId) ?? null : null));
  const usedTileIds = new Set(chosen.filter(Boolean) as string[]);
  const allFilled = chosen.every((v) => v !== null);

  const parts = question.question.split("___");

  const handleTileClick = (tileId: string) => {
    if (showFeedback) return;
    setChosen((prev) => {
      const next = [...prev];
      const firstEmpty = next.findIndex((v) => v === null);
      if (firstEmpty !== -1) {
        next[firstEmpty] = tileId;
      }
      return next;
    });
  };

  const handleBlankClick = (blankIndex: number) => {
    if (showFeedback) return;
    setChosen((prev) => {
      const next = [...prev];
      next[blankIndex] = null;
      return next;
    });
  };

  const handleValidate = () => {
    if (showFeedback || !allFilled) return;
    const isCorrect = correctAnswers.every((a, i) => chosenWords[i] === a);
    onAnswer(isCorrect, chosenWords.filter(Boolean) as string[]);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-warm-500">Complète la phrase en tapant les mots dans le bon ordre.</p>

      {/* Phrase with inline blanks */}
      <div className="rounded-xl bg-warm-50 border border-warm-200 px-4 py-3 text-sm font-medium text-warm-800 leading-loose">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && (
              <button
                onClick={() => handleBlankClick(i)}
                disabled={showFeedback}
                className={cn(
                  "inline-flex items-center mx-1 min-w-[6rem] rounded-lg border-2 px-2 py-0.5 text-sm font-bold transition-all",
                  showFeedback
                    ? chosenWords[i] === correctAnswers[i]
                      ? "border-success-500 bg-success-100 text-success-700"
                      : "border-red-400 bg-red-50 text-red-700"
                    : chosenWords[i]
                      ? "border-accent-400 bg-accent-50 text-accent-700"
                      : "border-warm-300 bg-white text-warm-400 italic"
                )}
              >
                {chosenWords[i] ?? "___"}
              </button>
            )}
          </span>
        ))}
      </div>

      {/* Word tile bank */}
      {!showFeedback && (
        <div className="flex flex-wrap gap-2">
          {tileBank.map((tile) => {
            const isUsed = usedTileIds.has(tile.id);
            return (
              <button
                key={tile.id}
                onClick={() => !isUsed && handleTileClick(tile.id)}
                disabled={isUsed}
                className={cn(
                  "rounded-full border-2 px-4 py-2 text-sm font-medium transition-all",
                  isUsed
                    ? "border-warm-200 bg-warm-50 text-warm-300 line-through cursor-default"
                    : "border-accent-300 bg-white text-warm-700 hover:border-accent-500 hover:bg-accent-50 active:scale-95"
                )}
              >
                {tile.word}
              </button>
            );
          })}
        </div>
      )}

      {showFeedback && (
        <div className="text-sm text-warm-600">
          Bonne réponse : <strong className="text-warm-800">{correctAnswers.join(" / ")}</strong>
        </div>
      )}

      {!showFeedback && allFilled && (
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
