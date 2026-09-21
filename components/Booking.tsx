"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";
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

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section id="testimonials" className="py-10 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.testimonials_title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            {t.testimonials_subtitle}
          </p>
        </motion.div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-5 mb-12 sm:mb-20">
          <div className="mobile-scroll sm:!flex sm:!overflow-visible sm:!scroll-snap-none sm:!gap-0 sm:!pb-0">
            {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-premium p-4 sm:p-6 group"
            >
              <div className="card-sweep" />
              <div className="card-icon w-7 h-7 sm:w-9 sm:h-9 text-[var(--accent)] text-base sm:text-lg mb-3 sm:mb-4 relative z-10">
                &ldquo;
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm relative z-10">
                {t[testimonial.quoteKey as keyof typeof t]}
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-[var(--border)] relative z-10">
                <div className="card-icon w-8 h-8 sm:w-9 sm:h-9 text-[var(--text-muted)] font-semibold text-[10px] sm:text-xs">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-medium text-xs sm:text-sm">
                    {t[testimonial.nameKey as keyof typeof t]}
                  </div>
                  <div className="text-[var(--text-muted)] text-[10px] sm:text-xs">
                    {t[testimonial.roleKey as keyof typeof t]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-[var(--text-muted)]"
        >
          {[t.testimonials_stat1, t.testimonials_stat2, t.testimonials_stat3].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
