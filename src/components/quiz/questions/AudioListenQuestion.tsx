"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import type { QuestionComponentProps } from "./types";

export function AudioListenQuestion({
  question,
  onAnswer,
  showFeedback,
}: QuestionComponentProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio || audioError) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        setAudioError(true);
        setIsPlaying(false);
      });
      setIsPlaying(true);
      setHasPlayed(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const handleAudioError = () => {
    setAudioError(true);
    setIsPlaying(false);
  };

  const handleAnswer = (option: string) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    const isCorrect = Array.isArray(question.correctAnswer)
      ? (question.correctAnswer as string[]).includes(option)
      : question.correctAnswer === option;
    onAnswer(isCorrect, option);
  };

  return (
    <div className="space-y-4">
      {/* Audio player */}
      <div className="flex items-center gap-3 rounded-xl border-2 border-accent-200 bg-accent-50 p-4">
        {question.audioSrc ? (
          <>
            <audio
              ref={audioRef}
              src={assetPath(question.audioSrc)}
              onEnded={handleAudioEnded}
              onError={handleAudioError}
              preload="none"
            />
            <button
              onClick={toggleAudio}
              disabled={audioError}
              aria-label={isPlaying ? "Mettre en pause" : "Écouter l'audio"}
              className={cn(
                "flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full border-2 transition-all",
                audioError
                  ? "cursor-not-allowed border-warm-200 bg-warm-100 text-warm-400"
                  : isPlaying
                  ? "border-accent-500 bg-accent-500 text-white hover:bg-accent-600 active:scale-95"
                  : "border-accent-300 bg-white text-accent-600 hover:border-accent-500 hover:bg-accent-100 active:scale-95"
              )}
            >
              {audioError ? (
                <VolumeX className="h-6 w-6" />
              ) : isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>
            <div className="flex-1">
              {audioError ? (
                <p className="text-sm text-warm-500">
                  Audio non disponible — lis la transcription dans l&apos;explication après ta réponse.
                </p>
              ) : (
                <>
                  <p className="text-sm font-semibold text-accent-700">
                    {isPlaying ? "Lecture en cours…" : hasPlayed ? "Réécouter" : "Écouter l'audio"}
                  </p>
                  <p className="text-xs text-warm-500">
                    Tu peux écouter autant de fois que nécessaire
                  </p>
                </>
              )}
            </div>
            <Volume2 className="h-5 w-5 shrink-0 text-accent-400" />
          </>
        ) : (
          <div className="flex items-center gap-3">
            <VolumeX className="h-6 w-6 text-warm-400" />
            <p className="text-sm text-warm-500">
              Aucun fichier audio disponible.{" "}
              <span className="text-xs opacity-70">
                (TODO: enregistrer l&apos;audio)
              </span>
            </p>
          </div>
        )}
      </div>

      {/* QCM options */}
      <div className="space-y-2.5">
        {question.options?.map((option) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = Array.isArray(question.correctAnswer)
            ? (question.correctAnswer as string[]).includes(option)
            : question.correctAnswer === option;

          let optionStyle = "border-warm-200 bg-warm-50 hover:border-accent-300 hover:bg-accent-50";
          if (showFeedback) {
            if (isCorrect) optionStyle = "border-success-500 bg-success-100 text-success-600";
            else if (isSelected && !isCorrect)
              optionStyle = "border-red-400 bg-red-50 text-red-600";
            else optionStyle = "border-warm-200 bg-warm-50 opacity-50";
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                optionStyle,
                !showFeedback && "active:scale-[0.98]"
              )}
            >
              {showFeedback && isCorrect && (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success-500" />
              )}
              {showFeedback && isSelected && !isCorrect && (
                <XCircle className="h-5 w-5 shrink-0 text-red-500" />
              )}
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
