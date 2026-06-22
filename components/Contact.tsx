"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(47,107,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 35% 30% at 40% 45%, rgba(90,155,255,0.04) 0%, transparent 55%),
            linear-gradient(180deg, transparent 0%, rgba(6,6,8,0.4) 50%, transparent 100%)
          `,
        }}
      />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#0084FF] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#0084FF]/20 bg-[#0084FF]/5">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Let&apos;s Start{" "}
            <span className="gradient-text">Building</span>{" "}
            Together
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Have a question or want to explore what automation or marketing could do for your business?
            Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-5 flex flex-col items-center">
            {[
              {
                icon: "📧",
                label: "Email",
                value: "scalaryx@gmail.com",
                href: "mailto:scalaryx@gmail.com",
              },
              {
                icon: "💬",
                label: "Response Time",
                value: "Within 24 hours",
                href: null,
              },
              {
                icon: "🌍",
                label: "Available",
                value: "Worldwide · Remote",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-lg shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-[#0084FF] transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}