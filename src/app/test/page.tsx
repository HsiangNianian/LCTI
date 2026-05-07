"use client";

import { useRouter } from "next/navigation";
import { QuizProvider, useQuiz } from "@/lib/quiz-context";
import { dimensions, questions } from "@/lib/questions";
import {
  answerOptions,
  calculateDimensionScores,
  getResultBinaryString,
  RESULT_THRESHOLD,
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

const DOT_SIZE_CLASSES = {
  outer: "h-14 w-14",
  middle: "h-11 w-11",
  center: "h-8 w-8",
} as const;
const MIDDLE_DOT_VALUES = new Set<ScoreValue>([0.25, 0.75]);
const DOT_OPTION_CARD_CLASSES =
  "flex min-h-28 min-w-0 cursor-pointer items-center justify-center rounded-2xl p-2 transition-all hover:bg-muted/50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2";

function QuizInner() {
  const router = useRouter();
  const { answers, currentQuestion, setAnswer, nextQuestion, prevQuestion, reset } = useQuiz();
  const question = questions[currentQuestion];
  const dimension = dimensions[question.dimension];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLast = currentQuestion === questions.length - 1;

  const currentAnswer = answers[question.id];
  const selectedOption = answerOptions.find((option) => option.value === currentAnswer);

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
            <span>{dimension.left} / {dimension.right}</span>
          </div>
        </div>

        <Card
          key={question.id}
          className="border-t-4"
          style={{
            borderTopColor:
              currentAnswer !== undefined
                ? currentAnswer < RESULT_THRESHOLD
                  ? "#6366f1"
                  : currentAnswer > RESULT_THRESHOLD
                    ? "#8b5cf6"
                    : "#64748b"
                : "transparent",
          }}
        >
          <CardHeader>
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
              className="space-y-2"
            >
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {answerOptions.map((option) => {
                  const optionId = `q${question.id}-${option.value}`;
                  const isLeft = option.value < RESULT_THRESHOLD;
                  const isNeutral = option.value === RESULT_THRESHOLD;
                  const dotSizeClasses = isNeutral
                    ? DOT_SIZE_CLASSES.center
                    : MIDDLE_DOT_VALUES.has(option.value)
                      ? DOT_SIZE_CLASSES.middle
                      : DOT_SIZE_CLASSES.outer;
                  const activeClasses = isNeutral
                    ? "has-data-[state=checked]:bg-slate-500/10"
                    : isLeft
                      ? "has-data-[state=checked]:bg-indigo-500/10"
                      : "has-data-[state=checked]:bg-purple-500/10";
                  const dotClasses = isNeutral
                    ? "border-slate-300 text-slate-500 data-[state=checked]:border-slate-500 data-[state=checked]:bg-slate-500"
                    : isLeft
                      ? "border-indigo-200 text-indigo-500 data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500"
                      : "border-purple-200 text-purple-500 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500";

                  return (
                    <div key={option.value} className="flex flex-col items-center gap-1">
                      <Label
                        htmlFor={optionId}
                        className={`${DOT_OPTION_CARD_CLASSES} ${activeClasses}`}
                      >
                        <RadioGroupItem
                          value={option.value.toString()}
                          id={optionId}
                          aria-label={`${option.label}: ${option.description}`}
                          className={`${dotSizeClasses} shrink-0 border-2 ${dotClasses}`}
                        />
                      </Label>
                      {option.value === 0 && (
                        <span className="text-[11px] text-center text-muted-foreground leading-tight max-w-16">
                          {question.leftAnswer}
                        </span>
                      )}
                      {option.value === 1 && (
                        <span className="text-[11px] text-center text-muted-foreground leading-tight max-w-16">
                          {question.rightAnswer}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="min-h-5 text-center text-sm text-muted-foreground">
                {selectedOption
                  ? `${selectedOption.label}: ${selectedOption.description}`
                  : "点越大表示倾向越强，中间最小表示两边都能接受。"}
              </p>
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
