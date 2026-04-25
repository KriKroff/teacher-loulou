import Link from "next/link";
import { getResourcesByLevelAndSubject } from "@/data/resources";
import type { SchoolLevel, Subject } from "@/types";

interface Props {
  level: SchoolLevel;
  subject: Subject;
  /** Optional explicit slug; otherwise picks the first quiz in the same level/subject */
  slug?: string;
  label?: string;
}

/**
 * Renders a CTA button to the related quiz. Used at the bottom of MDX fiches
 * (the top button is auto-rendered by the resource page).
 *
 * If `slug` is omitted, automatically resolves the first quiz in the same
 * level+subject, mirroring the behaviour of [slug]/page.tsx.
 */
export function QuizLink({ level, subject, slug, label }: Props) {
  const siblings = getResourcesByLevelAndSubject(level, subject);
  const target =
    (slug && siblings.find((r) => r.slug === slug)) ||
    siblings.find((r) => r.type === "quiz");

  if (!target) return null;

  return (
    <Link
      href={`/${level}/${subject}/${target.slug}`}
      className="my-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-accent-700 hover:shadow-lg active:scale-95"
    >
      🎯 {label ?? "Faire le quiz sur ce chapitre →"}
    </Link>
  );
}
