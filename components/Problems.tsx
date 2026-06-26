"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NetworkOverlay from "./NetworkOverlay";

const problems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 6c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
    ),
    title: "Drowning in Repetitive Work",
    description:
      "Your team wastes 25–40 hours every month on manual data entry, follow-ups, and repetitive operations — hours that smart AI automation systems can reclaim instantly.",
    pain: "Lost time = lost scalability",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    title: "Poor Lead Conversion & Follow-Up",
    description:
      "Leads go cold due to slow or inconsistent follow-ups. Every missed follow-up costs you revenue — potential customers slip away every single day without automation.",
    pain: "Missed follow-ups = lost revenue",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Slow Marketing & Content Execution",
    description:
      "Creating content, ads, and campaigns manually slows your growth. While you're stuck, competitors using AI-driven marketing systems are moving 3x faster and scaling harder.",
    pain: "Slow execution = weak market presence",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.52-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
    title: "Marketing Inefficiency",
    description:
      "Ad spend is wasted, content isn't consistent, and campaigns aren't optimized. You're getting traffic but not enough qualified leads or conversions. Bad marketing systems = high costs and low ROI.",
    pain: "Wasted spend = shrinking ROI",
  },
];

export default function Problems() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problems" className="py-28 px-6 relative cyber-network">
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-red-500 opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <NetworkOverlay columns={3} />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-[#ff6b4a] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#ff6b4a]/20 bg-[#ff6b4a]/5">
            ⚠ The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Sound{" "}
            <span className="text-[#00cfff]">Familiar?</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            These are the exact problems killing your growth every day.
            We&apos;ve built solutions for all of them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-premium p-7 group relative"
            >
              <div className="card-sweep" />
              <div className="absolute top-5 right-5 text-6xl font-black text-white/[0.03] select-none z-0">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="card-icon w-14 h-14 text-xl mb-5 relative z-10 text-[#ff6b4a]">
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                {problem.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 relative z-10">
                {problem.description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs text-[#00cfff] font-medium relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00cfff]" />
                {problem.pain}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 text-sm">
            We eliminate all of these — with systems built specifically for your business.{" "}
            <a href="#services" className="text-[#00cfff] hover:text-white transition-colors underline">
              See how →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
