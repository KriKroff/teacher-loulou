"use client";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const Hypher = require("hypher");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const frPatterns = require("hyphenation.fr");

const hyphenator = new Hypher(frPatterns);

// Two alternating colors for syllables — chosen for readability on warm background
const SYLLABLE_COLORS = ["#1D4ED8", "#B45309"] as const;

function splitIntoSyllables(word: string): string[] {
  // Strip surrounding punctuation to hyphenate the core word
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

interface SyllableTextProps {
  text: string;
  className?: string;
}

export function SyllableText({ text, className }: SyllableTextProps) {
  const tokens = text.split(/(\s+)/);
  let syllableIndex = 0;

  return (
    <span className={className}>
      {tokens.map((token, tokenIdx) => {
        // Preserve whitespace tokens as-is
        if (/^\s+$/.test(token)) {
          return <span key={tokenIdx}>{token}</span>;
        }

        const syllables = splitIntoSyllables(token);
        return (
          <span key={tokenIdx}>
            {syllables.map((syl, sylIdx) => {
              const color = SYLLABLE_COLORS[syllableIndex % 2];
              syllableIndex++;
              return (
                <span key={sylIdx} style={{ color }}>
                  {syl}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
