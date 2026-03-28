"use client";

import { useRecentResources } from "@/hooks/useRecentResources";
import { RESOURCE_TYPE_NAMES } from "@/types";
import { Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export function RecentlyViewed() {
  const { recentItems } = useRecentResources();

  if (recentItems.length === 0) return null;

  return (
    <section>
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-accent-500" />
        <h2 className="text-lg font-bold text-warm-800">
          Reprendre où tu t&apos;es arrêté
        </h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {recentItems.slice(0, 5).map((item) => (
          <Link
            key={item.slug}
            href={`/${item.level}/${item.subject}/${item.slug}`}
            className="flex min-w-[200px] shrink-0 flex-col gap-1 rounded-xl border border-warm-200 bg-white/60 p-3 transition-all hover:border-accent-300 hover:shadow-md"
          >
            <span className="text-xs font-medium text-accent-600">
              {RESOURCE_TYPE_NAMES[item.type as keyof typeof RESOURCE_TYPE_NAMES] || item.type}
            </span>
            <span className="font-medium text-warm-800 line-clamp-2 text-sm">
              {item.title}
            </span>
            <span className="flex items-center gap-1 text-xs text-warm-500">
              Continuer <ChevronRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
