"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 relative overflow-hidden">
      <div ref={ref} className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xl sm:text-3xl md:text-4xl font-medium text-[var(--text-muted)] leading-snug mb-3"
          style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
          {t.cta_l1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-snug mb-4"
          style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
          {t.cta_l2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.7, ease: EASE }}
          className="text-lg sm:text-2xl font-semibold text-[var(--accent)] mb-8 sm:mb-12"
          style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
        >
          {t.cta_l3}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.95, ease: EASE }}
          className="flex flex-col items-center gap-5"
        >
          <BookCallButton className="btn-primary px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base">
            {t.hero_cta_book}
          </BookCallButton>

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--text-muted)]">
            <a
              href="mailto:scalaryx@gmail.com"
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              scalaryx@gmail.com
            </a>
            <span className="w-px h-3 bg-[var(--border)]" aria-hidden="true" />
            <a
              href="https://wa.me/201105920342"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors duration-200 dir-ltr"
            >
              01105920342
            </a>
            <span className="hidden sm:inline w-px h-3 bg-[var(--border)]" aria-hidden="true" />
            <span className="hidden sm:inline">{t.contact_response_value}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
