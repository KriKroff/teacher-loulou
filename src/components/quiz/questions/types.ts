import type { QuizQuestion } from "@/types";

export interface QuestionComponentProps {
  question: QuizQuestion;
  /** Called once when the user submits an answer (or auto-submit for some types). */
  onAnswer: (correct: boolean, userAnswer: string | string[]) => void;
  /** True after submission — components should reveal correct/incorrect feedback. */
  showFeedback: boolean;
  /** True when the user requested a hint. */
  showHint: boolean;
}
