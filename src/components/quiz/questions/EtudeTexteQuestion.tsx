"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

/**
 * "Étude de texte" — a short passage followed by several linked sub-questions,
 * like the grammar part of a brevet paper. Correct only if every answer is right.
 */
export function EtudeTexteQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const subQuestions = question.subQuestions ?? [];
  const [answers, setAnswers] = useState<(string | null)[]>(() => subQuestions.map(() => null));

  const allAnswered = answers.every((a) => a !== null);

  const handleValidate = () => {
    if (showFeedback || !allAnswered) return;
    const allCorrect = subQuestions.every((sq, i) => answers[i] === sq.correctAnswer);
    onAnswer(allCorrect, answers as string[]);
  };

  return (
    <div className="space-y-4">
      {question.passage && (
        <blockquote className="whitespace-pre-line rounded-xl border-l-4 border-accent-400 bg-warm-50 px-4 py-3 text-base italic leading-relaxed text-warm-800">
          {question.passage}
        </blockquote>
      )}

      <ol className="space-y-4">
        {subQuestions.map((sq, i) => {
          const chosen = answers[i];
          return (
            <li key={i} className="space-y-2">
              <p className="text-sm font-semibold text-warm-800">
                <span className="mr-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-100 text-xs font-bold text-accent-700">
                  {String.fromCharCode(97 + i)}
                </span>
                {sq.question}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {sq.options.map((opt) => {
                  const isSelected = chosen === opt;
                  const isCorrect = opt === sq.correctAnswer;
                  let style = isSelected
                    ? "border-accent-400 bg-accent-100 text-accent-700"
                    : "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-100";
                  if (showFeedback) {
                    if (isCorrect) style = "border-success-500 bg-success-100 text-success-600";
                    else if (isSelected) style = "border-red-400 bg-red-50 text-red-600";
                    else style = "border-warm-200 bg-warm-50 opacity-50";
                  }
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={showFeedback}
                      onClick={() =>
                        setAnswers((prev) => prev.map((a, j) => (j === i ? opt : a)))
                      }
                      className={cn(
                        "flex min-h-[44px] items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm font-medium transition-all",
                        style,
                        !showFeedback && "active:scale-[0.98]"
                      )}
                    >
                      {showFeedback && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />}
                      {showFeedback && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
              {showFeedback && sq.explanation && (
                <p className="text-xs text-warm-600">💬 {sq.explanation}</p>
              )}
            </li>
          );
        })}
      </ol>

      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={!allAnswered}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            allAnswered
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {allAnswered ? "Valider mes réponses" : "Réponds à toutes les questions d'abord"}
        </button>
      )}
    </div>
  );
}
