"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Deterministic chaos offsets — controlled tension, no randomness at runtime */
const CHAOS: Array<{ x: string; y: string; r: number; d: number; s: number }> = [
  { x: "6%", y: "4%", r: -7, d: 0, s: 1.05 },
  { x: "52%", y: "0%", r: 5, d: 0.12, s: 0.9 },
  { x: "22%", y: "34%", r: -3, d: 0.24, s: 1.15 },
  { x: "58%", y: "30%", r: 8, d: 0.36, s: 0.85 },
  { x: "2%", y: "62%", r: 4, d: 0.48, s: 0.95 },
  { x: "44%", y: "64%", r: -6, d: 0.6, s: 1.1 },
  { x: "18%", y: "88%", r: 3, d: 0.72, s: 0.88 },
];

export default function Problems() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const words = [
    t.problems_noise_w1,
    t.problems_noise_w2,
    t.problems_noise_w3,
    t.problems_noise_w4,
    t.problems_noise_w5,
    t.problems_noise_w6,
    t.problems_noise_w7,
  ];

  return (
    <section id="problems" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto relative">
        {/* Calm statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] block mb-5 sm:mb-7">
            {t.problems_noise_kicker}
          </span>
          <p
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-3"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.problems_noise_calm1}
          </p>
          <p
            className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--text-muted)]"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.problems_noise_calm2}
          </p>
        </motion.div>

        {/* Chaos field — absolute on desktop, wrapped jitter on mobile */}
        <div className="relative mb-14 sm:mb-24">
          {/* Desktop chaos */}
          <div className="hidden sm:block relative h-72 md:h-80" aria-hidden="true">
            {words.map((word, i) => {
              const c = CHAOS[i];
              const dx = (i % 2 ? 1 : -1) * (12 + i * 2);
              const dy = (i % 3 ? -1 : 1) * (8 + i * 2);
              return (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, x: -dx * 0.5, y: -dy * 0.5, rotate: 0, filter: "blur(6px)" }}
                  animate={
                    inView
                      ? {
                          opacity: [0, 0.95, 0.6],
                          x: [-dx * 0.5, 0, dx],
                          y: [-dy * 0.5, 0, dy],
                          rotate: [0, c.r, c.r * 1.5],
                          filter: ["blur(6px)", "blur(0px)", "blur(1.2px)"],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2.6,
                    delay: 0.55 + c.d,
                    ease: EASE,
                    times: [0, 0.35, 1],
                  }}
                  className="absolute font-bold uppercase tracking-tight text-[var(--text-primary)] whitespace-nowrap select-none"
                  style={{
                    left: c.x,
                    top: c.y,
                    fontSize: `clamp(1.1rem, ${c.s * 2.4}vw, 2.4rem)`,
                    opacity: 0.85 - i * 0.06,
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>

          {/* Mobile chaos — wrapped, jittered, no overflow */}
          <div className="flex sm:hidden flex-wrap justify-center gap-x-3 gap-y-4" aria-hidden="true">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 12, rotate: 0 }}
                animate={inView ? { opacity: 0.75, y: 0, rotate: CHAOS[i].r * 0.7 } : {}}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.1, ease: EASE }}
                className="font-bold uppercase tracking-tight text-[var(--text-primary)]"
                style={{ fontSize: ["1rem", "0.85rem", "1.15rem", "0.9rem", "1.05rem", "0.8rem", "1rem"][i] }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Resolve */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 2.1, ease: EASE }}
          className="text-center"
        >
          <div className="w-10 h-px bg-[var(--accent)] mx-auto mb-6 sm:mb-8" aria-hidden="true" />
          <p
            className="text-xl sm:text-3xl md:text-4xl font-bold text-[var(--text-secondary)] leading-tight mb-2"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.problems_noise_resolve1}
          </p>
          <p
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.problems_noise_resolve2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
