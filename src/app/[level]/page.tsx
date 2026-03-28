import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEVEL_NAMES,
  SUBJECT_NAMES,
  SUBJECT_ICONS,
  SUBJECT_COLORS,
  type SchoolLevel,
} from "@/types";
import { getAvailableSubjects, getAvailableLevels } from "@/data/resources";

interface Props {
  params: Promise<{ level: string }>;
}

export function generateStaticParams() {
  return getAvailableLevels().map((level) => ({ level }));
}

export default async function LevelPage({ params }: Props) {
  const { level } = await params;
  const levelName = LEVEL_NAMES[level as SchoolLevel];

  if (!levelName) {
    notFound();
  }

  const subjects = getAvailableSubjects(level as SchoolLevel);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/"
          className="mb-2 inline-flex items-center gap-1 text-sm text-warm-500 hover:text-accent-600"
        >
          ← Accueil
        </Link>
        <h1 className="text-2xl font-bold text-warm-800">{levelName}</h1>
        <p className="text-warm-600">Choisis une matière</p>
      </div>

      {subjects.length === 0 ? (
        <div className="rounded-2xl border border-warm-200 bg-white/60 p-8 text-center">
          <p className="text-lg text-warm-500">
            Pas encore de ressources pour ce niveau.
          </p>
          <p className="mt-1 text-sm text-warm-400">
            Ça arrive bientôt ! 🚀
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {subjects.map((subject) => (
            <Link
              key={subject}
              href={`/${level}/${subject}`}
              className={`group flex flex-col items-center gap-2 rounded-2xl border p-5 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98] ${SUBJECT_COLORS[subject]}`}
            >
              <span className="text-3xl">{SUBJECT_ICONS[subject]}</span>
              <span className="text-sm font-semibold">
                {SUBJECT_NAMES[subject]}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
