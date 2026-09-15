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
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Results
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Real results from businesses using ScalaryX automation systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
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
              <div className="card-icon w-9 h-9 text-[var(--accent)] text-lg mb-4 relative z-10">
                &ldquo;
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06] relative z-10">
                <div className="card-icon w-9 h-9 text-[var(--text-muted)] font-semibold text-xs">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-[var(--text-muted)] text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-muted)]"
        >
          {["50+ Automations Built", "10k+ Hours Saved", "12+ Industries Served"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
