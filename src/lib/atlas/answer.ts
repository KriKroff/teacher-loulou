import { COUNTRIES, NEAR_MISSES, type Country } from "@/data/atlas/countries";

/** Lowercase, no accents, no punctuation, no leading article. */
export function normalizeName(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/^(le|la|les|l)\s+/, "");
}

function levenshtein(a: string, b: string): number {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

/** Allowed typos, by length — short names must be exact (Iran ≠ Irak). */
function tolerance(len: number): number {
  if (len <= 4) return 0;
  if (len <= 7) return 1;
  return 2;
}

const NORMALIZED = COUNTRIES.map((c) => ({
  country: c,
  names: [c.name, ...(c.aliases ?? [])].map(normalizeName),
}));

function distanceTo(input: string, names: string[]): number {
  return Math.min(...names.map((n) => levenshtein(input, n)));
}

export type AnswerCheck =
  | { kind: "exact" }
  | { kind: "typo" }
  | { kind: "near"; hint: string }
  | { kind: "other"; other: Country }
  | { kind: "wrong" };

/**
 * Checks a typed answer against the expected country, DYS-friendly:
 * accents, case, hyphens and articles are ignored, small typos are accepted
 * as long as the answer isn't closer to another country.
 */
export function checkTypedAnswer(input: string, expected: Country): AnswerCheck {
  const typed = normalizeName(input);
  if (!typed) return { kind: "wrong" };

  const target = NORMALIZED.find((n) => n.country.id === expected.id)!;
  if (target.names.includes(typed)) return { kind: "exact" };

  const near = NEAR_MISSES[typed];
  if (near && near.countryId === expected.id) return { kind: "near", hint: near.hint };

  // Exactly another country?
  const exactOther = NORMALIZED.find((n) => n.names.includes(typed));
  if (exactOther) return { kind: "other", other: exactOther.country };

  const d = distanceTo(typed, target.names);
  const shortest = Math.min(...target.names.map((n) => n.length));
  if (d <= tolerance(shortest)) {
    const closerOther = NORMALIZED.some(
      (n) => n.country.id !== expected.id && distanceTo(typed, n.names) < d
    );
    if (!closerOther) return { kind: "typo" };
  }
  return { kind: "wrong" };
}
