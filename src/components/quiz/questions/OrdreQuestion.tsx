"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CheckCircle2, XCircle, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function SortableItem({ id, label, disabled }: { id: string; label: string; disabled: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={cn(
        "flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-sm font-medium bg-warm-50 border-warm-200 transition-all select-none",
        isDragging ? "opacity-50 shadow-lg z-10" : "shadow-sm",
        !disabled && "cursor-grab active:cursor-grabbing touch-none"
      )}
      {...(!disabled ? { ...attributes, ...listeners } : {})}
    >
      {!disabled && <GripVertical className="h-4 w-4 shrink-0 text-warm-400" />}
      <span>{label}</span>
    </div>
  );
}

export function OrdreQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const correctOrder = Array.isArray(question.correctAnswer)
    ? (question.correctAnswer as string[])
    : [];

  const [ordreItems, setOrdreItems] = useState<string[]>(() =>
    shuffle(question.options ?? [])
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 12 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setOrdreItems((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleValidate = () => {
    if (showFeedback) return;
    const isCorrect = ordreItems.join("|||") === correctOrder.join("|||");
    onAnswer(isCorrect, ordreItems);
  };

  // Whether the overall answer is correct (for showing the correct order)
  const isCorrect = ordreItems.join("|||") === correctOrder.join("|||");

  return (
    <div className="space-y-3">
      <p className="text-xs text-warm-500">
        {showFeedback ? "Résultat de ton ordre :" : "Glisse les éléments pour les remettre dans le bon ordre."}
      </p>

      {showFeedback ? (
        <div className="space-y-2">
          {ordreItems.map((item, index) => {
            const isCorrectPos = correctOrder[index] === item;
            return (
              <div
                key={item}
                className={cn(
                  "flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-sm font-medium",
                  isCorrectPos
                    ? "border-success-500 bg-success-100 text-success-700"
                    : "border-red-400 bg-red-50 text-red-700"
                )}
              >
                {isCorrectPos
                  ? <CheckCircle2 className="h-4 w-4 shrink-0" />
                  : <XCircle className="h-4 w-4 shrink-0" />}
                <span>{item}</span>
              </div>
            );
          })}
          {!isCorrect && (
            <div className="mt-3 rounded-xl bg-warm-50 border border-warm-200 px-4 py-3 space-y-1.5">
              <p className="text-xs font-semibold text-warm-600">Ordre correct :</p>
              {correctOrder.map((item, i) => (
                <div key={item} className="flex items-center gap-2 text-xs text-warm-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success-100 text-success-700 font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={ordreItems} strategy={verticalListSortingStrategy}>
            <div className="space-y-2">
              {ordreItems.map((item) => (
                <SortableItem key={item} id={item} label={item} disabled={showFeedback} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {!showFeedback && (
        <button
          onClick={handleValidate}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
        >
          Valider l&apos;ordre
        </button>
      )}
    </div>
  );
}
