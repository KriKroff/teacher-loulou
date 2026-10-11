/**
 * Tiny markup used by the "nature-mots" and "surlignage" quiz question types.
 *
 *   [mot|Réponse]  → target word with its expected answer (nature-mots)
 *   [mot]          → target word, no answer (surlignage: a word to select)
 *   {mot}          → plain group kept as one token (e.g. {aujourd'hui})
 *   anything else  → plain text
 */

export type TaggedSegment =
  | { kind: "text"; text: string }
  | { kind: "group"; text: string }
  | { kind: "target"; text: string; answer?: string };

const MARKUP = /\[([^\]|]+)(?:\|([^\]]+))?\]|\{([^}]+)\}/g;

export function parseTaggedText(source: string): TaggedSegment[] {
  const segments: TaggedSegment[] = [];
  let last = 0;
  for (const match of source.matchAll(MARKUP)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ kind: "text", text: source.slice(last, index) });
    if (match[3] !== undefined) {
      segments.push({ kind: "group", text: match[3] });
    } else {
      segments.push({ kind: "target", text: match[1], answer: match[2]?.trim() });
    }
    last = index + match[0].length;
  }
  if (last < source.length) segments.push({ kind: "text", text: source.slice(last) });
  return segments;
}

export type WordToken =
  | { kind: "space"; text: string }
  | { kind: "word"; id: number; text: string; isTarget: boolean };

// A word = letters/digits/hyphens, keeping a trailing elided apostrophe (l', qu', s')
const WORD = /[\p{L}\p{N}-]+['’]?/gu;

/** Splits tagged text into clickable word tokens (for "surlignage"). */
export function tokenizeTaggedText(source: string): WordToken[] {
  const tokens: WordToken[] = [];
  let id = 0;
  for (const seg of parseTaggedText(source)) {
    if (seg.kind !== "text") {
      tokens.push({ kind: "word", id: id++, text: seg.text, isTarget: seg.kind === "target" });
      continue;
    }
    let last = 0;
    for (const match of seg.text.matchAll(WORD)) {
      const index = match.index ?? 0;
      if (index > last) tokens.push({ kind: "space", text: seg.text.slice(last, index) });
      tokens.push({ kind: "word", id: id++, text: match[0], isTarget: false });
      last = index + match[0].length;
    }
    if (last < seg.text.length) tokens.push({ kind: "space", text: seg.text.slice(last) });
  }
  return tokens;
}
