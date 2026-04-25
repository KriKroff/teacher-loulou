/**
 * Haptic feedback via Vibration API.
 * Reads the `vibration` flag directly from localStorage to avoid
 * hook dependency (this is a plain module, not a React component).
 */

const SETTINGS_KEY = "teacher-loulou-accessibility";

function isVibrationEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return true; // default true
    const parsed = JSON.parse(raw) as { vibration?: boolean };
    // Default is true when not explicitly set
    return parsed.vibration !== false;
  } catch {
    return true;
  }
}

function vibrate(pattern: number | number[]): void {
  if (!isVibrationEnabled()) return;
  if (typeof window === "undefined") return;
  if (!navigator.vibrate) return;
  navigator.vibrate(pattern);
}

/** Short pulse — correct answer */
export function vibrateCorrect(): void {
  vibrate(50);
}

/** Double pulse — incorrect answer */
export function vibrateIncorrect(): void {
  vibrate([100, 50, 100]);
}
