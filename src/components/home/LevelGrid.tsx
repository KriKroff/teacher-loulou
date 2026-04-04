"use client";

import Link from "next/link";
import type { SchoolLevel } from "@/types";
import { LEVEL_NAMES } from "@/types";

const levels: { level: SchoolLevel; color: string; emoji: string }[] = [
  { level: "4e", color: "from-violet-400 to-purple-500", emoji: "🚀" },
];

export function LevelGrid() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-warm-800">
        Choisis ton niveau
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {levels.map(({ level, color, emoji }) => (
          <Link
            key={level}
            href={`/${level}`}
            className="group relative overflow-hidden rounded-2xl p-4 text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} transition-all group-hover:brightness-110`}
            />
            <div className="relative flex flex-col items-center gap-2 py-2">
              <span className="text-3xl">{emoji}</span>
              <span className="text-lg font-bold">{LEVEL_NAMES[level]}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
