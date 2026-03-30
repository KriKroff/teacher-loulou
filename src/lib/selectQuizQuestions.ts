import type { QuizQuestion, QuizQuestionHistory } from "@/types";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Selects `count` questions from `allQuestions` using three-tier priority:
 *   Tier 1 (highest): previously failed questions
 *   Tier 2: never-seen questions
 *   Tier 3 (lowest): previously correct questions
 * Within each tier, questions are shuffled randomly.
 */
export function selectQuizQuestions(
  allQuestions: QuizQuestion[],
  history: QuizQuestionHistory[],
  count = 10
): QuizQuestion[] {
  const historyMap = new Map(history.map((h) => [h.questionId, h]));

  const failed: QuizQuestion[] = [];
  const unseen: QuizQuestion[] = [];
  const correct: QuizQuestion[] = [];

  for (const q of allQuestions) {
    const h = historyMap.get(q.id);
    if (!h) {
      unseen.push(q);
    } else if (h.lastResult === "incorrect") {
      failed.push(q);
    } else {
      correct.push(q);
    }
  }

  const prioritized = [
    ...shuffleArray(failed),
    ...shuffleArray(unseen),
    ...shuffleArray(correct),
  ];

  return prioritized.slice(0, count);
}
