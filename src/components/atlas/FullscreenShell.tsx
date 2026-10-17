"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * Full-screen layer for map activities: hides the site chrome so the map gets
 * every pixel, and follows the visual viewport so the on-screen keyboard never
 * covers the answer field.
 */
export function FullscreenShell({
  onClose,
  closeLabel = "Quitter",
  title,
  right,
  children,
}: {
  onClose: () => void;
  closeLabel?: string;
  title: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const vv = window.visualViewport;
    const update = () => setHeight(vv ? vv.height : window.innerHeight);
    update();
    vv?.addEventListener("resize", update);
    window.addEventListener("resize", update);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      vv?.removeEventListener("resize", update);
      window.removeEventListener("resize", update);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex flex-col bg-warm-50"
      style={{ height: height ? `${height}px` : "100dvh" }}
    >
      <div className="flex h-14 shrink-0 items-center gap-2 border-b border-warm-200 px-2">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          title={closeLabel}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-warm-600 hover:bg-warm-100"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="min-w-0 flex-1">{title}</div>
        {right && <div className="flex shrink-0 items-center gap-1">{right}</div>}
      </div>
      <div className="flex min-h-0 flex-1 flex-col landscape:flex-row">{children}</div>
    </div>
  );
}

/** Answer area: under the map in portrait, beside it in landscape. */
export function SidePanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="shrink-0 border-t border-warm-200 bg-warm-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] landscape:w-80 landscape:overflow-y-auto landscape:border-l landscape:border-t-0 lg:landscape:w-96">
      {children}
    </div>
  );
}
