import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { licenses, getLicenseBySlug } from "@/lib/licenses";
import { parseDimensionScores } from "@/lib/scoring";
import { ResultContent } from "./result-content";

// Generate all 16 binary combinations for static generation
const allBinaries = Array.from({ length: 16 }, (_, i) =>
  i.toString(2).padStart(4, "0"),
);

export function generateStaticParams() {
  return allBinaries.map((bin) => ({ slug: bin }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const license =
    getLicenseBySlug(slug) ??
    (slug.length === 4 && /^[01]{4}$/.test(slug)
      ? licenses[parseInt(slug, 2)]
      : undefined);

  if (!license) return { title: "未找到结果" };

  return {
    title: `我的灵魂许可证是 ${license.name} — ${license.title} | LCTI`,
    description: license.description,
    openGraph: {
      title: `${license.name} — ${license.title}`,
      description: license.catchphrase,
    },
  };
}

export default async function ResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ scores?: string }>;
}) {
  const { slug } = await params;
  const { scores } = await searchParams;
  const normalizedScores = typeof scores === "string" ? scores : null;

  let license = getLicenseBySlug(slug);
  if (!license && slug.length === 4 && /^[01]{4}$/.test(slug)) {
    license = licenses[parseInt(slug, 2)];
  }

  if (!license) notFound();

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16">
      <div className="w-full max-w-lg mx-auto space-y-6">
        <ResultContent license={license} dimensionScores={parseDimensionScores(normalizedScores)} />

        <div className="text-center">
          <Link
            href="/test"
            className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
          >
            ← 不信？再测一次
          </Link>
        </div>
      </div>
    </main>
  );
}
