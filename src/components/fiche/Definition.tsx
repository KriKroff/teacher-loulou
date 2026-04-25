import { COLOR_CLASSES, type FicheColor } from "./colors";

interface Props {
  term: string;
  color?: FicheColor;
  children: React.ReactNode;
}

export function Definition({ term, color = "purple", children }: Props) {
  const c = COLOR_CLASSES[color];

  return (
    <div
      className={`${c.bg} ${c.border} border rounded-xl px-4 py-3 my-4`}
    >
      <dl>
        <dt className={`${c.text} font-bold text-base mb-1`}>{term}</dt>
        <dd className="text-warm-800">{children}</dd>
      </dl>
    </div>
  );
}
