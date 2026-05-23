"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

type VerbField = "french" | "base" | "preterite" | "participle";

const FIELD_LABELS: Record<VerbField, string> = {
  french: "🇫🇷 Français",
  base: "Infinitif",
  preterite: "Prétérit",
  participle: "Participe passé",
};

const FIELD_ORDER: VerbField[] = ["french", "base", "preterite", "participle"];

function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function VerbeIrregulierQuestion({
  question,
  onAnswer,
  showFeedback,
}: QuestionComponentProps) {
  const verbData = question.verbData;

  const inputFields = verbData
    ? FIELD_ORDER.filter((f) => f !== verbData.givenField)
    : [];

  const [values, setValues] = useState<Record<VerbField, string>>(
    () =>
      Object.fromEntries(inputFields.map((f) => [f, ""])) as Record<
        VerbField,
        string
      >
  );

  if (!verbData) {
    return (
      <p className="text-sm text-warm-500">
        Données du verbe manquantes pour cette question.
      </p>
    );
  }

  const allFilled = inputFields.every((f) => values[f]?.trim().length > 0);

  const getCorrect = (field: VerbField) => verbData[field];

  const isFieldCorrect = (field: VerbField): boolean => {
    const user = values[field] ?? "";
    const expected = getCorrect(field);
    // Support slash-separated alternatives (e.g. "was/were")
    const alternatives = expected.split("/").map((s) => normalize(s.trim()));
    return alternatives.includes(normalize(user));
  };

  const handleChange = (field: VerbField, value: string) => {
    if (showFeedback) return;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidate = () => {
    if (showFeedback || !allFilled) return;
    const allCorrect = inputFields.every((f) => isFieldCorrect(f));
    const userAnswer = inputFields.map((f) => `${f}:${values[f] ?? ""}`);
    onAnswer(allCorrect, userAnswer);
  };

  return (
    <div className="space-y-4">
      {/* Table layout */}
      <div className="overflow-x-auto rounded-xl border border-warm-200 shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-accent-100">
              {FIELD_ORDER.map((field) => (
                <th
                  key={field}
                  className="border border-warm-200 px-2 py-2 text-center text-xs font-bold uppercase tracking-wide text-accent-700 whitespace-nowrap"
                >
                  {FIELD_LABELS[field]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-warm-50">
              {FIELD_ORDER.map((field) => {
                const isGiven = field === verbData.givenField;

                if (isGiven) {
                  return (
                    <td
                      key={field}
                      className="border border-warm-200 px-3 py-3 text-center"
                    >
                      <span className="inline-block rounded-lg bg-accent-100 px-3 py-1.5 text-sm font-bold text-accent-800 ring-2 ring-accent-300">
                        {verbData[field]}
                      </span>
                    </td>
                  );
                }

                const userVal = values[field] ?? "";
                const correct = isFieldCorrect(field);
                const expected = getCorrect(field);

                return (
                  <td
                    key={field}
                    className="border border-warm-200 px-2 py-2 text-center"
                  >
                    {showFeedback ? (
                      <div className="flex flex-col items-center gap-0.5">
                        <div
                          className={cn(
                            "flex items-center gap-1 rounded-lg border-2 px-2 py-1 text-sm font-semibold",
                            correct
                              ? "border-success-400 bg-success-50 text-success-700"
                              : "border-red-400 bg-red-50 text-red-700"
                          )}
                        >
                          {correct ? (
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success-500" />
                          ) : (
                            <XCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />
                          )}
                          <span>{userVal || "—"}</span>
                        </div>
                        {!correct && (
                          <span className="text-xs text-warm-500">
                            → {expected}
                          </span>
                        )}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={userVal}
                        onChange={(e) => handleChange(field, e.target.value)}
                        placeholder="?"
                        autoComplete="off"
                        autoCapitalize="none"
                        className="min-h-[44px] w-full min-w-[70px] rounded-lg border-2 border-accent-200 bg-white px-2 py-1 text-center text-sm font-medium placeholder-warm-300 focus:border-accent-500 focus:outline-none"
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-warm-500 text-center">
        La case en surbrillance est donnée — remplis les autres.
      </p>

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
          {allFilled ? "Valider" : "Remplis toutes les cases"}
        </button>
      )}
    </div>
  );
}
