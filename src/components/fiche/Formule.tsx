interface Props {
  legend?: string;
  children: React.ReactNode;
}

/**
 * Block container for a math formula. The formula itself is typically
 * authored in MDX as `$$...$$` (rendered to KaTeX HTML by rehype-katex).
 * This wrapper centers it and provides a legend slot.
 */
export function Formule({ legend, children }: Props) {
  return (
    <div className="my-5 rounded-xl border border-warm-200 bg-white/80 px-4 py-4 text-center overflow-x-auto">
      <div className="text-warm-900">{children}</div>
      {legend && (
        <div className="mt-2 text-xs text-warm-500 italic">{legend}</div>
      )}
    </div>
  );
}
