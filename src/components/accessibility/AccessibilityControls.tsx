"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import {
  Type,
  MoveHorizontal,
  AlignJustify,
  Ruler,
  Eye,
  RotateCcw,
  Volume2,
  Smartphone,
  Sparkles,
} from "lucide-react";

export function AccessibilityControls() {
  const { settings, updateSettings, resetSettings } = useAccessibility();

  return (
    <div className="space-y-6">
      {/* Font toggle */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-warm-800">
          <Type className="h-4 w-4" />
          Police d&apos;écriture
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
      <ControlSlider
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
      <ControlSlider
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
      <ControlSlider
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
      <ControlSlider
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
        <ControlToggle
          icon={<Ruler className="h-4 w-4" />}
          label="Règle de lecture"
          checked={settings.readingRuler}
          onChange={(v) => updateSettings({ readingRuler: v })}
        />
        <ControlToggle
          icon={<Eye className="h-4 w-4" />}
          label="Contraste élevé"
          checked={settings.highContrast}
          onChange={(v) => updateSettings({ highContrast: v })}
        />
        <ControlToggle
          icon={<Type className="h-4 w-4" />}
          label="Syllabes colorées"
          checked={settings.syllableColors}
          onChange={(v) => updateSettings({ syllableColors: v })}
        />
        <ControlToggle
          icon={<Volume2 className="h-4 w-4" />}
          label="Sons du quiz"
          description="Bip sonore pour chaque réponse (désactivé par défaut)"
          checked={settings.sounds}
          onChange={(v) => updateSettings({ sounds: v })}
        />
        <ControlToggle
          icon={<Smartphone className="h-4 w-4" />}
          label="Vibration"
          description="Retour haptique sur mobile"
          checked={settings.vibration}
          onChange={(v) => updateSettings({ vibration: v })}
        />
        <ControlToggle
          icon={<Sparkles className="h-4 w-4" />}
          label="Confettis"
          description="Animation de confettis lors d'un quiz réussi"
          checked={settings.confetti}
          onChange={(v) => updateSettings({ confetti: v })}
        />
      </div>

      {/* Reset */}
      <button
        onClick={resetSettings}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-warm-300 px-4 py-3 text-sm font-medium text-warm-600 transition-colors hover:bg-warm-100"
      >
        <RotateCcw className="h-4 w-4" />
        Tout réinitialiser
      </button>
    </div>
  );
}

export function ControlSlider({
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
        <span className="text-xs font-normal text-warm-500">{displayValue}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-accent-500"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuetext={displayValue}
      />
    </div>
  );
}

export function ControlToggle({
  icon,
  label,
  checked,
  onChange,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-warm-100 px-4 py-3">
      <div className="flex-1">
        <span className="flex items-center gap-2 text-sm font-medium text-warm-800">
          {icon}
          {label}
        </span>
        {description && (
          <p className="mt-0.5 text-xs text-warm-500">{description}</p>
        )}
      </div>
      <div className="relative mt-0.5 shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
          aria-label={label}
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
