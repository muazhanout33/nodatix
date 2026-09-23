"use client";

import { FLOW_LABELS } from "./stages";

type Props = {
  activeIndex?: number;
  highlightAll?: boolean;
  className?: string;
};

const NODE_W = 132;
const NODE_H = 56;
const GAP = 46;

export default function SystemDiagram({ activeIndex, highlightAll = false, className }: Props) {
  const rowWidth = FLOW_LABELS.length * NODE_W + (FLOW_LABELS.length - 1) * GAP;
  const padX = 8;
  const padY = 8;
  const vbW = rowWidth + padX * 2;
  const vbH = NODE_H + padY * 2;

  const isNodeActive = (i: number) =>
    highlightAll || activeIndex === undefined || activeIndex === i;
  const isLinkActive = (i: number) =>
    highlightAll || activeIndex === undefined || activeIndex === i || activeIndex === i + 1;

  return (
    <div className={`svc-system-diagram ${className ?? ""}`} aria-hidden="true">
      {/* Horizontal chain — md and up */}
      <svg viewBox={`0 0 ${vbW} ${vbH}`} className="hidden md:block w-full h-auto" role="presentation">
        {FLOW_LABELS.slice(1).map((label, i) => {
          const x1 = padX + i * (NODE_W + GAP) + NODE_W;
          const x2 = padX + (i + 1) * (NODE_W + GAP);
          const active = isLinkActive(i);
          return (
            <g key={`link-${label}`}>
              <line
                x1={x1}
                y1={padY + NODE_H / 2}
                x2={x2}
                y2={padY + NODE_H / 2}
                stroke={active ? "var(--accent)" : "var(--border)"}
                strokeWidth={1.5}
              />
              <circle
                cx={(x1 + x2) / 2}
                cy={padY + NODE_H / 2}
                r={3}
                fill={active ? "var(--accent)" : "var(--text-muted)"}
                opacity={active ? 1 : 0.5}
              />
            </g>
          );
        })}
        {FLOW_LABELS.map((label, i) => {
          const x = padX + i * (NODE_W + GAP);
          const active = isNodeActive(i);
          return (
            <g key={label}>
              <rect
                x={x}
                y={padY}
                width={NODE_W}
                height={NODE_H}
                rx={10}
                fill={active ? "var(--accent)" : "var(--surface)"}
                stroke={active ? "var(--accent)" : "var(--border)"}
                strokeWidth={1.25}
              />
              <text
                x={x + NODE_W / 2}
                y={padY + NODE_H / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={active ? "#FFFFFF" : "var(--text-secondary)"}
                fontSize={11}
                fontWeight={600}
                letterSpacing="0.14em"
                fontFamily="ui-monospace, monospace"
              >
                {label}
              </text>
              <text
                x={x + 12}
                y={padY + 16}
                fill={active ? "rgba(255,255,255,0.7)" : "var(--text-muted)"}
                fontSize={9}
                fontWeight={500}
                fontFamily="ui-monospace, monospace"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Vertical chain — mobile */}
      <svg
        viewBox={`0 0 ${NODE_W + padX * 2} ${FLOW_LABELS.length * (NODE_H + GAP) - GAP + padY * 2}`}
        className="md:hidden w-full h-auto max-w-[200px] mx-auto"
        role="presentation"
      >
        {FLOW_LABELS.slice(1).map((label, i) => {
          const y1 = padY + i * (NODE_H + GAP) + NODE_H;
          const y2 = padY + (i + 1) * (NODE_H + GAP);
          const active = isLinkActive(i);
          return (
            <line
              key={`vlink-${label}`}
              x1={padX + NODE_W / 2}
              y1={y1}
              x2={padX + NODE_W / 2}
              y2={y2}
              stroke={active ? "var(--accent)" : "var(--border)"}
              strokeWidth={1.5}
            />
          );
        })}
        {FLOW_LABELS.map((label, i) => {
          const y = padY + i * (NODE_H + GAP);
          const active = isNodeActive(i);
          return (
            <g key={label}>
              <rect
                x={padX}
                y={y}
                width={NODE_W}
                height={NODE_H}
                rx={10}
                fill={active ? "var(--accent)" : "var(--surface)"}
                stroke={active ? "var(--accent)" : "var(--border)"}
                strokeWidth={1.25}
              />
              <text
                x={padX + NODE_W / 2}
                y={y + NODE_H / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={active ? "#FFFFFF" : "var(--text-secondary)"}
                fontSize={11}
                fontWeight={600}
                letterSpacing="0.14em"
                fontFamily="ui-monospace, monospace"
              >
                {label}
              </text>
              <text
                x={padX + 12}
                y={y + 16}
                fill={active ? "rgba(255,255,255,0.7)" : "var(--text-muted)"}
                fontSize={9}
                fontWeight={500}
                fontFamily="ui-monospace, monospace"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
