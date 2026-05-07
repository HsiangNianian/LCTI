import { questions, dimensionOrder } from "./questions";
import type { DimensionScores, QuizAnswers, ScoreValue } from "./types";

export const RESULT_THRESHOLD = 0.5;

export const answerOptions = [
  { value: 0, label: "非常偏向左边", description: "强烈认同左侧立场" },
  { value: 0.25, label: "稍微偏向左边", description: "整体更靠近左侧" },
  { value: 0.5, label: "两边都能接受", description: "倾向接近中间值" },
  { value: 0.75, label: "稍微偏向右边", description: "整体更靠近右侧" },
  { value: 1, label: "非常偏向右边", description: "强烈认同右侧立场" },
] as const satisfies ReadonlyArray<{
  value: ScoreValue;
  label: string;
  description: string;
}>;

export function calculateDimensionScores(answers: QuizAnswers): DimensionScores {
  return dimensionOrder.reduce<DimensionScores>(
    (scores, dimension) => {
      const dimensionQuestions = questions.filter((question) => question.dimension === dimension);
      const total = dimensionQuestions.reduce((sum, question) => sum + (answers[question.id] ?? 0), 0);
      scores[dimension] = dimensionQuestions.length ? total / dimensionQuestions.length : 0;
      return scores;
    },
    {
      collaboration: 0,
      trust: 0,
      liability: 0,
      propagation: 0,
    },
  );
}

export function getResultBinaryString(scores: DimensionScores): string {
  // A dimension average of exactly 0.5 intentionally resolves to the right-side trait so every completed run maps to one of the 16 fixed result types.
  return dimensionOrder.map((dimension) => (scores[dimension] >= RESULT_THRESHOLD ? "1" : "0")).join("");
}

export function serializeDimensionScores(scores: DimensionScores): string {
  return dimensionOrder.map((dimension) => scores[dimension].toFixed(2)).join(",");
}

export function parseDimensionScores(value: string | null): DimensionScores | null {
  if (!value) return null;

  const parsed = value.split(",").map((item) => Number(item));
  const hasInvalidLength = parsed.length !== dimensionOrder.length;
  const hasInvalidValues = parsed.some((item) => Number.isNaN(item) || item < 0 || item > 1);

  if (hasInvalidLength || hasInvalidValues) {
    return null;
  }

  return {
    collaboration: parsed[0],
    trust: parsed[1],
    liability: parsed[2],
    propagation: parsed[3],
  };
}
