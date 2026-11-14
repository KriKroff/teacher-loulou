import { Fragment, type ReactNode } from "react";

/**
 * Tiny, safe inline markdown for quiz strings: `**bold**` → <strong>,
 * `*italic*` → <em>. Everything else is rendered as plain text (no HTML is
 * ever injected); a lone `*` is left untouched. Display only — grading keeps
 * comparing the raw strings.
 */
const INLINE = /\*\*(?=\S)([\s\S]*?\S)\*\*|\*(?=[^\s*])([^*]*?[^\s*])\*/g;

export function renderInlineMarkdown(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(INLINE)) {
    const index = m.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    if (m[1] !== undefined) {
      // Bold may contain italics: **a *b* c**
      out.push(<strong key={key++}>{renderInlineMarkdown(m[1])}</strong>);
    } else {
      out.push(<em key={key++}>{m[2]}</em>);
    }
    last = index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function InlineMarkdown({ text }: { text?: string | null }) {
  if (!text) return null;
  if (!text.includes("*")) return <>{text}</>;
  return (
    <>
      {renderInlineMarkdown(text).map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}

/** Removes the markdown markers (for aria-labels, plain-text contexts). */
export function stripInlineMarkdown(text: string): string {
  return text.replace(INLINE, (_, bold, italic) => bold ?? italic);
}
