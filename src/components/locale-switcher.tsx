"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Languages } from "lucide-react";

const labels: Record<string, string> = {
  zh: "中",
  en: "EN",
  ja: "JA",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <div className="relative flex items-center">
      <Languages className="absolute left-2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
      <select
        value={locale}
        onChange={handleChange}
        className="appearance-none rounded-lg border bg-background pl-7 pr-5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label={labels[locale]}
      >
        {routing.locales.map((l) => (
          <option key={l} value={l}>
            {labels[l]}
          </option>
        ))}
      </select>
    </div>
  );
}
