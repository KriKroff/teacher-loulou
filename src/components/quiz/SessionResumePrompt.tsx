"use client";

interface SessionResumePromptProps {
  onResume: () => void;
  onRestart: () => void;
}

export function SessionResumePrompt({ onResume, onRestart }: SessionResumePromptProps) {
  return (
    <div className="rounded-2xl border-2 border-accent-300 bg-accent-50 p-6 text-center space-y-4">
      <div className="text-3xl">⏸️</div>
      <h2 className="text-lg font-bold text-warm-800">Session en cours</h2>
      <p className="text-sm text-warm-600">
        Tu avais commencé ce quiz. Reprendre où tu t&apos;étais arrêté·e ?
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={onResume}
          className="rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
        >
          Reprendre
        </button>
        <button
          onClick={onRestart}
          className="rounded-xl border border-warm-300 bg-white px-6 py-3 font-semibold text-warm-700 transition-all hover:bg-warm-100 active:scale-95"
        >
          Recommencer
        </button>
      </div>
    </div>
  );
}
