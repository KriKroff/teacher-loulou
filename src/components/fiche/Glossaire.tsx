interface GlossaireItemProps {
  term: string;
  children: React.ReactNode;
}

export function GlossaireItem({ term, children }: GlossaireItemProps) {
  return (
    <div className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-3 gap-y-0.5 py-2 border-b border-amber-100 last:border-0 text-sm leading-snug">
      <span className="font-bold text-warm-900 pt-0.5">{term}</span>
      <span className="text-warm-700">{children}</span>
    </div>
  );
}

export function Glossaire({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-amber-200 bg-amber-50/50">
      <div className="flex items-center gap-2 bg-amber-100/80 px-4 py-2">
        <span className="text-base">📖</span>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
          Vocabulaire à connaître
        </span>
      </div>
      <div className="px-4 py-1">{children}</div>
    </div>
  );
}
