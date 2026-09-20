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
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.testimonials_title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            {t.testimonials_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-premium p-6 group"
            >
              <div className="card-sweep" />
              <div className="card-icon w-9 h-9 text-[var(--accent)] text-lg mb-4 relative z-10">
                &ldquo;
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm relative z-10">
                {t[testimonial.quoteKey as keyof typeof t]}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)] relative z-10">
                <div className="card-icon w-9 h-9 text-[var(--text-muted)] font-semibold text-xs">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-medium text-sm">
                    {t[testimonial.nameKey as keyof typeof t]}
                  </div>
                  <div className="text-[var(--text-muted)] text-xs">
                    {t[testimonial.roleKey as keyof typeof t]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)]"
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
