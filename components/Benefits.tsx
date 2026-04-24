"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    description:
      "Your AI systems work 24/7, never take breaks, and handle multiple workflows simultaneously — multiplying your team's output without multiplying headcount.",
    stat: "3×",
    statLabel: "Output Boost",
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
    icon: "💡",
    title: "Smarter Decision Making",
    description:
      "AI agents surface insights, patterns, and opportunities from your data — giving you a real-time view of your business that humans simply can&apos;t process manually.",
    stat: "10×",
    statLabel: "Better Insights",
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
    icon: "🚀",
    title: "Scale Without Limits",
    description:
      "AI systems don&apos;t have a cap. Whether you&apos;re handling 10 leads or 10,000, the system performs the same — so you grow without friction or growing pains.",
    stat: "∞",
    statLabel: "Scalability",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="py-28 px-6 relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-[#0084FF] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
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
              className="group p-6 rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] border border-[rgba(0,132,255,0.2)] hover:border-[#00cfff]/25 transition-all duration-300 relative overflow-hidden"
            >
              {/* Stat watermark */}
              <div className="absolute top-4 right-4 text-5xl font-black text-[#0084FF]/5 select-none">
                {benefit.stat}
              </div>

              <div className="w-11 h-11 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-lg mb-4 group-hover:bg-[#0084FF]/20 transition-colors duration-300">
                {benefit.icon}
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-black text-[#0084FF]">
                  {benefit.stat}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {benefit.statLabel}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-2 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description.replace(/&apos;/g, "'")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
