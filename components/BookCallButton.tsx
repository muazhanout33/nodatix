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

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal("init", {
        origin: "https://cal.com",
      });
      window.Cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <button
      data-cal-link={CAL_URL}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={onClick}
    >
      Book a Call
    </button>
  );
}
