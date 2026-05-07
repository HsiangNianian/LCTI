"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { questions } from "./questions";
import type { QuizAnswers, ScoreValue } from "./types";

interface QuizContextValue {
  answers: QuizAnswers;
  currentQuestion: number;
  setAnswer: (questionId: number, value: ScoreValue) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  isComplete: boolean;
  reset: () => void;
}

const defaultAnswers: QuizAnswers = Object.fromEntries(
  questions.map((question) => [question.id, undefined]),
) as QuizAnswers;

const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<QuizAnswers>(defaultAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const setAnswer = useCallback((questionId: number, value: ScoreValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const nextQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  }, []);

  const prevQuestion = useCallback(() => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  }, []);

  const reset = useCallback(() => {
    setAnswers(defaultAnswers);
    setCurrentQuestion(0);
  }, []);

  const isComplete = questions.every((question) => answers[question.id] !== undefined);

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
