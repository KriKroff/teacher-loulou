"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { COUNTRIES, WORLD, ZONES, countriesOf } from "@/data/atlas/countries";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { EMPTY_PROGRESS, PROGRESS_KEY, overallMastery, type AtlasProgress } from "@/lib/atlas/progress";
import { cn } from "@/lib/utils";

const ALL_IDS = COUNTRIES.map((c) => c.id);

export function AtlasHome() {
  const [progress] = useLocalStorage<AtlasProgress>(PROGRESS_KEY, EMPTY_PROGRESS);
  const total = Math.round(overallMastery(progress, ALL_IDS) * 100);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <section className="rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 p-6 text-white shadow-lg">
        <h1 className="text-2xl font-bold sm:text-3xl">🌍 Atlas des pays</h1>
        <p className="mt-1 text-white/90">
          {COUNTRIES.length} pays à placer sur la carte du monde. Apprends continent par continent, puis teste-toi sur le monde entier !
        </p>
        <div className="mt-4">
          <div className="mb-1 flex justify-between text-sm font-medium">
            <span>Ma progression</span>
            <span className="tabular-nums">{total} %</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-white/30">
            <div className="h-full rounded-full bg-white transition-all" style={{ width: `${total}%` }} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-warm-200 bg-white p-4">
        <h2 className="mb-2 font-bold text-warm-800">Comment ça marche ?</h2>
        <ol className="space-y-1.5 text-warm-700">
          <li>
            <strong>1. 📖 Apprendre</strong> : explore la carte d&apos;un continent.
          </li>
          <li>
            <strong>2. 🎯 S&apos;entraîner</strong> : 🟢 reconnaître, 🟡 situer, 🔴 nommer.
          </li>
          <li>
            <strong>3. 🌍 Grand test</strong> : le monde entier, comme au contrôle.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-warm-800">Choisis un continent</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {ZONES.map((z) => {
            const ids = countriesOf(z.id).map((c) => c.id);
            const pct = Math.round(overallMastery(progress, ids) * 100);
            return (
              <Link
                key={z.id}
                href={`/atlas/${z.id}`}
                className="group relative overflow-hidden rounded-2xl p-4 text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br", z.gradient)} />
                <div className="relative flex h-full flex-col gap-1">
                  <span className="text-3xl">{z.emoji}</span>
                  <span className="text-base font-bold leading-tight">{z.name}</span>
                  <span className="text-sm text-white/90">{ids.length} pays</span>
                  <div className="mt-auto h-2 overflow-hidden rounded-full bg-white/30">
                    <div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Link
        href="/atlas/monde"
        className="relative flex items-center gap-4 overflow-hidden rounded-2xl p-5 text-white shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br", WORLD.gradient)} />
        <span className="relative text-4xl">{WORLD.emoji}</span>
        <span className="relative min-w-0 flex-1">
          <span className="block text-xl font-bold">Le grand test : {WORLD.name}</span>
          <span className="block text-white/90">20, 50 ou les {COUNTRIES.length} pays. Tu peux faire une pause et reprendre.</span>
        </span>
        <ChevronRight className="relative h-6 w-6 shrink-0" />
      </Link>
    </div>
  );
}
