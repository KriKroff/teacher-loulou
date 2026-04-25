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

      {/* Level grid */}
      <LevelGrid />

      {/* Latest added resources */}
      <LatestResources />
    </div>
  );
}
