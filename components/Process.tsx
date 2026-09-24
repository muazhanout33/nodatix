"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Scatter offsets — pieces drift in and snap into the grid */
const SCATTER = [
  { x: -28, y: -18, r: -4 },
  { x: 24, y: -26, r: 3 },
  { x: -16, y: 22, r: 5 },
  { x: 30, y: 14, r: -3 },
  { x: -24, y: 8, r: 2 },
  { x: 18, y: -12, r: -5 },
];

export default function Process() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pieces = [
    t.process_p1,
    t.process_p2,
    t.process_p3,
    t.process_p4,
    t.process_p5,
    t.process_p6,
  ];

  return (
    <section id="process" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] block mb-4 sm:mb-5">
            {t.process_kicker}
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.process_title}
          </h2>
        </motion.div>

        {/* Pieces assembling into one system */}
        <div className="relative">
          {/* Desktop connecting lines */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <motion.line
              x1="16.6%" y1="50%" x2="50%" y2="50%"
              stroke="var(--border-accent)" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
            />
            <motion.line
              x1="50%" y1="50%" x2="83.3%" y2="50%"
              stroke="var(--border-accent)" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
            />
          </svg>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative">
            {pieces.map((piece, i) => {
              const s = SCATTER[i];
              return (
                <motion.div
                  key={piece}
                  initial={{ opacity: 0, x: s.x, y: s.y, rotate: s.r }}
                  animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
                  transition={{ duration: 0.75, delay: 0.35 + i * 0.12, ease: EASE }}
                  className="relative rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-5 sm:px-5 sm:py-7 text-center"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <span
                    className="absolute top-2 start-2.5 text-[9px] font-mono text-[var(--text-muted)]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] sm:text-sm font-bold font-mono tracking-widest uppercase text-[var(--text-primary)]">
                    {piece}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Unified system bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.45, ease: EASE }}
          className="mt-4 sm:mt-5 h-px bg-[var(--border-accent)] origin-center"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6, ease: EASE }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p
            className="text-xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight mb-1.5"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.process_end1}
          </p>
          <p
            className="text-base sm:text-xl font-medium text-[var(--text-muted)] leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.process_end2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
