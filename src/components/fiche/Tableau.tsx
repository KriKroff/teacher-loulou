import { ResponsiveTable } from "@/components/content/ResponsiveTable";

interface Props {
  caption?: string;
  children: React.ReactNode;
}

/**
 * Table wrapper for raw <thead>/<tr> JSX in MDX. Same phone behaviour as
 * markdown tables (sideways scroll when needed, pinned header column/row).
 */
export function Tableau({ caption, children }: Props) {
  return (
    <ResponsiveTable className="fiche-table" caption={caption}>
      {children}
    </ResponsiveTable>
  );
}
