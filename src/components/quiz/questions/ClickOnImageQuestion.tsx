"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import type { QuestionComponentProps } from "./types";

export function ClickOnImageQuestion({
  question,
  onAnswer,
  showFeedback,
}: QuestionComponentProps) {
  const clickZones = question.clickZones ?? [];
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);

  const handleZoneClick = (zoneId: string) => {
    if (showFeedback) return;
    setSelectedZoneId(zoneId);
  };

  const handleValidate = () => {
    if (showFeedback || !selectedZoneId) return;
    const zone = clickZones.find((z) => z.id === selectedZoneId);
    const isCorrect = zone?.isCorrect ?? false;
    onAnswer(isCorrect, selectedZoneId);
  };

  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold text-warm-500">
        Clique sur la bonne zone du schéma
      </p>

      {/* Image container with click zones */}
      <div className="relative w-full overflow-hidden rounded-xl border border-warm-200 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(question.imageSrc ?? "")}
          alt={question.imageAlt ?? "Carte / Schéma"}
          className="block w-full select-none"
          draggable={false}
        />

        {clickZones.map((zone) => {
          const isSelected = selectedZoneId === zone.id;
          let zoneStyle = "border-transparent hover:border-accent-400 hover:bg-accent-200/20";

          if (isSelected && !showFeedback) {
            zoneStyle = "border-accent-500 bg-accent-300/30";
          } else if (showFeedback) {
            if (zone.isCorrect) {
              zoneStyle = "border-success-500 bg-success-100/50";
            } else if (isSelected && !zone.isCorrect) {
              zoneStyle = "border-red-400 bg-red-100/50";
            } else {
              zoneStyle = "border-transparent";
            }
          }

          return (
            <button
              key={zone.id}
              onClick={() => handleZoneClick(zone.id)}
              disabled={showFeedback}
              aria-label={zone.label ?? zone.id}
              style={{
                position: "absolute",
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.w}%`,
                height: `${zone.h}%`,
              }}
              className={cn(
                "rounded border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
                zoneStyle,
                !showFeedback && "cursor-pointer"
              )}
            >
              {showFeedback && zone.isCorrect && (
                <span className="flex h-full items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-success-600 drop-shadow" />
                </span>
              )}
              {showFeedback && isSelected && !zone.isCorrect && (
                <span className="flex h-full items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-500 drop-shadow" />
                </span>
              )}
            </button>
          );
        })}

        {/* Label tooltips after feedback */}
        {showFeedback &&
          clickZones
            .filter((z) => z.label)
            .map((zone) => (
              <div
                key={`label-${zone.id}`}
                style={{
                  position: "absolute",
                  left: `${zone.x + zone.w / 2}%`,
                  top: `${zone.y + zone.h}%`,
                  transform: "translate(-50%, 4px)",
                }}
                className={cn(
                  "whitespace-nowrap rounded px-1.5 py-0.5 text-[11px] font-semibold text-white shadow",
                  zone.isCorrect ? "bg-success-600" : "bg-warm-600"
                )}
              >
                {zone.label}
              </div>
            ))}
      </div>

      {/* Validate button */}
      {!showFeedback && (
        <button
          onClick={handleValidate}
          disabled={!selectedZoneId}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            selectedZoneId
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {selectedZoneId ? "Valider ma réponse" : "Clique d'abord sur une zone"}
        </button>
      )}
    </div>
  );
}
