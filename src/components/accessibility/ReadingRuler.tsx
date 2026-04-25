"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useEffect, useState } from "react";

export function ReadingRuler() {
  const { settings } = useAccessibility();
  const [pointerY, setPointerY] = useState<number | null>(null);

  useEffect(() => {
    if (!settings.readingRuler) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPointerY(e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) setPointerY(touch.clientY);
    };

    const handleMouseLeave = () => {
      setPointerY(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [settings.readingRuler]);

  if (!settings.readingRuler || pointerY === null) return null;

  const rulerHeight = 40;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className="absolute inset-x-0 top-0 bg-black/15 transition-all duration-75"
        style={{ height: Math.max(0, pointerY - rulerHeight / 2) }}
      />
      <div
        className="absolute inset-x-0 bottom-0 bg-black/15 transition-all duration-75"
        style={{
          top: Math.min(window.innerHeight, pointerY + rulerHeight / 2),
        }}
      />
      <div
        className="absolute inset-x-0 border-y border-accent-400/30 bg-accent-100/20 transition-all duration-75"
        style={{
          top: pointerY - rulerHeight / 2,
          height: rulerHeight,
        }}
      />
    </div>
  );
}
