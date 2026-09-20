"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";

const CAL_URL = "https://cal.com/scalary-x-4qdg27/scalaryx-meeting";

declare global {
  interface Window {
    Cal?: any;
  }
}

let calInitialized = false;

export function BookCallButton({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const { t } = useI18n();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || calInitialized || typeof window === "undefined") return;
    initialized.current = true;

    const loadCal = () => {
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
        calInitialized = true;
      };
      document.head.appendChild(script);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadCal();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    const el = document.querySelector("[data-cal-link]");
    if (el) {
      observer.observe(el);
    }

    return () => observer.disconnect();
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
      data-cal-link="scalary-x-4qdg27/scalaryx-meeting"
      data-cal-config='{"layout":"month_view"}'
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || t.book_btn_default}
    </a>
  );
}
