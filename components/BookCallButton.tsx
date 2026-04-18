"use client";

import { useEffect } from "react";
import { PopupButton } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/muazomohamed2006/30min";

export function BookCallButton({ className, onClick }: { className?: string; onClick?: () => void }) {

  useEffect(() => {
    if (typeof document === "undefined") return;

    const existing = document.getElementById("calendly-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <PopupButton
      url={CALENDLY_URL}
      text="Book a Call"
      rootElement={typeof document !== "undefined" ? document.body : undefined}
      className={className}
      // @ts-expect-error
      onClick={() => {
        if (onClick) onClick();

        setTimeout(() => {
          document.body.click();
        }, 0);
      }}
    />
  );
}
