"use client";

import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import type { QuestionComponentProps } from "./types";

// ── Draggable label chip ──────────────────────────────────────────────────────
function DraggableLabel({
  id,
  label,
  disabled,
  placed,
}: {
  id: string;
  label: string;
  disabled: boolean;
  placed: boolean;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    disabled: disabled || placed,
  });

  return (
    <div
      ref={setNodeRef}
      {...(!disabled && !placed ? { ...attributes, ...listeners } : {})}
      className={cn(
        "min-h-[44px] min-w-[44px] select-none rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all",
        placed
          ? "cursor-default border-warm-200 bg-warm-100 text-warm-400 line-through"
          : isDragging
          ? "cursor-grabbing border-accent-400 bg-accent-50 opacity-50 shadow-lg"
          : disabled
          ? "cursor-default border-warm-200 bg-warm-50 opacity-60"
          : "cursor-grab touch-none border-accent-300 bg-white shadow-sm hover:border-accent-500 hover:shadow-md active:cursor-grabbing"
      )}
    >
      {label}
    </div>
  );
}

// ── Droppable zone on the image ───────────────────────────────────────────────
function DroppableZone({
  zone,
  placedLabel,
  showFeedback,
}: {
  zone: { id: string; x: number; y: number; correctLabel: string };
  placedLabel: string | null;
  showFeedback: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: zone.id });
  const isCorrect = placedLabel === zone.correctLabel;

  let containerStyle =
    "border-dashed border-warm-400 bg-warm-100/70 hover:border-accent-400";
  if (isOver) containerStyle = "border-accent-500 bg-accent-100/80 scale-110";
  else if (placedLabel && !showFeedback)
    containerStyle = "border-accent-300 bg-white/90";
  else if (showFeedback && placedLabel) {
    containerStyle = isCorrect
      ? "border-success-500 bg-success-100/90"
      : "border-red-400 bg-red-50/90";
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        position: "absolute",
        left: `${zone.x}%`,
        top: `${zone.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={cn(
          "flex min-h-[52px] min-w-[52px] items-center justify-center rounded-full border-2 px-2 py-1 text-xs font-bold shadow transition-all",
          containerStyle
        )}
      >
        {placedLabel ? (
          <span className="flex items-center gap-1">
            {showFeedback && isCorrect && (
              <CheckCircle2 className="h-3 w-3 shrink-0 text-success-600" />
            )}
            {showFeedback && !isCorrect && (
              <XCircle className="h-3 w-3 shrink-0 text-red-500" />
            )}
            <span className="max-w-[80px] text-center text-[11px] leading-tight">
              {placedLabel}
            </span>
          </span>
        ) : (
          <span className="text-warm-400">?</span>
        )}
      </div>
      {showFeedback && placedLabel && !isCorrect && (
        <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-semibold text-white shadow">
          → {zone.correctLabel}
        </div>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function DragOnImageQuestion({
  question,
  onAnswer,
  showFeedback,
}: QuestionComponentProps) {
  const zones = question.zones ?? [];
  const labels = question.labels ?? zones.map((z) => z.correctLabel);

  // placements: zoneId → label string
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const placedLabels = Object.values(placements);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveLabel(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveLabel(null);
    const { over, active } = event;
    if (!over) return;

    const label = active.id as string;
    const zoneId = over.id as string;

    if (!zones.find((z) => z.id === zoneId)) return;

    setPlacements((prev) => {
      const next = { ...prev };
      // Remove label from any previous zone
      for (const zId of Object.keys(next)) {
        if (next[zId] === label) delete next[zId];
      }
      next[zoneId] = label;
      return next;
    });
  };

  const allFilled = zones.length > 0 && zones.every((z) => placements[z.id]);

  const handleValidate = () => {
    if (showFeedback) return;
    const allCorrect = zones.every((z) => placements[z.id] === z.correctLabel);
    const userAnswer = zones.map((z) => `${z.id}:${placements[z.id] ?? ""}`);
    onAnswer(allCorrect, userAnswer);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-4">
        {/* Image with drop zones */}
        <div className="relative w-full overflow-hidden rounded-xl border border-warm-200 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(question.imageSrc ?? "")}
            alt={question.imageAlt ?? "Schéma"}
            className="block w-full select-none"
            draggable={false}
          />
          {zones.map((zone) => (
            <DroppableZone
              key={zone.id}
              zone={zone}
              placedLabel={placements[zone.id] ?? null}
              showFeedback={showFeedback}
            />
          ))}
        </div>

        {/* Label bank */}
        <div className="rounded-xl border border-warm-200 bg-warm-50 p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">
            Étiquettes — glisse sur le schéma
          </p>
          <div className="flex flex-wrap gap-2">
            {labels.map((label) => (
              <DraggableLabel
                key={label}
                id={label}
                label={label}
                disabled={showFeedback}
                placed={placedLabels.includes(label)}
              />
            ))}
          </div>
        </div>

        {/* Validate button */}
        {!showFeedback && (
          <button
            onClick={handleValidate}
            disabled={!allFilled}
            className={cn(
              "w-full rounded-xl py-3 text-sm font-bold transition-all",
              allFilled
                ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
                : "cursor-not-allowed bg-warm-200 text-warm-400"
            )}
          >
            {allFilled
              ? "Valider"
              : `Place toutes les étiquettes (${Object.keys(placements).length}/${zones.length})`}
          </button>
        )}
      </div>

      <DragOverlay>
        {activeLabel ? (
          <div className="rounded-xl border-2 border-accent-500 bg-white px-3 py-2 text-sm font-semibold shadow-xl">
            {activeLabel}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
