import { notFound } from "next/navigation";
import Link from "next/link";
import {
  LEVEL_NAMES,
  SUBJECT_NAMES,
  type SchoolLevel,
  type Subject,
} from "@/types";
import { getResourceBySlug, getAllResources } from "@/data/resources";
import { CourseViewer } from "@/components/content/CourseViewer";
import { QuizPlayer } from "@/components/content/QuizPlayer";
import { ResourceTracker } from "@/components/content/ResourceTracker";
import { SVTPuberteFiche } from "@/components/content/SVTPuberteFiche";

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

      {/* Custom component rendering */}
      {resource.customComponent === "SVTPuberteFiche" && (
        <SVTPuberteFiche
          quizSlug="svt-puberte-quiz"
          level={resource.level}
          subject={resource.subject}
        />
      )}

      {/* Standard markdown fiche/cours — skip if customComponent handles it */}
      {(resource.type === "cours" || resource.type === "fiche") &&
        resource.content &&
        !resource.customComponent && <CourseViewer resource={resource} />}

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
