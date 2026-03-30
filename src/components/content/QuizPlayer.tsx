"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Resource, QuizQuestion, QuizLevel } from "@/types";
import { useProgress } from "@/hooks/useProgress";
import { selectQuizQuestions } from "@/lib/selectQuizQuestions";
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
  GripVertical,
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

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ── Drag & drop sortable item ─────────────────────────────────────────────────
function SortableItem({ id, label, disabled }: { id: string; label: string; disabled: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        "flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-sm font-medium bg-warm-50 border-warm-200 transition-all",
        isDragging && "opacity-50 shadow-lg",
        !disabled && "cursor-grab active:cursor-grabbing"
      )}
    >
      {!disabled && (
        <GripVertical className="h-4 w-4 shrink-0 text-warm-400" {...attributes} {...listeners} />
      )}
      <span>{label}</span>
    </div>
  );
}

// ── Question text with ___ highlighted ───────────────────────────────────────
function QuestionWithBlank({ text }: { text: string }) {
  const parts = text.split("___");
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="inline-block mx-1 min-w-[5rem] rounded bg-amber-100 px-2 py-0.5 font-bold text-amber-800 underline underline-offset-4">
              ___
            </span>
          )}
        </span>
      ))}
    </>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function QuizPlayer({ resource }: { resource: Resource }) {
  const quiz = resource.quizData;
  const hasLevels = !!(quiz?.levels && quiz.levels.length > 0);

  const { recordQuizSession, getProgress } = useProgress();

  // ── State — ALL hooks must be declared before any conditional return ────────
  const [state, setState] = useState<QuizState>(hasLevels ? "level-select" : "intro");
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [questionResults, setQuestionResults] = useState<{ questionId: string; correct: boolean }[]>([]);
  // Selected answer for qcm/vrai-faux/texte-a-trous (for visual feedback)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  // qcm-multiple
  const [multiSelected, setMultiSelected] = useState<Set<string>>(new Set());
  // association
  const [assocSelected, setAssocSelected] = useState<string | null>(null);
  const [assocMatches, setAssocMatches] = useState<Record<string, string>>({});
  // ordre
  const [ordreItems, setOrdreItems] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const question = sessionQuestions[currentIndex] ?? null;

  // Reset per-question state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setMultiSelected(new Set());
    setAssocSelected(null);
    setAssocMatches({});
    setShowHint(false);
    if (question?.type === "ordre" && question.options) {
      setOrdreItems(shuffle(question.options));
    }
  }, [currentIndex, sessionQuestions]); // eslint-disable-line react-hooks/exhaustive-deps

  // Shuffled right column for association (stable per question, recomputed on question change)
  const shuffledRightItems = useMemo(() => {
    if (!question?.pairs) return [];
    return shuffle(question.pairs.map((p) => p.right));
  }, [currentIndex, sessionQuestions]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Early return (after all hooks) ────────────────────────────────────────
  if (!quiz) return null;

  const totalQuestions = sessionQuestions.length;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  // ── Helpers ───────────────────────────────────────────────────────────────
  const startSession = (levelId: string, questions: QuizQuestion[]) => {
    const progressData = getProgress(resource.slug);
    const history = progressData?.questionHistory?.[levelId] ?? [];
    const selected = selectQuizQuestions(questions, history, 10);
    setSessionQuestions(selected);
    setCurrentIndex(0);
    setShowFeedback(false);
    setShowHint(false);
    setScore(0);
    setQuestionResults([]);
    setSelectedAnswer(null);
  };

  // Unified result handler
  const handleQuestionResult = (isCorrect: boolean, questionId: string) => {
    if (showFeedback) return;
    setShowFeedback(true);
    if (isCorrect) setScore((prev) => prev + 1);
    setQuestionResults((prev) => [...prev, { questionId, correct: isCorrect }]);
  };

  // For qcm / vrai-faux / texte-a-trous
  const handleAnswer = (answer: string) => {
    if (showFeedback || !question) return;
    setSelectedAnswer(answer);
    const isCorrect = Array.isArray(question.correctAnswer)
      ? (question.correctAnswer as string[]).includes(answer)
      : question.correctAnswer === answer;
    handleQuestionResult(isCorrect, question.id);
  };

  const handleNext = () => {
    setShowFeedback(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const finalScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
      const quizLevelId = selectedLevel?.id ?? "__root__";
      recordQuizSession(resource.slug, resource.level, resource.subject, quizLevelId, questionResults, finalScore);
      setState("result");
    }
  };

  const handleRestart = () => {
    setSessionQuestions([]);
    setCurrentIndex(0);
    setShowFeedback(false);
    setShowHint(false);
    setScore(0);
    setQuestionResults([]);
    if (hasLevels) {
      setState("level-select");
      setSelectedLevel(null);
    } else {
      setState("intro");
    }
  };

  const handleSelectLevel = (level: QuizLevel) => {
    setSelectedLevel(level);
    startSession(level.id, level.questions);
    setState("intro");
  };

  // ── Level selection screen ────────────────────────────────────────────────
  if (state === "level-select" && hasLevels) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-medium text-purple-600">{RESOURCE_TYPE_NAMES.quiz}</span>
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
                    c.bg, c.border
                  )}
                >
                  <span className="text-2xl leading-none">{level.emoji}</span>
                  <div className="flex-1">
                    <div className={cn("font-bold text-base", c.text)}>{level.name}</div>
                    <div className="mt-0.5 text-sm text-warm-600">{level.description}</div>
                    <div className="mt-1.5 text-xs text-warm-500">
                      10 questions par session · {level.questions.length} au total
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
            <span className="text-xs font-medium text-purple-600">{RESOURCE_TYPE_NAMES.quiz}</span>
            <h1 className="text-xl font-bold text-warm-800">{quiz.title}</h1>
          </div>
        </div>

        <div className="rounded-2xl border border-warm-200 bg-white/80 p-6 text-center">
          {selectedLevel && levelColors && (
            <div className="mb-3 flex justify-center">
              <span className={cn("rounded-full px-3 py-1 text-sm font-semibold", levelColors.badge)}>
                {selectedLevel.emoji} Niveau : {selectedLevel.name}
              </span>
            </div>
          )}
          <p className="mb-2 text-warm-700">
            {selectedLevel ? selectedLevel.description : quiz.description}
          </p>
          <p className="mb-6 text-sm text-warm-500">
            10 questions · Score minimum : {quiz.passingScore}%
          </p>
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => {
                if (!hasLevels && quiz.questions.length > 0 && sessionQuestions.length === 0) {
                  startSession("__root__", quiz.questions);
                }
                setState("playing");
              }}
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
    const finalScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const passed = finalScore >= quiz.passingScore;
    const levelColors = selectedLevel ? getLevelColors(selectedLevel.id) : null;
    const ficheSlug = "svt-puberte-reproduction-fiche";
    const ficheHref = `/${resource.level}/${resource.subject}/${ficheSlug}`;

    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-warm-200 bg-white/80 p-6 text-center">
          <div className="mb-4">
            {passed
              ? <Trophy className="mx-auto h-16 w-16 text-amber-400" />
              : <RotateCcw className="mx-auto h-16 w-16 text-warm-400" />}
          </div>
          {selectedLevel && levelColors && (
            <div className="mb-3 flex justify-center">
              <span className={cn("rounded-full px-3 py-1 text-sm font-semibold", levelColors.badge)}>
                {selectedLevel.emoji} Niveau : {selectedLevel.name}
              </span>
            </div>
          )}
          <h2 className="mb-2 text-2xl font-bold text-warm-800">
            {passed ? "Bravo ! 🎉" : "Pas mal ! 💪"}
          </h2>
          <p className="mb-1 text-lg text-warm-700">
            Tu as obtenu{" "}
            <span className={cn("font-bold", passed ? "text-success-600" : "text-warm-600")}>
              {finalScore}%
            </span>
          </p>
          <p className="mb-6 text-sm text-warm-500">
            {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""} sur {totalQuestions}
          </p>
          {passed ? (
            <p className="mb-6 text-warm-600">Super travail ! Tu maîtrises bien ce sujet. 🌟</p>
          ) : (
            <p className="mb-6 text-warm-600">Continue comme ça, tu progresses ! Réessaie pour améliorer ton score. 🚀</p>
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

        {hasLevels && quiz.levels && (
          <div className="rounded-2xl border border-warm-200 bg-white/80 p-4">
            <p className="mb-3 text-sm font-semibold text-warm-700">Changer de niveau :</p>
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
                        : cn(c.bg, c.border, c.text, "hover:scale-[1.03] active:scale-[0.97]")
                    )}
                  >
                    <span>{level.emoji}</span>
                    <span>{level.name}</span>
                    {isCurrent && <span className="ml-1 text-xs opacity-70">(actuel)</span>}
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
  if (!question) return null;

  const levelColors = selectedLevel ? getLevelColors(selectedLevel.id) : null;
  const currentResult = questionResults.find((r) => r.questionId === question.id);
  const isCurrentCorrect = currentResult?.correct ?? false;

  // ── QCM / Vrai-Faux renderer ──────────────────────────────────────────────
  const renderQcm = () => (
    <div className="space-y-2.5">
      {question.options?.map((option) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = Array.isArray(question.correctAnswer)
          ? (question.correctAnswer as string[]).includes(option)
          : question.correctAnswer === option;

        let optionStyle = "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
        if (showFeedback) {
          if (isCorrect) optionStyle = "border-success-500 bg-success-100 text-success-600";
          else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600";
          else optionStyle = "border-warm-200 bg-warm-50 opacity-50";
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
            {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />}
            {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0 text-red-500" />}
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );

  // ── Texte à trous renderer ────────────────────────────────────────────────
  const renderTexteATrous = () => (
    <div className="flex flex-wrap gap-2">
      {question.options?.map((option) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = question.correctAnswer === option;

        let chipStyle = "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
        if (showFeedback) {
          if (isCorrect) chipStyle = "border-success-500 bg-success-100 text-success-600";
          else if (isSelected && !isCorrect) chipStyle = "border-red-400 bg-red-50 text-red-600";
          else chipStyle = "border-warm-200 bg-warm-50 opacity-40";
        }

        return (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={showFeedback}
            className={cn(
              "flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all",
              chipStyle,
              !showFeedback && "active:scale-[0.97]"
            )}
          >
            {showFeedback && isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />}
            {showFeedback && isSelected && !isCorrect && <XCircle className="h-4 w-4 shrink-0 text-red-500" />}
            {option}
          </button>
        );
      })}
    </div>
  );

  // ── Association renderer ──────────────────────────────────────────────────
  const renderAssociation = () => {
    if (!question.pairs) return null;
    const allMatched = Object.keys(assocMatches).length === question.pairs.length;
    const matchedRights = new Set(Object.values(assocMatches));

    const handleLeftClick = (left: string) => {
      if (showFeedback) return;
      setAssocSelected((prev) => (prev === left ? null : left));
    };

    const handleRightClick = (right: string) => {
      if (showFeedback || !assocSelected) return;
      setAssocMatches((prev) => ({ ...prev, [assocSelected]: right }));
      setAssocSelected(null);
    };

    const handleValidate = () => {
      if (!question.pairs) return;
      const correct = question.pairs.every((p) => assocMatches[p.left] === p.right);
      handleQuestionResult(correct, question.id);
    };

    return (
      <div className="space-y-3">
        <p className="text-xs text-warm-500">
          Tape un élément à gauche, puis son correspondant à droite.
        </p>
        <div className="grid grid-cols-2 gap-2">
          {/* Left column */}
          <div className="space-y-2">
            {question.pairs.map((p) => {
              const isMatched = p.left in assocMatches;
              const isSelected = assocSelected === p.left;
              let style = "border-warm-200 bg-warm-50";
              if (showFeedback) {
                style = assocMatches[p.left] === p.right
                  ? "border-success-500 bg-success-100 text-success-700"
                  : "border-red-400 bg-red-50 text-red-700";
              } else if (isSelected) {
                style = "border-accent-400 bg-accent-50 text-accent-700 ring-2 ring-accent-300";
              } else if (isMatched) {
                style = "border-warm-300 bg-warm-100 text-warm-600";
              }
              return (
                <button
                  key={p.left}
                  onClick={() => handleLeftClick(p.left)}
                  disabled={showFeedback}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-medium transition-all leading-tight",
                    style,
                    !showFeedback && "active:scale-[0.98]"
                  )}
                >
                  <span className="flex items-start gap-1">
                    {showFeedback && (
                      assocMatches[p.left] === p.right
                        ? <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success-500" />
                        : <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
                    )}
                    <span>{p.left}</span>
                  </span>
                  {isMatched && !showFeedback && (
                    <span className="block mt-0.5 text-warm-400 text-xs">→ {assocMatches[p.left]}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right column */}
          <div className="space-y-2">
            {shuffledRightItems.map((right) => {
              const isUsed = matchedRights.has(right);
              const correctLeft = question.pairs?.find((p) => p.right === right)?.left;
              let style = "border-warm-200 bg-warm-50";
              if (showFeedback) {
                const matchedCorrectly = correctLeft !== undefined && assocMatches[correctLeft] === right;
                style = matchedCorrectly
                  ? "border-success-500 bg-success-100 text-success-700"
                  : "border-red-400 bg-red-50 text-red-700";
              } else if (isUsed) {
                style = "border-warm-300 bg-warm-100 text-warm-400 line-through";
              } else if (assocSelected) {
                style = "border-accent-200 bg-accent-50 hover:border-accent-400 hover:bg-accent-100 cursor-pointer";
              }
              return (
                <button
                  key={right}
                  onClick={() => handleRightClick(right)}
                  disabled={showFeedback || isUsed || !assocSelected}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-medium transition-all leading-tight",
                    style,
                    !showFeedback && !isUsed && assocSelected && "active:scale-[0.98]"
                  )}
                >
                  {right}
                </button>
              );
            })}
          </div>
        </div>

        {!showFeedback && allMatched && (
          <button
            onClick={handleValidate}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            Valider les associations
          </button>
        )}
      </div>
    );
  };

  // ── QCM Multiple renderer ─────────────────────────────────────────────────
  const renderQcmMultiple = () => {
    const correctSet = new Set(Array.isArray(question.correctAnswer) ? (question.correctAnswer as string[]) : []);

    const handleToggle = (option: string) => {
      if (showFeedback) return;
      setMultiSelected((prev) => {
        const next = new Set(prev);
        if (next.has(option)) next.delete(option);
        else next.add(option);
        return next;
      });
    };

    const handleValidate = () => {
      if (showFeedback) return;
      const isCorrect =
        multiSelected.size === correctSet.size &&
        [...multiSelected].every((s) => correctSet.has(s));
      handleQuestionResult(isCorrect, question.id);
    };

    return (
      <div className="space-y-2.5">
        <p className="text-xs text-warm-500">Plusieurs réponses correctes possibles.</p>
        {question.options?.map((option) => {
          const isSelected = multiSelected.has(option);
          const isCorrect = correctSet.has(option);

          let optionStyle = isSelected
            ? "border-accent-400 bg-accent-50 text-accent-700"
            : "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
          if (showFeedback) {
            if (isCorrect) optionStyle = "border-success-500 bg-success-100 text-success-600";
            else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50 text-red-600";
            else optionStyle = "border-warm-200 bg-warm-50 opacity-50";
          }

          return (
            <button
              key={option}
              onClick={() => handleToggle(option)}
              disabled={showFeedback}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                optionStyle,
                !showFeedback && "active:scale-[0.98]"
              )}
            >
              <div className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all",
                showFeedback
                  ? isCorrect ? "border-success-500 bg-success-500" : isSelected ? "border-red-400 bg-red-400" : "border-warm-300"
                  : isSelected ? "border-accent-500 bg-accent-500" : "border-warm-300"
              )}>
                {(isSelected || (showFeedback && isCorrect)) && (
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                )}
              </div>
              <span>{option}</span>
            </button>
          );
        })}

        {!showFeedback && multiSelected.size > 0 && (
          <button
            onClick={handleValidate}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            Valider ma sélection
          </button>
        )}
      </div>
    );
  };

  // ── Ordre renderer ────────────────────────────────────────────────────────
  const renderOrdre = () => {
    const correctOrder = Array.isArray(question.correctAnswer) ? (question.correctAnswer as string[]) : [];

    const handleDragEnd = (event: DragEndEvent) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        setOrdreItems((items) => {
          const oldIndex = items.indexOf(active.id as string);
          const newIndex = items.indexOf(over.id as string);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    };

    const handleValidate = () => {
      if (showFeedback) return;
      const isCorrect = ordreItems.join("|||") === correctOrder.join("|||");
      handleQuestionResult(isCorrect, question.id);
    };

    return (
      <div className="space-y-3">
        <p className="text-xs text-warm-500">
          {showFeedback ? "Résultat de ton ordre :" : "Glisse les éléments pour les remettre dans le bon ordre."}
        </p>

        {showFeedback ? (
          <div className="space-y-2">
            {ordreItems.map((item, index) => {
              const isCorrectPos = correctOrder[index] === item;
              return (
                <div
                  key={item}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-sm font-medium",
                    isCorrectPos
                      ? "border-success-500 bg-success-100 text-success-700"
                      : "border-red-400 bg-red-50 text-red-700"
                  )}
                >
                  {isCorrectPos
                    ? <CheckCircle2 className="h-4 w-4 shrink-0" />
                    : <XCircle className="h-4 w-4 shrink-0" />}
                  <span>{item}</span>
                </div>
              );
            })}
            {!isCurrentCorrect && (
              <div className="mt-3 rounded-xl bg-warm-50 border border-warm-200 px-4 py-3 space-y-1.5">
                <p className="text-xs font-semibold text-warm-600">Ordre correct :</p>
                {correctOrder.map((item, i) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-warm-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success-100 text-success-700 font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={ordreItems} strategy={verticalListSortingStrategy}>
              <div className="space-y-2">
                {ordreItems.map((item) => (
                  <SortableItem key={item} id={item} label={item} disabled={showFeedback} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}

        {!showFeedback && (
          <button
            onClick={handleValidate}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            Valider l&apos;ordre
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-warm-500">
          <div className="flex items-center gap-2">
            <span>Question {currentIndex + 1} / {totalQuestions}</span>
            {selectedLevel && levelColors && (
              <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", levelColors.badge)}>
                {selectedLevel.emoji} {selectedLevel.name}
              </span>
            )}
          </div>
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
        {/* Question type badge */}
        <div className="mb-3">
          {question.type === "vrai-faux" && (
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">Vrai ou Faux</span>
          )}
          {question.type === "texte-a-trous" && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">Complète la phrase</span>
          )}
          {question.type === "association" && (
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">Association</span>
          )}
          {question.type === "qcm-multiple" && (
            <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">Plusieurs réponses</span>
          )}
          {question.type === "ordre" && (
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
              Remets dans l&apos;ordre
            </span>
          )}
        </div>

        <h2 className="mb-5 text-lg font-semibold text-warm-800">
          {question.type === "texte-a-trous"
            ? <QuestionWithBlank text={question.question} />
            : question.question}
        </h2>

        {(question.type === "qcm" || question.type === "vrai-faux") && renderQcm()}
        {question.type === "texte-a-trous" && renderTexteATrous()}
        {question.type === "association" && renderAssociation()}
        {question.type === "qcm-multiple" && renderQcmMultiple()}
        {question.type === "ordre" && renderOrdre()}

        {/* Hint */}
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
            <div className={cn(
              "rounded-xl px-4 py-3 text-sm",
              isCurrentCorrect ? "bg-success-100 text-success-600" : "bg-amber-50 text-amber-800"
            )}>
              {isCurrentCorrect ? "✅ Bonne réponse !" : "❌ Ce n'est pas ça..."}
              {question.explanation && (
                <p className="mt-1 opacity-80">{question.explanation}</p>
              )}
            </div>
            <button
              onClick={handleNext}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
            >
              {currentIndex < totalQuestions - 1 ? "Question suivante" : "Voir les résultats"}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
