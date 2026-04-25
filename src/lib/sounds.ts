/**
 * Sound effects via Web Audio API (no audio files needed).
 * Reads the `sounds` flag directly from localStorage to avoid
 * hook dependency (this is a plain module, not a React component).
 */

const SETTINGS_KEY = "teacher-loulou-accessibility";

function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { sounds?: boolean };
    return parsed.sounds === true;
  } catch {
    return false;
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    return new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  } catch {
    return null;
  }
}

function playTone(
  frequency: number,
  duration: number,
  type: OscillatorType = "sine",
  gainStart = 0.4,
  gainEnd = 0
): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

  gainNode.gain.setValueAtTime(gainStart, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    Math.max(gainEnd, 0.001),
    ctx.currentTime + duration / 1000
  );

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration / 1000);
}

/** Short ascending beep — correct answer */
export function playCorrect(): void {
  playTone(880, 80, "sine", 0.3, 0);
}

/** Low descending beep — incorrect answer */
export function playIncorrect(): void {
  playTone(220, 150, "sawtooth", 0.2, 0);
}

/** Fanfare-like sequence — quiz success */
export function playVictory(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
    gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.15);
    osc.start(ctx.currentTime + i * 0.12);
    osc.stop(ctx.currentTime + i * 0.12 + 0.15);
  });
}
