"use client";

import Link from "next/link";
import { AccessibilityControls } from "./AccessibilityControls";

export function AccessibilitySettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/"
          className="mb-2 inline-flex items-center gap-1 text-sm text-warm-500 hover:text-accent-600"
        >
          ← Accueil
        </Link>
        <h1 className="text-2xl font-bold text-warm-800">
          Réglages d&apos;accessibilité
        </h1>
        <p className="text-warm-600">
          Adapte l&apos;affichage à tes besoins
        </p>
      </div>

      <div className="space-y-6 rounded-2xl border border-warm-200 bg-white/80 p-5 sm:p-6">
        <AccessibilityControls />

        {/* Preview */}
        <div className="rounded-xl border border-warm-200 bg-warm-50 p-4">
          <h4 className="mb-2 text-sm font-semibold text-warm-700">
            Aperçu
          </h4>
          <p className="text-warm-700">
            Le petit chat dort tranquillement sur le canapé bleu. Il rêve
            peut-être de souris et de poissons.
          </p>
        </div>
      </div>
    </div>
  );
}
