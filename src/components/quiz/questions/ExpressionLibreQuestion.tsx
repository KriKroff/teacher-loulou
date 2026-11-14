"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { countWords, requiredWordPresent } from "@/lib/english-answer";
import { categoryLabel, checkEnglish, filterRelevantMatches, type LtMatch } from "@/lib/languagetool";
import { autoGrow } from "./TraductionQuestion";
import type { QuestionComponentProps } from "./types";
import { InlineMarkdown } from "@/components/quiz/InlineMarkdown";

type Phase = "writing" | "checking" | "done";

interface Report {
  text: string;
  missingWords: string[];
  tooShort: boolean;
  issues: LtMatch[];
  /** False when LanguageTool could not be reached. */
  checked: boolean;
}

/** Splits the text into plain parts and numbered issue spans (overlapping issues are skipped). */
function segmentIssues(text: string, issues: LtMatch[]) {
  const sorted = [...issues].sort((a, b) => a.offset - b.offset);
  const segments: { text: string; issue?: number }[] = [];
  let last = 0;
  sorted.forEach((m) => {
    if (m.offset < last || m.offset + m.length > text.length) return;
    if (m.offset > last) segments.push({ text: text.slice(last, m.offset) });
    segments.push({ text: text.slice(m.offset, m.offset + m.length) || "␣", issue: issues.indexOf(m) });
    last = m.offset + m.length;
  });
  if (last < text.length) segments.push({ text: text.slice(last) });
  return segments;
}

/**
 * "Écris en anglais" — free sentence with required words and a minimum
 * length, checked by the public LanguageTool API (falls back to the local
 * checks when it can't be reached).
 */
