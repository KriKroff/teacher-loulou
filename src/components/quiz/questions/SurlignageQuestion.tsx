"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { tokenizeTaggedText } from "@/lib/tagged-text";
import type { QuestionComponentProps } from "./types";

/**
 * "Repère les mots" — every word of the passage is tappable; the student
 * selects all the words matching the instruction (e.g. all the adverbs).
 * Correct words are marked [like this] in `taggedText`.
 */
export function SurlignageQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const tokens = useMemo(() => tokenizeTaggedText(question.taggedText ?? ""), [question.taggedText]);
  const targetIds = useMemo(
    () => new Set(tokens.flatMap((t) => (t.kind === "word" && t.isTarget ? [t.id] : []))),
    [tokens]
  );
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    if (showFeedback) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleValidate = () => {
    if (showFeedback || selected.size === 0) return;
    const isCorrect =
      selected.size === targetIds.size && [...selected].every((id) => targetIds.has(id));
    const words = tokens.flatMap((t) => (t.kind === "word" && selected.has(t.id) ? [t.text] : []));
    onAnswer(isCorrect, words);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-warm-500">
        Touche les mots pour les surligner. Le nombre de mots à trouver n&apos;est pas donné.
      </p>

      <p className="rounded-xl border border-warm-200 bg-warm-50 px-3 py-3 text-base leading-[2.6] text-warm-800">
        {tokens.map((tok, i) => {
          if (tok.kind === "space") return <span key={i}>{tok.text}</span>;
          const isSelected = selected.has(tok.id);
          let style = isSelected
            ? "bg-amber-200 text-warm-900 ring-2 ring-amber-400"
            : "hover:bg-accent-100";
          if (showFeedback) {
            if (isSelected && tok.isTarget) style = "bg-success-100 text-success-600 ring-2 ring-success-500";
            else if (isSelected) style = "bg-red-50 text-red-700 ring-2 ring-red-400 line-through";
            else if (tok.isTarget) style = "text-success-600 outline-dashed outline-2 outline-success-500 underline";
            else style = "opacity-70";
          }
          return (
            <button
              key={i}
              type="button"
              onClick={() => toggle(tok.id)}
              disabled={showFeedback}
              aria-pressed={isSelected}
              className={cn("rounded-md px-0.5 py-1 transition-colors", style)}
            >
              {tok.text}
            </button>
          );
        })}
      </p>

      {showFeedback && (
        <p className="text-xs text-warm-500">
          🟩 bien trouvé · 🟥 en trop · <span className="underline">souligné</span> = oublié
        </p>
      )}

      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={selected.size === 0}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            selected.size > 0
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {selected.size > 0
            ? `Valider (${selected.size} mot${selected.size > 1 ? "s" : ""} surligné${selected.size > 1 ? "s" : ""})`
            : "Surligne au moins un mot"}
        </button>
      )}
    </div>
  );
}
