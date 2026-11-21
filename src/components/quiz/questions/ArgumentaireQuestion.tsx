"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";
import { InlineMarkdown } from "@/components/quiz/InlineMarkdown";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * "Construis ton argumentation" — the student fills each step of a short
 * argument (e.g. argument pour / argument contre / conclusion) with one card
 * from a bank that also contains traps (no figure, wrong side, absolute
 * conclusion…). The assembled paragraph is shown after validation.
 */
export function ArgumentaireQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const slots = question.argumentSlots ?? [];
  const [cards] = useState(() => shuffle(question.argumentCards ?? []));
  const [filled, setFilled] = useState<Record<string, string>>({});
  const [activeSlot, setActiveSlot] = useState<string | null>(slots[0]?.id ?? null);

  const usedIds = new Set(Object.values(filled));
  const allFilled = slots.length > 0 && slots.every((s) => filled[s.id]);
  const cardById = (id: string) => cards.find((c) => c.id === id);

  const pickCard = (cardId: string) => {
    if (showFeedback) return;
    const target = activeSlot ?? slots.find((s) => !filled[s.id])?.id;
    if (!target) return;
    const next = { ...filled, [target]: cardId };
    setFilled(next);
    setActiveSlot(slots.find((s) => !next[s.id])?.id ?? null);
  };

  const clearSlot = (slotId: string) => {
    if (showFeedback) return;
    if (filled[slotId]) {
      const next = { ...filled };
      delete next[slotId];
      setFilled(next);
    }
    setActiveSlot(slotId);
  };

  const handleValidate = () => {
    if (showFeedback || !allFilled) return;
    const correct = slots.every((s) => s.acceptedCardIds.includes(filled[s.id]));
    onAnswer(correct, slots.map((s) => `${s.id}:${filled[s.id]}`));
  };

  return (
    <div className="space-y-4">
      {/* Slots */}
      <div className="space-y-2.5">
        {slots.map((s, i) => {
          const card = filled[s.id] ? cardById(filled[s.id]) : undefined;
          const ok = card ? s.acceptedCardIds.includes(card.id) : false;
          const isActive = !showFeedback && activeSlot === s.id;
          return (
            <div key={s.id}>
              <button
                type="button"
                onClick={() => clearSlot(s.id)}
                disabled={showFeedback}
                className={cn(
                  "w-full rounded-xl border-2 px-4 py-3 text-left transition-all",
                  !showFeedback && (isActive ? "border-accent-500 bg-accent-50 shadow-sm" : "border-dashed border-warm-300 bg-warm-50"),
                  showFeedback && ok && "border-success-500 bg-success-50",
                  showFeedback && !ok && "border-red-400 bg-red-50"
                )}
              >
                <span className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-warm-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-warm-700 text-[11px] text-white">{i + 1}</span>
                  {s.label}
                  {showFeedback && (ok ? <CheckCircle2 className="h-4 w-4 text-success-500" /> : <XCircle className="h-4 w-4 text-red-500" />)}
                </span>
                {card ? (
                  <span className="block text-sm text-warm-800">
                    {s.prefix && <b>{s.prefix} </b>}
                    <InlineMarkdown text={card.label} />
                  </span>
                ) : (
                  <span className="block text-sm italic text-warm-400">
                    {isActive ? "Choisis une phrase ci-dessous ⬇️" : "Touche ici pour remplir"}
                  </span>
                )}
              </button>
              {showFeedback && card && !ok && (
                <div className="mt-1.5 space-y-1 px-1 text-xs">
                  {card.why && <p className="text-red-700">✗ <InlineMarkdown text={card.why} /></p>}
                  <p className="text-success-700">
                    ✓ Par exemple : <InlineMarkdown text={cardById(s.acceptedCardIds[0])?.label ?? ""} />
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Card bank */}
      {!showFeedback && (
        <div className="rounded-xl border-2 border-warm-200 bg-white/70 p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">
            Phrases disponibles (attention aux pièges !)
          </p>
          <div className="space-y-2">
            {cards.map((c) => {
              const used = usedIds.has(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  disabled={used}
                  onClick={() => pickCard(c.id)}
                  className={cn(
                    "w-full rounded-xl border-2 px-3 py-2.5 text-left text-sm transition-all",
                    used ? "border-warm-200 bg-warm-100 text-warm-400 line-through" : "border-accent-200 bg-white hover:border-accent-400 active:scale-[0.99]"
                  )}
                >
                  <InlineMarkdown text={c.label} />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {showFeedback && (
        <div className="rounded-xl border border-warm-200 bg-warm-50 px-4 py-3 text-sm text-warm-800">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-warm-500">Ton paragraphe</p>
          <p>
            {slots.map((s) => {
              const card = filled[s.id] ? cardById(filled[s.id]) : undefined;
              return card ? (
                <span key={s.id}>
                  {s.prefix && <b>{s.prefix} </b>}
                  <InlineMarkdown text={card.label} />{" "}
                </span>
              ) : null;
            })}
          </p>
        </div>
      )}

      {!showFeedback && (
        <button
          type="button"
          onClick={handleValidate}
          disabled={!allFilled}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            allFilled
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {allFilled ? "Valider mon argumentation" : `Complète les ${slots.length} étapes`}
        </button>
      )}
    </div>
  );
}
