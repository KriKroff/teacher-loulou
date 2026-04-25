export type FicheColor =
  | "purple"
  | "blue"
  | "green"
  | "orange"
  | "cyan"
  | "brown"
  | "sand"
  | "rose"
  | "amber";

interface ColorClasses {
  border: string;
  bg: string;
  text: string;
  borderLeft: string;
}

export const COLOR_CLASSES: Record<FicheColor, ColorClasses> = {
  purple: {
    border: "border-purple-300",
    bg: "bg-purple-50",
    text: "text-purple-800",
    borderLeft: "border-l-purple-500",
  },
  blue: {
    border: "border-blue-300",
    bg: "bg-blue-50",
    text: "text-blue-800",
    borderLeft: "border-l-blue-500",
  },
  green: {
    border: "border-emerald-300",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    borderLeft: "border-l-emerald-500",
  },
  orange: {
    border: "border-orange-300",
    bg: "bg-orange-50",
    text: "text-orange-800",
    borderLeft: "border-l-orange-500",
  },
  cyan: {
    border: "border-cyan-300",
    bg: "bg-cyan-50",
    text: "text-cyan-800",
    borderLeft: "border-l-cyan-500",
  },
  brown: {
    border: "border-amber-400",
    bg: "bg-amber-50",
    text: "text-amber-900",
    borderLeft: "border-l-amber-700",
  },
  sand: {
    border: "border-yellow-300",
    bg: "bg-yellow-50",
    text: "text-yellow-900",
    borderLeft: "border-l-yellow-600",
  },
  rose: {
    border: "border-rose-300",
    bg: "bg-rose-50",
    text: "text-rose-800",
    borderLeft: "border-l-rose-500",
  },
  amber: {
    border: "border-amber-300",
    bg: "bg-amber-50",
    text: "text-amber-900",
    borderLeft: "border-l-amber-500",
  },
};
