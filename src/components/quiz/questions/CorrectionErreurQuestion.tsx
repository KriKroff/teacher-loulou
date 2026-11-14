"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { tokenizeTaggedText, type WordToken } from "@/lib/tagged-text";
import { normalizeEnglish } from "@/lib/english-answer";
import type { QuestionComponentProps } from "./types";

type Word = Extract<WordToken, { kind: "word" }>;

/** Expected corrections of a target: "a|b" alternatives, "-" = delete (empty). */
function expectedAlternatives(answer: string | undefined): string[] {
  return (answer ?? "").split("|").map((a) => (a.trim() === "-" ? "" : a.trim()));
}

function correctionMatches(typed: string, answer: string | undefined): boolean {
  const t = typed.trim() === "-" ? "" : normalizeEnglish(typed);
  return expectedAlternatives(answer).some((alt) => normalizeEnglish(alt) === t);
}

/** True when the student "corrected" a word into itself (no real change). */
function unchanged(word: string, typed: string): boolean {
  return normalizeEnglish(word) === normalizeEnglish(typed);
}

/**
 * "Corrige les erreurs" — tap the wrong word(s), then type the correction
 * under each selected word (empty field = delete the word).
 * Targets are written `[faux|correction]` in `taggedText`; `[a|-]` = delete.
 */
export function CorrectionErreurQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const tokens = useMemo(() => tokenizeTaggedText(question.taggedText ?? "", { lang: "en" }), [question.taggedText]);
  const words = useMemo(() => tokens.filter((t): t is Word => t.kind === "word"), [tokens]);
  // id → typed correction
  const [fixes, setFixes] = useState<Map<number, string>>(new Map());

  const toggle = (w: Word) => {
    if (showFeedback) return;
    setFixes((prev) => {
      const next = new Map(prev);
      if (next.has(w.id)) next.delete(w.id);
      else next.set(w.id, w.text);
      return next;
    });
  };

  const setFix = (id: number, value: string) => {
    if (showFeedback) return;
    setFixes((prev) => new Map(prev).set(id, value));
  };

  // A selected non-target word left unchanged doesn't count as a mistake
  const effectiveSelection = words.filter(
    (w) => fixes.has(w.id) && (w.isTarget || !unchanged(w.text, fixes.get(w.id) ?? ""))
  );

  const handleValidate = () => {
    if (showFeedback || fixes.size === 0) return;
    const targets = words.filter((w) => w.isTarget);
    const isCorrect =
      effectiveSelection.length === targets.length &&
      targets.every((t) => fixes.has(t.id) && correctionMatches(fixes.get(t.id) ?? "", t.answer));
    onAnswer(
      isCorrect,
      effectiveSelection.map((w) => `${w.text} → ${(fixes.get(w.id) ?? "").trim() || "∅"}`)
    );
  };

  const count = fixes.size;

  return (
    <div className="space-y-4">
      <p className="text-xs text-warm-500">
        Touche chaque mot faux, puis écris la correction dans la case. Pour supprimer un mot, vide la case.
      </p>

      <div
        lang="en"
        className="rounded-xl border border-warm-200 bg-warm-50 px-3 py-3 text-base leading-[2.6] text-warm-800"
      >
        {tokens.map((tok, i) => {
          if (tok.kind === "space") return <span key={i}>{tok.text}</span>;
          const selected = fixes.has(tok.id);
          const typed = fixes.get(tok.id) ?? "";

          if (showFeedback) return <FeedbackWord key={i} word={tok} selected={selected} typed={typed} />;

          if (!selected) {
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggle(tok)}
                className="rounded-md px-0.5 py-1 transition-colors hover:bg-accent-100"
              >
                {tok.text}
              </button>
            );
          }

          return (
            <span key={i} className="mx-0.5 inline-flex flex-col items-center gap-1 align-top leading-normal">
              <button
                type="button"
                onClick={() => toggle(tok)}
                aria-pressed="true"
                aria-label={`Désélectionner « ${tok.text} »`}
                className="rounded-md bg-amber-200 px-1 py-1 text-warm-900 line-through decoration-red-500 decoration-2 ring-2 ring-amber-400"
              >
                {tok.text}
              </button>
              <input
                type="text"
                value={typed}
                autoFocus
                onFocus={(e) => {
                  const len = e.target.value.length;
                  e.target.setSelectionRange(len, len);
                }}
                onChange={(e) => setFix(tok.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.currentTarget.blur();
                }}
                lang="en"
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                spellCheck={false}
                placeholder="(supprimé)"
                aria-label={`Correction de « ${tok.text} »`}
                style={{ width: `${Math.min(Math.max(typed.length, typed ? 5 : 9) + 3, 24)}ch` }}
                className="min-h-[44px] max-w-[80vw] rounded-lg border-2 border-accent-300 bg-white px-2 text-center text-base font-semibold text-accent-700 placeholder-warm-300 focus:border-accent-500 focus:outline-none"
              />
            </span>
          );
        })}
      </div>

      {showFeedback && (
        <>
          <p className="text-xs text-warm-500">
            🟩 bien corrigé · 🟥 mauvaise correction ou mot juste modifié · <span className="underline decoration-dashed">pointillés</span> = erreur oubliée
          </p>
          <div className="rounded-xl border border-warm-200 bg-white px-4 py-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-500">Phrase corrigée</p>
            <p lang="en" className="text-base leading-8 text-warm-900">
              {tokens.map((tok, i) => {
                if (tok.kind === "space") return <span key={i}>{tok.text}</span>;
                if (!tok.isTarget) return <span key={i}>{tok.text}</span>;
                const fix = expectedAlternatives(tok.answer)[0];
                return (
                  <span key={i}>
                    <span className="text-warm-400 line-through">{tok.text}</span>
                    {fix && <mark className="ml-1 rounded bg-success-100 px-1 font-semibold text-success-600">{fix}</mark>}
                  </span>
                );
              })}
            </p>
          </div>
        </>
      )}

      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={count === 0}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            count > 0
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {count > 0 ? `Valider (${count} correction${count > 1 ? "s" : ""})` : "Touche un mot faux"}
        </button>
      )}
    </div>
  );
}

