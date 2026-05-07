"use client";

import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import QRCode from "qrcode";
import type { License } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";

const dimensionLabels = [
  { left: "独行侠", right: "布道者" },
  { left: "审计员", right: "乐捐者" },
  { left: "盾牌手", right: "冒险家" },
  { left: "传教士", right: "实用派" },
];

function DimensionBar({
  value,
  left,
  right,
}: {
  value: number;
  left: string;
  right: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className={value === 0 ? "font-bold text-foreground" : "text-muted-foreground"}>
          {left}
        </span>
        <span className={value === 1 ? "font-bold text-foreground" : "text-muted-foreground"}>
          {right}
        </span>
      </div>
      <div className="relative h-2.5 bg-muted rounded-full">
        <div
          className="absolute h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          style={{
            width: "50%",
            left: value === 0 ? "0%" : "50%",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-500 shadow-sm"
          style={{
            left: value === 0 ? "0%" : "calc(100% - 1rem)",
          }}
        />
      </div>
    </div>
  );
}

export function ResultContent({ license }: { license: License }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const url = window.location.origin + "/test";
    QRCode.toDataURL(url, {
      width: 240,
      margin: 1,
      color: { dark: "#171717", light: "#ffffff" },
    }).then(setQrDataUrl);
  }, []);

  const handleSaveImage = async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = `license-persona-${license.slug}.png`;
      link.href = canvas.toDataURL("image/png");
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
      <div ref={cardRef} className="mx-auto" style={{ width: 420, maxWidth: "100%" }}>
        <div className="rounded-xl bg-card text-card-foreground shadow-xl">
          {/* Top color bar */}
          <div
            className="h-2 rounded-t-xl"
            style={{ backgroundColor: license.color }}
          />

          {/* Header */}
          <div className="text-center pt-6 pb-2 px-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md"
              style={{ backgroundColor: license.color }}
            >
              <span className="text-2xl font-bold text-white">
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

            {/* Description */}
            <div className="bg-muted/50 rounded-xl p-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {license.description}
              </p>
            </div>

            {/* Dimensions */}
            <div className="space-y-4">
              <p className="text-xs font-semibold text-center text-muted-foreground uppercase tracking-wider">
                人格维度
              </p>
              {license.binary.map((value, i) => (
                <DimensionBar
                  key={i}
                  value={value}
                  left={dimensionLabels[i].left}
                  right={dimensionLabels[i].right}
                />
              ))}
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

      {/* Action buttons */}
      <div className="mx-auto flex gap-3" style={{ width: 420, maxWidth: "100%" }}>
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
    </>
  );
}
