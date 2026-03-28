"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useEffect, useState } from "react";

export function ReadingRuler() {
  const { settings } = useAccessibility();
  const [mouseY, setMouseY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!settings.readingRuler) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [settings.readingRuler]);

  if (!settings.readingRuler || !isVisible) return null;

  const rulerHeight = 40;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Top overlay */}
      <div
        className="absolute inset-x-0 top-0 bg-black/15 transition-all duration-75"
        style={{ height: Math.max(0, mouseY - rulerHeight / 2) }}
      />
      {/* Bottom overlay */}
      <div
        className="absolute inset-x-0 bottom-0 bg-black/15 transition-all duration-75"
        style={{
          top: Math.min(window.innerHeight, mouseY + rulerHeight / 2),
        }}
      />
      {/* Ruler highlight line */}
      <div
        className="absolute inset-x-0 border-y border-accent-400/30 bg-accent-100/20 transition-all duration-75"
        style={{
          top: mouseY - rulerHeight / 2,
          height: rulerHeight,
        }}
      />
    </div>
  );
}
