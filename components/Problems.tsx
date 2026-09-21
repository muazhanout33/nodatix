"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Problems() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 6c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
        </svg>
      ),
      title: t.problems_p1_title,
      description: t.problems_p1_desc,
      pain: t.problems_p1_pain,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
      ),
      title: t.problems_p2_title,
      description: t.problems_p2_desc,
      pain: t.problems_p2_pain,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: t.problems_p3_title,
      description: t.problems_p3_desc,
      pain: t.problems_p3_pain,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.52-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
        </svg>
      ),
      title: t.problems_p4_title,
      description: t.problems_p4_desc,
      pain: t.problems_p4_pain,
    },
  ];

  return (
    <section id="problems" className="py-16 sm:py-28 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <span className="inline-block text-xs text-[var(--danger)] font-semibold uppercase tracking-wider mb-4 px-3 py-1 rounded-full border border-[var(--danger)]/20 bg-[var(--danger)]/5">
            {t.problems_kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.problems_title_1} <span className="text-[var(--accent)]">{t.problems_title_accent}</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.problems_subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-premium p-4 sm:p-6 group relative"
            >
              <div className="card-sweep" />
              <div className="absolute top-5 right-5 text-5xl font-bold text-[var(--text-primary)] opacity-5 select-none z-0">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="card-icon w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-5 relative z-10 text-[var(--danger)]">
                {problem.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 relative z-10" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
                {problem.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 relative z-10">
                {problem.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[var(--accent)] font-medium relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {problem.pain}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-secondary)] text-sm">
            {t.problems_cta}{" "}
            <a href="#services" className="text-[var(--accent)] hover:underline font-medium transition-colors">
              {t.problems_cta_link}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
