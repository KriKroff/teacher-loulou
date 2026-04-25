"use client";

interface ResetProgressionDialogProps {
  levelName?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ResetProgressionDialog({
  levelName,
  onConfirm,
  onCancel,
}: ResetProgressionDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
        aria-hidden="true"
      />
      {/* Dialog */}
      <div className="relative w-full max-w-sm rounded-2xl border border-warm-200 bg-white p-6 shadow-xl space-y-4">
        <h2 className="text-lg font-bold text-warm-800">Réinitialiser la progression</h2>
        <p className="text-sm text-warm-600">
          Tu vas effacer tes scores et ton historique
          {levelName ? ` pour le niveau "${levelName}"` : " pour ce quiz"}.
          Sûr·e ?
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="rounded-xl border border-warm-300 px-4 py-2 text-sm font-medium text-warm-700 transition-colors hover:bg-warm-100"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-600 active:scale-95"
          >
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
}
