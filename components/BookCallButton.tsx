"use client";

import { PopupButton } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/muazomohamed2006/30min";

export function BookCallButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  const rootElement = typeof document !== "undefined" ? document.body : null;

  return (
    <PopupButton
      url={CALENDLY_URL}
      text="Book a Call"
      rootElement={rootElement as unknown as HTMLElement}
      className={className}
      // @ts-expect-error - onClick supported at runtime
      onClick={onClick}
    />
  );
}