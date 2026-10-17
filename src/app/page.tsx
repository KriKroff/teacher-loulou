import Link from "next/link";
import { LevelGrid } from "@/components/home/LevelGrid";
import { LatestResources } from "@/components/home/LatestResources";
import { RecentlyViewed } from "@/components/home/RecentResources";

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 p-6 text-white shadow-lg sm:p-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          Salut ! 👋
        </h1>
        <p className="text-accent-100 text-base sm:text-lg">
          Choisis un niveau ou reprends là où tu t&apos;étais arrêté(e).
        </p>
      </section>

      {/* Recently viewed (client-side, from localStorage) */}
      <RecentlyViewed />

      {/* Atlas */}
      <Link
        href="/atlas"
        className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 p-4 text-white shadow-md transition-all hover:scale-[1.01] hover:shadow-lg active:scale-[0.99]"
      >
        <span className="text-4xl">🌍</span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-bold">Atlas des pays</span>
          <span className="block text-sm text-white/90">
            Apprends à placer les 197 pays sur la carte du monde.
          </span>
        </span>
        <span aria-hidden className="text-2xl">›</span>
      </Link>

      {/* Level grid */}
      <LevelGrid />

      {/* Latest added resources */}
      <LatestResources />
    </div>
  );
}
