"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import type { Resource, QuizQuestion, QuizLevel } from "@/types";
import { useProgress } from "@/hooks/useProgress";
import { RESOURCE_TYPE_NAMES } from "@/types";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

type QuizState = "level-select" | "intro" | "playing" | "result";

const LEVEL_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  facile: {
    bg: "bg-green-50",
    border: "border-green-400",
    text: "text-green-700",
    badge: "bg-green-100 text-green-700",
  },
  intermediaire: {
    bg: "bg-yellow-50",
    border: "border-yellow-400",
    text: "text-yellow-700",
    badge: "bg-yellow-100 text-yellow-700",
  },
  expert: {
    bg: "bg-red-50",
    border: "border-red-400",
    text: "text-red-700",
    badge: "bg-red-100 text-red-700",
  },
};

function getLevelColors(levelId: string) {
  return LEVEL_COLORS[levelId] ?? {
    bg: "bg-warm-50",
    border: "border-warm-300",
    text: "text-warm-700",
    badge: "bg-warm-100 text-warm-700",
  };
}

export function QuizPlayer({ resource }: { resource: Resource }) {
  const quiz = resource.quizData;
  const { addQuizScore } = useProgress();
  const hasLevels = !!(quiz?.levels && quiz.levels.length > 0);

  const [state, setState] = useState<QuizState>(hasLevels ? "level-select" : "intro");
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) return null;

  // Active questions: from selected level or from quiz root
  const activeQuestions: QuizQuestion[] = selectedLevel
    ? selectedLevel.questions
    : quiz.questions;

  const question = activeQuestions[currentIndex];
  const totalQuestions = activeQuestions.length;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  const handleAnswer = (answer: string) => {
    if (showFeedback) return;
    setAnswers((prev) => ({ ...prev, [question.id]: answer }));
    setShowFeedback(true);
    setShowHint(false);

    const isCorrect = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.includes(answer)
      : question.correctAnswer === answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setShowHint(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const finalScore = Math.round((score / totalQuestions) * 100);
      addQuizScore(resource.slug, resource.level, resource.subject, finalScore);
      setState("result");
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setShowFeedback(false);
    setShowHint(false);
    setScore(0);
    if (hasLevels) {
      setState("level-select");
      setSelectedLevel(null);
    } else {
      setState("intro");
    }
  };

  const handleSelectLevel = (level: QuizLevel) => {
    setSelectedLevel(level);
    setCurrentIndex(0);
    setAnswers({});
    setShowFeedback(false);
    setShowHint(false);
    setScore(0);
    setState("intro");
  };

  const isCorrectAnswer = (answer: string) =>
    Array.isArray(question?.correctAnswer)
      ? question.correctAnswer.includes(answer)
      : question?.correctAnswer === answer;

  // ── Level selection screen ────────────────────────────────────────────────
  if (state === "level-select" && hasLevels) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-purple-600">
              {RESOURCE_TYPE_NAMES.quiz}
            </span>
            <h1 className="text-xl font-bold text-warm-800">{quiz.title}</h1>
          </div>
        </div>

        <div className="rounded-2xl border border-warm-200 bg-white/80 p-5">
          <p className="mb-5 text-warm-700">{quiz.description}</p>
          <div className="space-y-3">
            {quiz.levels!.map((level) => {
              const c = getLevelColors(level.id);
              return (
                <button
                  key={level.id}
                  onClick={() => handleSelectLevel(level)}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all hover:scale-[1.01] active:scale-[0.99]",
                    c.bg,
                    c.border
                  )}
                >
                  <span className="text-2xl leading-none">{level.emoji}</span>
                  <div className="flex-1">
                    <div className={cn("font-bold text-base", c.text)}>
                      {level.name}
                    </div>
                    <div className="mt-0.5 text-sm text-warm-600">
                      {level.description}
                    </div>
                    <div className="mt-1.5 text-xs text-warm-500">
                      {level.questions.length} questions
                    </div>
                  </div>
                  <ChevronRight className={cn("mt-1 h-5 w-5 shrink-0", c.text)} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── Intro screen ──────────────────────────────────────────────────────────
  if (state === "intro") {
    const levelColors = selectedLevel ? getLevelColors(selectedLevel.id) : null;
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-purple-600">
              {RESOURCE_TYPE_NAMES.quiz}
            </span>
            <h1 className="text-xl font-bold text-warm-800">{quiz.title}</h1>
          </div>
        </div>

        <div className="rounded-2xl border border-warm-200 bg-white/80 p-6 text-center">
          {selectedLevel && levelColors && (
            <div className="mb-3 flex justify-center">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-semibold",
                  levelColors.badge
                )}
              >
                {selectedLevel.emoji} Niveau : {selectedLevel.name}
              </span>
            </div>
          )}
          <p className="mb-2 text-warm-700">
            {selectedLevel ? selectedLevel.description : quiz.description}
          </p>
          <p className="mb-6 text-sm text-warm-500">
            {totalQuestions} questions · Score minimum : {quiz.passingScore}%
          </p>
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => setState("playing")}
              className="rounded-xl bg-accent-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg active:scale-95"
            >
              C&apos;est parti ! 🚀
            </button>
            {hasLevels && (
              <button
                onClick={() => setState("level-select")}
                className="text-sm text-warm-500 hover:text-accent-600"
              >
                ← Changer de niveau
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Result screen ─────────────────────────────────────────────────────────
  if (state === "result") {
    const finalScore = Math.round((score / totalQuestions) * 100);
    const passed = finalScore >= quiz.passingScore;
    const levelColors = selectedLevel ? getLevelColors(selectedLevel.id) : null;
    const ficheSlug = "svt-puberte-reproduction-fiche";
    const ficheHref = `/${resource.level}/${resource.subject}/${ficheSlug}`;

    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-warm-200 bg-white/80 p-6 text-center">
          <div className="mb-4">
            {passed ? (
              <Trophy className="mx-auto h-16 w-16 text-amber-400" />
            ) : (
              <RotateCcw className="mx-auto h-16 w-16 text-warm-400" />
            )}
          </div>

          {selectedLevel && levelColors && (
            <div className="mb-3 flex justify-center">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-semibold",
                  levelColors.badge
                )}
              >
                {selectedLevel.emoji} Niveau : {selectedLevel.name}
              </span>
            </div>
          )}

          <h2 className="mb-2 text-2xl font-bold text-warm-800">
            {passed ? "Bravo ! 🎉" : "Pas mal ! 💪"}
          </h2>
          <p className="mb-1 text-lg text-warm-700">
            Tu as obtenu{" "}
            <span
              className={cn(
                "font-bold",
                passed ? "text-success-600" : "text-warm-600"
              )}
            >
              {finalScore}%
            </span>
          </p>
          <p className="mb-6 text-sm text-warm-500">
            {score} bonne{score > 1 ? "s" : ""} réponse
            {score > 1 ? "s" : ""} sur {totalQuestions}
          </p>

          {passed ? (
            <p className="mb-6 text-warm-600">
              Super travail ! Tu maîtrises bien ce sujet. 🌟
            </p>
          ) : (
            <p className="mb-6 text-warm-600">
              Continue comme ça, tu progresses ! Réessaie pour améliorer ton
              score. 🚀
            </p>
          )}

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={handleRestart}
              className="rounded-xl bg-accent-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
            >
              {hasLevels ? "Choisir un niveau" : "Recommencer"}
            </button>

            <Link
              href={ficheHref}
              className="flex items-center gap-1.5 text-sm text-warm-600 hover:text-accent-600"
            >
              <BookOpen className="h-4 w-4" />
              Revoir la fiche de révision
            </Link>
          </div>
        </div>

        {/* Change level section */}
        {hasLevels && quiz.levels && (
          <div className="rounded-2xl border border-warm-200 bg-white/80 p-4">
            <p className="mb-3 text-sm font-semibold text-warm-700">
              Changer de niveau :
            </p>
            <div className="flex flex-wrap gap-2">
              {quiz.levels.map((level) => {
                const c = getLevelColors(level.id);
                const isCurrent = selectedLevel?.id === level.id;
                return (
                  <button
                    key={level.id}
                    onClick={() => handleSelectLevel(level)}
                    disabled={isCurrent}
                    className={cn(
                      "flex items-center gap-1.5 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all",
                      isCurrent
                        ? cn(c.bg, c.border, c.text, "opacity-50 cursor-default")
                        : cn(
                            c.bg,
                            c.border,
                            c.text,
                            "hover:scale-[1.03] active:scale-[0.97]"
                          )
                    )}
                  >
                    <span>{level.emoji}</span>
                    <span>{level.name}</span>
                    {isCurrent && (
                      <span className="ml-1 text-xs opacity-70">(actuel)</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── Playing screen ────────────────────────────────────────────────────────
  const levelColors = selectedLevel ? getLevelColors(selectedLevel.id) : null;

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-warm-500">
          <div className="flex items-center gap-2">
            <span>
              Question {currentIndex + 1} / {totalQuestions}
            </span>
            {selectedLevel && levelColors && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs font-semibold",
                  levelColors.badge
                )}
              >
                {selectedLevel.emoji} {selectedLevel.name}
              </span>
            )}
          </div>
          <span>
            {score} bonne{score > 1 ? "s" : ""} réponse
            {score > 1 ? "s" : ""}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-warm-200">
          <div
            className="h-full rounded-full bg-accent-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-warm-200 bg-white/80 p-5 sm:p-6">
        <h2 className="mb-5 text-lg font-semibold text-warm-800">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options?.map((option) => {
            const isSelected = answers[question.id] === option;
            const isCorrect = isCorrectAnswer(option);

            let optionStyle =
              "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";

            if (showFeedback) {
              if (isCorrect) {
                optionStyle =
                  "border-success-500 bg-success-100 text-success-600";
              } else if (isSelected && !isCorrect) {
                optionStyle = "border-red-400 bg-red-50 text-red-600";
              } else {
                optionStyle = "border-warm-200 bg-warm-50 opacity-50";
              }
            }

            return (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                  optionStyle,
                  !showFeedback && "active:scale-[0.98]"
                )}
              >
                {showFeedback && isCorrect && (
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                )}
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {/* Hint button */}
        {!showFeedback && question.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-4 flex items-center gap-1.5 text-sm text-warm-500 hover:text-accent-600"
          >
            <Lightbulb className="h-4 w-4" />
            {showHint ? "Masquer l'indice" : "Voir un indice"}
          </button>
        )}

        {showHint && !showFeedback && question.hint && (
          <div className="mt-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
            💡 {question.hint}
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <div className="mt-4 space-y-3">
            <div
              className={cn(
                "rounded-xl px-4 py-3 text-sm",
                isCorrectAnswer(answers[question.id])
                  ? "bg-success-100 text-success-600"
                  : "bg-amber-50 text-amber-800"
              )}
            >
              {isCorrectAnswer(answers[question.id])
                ? "✅ Bonne réponse !"
                : "❌ Ce n'est pas ça..."}
              {question.explanation && (
                <p className="mt-1 opacity-80">{question.explanation}</p>
              )}
            </div>

            <button
              onClick={handleNext}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
            >
              {currentIndex < totalQuestions - 1
                ? "Question suivante"
                : "Voir les résultats"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
