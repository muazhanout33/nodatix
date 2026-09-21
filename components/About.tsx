"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";
import { FreeStructureButton } from "./FreeStructureButton";
import { useI18n } from "@/lib/i18n";

const highlights = [
  { valueKey: "about_highlight1_value", labelKey: "about_highlight1_label" },
  { valueKey: "about_highlight2_value", labelKey: "about_highlight2_label" },
  { valueKey: "about_highlight3_value", labelKey: "about_highlight3_label" },
];

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-10 sm:py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.about_title}
          </h2>
          <div className="space-y-3 sm:space-y-4 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            <p>{t.about_p1}</p>
            <p>{t.about_p2}</p>
            <p>{t.about_p3}</p>
            <p>{t.about_p4}</p>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            <BookCallButton className="btn-primary" />
            <FreeStructureButton className="btn-secondary" />
            <a href="#services" className="btn-ghost">
              {t.about_cta_services}
            </a>
          </div>
        </motion.div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="card-premium p-3 sm:p-4 text-center"
            >
              <div className="text-base sm:text-xl font-bold text-[var(--text-primary)]">{t[h.valueKey as keyof typeof t]}</div>
              <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5 sm:mt-1 leading-tight">{t[h.labelKey as keyof typeof t]}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {["n8n", "Make.com", "OpenAI", "LangChain", "Zapier", "GoHighLevel", "Python", "Meta Ads", "Google Ads"].map((tag) => (
            <span
              key={tag}
              className="card-tag px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
