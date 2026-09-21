"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const faqKeys = [
  { q: "faq_q1", a: "faq_a1" },
  { q: "faq_q2", a: "faq_a2" },
  { q: "faq_q3", a: "faq_a3" },
  { q: "faq_q4", a: "faq_a4" },
  { q: "faq_q5", a: "faq_a5" },
  { q: "faq_q6", a: "faq_a6" },
  { q: "faq_q7", a: "faq_a7" },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card-premium overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer relative z-10"
        aria-expanded={isOpen}
      >
        <span className="text-[var(--text-primary)] font-semibold text-sm sm:text-base pr-3 sm:pr-4">
          {question}
        </span>
        <span
          className={`text-[var(--accent)] text-lg sm:text-xl flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <section id="faq" className="py-16 sm:py-28 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <span className="badge-brand mb-4 inline-flex">
            {t.faq_kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.faq_title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            {t.faq_subtitle}
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqKeys.map((faq, i) => (
            <FAQItem
              key={i}
              question={t[faq.q as keyof typeof t]}
              answer={t[faq.a as keyof typeof t]}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
