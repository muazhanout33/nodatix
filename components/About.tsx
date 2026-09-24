"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { BookCallButton } from "./BookCallButton";
import { FreeStructureButton } from "./FreeStructureButton";
import { useI18n } from "@/lib/i18n";

const highlights = [
  { valueKey: "about_highlight1_value", labelKey: "about_highlight1_label" },
  { valueKey: "about_highlight2_value", labelKey: "about_highlight2_label" },
  { valueKey: "about_highlight3_value", labelKey: "about_highlight3_label" },
];

const TOOLS = [
  { file: "n8n.svg", name: "n8n" },
  { file: "make.svg", name: "Make" },
  { file: "openai.svg", name: "OpenAI" },
  { file: "langchain.svg", name: "LangChain" },
  { file: "zapier.svg", name: "Zapier" },
  { file: "gohighlevel.png", name: "GoHighLevel" },
  { file: "python.svg", name: "Python" },
  { file: "meta.svg", name: "Meta" },
  { file: "googleads.svg", name: "Google Ads" },
];

function logoMaskStyle(file: string): CSSProperties {
  const maskUrl = `url(/logos/${file})`;
  return {
    WebkitMaskImage: maskUrl,
    maskImage: maskUrl,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };
}

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
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

          <div className="mt-7 sm:mt-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {t.about_stats_label}
              </span>
              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  className="card-premium p-3 sm:p-4 text-center"
                >
                  <div className="text-lg sm:text-2xl font-bold text-[var(--text-primary)]">{t[h.valueKey as keyof typeof t]}</div>
                  <div className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5 sm:mt-1 leading-tight">{t[h.labelKey as keyof typeof t]}</div>
                </motion.div>
              ))}
            </div>
          </div>

        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {t.about_tech_title}
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-5">
            {t.about_tech_desc}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-4">
            {TOOLS.map((tool) => (
              <li key={tool.name} className="group flex items-center" title={tool.name}>
                <span
                  role="img"
                  aria-label={tool.name}
                  className="block w-6 h-6 sm:w-7 sm:h-7 bg-current text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-200"
                  style={logoMaskStyle(tool.file)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
