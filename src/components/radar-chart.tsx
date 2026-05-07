"use client";

import type { DimensionKey } from "@/lib/types";
import { dimensionOrder, dimensions } from "@/lib/questions";
import { RESULT_THRESHOLD } from "@/lib/scoring";

const SIZE = 200;
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

      {/* Labels */}
      {AXES.map((a) => {
        const dim = dimensions[a.dim];
        const isLeft = scoreMap[a.dim] < RESULT_THRESHOLD;
        const labelEnd = polarToCartesian(CENTER, CENTER, RADIUS + 18, a.angle);
        const opposite = polarToCartesian(CENTER, CENTER, RADIUS + 18, a.angle + 180);
        const adjAngle = a.angle === -90 ? 0 : a.angle;
        const anchor = a.angle === 180 ? "end" : a.angle === 0 ? "start" : "middle";
        const dominant = a.angle === 0 || a.angle === 180 ? "auto" : "central";

        return (
          <g key={a.dim}>
            {/* Left label */}
            <text
              x={opposite.x}
              y={opposite.y}
              textAnchor={a.angle === 180 ? "start" : a.angle === 0 ? "end" : "middle"}
              alignmentBaseline={a.angle === -90 ? "auto" : a.angle === 90 ? "hanging" : "central"}
              fill="currentColor"
              className={`text-[9px] font-medium ${isLeft ? "text-foreground" : "text-muted-foreground"}`}
            >
              {dim.left}
            </text>
            {/* Right label */}
            <text
              x={labelEnd.x}
              y={labelEnd.y}
              textAnchor={anchor}
              alignmentBaseline={a.angle === -90 ? "hanging" : a.angle === 90 ? "auto" : "central"}
              fill="currentColor"
              className={`text-[9px] font-medium ${!isLeft ? "text-foreground" : "text-muted-foreground"}`}
            >
              {dim.right}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
