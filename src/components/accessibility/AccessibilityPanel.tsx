"use client";

import { Settings, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { AccessibilityControls } from "./AccessibilityControls";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const modal = isOpen ? (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full sm:max-w-md max-h-[85dvh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-warm-50 shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-warm-50 px-6 pt-6 pb-4">
          <h2 className="text-lg font-bold text-warm-900">
            Réglages de lecture
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1 hover:bg-warm-200"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 pb-6">
          <AccessibilityControls />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-warm-100 px-3 py-2 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-200"
        aria-label="Ouvrir les réglages d'accessibilité"
      >
        <Settings className="h-4 w-4" />
        <span className="hidden sm:inline">Réglages</span>
      </button>

      {typeof document !== "undefined" &&
        createPortal(modal, document.body)}
    </>
  );
}
