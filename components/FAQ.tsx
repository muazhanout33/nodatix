"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqKeys = [
  { q: "faq_q1", a: "faq_a1" },
  { q: "faq_q2", a: "faq_a2" },
  { q: "faq_q3", a: "faq_a3" },
  { q: "faq_q4", a: "faq_a4" },
  { q: "faq_q5", a: "faq_a5" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useI18n();

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 relative"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] block mb-4">
            {t.faq_kicker}
          </span>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2 leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.faq_title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">{t.faq_subtitle}</p>
        </div>

        {/* Editorial list — questions as conversation, not cards */}
        <div>
          {faqKeys.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="border-t border-[var(--border)] last:border-b">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 sm:py-6 text-start cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-3 sm:gap-4 min-w-0">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] mt-1.5 shrink-0" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-base sm:text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200"
                      style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
                    >
                      {t[faq.q as keyof typeof t]}
                    </span>
                  </span>
                  <span
                    className="text-[var(--accent)] text-lg sm:text-xl shrink-0 transition-transform duration-300 mt-0.5"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 sm:pb-6 ps-8 sm:ps-9 pe-8 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                        {t[faq.a as keyof typeof t]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
