"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* All before/after facts are drawn from existing client testimonials — nothing invented */
const ROWS = [
  {
    beforeKey: "receipt_r1_before",
    afterKey: "receipt_r1_after",
    quoteKey: "testimonial1_quote",
    nameKey: "testimonial1_name",
    roleKey: "testimonial1_role",
  },
  {
    beforeKey: "receipt_r2_before",
    afterKey: "receipt_r2_after",
    quoteKey: "testimonial2_quote",
    nameKey: "testimonial2_name",
    roleKey: "testimonial2_role",
  },
  {
    beforeKey: "receipt_r3_before",
    afterKey: "receipt_r3_after",
    quoteKey: "testimonial3_quote",
    nameKey: "testimonial3_name",
    roleKey: "testimonial3_role",
  },
  {
    beforeKey: "receipt_r4_before",
    afterKey: "receipt_r4_after",
    quoteKey: "testimonial4_quote",
    nameKey: "testimonial4_name",
    roleKey: "testimonial4_role",
  },
  {
    beforeKey: "receipt_r5_before",
    afterKey: "receipt_r5_after",
    quoteKey: "testimonial5_quote",
    nameKey: "testimonial5_name",
    roleKey: "testimonial5_role",
  },
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 relative"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-8 sm:mb-12"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] block mb-4">
            {t.receipt_kicker}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.receipt_title}
          </h2>
        </motion.div>

        {/* Compact stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-12"
        >
          {[t.testimonials_stat1, t.testimonials_stat2, t.testimonials_stat3].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-[11px] sm:text-xs font-medium text-[var(--text-secondary)]"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Editorial before → after rows */}
        <div>
          {ROWS.map((row, i) => (
            <motion.div
              key={row.nameKey}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="py-5 sm:py-6 border-t border-[var(--border)] last:border-b"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-2">
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-mono font-semibold tracking-[0.18em] text-[var(--text-muted)] mb-1">
                    {t.receipt_before}
                  </span>
                  <span className="text-base sm:text-lg font-medium text-[var(--text-muted)] line-through decoration-[var(--text-muted)]/50">
                    {t[row.beforeKey as keyof typeof t]}
                  </span>
                </div>

                <svg
                  className="w-5 h-5 text-[var(--accent)] shrink-0 rtl-flip hidden sm:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg
                  className="w-5 h-5 text-[var(--accent)] shrink-0 rotate-90 sm:hidden"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-mono font-semibold tracking-[0.18em] text-[var(--accent)] mb-1">
                    {t.receipt_after}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    {t[row.afterKey as keyof typeof t]}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-1.5">
                &ldquo;{t[row.quoteKey as keyof typeof t]}&rdquo;
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">
                <span className="text-[var(--text-secondary)] font-medium">
                  {t[row.nameKey as keyof typeof t]}
                </span>
                {" · "}
                {t[row.roleKey as keyof typeof t]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
