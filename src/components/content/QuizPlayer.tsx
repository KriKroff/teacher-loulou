"use client";

import { useState, useCallback } from "react";
import type { Resource, QuizQuestion } from "@/types";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

type QuizState = "intro" | "playing" | "result";

export function QuizPlayer({ resource }: { resource: Resource }) {
  const quiz = resource.quizData;
  const { addQuizScore } = useProgress();
  const [state, setState] = useState<QuizState>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) return null;

  const question = quiz.questions[currentIndex];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

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
    setState("intro");
  };

  const isCorrectAnswer = (answer: string) =>
    Array.isArray(question?.correctAnswer)
      ? question.correctAnswer.includes(answer)
      : question?.correctAnswer === answer;

  // Intro screen
  if (state === "intro") {
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
          <p className="mb-2 text-warm-700">{quiz.description}</p>
          <p className="mb-6 text-sm text-warm-500">
            {totalQuestions} questions · Score minimum : {quiz.passingScore}%
          </p>
          <button
            onClick={() => setState("playing")}
            className="rounded-xl bg-accent-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 hover:shadow-lg active:scale-95"
          >
            C&apos;est parti ! 🚀
          </button>
        </div>
      </div>
    );
  }

  // Result screen
  if (state === "result") {
    const finalScore = Math.round((score / totalQuestions) * 100);
    const passed = finalScore >= quiz.passingScore;

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
              Continue comme ça, tu progresses ! Réessaie pour améliorer
              ton score. 🚀
            </p>
          )}

          <button
            onClick={handleRestart}
            className="rounded-xl bg-accent-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  // Playing screen
  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-warm-500">
          <span>
            Question {currentIndex + 1} / {totalQuestions}
          </span>
          <span>{score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}</span>
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
