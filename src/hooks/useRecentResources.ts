"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface RecentItem {
  slug: string;
  level: string;
  subject: string;
  title: string;
  type: string;
  viewedAt: string;
}

const RECENT_KEY = "teacher-loulou-recent";
const MAX_RECENT = 10;

export function useRecentResources() {
  const [recentItems, setRecentItems] = useLocalStorage<RecentItem[]>(
    RECENT_KEY,
    []
  );

  const addRecent = useCallback(
    (item: Omit<RecentItem, "viewedAt">) => {
      setRecentItems((prev) => {
        const filtered = prev.filter((r) => r.slug !== item.slug);
        return [
          { ...item, viewedAt: new Date().toISOString() },
          ...filtered,
        ].slice(0, MAX_RECENT);
      });
    },
    [setRecentItems]
  );

  const clearRecent = useCallback(() => {
    setRecentItems([]);
  }, [setRecentItems]);

  return { recentItems, addRecent, clearRecent };
}
