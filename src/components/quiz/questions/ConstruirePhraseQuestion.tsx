"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { SourceTextCard } from "./SourceTextCard";
import type { QuestionComponentProps } from "./types";

function shuffledIndexes(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Joins tiles into a sentence, without a space before punctuation tiles. */
export function joinTiles(tiles: string[]): string {
  return tiles.reduce((acc, t, i) => (i === 0 ? t : /^[.,!?;:)]/.test(t) ? acc + t : `${acc} ${t}`), "");
}

const same = (a: string[], b: string[]) => a.length === b.length && a.every((t, i) => t.trim() === b[i]?.trim());

/** Positions of `typed` that belong to a longest common subsequence with `target`. */
function lcsKeep(typed: string[], target: string[]): Set<number> {
  const n = typed.length;
  const m = target.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = typed[i].trim() === target[j].trim() ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const keep = new Set<number>();
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (typed[i].trim() === target[j].trim()) {
      keep.add(i);
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  return keep;
}

/**
 * "Construis la phrase" — tap word tiles (with distractors) to build the
 * English sentence. Tapping a placed tile sends it back to the bank.
 */
export function ConstruirePhraseQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const tiles = question.tiles ?? [];
  const correctOrder = Array.isArray(question.correctAnswer) ? question.correctAnswer : [];
  const targets = [correctOrder, ...(question.acceptedOrders ?? [])].filter((t) => t.length > 0);

  // Bank order shuffled once per mount; tiles are referenced by index (duplicates allowed)
  const [bankOrder] = useState(() => shuffledIndexes(tiles.length));
  const [placed, setPlaced] = useState<number[]>([]);

  const placedTexts = placed.map((i) => tiles[i]);
  const isCorrect = targets.some((t) => same(placedTexts, t));
  // Closest target, to mark the misplaced / extra tiles
  const closest = targets.reduce<string[]>(
    (best, t) => (lcsKeep(placedTexts, t).size > lcsKeep(placedTexts, best).size ? t : best),
    targets[0] ?? []
  );
  const kept = isCorrect ? new Set(placed.map((_, k) => k)) : lcsKeep(placedTexts, closest);

  const place = (i: number) => {
    if (showFeedback || placed.includes(i)) return;
    setPlaced((prev) => [...prev, i]);
  };
  const unplace = (i: number) => {
    if (showFeedback) return;
    setPlaced((prev) => prev.filter((p) => p !== i));
  };

  const handleValidate = () => {
    if (showFeedback || placed.length === 0) return;
    onAnswer(isCorrect, placedTexts);
  };

  return (
    <div className="space-y-4">
      <SourceTextCard text={question.sourceText} />

      {/* Answer line */}
      <div>
        <p className="mb-1.5 text-sm font-semibold text-warm-700">🇬🇧 Ta phrase</p>
        <div
          lang="en"
          className={cn(
            "flex min-h-[64px] flex-wrap items-center gap-2 rounded-xl border-2 border-dashed px-3 py-3",
            !showFeedback && "border-accent-300 bg-white",
            showFeedback && isCorrect && "border-solid border-success-500 bg-success-100",
            showFeedback && !isCorrect && "border-solid border-red-300 bg-red-50"
          )}
        >
          {placed.length === 0 && (
            <span className="text-sm text-warm-400">Touche les mots ci-dessous dans le bon ordre…</span>
          )}
          {placed.map((tileIdx, k) => {
            const ok = kept.has(k);
            return (
              <button
                key={tileIdx}
                type="button"
                onClick={() => unplace(tileIdx)}
                disabled={showFeedback}
                aria-label={showFeedback ? undefined : `Retirer « ${tiles[tileIdx]} »`}
                className={cn(
                  "min-h-[44px] min-w-[44px] rounded-lg border-2 px-3 py-1.5 text-base font-semibold transition-all",
                  !showFeedback && "border-accent-400 bg-accent-100 text-warm-900 active:scale-95",
                  showFeedback && ok && "border-success-500 bg-white text-success-600",
                  showFeedback && !ok && "border-red-400 bg-white text-red-700 line-through"
                )}
              >
                {tiles[tileIdx]}
              </button>
            );
          })}
        </div>
      </div>

      {!showFeedback && (
        <>
          {/* Tile bank — placed tiles leave an empty slot so nothing jumps around */}
          <div lang="en" className="flex flex-wrap gap-2 rounded-xl bg-warm-100/70 p-3">
            {bankOrder.map((tileIdx) => {
              const used = placed.includes(tileIdx);
              return (
                <button
                  key={tileIdx}
                  type="button"
                  onClick={() => place(tileIdx)}
                  disabled={used}
                  aria-hidden={used}
                  className={cn(
                    "min-h-[44px] min-w-[44px] rounded-lg border-2 px-3 py-1.5 text-base font-semibold transition-all",
                    used
                      ? "border-dashed border-warm-300 bg-transparent text-transparent"
                      : "border-warm-300 bg-white text-warm-900 shadow-sm hover:border-accent-400 active:scale-95"
                  )}
                >
                  {tiles[tileIdx]}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPlaced([])}
              disabled={placed.length === 0}
              className={cn(
                "flex items-center justify-center gap-1.5 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                placed.length > 0
                  ? "border-warm-300 bg-white text-warm-700 hover:bg-warm-100"
                  : "cursor-not-allowed border-warm-200 text-warm-300"
              )}
            >
              <RotateCcw className="h-4 w-4" />
              Effacer
            </button>
            <button
              onClick={handleValidate}
              disabled={placed.length === 0}
              className={cn(
                "flex-1 rounded-xl py-3 text-sm font-bold transition-all",
                placed.length > 0
                  ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
                  : "cursor-not-allowed bg-warm-200 text-warm-400"
              )}
            >
              {placed.length > 0 ? "Valider" : "Choisis des mots"}
            </button>
          </div>
        </>
      )}

      {showFeedback && (
        <div className="space-y-2">
          {!isCorrect && (
            <p className="text-xs text-warm-500">
              <span className="font-semibold text-success-600">vert</span> = bien placé ·{" "}
              <span className="font-semibold text-red-700 line-through">barré</span> = mal placé ou en trop
            </p>
          )}
          <div className="rounded-xl border border-warm-200 bg-warm-50 px-4 py-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-500">
              {isCorrect ? "Bravo, ta phrase est juste" : "Phrase correcte"}
            </p>
            <p lang="en" className="text-base font-semibold leading-7 text-success-600">
              {joinTiles(isCorrect ? placedTexts : correctOrder)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
