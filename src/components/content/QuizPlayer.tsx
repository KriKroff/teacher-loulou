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
import { getResourcesByLevelAndSubject } from "@/data/resources";
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

// ── Pair colors for association questions ────────────────────────────────────
const PAIR_COLORS = [
  { bg: "bg-blue-50", border: "border-blue-400", text: "text-blue-800", badge: "bg-blue-400" },
  { bg: "bg-violet-50", border: "border-violet-400", text: "text-violet-800", badge: "bg-violet-400" },
  { bg: "bg-emerald-50", border: "border-emerald-400", text: "text-emerald-800", badge: "bg-emerald-400" },
  { bg: "bg-amber-50", border: "border-amber-400", text: "text-amber-800", badge: "bg-amber-400" },
  { bg: "bg-pink-50", border: "border-pink-400", text: "text-pink-800", badge: "bg-pink-400" },
];

// ── Drag & drop sortable item ─────────────────────────────────────────────────
function SortableItem({ id, label, disabled }: { id: string; label: string; disabled: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        "flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-sm font-medium bg-warm-50 border-warm-200 transition-all select-none",
        isDragging ? "opacity-50 shadow-lg z-10" : "shadow-sm",
        !disabled && "cursor-grab active:cursor-grabbing touch-none"
      )}
      {...(!disabled ? { ...attributes, ...listeners } : {})}
    >
      {!disabled && (
        <GripVertical className="h-4 w-4 shrink-0 text-warm-400" />
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
  // Selected answer for qcm/vrai-faux/texte-a-trous/intrus (for visual feedback)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  // qcm-multiple
  const [multiSelected, setMultiSelected] = useState<Set<string>>(new Set());
  // association
  const [assocSelected, setAssocSelected] = useState<string | null>(null);
  const [assocMatches, setAssocMatches] = useState<Record<string, string>>({});
  // ordre
  const [ordreItems, setOrdreItems] = useState<string[]>([]);
  // nombre (free text input for a number/year)
  const [nombreValue, setNombreValue] = useState<string>("");
  // slider
  const [sliderValue, setSliderValue] = useState<number>(0);
  // texte-a-trous-select (Duolingo style): array of chosen words per blank slot
  const [tatsChosen, setTatsChosen] = useState<(string | null)[]>([]);
  // conjugaison: free-text inputs (single or multiple)
  const [conjugaisonValues, setConjugaisonValues] = useState<string[]>([]);

  const sensors = useSensors(
    // distance: 12px prevents accidental drag activation on tap/scroll on mobile while remaining accessible
    useSensor(PointerSensor, { activationConstraint: { distance: 12 } }),
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
    setNombreValue("");
    setTatsChosen([]);
    setConjugaisonValues([]);
    if (question?.type === "ordre" && question.options) {
      setOrdreItems(shuffle(question.options));
    }
    if (question?.type === "slider" && question.options) {
      const min = parseFloat(question.options[0] ?? "0");
      const max = parseFloat(question.options[1] ?? "100");
      setSliderValue(Math.round((min + max) / 2));
    }
    if (question?.type === "texte-a-trous-select" && question.correctAnswer) {
      const blanksCount = Array.isArray(question.correctAnswer) ? question.correctAnswer.length : 1;
      setTatsChosen(Array(blanksCount).fill(null));
    }
    if (question?.type === "conjugaison" && question.correctAnswer) {
      const fieldsCount = Array.isArray(question.correctAnswer) ? question.correctAnswer.length : 1;
      setConjugaisonValues(Array(fieldsCount).fill(""));
    }
  }, [currentIndex, sessionQuestions]); // eslint-disable-line react-hooks/exhaustive-deps

  // Shuffled right column for association (stable per question, recomputed on question change)
  const shuffledRightItems = useMemo(() => {
    if (!question?.pairs) return [];
    return shuffle(
      question.pairs.map((p, index) => ({
        id: `pair-${index}`,
        right: p.right,
        correctLeft: p.left,
        pairIndex: index,
      }))
    );
  }, [currentIndex, sessionQuestions]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Early return (after all hooks) ────────────────────────────────────────
  if (!quiz) return null;

  const totalQuestions = sessionQuestions.length;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  // Fiche link for top of quiz screens
  const ficheResource = getResourcesByLevelAndSubject(resource.level, resource.subject).find(
    (r) => r.type === "fiche"
  );
  const ficheHrefTop = ficheResource
    ? `/${resource.level}/${resource.subject}/${ficheResource.slug}`
    : null;

  // ── Helpers ───────────────────────────────────────────────────────────────
  const startSession = (levelId: string, questions: QuizQuestion[]) => {
    const progressData = getProgress(resource.slug);
    const history = progressData?.questionHistory?.[levelId] ?? [];
    const selected = selectQuizQuestions(questions, history, quiz.sessionSize ?? 10);
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
        {ficheHrefTop && (
          <Link
            href={ficheHrefTop}
            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-accent-300 bg-accent-50 px-6 py-3 text-sm font-bold text-accent-700 transition-all hover:bg-accent-100 active:scale-95"
          >
            <BookOpen className="h-4 w-4" />
            Revoir la fiche avant de commencer →
          </Link>
        )}
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
                      {quiz.sessionSize ?? 10} questions par session · {level.questions.length} au total
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
        {ficheHrefTop && (
          <Link
            href={ficheHrefTop}
            className="flex items-center justify-center gap-2 rounded-2xl border-2 border-accent-300 bg-accent-50 px-6 py-3 text-sm font-bold text-accent-700 transition-all hover:bg-accent-100 active:scale-95"
          >
            <BookOpen className="h-4 w-4" />
            Revoir la fiche avant de commencer →
          </Link>
        )}
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
            {quiz.sessionSize ?? 10} questions · Score minimum : {quiz.passingScore}%
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
            {ficheHrefTop && (
              <Link
                href={ficheHrefTop}
                className="flex items-center gap-1.5 text-sm text-warm-600 hover:text-accent-600"
              >
                <BookOpen className="h-4 w-4" />
                Revoir la fiche de révision
              </Link>
            )}
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
    const matchedRightIds = new Set(Object.values(assocMatches));

    // Assign a stable color per pair (by index in question.pairs)
    const getPairColorByLeft = (leftKey: string) => {
      const idx = question.pairs!.findIndex((p) => p.left === leftKey);
      return idx >= 0 ? PAIR_COLORS[idx % PAIR_COLORS.length] : null;
    };
    const getLeftKeyForRightId = (rightId: string) =>
      Object.keys(assocMatches).find((k) => assocMatches[k] === rightId);

    const handleLeftClick = (left: string) => {
      if (showFeedback) return;
      // If clicking an already-matched left: allow re-selecting it to re-match
      setAssocSelected((prev) => (prev === left ? null : left));
    };

    const handleRightClick = (rightId: string) => {
      if (showFeedback || !assocSelected) return;
      setAssocMatches((prev) => {
        const next = { ...prev };
        // If this right tile is already assigned, release previous left first
        const previousLeft = Object.keys(next).find((left) => next[left] === rightId);
        if (previousLeft) delete next[previousLeft];
        next[assocSelected] = rightId;
        return next;
      });
      setAssocSelected(null);
    };

    const handleValidate = () => {
      if (!question.pairs) return;
      const correct = question.pairs.every((p) => {
        const matchedRightId = assocMatches[p.left];
        const matchedTile = shuffledRightItems.find((item) => item.id === matchedRightId);
        return matchedTile?.correctLeft === p.left;
      });
      handleQuestionResult(correct, question.id);
    };

    // After submit: show which pairs were supposed to go together using correct pair numbers
    const correctPairNumberForLeft = (left: string) =>
      question.pairs!.findIndex((p) => p.left === left) + 1;
    const correctPairNumberForRight = (pairIndex: number) => pairIndex + 1;

    return (
      <div className="space-y-3">
        <p className="text-xs text-warm-500">
          {showFeedback
            ? "Les numéros montrent les paires correctes."
            : "Tape un élément à gauche, puis son correspondant à droite."}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {/* Left column */}
          <div className="space-y-2">
            {question.pairs.map((p) => {
              const isMatched = p.left in assocMatches;
              const isSelected = assocSelected === p.left;
              const color = isMatched ? getPairColorByLeft(p.left) : null;
              const isCorrect = showFeedback && assocMatches[p.left] === p.right;
              const isWrong = showFeedback && assocMatches[p.left] !== p.right;
              const correctNum = correctPairNumberForLeft(p.left);

              let style = "border-warm-200 bg-warm-50 text-warm-800";
              if (isCorrect) {
                style = "border-success-500 bg-success-100 text-success-700";
              } else if (isWrong) {
                style = "border-red-400 bg-red-50 text-red-700";
              } else if (isSelected) {
                style = "border-accent-400 bg-accent-50 text-accent-700 ring-2 ring-accent-300";
              } else if (isMatched && color) {
                // Color only (no number) before submit
                style = `${color.border} ${color.bg} ${color.text}`;
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
                  <span className="flex items-center gap-1.5">
                    {isCorrect && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success-500" />}
                    {isWrong && <XCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />}
                    {/* Correct pair number — shown after submit */}
                    {showFeedback && (
                      <span className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
                        isCorrect ? "bg-success-500" : "bg-red-400"
                      )}>
                        {correctNum}
                      </span>
                    )}
                    <span>{p.left}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right column */}
          <div className="space-y-2">
            {shuffledRightItems.map((rightItem) => {
              const isUsed = matchedRightIds.has(rightItem.id);
              const leftKey = getLeftKeyForRightId(rightItem.id);
              const color = isUsed && leftKey ? getPairColorByLeft(leftKey) : null;
              const matchedCorrectly =
                showFeedback &&
                leftKey !== undefined &&
                rightItem.correctLeft === leftKey;
              const matchedWrong = showFeedback && isUsed && !matchedCorrectly;
              const correctNum = correctPairNumberForRight(rightItem.pairIndex);

              let style = "border-warm-200 bg-warm-50 text-warm-800";
              if (matchedCorrectly) {
                style = "border-success-500 bg-success-100 text-success-700";
              } else if (matchedWrong) {
                style = "border-red-400 bg-red-50 text-red-700";
              } else if (showFeedback && !isUsed) {
                // Unmatched right item after submit
                style = "border-red-400 bg-red-50 text-red-700";
              } else if (isUsed && color) {
                // Color only (no number) before submit
                style = `${color.border} ${color.bg} ${color.text}`;
              } else if (assocSelected) {
                style = "border-accent-200 bg-accent-50 hover:border-accent-400 hover:bg-accent-100 cursor-pointer";
              }

              return (
                <button
                  key={rightItem.id}
                  onClick={() => handleRightClick(rightItem.id)}
                  disabled={showFeedback || (isUsed && !assocSelected) || (!isUsed && !assocSelected)}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2 text-left text-xs font-medium transition-all leading-tight",
                    style,
                    !showFeedback && assocSelected && "active:scale-[0.98]"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {matchedCorrectly && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success-500" />}
                    {(matchedWrong || (showFeedback && !isUsed)) && <XCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />}
                    {/* Correct pair number — shown after submit */}
                    {showFeedback && (
                      <span className={cn(
                        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white",
                        matchedCorrectly ? "bg-success-500" : "bg-red-400"
                      )}>
                        {correctNum}
                      </span>
                    )}
                    <span>{rightItem.right}</span>
                  </span>
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

  // ── Nombre renderer (free numeric input) ─────────────────────────────────
  const renderNombre = () => {
    const correct = String(question.correctAnswer).trim();
    const tolerance = question.tolerance ?? 0;

    const isNombreCorrect = (value: string): boolean => {
      const userVal = parseFloat(value.trim());
      const correctVal = parseFloat(correct);
      if (!isNaN(userVal) && !isNaN(correctVal)) {
        return Math.abs(userVal - correctVal) <= tolerance;
      }
      return value.trim() === correct;
    };

    const handleValidate = () => {
      if (showFeedback || !nombreValue.trim()) return;
      setSelectedAnswer(nombreValue.trim());
      handleQuestionResult(isNombreCorrect(nombreValue), question.id);
    };

    return (
      <div className="space-y-3">
        <p className="text-xs text-warm-500">Tape ta réponse (nombre ou année).</p>
        <div className="flex gap-2">
          <input
            type="number"
            value={nombreValue}
            onChange={(e) => setNombreValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !showFeedback && handleValidate()}
            disabled={showFeedback}
            placeholder="Ex: 1848"
            className={cn(
              "flex-1 rounded-xl border-2 px-4 py-3 text-lg font-bold text-center transition-all outline-none",
              showFeedback
                ? selectedAnswer && isNombreCorrect(selectedAnswer)
                  ? "border-success-500 bg-success-100 text-success-700"
                  : "border-red-400 bg-red-50 text-red-700"
                : "border-warm-300 bg-warm-50 focus:border-accent-400 focus:ring-2 focus:ring-accent-200"
            )}
          />
        </div>
        {showFeedback && (
          <p className="text-sm text-warm-600">
            Bonne réponse : <strong className="text-warm-800">{correct}</strong>
          </p>
        )}
        {!showFeedback && (
          <button
            onClick={handleValidate}
            disabled={!nombreValue.trim()}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95 disabled:opacity-50"
          >
            Valider
          </button>
        )}
      </div>
    );
  };

  // ── Slider renderer ───────────────────────────────────────────────────────
  const renderSlider = () => {
    if (!question.options || question.options.length < 2) return null;
    const min = parseFloat(question.options[0]);
    const max = parseFloat(question.options[1]);
    const correct = parseFloat(String(question.correctAnswer));
    const tolerance = question.tolerance ?? 0;
    const step = question.options[2] ? parseFloat(question.options[2]) : 1;
    const isSliderCorrect = Math.abs(sliderValue - correct) <= tolerance;

    const handleValidate = () => {
      if (showFeedback) return;
      setSelectedAnswer(String(sliderValue));
      handleQuestionResult(isSliderCorrect, question.id);
    };

    const pct = ((sliderValue - min) / (max - min)) * 100;
    // Use Tailwind-compatible CSS custom property values
    const trackColor = showFeedback
      ? isSliderCorrect ? "var(--color-success-500, #22c55e)" : "var(--color-red-400, #f87171)"
      : "var(--color-accent-600, #6d28d9)";

    return (
      <div className="space-y-4">
        <p className="text-xs text-warm-500">Déplace le curseur pour choisir ta réponse.</p>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-warm-500">
            <span>{min}</span>
            <span className={cn(
              "text-lg font-bold",
              showFeedback
                ? isSliderCorrect ? "text-success-600" : "text-red-500"
                : "text-accent-600"
            )}>
              {sliderValue}
            </span>
            <span>{max}</span>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue}
            onChange={(e) => !showFeedback && setSliderValue(parseFloat(e.target.value))}
            disabled={showFeedback}
            className="w-full h-3 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${trackColor} ${pct}%, #e8ddd0 ${pct}%)`,
            }}
          />
        </div>

        {showFeedback && !isSliderCorrect && (
          <p className="text-sm text-warm-600">
            Bonne réponse : <strong className="text-warm-800">{correct}</strong>
          </p>
        )}

        {!showFeedback && (
          <button
            onClick={handleValidate}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            Valider
          </button>
        )}
      </div>
    );
  };

  // ── Texte à trous select (Duolingo-style word tiles) ─────────────────────
  const renderTexteATrousSelect = () => {
    const correctAnswers = Array.isArray(question.correctAnswer)
      ? (question.correctAnswer as string[])
      : [String(question.correctAnswer)];
    const blanksCount = correctAnswers.length;
    const chosen = tatsChosen.length === blanksCount ? tatsChosen : Array(blanksCount).fill(null);
    const tileBank = (question.options ?? []).map((word, index) => ({
      id: `tile-${index}`,
      word,
    }));
    const wordById = new Map(tileBank.map((tile) => [tile.id, tile.word]));
    const chosenWords = chosen.map((tileId) => (tileId ? wordById.get(tileId) ?? null : null));
    const usedTileIds = new Set(chosen.filter(Boolean) as string[]);
    const allFilled = chosen.every((v) => v !== null);

    // Split question text on ___ markers
    const parts = question.question.split("___");

    const handleTileClick = (tileId: string) => {
      if (showFeedback) return;
      // Find first empty slot
      setTatsChosen((prev) => {
        const next = [...prev];
        const firstEmpty = next.findIndex((v) => v === null);
        if (firstEmpty !== -1) {
          next[firstEmpty] = tileId;
        }
        return next;
      });
    };

    const handleBlankClick = (blankIndex: number) => {
      if (showFeedback) return;
      // Return the word to the pool
      setTatsChosen((prev) => {
        const next = [...prev];
        next[blankIndex] = null;
        return next;
      });
    };

    const handleValidate = () => {
      if (showFeedback || !allFilled) return;
      const isCorrect = correctAnswers.every((a, i) => chosenWords[i] === a);
      handleQuestionResult(isCorrect, question.id);
    };

    return (
      <div className="space-y-4">
        <p className="text-xs text-warm-500">Complète la phrase en tapant les mots dans le bon ordre.</p>

        {/* Phrase with inline blanks */}
        <div className="rounded-xl bg-warm-50 border border-warm-200 px-4 py-3 text-sm font-medium text-warm-800 leading-loose">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                <button
                  onClick={() => handleBlankClick(i)}
                  disabled={showFeedback}
                    className={cn(
                      "inline-flex items-center mx-1 min-w-[6rem] rounded-lg border-2 px-2 py-0.5 text-sm font-bold transition-all",
                      showFeedback
                        ? chosenWords[i] === correctAnswers[i]
                          ? "border-success-500 bg-success-100 text-success-700"
                          : "border-red-400 bg-red-50 text-red-700"
                        : chosenWords[i]
                          ? "border-accent-400 bg-accent-50 text-accent-700"
                          : "border-warm-300 bg-white text-warm-400 italic"
                    )}
                >
                  {chosenWords[i] ?? "___"}
                </button>
              )}
            </span>
          ))}
        </div>

        {/* Word tile bank */}
        {!showFeedback && (
          <div className="flex flex-wrap gap-2">
            {tileBank.map((tile) => {
              const isUsed = usedTileIds.has(tile.id);
              return (
                <button
                  key={tile.id}
                  onClick={() => !isUsed && handleTileClick(tile.id)}
                  disabled={isUsed}
                  className={cn(
                    "rounded-full border-2 px-4 py-2 text-sm font-medium transition-all",
                    isUsed
                      ? "border-warm-200 bg-warm-50 text-warm-300 line-through cursor-default"
                      : "border-accent-300 bg-white text-warm-700 hover:border-accent-500 hover:bg-accent-50 active:scale-95"
                  )}
                >
                  {tile.word}
                </button>
              );
            })}
          </div>
        )}

        {showFeedback && (
          <div className="text-sm text-warm-600">
            Bonne réponse : <strong className="text-warm-800">{correctAnswers.join(" / ")}</strong>
          </div>
        )}

        {!showFeedback && allFilled && (
          <button
            onClick={handleValidate}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            Valider
          </button>
        )}
      </div>
    );
  };

  // ── Conjugaison renderer (free text fields) ────────────────────────────────
  const renderConjugaison = () => {
    const correctAnswers = Array.isArray(question.correctAnswer)
      ? (question.correctAnswer as string[])
      : [String(question.correctAnswer)];
    const values =
      conjugaisonValues.length === correctAnswers.length
        ? conjugaisonValues
        : Array(correctAnswers.length).fill("");
    const fieldLabels =
      question.options && question.options.length === correctAnswers.length
        ? question.options
        : correctAnswers.map((_, index) => `Forme ${index + 1}`);
    const allFilled = values.every((value) => value.trim().length > 0);

    const normalize = (value: string) =>
      value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ")
        .normalize("NFC");

    const handleChange = (index: number, value: string) => {
      if (showFeedback) return;
      setConjugaisonValues((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });
    };

    const handleValidate = () => {
      if (showFeedback || !allFilled) return;
      const isCorrect = correctAnswers.every(
        (answer, index) => normalize(values[index] ?? "") === normalize(answer)
      );
      setSelectedAnswer(values.join("|||"));
      handleQuestionResult(isCorrect, question.id);
    };

    return (
      <div className="space-y-3">
        <p className="text-xs text-warm-500">
          Tape la/les forme(s) au subjonctif. Accents acceptés selon l&apos;orthographe attendue.
        </p>
        <div className="space-y-2">
          {fieldLabels.map((label, index) => {
            const current = values[index] ?? "";
            const expected = correctAnswers[index] ?? "";
            const isCorrect = normalize(current) === normalize(expected);
            return (
              <label key={`${label}-${index}`} className="flex flex-col gap-1">
                <span className="text-xs font-medium text-warm-600">{label}</span>
                <input
                  type="text"
                  value={current}
                  onChange={(e) => handleChange(index, e.target.value)}
                  disabled={showFeedback}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2 text-sm outline-none transition-colors",
                    showFeedback
                      ? isCorrect
                        ? "border-success-500 bg-success-50 text-success-700"
                        : "border-red-400 bg-red-50 text-red-700"
                      : "border-warm-300 bg-white text-warm-800 focus:border-accent-400"
                  )}
                  placeholder="Écris ta réponse"
                  autoComplete="off"
                />
              </label>
            );
          })}
        </div>
        {showFeedback && (
          <p className="text-sm text-warm-600">
            Réponses attendues :{" "}
            <strong className="text-warm-800">{correctAnswers.join(" • ")}</strong>
          </p>
        )}
        {!showFeedback && (
          <button
            onClick={handleValidate}
            disabled={!allFilled}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-all",
              allFilled
                ? "bg-accent-500 hover:bg-accent-600 active:scale-95"
                : "bg-warm-300 cursor-not-allowed"
            )}
          >
            Valider
          </button>
        )}
      </div>
    );
  };

  // ── Intrus renderer (find the odd one out) ────────────────────────────────
  const renderIntrus = () => (
    <div className="space-y-3">
      <p className="text-xs text-warm-500">
        Tous les éléments ont un point commun… sauf un. Clique sur celui qui n&apos;appartient pas au même groupe que les autres.
      </p>
      <div className="flex flex-wrap gap-2">
        {question.options?.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = question.correctAnswer === option;

          let style = "border-warm-200 bg-warm-50 text-warm-700 hover:border-red-300 hover:bg-red-50";
          if (showFeedback) {
            if (isCorrect) style = "border-success-500 bg-success-100 text-success-700";
            else if (isSelected && !isCorrect) style = "border-red-400 bg-red-50 text-red-600";
            else style = "border-warm-200 bg-warm-50 opacity-50";
          } else if (isSelected) {
            style = "border-red-400 bg-red-50 text-red-700 ring-2 ring-red-200";
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={cn(
                "flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all",
                style,
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
    </div>
  );

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
          {question.type === "texte-a-trous-select" && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">Place les mots</span>
          )}
          {question.type === "conjugaison" && (
            <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-medium text-cyan-700">Conjugaison écrite</span>
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
          {question.type === "nombre" && (
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">Donne un nombre</span>
          )}
          {question.type === "slider" && (
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">Curseur</span>
          )}
          {question.type === "intrus" && (
            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-700">Trouve l&apos;intrus</span>
          )}
        </div>

        <h2 className="mb-5 text-lg font-semibold text-warm-800">
          {question.type === "texte-a-trous"
            ? <QuestionWithBlank text={question.question} />
            : question.question}
        </h2>

        {(question.type === "qcm" || question.type === "vrai-faux") && renderQcm()}
        {question.type === "texte-a-trous" && renderTexteATrous()}
        {question.type === "texte-a-trous-select" && renderTexteATrousSelect()}
        {question.type === "conjugaison" && renderConjugaison()}
        {question.type === "association" && renderAssociation()}
        {question.type === "qcm-multiple" && renderQcmMultiple()}
        {question.type === "ordre" && renderOrdre()}
        {question.type === "nombre" && renderNombre()}
        {question.type === "slider" && renderSlider()}
        {question.type === "intrus" && renderIntrus()}

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
