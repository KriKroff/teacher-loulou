"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, MoveHorizontal } from "lucide-react";
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

const TICK_W = 38; // px — one graduation = one tap column

/**
 * "Place les événements sur la frise" — a horizontal graduated timeline, as on
 * paper. Each event gets a number; the student taps an event, then the
 * graduation where it belongs (its number appears above the axis). Only the
 * major graduations show their year, so the scale has to be read. The axis
 * scrolls sideways on narrow screens.
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

  const [bank] = useState(() => shuffle(frise?.events ?? []).map((e, i) => ({ ...e, n: i + 1 })));
  const [placements, setPlacements] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<string | null>(null);

  if (!frise) return null;

  const placedCount = Object.keys(placements).length;
  const allPlaced = bank.length > 0 && placedCount === bank.length;

  const placeOn = (tick: number) => {
    if (showFeedback || !selected) return;
    setPlacements((p) => ({ ...p, [selected]: tick }));
    setSelected(null);
  };

  const handleValidate = () => {
    if (showFeedback || !allPlaced) return;
    const correct = bank.every((e) => isWellPlaced(e.year, placements[e.id], step));
    onAnswer(correct, bank.map((e) => `${e.id}:${placements[e.id]}`));
  };

  const nearestTick = (year: number) =>
    ticks.reduce((best, t) => (Math.abs(t - year) < Math.abs(best - year) ? t : best), ticks[0]);

  const instruction = showFeedback
    ? null
    : selected
      ? `Touche maintenant la bonne graduation pour le n° ${bank.find((e) => e.id === selected)?.n}`
      : allPlaced
        ? "Tout est placé ! Touche un événement pour le déplacer, ou valide."
        : "1. Touche un événement  ·  2. Touche sa graduation sur la frise";

  return (
    <div className="space-y-3">
      {/* Event list */}
      <ul className="space-y-2">
        {bank.map((e) => {
          const placed = placements[e.id] !== undefined;
          const isSel = selected === e.id;
          const ok = placed && isWellPlaced(e.year, placements[e.id], step);
          return (
            <li key={e.id}>
              <button
                type="button"
                disabled={showFeedback}
                aria-pressed={isSel}
                onClick={() => setSelected(isSel ? null : e.id)}
                className={cn(
                  "flex min-h-[44px] w-full items-center gap-2.5 rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-all",
                  !showFeedback && isSel && "border-accent-500 bg-accent-100 text-accent-800 shadow-md",
                  !showFeedback && !isSel && placed && "border-warm-200 bg-warm-50 text-warm-600",
                  !showFeedback && !isSel && !placed && "border-accent-200 bg-white hover:border-accent-400",
                  showFeedback && ok && "border-success-500 bg-success-50 text-success-700",
                  showFeedback && !ok && "border-red-400 bg-red-50 text-red-700"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white",
                    showFeedback ? (ok ? "bg-success-500" : "bg-red-500") : isSel ? "bg-accent-600" : placed ? "bg-warm-500" : "bg-accent-500"
                  )}
                >
                  {e.n}
                </span>
                <span className="flex-1">
                  <InlineMarkdown text={e.label} />
                </span>
                {!showFeedback && placed && <span className="text-xs font-medium text-warm-500">📍 placé</span>}
                {showFeedback && (ok ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <XCircle className="h-5 w-5 shrink-0" />)}
              </button>
              {showFeedback && !ok && (
                <p className="mt-1 pl-11 text-xs text-red-700">
                  Placé vers {placements[e.id]} → il fallait la graduation <b>{nearestTick(e.year)}</b>.
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {instruction && <p className="text-xs font-semibold text-accent-700">{instruction}</p>}
      {showHint && !showFeedback && (
        <p className="text-xs text-warm-600">
          Une petite graduation = <b>{step} ans</b>. Une grande graduation (avec l&apos;année) = <b>{majorStep} ans</b>.
        </p>
      )}

      {/* Timeline */}
      <div className="rounded-xl border-2 border-warm-200 bg-white/80">
        <div className="overflow-x-auto overscroll-x-contain px-3 pb-2 pt-1">
          <div className="relative mx-auto" style={{ width: ticks.length * TICK_W + 18 }}>
            {/* axis line + arrow */}
            <span aria-hidden className="absolute left-0 h-[3px] bg-warm-700" style={{ top: 78, right: 10 }} />
            <span
              aria-hidden
              className="absolute right-0 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-warm-700"
              style={{ top: 72.5 }}
            />
            <div className="flex">
              {ticks.map((t) => {
                const major = t % majorStep === 0;
                const here = bank.filter((e) => placements[e.id] === t);
                const missed = showFeedback
                  ? bank.filter((e) => nearestTick(e.year) === t && !isWellPlaced(e.year, placements[e.id], step))
                  : [];
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => placeOn(t)}
                    disabled={showFeedback || !selected}
                    aria-label={`Graduation ${t}`}
                    className={cn(
                      "relative flex h-[118px] shrink-0 flex-col items-center rounded-lg",
                      selected && !showFeedback && "hover:bg-accent-50 active:bg-accent-100"
                    )}
                    style={{ width: TICK_W }}
                  >
                    {/* placed markers, stacked above the axis */}
                    <span className="flex h-[66px] flex-col-reverse items-center justify-start gap-0.5 pt-0.5">
                      {here.map((e) => {
                        const ok = isWellPlaced(e.year, t, step);
                        return (
                          <span
                            key={e.id}
                            className={cn(
                              "flex h-6 w-6 items-center justify-center rounded-full text-[0.6875rem] font-extrabold text-white shadow-sm",
                              !showFeedback && "bg-accent-500",
                              showFeedback && (ok ? "bg-success-500" : "bg-red-500")
                            )}
                          >
                            {e.n}
                          </span>
                        );
                      })}
                      {missed.map((e) => (
                        <span
                          key={`m-${e.id}`}
                          className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-dashed border-success-500 bg-success-50 text-[0.6875rem] font-extrabold text-success-700"
                        >
                          {e.n}
                        </span>
                      ))}
                    </span>
                    {/* tick */}
                    <span
                      aria-hidden
                      className={cn("absolute left-1/2 -translate-x-1/2 bg-warm-700", major ? "w-[3px]" : "w-[1.5px]")}
                      style={major ? { top: 68, height: 22 } : { top: 73, height: 12 }}
                    />
                    {major && (
                      <span className="absolute left-1/2 -translate-x-1/2 text-xs font-extrabold tabular-nums text-warm-800" style={{ top: 94 }}>
                        {t}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <p className="flex items-center justify-center gap-1 border-t border-warm-100 py-1 text-[0.6875rem] text-warm-500 lg:hidden">
          <MoveHorizontal className="h-3.5 w-3.5" /> Fais glisser la frise pour tout voir
        </p>
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
          {allPlaced ? "Valider la frise" : `Place tous les événements (${placedCount}/${bank.length})`}
        </button>
      )}
    </div>
  );
}
