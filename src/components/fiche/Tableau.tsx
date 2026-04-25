interface Props {
  caption?: string;
  children: React.ReactNode;
}

/**
 * Responsive table wrapper. Adds horizontal scroll on small screens and
 * styles inner <th>/<td>/<tr> via CSS descendants to avoid the burden
 * of styling each cell from MDX.
 */
export function Tableau({ caption, children }: Props) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-warm-200 bg-white/80">
      <table className="w-full border-collapse text-sm fiche-table">
        {caption && (
          <caption className="px-3 pt-3 text-left text-xs text-warm-500 italic">
            {caption}
          </caption>
        )}
        {children}
      </table>
    </div>
  );
}
