"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionComponentProps } from "./types";

/** Normalize accent and case for comparison */
function normalize(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function CompletionTableauQuestion({
  question,
  onAnswer,
  showFeedback,
}: QuestionComponentProps) {
  const table = question.table;

  // Collect all blanks in order
  const blanks: { rowIdx: number; colIdx: number; correctAnswer: string }[] = [];
  if (table) {
    table.rows.forEach((row, rowIdx) => {
      row.forEach((cell, colIdx) => {
        if ("blank" in cell && cell.blank) {
          blanks.push({ rowIdx, colIdx, correctAnswer: cell.correctAnswer });
        }
      });
    });
  }

  const [inputs, setInputs] = useState<Record<string, string>>(() =>
    Object.fromEntries(blanks.map((b) => [`${b.rowIdx}-${b.colIdx}`, ""]))
  );

  const allFilled = blanks.every(
    (b) => (inputs[`${b.rowIdx}-${b.colIdx}`] ?? "").trim().length > 0
  );

  const handleValidate = () => {
    if (showFeedback) return;
    const allCorrect = blanks.every((b) => {
      const userVal = inputs[`${b.rowIdx}-${b.colIdx}`] ?? "";
      return normalize(userVal) === normalize(b.correctAnswer);
    });
    const userAnswer = blanks.map(
      (b) => `${b.rowIdx}-${b.colIdx}:${inputs[`${b.rowIdx}-${b.colIdx}`]}`
    );
    onAnswer(allCorrect, userAnswer);
  };

  if (!table) {
    return (
      <p className="text-sm text-warm-500">Aucun tableau défini pour cette question.</p>
    );
  }

  return (
    <div className="space-y-4">
      {/* Responsive table */}
      <div className="overflow-x-auto rounded-xl border border-warm-200 shadow-sm">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-accent-100">
              {table.headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-warm-200 px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-accent-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={rowIdx % 2 === 0 ? "bg-warm-50" : "bg-white"}
              >
                {row.map((cell, colIdx) => {
                  if ("blank" in cell && cell.blank) {
                    const key = `${rowIdx}-${colIdx}`;
                    const userVal = inputs[key] ?? "";
                    const isCorrect =
                      normalize(userVal) === normalize(cell.correctAnswer);

                    return (
                      <td key={colIdx} className="border border-warm-200 px-2 py-1.5">
                        {showFeedback ? (
                          <div
                            className={cn(
                              "flex items-center gap-1.5 rounded-lg border-2 px-2 py-1 text-sm font-semibold",
                              isCorrect
                                ? "border-success-400 bg-success-50 text-success-700"
                                : "border-red-400 bg-red-50 text-red-700"
                            )}
                          >
                            {isCorrect ? (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-success-500" />
                            ) : (
                              <XCircle className="h-4 w-4 shrink-0 text-red-500" />
                            )}
                            <span>{userVal}</span>
                            {!isCorrect && (
                              <span className="ml-1 text-xs opacity-70">
                                → {cell.correctAnswer}
                              </span>
                            )}
                          </div>
                        ) : (
                          <input
                            type="text"
                            value={userVal}
                            onChange={(e) =>
                              setInputs((prev) => ({
                                ...prev,
                                [key]: e.target.value,
                              }))
                            }
                            placeholder="…"
                            className="min-h-[44px] w-full min-w-[80px] rounded-lg border-2 border-accent-200 bg-white px-2 py-1 text-sm font-medium placeholder-warm-300 focus:border-accent-500 focus:outline-none"
                          />
                        )}
                      </td>
                    );
                  }

                  const fixedCell = cell as { value: string };
                  return (
                    <td
                      key={colIdx}
                      className="border border-warm-200 px-3 py-2 text-sm"
                    >
                      {fixedCell.value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
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
          {allFilled ? "Valider le tableau" : "Remplis toutes les cases d'abord"}
        </button>
      )}
    </div>
  );
}
