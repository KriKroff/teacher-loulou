import { COLOR_CLASSES, type FicheColor } from "./colors";

interface CalloutProps {
  color: FicheColor;
  emoji: string;
  defaultTitle: string;
  title?: string;
  children: React.ReactNode;
}

function Callout({ color, emoji, defaultTitle, title, children }: CalloutProps) {
  const c = COLOR_CLASSES[color];
  return (
    <div
      className={`${c.bg} ${c.borderLeft} border-l-4 rounded-r-xl px-4 py-3 my-4`}
    >
      <div className={`${c.text} text-xs font-bold uppercase tracking-wider mb-1`}>
        {emoji} {title ?? defaultTitle}
      </div>
      <div className="text-warm-800">{children}</div>
    </div>
  );
}

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Exemple({ title, children }: Props) {
  return (
    <Callout color="green" emoji="💡" defaultTitle="Exemple" title={title}>
      {children}
    </Callout>
  );
}

export function Astuce({ title, children }: Props) {
  return (
    <Callout color="amber" emoji="✨" defaultTitle="Astuce" title={title}>
      {children}
    </Callout>
  );
}

export function Erreur({ title, children }: Props) {
  return (
    <Callout color="rose" emoji="⚠️" defaultTitle="Attention" title={title}>
      {children}
    </Callout>
  );
}

export function Vocabulaire({ title, children }: Props) {
  return (
    <Callout color="purple" emoji="📚" defaultTitle="Vocabulaire" title={title}>
      {children}
    </Callout>
  );
}
