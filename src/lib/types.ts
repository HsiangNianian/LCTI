export type DimensionKey = "collaboration" | "trust" | "liability" | "propagation";

export interface Dimension {
  key: DimensionKey;
  label: string;
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
  leftLabel: string;
  rightLabel: string;
  leftDesc: string;
  rightDesc: string;
}

export type QuizAnswers = Record<DimensionKey, 0 | 1>;
