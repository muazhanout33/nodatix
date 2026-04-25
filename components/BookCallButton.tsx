"use client";

import { PopupButton } from "react-calendly";
import { useEffect } from "react";

const CALENDLY_URL =
  "https://calendly.com/muazomohamed2006/30min";

function getRootElement() {
  if (typeof document === "undefined") return undefined;
  return document.body;
}

export function BookCallButton({
  className,
  onClick,
}: {
  className?: string;
onClick?: () => void;
  }) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "script";
    link.href = "https://assets.calendly.com/assets/external/widget.js";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <PopupButton
      url={CALENDLY_URL}
      text="Book a Call"
      rootElement={getRootElement() as HTMLElement}
      className={className}
      // @ts-expect-error - onClick is not in types but supported at runtime
      onClick={onClick}
    />
  );
}
