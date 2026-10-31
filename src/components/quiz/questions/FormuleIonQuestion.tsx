"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ION_CHARGES, toSuperscript } from "@/lib/ion";
import type { QuestionComponentProps } from "./types";

/**
 * "Écris la formule de l'ion" — pick the chemical symbol, then the charge
 * written at the top right. A live preview shows the formula as it is built.
 */
export function FormuleIonQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [symbol, setSymbol] = useState<string | null>(null);
  const [charge, setCharge] = useState<string | null>(null);

  const symbols = question.options ?? [];
  const [correctSymbol, correctCharge] = Array.isArray(question.correctAnswer)
    ? question.correctAnswer
    : ["", ""];

  const ready = symbol !== null && charge !== null;

  const handleValidate = () => {
    if (showFeedback || !ready) return;
    onAnswer(symbol === correctSymbol && charge === correctCharge, [symbol, charge]);
  };

  const chip = (selected: boolean, good: boolean) => {
    if (showFeedback) {
      if (good) return "border-success-500 bg-success-100 text-success-600";
      if (selected) return "border-red-400 bg-red-50 text-red-600";
      return "border-warm-200 bg-warm-50 opacity-50";
    }
    return selected
      ? "border-accent-400 bg-accent-100 text-accent-700"
      : "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-100";
  };

  return (
    <div className="space-y-4">
      {/* Live preview */}
      <div className="flex justify-center">
        <div className="min-w-[8rem] rounded-2xl border-2 border-dashed border-warm-300 bg-white px-6 py-3 text-center text-4xl font-extrabold text-warm-800">
          {symbol ?? "?"}
          {charge ? (
            <span className="text-accent-600">{toSuperscript(charge)}</span>
          ) : (
            <sup className="text-xl text-warm-400">?</sup>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-warm-700">1. Le symbole chimique</p>
        <div className="flex flex-wrap gap-2">
          {symbols.map((s) => (
            <button
              key={s}
              type="button"
              disabled={showFeedback}
              onClick={() => setSymbol(s)}
              className={cn(
                "min-h-[44px] min-w-[3.5rem] rounded-xl border-2 px-3 py-2 text-lg font-bold transition-all",
                chip(symbol === s, s === correctSymbol),
                !showFeedback && "active:scale-95"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-warm-700">2. La charge (en haut à droite)</p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {ION_CHARGES.map((c) => (
            <button
              key={c}
              type="button"
              disabled={showFeedback}
              onClick={() => setCharge(c)}
              className={cn(
                "min-h-[44px] rounded-xl border-2 px-2 py-2 text-lg font-bold transition-all",
                chip(charge === c, c === correctCharge),
                !showFeedback && "active:scale-95"
              )}
            >
              {c.replace("-", "−")}
            </button>
          ))}
        </div>
      </div>

      {showFeedback && (
        <p className="text-sm text-warm-600">
          Bonne formule :{" "}
          <strong className="text-2xl text-warm-800">
            {correctSymbol}
            {toSuperscript(correctCharge)}
          </strong>
        </p>
      )}

      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={!ready}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            ready
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {ready ? "Valider la formule" : "Choisis le symbole et la charge"}
        </button>
      )}
    </div>
  );
}
