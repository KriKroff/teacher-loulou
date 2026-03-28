"use client";

import { useAccessibility } from "@/contexts/AccessibilityContext";
import Link from "next/link";
import {
  Type,
  MoveHorizontal,
  AlignJustify,
  Ruler,
  Eye,
  RotateCcw,
} from "lucide-react";

export function AccessibilitySettingsPage() {
  const { settings, updateSettings, resetSettings } = useAccessibility();

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
        {/* Font */}
        <div>
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-warm-800">
            <Type className="h-4 w-4" />
            Police d&apos;écriture
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => updateSettings({ font: "default" })}
              className={`flex-1 rounded-xl px-4 py-4 text-center font-medium transition-all ${
                settings.font === "default"
                  ? "bg-accent-500 text-white shadow-md"
                  : "border border-warm-200 bg-warm-50 text-warm-700 hover:bg-warm-100"
              }`}
            >
              <span className="block text-lg">Aa</span>
              <span className="text-xs opacity-80">Lexend</span>
            </button>
            <button
              onClick={() => updateSettings({ font: "opendyslexic" })}
              className={`flex-1 rounded-xl px-4 py-4 text-center font-medium transition-all ${
                settings.font === "opendyslexic"
                  ? "bg-accent-500 text-white shadow-md"
                  : "border border-warm-200 bg-warm-50 text-warm-700 hover:bg-warm-100"
              }`}
              style={{ fontFamily: "OpenDyslexic, sans-serif" }}
            >
              <span className="block text-lg">Aa</span>
              <span className="text-xs opacity-80">OpenDyslexic</span>
            </button>
          </div>
        </div>

        {/* Font size */}
        <SettingSlider
          icon={<Type className="h-4 w-4" />}
          label="Taille du texte"
          value={settings.fontSize}
          min={0.9}
          max={1.5}
          step={0.05}
          display={`${Math.round(settings.fontSize * 100)}%`}
          onChange={(v) => updateSettings({ fontSize: v })}
        />

        {/* Letter spacing */}
        <SettingSlider
          icon={<MoveHorizontal className="h-4 w-4" />}
          label="Espacement des lettres"
          value={settings.letterSpacing}
          min={0}
          max={0.2}
          step={0.01}
          display={`${settings.letterSpacing.toFixed(2)} em`}
          onChange={(v) => updateSettings({ letterSpacing: v })}
        />

        {/* Word spacing */}
        <SettingSlider
          icon={<MoveHorizontal className="h-4 w-4" />}
          label="Espacement des mots"
          value={settings.wordSpacing}
          min={0}
          max={0.4}
          step={0.02}
          display={`${settings.wordSpacing.toFixed(2)} em`}
          onChange={(v) => updateSettings({ wordSpacing: v })}
        />

        {/* Line height */}
        <SettingSlider
          icon={<AlignJustify className="h-4 w-4" />}
          label="Interligne"
          value={settings.lineHeight}
          min={1.4}
          max={2.8}
          step={0.1}
          display={settings.lineHeight.toFixed(1)}
          onChange={(v) => updateSettings({ lineHeight: v })}
        />

        {/* Toggles */}
        <div className="space-y-3 pt-2">
          <SettingToggle
            icon={<Ruler className="h-4 w-4" />}
            label="Règle de lecture"
            description="Affiche un guide qui suit ta souris pour t'aider à lire"
            checked={settings.readingRuler}
            onChange={(v) => updateSettings({ readingRuler: v })}
          />
          <SettingToggle
            icon={<Eye className="h-4 w-4" />}
            label="Contraste élevé"
            description="Augmente le contraste pour faciliter la lecture"
            checked={settings.highContrast}
            onChange={(v) => updateSettings({ highContrast: v })}
          />
          <SettingToggle
            icon={<Type className="h-4 w-4" />}
            label="Syllabes colorées"
            description="Colore les syllabes en alternance pour faciliter le décodage"
            checked={settings.syllableColors}
            onChange={(v) => updateSettings({ syllableColors: v })}
          />
        </div>

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

        {/* Reset */}
        <button
          onClick={resetSettings}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-warm-300 px-4 py-3 font-medium text-warm-600 transition-colors hover:bg-warm-100"
        >
          <RotateCcw className="h-4 w-4" />
          Tout réinitialiser
        </button>
      </div>
    </div>
  );
}

function SettingSlider({
  icon,
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-semibold text-warm-800">
          {icon}
          {label}
        </label>
        <span className="text-xs text-warm-500">{display}</span>
      </div>
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

function SettingToggle({
  icon,
  label,
  description,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-warm-50 border border-warm-200 p-4">
      <div className="flex-1">
        <span className="flex items-center gap-2 text-sm font-semibold text-warm-800">
          {icon}
          {label}
        </span>
        <p className="mt-0.5 text-xs text-warm-500">{description}</p>
      </div>
      <div className="relative shrink-0 mt-0.5">
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
