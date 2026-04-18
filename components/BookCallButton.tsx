"use client";

import { PopupButton } from "react-calendly";

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
