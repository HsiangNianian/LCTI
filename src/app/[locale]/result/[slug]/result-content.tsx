"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import { useTranslations } from "next-intl";
import type { Dimension, DimensionScores, License } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Download, Copy, Check, BadgePlus } from "lucide-react";
import { dimensionOrder } from "@/lib/data/base";
import { RadarChart } from "@/components/radar-chart";

export function ResultContent({
  license,
  dimensionScores: detailedScores,
  locale,
  dimensions,
}: {
  license: License;
  dimensionScores: DimensionScores | null;
  locale: string;
  dimensions: Record<string, Dimension>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeFormat, setActiveFormat] = useState<"md" | "rst" | "html">("md");
  const [embedCopied, setEmbedCopied] = useState<string | null>(null);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const t = useTranslations("result");
  const hasDetailedScores = detailedScores !== null;
  const dimensionScores = hasDetailedScores
    ? dimensionOrder.map((dimension) => detailedScores[dimension])
    : license.binary.map((value) => (value === 1 ? 1 : 0));

  useEffect(() => {
    const url = window.location.origin + `/test`;
    QRCode.toDataURL(url, {
      width: 240,
      margin: 1,
      color: { dark: "#171717", light: "#ffffff" },
    }).then(setQrDataUrl);
  }, []);

  const origin = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  const badgeUrl = `${origin}/badge/${license.slug}.svg`;

  const embedCodes: Record<string, string> = useMemo(() => ({
    md: `[![License Persona](${badgeUrl})](${origin})`,
    rst: `.. image:: ${badgeUrl}\n   :target: ${origin}\n   :alt: License Persona`,
    html: `<a href="${origin}"><img src="${badgeUrl}" alt="License Persona" /></a>`,
  }), [badgeUrl, origin]);

  const handleCopyEmbed = async (format: string) => {
    try {
      await navigator.clipboard.writeText(embedCodes[format]);
      setEmbedCopied(format);
      setTimeout(() => setEmbedCopied(null), 2000);
    } catch {
      // fallback
    }
  };

  const formatLabel: Record<string, string> = { md: t("md"), rst: t("rst"), html: t("html") };

  const handleSaveImage = async () => {
    const el = cardRef.current;
    if (!el) return;
    try {
      const dataUrl = await toPng(el, {
        quality: 0.95,
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      link.download = `license-persona-${license.slug}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate image", err);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <>
      <div className="overflow-x-auto flex justify-center">
      <div ref={cardRef} style={{ width: 420 }}>
        <div className="rounded-xl bg-card text-card-foreground shadow-xl">
          {/* Top color bar */}
          <div
            className="h-2 rounded-t-xl"
            style={{ backgroundColor: license.color }}
          />

          {/* Header */}
          <div className="relative pt-6 pb-2 px-4 text-center">
            <div
              className="absolute top-6 left-4 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
              style={{ backgroundColor: license.color }}
            >
              <span className="text-sm font-bold text-white">
                {license.name.charAt(0)}
              </span>
            </div>
            <p className="text-3xl font-black tracking-tight">{license.name}</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              {license.fullName}
            </p>
          </div>

          {/* Body */}
          <div className="px-4 pb-4 space-y-6">
            {/* Personality */}
            <div className="text-center space-y-3 pt-2">
              <div>
                <span
                  className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: license.color }}
                >
                  {license.title}
                </span>
              </div>
              <p className="text-base font-semibold leading-relaxed text-foreground/90">
                {license.personality}
              </p>
              <p className="text-xs italic text-muted-foreground leading-relaxed">
                {license.catchphrase}
              </p>
            </div>

            {/* Radar chart */}
            <div className="flex justify-center py-2">
              <RadarChart scores={dimensionScores} dimensions={dimensions} />
            </div>
            {!hasDetailedScores && (
              <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                {t("missingScores")}
              </p>
            )}

            {/* Description */}
            <div className="bg-muted/50 rounded-xl p-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {license.description}
              </p>
            </div>
          </div>

          {/* QR code footer */}
          {qrDataUrl && (
            <div
              className="rounded-b-xl px-4 py-3 flex items-center justify-between"
              style={{ backgroundColor: license.color }}
            >
              <span className="text-[11px] font-medium text-white/70 leading-none max-w-[60%]">
                {t("qrCta")}
              </span>
              <div className="bg-white rounded-lg p-1.5 shadow-md shrink-0">
                <img
                  src={qrDataUrl}
                  alt={t("qrAlt")}
                  className="w-14 h-14 block"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Action buttons */}
      <div className="overflow-x-auto flex justify-center">
      <div className="flex gap-2" style={{ width: 420 }}>
        <Button
          variant="default"
          className="flex-1 rounded-xl h-10 font-bold shadow-md text-xs"
          onClick={handleSaveImage}
        >
          <Download className="h-4 w-4 mr-1.5" />
          {t("saveCard")}
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-xl h-10 text-xs"
          onClick={handleCopyLink}
        >
          <Copy className="h-4 w-4 mr-1.5" />
          {copied ? t("copied") : t("copyLink")}
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-xl h-10 text-xs"
          onClick={() => setShowEmbedModal(true)}
        >
          <BadgePlus className="h-4 w-4 mr-1.5" />
          {t("embedButton")}
        </Button>
      </div>
      </div>

      {/* Embed modal */}
      {showEmbedModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowEmbedModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Modal */}
          <Card
            className="relative w-full max-w-sm animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="pt-5 space-y-4">
              <div className="text-center space-y-1">
                <p className="text-sm font-semibold">{t("embedTitle")}</p>
                <p className="text-xs text-muted-foreground">
                  {t("embedDesc")}
                </p>
              </div>

              {/* Badge preview */}
              <div className="flex justify-center py-1">
                <a href={origin} target="_blank" rel="noopener noreferrer">
                  <img src={badgeUrl} alt={`License Persona: ${license.name}`} className="h-5" />
                </a>
              </div>

              {/* Format tabs */}
              <div className="flex gap-1 bg-muted rounded-lg p-1">
                {(["md", "rst", "html"] as const).map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setActiveFormat(fmt)}
                    className={cn(
                      "flex-1 text-xs font-medium py-1.5 rounded-md transition-colors",
                      activeFormat === fmt
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {formatLabel[fmt]}
                  </button>
                ))}
              </div>

              {/* Code block */}
              <div className="relative">
                <pre className="bg-muted rounded-lg p-3 pr-10 text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all">
                  <code>{embedCodes[activeFormat]}</code>
                </pre>
                <button
                  onClick={() => handleCopyEmbed(activeFormat)}
                  className="absolute top-2 right-2 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
                  aria-label={t("copyAria", { format: formatLabel[activeFormat] })}
                >
                  {embedCopied === activeFormat ? (
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
