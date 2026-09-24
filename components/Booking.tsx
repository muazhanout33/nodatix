"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

const testimonials = [
  {
    quoteKey: "testimonial1_quote",
    nameKey: "testimonial1_name",
    roleKey: "testimonial1_role",
    initials: "AM",
  },
  {
    quoteKey: "testimonial2_quote",
    nameKey: "testimonial2_name",
    roleKey: "testimonial2_role",
    initials: "SG",
  },
  {
    quoteKey: "testimonial3_quote",
    nameKey: "testimonial3_name",
    roleKey: "testimonial3_role",
    initials: "MK",
  },
  {
    quoteKey: "testimonial4_quote",
    nameKey: "testimonial4_name",
    roleKey: "testimonial4_role",
    initials: "YL",
  },
  {
    quoteKey: "testimonial5_quote",
    nameKey: "testimonial5_name",
    roleKey: "testimonial5_role",
    initials: "NR",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-14 md:py-16 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-6 sm:mb-10"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3 leading-tight"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.testimonials_title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl">
            {t.testimonials_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10">
          <div className="mobile-scroll">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.nameKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="card-premium p-4 sm:p-5 group h-full"
              >
                <div className="card-sweep" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    <span className="card-tag px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)]">
                      {t[testimonial.roleKey as keyof typeof t]}
                    </span>
                    <span
                      className="text-[var(--accent)] text-lg leading-none opacity-60"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3 flex-1">
                    {t[testimonial.quoteKey as keyof typeof t]}
                  </p>
                  <div className="flex items-center gap-2.5 pt-2.5 sm:pt-3 border-t border-[var(--border)]">
                    <div className="card-icon w-7 h-7 sm:w-8 sm:h-8 text-[var(--text-muted)] font-semibold text-[10px] flex items-center justify-center shrink-0">
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[var(--text-primary)] font-medium text-xs sm:text-sm truncate">
                        {t[testimonial.nameKey as keyof typeof t]}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
        >
          {[t.testimonials_stat1, t.testimonials_stat2, t.testimonials_stat3].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-[var(--text-primary)]"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
