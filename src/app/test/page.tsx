"use client";

import { useRouter } from "next/navigation";
import { QuizProvider, useQuiz } from "@/lib/quiz-context";
import { questions } from "@/lib/questions";
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
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const progressLabels = [
  "第一问：关于人性的拷问",
  "第二问：关于虚荣心的拷问",
  "第三问：关于责任感的拷问",
  "最后一问！坚持住",
];

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
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">
              {progressLabels[currentQuestion]}
            </span>
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
          </div>
        </div>

        <Card key={question.id} className="border-t-4" style={{ borderTopColor: currentAnswer !== undefined ? (currentAnswer === 0 ? "#6366f1" : "#8b5cf6") : "transparent" }}>
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl leading-relaxed">
              {question.text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={currentAnswer?.toString() ?? ""}
              onValueChange={(v) => {
                setAnswer(question.dimension, parseInt(v) as 0 | 1);
              }}
              className="gap-3"
            >
              <div className="flex items-start gap-4 rounded-xl border-2 p-5 cursor-pointer transition-all has-data-[state=checked]:border-indigo-500 has-data-[state=checked]:bg-indigo-500/5 hover:bg-muted/50">
                <RadioGroupItem value="0" id={`q${question.id}-left`} className="mt-0.5 data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-500" />
                <Label
                  htmlFor={`q${question.id}-left`}
                  className="flex flex-col gap-1.5 cursor-pointer w-full"
                >
                  <span className="font-bold text-base">{question.leftLabel}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {question.leftDesc}
                  </span>
                </Label>
              </div>
              <div className="flex items-start gap-4 rounded-xl border-2 p-5 cursor-pointer transition-all has-data-[state=checked]:border-purple-500 has-data-[state=checked]:bg-purple-500/5 hover:bg-muted/50">
                <RadioGroupItem value="1" id={`q${question.id}-right`} className="mt-0.5 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500" />
                <Label
                  htmlFor={`q${question.id}-right`}
                  className="flex flex-col gap-1.5 cursor-pointer w-full"
                >
                  <span className="font-bold text-base">{question.rightLabel}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {question.rightDesc}
                  </span>
                </Label>
              </div>
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
              {isLast ? "🔮 查看结果" : "下一题 →"}
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
