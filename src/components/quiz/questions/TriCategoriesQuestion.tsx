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
  useDroppable,
  useDraggable,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { CheckCircle2, XCircle, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

// ── Draggable item chip ───────────────────────────────────────────────────────
function DraggableItem({
  id,
  label,
  disabled,
}: {
  id: string;
  label: string;
  disabled: boolean;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id,
    disabled,
  });

  return (
    <div
      ref={setNodeRef}
      {...(!disabled ? { ...attributes, ...listeners } : {})}
      className={cn(
        "flex min-h-[44px] select-none items-center gap-2 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-all",
        "border-accent-200 bg-white shadow-sm",
        isDragging && "opacity-50 shadow-lg",
        !disabled && !isDragging && "cursor-grab touch-none hover:border-accent-400 active:cursor-grabbing"
      )}
    >
      {!disabled && <GripVertical className="h-4 w-4 shrink-0 text-warm-400" />}
      <span className="flex-1">{label}</span>
    </div>
  );
}

// ── Droppable category column ─────────────────────────────────────────────────
function CategoryDroppable({
  id,
  label,
  placedItems,
  correctItemIds,
  showFeedback,
}: {
  id: string;
  label: string;
  placedItems: { id: string; label: string }[];
  correctItemIds: string[];
  showFeedback: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex min-w-[140px] flex-1 flex-col rounded-xl border-2 p-3 transition-all",
        isOver ? "border-accent-400 bg-accent-50" : "border-warm-200 bg-warm-50"
      )}
    >
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-wide text-warm-700">
        {label}
      </p>
      <div className="flex min-h-[60px] flex-col gap-2">
        {placedItems.map((item) => {
          const isCorrect = correctItemIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={cn(
                "flex min-h-[44px] items-center gap-2 rounded-xl border-2 px-3 py-2 text-sm font-semibold",
                showFeedback
                  ? isCorrect
                    ? "border-success-400 bg-success-50 text-success-700"
                    : "border-red-400 bg-red-50 text-red-700"
                  : "border-accent-200 bg-white shadow-sm cursor-grab touch-none hover:border-accent-400"
              )}
            >
              {!showFeedback && <GripVertical className="h-4 w-4 shrink-0 text-warm-400" />}
              <span className="flex-1">{item.label}</span>
              {showFeedback && isCorrect && (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />
              )}
              {showFeedback && !isCorrect && (
                <XCircle className="h-4 w-4 shrink-0 text-red-500" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Unplaced items drop zone ──────────────────────────────────────────────────
function UnplacedZone({
  items,
  showFeedback,
}: {
  items: { id: string; label: string }[];
  showFeedback: boolean;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: "__unplaced__" });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "rounded-xl border-2 p-3 transition-all",
        isOver ? "border-accent-400 bg-accent-50" : "border-warm-200 bg-warm-50"
      )}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">
        À classer ({items.length} restant{items.length > 1 ? "s" : ""})
      </p>
      <div className="flex flex-wrap gap-2 min-h-[44px]">
        {items.map((item) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            label={item.label}
            disabled={showFeedback}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function TriCategoriesQuestion({
  question,
  onAnswer,
  showFeedback,
}: QuestionComponentProps) {
  const items = question.items ?? [];
  const categories = question.categories ?? [];

  // placements: itemId → categoryId
  const [placements, setPlacements] = useState<Record<string, string>>({});
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const unplacedItems = items.filter((item) => !placements[item.id]);
  const allPlaced = items.length > 0 && items.every((item) => placements[item.id]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveItemId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveItemId(null);
    const { over, active } = event;
    if (!over) return;

    const itemId = active.id as string;
    const targetId = over.id as string;

    if (targetId === "__unplaced__") {
      setPlacements((prev) => {
        const next = { ...prev };
        delete next[itemId];
        return next;
      });
    } else if (categories.find((c) => c.id === targetId)) {
      setPlacements((prev) => ({ ...prev, [itemId]: targetId }));
    }
  };

  const handleValidate = () => {
    if (showFeedback) return;
    const allCorrect = items.every((item) => {
      const cat = categories.find((c) => c.correctItemIds.includes(item.id));
      return placements[item.id] === cat?.id;
    });
    const userAnswer = items.map((item) => `${item.id}:${placements[item.id] ?? ""}`);
    onAnswer(allCorrect, userAnswer);
  };

  const activeItem = items.find((i) => i.id === activeItemId);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-4">
        {/* Unplaced items zone */}
        <UnplacedZone items={unplacedItems} showFeedback={showFeedback} />

        {/* Category columns — horizontal scroll on mobile */}
        <div className="flex gap-3 overflow-x-auto pb-1 md:overflow-visible">
          {categories.map((cat) => {
            const placedItems = items.filter(
              (item) => placements[item.id] === cat.id
            );
            return (
              <CategoryDroppable
                key={cat.id}
                id={cat.id}
                label={cat.label}
                placedItems={placedItems}
                correctItemIds={cat.correctItemIds}
                showFeedback={showFeedback}
              />
            );
          })}
        </div>

        {/* Validate */}
        {!showFeedback && (
          <button
            onClick={handleValidate}
            disabled={!allPlaced}
            className={cn(
              "w-full rounded-xl py-3 text-sm font-bold transition-all",
              allPlaced
                ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
                : "cursor-not-allowed bg-warm-200 text-warm-400"
            )}
          >
            {allPlaced
              ? "Valider"
              : `Classe tous les éléments (${Object.keys(placements).length}/${items.length})`}
          </button>
        )}
      </div>

      <DragOverlay>
        {activeItem ? (
          <div className="flex items-center gap-2 rounded-xl border-2 border-accent-500 bg-white px-3 py-2 text-sm font-semibold shadow-xl">
            <GripVertical className="h-4 w-4 text-warm-400" />
            {activeItem.label}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
