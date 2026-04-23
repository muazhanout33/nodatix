"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="booking" className="py-28 px-6 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0084FF] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#0084FF]/20 bg-[#0084FF]/5">
            Get Started
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Book a{" "}
            <span className="gradient-text">Free Strategy Call</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Let&apos;s talk about your business and identify exactly which
            automation systems would have the biggest impact — no commitment required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gradient-border rounded-2xl bg-[#000000] overflow-hidden"
        >
          {/* Calendly embed placeholder */}
          <div className="flex flex-col items-center justify-center py-20 px-8 gap-6">
            {/* Calendly UI simulation */}
            <div className="w-16 h-16 rounded-2xl bg-[#0084FF]/10 border border-[#0084FF]/20 flex items-center justify-center text-3xl">
              📅
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-lg mb-1">
                Schedule a 30-min Strategy Call
              </p>
              <p className="text-gray-400 text-sm">
                Pick a date & time that works for you
              </p>
            </div>

            {/* Fake time slots */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {["Mon 14 Apr", "Tue 15 Apr", "Wed 16 Apr", "Thu 17 Apr", "Fri 18 Apr", "Mon 21 Apr"].map(
                (slot) => (
                  <button
                    key={slot}
                    className="px-3 py-2 rounded-lg border border-[rgba(0,132,255,0.2)] text-xs text-gray-400 hover:border-[#0084FF]/40 hover:text-[#0084FF] transition-all duration-200 text-center"
                  >
                    {slot}
                  </button>
                )
              )}
            </div>

            <a
              href="https://calendly.com/YOUR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#0084FF] text-black font-bold text-base hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03] active:scale-95 mt-2"
              style={{ boxShadow: "0 0 30px rgba(0,132,255,0.25)" }}
            >
              Book Your Free Call →
            </a>
            <p className="text-gray-600 text-xs">
              No credit card required · 100% free · Calendly powered
            </p>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
        >
          {["✓ No commitment", "✓ Learn what's possible", "✓ Custom roadmap included"].map((item) => (
            <span key={item} className="flex items-center gap-1">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
