"use client";

import Link from "next/link";
import { useRecentResources } from "@/hooks/useRecentResources";
import { Clock, Trash2 } from "lucide-react";
import { RESOURCE_TYPE_NAMES } from "@/types";

export default function HistoriquePage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/"
          className="mb-2 inline-flex items-center gap-1 text-sm text-warm-500 hover:text-accent-600"
        >
          ← Accueil
        </Link>
        <h1 className="text-2xl font-bold text-warm-800">Historique</h1>
        <p className="text-warm-600">
          Tes dernières ressources consultées
        </p>
      </div>
      <RecentList />
    </div>
  );
}

function RecentList() {
  const { recentItems, clearRecent } = useRecentResources();

  if (recentItems.length === 0) {
    return (
      <div className="rounded-2xl border border-warm-200 bg-white/60 p-8 text-center">
        <Clock className="mx-auto mb-3 h-12 w-12 text-warm-300" />
        <p className="text-lg text-warm-500">Rien ici pour le moment</p>
        <p className="mt-1 text-sm text-warm-400">
          Consulte des ressources et elles apparaîtront ici !
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {recentItems.map((item) => (
        <Link
          key={item.slug + item.viewedAt}
          href={`/${item.level}/${item.subject}/${item.slug}`}
          className="flex items-center gap-4 rounded-2xl border border-warm-200 bg-white/60 p-4 transition-all hover:border-accent-300 hover:bg-white hover:shadow-md"
        >
          <div className="flex-1">
            <span className="text-xs font-medium text-accent-600">
              {RESOURCE_TYPE_NAMES[
                item.type as keyof typeof RESOURCE_TYPE_NAMES
              ] || item.type}
            </span>
            <h3 className="font-semibold text-warm-800">{item.title}</h3>
            <p className="text-xs text-warm-500">
              Consulté le{" "}
              {new Date(item.viewedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </Link>
      ))}

      <button
        onClick={clearRecent}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-warm-300 px-4 py-3 text-sm font-medium text-warm-600 transition-colors hover:bg-warm-100"
      >
        <Trash2 className="h-4 w-4" />
        Effacer l&apos;historique
      </button>
    </div>
  );
}
