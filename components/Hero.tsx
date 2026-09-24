"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { BookCallButton } from "./BookCallButton";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Hero = memo(function Hero() {
  const { t } = useI18n();
  const lines = [
    t.services_final_l1,
    t.services_final_l2,
    t.services_final_l3,
    t.services_final_l4,
    t.services_final_l5,
  ];

  return (
    <section className="relative min-h-[92svh] sm:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] mb-6 sm:mb-8"
        >
          {t.services_kicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
          className="text-[2.1rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 sm:mb-12"
          style={{ color: "var(--text-primary)", fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
          {t.services_title}
        </motion.h1>

        <div className="max-w-xl mb-8 sm:mb-12">
          {lines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.1, ease: EASE }}
              className="flex items-center gap-3 sm:gap-4 py-2 sm:py-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-lg text-[var(--text-secondary)] leading-snug">
                {line}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
          className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)] mb-8 sm:mb-12"
          style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
          {t.services_final_connect}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.2, ease: EASE }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
        >
          <BookCallButton className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            {t.hero_cta_book}
          </BookCallButton>
          <a href="#services" className="btn-ghost px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium">
            {t.hero_cta_how} &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
