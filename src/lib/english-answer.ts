/**
 * Tolerant comparison of typed English answers (traduction, correction-erreur,
 * expression-libre). Pure functions — no React, unit-testable with `npx tsx`.
 *
 * Normalization ignores what a teacher would not penalise in a typed answer:
 * case, extra spaces, curly quotes, final punctuation, commas, "Mr." vs "Mr",
 * contractions (can't = cannot) and a few common US/UK spellings.
 */

// ── US → UK spellings (whole words) ──────────────────────────────────────────

/** Verb stems spelled -ize (US) / -ise (UK). Every derived form is mapped. */
const IZE_STEMS = [
  "realiz",
  "organiz",
  "recogniz",
  "apologiz",
  "criticiz",
  "memoriz",
  "emphasiz",
  "summariz",
  "characteriz",
  "specializ",
  "sympathiz",
  "prioritiz",
  "authoriz",
  "civiliz",
  "familiariz",
];
const IZE_SUFFIXES = ["e", "ed", "es", "ing", "ation", "ations", "er", "ers"];

const US_TO_UK: Record<string, string> = {
  behavior: "behaviour",
  behaviors: "behaviours",
  color: "colour",
  colors: "colours",
  colored: "coloured",
  colorful: "colourful",
  favorite: "favourite",
  favorites: "favourites",
  center: "centre",
  centers: "centres",
  gray: "grey",
  neighbor: "neighbour",
  neighbors: "neighbours",
  neighborhood: "neighbourhood",
  honor: "honour",
  humor: "humour",
  theater: "theatre",
  traveling: "travelling",
  traveled: "travelled",
  traveler: "traveller",
  canceled: "cancelled",
  mom: "mum",
};
for (const stem of IZE_STEMS) {
  for (const suffix of IZE_SUFFIXES) {
    US_TO_UK[stem + suffix] = stem.slice(0, -1) + "s" + suffix;
  }
}

// ── Contractions ─────────────────────────────────────────────────────────────

/** Ambiguous contractions: 'd = would/had, 's (on pronouns) = is/has. */
interface ContractionReading {
  d: "would" | "had";
  s: "is" | "has";
}
const DEFAULT_READING: ContractionReading = { d: "would", s: "is" };
const ALL_READINGS: ContractionReading[] = [
  { d: "would", s: "is" },
  { d: "had", s: "is" },
  { d: "would", s: "has" },
  { d: "had", s: "has" },
];

/** Words whose 's is a verb (is/has), not a genitive. */
const S_IS_WORDS = [
  "it",
  "he",
  "she",
  "that",
  "what",
  "there",
  "here",
  "who",
  "where",
  "how",
  "when",
  "why",
  "everyone",
  "everybody",
  "nobody",
  "someone",
  "somebody",
  "everything",
  "nothing",
  "something",
];
const S_IS_RE = new RegExp(`\\b(${S_IS_WORDS.join("|")})'s\\b`, "g");

