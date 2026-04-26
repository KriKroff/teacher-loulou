import { COLOR_CLASSES, type FicheColor } from "./colors";

interface Props {
  color?: FicheColor;
  emoji?: string;
  index?: number;
  title: string;
  children?: React.ReactNode;
}

export function Section({ color = "blue", emoji, index, title, children }: Props) {
  const c = COLOR_CLASSES[color];

  return (
    <section className="my-6">
      <div
        className={`${c.bg} ${c.borderLeft} border-l-4 rounded-r-xl px-4 py-3 sm:px-5 sm:py-4`}
      >
        {(index !== undefined) && (
          <div
            className={`${c.text} text-[11px] font-bold uppercase tracking-wider mb-1`}
          >
            {index !== undefined ? `Partie ${index}` : ""}
          </div>
        )}
        <h2 className={`${c.text} text-xl sm:text-2xl font-extrabold leading-tight`}>
            {emoji ? `${emoji} ` : ""} {title}
        </h2>
      </div>
      {children && <div className="mt-3 space-y-3">{children}</div>}
    </section>
  );
}
