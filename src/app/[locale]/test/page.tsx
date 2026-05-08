import { setRequestLocale, getTranslations } from "next-intl/server";
import { getQuestions, getDimensions } from "@/lib/data";
import { QuizProvider } from "@/lib/quiz-context";
import { QuizInner } from "./quiz-inner";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }, { locale: "ja" }];
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const questions = await getQuestions(locale);
  const dimensions = await getDimensions(locale);
  const t = await getTranslations({ locale, namespace: "quiz" });
  const s = await getTranslations({ locale, namespace: "scoring" });

  return (
    <QuizProvider questions={questions}>
      <QuizInner
        questions={questions}
        dimensions={dimensions}
        locale={locale}
        messages={{
          reset: t("reset"),
          progress: t("progress"),
          hint: t("hint"),
          prev: t("prev"),
          next: t("next"),
          submit: t("submit"),
          scoringLabels: [s("option0"), s("option25"), s("option50"), s("option75"), s("option1")],
          scoringDescs: [s("desc0"), s("desc25"), s("desc50"), s("desc75"), s("desc1")],
        }}
      />
    </QuizProvider>
  );
}
