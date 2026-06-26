"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NetworkOverlay from "./NetworkOverlay";

const benefits = [
  {
    icon: "⏱️",
    title: "Save 50–80% of Your Time",
    description:
      "Replace hours of manual work with automated systems that execute tasks in seconds — freeing your team to focus on high-impact activities.",
    stat: "80%",
    statLabel: "Time Saved",
  },
  {
    icon: "📈",
    title: "Increase Productivity",
    description:"Your AI systems work 24/7, never take breaks, and handle multiple workflows simultaneously — multiplying your team's output without multiplying headcount.",
    stat: "3X", 
    statLabel: "Error Rate",
  },
  {
    icon: "✅",
    title: "Reduce Human Errors",
    description:
      "Automated workflows follow rules precisely every time. No forgotten follow-ups, no copy-paste mistakes, no inconsistencies in your data or messaging.",
    stat: "~0",
    statLabel: "Error Rate",
  },
  {
    icon: "📈",
    title: "Higher ROI",
    description:
      "Stop guessing, start growing. Every dollar you spend is tracked, optimized, and turned into measurable results.",
  },
  {
    icon: "💰",
    title: "Cut Operational Costs",
    description:
      "Replace repetitive human labor with intelligent automation. Reduce overhead, eliminate bottlenecks, and scale your business without scaling your expenses.",
    stat: "60%",
    statLabel: "Cost Reduction",
  },
  {
    icon: "🎯",
    title: "Laser-Sharp Targeting",
    description:
      "Reach the exact people who need your product — by age, interest, behavior, and location.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="py-28 px-6 relative cyber-network">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-[#0084FF] opacity-[0.04] blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <NetworkOverlay columns={3} />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#00cfff]/20 bg-[#0084FF]/5">
            Why Automate
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The <span className="gradient-text">Benefits</span> Are Clear
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every business that implements AI automation gains a compounding
            advantage over competitors who are still doing things manually.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium p-6 group relative overflow-hidden"
            >
              <div className="card-sweep" />
              {/* Stat watermark */}
              <div className="absolute top-4 right-4 text-5xl font-black text-[#2F6BFF]/5 select-none z-0">
                {benefit.stat}
              </div>

              <div className="card-icon w-11 h-11 text-lg mb-4 group-hover:bg-[#2F6BFF]/25 transition-colors duration-300 relative z-10">
                {benefit.icon}
              </div>

              <div className="flex items-baseline gap-2 mb-1 relative z-10">
                <span className="text-2xl font-black text-[#5A9BFF]">
                  {benefit.stat}
                </span>
                <span className="text-xs text-[#6B7A8D] uppercase tracking-wider">
                  {benefit.statLabel}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-2 mb-2 relative z-10">
                {benefit.title}
              </h3>
              <p className="text-[#8899B0] text-sm leading-relaxed relative z-10">
                {benefit.description.replace(/&apos;/g, "'")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
