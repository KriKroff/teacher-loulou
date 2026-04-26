"use client";

import Link from "next/link";
import { RotateCcw, CheckCircle, XCircle, Circle } from "lucide-react";
import type { Quiz, QuizQuestion, QuizQuestionHistory } from "@/types";
import { useProgress } from "@/hooks/useProgress";

const LEVEL_LABELS: Record<string, string> = {
  facile: "🟢 Facile",
  intermediaire: "🟡 Intermédiaire",
  expert: "🔴 Expert",
  __root__: "Questions",
};

interface QuestionRowProps {
  question: QuizQuestion;
  history: QuizQuestionHistory | undefined;
  quizHref: string;
}

function QuestionRow({ question, history, quizHref }: QuestionRowProps) {
  const status = history?.lastResult;
  const retryHref = `${quizHref}?retry=${encodeURIComponent(question.id)}`;

  return (
    <div className="flex items-start gap-3 rounded-xl border border-warm-100 bg-white/70 px-4 py-3 hover:border-accent-200 transition-colors">
      {/* Status icon */}
      <div className="mt-0.5 shrink-0">
        {status === "correct" && <CheckCircle className="h-5 w-5 text-green-500" aria-label="Réussie" />}
        {status === "incorrect" && <XCircle className="h-5 w-5 text-red-400" aria-label="Ratée" />}
        {!status && <Circle className="h-5 w-5 text-warm-300" aria-label="Non vue" />}
      </div>

      {/* Question text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-warm-800 line-clamp-2">{question.question}</p>
        {history && (
          <p className="mt-0.5 text-xs text-warm-400">
            {history.attempts} tentative{history.attempts > 1 ? "s" : ""}
            {" · "}
            Vue le {new Date(history.lastSeenAt).toLocaleDateString("fr-FR")}
          </p>
        )}
        {!history && (
          <p className="mt-0.5 text-xs text-warm-400">Jamais vue</p>
        )}
      </div>

      {/* Retry link */}
      <Link
        href={retryHref}
        className="shrink-0 flex items-center gap-1 rounded-lg bg-accent-50 px-3 py-1.5 text-xs font-semibold text-accent-700 hover:bg-accent-100 transition-colors"
        title="Refaire cette question"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Refaire
      </Link>
    </div>
  );
}

interface QuestionsClientProps {
  quiz: Quiz;
  resourceSlug: string;
  quizHref: string;
}

export function QuestionsClient({ quiz, resourceSlug, quizHref }: QuestionsClientProps) {
  const { getProgress } = useProgress();
  const progress = getProgress(resourceSlug);
  const questionHistory = progress?.questionHistory ?? {};

  const sections: { levelId: string; label: string; questions: QuizQuestion[] }[] = [];

  if (quiz.levels && quiz.levels.length > 0) {
    quiz.levels.forEach((level) => {
      sections.push({
        levelId: level.id,
        label: LEVEL_LABELS[level.id] ?? level.name,
        questions: level.questions,
      });
    });
  } else {
    sections.push({ levelId: "__root__", label: "Questions", questions: quiz.questions ?? [] });
  }

  return (
    <div className="space-y-6">
      {sections.map(({ levelId, label, questions }) => {
        const levelHistory = questionHistory[levelId] ?? [];

        const neverSeen = questions.filter((q) => !levelHistory.find((h) => h.questionId === q.id)).length;
        const correct = levelHistory.filter((h) => h.lastResult === "correct").length;
        const incorrect = levelHistory.filter((h) => h.lastResult === "incorrect").length;

        return (
          <div key={levelId}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold text-warm-800">{label}</h2>
              <div className="flex items-center gap-3 text-xs text-warm-500">
                {correct > 0 && <span className="text-green-600">✅ {correct} OK</span>}
                {incorrect > 0 && <span className="text-red-400">❌ {incorrect} ratée{incorrect > 1 ? "s" : ""}</span>}
                {neverSeen > 0 && <span>⭕ {neverSeen} nouvelle{neverSeen > 1 ? "s" : ""}</span>}
              </div>
            </div>

            <div className="space-y-2">
              {questions.map((question) => {
                const history = levelHistory.find((h) => h.questionId === question.id);
                return (
                  <QuestionRow
                    key={question.id}
                    question={question}
                    history={history}
                    quizHref={quizHref}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="rounded-xl border border-warm-100 bg-warm-50/60 px-4 py-3">
        <p className="mb-2 text-xs font-semibold text-warm-600">Légende</p>
        <div className="flex flex-wrap gap-4 text-xs text-warm-500">
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-500" /> Réussie</span>
          <span className="flex items-center gap-1.5"><XCircle className="h-4 w-4 text-red-400" /> Ratée</span>
          <span className="flex items-center gap-1.5"><Circle className="h-4 w-4 text-warm-300" /> Jamais vue</span>
        </div>
      </div>

      <p className="text-center text-xs text-warm-400">
        Clique &quot;Refaire&quot; pour ouvrir une mini-session avec uniquement cette question.
      </p>
    </div>
  );
}
