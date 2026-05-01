"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";

const testimonials = [
  {
    quote: "ScalaryX built us a system that runs everything 24/7. We used to spend 3 days finding clients, now it takes less than 15 minutes. Honestly one of the best investments we've made.",
    name: "Ahmed Mahmoud",
    role: "CEO, Tech Company",
    initials: "AM",
  },
  {
    quote: "Working with ScalaryX saved us an insane amount of time and effort. Tasks that used to take hours are now fully automated and done in seconds. Really high-quality work.",
    name: "Sara Gamal",
    role: "Marketing Manager, Creative Agency",
    initials: "SG",
  },
  {
    quote: "The system they built reduced our errors to almost zero and connected all the tools we use together. Very professional work, highly recommended for anyone serious about scaling.",
    name: "Mostafa Kamal",
    role: "E-commerce Founder",
    initials: "MK",
  },
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-28 px-6 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0084FF] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#0084FF]/20 bg-[#0084FF]/5">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real results from businesses using ScalaryX automation systems
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group gradient-border rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] p-6 hover:bg-[#000000] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#0084FF]/10 flex items-center justify-center text-[#0084FF] text-xl mb-4">
                "
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                {testimonial.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,132,255,0.15)]">
                <div className="w-10 h-10 rounded-full bg-[#0084FF]/20 flex items-center justify-center text-[#0084FF] font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="gradient-border rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] overflow-hidden"
        >
          <div className="flex flex-col items-center justify-center py-16 px-8 text-center gap-4">
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Ready to get <span className="gradient-text">similar results?</span>
            </h3>
            <p className="text-gray-400 max-w-md mx-auto mb-2">
              Let's build your automation system
            </p>
            <BookCallButton className="px-8 py-4 rounded-xl bg-[#0084FF] text-black font-bold text-base hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03] active:scale-95 mt-2" />
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
        >
          {["✓ 50+ Automations Built", "✓ 10k+ Hours Saved", "✓ 12+ Industries Served"].map((item) => (
            <span key={item} className="flex items-center gap-1">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}