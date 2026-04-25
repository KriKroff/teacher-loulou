"use client";

import { useSyncExternalStore, useCallback, useRef } from "react";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const cacheRef = useRef<{ raw: string; parsed: T } | null>(null);

  const getSnapshot = useCallback((): T => {
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) return initialValue;
      if (cacheRef.current?.raw === raw) return cacheRef.current.parsed;
      const parsed = JSON.parse(raw) as T;
      cacheRef.current = { raw, parsed };
      return parsed;
    } catch {
      return initialValue;
    }
  }, [key, initialValue]);

  const getServerSnapshot = useCallback((): T => initialValue, [initialValue]);

  const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        const raw = window.localStorage.getItem(key);
        const current = raw ? (JSON.parse(raw) as T) : initialValue;
        const valueToStore = value instanceof Function ? value(current) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        window.dispatchEvent(new StorageEvent("storage", { key }));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, initialValue]
  );

  return [value, setValue];
}