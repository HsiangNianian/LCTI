"use client";

import { useRouter } from "next/navigation";
import { QuizProvider, useQuiz } from "@/lib/quiz-context";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

function QuizInner() {
  const router = useRouter();
  const { answers, currentQuestion, setAnswer, nextQuestion, prevQuestion, reset } = useQuiz();
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLast = currentQuestion === questions.length - 1;

  const currentAnswer = answers[question.dimension];

  const handleNext = () => {
    if (isLast) {
      const bin = `${answers.collaboration}${answers.trust}${answers.liability}${answers.propagation}`;
      router.push(`/result/${bin}`);
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg mx-auto space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {currentQuestion + 1} / {questions.length}
            </span>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              重新开始
            </button>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="text-xl">{question.text}</CardTitle>
            <CardDescription>选择更符合你直觉的选项</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={currentAnswer?.toString() ?? ""}
              onValueChange={(v) => {
                setAnswer(question.dimension, parseInt(v) as 0 | 1);
              }}
              className="gap-4"
            >
              <div className="flex items-start gap-4 rounded-lg border p-4 has-data-[state=checked]:border-primary">
                <RadioGroupItem value="0" id={`q${question.id}-left`} className="mt-0.5" />
                <Label
                  htmlFor={`q${question.id}-left`}
                  className="flex flex-col gap-1 cursor-pointer"
                >
                  <span className="font-medium">{question.leftLabel}</span>
                  <span className="text-sm text-muted-foreground">
                    {question.leftDesc}
                  </span>
                </Label>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4 has-data-[state=checked]:border-primary">
                <RadioGroupItem value="1" id={`q${question.id}-right`} className="mt-0.5" />
                <Label
                  htmlFor={`q${question.id}-right`}
                  className="flex flex-col gap-1 cursor-pointer"
                >
                  <span className="font-medium">{question.rightLabel}</span>
                  <span className="text-sm text-muted-foreground">
                    {question.rightDesc}
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              上一题
            </Button>
            <Button onClick={handleNext} disabled={currentAnswer === undefined}>
              {isLast ? "查看结果" : "下一题"}
              {!isLast && <ArrowRight className="h-4 w-4 ml-1" />}
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
