/**
 * Minimal client for the public LanguageTool API (https://languagetool.org/http-api/),
 * used by the "expression-libre" quiz question to check a sentence written by
 * the student. Called from the browser; only the sentence is sent.
 *
 * The public API is free but rate-limited (≈ 20 requests/min per IP) — callers
 * must always handle `{ ok: false }` and fall back to a local check.
 */

import { normalizeEnglish } from "./english-answer";

const ENDPOINT = "https://api.languagetool.org/v2/check";

/** Subset of a LanguageTool match (documented JSON response). */
export interface LtMatch {
  message: string;
  shortMessage?: string;
  offset: number;
  length: number;
  replacements: { value: string }[];
  rule: {
    id: string;
    description?: string;
    issueType?: string;
    category: { id: string; name?: string };
  };
}

export type LtResult =
  | { ok: true; matches: LtMatch[] }
  | { ok: false; reason: "timeout" | "rate-limit" | "network" | "http" | "offline" };

/** Categories that don't matter for a 14-year-old's sentence. */
const IGNORED_CATEGORIES = new Set([
  "TYPOGRAPHY",
  "PUNCTUATION",
  "CASING",
  "STYLE",
  "REDUNDANCY",
  "PLAIN_ENGLISH",
  "REPETITIONS_STYLE",
  "WIKIPEDIA",
  "MISUSED_TERMS_EU_PUBLICATIONS",
  "TEXT_ANALYSIS",
  "AMERICAN_ENGLISH_STYLE",
  "BRITISH_ENGLISH",
]);

/** Individual rules ignored whatever their category. */
const IGNORED_RULES = new Set([
  "WHITESPACE_RULE",
  "COMMA_PARENTHESIS_WHITESPACE",
  "DOUBLE_PUNCTUATION",
  "EN_QUOTES",
  "UPPERCASE_SENTENCE_START",
  "I_LOWERCASE",
  "EN_UNPAIRED_BRACKETS",
  "EN_UNPAIRED_QUOTES",
  "PUNCTUATION_PARAGRAPH_END",
  "SENTENCE_WHITESPACE",
  "EN_CONTRACTION_SPELLING",
]);

/** issueType values that are about presentation, not language. */
const IGNORED_ISSUE_TYPES = new Set(["typographical", "whitespace", "style"]);

/** Short French label per LanguageTool category. */
const CATEGORY_LABELS: Record<string, string> = {
  GRAMMAR: "Grammaire",
  TYPOS: "Orthographe",
  CONFUSED_WORDS: "Mot confondu",
  COLLOCATIONS: "Association de mots",
  FALSE_FRIENDS: "Faux ami",
  SEMANTICS: "Sens",
  NONSTANDARD_PHRASES: "Expression",
  COMPOUNDING: "Mot composé",
  MISC: "À vérifier",
};

export function categoryLabel(categoryId: string): string {
  return CATEGORY_LABELS[categoryId] ?? "À vérifier";
}

/**
 * Keeps only the issues worth showing to a student.
 * @param knownWords words that must never be flagged as misspelled (names
 *   from the film, required words…), compared case-insensitively.
 */
export function filterRelevantMatches(matches: LtMatch[], text: string, knownWords: string[] = []): LtMatch[] {
  const known = new Set(knownWords.map((w) => w.toLowerCase()));
  return matches.filter((m) => {
    if (!m || !m.rule || typeof m.offset !== "number" || typeof m.length !== "number") return false;
    if (IGNORED_RULES.has(m.rule.id)) return false;
    if (IGNORED_CATEGORIES.has(m.rule.category?.id)) return false;
    if (m.rule.issueType && IGNORED_ISSUE_TYPES.has(m.rule.issueType)) return false;
    const flagged = text.slice(m.offset, m.offset + m.length);
    if (m.rule.category?.id === "TYPOS" || m.rule.issueType === "misspelling") {
      // Proper nouns of the lesson, required words…
      if (known.has(flagged.toLowerCase())) return false;
      // US spelling flagged in en-GB (color → colour): accepted everywhere else in the app
      const canonical = normalizeEnglish(flagged);
      if ((m.replacements ?? []).some((r) => normalizeEnglish(r.value) === canonical)) return false;
    }
    return true;
  });
}

/** Sends `text` to LanguageTool (en-GB, French mother tongue). Never throws. */
export async function checkEnglish(text: string, opts: { timeoutMs?: number; signal?: AbortSignal } = {}): Promise<LtResult> {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return { ok: false, reason: "offline" };

  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, opts.timeoutMs ?? 8000);
  const onOuterAbort = () => controller.abort();
  opts.signal?.addEventListener("abort", onOuterAbort);

  try {
    const body = new URLSearchParams({
      text,
      language: "en-GB",
      motherTongue: "fr",
      level: "default",
      disabledCategories: "TYPOGRAPHY,PUNCTUATION,CASING,STYLE,REDUNDANCY",
    });
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body,
      signal: controller.signal,
    });
    if (res.status === 429) return { ok: false, reason: "rate-limit" };
    if (!res.ok) return { ok: false, reason: "http" };
    const json = (await res.json()) as { matches?: unknown };
    if (!Array.isArray(json.matches)) return { ok: false, reason: "http" };
    return { ok: true, matches: json.matches as LtMatch[] };
  } catch {
    return { ok: false, reason: timedOut ? "timeout" : "network" };
  } finally {
    clearTimeout(timer);
    opts.signal?.removeEventListener("abort", onOuterAbort);
  }
}
