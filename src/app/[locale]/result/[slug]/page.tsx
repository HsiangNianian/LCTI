import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getLicenseBySlug, getLicenses, getDimensions } from "@/lib/data";
import { ResultContent } from "./result-content";

const allBinaries = Array.from({ length: 16 }, (_, i) =>
  i.toString(2).padStart(4, "0"),
);

export function generateStaticParams() {
  const locales = ["zh", "en", "ja"];
  return locales.flatMap((locale) =>
    allBinaries.map((bin) => ({ locale, slug: bin })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const license = await getLicenseBySlug(locale, slug);

  if (!license) return { title: "Not Found" };

  return {
    title: `${license.name} — ${license.title} | LCTI`,
    description: license.description,
    openGraph: {
      title: `${license.name} — ${license.title}`,
      description: license.catchphrase,
    },
  };
}

export default async function ResultPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "result" });

  let license = await getLicenseBySlug(locale, slug);
  if (!license && slug.length === 4 && /^[01]{4}$/.test(slug)) {
    const licenses = await getLicenses(locale);
    license = licenses[parseInt(slug, 2)];
  }

  if (!license) notFound();

  const dimensions = await getDimensions(locale);

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16">
      <div className="w-full max-w-lg mx-auto space-y-6">
        <ResultContent
          license={license}
          locale={locale}
          dimensions={dimensions}
        />

        <div className="text-center">
          <Link
            href={`/${locale}/test`}
            className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
          >
            {t("retake")}
          </Link>
        </div>
      </div>
    </main>
  );
}
