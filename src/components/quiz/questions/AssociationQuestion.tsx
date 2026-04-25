"use client";

import { useState, useMemo } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

// Pair colors for association questions
const PAIR_COLORS = [
  { bg: "bg-blue-50", border: "border-blue-400", text: "text-blue-800" },
  { bg: "bg-violet-50", border: "border-violet-400", text: "text-violet-800" },
  { bg: "bg-emerald-50", border: "border-emerald-400", text: "text-emerald-800" },
  { bg: "bg-amber-50", border: "border-amber-400", text: "text-amber-800" },
  { bg: "bg-pink-50", border: "border-pink-400", text: "text-pink-800" },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function AssociationQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [assocSelected, setAssocSelected] = useState<string | null>(null);
  const [assocMatches, setAssocMatches] = useState<Record<string, string>>({});

  const shuffledRightItems = useMemo(() => {
    if (!question.pairs) return [];
    return shuffle(
      question.pairs.map((p, index) => ({
        id: `pair-${index}`,
        right: p.right,
        correctLeft: p.left,
        pairIndex: index,
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!question.pairs) return null;

  const allMatched = Object.keys(assocMatches).length === question.pairs.length;
  const matchedRightIds = new Set(Object.values(assocMatches));

  const getPairColorByLeft = (leftKey: string) => {
    const idx = question.pairs!.findIndex((p) => p.left === leftKey);
    return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null;
  };

  const getLeftKeyForRightId = (rightId: string) =>
    Object.keys(assocMatches).find((k) => assocMatches[k] === rightId);

  const handleLeftClick = (left: string) => {
    if (showFeedback) return;
    setAssocSelected((prev) => (prev === left ? null : left));
  };

  const handleRightClick = (rightId: string) => {
    if (showFeedback || !assocSelected) return;
    setAssocMatches((prev) => {
      const next = { ...prev };
      const previousLeft = Object.keys(next).find((left) => next[left] === rightId);
      if (previousLeft) delete next[previousLeft];
      next[assocSelected] = rightId;
      return next;
    });
    setAssocSelected(null);
  };

  const handleValidate = () => {
    if (!question.pairs) return;
    const correct = question.pairs.every((p) => {
      const matchedRightId = assocMatches[p.left];
      const matchedTile = shuffledRightItems.find((item) => item.id === matchedRightId);
      return matchedTile?.correctLeft === p.left;
    });
    const userAnswer = question.pairs.map((p) => {
      const matchedRightId = assocMatches[p.left];
      const matchedTile = shuffledRightItems.find((item) => item.id === matchedRightId);
      return `${p.left}→${matchedTile?.right ?? ""}`;
    });
    onAnswer(correct, userAnswer);
  };

  const correctPairNumberForLeft = (left: string) =>
    question.pairs!.findIndex((p) => p.left === left) + 1;
  const correctPairNumberForRight = (pairIndex: number) => pairIndex + 1;

  return (
    <div className="space-y-3">
      <p className="text-xs text-warm-500">
        {showFeedback
          ? "Les numéros montrent les paires correctes."
          : "Tape un élément à gauche, puis son correspondant à droite."}
      </p>
      <div className="grid grid-cols-2 gap-2">
        {/* Left column */}
        <div className="space-y-2">
          {question.pairs.map((p) => {
            const isMatched = p.left in assocMatches;
            const isSelected = assocSelected === p.left;
            const color = isMatched ? getPairColorByLeft(p.left) : null;
            const isCorrect = showFeedback && assocMatches[p.left] === p.right;
            const isWrong = showFeedback && assocMatches[p.left] !== p.right;
            const correctNum = correctPairNumberForLeft(p.left);

            let style = "border-warm-200 bg-warm-50 text-warm-800";
            if (isCorrect) {
              style = "border-success-500 bg-success-100 text-success-700";
            } else if (isWrong) {
              style = "border-red-400 bg-red-50 text-red-700";
            } else if (isSelected) {
              style = "border-accent-400 bg-accent-50 text-accent-700 ring-2 ring-accent-300";
            } else if (isMatched && color) {
              style = `${color.border} ${color.bg} ${color.text}`;
            }

            return (
              <button
                key={p.left}
                onClick={() => handleLeftClick(p.left)}
                disabled={showFeedback}
                className={cn(
                  "w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-medium transition-all leading-tight",
                  style,
                  !showFeedback && "active:scale-[0.98]"
                )}
              >
                <span className="flex items-center gap-1.5">
                  {isCorrect && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success-500" />}
                  {isWrong && <XCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />}
                  {showFeedback && (
                    <span className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
                      isCorrect ? "bg-success-500" : "bg-red-400"
                    )}>
                      {correctNum}
                    </span>
                  )}
                  <span>{p.left}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          {shuffledRightItems.map((rightItem) => {
            const isUsed = matchedRightIds.has(rightItem.id);
            const leftKey = getLeftKeyForRightId(rightItem.id);
            const color = isUsed && leftKey ? getPairColorByLeft(leftKey) : null;
            const matchedCorrectly =
              showFeedback &&
              leftKey !== undefined &&
              rightItem.correctLeft === leftKey;
            const matchedWrong = showFeedback && isUsed && !matchedCorrectly;
            const correctNum = correctPairNumberForRight(rightItem.pairIndex);

            let style = "border-warm-200 bg-warm-50 text-warm-800";
            if (matchedCorrectly) {
              style = "border-success-500 bg-success-100 text-success-700";
            } else if (matchedWrong) {
              style = "border-red-400 bg-red-50 text-red-700";
            } else if (showFeedback && !isUsed) {
              style = "border-red-400 bg-red-50 text-red-700";
            } else if (isUsed && color) {
              style = `${color.border} ${color.bg} ${color.text}`;
            } else if (assocSelected) {
              style = "border-accent-200 bg-accent-50 hover:border-accent-400 hover:bg-accent-100 cursor-pointer";
            }

            return (
              <button
                key={rightItem.id}
                onClick={() => handleRightClick(rightItem.id)}
                disabled={showFeedback || (isUsed && !assocSelected) || (!isUsed && !assocSelected)}
                className={cn(
                  "w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-medium transition-all leading-tight",
                  style,
                  !showFeedback && assocSelected && "active:scale-[0.98]"
                )}
              >
                <span className="flex items-center gap-1.5">
                  {matchedCorrectly && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success-500" />}
                  {(matchedWrong || (showFeedback && !isUsed)) && <XCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />}
                  {showFeedback && (
                    <span className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
                      matchedCorrectly ? "bg-success-500" : "bg-red-400"
                    )}>
                      {correctNum}
                    </span>
                  )}
                  <span>{rightItem.right}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {!showFeedback && allMatched && (
        <button
          onClick={handleValidate}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
        >
          Valider les associations
        </button>
      )}
    </div>
  );
}
