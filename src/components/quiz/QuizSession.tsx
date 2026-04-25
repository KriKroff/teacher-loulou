"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { QuizQuestion, QuizLevel } from "@/types";
import { QuestionShell } from "./QuestionShell";
import { QuestionPastilles } from "./QuestionPastilles";
import { Streak } from "./Streak";
import { SessionResumePrompt } from "./SessionResumePrompt";
import { useQuizSession } from "@/hooks/useQuizSession";
import { playCorrect, playIncorrect } from "@/lib/sounds";
import { vibrateCorrect, vibrateIncorrect } from "@/lib/haptics";

interface QuizSessionProps {
  quizId: string;
  questions: QuizQuestion[];
  selectedLevel: QuizLevel | null;
  onSessionEnd: (score: number, results: { questionId: string; correct: boolean }[]) => void;
}

const LEVEL_BADGE: Record<string, string> = {
  facile: "bg-green-100 text-green-700",
  intermediaire: "bg-yellow-100 text-yellow-700",
  expert: "bg-red-100 text-red-700",
};

type SessionPhase = "prompt" | "playing";

export function QuizSession({ quizId, questions, selectedLevel, onSessionEnd }: QuizSessionProps) {
  const levelId = selectedLevel?.id ?? "__root__";
  const { session: savedSession, save: saveSession, clear: clearSession } = useQuizSession(quizId, levelId);

  // Whether we're showing the resume prompt or actually playing
  const [phase, setPhase] = useState<SessionPhase>(() =>
    savedSession ? "prompt" : "playing"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [questionResults, setQuestionResults] = useState<{ questionId: string; correct: boolean }[]>([]);
  const [streak, setStreak] = useState(0);

  // Refs to hold latest values for use in handleNext without stale closure issues
  const scoreRef = useRef(0);
  const resultsRef = useRef<{ questionId: string; correct: boolean }[]>([]);
  const streakRef = useRef(0);

  const totalQuestions = questions.length;
  const question = questions[currentIndex] ?? null;
  const progress = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;
  const levelBadgeClass = selectedLevel ? (LEVEL_BADGE[selectedLevel.id] ?? "bg-warm-100 text-warm-700") : null;

  const currentResult = questionResults.find((r) => r.questionId === question?.id);
  const isCurrentCorrect = currentResult?.correct ?? false;

  // Save session after each answer
  useEffect(() => {
    if (phase !== "playing" || questionResults.length === 0) return;
    saveSession({
      questionIds: questions.map((q) => q.id),
      currentIndex,
      answers: questionResults,
      score,
      startedAt: new Date().toISOString(),
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionResults]);

  const startFresh = () => {
    clearSession();
    setPhase("playing");
    setCurrentIndex(0);
    setScore(0);
    setQuestionResults([]);
    setStreak(0);
    scoreRef.current = 0;
    resultsRef.current = [];
    streakRef.current = 0;
  };

  const resumeSession = () => {
    if (!savedSession) {
      startFresh();
      return;
    }
    // Restore state from saved session
    setCurrentIndex(savedSession.currentIndex);
    setScore(savedSession.score);
    setQuestionResults(savedSession.answers);
    scoreRef.current = savedSession.score;
    resultsRef.current = savedSession.answers;
    setPhase("playing");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAnswer = (correct: boolean, _userAnswer?: string | string[]) => {
    if (showFeedback || !question) return;
    setShowFeedback(true);

    const newScore = correct ? scoreRef.current + 1 : scoreRef.current;
    const newResults = [...resultsRef.current, { questionId: question.id, correct }];
    const newStreak = correct ? streakRef.current + 1 : 0;

    scoreRef.current = newScore;
    resultsRef.current = newResults;
    streakRef.current = newStreak;

    setScore(newScore);
    setQuestionResults(newResults);
    setStreak(newStreak);

    if (correct) {
      playCorrect();
      vibrateCorrect();
    } else {
      playIncorrect();
      vibrateIncorrect();
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setShowHint(false);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      clearSession();
      onSessionEnd(scoreRef.current, resultsRef.current);
    }
  };

  if (phase === "prompt" && savedSession) {
    return (
      <SessionResumePrompt
        onResume={resumeSession}
        onRestart={startFresh}
      />
    );
  }

  if (!question) return null;

  return (
    <div className="space-y-4">
      {/* Streak */}
      <div className="flex justify-center">
        <Streak count={streak} />
      </div>

      {/* Progress section */}
      <div className="space-y-2">
        {/* Question counter */}
        <p className="text-center text-lg font-bold text-warm-700">
          Question {currentIndex + 1} / {totalQuestions}
        </p>

        {/* Pastilles */}
        <QuestionPastilles
          total={totalQuestions}
          currentIndex={currentIndex}
          results={questionResults}
          questionIds={questions.map((q) => q.id)}
        />

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-warm-500">
            <div className="flex items-center gap-2">
              {selectedLevel && levelBadgeClass && (
                <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", levelBadgeClass)}>
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
      </div>

      {/* key={question.id} resets all sub-component local state on each new question */}
      <QuestionShell
        key={question.id}
        question={question}
        showFeedback={showFeedback}
        showHint={showHint}
        isCorrect={isCurrentCorrect}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        onAnswer={handleAnswer}
        onToggleHint={() => setShowHint((prev) => !prev)}
        onNext={handleNext}
      />
    </div>
  );
}
