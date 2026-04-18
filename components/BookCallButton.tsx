"use client";

import { useEffect } from "react";
import { PopupButton } from "react-calendly";

const CALENDLY_URL =
  "https://calendly.com/muazomohamed2006/30min";

export default function BookCallButton({
  className = "",
}: {
  className?: string;
}) {
  useEffect(() => {
    if (document.getElementById("calendly-script")) return;

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src =
      "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const rootElement =
    typeof window !== "undefined" ? document.body : undefined;

  return (
    <PopupButton
      url={CALENDLY_URL}
      text="Book a Call"
      rootElement={rootElement as HTMLElement}
      className={className}
    />
  );
}
