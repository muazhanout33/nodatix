"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "🔁",
    title: "Drowning in Repetitive Tasks",
    description:
      "Your team wastes hours every week on copy-paste work, manual data entry, follow-up emails, and repetitive processes that a well-built AI system could handle in seconds.",
    pain: "Wasted hours = lost revenue",
  },
  {
    icon: "📉",
    title: "Poor Lead Follow-Up",
    description:
      "Leads go cold because follow-ups are slow, inconsistent, or forgotten. Without automation, you're leaving money on the table — every single day.",
    pain: "Lost leads = lost sales",
  },
  {
    icon: "🐢",
    title: "Slow Content Production",
    description:
      "Creating blogs, emails, social posts, and ad copy manually is exhausting and time-consuming. Your competitors are using AI to publish 10x faster while you're stuck.",
    pain: "Slower content = weaker brand",
  },
];

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problems" className="py-28 px-6 relative">
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-red-500 opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-red-400 font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-red-400/20 bg-red-400/5">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Sound{" "}
            <span className="text-red-500">Familiar?</span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            These are the exact pain points slowing most businesses down.
            We&apos;ve built solutions for all of them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative p-7 rounded-2xl bg-[#000000] border border-[rgba(0,207,255,0.2)] hover:border-red-200 transition-all duration-300 shadow-sm"
            >
              {/* Problem number */}
              <div className="absolute top-5 right-5 text-6xl font-black text-white/[0.03] select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-12 h-12 rounded-xl bg-red-400/10 flex items-center justify-center text-xl mb-5">
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
                {problem.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-red-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                {problem.pain}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bridge line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#94a3b8] text-sm">
            We eliminate all of these — with systems built specifically for your business.{" "}
            <a href="#services" className="text-[#00cfff] hover:underline">
              See how →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
