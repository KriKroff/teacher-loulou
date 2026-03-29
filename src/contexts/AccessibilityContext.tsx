"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  type AccessibilitySettings,
  DEFAULT_ACCESSIBILITY_SETTINGS,
} from "@/types";

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (updates: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(
  null
);

const SETTINGS_KEY = "teacher-loulou-accessibility";

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useLocalStorage<AccessibilitySettings>(
    SETTINGS_KEY,
    DEFAULT_ACCESSIBILITY_SETTINGS
  );

  const updateSettings = (updates: Partial<AccessibilitySettings>) => {
    setSettings((prev) => ({ ...prev, ...updates }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_ACCESSIBILITY_SETTINGS);
  };

  // Apply settings as CSS custom properties on <html>
  useEffect(() => {
    const root = document.documentElement;

    // Font family
    root.setAttribute("data-font", settings.font);

    // CSS custom properties
    root.style.setProperty("--dys-font-size", `${settings.fontSize}`);
    root.style.setProperty(
      "--dys-letter-spacing",
      `${settings.letterSpacing}em`
    );
    root.style.setProperty("--dys-word-spacing", `${settings.wordSpacing}em`);
    root.style.setProperty("--dys-line-height", `${settings.lineHeight}`);

    // High contrast mode
    if (settings.highContrast) {
      root.setAttribute("data-high-contrast", "true");
    } else {
      root.removeAttribute("data-high-contrast");
    }

    // Syllable coloring
    if (settings.syllableColors) {
      root.setAttribute("data-syllable-colors", "true");
    } else {
      root.removeAttribute("data-syllable-colors");
    }
  }, [settings]);

  return (
    <AccessibilityContext.Provider
      value={{ settings, updateSettings, resetSettings }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
}
