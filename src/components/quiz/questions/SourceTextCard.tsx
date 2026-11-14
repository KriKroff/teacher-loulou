import { InlineMarkdown } from "@/components/quiz/InlineMarkdown";

/** Sentence to translate / build, shown in a highlighted card (shared by the language production types). */
export function SourceTextCard({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div className="flex items-start gap-3 rounded-xl border-2 border-accent-200 bg-accent-100/60 px-4 py-3">
      <span className="text-xl leading-7" aria-hidden="true">
        🇫🇷
      </span>
      <p lang="fr" className="text-base font-medium leading-7 text-warm-900">
        <InlineMarkdown text={text} />
      </p>
    </div>
  );
}
