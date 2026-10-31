interface Props {
  title?: string;
  children: React.ReactNode;
}

/** Collapsible "go further" block: hidden by default to keep the fiche light. */
export function Details({ title = "Pour aller plus loin", children }: Props) {
  return (
    <details className="my-4 rounded-xl border-2 border-dashed border-warm-300 bg-warm-50 px-4 py-3">
      <summary className="cursor-pointer select-none font-bold text-warm-800">
        🔎 {title} <span className="text-xs font-normal text-warm-500">(touche pour ouvrir)</span>
      </summary>
      <div className="mt-2 text-warm-800">{children}</div>
    </details>
  );
}
