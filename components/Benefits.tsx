"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Benefits() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const shifts = [
    { from: t.benefits_s1_from, to: t.benefits_s1_to },
    { from: t.benefits_s2_from, to: t.benefits_s2_to },
    { from: t.benefits_s3_from, to: t.benefits_s3_to },
    { from: t.benefits_s4_from, to: t.benefits_s4_to },
    { from: t.benefits_s5_from, to: t.benefits_s5_to },
  ];

  return (
    <section id="benefits" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] block mb-4 sm:mb-5">
            {t.benefits_shift_kicker}
          </span>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.benefits_shift_title}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {shifts.map((shift, i) => (
            <motion.div
              key={shift.from}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.14, ease: EASE }}
              className="flex items-center gap-3 sm:gap-5 py-4 sm:py-6 border-t border-[var(--border)] last:border-b"
            >
              <span className="relative text-sm sm:text-xl font-bold uppercase tracking-wide text-[var(--text-muted)] shrink-0 min-w-[6.5rem] sm:min-w-[10rem]">
                {shift.from}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.14, ease: EASE }}
                  className="absolute left-0 right-0 top-1/2 h-px bg-[var(--text-muted)] shift-line"
                  aria-hidden="true"
                />
              </span>

              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)] shrink-0 rtl-flip"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <span className="text-base sm:text-2xl font-bold uppercase tracking-wide text-[var(--text-primary)] grow">
                <span className="relative inline-block">
                  {shift.to}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.14, ease: EASE }}
                    className="absolute left-0 -bottom-1 h-0.5 bg-[var(--accent)] shift-line"
                    style={{ width: "100%" }}
                    aria-hidden="true"
                  />
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 1.15, ease: EASE }}
          className="mt-12 sm:mt-16"
        >
          <p
            className="text-xl sm:text-3xl font-bold text-[var(--text-secondary)] leading-tight mb-1.5"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.benefits_shift_end1}
          </p>
          <p
            className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.benefits_shift_end2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
