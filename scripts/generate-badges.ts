#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { licenses } from "../src/lib/licenses";

const __dirname = dirname(fileURLToPath(import.meta.url));

function measure(text: string): number {
  let w = 0;
  for (const ch of text) {
    if (ch >= "\u4e00" && ch <= "\u9fff") w += 10;
    else if (ch >= "A" && ch <= "Z") w += 7.5;
    else if (ch >= "a" && ch <= "z") w += 6;
    else if (ch >= "0" && ch <= "9") w += 6;
    else w += 4;
  }
  return w;
}

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildBadge(label: string, value: string, color: string): string {
  const pad = 10;
  const lw = Math.ceil(measure(label) + pad);
  const rw = Math.ceil(measure(value) + pad);
  const tw = lw + rw;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${tw}" height="20" viewBox="0 0 ${tw} 20">
  <linearGradient id="s" x2="0" y2="1">
    <stop offset="0" stop-color="#fff" stop-opacity=".1"/>
    <stop offset="1" stop-color="#fff" stop-opacity="0"/>
  </linearGradient>
  <clipPath id="r">
    <rect width="${tw}" height="20" rx="3" fill="#fff"/>
  </clipPath>
  <g clip-path="url(#r)">
    <rect width="${lw}" height="20" fill="#555"/>
    <rect x="${lw}" width="${rw}" height="20" fill="${escapeXml(color)}"/>
    <rect width="${tw}" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11" font-weight="bold">
    <text x="${lw / 2}" y="14">${escapeXml(label)}</text>
    <text x="${lw + rw / 2}" y="14">${escapeXml(value)}</text>
  </g>
</svg>`;
}

const outDir = join(__dirname, "..", "public", "badge");
mkdirSync(outDir, { recursive: true });

for (const license of licenses) {
  const svg = buildBadge("LICENSE PERSONA", license.name, license.color);
  writeFileSync(join(outDir, `${license.slug}.svg`), svg, "utf-8");
  console.log(`✓  public/badge/${license.slug}.svg`);
}

console.log(`\nGenerated ${licenses.length} badges.`);
