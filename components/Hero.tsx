"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { BookCallButton } from "./BookCallButton";
import { FreeStructureButton } from "./FreeStructureButton";
import { useI18n } from "@/lib/i18n";

const Hero = memo(function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--hero-gradient)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="badge-brand mb-8 inline-flex"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          {t.hero_kicker}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          style={{ color: "var(--text-primary)", fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
            {t.hero_title_1}{" "}
          <span className="text-[var(--accent)]">{t.hero_title_accent}</span>{" "}
          {t.hero_title_2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero_subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <BookCallButton className="btn-primary px-8 py-4 text-base">
            {t.hero_cta_book}
          </BookCallButton>
          <FreeStructureButton className="btn-secondary px-8 py-4 text-base" />
          <a href="#projects" className="btn-ghost px-6 py-4 text-sm font-medium">
            {t.hero_cta_how} &rarr;
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          <div className="card-premium p-6 text-start">
            <div className="card-sweep" />
            <div className="relative z-10">
              <div className="card-icon w-11 h-11 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 0 1-5.982-2.275M12 21a8.966 8.966 0 0 0 5.982-2.275M15.75 3.186a24.286 24.286 0 0 1 2.25.082m-10 0c-.251-.023-.501-.05-.75-.082m10 0c.251.023.501.05.75.082" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
                {t.hero_card1_title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {t.hero_card1_desc}
              </p>
            </div>
          </div>
          <div className="card-premium p-6 text-start">
            <div className="card-sweep" />
            <div className="relative z-10">
              <div className="card-icon w-11 h-11 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7h-6m6 0v6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
                {t.hero_card2_title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {t.hero_card2_desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
});

export default Hero;
