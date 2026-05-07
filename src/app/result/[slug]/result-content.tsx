"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import type { DimensionScores, License } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Download, Copy, Check } from "lucide-react";
import { dimensionOrder } from "@/lib/questions";
import { RadarChart } from "@/components/radar-chart";

export function ResultContent({
  license,
  dimensionScores: detailedScores,
}: {
  license: License;
  dimensionScores: DimensionScores | null;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeFormat, setActiveFormat] = useState<"md" | "rst" | "html">("md");
  const [embedCopied, setEmbedCopied] = useState<string | null>(null);
  const hasDetailedScores = detailedScores !== null;
  const dimensionScores = hasDetailedScores
    ? dimensionOrder.map((dimension) => detailedScores[dimension])
    // Shared result links may only carry the 4-bit slug, so the fallback intentionally snaps each dimension to its endpoint.
    : license.binary.map((value) => (value === 1 ? 1 : 0));

  useEffect(() => {
    const url = window.location.origin + "/test";
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
    md: `![License Persona](${badgeUrl})`,
    rst: `.. image:: ${badgeUrl}\n   :alt: License Persona`,
    html: `<img src="${badgeUrl}" alt="License Persona" />`,
  }), [badgeUrl]);

  const handleCopyEmbed = async (format: string) => {
    try {
      await navigator.clipboard.writeText(embedCodes[format]);
      setEmbedCopied(format);
      setTimeout(() => setEmbedCopied(null), 2000);
    } catch {
      // fallback
    }
  };

  const formatLabel: Record<string, string> = { md: "Markdown", rst: "RST", html: "HTML" };

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
              <RadarChart scores={dimensionScores} />
            </div>
            {!hasDetailedScores && (
              <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                当前分享链接未附带细分分值，雷达图按结果类型显示为端点倾向。
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
                扫码测你的灵魂开源许可证
              </span>
              <div className="bg-white rounded-lg p-1.5 shadow-md shrink-0">
                <img
                  src={qrDataUrl}
                  alt="扫码测试"
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
      <div className="flex gap-3" style={{ width: 420 }}>
        <Button
          variant="default"
          className="flex-1 rounded-xl h-12 font-bold shadow-md"
          onClick={handleSaveImage}
        >
          <Download className="h-4 w-4 mr-2" />
          保存卡片
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-xl h-12"
          onClick={handleCopyLink}
        >
          <Copy className="h-4 w-4 mr-2" />
          {copied ? "已复制！" : "复制链接"}
        </Button>
      </div>
      </div>

      {/* Embed badge */}
      <div className="overflow-x-auto flex justify-center">
      <Card className="w-[420px]">
        <CardContent className="pt-4 space-y-4">
          <div className="text-center space-y-1">
            <p className="text-sm font-semibold">嵌入徽章</p>
            <p className="text-xs text-muted-foreground">
              在你的个人主页或 README 中展示你的许可证人格
            </p>
          </div>

          {/* Badge preview */}
          <div className="flex justify-center py-1">
            <img src={badgeUrl} alt={`License Persona: ${license.name}`} className="h-5" />
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
              aria-label={`复制 ${formatLabel[activeFormat]} 代码`}
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
    </>
  );
}
