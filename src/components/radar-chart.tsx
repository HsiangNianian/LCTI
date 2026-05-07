"use client";

import type { DimensionKey } from "@/lib/types";
import { dimensionOrder, dimensions } from "@/lib/questions";

const SIZE = 260;
const CENTER = SIZE / 2;
const RADIUS = 85;

// 4 axes at cardinal directions
const AXES: { angle: number; dim: DimensionKey }[] = [
  { angle: -90, dim: "collaboration" },  // top
  { angle: 0, dim: "trust" },            // right
  { angle: 90, dim: "liability" },       // bottom
  { angle: 180, dim: "propagation" },    // left
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export function RadarChart({ scores }: { scores: number[] }) {
  const scoreMap = Object.fromEntries(
    dimensionOrder.map((dim, i) => [dim, scores[i]]),
  );

  // Grid levels
  const levels = [0.25, 0.5, 0.75, 1];

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="block"
    >
      {/* Grid rings */}
      {levels.map((level) => {
        const r = RADIUS * level;
        const pts = AXES.map((a) => polarToCartesian(CENTER, CENTER, r, a.angle));
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
        return (
          <path
            key={level}
            d={d}
            fill="none"
            stroke="currentColor"
            className="text-muted-foreground/20"
            strokeWidth={1}
          />
        );
      })}

      {/* Axis lines */}
      {AXES.map((a) => {
        const end = polarToCartesian(CENTER, CENTER, RADIUS, a.angle);
        return (
          <line
            key={a.dim}
            x1={CENTER}
            y1={CENTER}
            x2={end.x}
            y2={end.y}
            stroke="currentColor"
            className="text-muted-foreground/20"
            strokeWidth={1}
          />
        );
      })}

      {/* Data polygon */}
      <polygon
        points={AXES.map((a) => {
          const score = scoreMap[a.dim];
          const r = RADIUS * score;
          const p = polarToCartesian(CENTER, CENTER, r, a.angle);
          return `${p.x},${p.y}`;
        }).join(" ")}
        fill="rgba(99, 102, 241, 0.2)"
        stroke="rgb(99, 102, 241)"
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* Data points */}
      {AXES.map((a) => {
        const score = scoreMap[a.dim];
        const r = RADIUS * score;
        const p = polarToCartesian(CENTER, CENTER, r, a.angle);
        return (
          <circle
            key={a.dim}
            cx={p.x}
            cy={p.y}
            r={3}
            fill="rgb(99, 102, 241)"
            stroke="white"
            strokeWidth={1.5}
          />
        );
      })}

      {/* Axis labels */}
      {AXES.map((a) => {
        const dim = dimensions[a.dim];
        const pos = polarToCartesian(CENTER, CENTER, RADIUS + 20, a.angle);
        return (
          <text
            key={a.dim}
            x={pos.x}
            y={pos.y}
            textAnchor={a.angle === 0 ? "start" : a.angle === 180 ? "end" : "middle"}
            alignmentBaseline={a.angle === -90 ? "hanging" : a.angle === 90 ? "auto" : "central"}
            fill="currentColor"
            className="text-[11px] font-bold text-muted-foreground/60"
          >
            {dim.abbr}
          </text>
        );
      })}
    </svg>
  );
}
