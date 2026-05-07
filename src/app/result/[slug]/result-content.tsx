"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import type { License } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Copy } from "lucide-react";

const dimensionLabels = [
  { key: "collaboration", left: "独行侠", right: "布道者" },
  { key: "trust", left: "审计员", right: "乐捐者" },
  { key: "liability", left: "盾牌手", right: "冒险家" },
  { key: "propagation", left: "传教士", right: "实用派" },
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
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span className={value === 0 ? "font-bold text-foreground" : ""}>
          {left}
        </span>
        <span className={value === 1 ? "font-bold text-foreground" : ""}>
          {right}
        </span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`absolute h-full rounded-full transition-all duration-500 ${
            value === 0 ? "left-0 bg-primary" : "right-0 bg-primary"
          }`}
          style={{ width: "50%" }}
        />
        <div
          className="absolute top-0 h-full w-4 rounded-full bg-foreground border-2 border-background transition-all duration-500"
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

  const handleSaveImage = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { quality: 0.95 });
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
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <>
      <div ref={cardRef}>
        <Card
          className="border-t-4 overflow-hidden"
          style={{ borderTopColor: license.color }}
        >
          <CardHeader className="text-center pb-2">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
              style={{ backgroundColor: license.color + "15" }}
            >
              <span
                className="text-lg font-bold"
                style={{ color: license.color }}
              >
                {license.name.charAt(0)}
              </span>
            </div>
            <CardTitle className="text-2xl">{license.name}</CardTitle>
            <CardDescription className="text-base font-medium">
              {license.fullName}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-2xl font-bold">{license.title}</p>
              <p className="text-sm text-muted-foreground italic">
                {license.catchphrase}
              </p>
              <p className="text-sm">{license.personality}</p>
              <p className="text-sm text-muted-foreground">
                {license.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t">
              <p className="text-sm font-medium text-center">你的人格维度</p>
              {license.binary.map((value, i) => (
                <DimensionBar
                  key={dimensionLabels[i].key}
                  value={value}
                  left={dimensionLabels[i].left}
                  right={dimensionLabels[i].right}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" className="flex-1" onClick={handleSaveImage}>
          <Download className="h-4 w-4 mr-1" />
          保存卡片
        </Button>
        <Button variant="outline" className="flex-1" onClick={handleCopyLink}>
          <Copy className="h-4 w-4 mr-1" />
          复制链接
        </Button>
      </div>
    </>
  );
}
