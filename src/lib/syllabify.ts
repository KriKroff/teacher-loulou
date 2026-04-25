// eslint-disable-next-line @typescript-eslint/no-require-imports
const Hypher = require("hypher");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const frPatterns = require("hyphenation.fr");

const hyphenator = new Hypher(frPatterns);

// Two alternating colors for syllables — chosen for readability on warm background
export const SYLLABLE_COLORS = ["#1D4ED8", "#B45309"] as const;

/**
 * Splits a single word into syllables (French hyphenation).
 * Surrounding punctuation is preserved on the first/last syllable.
 */
export function syllabifyWord(word: string): string[] {
  const match = word.match(/^([^a-zA-ZÀ-ÿ]*)([a-zA-ZÀ-ÿ'-]+)([^a-zA-ZÀ-ÿ]*)$/);
  if (!match) return [word];

  const [, prefix, core, suffix] = match;
  const syllables: string[] = hyphenator.hyphenate(core);

  if (syllables.length <= 1) return [word];

  return syllables.map((syl: string, i: number) => {
    if (i === 0) return prefix + syl;
    if (i === syllables.length - 1) return syl + suffix;
    return syl;
  });
}

/**
 * Wraps each syllable of every word in a <span style="color:..."> tag,
 * alternating between two colors. Tags and HTML entities pass through
 * untouched. Used as a post-processing step on rendered HTML strings.
 */
export function syllabifyHtml(html: string): string {
  let colorIndex = 0;
  const segments = html.split(/(<[^>]+>|&[a-z]+;|&#\d+;)/);

  return segments
    .map((segment) => {
      if (segment.startsWith("<") || segment.startsWith("&")) return segment;
      return segment.replace(/\S+/g, (word) => {
        const syllables = syllabifyWord(word);
        return syllables
          .map((syl) => {
            const color = SYLLABLE_COLORS[colorIndex % 2];
            colorIndex++;
            return `<span style="color:${color}">${syl}</span>`;
          })
          .join("");
      });
    })
    .join("");
}