/** One word of the sentence after submitting. */
function FeedbackWord({ word, selected, typed }: { word: Word; selected: boolean; typed: string }) {
  const expected = expectedAlternatives(word.answer)[0];
  const typedClean = typed.trim();

  if (word.isTarget) {
    if (selected && correctionMatches(typed, word.answer)) {
      return (
        <span className="rounded-md bg-success-100 px-1 py-1 ring-2 ring-success-500 box-decoration-clone">
          <span className="text-warm-500 line-through">{word.text}</span>{" "}
          <span className="font-semibold text-success-600">{typedClean || "∅"}</span>
        </span>
      );
    }
    if (selected) {
      return (
        <span className="rounded-md bg-red-50 px-1 py-1 ring-2 ring-red-400 box-decoration-clone">
          <span className="text-warm-500 line-through">{word.text}</span>{" "}
          <span className="font-semibold text-red-700 line-through">{typedClean || "∅"}</span>{" "}
          <span className="font-semibold text-success-600">→ {expected || "(supprimer)"}</span>
        </span>
      );
    }
    // Missed error
    return (
      <span className="rounded-md border-2 border-dashed border-red-400 px-1 py-0.5 box-decoration-clone">
        <span className="text-red-700 underline decoration-dashed">{word.text}</span>{" "}
        <span className="font-semibold text-success-600">→ {expected || "(supprimer)"}</span>
      </span>
    );
  }

  if (selected && !unchanged(word.text, typed)) {
    // A correct word was changed
    return (
      <span className="rounded-md bg-red-50 px-1 py-1 ring-2 ring-red-400 box-decoration-clone">
        <span className="text-warm-800">{word.text}</span>{" "}
        <span className="text-xs font-semibold text-red-700 line-through">{typedClean || "∅"}</span>
      </span>
    );
  }
  return <span className="opacity-80">{word.text}</span>;
}
