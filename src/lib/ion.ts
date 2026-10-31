/**
 * Helpers to write ion formulas (Ca²⁺, Cl⁻…).
 * No path aliases here: also imported by scripts/validate-resources.ts.
 */

/** Charges offered by the "formule-ion" question, as stored in quiz data (ASCII). */
export const ION_CHARGES = ["3-", "2-", "-", "+", "2+", "3+"] as const;

const SUPERSCRIPTS: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻",
};

/** "2+" → "²⁺", "-" → "⁻" */
export function toSuperscript(text: string): string {
  return text
    .split("")
    .map((c) => SUPERSCRIPTS[c] ?? c)
    .join("");
}

/** Charge number → label as written in a formula: 2 → "2+", -1 → "-", 0 → "". */
export function chargeLabel(charge: number): string {
  if (charge === 0) return "";
  const sign = charge > 0 ? "+" : "-";
  const n = Math.abs(charge);
  return n === 1 ? sign : `${n}${sign}`;
}

/** ("Fe", 3) → "Fe³⁺" ; ("Cl", -1) → "Cl⁻" ; ("Na", 0) → "Na" */
export function ionFormula(symbol: string, charge: number): string {
  return symbol + toSuperscript(chargeLabel(charge));
}
