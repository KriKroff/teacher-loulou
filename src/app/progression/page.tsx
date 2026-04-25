"use client";

import Link from "next/link";
import { BarChart3, BookOpen, List, RotateCcw } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";
import { getAllResources } from "@/data/resources";
import { SUBJECT_NAMES, LEVEL_NAMES, SUBJECT_ICONS } from "@/types";
import type { Subject, SchoolLevel } from "@/types";
import { cn } from "@/lib/utils";

function ScoreBadge({ scores }: { scores: number[] }) {
  if (!scores || scores.length === 0) {
    return <span className="text-xs text-warm-400">Pas encore joué</span>;
  }
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-xs font-bold",
        avg >= 70 ? "bg-green-100 text-green-700" : avg >= 40 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
      )}
    >
      {avg}% moy.
    </span>
  );
}

function QuestionStats({
  history,
}: {
  history: Record<string, { questionId: string; lastResult: string; attempts: number }[]> | undefined;
}) {
  if (!history) return null;
  let seen = 0;
  let failed = 0;
  Object.values(history).forEach((arr) => {
    seen += arr.length;
    failed += arr.filter((h) => h.lastResult === "incorrect").length;
  });
  if (seen === 0) return null;
  return (
    <span className="text-xs text-warm-500">
      {seen} question{seen > 1 ? "s" : ""} vues · {failed} ratée{failed > 1 ? "s" : ""}
    </span>
  );
}

export default function ProgressionPage() {
  const { progressList } = useProgress();
  const allResources = getAllResources();

  // Attach resource metadata to progress entries
  const enriched = progressList
    .map((p) => {
      const resource = allResources.find((r) => r.slug === p.resourceSlug);
      return resource ? { progress: p, resource } : null;
    })
    .filter(Boolean) as { progress: (typeof progressList)[0]; resource: (typeof allResources)[0] }[];

  // Group by subject then by resource
  const grouped: Record<string, Record<string, typeof enriched>> = {};
  enriched.forEach(({ progress, resource }) => {
    const groupKey = `${resource.level}/${resource.subject}`;
    if (!grouped[groupKey]) grouped[groupKey] = {};
    if (!grouped[groupKey][resource.slug]) grouped[groupKey][resource.slug] = [];
    grouped[groupKey][resource.slug].push({ progress, resource });
  });

  const groupKeys = Object.keys(grouped).sort();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/"
          className="mb-2 inline-flex items-center gap-1 text-sm text-warm-500 hover:text-accent-600"
        >
          ← Accueil
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-warm-800">Ma progression</h1>
            <p className="text-sm text-warm-500">Tous tes scores et historiques</p>
          </div>
        </div>
      </div>

      {groupKeys.length === 0 ? (
        <div className="rounded-2xl border border-warm-200 bg-white/60 p-10 text-center space-y-3">
          <div className="text-4xl">📚</div>
          <p className="text-lg font-semibold text-warm-700">Aucune progression pour le moment</p>
          <p className="text-sm text-warm-500">
            Commence un quiz pour voir tes stats ici !
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white transition-all hover:bg-accent-600 active:scale-95"
          >
            <BookOpen className="h-4 w-4" />
            Explorer les ressources
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {groupKeys.map((groupKey) => {
            const [level, subject] = groupKey.split("/") as [SchoolLevel, Subject];
            const resourceMap = grouped[groupKey];

            return (
              <div key={groupKey} className="rounded-2xl border border-warm-200 bg-white/80 overflow-hidden">
                {/* Subject header */}
                <div className="flex items-center gap-3 border-b border-warm-100 bg-warm-50/60 px-4 py-3">
                  <span className="text-2xl">{SUBJECT_ICONS[subject]}</span>
                  <div>
                    <p className="text-xs font-medium text-warm-500">{LEVEL_NAMES[level]}</p>
                    <p className="font-bold text-warm-800">{SUBJECT_NAMES[subject]}</p>
                  </div>
                </div>

                {/* Resources */}
                <div className="divide-y divide-warm-100">
                  {Object.entries(resourceMap).map(([slug, items]) => {
                    const { progress, resource } = items[0];
                    const isQuiz = resource.type === "quiz";
                    const quizHref = `/${level}/${subject}/${slug}`;
                    const questionsHref = `/${level}/${subject}/${slug}/questions`;

                    return (
                      <div key={slug} className="px-4 py-3 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={quizHref}
                            className="font-semibold text-warm-800 hover:text-accent-600 transition-colors"
                          >
                            {resource.title}
                          </Link>
                          {isQuiz && <ScoreBadge scores={progress.quizScores ?? []} />}
                        </div>

                        {isQuiz && (
                          <QuestionStats history={progress.questionHistory} />
                        )}

                        {/* Quiz level breakdown */}
                        {isQuiz && progress.questionHistory && Object.keys(progress.questionHistory).length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {Object.entries(progress.questionHistory).map(([levelId, qs]) => {
                              const correct = qs.filter((h) => h.lastResult === "correct").length;
                              const total = qs.length;
                              const label =
                                levelId === "__root__"
                                  ? "Quiz"
                                  : levelId === "facile"
                                  ? "🟢 Facile"
                                  : levelId === "intermediaire"
                                  ? "🟡 Intermédiaire"
                                  : levelId === "expert"
                                  ? "🔴 Expert"
                                  : levelId;
                              return (
                                <span key={levelId} className="rounded-full bg-warm-100 px-2 py-0.5 text-xs text-warm-600">
                                  {label} · {correct}/{total} OK
                                </span>
                              );
                            })}
                          </div>
                        )}

                        {/* Links */}
                        <div className="flex flex-wrap gap-3 pt-1">
                          {isQuiz && (
                            <Link
                              href={questionsHref}
                              className="flex items-center gap-1 text-xs text-warm-400 hover:text-accent-600 transition-colors"
                            >
                              <List className="h-3 w-3" />
                              Voir toutes les questions
                            </Link>
                          )}
                          <Link
                            href={quizHref}
                            className="flex items-center gap-1 text-xs text-warm-400 hover:text-accent-600 transition-colors"
                          >
                            <RotateCcw className="h-3 w-3" />
                            Rejouer
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
