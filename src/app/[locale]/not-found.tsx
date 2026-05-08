import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function LocaleNotFound({
  params,
}: {
  params?: Promise<{ locale: string }>;
}) {
  let locale = "zh";
  if (params) {
    try {
      const p = await params;
      if (p?.locale) locale = p.locale;
    } catch {
      // params not available during SSG notFound fallback
    }
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "notFound" });

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <p className="text-6xl font-black text-muted-foreground">{t("label")}</p>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          {t("desc")}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-block text-sm underline underline-offset-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}