function normalizeWith(input: string, reading: ContractionReading): string {
  let s = input.normalize("NFC");
  // Typographic quotes → straight
  s = s.replace(/[‘’‛ʼ`´′]/g, "'");
  s = s.replace(/[“”„«»"]/g, " ");
  s = s.toLowerCase();
  // Abbreviations: Mr. → mr (before punctuation is stripped)
  s = s.replace(/\b(mr|mrs|ms|dr|st|jr|sr)\./g, "$1");
  // Quotes used as delimiters ('hello') — keep apostrophes inside words
  s = s.replace(/(^|\s)'+/g, "$1").replace(/(?<![sz])'+(?=\s|$)/g, "");
  // Commas anywhere; sentence punctuation when followed by a space or the end
  s = s.replace(/,/g, " ");
  s = s.replace(/[.!?;:…]+(?=\s|$)/g, " ");
  s = s.replace(/^[¡¿]+/, "");
  // Contractions (order matters: specific forms first)
  s = s.replace(/\bwon't\b/g, "will not");
  s = s.replace(/\bshan't\b/g, "shall not");
  s = s.replace(/\bcan't\b/g, "cannot");
  s = s.replace(/\bcan not\b/g, "cannot");
  s = s.replace(/\bain't\b/g, "is not");
  s = s.replace(/n't\b/g, " not");
  s = s.replace(/\bi'm\b/g, "i am");
  s = s.replace(/\blet's\b/g, "let us");
  s = s.replace(/'re\b/g, " are");
  s = s.replace(/'ve\b/g, " have");
  s = s.replace(/'ll\b/g, " will");
  s = s.replace(/'d\b/g, ` ${reading.d}`);
  s = s.replace(S_IS_RE, `$1 ${reading.s}`);
  // Spaces
  s = s.replace(/\s+/g, " ").trim();
  // US → UK spellings (whole words)
  s = s
    .split(" ")
    .map((w) => US_TO_UK[w] ?? w)
    .join(" ");
  return s;
}

/** Canonical form of an English answer (default reading: 'd = would, it's = it is). */
export function normalizeEnglish(input: string): string {
  return normalizeWith(input, DEFAULT_READING);
}

/** Every normalization of `input` under the possible readings of 'd and 's. */
function readings(input: string): string[] {
  return [...new Set(ALL_READINGS.map((r) => normalizeWith(input, r)))];
}

// ── Distances & phrase search ────────────────────────────────────────────────

/** Edit distance (optimal string alignment: a swap of two letters counts as 1). */
export function editDistance(a: string, b: string): number {
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

/** Splits a "|"-separated entry into normalized, non-empty alternatives. */
function alternatives(entry: string): string[] {
  return entry
    .split("|")
    .map((alt) => normalizeEnglish(alt))
    .filter(Boolean);
}

/** Positions where `needle` (word array) occurs in `haystack` (word array). */
function findSequence(haystack: string[], needle: string[]): number[] {
  const found: number[] = [];
  if (needle.length === 0) return found;
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (needle.every((w, k) => haystack[i + k] === w)) found.push(i);
  }
  return found;
}

function containsPhrase(normalizedText: string, normalizedPhrase: string, allowGenitive = false): boolean {
  const words = normalizedText.split(" ");
  const phrase = normalizedPhrase.split(" ");
  if (findSequence(words, phrase).length > 0) return true;
  if (!allowGenitive) return false;
  // "Cameron" also matches "Cameron's" / "parents'"
  const last = phrase.length - 1;
  return words.some((_, i) =>
    phrase.every((w, k) => {
      const t = words[i + k];
      if (t === undefined) return false;
      return k === last ? t === w || t === `${w}'s` || t === `${w}'` : t === w;
    })
  );
}

// ── Public helpers ───────────────────────────────────────────────────────────

/**
 * True when one alternative of `chunk` ("a|b") appears as a whole word / phrase
 * in `answer`, after normalization of both.
 */
export function chunkPresent(answer: string, chunk: string): boolean {
  const alts = alternatives(chunk);
  return readings(answer).some((a) => alts.some((alt) => containsPhrase(a, alt)));
}

/** Same as chunkPresent, for expression-libre required words (genitive 's allowed). */
export function requiredWordPresent(answer: string, entry: string): boolean {
  const alts = alternatives(entry);
  return readings(answer).some((a) => alts.some((alt) => containsPhrase(a, alt, true)));
}

/** Number of words typed (contractions count as one word, as written). */
export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export interface MatchResult {
  correct: boolean;
  /** Accepted only thanks to the typo tolerance. */
  typo: boolean;
  /** The accepted answer that matched (raw, as written in the data). */
  matched?: string;
  /** Misspelled words (typed → expected), when typo is true. */
  typos?: { typed: string; expected: string }[];
}

/** Word positions of `normalizedAnswer` covered by one of the key chunks. */
function keyChunkPositions(normalizedAnswer: string, keyChunks: string[]): Set<number> {
  const words = normalizedAnswer.split(" ");
  const covered = new Set<number>();
  for (const chunk of keyChunks) {
    for (const alt of alternatives(chunk)) {
      const altWords = alt.split(" ");
      for (const start of findSequence(words, altWords)) {
        altWords.forEach((_, k) => covered.add(start + k));
      }
    }
  }
  return covered;
}

/**
 * Compares a typed answer with the accepted answers.
 * - exact match after normalization → correct
 * - otherwise, typo tolerance: same number of words, every differing word is
 *   ≥ 5 letters long with an edit distance of 1, and is not part of a key
 *   chunk (the grammar point must be spelled exactly) → correct with typo flag.
 */
export function matchesAny(answer: string, accepted: string[], keyChunks: string[] = []): MatchResult {
  const answerForms = readings(answer);
  if (!answerForms[0]) return { correct: false, typo: false };

  for (const acc of accepted) {
    const accForms = readings(acc);
    if (accForms.some((f) => answerForms.includes(f))) {
      return { correct: true, typo: false, matched: acc };
    }
  }

  for (const acc of accepted) {
    for (const accForm of readings(acc)) {
      const expected = accForm.split(" ");
      const protectedPositions = keyChunkPositions(accForm, keyChunks);
      for (const ansForm of answerForms) {
        const typed = ansForm.split(" ");
        if (typed.length !== expected.length) continue;
        const typos: { typed: string; expected: string }[] = [];
        const ok = expected.every((word, i) => {
          if (typed[i] === word) return true;
          if (protectedPositions.has(i)) return false;
          if (word.length < 5 || typed[i].length < 4) return false;
          if (editDistance(typed[i], word) > 1) return false;
          typos.push({ typed: typed[i], expected: word });
          return true;
        });
        if (ok && typos.length > 0) return { correct: true, typo: true, matched: acc, typos };
      }
    }
  }
  return { correct: false, typo: false };
}

/**
 * Splits raw text into display segments, flagging the words that belong to a
 * key chunk (used to highlight the model answer).
 */
export function highlightChunks(text: string, chunks: string[]): { text: string; highlighted: boolean }[] {
  const rawTokens = [...text.matchAll(/\S+/g)].map((m) => ({ text: m[0], index: m.index ?? 0 }));
  // Each raw token may expand to several normalized words (doesn't → does not)
  const flat: { word: string; token: number }[] = [];
  rawTokens.forEach((tok, t) => {
    for (const word of normalizeEnglish(tok.text).split(" ")) {
      if (word) flat.push({ word, token: t });
    }
  });
  const words = flat.map((f) => f.word);
  const marked = new Set<number>();
  for (const chunk of chunks) {
    for (const alt of alternatives(chunk)) {
      const altWords = alt.split(" ");
      for (const start of findSequence(words, altWords)) {
        altWords.forEach((_, k) => marked.add(flat[start + k].token));
      }
    }
  }
  const segments: { text: string; highlighted: boolean }[] = [];
  let last = 0;
  rawTokens.forEach((tok, t) => {
    if (tok.index > last) segments.push({ text: text.slice(last, tok.index), highlighted: false });
    const hl = marked.has(t);
    const prev = segments[segments.length - 1];
    // Merge a highlighted space between two highlighted words
    if (hl && prev && !prev.highlighted && /^\s+$/.test(prev.text) && segments[segments.length - 2]?.highlighted) {
      segments.pop();
      segments[segments.length - 1].text += prev.text + tok.text;
    } else {
      segments.push({ text: tok.text, highlighted: hl });
    }
    last = tok.index + tok.text.length;
  });
  if (last < text.length) segments.push({ text: text.slice(last), highlighted: false });
  return segments;
}

/** Display form of a key chunk: the alternative found in the answer, else the first one. */
export function chunkLabel(chunk: string, answer?: string): string {
  const alts = chunk.split("|").map((a) => a.trim());
  if (answer) {
    const found = alts.find((alt) => chunkPresent(answer, alt));
    if (found) return found;
  }
  return alts[0] ?? chunk;
}
