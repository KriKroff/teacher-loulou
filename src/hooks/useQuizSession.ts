"use client";

import { useCallback, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface QuizSessionData {
  questionIds: string[];
  currentIndex: number;
  answers: { questionId: string; correct: boolean }[];
  score: number;
  startedAt: string;
}

function sessionKey(quizId: string, levelId: string): string {
  return `teacher-loulou-quiz-session-${quizId}-${levelId}`;
}

function isExpired(startedAt: string): boolean {
  return Date.now() - new Date(startedAt).getTime() > SESSION_TTL_MS;
}

export function useQuizSession(quizId: string, levelId: string) {
  const key = sessionKey(quizId, levelId);
  const [raw, setRaw] = useLocalStorage<QuizSessionData | null>(key, null);

  // Filter out expired sessions — computed once per raw change (useMemo, not inline during render)
  const session = useMemo<QuizSessionData | null>(() => {
    if (!raw) return null;
    if (isExpired(raw.startedAt)) return null;
    return raw;
  }, [raw]);

  const save = useCallback(
    (data: QuizSessionData) => {
      setRaw(data);
    },
    [setRaw]
  );

  const clear = useCallback(() => {
    setRaw(null);
  }, [setRaw]);

  return { session, save, clear };
}
