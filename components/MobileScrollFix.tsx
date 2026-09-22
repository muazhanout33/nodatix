"use client";

import { useEffect } from "react";

export default function MobileScrollFix() {
  useEffect(() => {
    const isMobile = () => window.innerWidth < 640;
    if (!isMobile()) return;

    const containers = new Map<
      Element,
      { startX: number; startY: number; decided: boolean; horizontal: boolean }
    >();

    const onTouchStart = (e: TouchEvent) => {
      const target = (e.target as Element).closest(".mobile-scroll");
      if (!target) return;

      containers.set(target, {
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        decided: false,
        horizontal: false,
      });
    };

    const onTouchMove = (e: TouchEvent) => {
      const target = (e.target as Element).closest(".mobile-scroll");
      if (!target) return;

      const state = containers.get(target);
      if (!state) return;

      if (!state.decided) {
        const dx = Math.abs(e.touches[0].clientX - state.startX);
        const dy = Math.abs(e.touches[0].clientY - state.startY);

        if (dx > 8 || dy > 8) {
          state.decided = true;
          state.horizontal = dx > dy;
        }
      }

      if (state.decided && !state.horizontal) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (_e: TouchEvent) => {
      const target = (_e.target as Element).closest(".mobile-scroll");
      if (target) {
        containers.delete(target);
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return null;
}
