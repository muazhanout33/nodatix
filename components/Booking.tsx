"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";
import NetworkOverlay from "./NetworkOverlay";

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
  {
    quote: "ScalaryX helped us significantly improve our ad performance. Our campaigns are now optimized automatically, which reduced our ad costs and made results much faster and more efficient.",
    name: "Youssef Laila",
    role: "Performance Marketing Lead",
    initials: "YL",
  },
  {
    quote: "One of the biggest changes for us was marketing automation. We now save a huge amount of time on reporting and monitoring, and everything runs faster, cleaner, and more efficiently.",
    name: "Nour Reda",
    role: "Digital Marketing Manager",
    initials: "NR",
  },
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden cyber-network">
      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 45% 35% at 60% 45%, rgba(47,107,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 35% 30% at 40% 55%, rgba(90,155,255,0.04) 0%, transparent 55%),
            linear-gradient(180deg, transparent 0%, rgba(6,6,8,0.4) 50%, transparent 100%)
          `,
        }}
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0084FF] opacity-[0.04] blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <NetworkOverlay columns={3} />
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
              className="card-premium p-6 group"
            >
              <div className="card-sweep" />
              {/* Quote Icon */}
              <div className="card-icon w-10 h-10 text-[#5A9BFF] text-xl mb-4 relative z-10">
                "
              </div>

              {/* Quote Text */}
              <p className="text-[#B0BEC5] leading-relaxed mb-6 text-sm relative z-10">
                {testimonial.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(0,132,255,0.08)] relative z-10">
                <div className="card-icon w-10 h-10 text-[#5A9BFF] font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-[#6B7A8D] text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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