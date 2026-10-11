"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { parseTaggedText } from "@/lib/tagged-text";
import type { QuestionComponentProps } from "./types";

const NUMBERS = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

/**
 * "Donne la nature des mots soulignés" — the sentence is shown with numbered
 * targets, then one dropdown per target (shared option list).
 */
export function NatureMotsQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const segments = useMemo(() => parseTaggedText(question.taggedText ?? ""), [question.taggedText]);
  const targets = segments.filter(
    (s): s is { kind: "target"; text: string; answer?: string } => s.kind === "target"
  );
  const [answers, setAnswers] = useState<string[]>(() => targets.map(() => ""));

  const allFilled = answers.every((a) => a !== "");

  const handleValidate = () => {
    if (showFeedback || !allFilled) return;
    const allCorrect = targets.every((t, i) => answers[i] === t.answer);
    onAnswer(allCorrect, answers);
  };

  let targetIndex = 0;

  return (
    <div className="space-y-4">
      {/* Sentence with numbered targets */}
      <p className="rounded-xl border border-warm-200 bg-warm-50 px-4 py-3 text-base leading-loose text-warm-800">
        {segments.map((seg, i) => {
          if (seg.kind !== "target") return <span key={i}>{seg.text}</span>;
          const n = targetIndex++;
          return (
            <span key={i} className="whitespace-nowrap">
              <span className="font-semibold text-accent-700 underline decoration-2 underline-offset-4">
                {seg.text}
              </span>
              <sup className="ml-0.5 text-xs font-bold text-accent-600">{NUMBERS[n] ?? n + 1}</sup>
            </span>
          );
        })}
      </p>

      {/* One row per target */}
      <div className="space-y-2.5">
        {targets.map((t, i) => {
          const isCorrect = answers[i] === t.answer;
          return (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-2 rounded-xl border-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between",
                !showFeedback && "border-warm-200 bg-white",
                showFeedback && isCorrect && "border-success-500 bg-success-100",
                showFeedback && !isCorrect && "border-red-400 bg-red-50"
              )}
            >
              <span className="text-sm font-semibold text-warm-800">
                <span className="mr-1.5 text-accent-600">{NUMBERS[i] ?? i + 1}</span>« {t.text} »
              </span>
              {showFeedback ? (
                <span className="flex items-center gap-1.5 text-sm font-semibold">
                  {isCorrect ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0 text-red-500" />
                  )}
                  <span className={isCorrect ? "text-success-600" : "text-red-700 line-through"}>
                    {answers[i]}
                  </span>
                  {!isCorrect && <span className="text-success-600">→ {t.answer}</span>}
                </span>
              ) : (
                <select
                  value={answers[i]}
                  onChange={(e) =>
                    setAnswers((prev) => prev.map((a, j) => (j === i ? e.target.value : a)))
                  }
                  aria-label={`Réponse pour « ${t.text} »`}
                  className="min-h-[44px] w-full rounded-lg border-2 border-accent-200 bg-white px-2 text-sm font-medium focus:border-accent-500 focus:outline-none sm:w-64"
                >
                  <option value="">Choisis…</option>
                  {question.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              )}
            </div>
          );
        })}
      </div>

      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={!allFilled}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            allFilled
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {allFilled ? "Valider mes réponses" : "Réponds pour chaque mot d'abord"}
        </button>
      )}
    </div>
  );
}
