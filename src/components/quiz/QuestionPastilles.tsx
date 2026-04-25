"use client";

import { cn } from "@/lib/utils";

interface QuestionPastillesProps {
  total: number;
  currentIndex: number;
  results: { questionId: string; correct: boolean }[];
  questionIds: string[];
}

/**
 * Displays a row of pastilles showing quiz question status:
 * ✅ correct past | ❌ incorrect past | ● current | ○ upcoming
 */
export function QuestionPastilles({
  total,
  currentIndex,
  results,
  questionIds,
}: QuestionPastillesProps) {
  return (
    <div
      className="flex flex-wrap gap-1 justify-center"
      role="list"
      aria-label="Progression des questions"
    >
      {Array.from({ length: total }, (_, i) => {
        const qId = questionIds[i];
        const result = results.find((r) => r.questionId === qId);
        const isCurrent = i === currentIndex;
        const isPast = i < currentIndex;
        const isFuture = i > currentIndex;

        let label: string;
        let className: string;

        if (isCurrent) {
          label = `Question ${i + 1} (en cours)`;
          className = "h-3 w-3 rounded-full bg-accent-500 ring-2 ring-accent-300";
        } else if (isPast && result) {
          label = `Question ${i + 1} : ${result.correct ? "correcte" : "incorrecte"}`;
          className = cn(
            "h-3 w-3 rounded-full text-[10px] flex items-center justify-center leading-none",
            result.correct ? "bg-green-500" : "bg-red-400"
          );
        } else if (isPast) {
          label = `Question ${i + 1}`;
          className = "h-3 w-3 rounded-full bg-warm-300";
        } else if (isFuture) {
          label = `Question ${i + 1} (à venir)`;
          className = "h-3 w-3 rounded-full border-2 border-warm-300 bg-transparent";
        } else {
          label = `Question ${i + 1}`;
          className = "h-3 w-3 rounded-full bg-warm-200";
        }

        return (
          <div
            key={i}
            role="listitem"
            aria-label={label}
            className={className}
            title={label}
          />
        );
      })}
    </div>
  );
}
