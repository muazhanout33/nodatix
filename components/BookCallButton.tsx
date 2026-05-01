"use client";

import { useEffect, useRef } from "react";

const CAL_URL = "https://cal.com/mezo-hanout-0qmbfk/scalaryx-meeting";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function BookCallButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || typeof window === "undefined") return;
    initialized.current = true;

    if (window.Cal) {
      wireCalButtons();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal("init", {
        origin: "https://cal.com",
      });
      wireCalButtons();
    };
    document.head.appendChild(script);
  }, []);

  const wireCalButtons = () => {
    window.Cal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.Cal) {
      e.preventDefault();
      window.Cal("ui", {
        action: "open",
        mode: "popup",
        calLink: CAL_URL.replace("https://cal.com/", ""),
        config: { layout: "month_view" },
      });
    }
    onClick?.();
  };

  return (
    <a
      href={CAL_URL}
      data-cal-link="mezo-hanout-0qmbfk/scalaryx-meeting"
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      Book a Call
    </a>
  );
}
