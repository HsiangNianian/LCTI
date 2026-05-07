import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { licenses, getLicenseBySlug } from "@/lib/licenses";
import { Button } from "@/components/ui/button";
import { ResultContent } from "./result-content";
import { CopyLinkButton } from "./copy-link-button";

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
    title: `我的灵魂许可证是 ${license.name} — ${license.title} | 开源人格测试`,
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Try to find by license slug or binary string
  let license = getLicenseBySlug(slug);
  if (!license && slug.length === 4 && /^[01]{4}$/.test(slug)) {
    license = licenses[parseInt(slug, 2)];
  }

  if (!license) notFound();

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg mx-auto space-y-6">
        <ResultContent license={license} />

        <div className="flex flex-col gap-3">
          <Link href="/test" className="w-full">
            <Button variant="outline" className="w-full">
              重新测试
            </Button>
          </Link>
        </div>

        <div className="border-t pt-6 mt-6">
          <p className="text-center text-sm text-muted-foreground">
            你的朋友也测了吗？
            <br />
            <CopyLinkButton />
          </p>
        </div>
      </div>
    </main>
  );
}
