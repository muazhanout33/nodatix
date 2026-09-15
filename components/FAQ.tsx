"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is AI Automation?",
    answer:
      "AI Automation is using artificial intelligence tools — like ChatGPT, n8n, and Zapier — to handle repetitive business tasks automatically. This includes replying to customers, sending emails, generating leads, and managing workflows, all without manual effort.",
  },
  {
    question: "How can automation help my business?",
    answer:
      "Automation frees your team from time-consuming tasks by handling things like customer support replies, lead generation, email marketing campaigns, and social media posting — so you can focus on growth instead of operations.",
  },
  {
    question: "How much does automation cost?",
    answer:
      "Pricing depends on your business needs and the complexity of the system. Simple automations can start at a low budget, while advanced AI-powered workflows are scoped and priced based on integrations and tools required.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely. In fact, business automation is one of the most powerful advantages for small and medium-sized businesses — it lets them compete with larger companies without needing a large team.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We use a modern tech stack including n8n for workflow automation, Zapier and Make for integrations, OpenAI APIs for AI-driven tasks, Google Sheets, CRMs, and leading email marketing platforms.",
  },
  {
    question: "How does digital marketing automation work?",
    answer:
      "We combine proven digital marketing strategies with automation tools to capture leads automatically, send personalized email sequences, track customer behavior, and run campaigns with minimal manual effort.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most automation systems are ready within a few days to a few weeks, depending on the scope and complexity of your business requirements.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card-premium overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer relative z-10"
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-base pr-4">
          {faq.question}
        </span>
        <span
          className={`text-[var(--accent)] text-xl flex-shrink-0 transition-transform duration-300 ${
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
            <div className="px-6 pb-6 text-[var(--text-secondary)] text-sm leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-4 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Everything you need to know about AI automation and how we can help
            your business grow.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
