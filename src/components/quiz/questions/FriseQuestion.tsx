"use client";

import { useMemo, useState } from "react";
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

/** An event is well placed when it sits on the graduation closest to its year (ties accept both). */
export function isWellPlaced(eventYear: number, tickYear: number, step: number): boolean {
  return Math.abs(eventYear - tickYear) <= step / 2;
}

/**
 * "Place les événements sur la frise" — a vertical graduated timeline (reads
 * top → bottom on a phone). The student taps an event, then taps the
 * graduation where it belongs. Only the major graduations (multiples of majorStep) show their year,
 * so the student has to read the scale, like on paper.
 */
export function FriseQuestion({ question, onAnswer, showFeedback, showHint }: QuestionComponentProps) {
  const frise = question.frise;
  const step = frise?.step ?? 10;
  const majorStep = frise?.majorStep ?? 50;

  const ticks = useMemo(() => {
    const out: number[] = [];
    if (!frise) return out;
    for (let t = frise.start; t <= frise.end; t += step) out.push(t);
    return out;
  }, [frise, step]);

  const [bank] = useState(() => shuffle(frise?.events ?? []));
  const [placements, setPlacements] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<string | null>(null);

  if (!frise) return null;

  const unplaced = bank.filter((e) => placements[e.id] === undefined);
  const allPlaced = bank.length > 0 && unplaced.length === 0;

  const placeOn = (tick: number) => {
    if (showFeedback || !selected) return;
    setPlacements((p) => ({ ...p, [selected]: tick }));
    setSelected(null);
  };

  const unplace = (id: string) => {
    if (showFeedback) return;
    setPlacements((p) => {
      const next = { ...p };
      delete next[id];
      return next;
    });
    setSelected(id);
  };

  const handleValidate = () => {
    if (showFeedback || !allPlaced) return;
    const correct = bank.every((e) => isWellPlaced(e.year, placements[e.id], step));
    onAnswer(correct, bank.map((e) => `${e.id}:${placements[e.id]}`));
  };

  const nearestTick = (year: number) =>
    ticks.reduce((best, t) => (Math.abs(t - year) < Math.abs(best - year) ? t : best), ticks[0]);

  return (
    <div className="space-y-3">
      {/* Event bank */}
      {!showFeedback && (
        <div className="rounded-xl border-2 border-warm-200 bg-warm-50 p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-warm-500">
            {unplaced.length > 0
              ? selected
                ? "Touche maintenant la bonne graduation sur la frise ⬇️"
                : "1. Touche un événement"
              : "Tout est placé ! Touche une étiquette sur la frise pour la déplacer."}
          </p>
          <div className="flex flex-wrap gap-2">
            {unplaced.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setSelected(selected === e.id ? null : e.id)}
                aria-pressed={selected === e.id}
                className={cn(
                  "min-h-[44px] rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-all",
                  selected === e.id
                    ? "border-accent-500 bg-accent-100 text-accent-700 shadow-md"
                    : "border-accent-200 bg-white hover:border-accent-400"
                )}
              >
                <InlineMarkdown text={e.label} />
              </button>
            ))}
          </div>
        </div>
      )}

      {showHint && !showFeedback && (
        <p className="text-xs text-warm-600">
          Une petite graduation = <b>{step} ans</b>. Une grande graduation = <b>{majorStep} ans</b>.
        </p>
      )}

      {/* Timeline */}
      <div className="rounded-xl border-2 border-warm-200 bg-white/80 py-2 pr-2">
        {ticks.map((t) => {
          const major = t % majorStep === 0;
          const here = bank.filter((e) => placements[e.id] === t);
          const missedHere = showFeedback
            ? bank.filter((e) => nearestTick(e.year) === t && !isWellPlaced(e.year, placements[e.id], step))
            : [];
          return (
            <div key={t} className="flex min-h-[38px] items-stretch">
              <div className="w-14 shrink-0 self-center pr-2 text-right text-xs font-extrabold text-warm-700 tabular-nums">
                {major ? t : ""}
              </div>
              <button
                type="button"
                onClick={() => placeOn(t)}
                disabled={showFeedback || !selected}
                aria-label={`Graduation ${t}`}
                className={cn(
                  "relative flex flex-1 items-center gap-2 border-l-4 border-warm-500 pl-3 text-left",
                  selected && !showFeedback && "hover:bg-accent-50 active:bg-accent-100"
                )}
              >
                <span
                  className={cn(
                    "absolute -left-1 top-1/2 -translate-y-1/2 bg-warm-500",
                    major ? "h-[3px] w-5" : "h-[2px] w-3"
                  )}
                  aria-hidden
                />
                <span className="flex flex-wrap gap-1.5 pl-3 py-1">
                  {here.map((e) => {
                    const ok = isWellPlaced(e.year, t, step);
                    return (
                      <span
                        key={e.id}
                        role={showFeedback ? undefined : "button"}
                        tabIndex={showFeedback ? undefined : 0}
                        onClick={(ev) => {
                          ev.stopPropagation();
                          unplace(e.id);
                        }}
                        onKeyDown={(ev) => {
                          if (ev.key === "Enter" || ev.key === " ") {
                            ev.preventDefault();
                            ev.stopPropagation();
                            unplace(e.id);
                          }
                        }}
                        className={cn(
                          "inline-flex items-center gap-1 rounded-lg border-2 px-2 py-1 text-xs font-semibold",
                          !showFeedback && "border-accent-300 bg-accent-50 text-accent-800 cursor-pointer",
                          showFeedback && ok && "border-success-500 bg-success-100 text-success-700",
                          showFeedback && !ok && "border-red-400 bg-red-50 text-red-700 line-through"
                        )}
                      >
                        {showFeedback && (ok ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />)}
                        <InlineMarkdown text={e.label} />
                      </span>
                    );
                  })}
                  {missedHere.map((e) => (
                    <span
                      key={`missed-${e.id}`}
                      className="inline-flex items-center gap-1 rounded-lg border-2 border-dashed border-success-500 bg-success-50 px-2 py-1 text-xs font-semibold text-success-700"
                    >
                      ➜ <InlineMarkdown text={e.label} />
                    </span>
                  ))}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {!showFeedback && (
        <button
          type="button"
          onClick={handleValidate}
          disabled={!allPlaced}
          className={cn(
            "w-full rounded-xl py-3 text-sm font-bold transition-all",
            allPlaced
              ? "bg-accent-500 text-white shadow-sm hover:bg-accent-600 active:scale-[0.98]"
              : "cursor-not-allowed bg-warm-200 text-warm-400"
          )}
        >
          {allPlaced ? "Valider la frise" : `Place tous les événements (${bank.length - unplaced.length}/${bank.length})`}
        </button>
      )}
    </div>
  );
}
