"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Resource, QuizLevel, QuizQuestion } from "@/types";
import { useProgress } from "@/hooks/useProgress";
import { selectQuizQuestions } from "@/lib/selectQuizQuestions";
import { getResourcesByLevelAndSubject } from "@/data/resources";
import { QuizLevelSelect } from "./QuizLevelSelect";
import { QuizIntro } from "./QuizIntro";
import { QuizSession } from "./QuizSession";
import { QuizResult } from "./QuizResult";

type QuizState = "level-select" | "intro" | "playing" | "result";

const LEVEL_ORDER = ["facile", "intermediaire", "expert"];

export function QuizPlayer({ resource }: { resource: Resource }) {
  const quiz = resource.quizData;
  const hasLevels = !!(quiz?.levels && quiz.levels.length > 0);

  const { recordQuizSession, getProgress } = useProgress();
  const searchParams = useSearchParams();

  const [state, setState] = useState<QuizState>(hasLevels ? "level-select" : "intro");
  const [selectedLevel, setSelectedLevel] = useState<QuizLevel | null>(null);
  const [sessionQuestions, setSessionQuestions] = useState<QuizQuestion[]>([]);
  const [finalScore, setFinalScore] = useState(0);

  // Handle ?retry=questionId — find the question across all levels and start a single-question session
  useEffect(() => {
    const retryId = searchParams.get("retry");
    if (!retryId || !quiz) return;

    let found: QuizQuestion | undefined;
    let foundLevel: QuizLevel | null = null;

    if (quiz.levels) {
      for (const level of quiz.levels) {
        const q = level.questions.find((q) => q.id === retryId);
        if (q) { found = q; foundLevel = level; break; }
      }
    } else {
      found = quiz.questions.find((q) => q.id === retryId);
    }

    if (!found) return;
    setSelectedLevel(foundLevel);
    setSessionQuestions([found]);
    setState("playing");
  // Only run once on mount (searchParams is stable for static export)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!quiz) return null;

  // Fiche link for navigation between quiz and fiche
  const ficheResource = getResourcesByLevelAndSubject(resource.level, resource.subject).find(
    (r) => r.type === "fiche"
  );
  const ficheHref = ficheResource
    ? `/${resource.level}/${resource.subject}/${ficheResource.slug}`
    : null;

  const questionsHref = `/${resource.level}/${resource.subject}/${resource.slug}/questions`;

  const startSession = (levelId: string, questions: QuizQuestion[]) => {
    const progressData = getProgress(resource.slug);
    const history = progressData?.questionHistory?.[levelId] ?? [];
    const selected = selectQuizQuestions(questions, history, quiz.sessionSize ?? 10);
    setSessionQuestions(selected);
  };

  const handleSelectLevel = (level: QuizLevel) => {
    setSelectedLevel(level);
    startSession(level.id, level.questions);
    setState("intro");
  };

  const handleStart = () => {
    if (!hasLevels && quiz.questions.length > 0 && sessionQuestions.length === 0) {
      startSession("__root__", quiz.questions);
    }
    setState("playing");
  };

  const handleSessionEnd = (score: number, results: { questionId: string; correct: boolean }[]) => {
    const total = sessionQuestions.length;
    const scorePct = total > 0 ? Math.round((score / total) * 100) : 0;
    const quizLevelId = selectedLevel?.id ?? "__root__";
    recordQuizSession(resource.slug, resource.level, resource.subject, quizLevelId, results, scorePct);
    setFinalScore(score);
    setState("result");
  };

  const handleRestart = () => {
    setSessionQuestions([]);
    setFinalScore(0);
    if (hasLevels) {
      setState("level-select");
      setSelectedLevel(null);
    } else {
      setState("intro");
    }
  };

  /** Move to the next level up and start it immediately */
  const handleNextLevel = () => {
    if (!quiz.levels || !selectedLevel) return;
    const idx = LEVEL_ORDER.indexOf(selectedLevel.id);
    if (idx < 0 || idx >= LEVEL_ORDER.length - 1) return;
    const nextId = LEVEL_ORDER[idx + 1];
    const nextLevel = quiz.levels.find((l) => l.id === nextId);
    if (!nextLevel) return;
    handleSelectLevel(nextLevel);
  };

  if (state === "level-select" && hasLevels) {
    return (
      <QuizLevelSelect
        quiz={quiz}
        ficheHref={ficheHref}
        questionsHref={questionsHref}
        resourceSlug={resource.slug}
        onSelectLevel={handleSelectLevel}
      />
    );
  }

  if (state === "intro") {
    return (
      <QuizIntro
        quiz={quiz}
        selectedLevel={selectedLevel}
        hasLevels={hasLevels}
        ficheHref={ficheHref}
        onStart={handleStart}
        onChangeLevel={() => setState("level-select")}
      />
    );
  }

  if (state === "result") {
    return (
      <QuizResult
        quiz={quiz}
        score={finalScore}
        totalQuestions={sessionQuestions.length}
        selectedLevel={selectedLevel}
        hasLevels={hasLevels}
        ficheHref={ficheHref}
        questionsHref={questionsHref}
        onRestart={handleRestart}
        onSelectLevel={handleSelectLevel}
        onNextLevel={hasLevels ? handleNextLevel : undefined}
      />
    );
  }

  // state === "playing"
  if (sessionQuestions.length === 0) return null;

  return (
    <QuizSession
      quizId={resource.slug}
      questions={sessionQuestions}
      selectedLevel={selectedLevel}
      onSessionEnd={handleSessionEnd}
    />
  );
}
