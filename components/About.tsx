"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { label: "AI Automations Built", value: "50+" },
  { label: "Hours Saved for Clients", value: "10k+" },
  { label: "Industries Served", value: "12+" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-[#00ccff] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs text-[#00FF87] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#00FF87]/20 bg-[#00FF87]/5">
              About Nodatix
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Built by a specialist who{" "}
              <span className="gradient-text">lives and breathes</span> AI
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hi, I&apos;m <span className="text-white font-semibold">Moaaz Hanout</span> — a young AI Automation specialist
                on a mission to help businesses break free from manual, time-consuming processes.
              </p>
              <p>
                After discovering how powerful AI-driven automation could be, I dedicated myself to mastering
                tools and systems that replace human repetition with intelligent, always-on workflows. From
                lead management pipelines to fully custom AI agents — I build systems that do the work, so you
                don&apos;t have to.
              </p>
              <p>
                Nodatix was born from a simple belief: <span className="text-white">every business deserves to operate at the
                speed of AI.</span> Whether you&apos;re a solo founder or a growing team, I help you automate the
                tasks that are holding you back — and scale the ones that matter most.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="px-6 py-3 rounded-xl bg-[#00FF87] text-black font-semibold text-sm hover:bg-[#00cc6a] transition-all duration-200 hover:scale-[1.03]"
              >
                Work With Me
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-xl border border-[#1e2433] text-gray-300 font-semibold text-sm hover:border-[#00FF87]/30 hover:text-white transition-all duration-200"
              >
                See Services
              </a>
            </div>
          </motion.div>

          {/* Right: Stats + Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* Profile card */}
            <div className="gradient-border p-6 rounded-2xl bg-[#0f1117]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00FF87] to-[#00ccff] flex items-center justify-center text-2xl font-black text-black">
                  M
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Moaaz Hanout</div>
                  <div className="text-[#00FF87] text-sm font-medium">AI Automation Specialist</div>
                  <div className="text-gray-500 text-xs mt-0.5">Founder @ Nodatix</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-[#1e2433] pt-4">
                &quot;My goal is simple — help businesses do more with less. AI automation
                is the single biggest lever you can pull right now.&quot;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl bg-[#0f1117] border border-[#1e2433] text-center"
                >
                  <div className="text-2xl font-black text-[#00FF87]">{h.value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight">{h.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["n8n", "Make.com", "OpenAI", "LangChain", "Zapier", "GoHighLevel", "Python"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-[#1e2433] text-gray-400 bg-[#0f1117]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
