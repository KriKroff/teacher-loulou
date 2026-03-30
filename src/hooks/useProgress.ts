"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { UserProgress, SchoolLevel, Subject, QuizQuestionHistory } from "@/types";

const PROGRESS_KEY = "teacher-loulou-progress";

export function useProgress() {
  const [progressList, setProgressList] = useLocalStorage<UserProgress[]>(
    PROGRESS_KEY,
    []
  );

  const getProgress = useCallback(
    (resourceSlug: string): UserProgress | undefined => {
      return progressList.find((p) => p.resourceSlug === resourceSlug);
    },
    [progressList]
  );

  const updateProgress = useCallback(
    (
      resourceSlug: string,
      level: SchoolLevel,
      subject: Subject,
      updates: Partial<Omit<UserProgress, "resourceSlug" | "level" | "subject">>
    ) => {
      setProgressList((prev) => {
        const existing = prev.find((p) => p.resourceSlug === resourceSlug);
        if (existing) {
          return prev.map((p) =>
            p.resourceSlug === resourceSlug
              ? { ...p, ...updates, lastAccessedAt: new Date().toISOString() }
              : p
          );
        }
        return [
          ...prev,
          {
            resourceSlug,
            level,
            subject,
            lastAccessedAt: new Date().toISOString(),
            ...updates,
          },
        ];
      });
    },
    [setProgressList]
  );

  const addQuizScore = useCallback(
    (
      resourceSlug: string,
      level: SchoolLevel,
      subject: Subject,
      score: number
    ) => {
      setProgressList((prev) => {
        const existing = prev.find((p) => p.resourceSlug === resourceSlug);
        const quizScores = [...(existing?.quizScores || []), score];
        if (existing) {
          return prev.map((p) =>
            p.resourceSlug === resourceSlug
              ? {
                  ...p,
                  quizScores,
                  lastAccessedAt: new Date().toISOString(),
                }
              : p
          );
        }
        return [
          ...prev,
          {
            resourceSlug,
            level,
            subject,
            quizScores,
            lastAccessedAt: new Date().toISOString(),
          },
        ];
      });
    },
    [setProgressList]
  );

  const recordQuizSession = useCallback(
    (
      resourceSlug: string,
      level: SchoolLevel,
      subject: Subject,
      quizLevelId: string,
      results: { questionId: string; correct: boolean }[],
      finalScore: number
    ) => {
      setProgressList((prev) => {
        const now = new Date().toISOString();
        const existing = prev.find((p) => p.resourceSlug === resourceSlug);
        const existingHistory = existing?.questionHistory ?? {};
        const levelHistory: QuizQuestionHistory[] = existingHistory[quizLevelId] ?? [];

        const updatedLevelHistory: QuizQuestionHistory[] = results.reduce<QuizQuestionHistory[]>(
          (acc, { questionId, correct }) => {
            const existingEntry = acc.find((h) => h.questionId === questionId);
            const lastResult: "correct" | "incorrect" = correct ? "correct" : "incorrect";
            if (existingEntry) {
              return acc.map((h) =>
                h.questionId === questionId
                  ? { ...h, lastResult, attempts: h.attempts + 1, lastSeenAt: now }
                  : h
              );
            }
            return [...acc, { questionId, lastResult, attempts: 1, lastSeenAt: now }];
          },
          levelHistory
        );

        const updatedHistory: Record<string, QuizQuestionHistory[]> = {
          ...existingHistory,
          [quizLevelId]: updatedLevelHistory,
        };
        const quizScores = [...(existing?.quizScores ?? []), finalScore];

        if (existing) {
          return prev.map((p) =>
            p.resourceSlug === resourceSlug
              ? { ...p, quizScores, questionHistory: updatedHistory, lastAccessedAt: now }
              : p
          );
        }
        return [...prev, { resourceSlug, level, subject, quizScores, questionHistory: updatedHistory, lastAccessedAt: now }];
      });
    },
    [setProgressList]
  );

  const getCompletedCount = useCallback(
    (level?: SchoolLevel, subject?: Subject): number => {
      return progressList.filter(
        (p) =>
          p.completedAt &&
          (!level || p.level === level) &&
          (!subject || p.subject === subject)
      ).length;
    },
    [progressList]
  );

  return {
    progressList,
    getProgress,
    updateProgress,
    addQuizScore,
    recordQuizSession,
    getCompletedCount,
  };
}
