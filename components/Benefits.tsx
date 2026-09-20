"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "benefits_b1_title",
    descKey: "benefits_b1_desc",
    stat: "80%",
    statKey: "benefits_b1_stat",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titleKey: "benefits_b2_title",
    descKey: "benefits_b2_desc",
    stat: "3X",
    statKey: "benefits_b2_stat",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "benefits_b3_title",
    descKey: "benefits_b3_desc",
    stat: "~0",
    statKey: "benefits_b3_stat",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    titleKey: "benefits_b4_title",
    descKey: "benefits_b4_desc",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: "benefits_b5_title",
    descKey: "benefits_b5_desc",
    stat: "60%",
    statKey: "benefits_b5_stat",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titleKey: "benefits_b6_title",
    descKey: "benefits_b6_desc",
  },
];

export default function Benefits() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="badge-brand mb-4 inline-flex">
            {t.benefits_kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.benefits_title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            {t.benefits_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium p-6 group relative overflow-hidden"
            >
              <div className="card-sweep" />
              <div className="absolute top-4 right-4 text-4xl font-bold text-[var(--text-primary)] opacity-5 select-none z-0">
                {benefit.stat}
              </div>

              <div className="card-icon w-11 h-11 mb-4 group-hover:text-[var(--accent)] transition-colors duration-300 relative z-10">
                {benefit.icon}
              </div>

              {benefit.stat && (
                <div className="flex items-baseline gap-2 mb-1 relative z-10">
                  <span className="text-xl font-bold text-[var(--text-primary)]">
                    {benefit.stat}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    {t[benefit.statKey as keyof typeof t]}
                  </span>
                </div>
              )}

              <h3 className="text-base font-semibold text-[var(--text-primary)] mt-2 mb-2 relative z-10">
                {t[benefit.titleKey as keyof typeof t]}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                {t[benefit.descKey as keyof typeof t]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
