"use client";

import { useState } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { ionFormula } from "@/lib/ion";
import { AtomModel } from "@/components/chemistry/AtomModel";
import type { QuestionComponentProps } from "./types";

/**
 * "Construis l'ion" — the atom starts neutral (Z electrons); the student
 * removes or adds electrons until the requested ion is obtained.
 */
export function ConstruireIonQuestion({ question, onAnswer, showFeedback }: QuestionComponentProps) {
  const builder = question.ionBuilder;
  const [electrons, setElectrons] = useState(builder?.z ?? 0);

  if (!builder) {
    return <p className="text-sm text-warm-500">Aucun atome défini pour cette question.</p>;
  }

  const { symbol, z, targetElectrons, hideLiveCharge } = builder;
  const charge = z - electrons;
  const maxElectrons = z + 4;
  const isCorrect = electrons === targetElectrons;
  const showCharge = !hideLiveCharge || showFeedback;

  const chargeText =
    charge === 0 ? "0 (neutre)" : charge > 0 ? `+${charge}` : `${charge}`;

  const handleValidate = () => {
    if (showFeedback) return;
    onAnswer(isCorrect, String(electrons));
  };

  const stepButton =
    "flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl border-2 px-3 py-2 text-sm font-bold transition-all active:scale-95 disabled:opacity-40 disabled:active:scale-100";

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <AtomModel z={z} electrons={electrons} size={200} />
      </div>

      {/* Live counters */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl bg-red-50 px-2 py-2">
          <div className="text-xs text-warm-600">Protons (+)</div>
          <div className="text-xl font-extrabold text-red-700">{z}</div>
        </div>
        <div className="rounded-xl bg-stone-100 px-2 py-2">
          <div className="text-xs text-warm-600">Électrons (−)</div>
          <div className="text-xl font-extrabold text-stone-800">{electrons}</div>
        </div>
        <div className="rounded-xl bg-accent-100 px-2 py-2">
          <div className="text-xs text-warm-600">Charge</div>
          <div className="text-xl font-extrabold text-accent-700">{showCharge ? chargeText : "?"}</div>
        </div>
      </div>

      {showCharge && (
        <p className="text-center text-sm text-warm-600">
          Formule : <strong className="text-2xl text-warm-800">{ionFormula(symbol, charge)}</strong>
        </p>
      )}

      {!showFeedback && (
        <>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setElectrons((e) => Math.max(0, e - 1))}
              disabled={electrons <= 0}
              className={cn(stepButton, "border-orange-300 bg-orange-50 text-orange-800 hover:bg-orange-100")}
            >
              <Minus className="h-4 w-4" /> Retirer un électron
            </button>
            <button
              type="button"
              onClick={() => setElectrons((e) => Math.min(maxElectrons, e + 1))}
              disabled={electrons >= maxElectrons}
              className={cn(stepButton, "border-sky-300 bg-sky-50 text-sky-800 hover:bg-sky-100")}
            >
              <Plus className="h-4 w-4" /> Ajouter un électron
            </button>
          </div>
          <button
            type="button"
            onClick={() => setElectrons(z)}
            className="mx-auto flex items-center gap-1.5 text-xs text-warm-500 hover:text-accent-600"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Revenir à l&apos;atome neutre ({z} électrons)
          </button>
          <button
            onClick={handleValidate}
            className="w-full rounded-xl bg-accent-500 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-accent-600 active:scale-[0.98]"
          >
            Valider mon ion
          </button>
        </>
      )}

      {showFeedback && !isCorrect && (
        <p className="text-sm text-warm-600">
          Il fallait <strong className="text-warm-800">{targetElectrons} électrons</strong> → ion{" "}
          <strong className="text-warm-800">{ionFormula(symbol, z - targetElectrons)}</strong>
        </p>
      )}
    </div>
  );
}
