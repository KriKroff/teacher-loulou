"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import { Settings, RotateCcw, Type, MoveHorizontal, AlignJustify, Ruler, Eye, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

export function AccessibilityPanel() {
  const { settings, updateSettings, resetSettings } = useAccessibility();
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

        <div className="space-y-6 px-6 pb-6">
          {/* Font toggle */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-warm-800">
              <Type className="h-4 w-4" />
              Police
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => updateSettings({ font: "default" })}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  settings.font === "default"
                    ? "bg-accent-500 text-white shadow-md"
                    : "bg-warm-100 text-warm-700 hover:bg-warm-200"
                }`}
              >
                Lexend
              </button>
              <button
                onClick={() => updateSettings({ font: "opendyslexic" })}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  settings.font === "opendyslexic"
                    ? "bg-accent-500 text-white shadow-md"
                    : "bg-warm-100 text-warm-700 hover:bg-warm-200"
                }`}
                style={{ fontFamily: "OpenDyslexic, sans-serif" }}
              >
                OpenDyslexic
              </button>
            </div>
          </div>

          {/* Font size */}
          <SliderSetting
            icon={<Type className="h-4 w-4" />}
            label="Taille du texte"
            value={settings.fontSize}
            min={0.9}
            max={1.5}
            step={0.05}
            displayValue={`${Math.round(settings.fontSize * 100)}%`}
            onChange={(v) => updateSettings({ fontSize: v })}
          />

          {/* Letter spacing */}
          <SliderSetting
            icon={<MoveHorizontal className="h-4 w-4" />}
            label="Espacement des lettres"
            value={settings.letterSpacing}
            min={0}
            max={0.2}
            step={0.01}
            displayValue={`${settings.letterSpacing.toFixed(2)}em`}
            onChange={(v) => updateSettings({ letterSpacing: v })}
          />

          {/* Word spacing */}
          <SliderSetting
            icon={<MoveHorizontal className="h-4 w-4" />}
            label="Espacement des mots"
            value={settings.wordSpacing}
            min={0}
            max={0.4}
            step={0.02}
            displayValue={`${settings.wordSpacing.toFixed(2)}em`}
            onChange={(v) => updateSettings({ wordSpacing: v })}
          />

          {/* Line height */}
          <SliderSetting
            icon={<AlignJustify className="h-4 w-4" />}
            label="Interligne"
            value={settings.lineHeight}
            min={1.4}
            max={2.8}
            step={0.1}
            displayValue={`${settings.lineHeight.toFixed(1)}`}
            onChange={(v) => updateSettings({ lineHeight: v })}
          />

          {/* Toggles */}
          <div className="space-y-3">
            <ToggleSetting
              icon={<Ruler className="h-4 w-4" />}
              label="Règle de lecture"
              checked={settings.readingRuler}
              onChange={(v) => updateSettings({ readingRuler: v })}
            />
            <ToggleSetting
              icon={<Eye className="h-4 w-4" />}
              label="Contraste élevé"
              checked={settings.highContrast}
              onChange={(v) => updateSettings({ highContrast: v })}
            />
            <ToggleSetting
              icon={<Type className="h-4 w-4" />}
              label="Syllabes colorées"
              checked={settings.syllableColors}
              onChange={(v) => updateSettings({ syllableColors: v })}
            />
          </div>

          {/* Reset */}
          <button
            onClick={resetSettings}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-warm-300 px-4 py-3 text-sm font-medium text-warm-600 transition-colors hover:bg-warm-100"
          >
            <RotateCcw className="h-4 w-4" />
            Réinitialiser
          </button>
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

function SliderSetting({
  icon,
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center justify-between text-sm font-semibold text-warm-800">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
        <span className="text-xs font-normal text-warm-500">
          {displayValue}
        </span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-accent-500"
      />
    </div>
  );
}

function ToggleSetting({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-xl bg-warm-100 px-4 py-3">
      <span className="flex items-center gap-2 text-sm font-medium text-warm-800">
        {icon}
        {label}
      </span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`h-6 w-11 rounded-full transition-colors ${
            checked ? "bg-accent-500" : "bg-warm-300"
          }`}
        >
          <div
            className={`h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
              checked ? "translate-x-[22px]" : "translate-x-[2px]"
            } translate-y-[2px]`}
          />
        </div>
      </div>
    </label>
  );
}
