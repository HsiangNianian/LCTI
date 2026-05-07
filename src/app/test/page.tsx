"use client";

import { useRouter } from "next/navigation";
import { QuizProvider, useQuiz } from "@/lib/quiz-context";
import { dimensions, questions } from "@/lib/questions";
import {
  answerOptions,
  calculateDimensionScores,
  getResultBinaryString,
  serializeDimensionScores,
} from "@/lib/scoring";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, RotateCcw } from "lucide-react";
import type { ScoreValue } from "@/lib/types";

function QuizInner() {
  const router = useRouter();
  const { answers, currentQuestion, setAnswer, nextQuestion, prevQuestion, reset } = useQuiz();
  const question = questions[currentQuestion];
  const dimension = dimensions[question.dimension];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLast = currentQuestion === questions.length - 1;

  const currentAnswer = answers[question.id];

  const handleNext = () => {
    if (isLast) {
      const scores = calculateDimensionScores(answers);
      const bin = getResultBinaryString(scores);
      router.push(`/result/${bin}?scores=${serializeDimensionScores(scores)}`);
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">{dimension.label}</span>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors text-xs"
            >
              <RotateCcw className="h-3 w-3" />
              重来
            </button>
          </div>
          <Progress value={progress} className="h-2.5" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>第 {currentQuestion + 1} / {questions.length} 题</span>
            <span>{dimension.left} ↔ {dimension.right}</span>
          </div>
        </div>

        <Card
          key={question.id}
          className="border-t-4"
          style={{
            borderTopColor:
              currentAnswer !== undefined
                ? currentAnswer <= 0.5
                  ? "#6366f1"
                  : "#8b5cf6"
                : "transparent",
          }}
        >
          <CardHeader>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-indigo-500/10 px-4 py-3">
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">{dimension.left}</p>
                <p className="mt-1 text-muted-foreground leading-relaxed">{dimension.leftDesc}</p>
              </div>
              <div className="rounded-xl bg-purple-500/10 px-4 py-3 text-right">
                <p className="font-semibold text-purple-600 dark:text-purple-400">{dimension.right}</p>
                <p className="mt-1 text-muted-foreground leading-relaxed">{dimension.rightDesc}</p>
              </div>
            </div>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {question.text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={currentAnswer?.toString() ?? ""}
              onValueChange={(v) => {
                setAnswer(question.id, Number(v) as ScoreValue);
              }}
              className="gap-3"
            >
              {answerOptions.map((option) => {
                const optionId = `q${question.id}-${option.value}`;
                const isLeft = option.value < 0.5;
                const isNeutral = option.value === 0.5;
                const activeClasses = isNeutral
                  ? "has-data-[state=checked]:border-slate-500 has-data-[state=checked]:bg-slate-500/5"
                  : isLeft
                    ? "has-data-[state=checked]:border-indigo-500 has-data-[state=checked]:bg-indigo-500/5"
                    : "has-data-[state=checked]:border-purple-500 has-data-[state=checked]:bg-purple-500/5";
                const radioClasses = isNeutral
                  ? "data-[state=checked]:border-slate-500 data-[state=checked]:bg-slate-500"
                  : isLeft
                    ? "data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
                    : "data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500";

                return (
                  <div
                    key={option.value}
                    className={`flex items-start gap-4 rounded-xl border-2 p-5 cursor-pointer transition-all hover:bg-muted/50 ${activeClasses}`}
                  >
                    <RadioGroupItem value={option.value.toString()} id={optionId} className={`mt-0.5 ${radioClasses}`} />
                    <Label
                      htmlFor={optionId}
                      className="flex flex-col gap-1.5 cursor-pointer w-full"
                    >
                      <span className="font-bold text-base">{option.label}</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </span>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="rounded-xl px-6"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              上一题
            </Button>
            <Button
              size="lg"
              onClick={handleNext}
              disabled={currentAnswer === undefined}
              className="rounded-xl px-8 font-bold"
            >
              {isLast ? "🔮 查看 16 型结果" : "下一题 →"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function TestPage() {
  return (
    <QuizProvider>
      <QuizInner />
    </QuizProvider>
  );
}
