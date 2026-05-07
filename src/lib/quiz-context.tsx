"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { DimensionKey, QuizAnswers } from "./types";

interface QuizContextValue {
  answers: QuizAnswers;
  currentQuestion: number;
  setAnswer: (dimension: DimensionKey, value: 0 | 1) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  isComplete: boolean;
  reset: () => void;
}

const defaultAnswers: QuizAnswers = {
  collaboration: 0,
  trust: 0,
  liability: 0,
  propagation: 0,
};

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const setAnswer = useCallback((dimension: DimensionKey, value: 0 | 1) => {
    setAnswers((prev) => ({ ...prev, [dimension]: value }));
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.min(prev + 1, 4));
  }, []);

  const prevQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  }, []);

  const reset = useCallback(() => {
    setAnswers(defaultAnswers);
    setCurrentQuestion(0);
  }, []);

  const isComplete = Object.values(answers).every((v) => v !== undefined);

  return (
    <QuizContext.Provider
      value={{ answers, currentQuestion, setAnswer, nextQuestion, prevQuestion, isComplete, reset }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
}
