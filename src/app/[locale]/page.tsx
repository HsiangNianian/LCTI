import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDimensions } from "@/lib/data";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "hero" });
  const footerT = await getTranslations({ locale, namespace: "footer" });
  const dimensions = await getDimensions(locale);

  const traitEntries = Object.values(dimensions).map((d) => ({
    abbrEn: `${d.abbr}·${d.labelEn}`,
    left: d.left,
    right: d.right,
  }));

  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-28 text-center">
        <div className="max-w-xl mx-auto space-y-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
              {t("badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight whitespace-pre-line">
              {t("heading")}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              {t("body_prefix")}
              <span className="font-semibold text-foreground">{t("highlight")}</span>
              {t("body_suffix")}
              <br />
              {t("body2")}
              <br />
              {t("body3")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link href={`/${locale}/test`}>
              <Button
                size="lg"
                className="text-base px-10 py-7 h-auto rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                {t("cta")}
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
            {traitEntries.map(({ abbrEn, left, right }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 rounded-lg border px-3 py-2"
              >
                <span className="text-[10px] font-semibold text-muted-foreground tracking-tight">{abbrEn}</span>
                <div className="flex items-center justify-between gap-1 text-xs w-full">
                  <span>{left}</span>
                  <span className="text-muted-foreground">↔</span>
                  <span>{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t px-4 py-6 text-center text-xs text-muted-foreground space-y-1">
        <p>{footerT("disclaimer")}</p>
        <p>
          LCTI &copy;{" "}
          <a
            href="https://github.com/HsiangNianian"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            简律纯
          </a>
          {" · "}
          <a
            href="https://github.com/HsiangNianian/LCTI"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Github
          </a>
        </p>
      </footer>
    </main>
  );
}
