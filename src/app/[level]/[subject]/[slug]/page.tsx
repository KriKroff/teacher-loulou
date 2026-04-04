import { notFound } from "next/navigation";
import Link from "next/link";
import {
  LEVEL_NAMES,
  SUBJECT_NAMES,
  type SchoolLevel,
  type Subject,
} from "@/types";
import { getResourceBySlug, getAllResources, getResourcesByLevelAndSubject } from "@/data/resources";
import { CourseViewer } from "@/components/content/CourseViewer";
import { QuizPlayer } from "@/components/content/QuizPlayer";
import { ResourceTracker } from "@/components/content/ResourceTracker";
import { SVTPuberteFiche } from "@/components/content/SVTPuberteFiche";
import { PCMasseGazFiche } from "@/components/content/PCMasseGazFiche";

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

  // Find related quiz (for fiche/cours pages) or fiche (for quiz pages)
  const siblings = getResourcesByLevelAndSubject(resource.level, resource.subject);
  const relatedQuiz = siblings.find((r) => r.type === "quiz");
  const relatedFiche = siblings.find((r) => r.type === "fiche");
  const isFicheOrCours = (resource.type === "cours" || resource.type === "fiche") && !resource.customComponent;
  const isQuiz = resource.type === "quiz";
  const quizHref = relatedQuiz ? `/${resource.level}/${resource.subject}/${relatedQuiz.slug}` : null;
  const ficheHref = relatedFiche ? `/${resource.level}/${resource.subject}/${relatedFiche.slug}` : null;

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

      {/* Track this resource view */}
      <ResourceTracker resource={resource} />

      {/* Quiz nav button — top of fiche/cours */}
      {isFicheOrCours && resource.content && quizHref && (
        <QuizNavButton href={quizHref} />
      )}

      {/* Fiche nav button — top of quiz */}
      {isQuiz && ficheHref && (
        <FicheNavButton href={ficheHref} />
      )}

      {/* Custom component rendering */}
      {resource.customComponent === "SVTPuberteFiche" && (
        <SVTPuberteFiche
          quizSlug="svt-puberte-quiz"
          level={resource.level}
          subject={resource.subject}
        />
      )}

      {resource.customComponent === "PCMasseGazFiche" && (
        <PCMasseGazFiche
          quizSlug="pc-masse-gaz-quiz"
          level={resource.level}
          subject={resource.subject}
        />
      )}

      {/* Standard markdown fiche/cours — skip if customComponent handles it */}
      {isFicheOrCours && resource.content && <CourseViewer resource={resource} />}

      {/* Quiz nav button — bottom of fiche/cours */}
      {isFicheOrCours && resource.content && quizHref && (
        <QuizNavButton href={quizHref} />
      )}

      {resource.type === "quiz" && resource.quizData && (
        <QuizPlayer resource={resource} />
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

