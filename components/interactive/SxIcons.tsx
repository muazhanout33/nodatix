export default function SxIcons() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <g id="i-user">
          <circle cx="12" cy="8" r="4" />
          <path d="M4.5 20.5c1-4 4-6 7.5-6s6.5 2 7.5 6" />
        </g>
        <g id="i-users">
          <circle cx="9" cy="8.5" r="3.5" />
          <path d="M2.8 20c.7-3.5 3.2-5.3 6.2-5.3s5.5 1.8 6.2 5.3M16 5.4a3.5 3.5 0 0 1 0 6.2M17.8 14.9c2 .7 3.1 2.3 3.5 4.6" />
        </g>
        <g id="i-target">
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" />
        </g>
        <g id="i-cart">
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="17.5" cy="20" r="1.4" />
          <path d="M3 3.5h2.5L8 15h10.5l2.5-8.5H6" />
        </g>
        <g id="i-invoice">
          <path d="M6 2.5h12v19l-3-2-3 2-3-2-3 2z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
        </g>
        <g id="i-cash">
          <rect x="2.5" y="6" width="19" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.6" />
          <path d="M6 9.5v.01M18 14.5v.01" />
        </g>
        <g id="i-chart">
          <path d="M4 20V10M10 20V4M16 20v-8M21 20H3" />
        </g>
        <g id="i-box">
          <path d="M12 2.7l8.5 4.6v9.4L12 21.3 3.5 16.7V7.3z" />
          <path d="M3.5 7.3L12 12l8.5-4.7M12 12v9.3" />
        </g>
        <g id="i-db">
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </g>
        <g id="i-zap">
          <path d="M13 2.5L4.5 13.5H11L10 21.5l8.5-11H12z" />
        </g>
        <g id="i-spark">
          <path d="M12 3l1.9 5.6L20 10l-6.1 1.4L12 17l-1.9-5.6L4 10l6.1-1.4z" />
        </g>
        <g id="i-link">
          <path d="M10 14a4.5 4.5 0 0 0 6.4.4l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.5 1.5M14 10a4.5 4.5 0 0 0-6.4-.4l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.5-1.5" />
        </g>
        <g id="i-arrow-ur">
          <path d="M6 18L18 6M9 6h9v9" />
        </g>
        <g id="i-alert">
          <path d="M12 3.5L22 20H2z" />
          <path d="M12 10v4.5M12 17.4v.2" />
        </g>
        <g id="i-check">
          <path d="M4.5 12.5l5 5L19.5 7" />
        </g>
        <g id="i-x">
          <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
        </g>
        <g id="i-ig">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.2"
            cy="6.8"
            r="1.1"
            fill="currentColor"
            stroke="none"
          />
        </g>
        <g id="i-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </g>
        <g id="i-moon">
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        </g>
        <g id="i-mail">
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M3.5 7l8.5 6 8.5-6" />
        </g>
        <g id="i-wa">
          <path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3z" />
          <path d="M8.8 8.8c-.3.8-.3 2 .6 3.5 1 1.7 2.4 2.9 4.3 3.6 1.4.5 2.4.3 3-.4l.5-.8-2.1-1.3-1 .8c-1-.4-1.9-1.2-2.5-2.3l.8-1-1.2-2.1z" />
        </g>
        <g id="i-sheet">
          <rect x="4" y="3.5" width="16" height="17" rx="2" />
          <path d="M4 9.5h16M4 15h16M9.5 9.5V20.5M15 9.5V20.5" />
        </g>
      </defs>
    </svg>
  );
}

export function Icon({
  name,
  size = 18,
  color,
  className,
}: {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <use href={`#${name}`} />
    </svg>
  );
}
