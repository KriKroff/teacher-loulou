"use client";

import { useState, useEffect, useRef } from "react";

interface StreakProps {
  count: number;
}

const MILESTONES: Record<number, string> = {
  3: "Excellent !",
  5: "Imparable !",
  10: "En feu !",
};

/**
 * Displays the current answer streak with motivational toasts at milestones (3, 5, 10).
 */
export function Streak({ count }: StreakProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevCountRef = useRef(count);

  // Show toast when a milestone is hit (count changes from below to at/above milestone)
  useEffect(() => {
    const prev = prevCountRef.current;
    prevCountRef.current = count;

    const message = MILESTONES[count];
    if (!message || count === prev) return;

    // Clear any running timer before starting a new one
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setToastMessage(message);
      timerRef.current = setTimeout(() => {
        setToastMessage(null);
      }, 1500);
    }, 0);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="relative flex flex-col items-center gap-1">
      {/* Toast */}
      {toastMessage && (
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-amber-400 px-3 py-1 text-xs font-bold text-white shadow-md animate-bounce"
          aria-live="polite"
          aria-atomic="true"
        >
          {toastMessage}
        </div>
      )}

      {/* Streak badge */}
      <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
        <span>🔥</span>
        <span>Série de {count}</span>
      </div>
    </div>
  );
}
