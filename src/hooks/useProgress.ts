"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { UserProgress, SchoolLevel, Subject } from "@/types";

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
    getCompletedCount,
  };
}
