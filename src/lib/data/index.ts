import type { Dimension, License, Question } from "@/lib/types";
import type { ScoreValue } from "@/lib/types";

type Texts = {
  dimensions: Record<string, Dimension>;
  questions: Question[];
  answerOptions: readonly { value: ScoreValue; label: string; description: string }[];
  licenses: License[];
  getLicenseByBinary: (d1: number, d2: number, d3: number, d4: number) => License;
  getLicenseBySlug: (slug: string) => License | undefined;
};

const cache = new Map<string, Texts>();

async function load(locale: string): Promise<Texts> {
  if (cache.has(locale)) return cache.get(locale)!;
  const mod = (await import(`./${locale}/texts`)) as Texts;
  cache.set(locale, mod);
  return mod;
}

export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export async function getDimensions(locale: string) {
  return (await load(locale)).dimensions;
}

export async function getQuestions(locale: string) {
  return (await load(locale)).questions;
}

export async function getAnswerOptions(locale: string) {
  return (await load(locale)).answerOptions;
}

export async function getLicenses(locale: string) {
  return (await load(locale)).licenses;
}

export async function getLicenseByBinary(locale: string, d1: number, d2: number, d3: number, d4: number) {
  return (await load(locale)).getLicenseByBinary(d1, d2, d3, d4);
}

export async function getLicenseBySlug(locale: string, slug: string) {
  return (await load(locale)).getLicenseBySlug(slug);
}
