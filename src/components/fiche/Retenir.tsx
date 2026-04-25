import { COLOR_CLASSES, type FicheColor } from "./colors";

interface Props {
  color?: FicheColor;
  title?: string;
  children: React.ReactNode;
}

export function Retenir({ color = "blue", title = "À retenir", children }: Props) {
  const c = COLOR_CLASSES[color];

  return (
    <div
      className={`${c.bg} ${c.borderLeft} border-l-4 rounded-r-xl px-4 py-3 my-4`}
    >
      <div className={`${c.text} text-xs font-bold uppercase tracking-wider mb-1`}>
        🎯 {title}
      </div>
      <div className="text-warm-800">{children}</div>
    </div>
  );
}
