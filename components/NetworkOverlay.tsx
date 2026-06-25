"use client";

interface NetworkOverlayProps {
  columns: number;
  rows?: number;
  className?: string;
}

export default function NetworkOverlay({
  columns,
  rows = 1,
  className = "",
}: NetworkOverlayProps) {
  const W = 1000;
  const H = rows > 1 ? 400 : 200;
  const PAD_X = 80;
  const PAD_Y = rows > 1 ? 60 : 40;
  const innerW = W - PAD_X * 2;
  const innerH = H - PAD_Y * 2;

  const colSpacing = innerW / (columns - 1 || 1);
  const rowSpacing = rows > 1 ? innerH / (rows - 1) : 0;

  const nodePositions: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      nodePositions.push({
        x: PAD_X + c * colSpacing,
        y: rows > 1 ? PAD_Y + r * rowSpacing : H / 2,
      });
    }
  }

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
          <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-core" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="core-gradient">
            <stop offset="0%" stopColor="#0084FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#003BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Horizontal backbone lines */}
        {rows > 1
          ? Array.from({ length: rows }).map((_, r) => {
              const y = PAD_Y + r * rowSpacing;
              return (
                <line
                  key={`h-${r}`}
                  x1={PAD_X}
                  y1={y}
                  x2={PAD_X + innerW}
                  y2={y}
                  stroke="rgba(0,132,255,0.06)"
                  strokeWidth="0.5"
                  filter="url(#glow-line)"
                />
              );
            })
          : (
              <line
                x1={PAD_X}
                y1={H / 2}
                x2={PAD_X + innerW}
                y2={H / 2}
                stroke="rgba(0,132,255,0.06)"
                strokeWidth="0.5"
                filter="url(#glow-line)"
              />
            )}

        {/* Vertical branch lines from each node to center horizontal */}
        {nodePositions.map((pos, i) => {
          const isTopRow = rows > 1 && pos.y < coreY;
          const isBottomRow = rows > 1 && pos.y > coreY;
          if (isTopRow || isBottomRow) {
            return (
              <line
                key={`vb-${i}`}
                x1={pos.x}
                y1={pos.y}
                x2={pos.x}
                y2={coreY}
                stroke="rgba(0,132,255,0.04)"
                strokeWidth="0.5"
                strokeDasharray="4 4"
                filter="url(#glow-line)"
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
              filter="url(#glow-line)"
            />
          );
        })}

        {/* Data flow particles along connections */}
        {nodePositions.filter((_, i) => i % 2 === 0).map((pos, i) => {
          const dx = coreX - pos.x;
          const dy = coreY - pos.y;
          const midX = (pos.x + coreX) / 2;
          const midY = (pos.y + coreY) / 2;
          return (
            <circle
              key={`particle-${i}`}
              r="1.5"
              fill="#0084FF"
              opacity="0.5"
              filter="url(#glow-node)"
            >
              <animateMotion
                dur={`${3 + i * 0.7}s`}
                repeatCount="indefinite"
                path={`M ${pos.x} ${pos.y} Q ${midX} ${midY - 10} ${coreX} ${coreY}`}
              />
            </circle>
          );
        })}

        {/* Core central node */}
        <circle
          cx={coreX}
          cy={coreY}
          r="18"
          fill="url(#core-gradient)"
          filter="url(#glow-core)"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="16;20;16"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx={coreX}
          cy={coreY}
          r="4"
          fill="#0084FF"
          opacity="0.8"
          filter="url(#glow-node)"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Node dots at each card position */}
        {nodePositions.map((pos, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r="3"
              fill="#0084FF"
              opacity="0.25"
              filter="url(#glow-node)"
            >
              <animate
                attributeName="opacity"
                values="0.15;0.5;0.15"
                dur={`${2.5 + (i % 3) * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
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
