import type { DimensionKey } from "../types";

export const dimensionOrder: DimensionKey[] = [
  "collaboration",
  "trust",
  "liability",
  "propagation",
];

export interface QuestionStructure {
  id: number;
  dimension: DimensionKey;
}

export const questions: QuestionStructure[] = [
  { id: 1, dimension: "collaboration" },
  { id: 2, dimension: "collaboration" },
  { id: 3, dimension: "collaboration" },
  { id: 4, dimension: "collaboration" },
  { id: 5, dimension: "collaboration" },
  { id: 6, dimension: "collaboration" },
  { id: 7, dimension: "collaboration" },
  { id: 8, dimension: "collaboration" },
  { id: 9, dimension: "trust" },
  { id: 10, dimension: "trust" },
  { id: 11, dimension: "trust" },
  { id: 12, dimension: "trust" },
  { id: 13, dimension: "trust" },
  { id: 14, dimension: "trust" },
  { id: 15, dimension: "trust" },
  { id: 16, dimension: "trust" },
  { id: 17, dimension: "liability" },
  { id: 18, dimension: "liability" },
  { id: 19, dimension: "liability" },
  { id: 20, dimension: "liability" },
  { id: 21, dimension: "liability" },
  { id: 22, dimension: "liability" },
  { id: 23, dimension: "liability" },
  { id: 24, dimension: "liability" },
  { id: 25, dimension: "propagation" },
  { id: 26, dimension: "propagation" },
  { id: 27, dimension: "propagation" },
  { id: 28, dimension: "propagation" },
  { id: 29, dimension: "propagation" },
  { id: 30, dimension: "propagation" },
  { id: 31, dimension: "propagation" },
  { id: 32, dimension: "propagation" },
];