export function ExpressionLibreQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const [value, setValue] = useState("");
  const [phase, setPhase] = useState<Phase>("writing");
  const [report, setReport] = useState<Report | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const requiredWords = useMemo(() => question.requiredWords ?? [], [question.requiredWords]);
  const minWords = question.minWords ?? 0;
  const wordCount = countWords(value);
  const canSubmit = value.trim().length > 0 && phase === "writing" && !showFeedback;

  // Cancel a pending check if the question is left
  useEffect(() => () => abortRef.current?.abort(), []);

  const handleValidate = async () => {
    if (!canSubmit) return;
    const text = value.trim();
    const missingWords = requiredWords.filter((w) => !requiredWordPresent(text, w));
    const tooShort = countWords(text) < minWords;

    setPhase("checking");
    const controller = new AbortController();
    abortRef.current = controller;
    const res = await checkEnglish(text, { signal: controller.signal });
    if (controller.signal.aborted) return; // question left while checking

    // Names / required words must never count as spelling mistakes
    const knownWords = [
      ...requiredWords.flatMap((w) => w.split("|")),
      ...(question.modelAnswer ?? "").split(/[^\p{L}'’-]+/u),
    ].filter(Boolean);
    const issues = res.ok ? filterRelevantMatches(res.matches, text, knownWords) : [];
    const next: Report = { text, missingWords, tooShort, issues, checked: res.ok };
    setReport(next);
    setPhase("done");
    onAnswer(missingWords.length === 0 && !tooShort && issues.length === 0, text);
  };

  if (showFeedback && report) return <ExpressionFeedback report={report} question={question} minWords={minWords} />;

  const checking = phase === "checking";

  return (
    <div className="space-y-3">
      {/* Required words */}
      {requiredWords.length > 0 && (
        <div>
          <p className="mb-1.5 text-xs font-semibold text-warm-600">Mots obligatoires :</p>
          <div lang="en" className="flex flex-wrap gap-2">
            {requiredWords.map((w) => {
              const present = requiredWordPresent(value, w);
              return (
                <span
                  key={w}
                  className={cn(
                    "flex items-center gap-1 rounded-full border-2 px-3 py-1 text-sm font-semibold transition-colors",
                    present
                      ? "border-success-500 bg-success-100 text-success-600"
                      : "border-warm-300 bg-white text-warm-600"
                  )}
                >
                  {present && <CheckCircle2 className="h-4 w-4" />}
                  {w.split("|").join(" / ")}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <label className="block">
        <span className="sr-only">Ta phrase en anglais</span>
        <textarea
          value={value}
          rows={3}
          lang="en"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          disabled={checking}
          placeholder="Écris ta phrase en anglais…"
          onChange={(e) => {
            setValue(e.target.value);
            autoGrow(e.target);
          }}
          className="block min-h-[88px] w-full resize-none overflow-hidden rounded-xl border-2 border-accent-200 bg-white px-3 py-3 text-base leading-7 text-warm-900 placeholder-warm-300 focus:border-accent-500 focus:outline-none disabled:opacity-60"
        />
      </label>

      <div className="flex items-center justify-between text-xs">
        <span
          className={cn(
            "font-semibold",
            minWords > 0 && wordCount >= minWords ? "text-success-600" : "text-warm-500"
          )}
        >
          {wordCount} mot{wordCount > 1 ? "s" : ""}
          {minWords > 0 && ` / ${minWords} minimum`}
          {minWords > 0 && wordCount >= minWords && " ✓"}
        </span>
      </div>

      <button
        onClick={handleValidate}
        disabled={!canSubmit}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all",
          canSubmit
            ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
            : checking
              ? "cursor-wait bg-accent-400 text-white"
              : "cursor-not-allowed bg-warm-200 text-warm-500"
        )}
      >
        {checking ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Vérification…
          </>
        ) : value.trim() ? (
          "Valider"
        ) : (
          "Écris ta phrase"
        )}
      </button>

      <p className="text-center text-[11px] leading-snug text-warm-400">
        Ta phrase est envoyée à LanguageTool pour être corrigée (aucune donnée personnelle).
      </p>
    </div>
  );
}

function ExpressionFeedback({
  report,
  question,
  minWords,
}: {
  report: Report;
  question: QuestionComponentProps["question"];
  minWords: number;
}) {
  const { text, missingWords, tooShort, issues, checked } = report;
  const segments = segmentIssues(text, issues);
  const wordCount = countWords(text);
  const requiredWords = question.requiredWords ?? [];

  return (
    <div className="space-y-3">
      {/* Student's text with issues underlined */}
      <div className="rounded-xl border border-warm-200 bg-white px-4 py-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-500">Ta phrase</p>
        <p lang="en" className="break-words text-base leading-8 text-warm-900">
          {segments.map((seg, i) =>
            seg.issue === undefined ? (
              <span key={i}>{seg.text}</span>
            ) : (
              <span key={i} className="rounded bg-red-50 underline decoration-red-400 decoration-wavy decoration-2 underline-offset-4">
                {seg.text}
                <sup className="ml-0.5 text-xs font-bold text-red-600">{seg.issue + 1}</sup>
              </span>
            )
          )}
        </p>
      </div>

      {/* Checklist */}
      <ul className="space-y-1.5 rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm">
        {requiredWords.map((w) => {
          const ok = !missingWords.includes(w);
          return (
            <li key={w} className="flex items-center gap-2">
              {ok ? <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" /> : <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
              <span>
                Mot obligatoire <strong lang="en">{w.split("|").join(" / ")}</strong>
                {!ok && <span className="text-red-700"> — absent</span>}
              </span>
            </li>
          );
        })}
        {minWords > 0 && (
          <li className="flex items-center gap-2">
            {!tooShort ? <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" /> : <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
            <span>
              {wordCount} mot{wordCount > 1 ? "s" : ""} (minimum {minWords})
            </span>
          </li>
        )}
        {checked && (
          <li className="flex items-center gap-2">
            {issues.length === 0 ? <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" /> : <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
            <span>
              {issues.length === 0
                ? "Aucune faute trouvée par le correcteur"
                : `${issues.length} point${issues.length > 1 ? "s" : ""} à corriger`}
            </span>
          </li>
        )}
      </ul>

      {/* Issues */}
      {issues.length > 0 && (
        <ol className="space-y-2">
          {issues.map((m, i) => {
            const flagged = text.slice(m.offset, m.offset + m.length);
            const suggestions = (m.replacements ?? []).slice(0, 3).map((r) => r.value);
            return (
              <li key={i} className="rounded-xl border border-red-200 bg-red-50/60 px-3 py-2.5 text-sm">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-bold text-red-600">{i + 1}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-red-700 ring-1 ring-red-200">
                    {categoryLabel(m.rule.category.id)}
                  </span>
                  <span lang="en" className="font-semibold text-red-700 line-through">{flagged}</span>
                  {suggestions.length > 0 && (
                    <span lang="en" className="font-semibold text-success-600">→ {suggestions.join(" / ")}</span>
                  )}
                </div>
                {m.message && (
                  <details className="mt-1">
                    <summary className="cursor-pointer text-xs text-warm-500">Détail (en anglais)</summary>
                    <p lang="en" className="mt-1 text-xs text-warm-600">{m.message}</p>
                  </details>
                )}
              </li>
            );
          })}
        </ol>
      )}

      {!checked && (
        <p className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm text-sky-800">
          ℹ️ Correction automatique indisponible : compare ta phrase avec l&apos;exemple.
        </p>
      )}

      {question.modelAnswer && (
        <div className="rounded-xl border border-warm-200 bg-warm-50 px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-500">Exemple de bonne réponse</p>
          <p lang="en" className="text-base font-semibold leading-7 text-success-600"><InlineMarkdown text={question.modelAnswer} /></p>
        </div>
      )}
    </div>
  );
}
