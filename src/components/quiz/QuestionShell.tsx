"use client";

import { ChevronRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/types";
import {
  QcmQuestion,
  VraiFauxQuestion,
  TexteATrousQuestion,
  TexteATrousSelectQuestion,
  AssociationQuestion,
  QcmMultipleQuestion,
  OrdreQuestion,
  NombreQuestion,
  SliderQuestion,
  IntrusQuestion,
  ConjugaisonQuestion,
  DragOnImageQuestion,
  ClickOnImageQuestion,
  AudioListenQuestion,
  TriCategoriesQuestion,
  CompletionTableauQuestion,
} from "./questions";
import type { QuestionComponentProps } from "./questions";

// Question text with ___ highlighted
function QuestionWithBlank({ text }: { text: string }) {
  const parts = text.split("___");
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="inline-block mx-1 min-w-[5rem] rounded bg-amber-100 px-2 py-0.5 font-bold text-amber-800 underline underline-offset-4">
              ___
            </span>
          )}
        </span>
      ))}
    </>
  );
}

// Badge label per question type
const TYPE_BADGES: Partial<Record<QuizQuestion["type"], { label: string; className: string }>> = {
  "vrai-faux": { label: "Vrai ou Faux", className: "bg-blue-100 text-blue-700" },
  "texte-a-trous": { label: "Complète la phrase", className: "bg-amber-100 text-amber-700" },
  "texte-a-trous-select": { label: "Place les mots", className: "bg-amber-100 text-amber-700" },
  conjugaison: { label: "Conjugaison écrite", className: "bg-cyan-100 text-cyan-700" },
  association: { label: "Association", className: "bg-purple-100 text-purple-700" },
  "qcm-multiple": { label: "Plusieurs réponses", className: "bg-teal-100 text-teal-700" },
  ordre: { label: "Remets dans l'ordre", className: "bg-orange-100 text-orange-700" },
  nombre: { label: "Donne un nombre", className: "bg-sky-100 text-sky-700" },
  slider: { label: "Curseur", className: "bg-indigo-100 text-indigo-700" },
  intrus: { label: "Trouve l'intrus", className: "bg-rose-100 text-rose-700" },
  // Phase 8
  "drag-on-image": { label: "Place les étiquettes", className: "bg-violet-100 text-violet-700" },
  "click-on-image": { label: "Clique sur le schéma", className: "bg-emerald-100 text-emerald-700" },
  "audio-listen": { label: "Écoute et réponds", className: "bg-blue-100 text-blue-700" },
  "tri-categories": { label: "Trie par catégorie", className: "bg-fuchsia-100 text-fuchsia-700" },
  "completion-tableau": { label: "Complète le tableau", className: "bg-lime-100 text-lime-700" },
};

function QuestionDispatcher(props: QuestionComponentProps) {
  const { question } = props;
  switch (question.type) {
    case "qcm":
      return <QcmQuestion {...props} />;
    case "vrai-faux":
      return <VraiFauxQuestion {...props} />;
    case "texte-a-trous":
      return <TexteATrousQuestion {...props} />;
    case "texte-a-trous-select":
      return <TexteATrousSelectQuestion {...props} />;
    case "association":
      return <AssociationQuestion {...props} />;
    case "qcm-multiple":
      return <QcmMultipleQuestion {...props} />;
    case "ordre":
      return <OrdreQuestion {...props} />;
    case "nombre":
      return <NombreQuestion {...props} />;
    case "slider":
      return <SliderQuestion {...props} />;
    case "intrus":
      return <IntrusQuestion {...props} />;
    case "conjugaison":
      return <ConjugaisonQuestion {...props} />;
    // Phase 8 — new types
    case "drag-on-image":
      return <DragOnImageQuestion {...props} />;
    case "click-on-image":
      return <ClickOnImageQuestion {...props} />;
    case "audio-listen":
      return <AudioListenQuestion {...props} />;
    case "tri-categories":
      return <TriCategoriesQuestion {...props} />;
    case "completion-tableau":
      return <CompletionTableauQuestion {...props} />;
    default:
      return null;
  }
}

interface QuestionShellProps {
  question: QuizQuestion;
  showFeedback: boolean;
  showHint: boolean;
  isCorrect: boolean;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (correct: boolean, userAnswer: string | string[]) => void;
  onToggleHint: () => void;
  onNext: () => void;
}

export function QuestionShell({
  question,
  showFeedback,
  showHint,
  isCorrect,
  currentIndex,
  totalQuestions,
  onAnswer,
  onToggleHint,
  onNext,
}: QuestionShellProps) {
  const badge = TYPE_BADGES[question.type];

  return (
    <div className="rounded-2xl border border-warm-200 bg-white/80 p-5 sm:p-6">
      {/* Question type badge */}
      {badge && (
        <div className="mb-3">
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", badge.className)}>
            {badge.label}
          </span>
        </div>
      )}

      <h2 className="mb-5 text-lg font-semibold text-warm-800">
        {question.type === "texte-a-trous"
          ? <QuestionWithBlank text={question.question} />
          : question.question}
      </h2>

      {/* Dispatch to the correct question component; key is set by parent (QuizSession) */}
      <QuestionDispatcher
        question={question}
        onAnswer={onAnswer}
        showFeedback={showFeedback}
        showHint={showHint}
      />

      {/* Hint */}
      {!showFeedback && question.hint && (
        <button
          onClick={onToggleHint}
          className="mt-4 flex items-center gap-1.5 text-sm text-warm-500 hover:text-accent-600"
        >
          <Lightbulb className="h-4 w-4" />
          {showHint ? "Masquer l'indice" : "Voir un indice"}
        </button>
      )}
      {showHint && !showFeedback && question.hint && (
        <div className="mt-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          💡 {question.hint}
        </div>
      )}

      {/* Feedback */}
      {showFeedback && (
        <div className="mt-4 space-y-3">
          <div className={cn(
            "rounded-xl px-4 py-3 text-sm",
            isCorrect ? "bg-success-100 text-success-600" : "bg-amber-50 text-amber-800"
          )}>
            {isCorrect ? "✅ Bonne réponse !" : "❌ Ce n'est pas ça..."}
            {question.explanation && (
              <p className="mt-1 opacity-80">{question.explanation}</p>
            )}
          </div>
          <button
            onClick={onNext}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-accent-600 active:scale-95"
          >
            {currentIndex < totalQuestions - 1 ? "Question suivante" : "Voir les résultats"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
