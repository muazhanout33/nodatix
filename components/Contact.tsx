"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "scalaryx@gmail.com",
    href: "mailto:scalaryx@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: "Available",
    value: "Worldwide · Remote",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Get in touch
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            Have a question or want to explore what automation or marketing could do for your business?
            Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12"
        >
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="card-premium p-5 group"
            >
              <div className="card-sweep" />
              <div className="relative flex flex-col items-center text-center gap-3 z-10">
                <div className="card-icon w-10 h-10 text-[var(--accent)] group-hover:bg-[var(--accent)]/10 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-[var(--accent)] transition-colors font-medium text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium text-sm">{item.value}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[var(--surface)]"
        >
          <div className="relative z-10 flex flex-col items-center text-center py-12 px-8 gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to get started?
            </h3>
            <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-2">
              Let&apos;s build your automation system
            </p>
            <BookCallButton className="btn-primary px-8 py-4 text-base mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
