"use client";

import Link from "next/link";
import { AccessibilityPanel } from "@/components/accessibility/AccessibilityPanel";
import { BookOpen, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-warm-200 bg-warm-50/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-warm-800"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-white">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-lg">Teacher Loulou</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/reglages"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-warm-500 transition-colors hover:bg-warm-100 hover:text-warm-700"
            aria-label="Réglages d'accessibilité"
            title="Réglages"
          >
            <Settings className="h-5 w-5" />
          </Link>
          <AccessibilityPanel />
        </div>
      </div>
    </header>
  );
}
