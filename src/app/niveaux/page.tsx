import { LevelGrid } from "@/components/home/LevelGrid";
import Link from "next/link";

export default function NiveauxPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/"
          className="mb-2 inline-flex items-center gap-1 text-sm text-warm-500 hover:text-accent-600"
        >
          ← Accueil
        </Link>
        <h1 className="text-2xl font-bold text-warm-800">Tous les niveaux</h1>
        <p className="text-warm-600">
          Choisis ton niveau pour accéder aux ressources
        </p>
      </div>
      <LevelGrid />
    </div>
  );
}
