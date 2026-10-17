import { useSyncExternalStore } from "react";

/** Reads a country name aloud with the browser's French voice (no audio files). */
export function speak(text: string): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  utterance.rate = 0.9;
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith("fr"));
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

const noopSubscribe = () => () => {};

/** Hydration-safe check (always false on the server). */
export function useCanSpeak(): boolean {
  return useSyncExternalStore(noopSubscribe, canSpeak, () => false);
}
