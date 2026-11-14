"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { chunkLabel, chunkPresent, highlightChunks, matchesAny, type MatchResult } from "@/lib/english-answer";
import { SourceTextCard } from "./SourceTextCard";
import type { QuestionComponentProps } from "./types";

/** Grows a textarea with its content (no inner scrollbar). */
export function autoGrow(el: HTMLTextAreaElement | null) {
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}

/**
 * "Traduis" — the student types the English translation of `sourceText`.
 * Tolerant matching (case, punctuation, contractions, UK/US, small typos
 * outside the key chunks); the feedback checks each key chunk one by one.
 */
export function TraductionQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);

  const accepted = useMemo(() => question.acceptedAnswers ?? [], [question.acceptedAnswers]);
  const keyChunks = useMemo(() => question.keyChunks ?? [], [question.keyChunks]);
  const model = accepted[0] ?? "";
  const modelSegments = useMemo(() => highlightChunks(model, keyChunks), [model, keyChunks]);
  const canSubmit = value.trim().length > 0;

  const handleValidate = () => {
    if (showFeedback || !canSubmit) return;
    const res = matchesAny(value, accepted, keyChunks);
    setResult(res);
    onAnswer(res.correct, value.trim());
  };

  const correct = result?.correct ?? false;
  const chunkStatus = keyChunks.map((chunk) => ({
    label: chunkLabel(chunk, value),
    found: chunkPresent(value, chunk),
  }));
  // When the answer is accepted (possibly through another wording), only list what was found
  const shownChunks = correct ? chunkStatus.filter((c) => c.found) : chunkStatus;

  return (
    <div className="space-y-4">
      <SourceTextCard text={question.sourceText} />

      {!showFeedback ? (
        <>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-warm-700">🇬🇧 Ta traduction</span>
            <textarea
              value={value}
              rows={2}
              lang="en"
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              placeholder="Écris ta phrase en anglais…"
              onChange={(e) => {
                setValue(e.target.value);
                autoGrow(e.target);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleValidate();
                }
              }}
              className="block min-h-[56px] w-full resize-none overflow-hidden rounded-xl border-2 border-accent-200 bg-white px-3 py-3 text-base leading-7 text-warm-900 placeholder-warm-300 focus:border-accent-500 focus:outline-none"
            />
          </label>

          <button
            onClick={handleValidate}
            disabled={!canSubmit}
            className={cn(
              "w-full rounded-xl py-3 text-sm font-bold transition-all",
              canSubmit
                ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
                : "cursor-not-allowed bg-warm-200 text-warm-400"
            )}
          >
            {canSubmit ? "Valider" : "Écris ta traduction"}
          </button>
        </>
      ) : (
        <div className="space-y-3">
          {/* Student's answer */}
          <div
            className={cn(
              "rounded-xl border-2 px-4 py-3",
              correct ? "border-success-500 bg-success-100" : "border-red-300 bg-red-50"
            )}
          >
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-500">Ta réponse</p>
            <p lang="en" className="flex items-start gap-2 text-base leading-7 text-warm-900">
              {correct ? (
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-success-500" />
              ) : (
                <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-500" />
              )}
              <span className="break-words">{value.trim()}</span>
            </p>
          </div>

          {result?.typo && result.typos && (
            <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800">
              ✏️ Attention à l&apos;orthographe :{" "}
              {result.typos.map((t, i) => (
                <span key={i}>
                  {i > 0 && ", "}
                  <span className="line-through opacity-70">{t.typed}</span> → <strong>{t.expected}</strong>
                </span>
              ))}
            </p>
          )}

          {/* Model answer with key chunks highlighted */}
          {model && (
            <div className="rounded-xl border border-warm-200 bg-warm-50 px-4 py-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-500">
                {correct && result?.matched === model ? "Réponse attendue" : "Réponse modèle"}
              </p>
              <p lang="en" className="text-base leading-8 text-warm-900">
                {modelSegments.map((seg, i) =>
                  seg.highlighted ? (
                    <mark key={i} className="rounded bg-amber-200 px-1 py-0.5 font-semibold text-warm-900">
                      {seg.text}
                    </mark>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
              </p>
            </div>
          )}

          {/* Key chunks checklist */}
          {shownChunks.length > 0 && (
            <div className="rounded-xl border border-warm-200 bg-white px-4 py-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">
                Les points clés dans ta phrase
              </p>
              <ul className="space-y-1.5">
                {shownChunks.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    {c.found ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-500" aria-label="présent" />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-label="absent" />
                    )}
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span lang="en" className={cn("font-semibold", c.found ? "text-success-600" : "text-red-700")}>
                        {c.label}
                      </span>
                      {!c.found && <span className="text-xs text-warm-500">manque dans ta phrase</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
