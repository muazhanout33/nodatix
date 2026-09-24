"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { BookCallButton } from "./BookCallButton";
import { FreeStructureButton } from "./FreeStructureButton";
import { useI18n } from "@/lib/i18n";

const Hero = memo(function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[80svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-20">
      {/* Dynamic background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--hero-gradient)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6 pt-8 sm:pt-12"
          style={{ color: "var(--text-primary)", fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
            {t.hero_title_1}{" "}
          <span className="text-[var(--accent)]">{t.hero_title_accent}</span>{" "}
          {t.hero_title_2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 sm:mb-6 leading-relaxed"
        >
          {t.hero_subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
        >
          {t.hero_supporting}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <BookCallButton className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            {t.hero_cta_book}
          </BookCallButton>
          <FreeStructureButton className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base" />
          <a href="#projects" className="btn-ghost px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium">
            {t.hero_cta_how} &rarr;
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  );
});

export default Hero;
