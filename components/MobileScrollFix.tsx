"use client";

import { useEffect } from "react";

export default function MobileScrollFix() {
  useEffect(() => {
    if (window.innerWidth >= 640) return;

    const attached = new WeakSet<Element>();
    const cleanups: (() => void)[] = [];

    function attach(el: HTMLElement) {
      if (attached.has(el)) return;
      attached.add(el);

      let startX = 0;
      let startY = 0;
      let decided = false;
      let horizontal = false;

      const onTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        decided = false;
        horizontal = false;
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!decided) {
          const dx = Math.abs(e.touches[0].clientX - startX);
          const dy = Math.abs(e.touches[0].clientY - startY);
          if (dx > 8 || dy > 8) {
            decided = true;
            horizontal = dx > dy;
          }
        }

        if (decided && !horizontal) {
          e.preventDefault();
        }
      };

      el.addEventListener("touchstart", onTouchStart, { passive: true });
      el.addEventListener("touchmove", onTouchMove, { passive: false });

      cleanups.push(() => {
        el.removeEventListener("touchstart", onTouchStart);
        el.removeEventListener("touchmove", onTouchMove);
      });
    }

    document.querySelectorAll<HTMLElement>(".mobile-scroll").forEach(attach);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("mobile-scroll")) attach(node);
            node.querySelectorAll<HTMLElement>(".mobile-scroll").forEach(attach);
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
