import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEVEL_NAMES,
  SUBJECT_NAMES,
  SUBJECT_ICONS,
  type SchoolLevel,
  type Subject,
} from "@/types";
import {
  getResourcesByLevelAndSubject,
  getAvailableLevels,
  getAvailableSubjects,
} from "@/data/resources";
import { ResourceCard } from "@/components/resources/ResourceCard";

interface Props {
  params: Promise<{ level: string; subject: string }>;
}

export function generateStaticParams() {
  const params: { level: string; subject: string }[] = [];
  for (const level of getAvailableLevels()) {
    for (const subject of getAvailableSubjects(level)) {
      params.push({ level, subject });
    }
  }
  return params;
}

export default async function SubjectPage({ params }: Props) {
  const { level, subject } = await params;
  const levelName = LEVEL_NAMES[level as SchoolLevel];
  const subjectName = SUBJECT_NAMES[subject as Subject];

  if (!levelName || !subjectName) {
    notFound();
  }

  const resources = getResourcesByLevelAndSubject(
    level as SchoolLevel,
    subject as Subject
  );

  return (
    <div className="space-y-6">
      <div>
        <nav className="mb-2 flex items-center gap-1 text-sm text-warm-500">
          <Link href="/" className="hover:text-accent-600">
            Accueil
          </Link>
          <span>/</span>
          <Link href={`/${level}`} className="hover:text-accent-600">
            {levelName}
          </Link>
          <span>/</span>
          <span className="text-warm-700">{subjectName}</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-3xl">
            {SUBJECT_ICONS[subject as Subject]}
          </span>
          <div>
            <h1 className="text-2xl font-bold text-warm-800">
              {subjectName}
            </h1>
            <p className="text-sm text-warm-600">
              {levelName} &middot; {resources.length} ressource
              {resources.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      {resources.length === 0 ? (
        <div className="rounded-2xl border border-warm-200 bg-white/60 p-8 text-center">
          <p className="text-lg text-warm-500">
            Pas encore de ressources ici.
          </p>
          <p className="mt-1 text-sm text-warm-400">
            C&apos;est en préparation ! ✨
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}
