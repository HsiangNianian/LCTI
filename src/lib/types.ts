export type DimensionKey = "collaboration" | "trust" | "liability" | "propagation";

export interface Dimension {
  key: DimensionKey;
  label: string;
  labelEn: string;
  abbr: string;
  left: string;
  right: string;
  leftDesc: string;
  rightDesc: string;
}

export interface License {
  slug: string;
  name: string;
  fullName: string;
  binary: [number, number, number, number];
  hex: number;
  title: string;
  personality: string;
  description: string;
  catchphrase: string;
  color: string;
}

export interface Question {
  id: number;
  dimension: DimensionKey;
  text: string;
  leftAnswer: string;
  rightAnswer: string;
}

export type ScoreValue = 0 | 0.25 | 0.5 | 0.75 | 1;

export type QuizAnswers = Record<number, ScoreValue | undefined>;

export type DimensionScores = Record<DimensionKey, number>;
