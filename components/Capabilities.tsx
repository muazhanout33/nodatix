"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const INTERVAL_MS = 2400;

export default function Capabilities() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const words = [t.cap_w1, t.cap_w2, t.cap_w3, t.cap_w4, t.cap_w5, t.cap_w6];

  useEffect(() => {
    if (!inView || paused) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [inView, paused, words.length]);

  return (
    <section
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] block mb-6 sm:mb-8"
        >
          {t.cap_kicker}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-secondary)] leading-tight text-center"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.cap_lead}
          </span>

          <span
            className="relative inline-flex items-center justify-center min-w-[10ch] sm:min-w-[12ch] h-[1.4em] sm:h-[1.3em] overflow-hidden"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={words[index]}
                initial={{ y: "60%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-60%", opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight"
                style={{ color: "var(--accent)", fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* Indicators — tap targets on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="flex items-center justify-center gap-2 mt-8 sm:mt-10"
          role="tablist"
          aria-label={t.cap_kicker}
        >
          {words.map((word, i) => (
            <button
              key={word}
              role="tab"
              aria-selected={i === index}
              aria-label={word}
              onClick={() => setIndex(i)}
              className="w-8 h-8 flex items-center justify-center group"
            >
              <span
                className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i === index ? "var(--accent)" : "var(--text-muted)",
                  transform: i === index ? "scale(1.4)" : "scale(1)",
                  opacity: i === index ? 1 : 0.5,
                }}
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
