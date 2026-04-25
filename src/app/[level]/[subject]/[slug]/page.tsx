import { notFound } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import {
  LEVEL_NAMES,
  SUBJECT_NAMES,
  type SchoolLevel,
  type Subject,
} from "@/types";
import { getResourceBySlug, getAllResources, getRelatedResource } from "@/data/resources";
import { MdxRenderer } from "@/components/content/MdxRenderer";
import { QuizPlayer } from "@/components/quiz/QuizPlayer";
import { ResourceTracker } from "@/components/content/ResourceTracker";

interface Props {
  params: Promise<{ level: string; subject: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllResources().map((r) => ({
    level: r.level,
    subject: r.subject,
    slug: r.slug,
  }));
}

function QuizNavButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-accent-700 hover:shadow-lg active:scale-95"
    >
      📝 Passer au quiz →
    </Link>
  );
}

function FicheNavButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-accent-300 bg-accent-50 px-6 py-3.5 text-base font-bold text-accent-700 shadow-sm transition-all hover:bg-accent-100 hover:shadow-md active:scale-95"
    >
      📖 Revoir la fiche de révision →
    </Link>
  );
}

async function readMdxSource(mdxPath: string): Promise<string> {
  const absolute = path.join(process.cwd(), "src/data/resources", mdxPath);
  return fs.readFile(absolute, "utf-8");
}

export default async function ResourcePage({ params }: Props) {
  const { level, subject, slug } = await params;
  const resource = getResourceBySlug(
    level as SchoolLevel,
    subject as Subject,
    slug
  );

  if (!resource) {
    notFound();
  }

  const levelName = LEVEL_NAMES[resource.level];
  const subjectName = SUBJECT_NAMES[resource.subject];

  const isFicheOrCours = resource.type === "cours" || resource.type === "fiche";
  const isFicheOrCoursStandard = isFicheOrCours;
  const isQuiz = resource.type === "quiz";
  const relatedResource = getRelatedResource(resource);
  const quizHref = relatedResource && relatedResource.type === "quiz"
    ? `/${resource.level}/${resource.subject}/${relatedResource.slug}`
    : null;
  const ficheHref = relatedResource && relatedResource.type === "fiche"
    ? `/${resource.level}/${resource.subject}/${relatedResource.slug}`
    : null;

  let mdxSource: string | null = null;
  if (resource.mdxPath) {
    mdxSource = await readMdxSource(resource.mdxPath);
  }

  const hasMdxOrLegacyContent = mdxSource !== null;

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-1 text-sm text-warm-500">
        <Link href="/" className="hover:text-accent-600">
          Accueil
        </Link>
        <span>/</span>
        <Link href={`/${level}`} className="hover:text-accent-600">
          {levelName}
        </Link>
        <span>/</span>
        <Link href={`/${level}/${subject}`} className="hover:text-accent-600">
          {subjectName}
        </Link>
        <span>/</span>
        <span className="truncate text-warm-700">{resource.title}</span>
      </nav>

      <ResourceTracker resource={resource} />

      {/* Quiz nav button — top of fiche/cours */}
      {isFicheOrCoursStandard && hasMdxOrLegacyContent && quizHref && (
        <QuizNavButton href={quizHref} />
      )}

      {/* Fiche nav button — top of quiz */}
      {isQuiz && ficheHref && <FicheNavButton href={ficheHref} />}

      {/* MDX content */}
      {isFicheOrCoursStandard && mdxSource !== null && (
        <MdxRenderer source={mdxSource} />
      )}

      {/* Quiz nav button — bottom of fiche/cours */}
      {isFicheOrCoursStandard && hasMdxOrLegacyContent && quizHref && (
        <QuizNavButton href={quizHref} />
      )}

      {resource.type === "quiz" && resource.quizData && (
        <Suspense fallback={null}>
          <QuizPlayer resource={resource} />
        </Suspense>
      )}

      {resource.type === "video" && resource.videoUrl && (
        <div className="overflow-hidden rounded-2xl">
          <div className="aspect-video">
            <iframe
              src={resource.videoUrl}
              className="h-full w-full"
              allowFullScreen
              title={resource.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}
