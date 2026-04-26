import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEVEL_NAMES,
  SUBJECT_NAMES,
  SUBJECT_ICONS,
  SUBJECT_COLORS,
  type SchoolLevel,
  type Subject,
  type Resource,
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

function groupByChapter(resources: Resource[]): Map<string, Resource[]> {
  const map = new Map<string, Resource[]>();
  for (const r of resources) {
    const key = r.chapter ?? "__autres__";
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(r);
  }
  return map;
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

  const subjectColor = SUBJECT_COLORS[subject as Subject] ?? "";
  const grouped = groupByChapter(resources);

  // Separate chapters from "autres"
  const chapterKeys = [...grouped.keys()]
    .filter((k) => k !== "__autres__")
    .sort((a, b) => {
      const maxCreatedAt = (key: string) =>
        Math.max(...grouped.get(key)!.map((r) => new Date(r.createdAt).getTime()));
      return maxCreatedAt(b) - maxCreatedAt(a);
    });
  const autresResources = grouped.get("__autres__") ?? [];
  const hasChapters = chapterKeys.length > 0;

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
          <span className="text-3xl">{SUBJECT_ICONS[subject as Subject]}</span>
          <div>
            <h1 className="text-2xl font-bold text-warm-800">{subjectName}</h1>
            <p className="text-sm text-warm-600">
              {levelName} &middot; {resources.length} ressource
              {resources.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>

      {resources.length === 0 ? (
        <div className="rounded-2xl border border-warm-200 bg-white/60 p-8 text-center">
          <p className="text-lg text-warm-500">Pas encore de ressources ici.</p>
          <p className="mt-1 text-sm text-warm-400">
            C&apos;est en préparation ! ✨
          </p>
        </div>
      ) : hasChapters ? (
        <div className="space-y-8">
          {chapterKeys.map((chapter) => {
            const chapterResources = grouped.get(chapter)!;
            return (
              <div key={chapter}>
                {/* Chapter header */}
                <div
                  className={`mb-3 flex items-center gap-2 rounded-xl border px-4 py-3 ${subjectColor}`}
                >
                  <span className="text-lg">
                    {SUBJECT_ICONS[subject as Subject]}
                  </span>
                  <span className="font-bold text-sm sm:text-base">
                    {chapter}
                  </span>
                  <span className="ml-auto text-xs opacity-70">
                    {chapterResources.length} ressource
                    {chapterResources.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="space-y-3 pl-2">
                  {chapterResources.map((resource) => (
                    <ResourceCard key={resource.slug} resource={resource} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Resources without a chapter */}
          {autresResources.length > 0 && (
            <div>
              <div className="mb-3 flex items-center gap-2 rounded-xl border border-warm-200 bg-warm-50 px-4 py-3 text-warm-700">
                <span className="font-bold text-sm sm:text-base">
                  Autres ressources
                </span>
                <span className="ml-auto text-xs opacity-70">
                  {autresResources.length} ressource
                  {autresResources.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="space-y-3 pl-2">
                {autresResources.map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} />
                ))}
              </div>
            </div>
          )}
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
