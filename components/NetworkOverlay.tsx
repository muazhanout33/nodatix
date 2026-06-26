"use client";

import { useMemo } from "react";

interface NetworkOverlayProps {
  columns: number;
  rows?: number;
  className?: string;
}

function NetworkOverlay({ columns, rows = 1, className = "" }: NetworkOverlayProps) {
  const W = 1000;
  const H = rows > 1 ? 400 : 200;
  const PAD_X = 80;
  const PAD_Y = rows > 1 ? 60 : 40;
  const innerW = W - PAD_X * 2;
  const innerH = H - PAD_Y * 2;

  const colSpacing = innerW / (columns - 1 || 1);
  const rowSpacing = rows > 1 ? innerH / (rows - 1) : 0;

  const nodePositions = useMemo(() => {
    const positions: { x: number; y: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        positions.push({
          x: PAD_X + c * colSpacing,
          y: rows > 1 ? PAD_Y + r * rowSpacing : H / 2,
        });
      }
    }
    return positions;
  }, [columns, rows, colSpacing, rowSpacing, H, PAD_X, PAD_Y]);

  const coreX = W / 2;
  const coreY = H / 2;

  return (
    <div className={`network-overlay ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="core-gradient">
            <stop offset="0%" stopColor="#0099FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0044FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Horizontal backbone line */}
        <line
          x1={PAD_X}
          y1={H / 2}
          x2={PAD_X + innerW}
          y2={H / 2}
          stroke="rgba(0,153,255,0.06)"
          strokeWidth="0.5"
        />

        {/* Vertical branch lines */}
        {rows > 1 && nodePositions.map((pos, i) => {
          const isTopRow = pos.y < coreY;
          const isBottomRow = pos.y > coreY;
          if (isTopRow || isBottomRow) {
            return (
              <line
                key={`vb-${i}`}
                x1={pos.x}
                y1={pos.y}
                x2={pos.x}
                y2={coreY}
                stroke="rgba(0,153,255,0.04)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            );
          }
          return null;
        })}

        {/* Connecting lines from each node to core */}
        {nodePositions.map((pos, i) => {
          const dx = coreX - pos.x;
          const dy = coreY - pos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const midX = (pos.x + coreX) / 2;
          const midY = (pos.y + coreY) / 2 - dist * 0.05;
          return (
            <path
              key={`line-${i}`}
              d={`M ${pos.x} ${pos.y} Q ${midX} ${midY} ${coreX} ${coreY}`}
              stroke="rgba(0,132,255,0.04)"
              strokeWidth="0.5"
              fill="none"
            />
          );
        })}

        {/* Core central node */}
        <circle
          cx={coreX}
          cy={coreY}
          r="18"
          fill="url(#core-gradient)"
          opacity="0.5"
        />
        <circle
          cx={coreX}
          cy={coreY}
          r="4"
          fill="#0099FF"
          opacity="0.8"
        />

        {/* Node dots */}
        {nodePositions.map((pos, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r="3"
              fill="#0099FF"
              opacity="0.25"
            />
            <circle
              cx={pos.x}
              cy={pos.y}
              r="1.2"
              fill="#00cfff"
              opacity="0.6"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default NetworkOverlay;
