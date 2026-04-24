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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-[#0084FF] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#00cfff]/20 bg-[#0084FF]/5">
              About ScalaryX
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Built by a specialist who{" "}
              <span className="gradient-text">lives and breathes</span> AI
            </h2>
          <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Hi, we&apos;re <span className="text-[#0084FF] font-semibold">Muaz Hanout and Omar Gamal</span> — two independent specialists helping businesses grow through modern digital systems.
              </p>
              <p>
                <span className="text-[#0084FF] font-semibold">Muaz</span> focuses on AI Automation, building smart systems that <span className="text-[#0084FF] font-semibold">replace manual work</span> and help businesses run <span className="text-[#0084FF] font-semibold">faster and more efficiently.</span>
              </p>
              <p>
                <span className="text-[#0084FF] font-semibold">Omar</span> specializes in Digital Marketing, creating <span className="text-[#0084FF] font-semibold">performance-driven strategies</span> that turn traffic into <span className="text-[#0084FF] font-semibold">real growth and revenue.</span>
              </p>
              <p>
                Together under <span className="text-[#0084FF] font-semibold">ScalaryX</span>, we help businesses scale using the power of <span className="text-[#0084FF] font-semibold">automation and marketing</span> — but each service is delivered <span className="text-[#0084FF] font-semibold">separately based on your needs.</span>
              </p>
              <p>
                Whether you need automation or marketing, <span className="text-[#0084FF] font-semibold">ScalaryX</span> is built to help you <span className="text-[#0084FF] font-semibold">grow faster</span> with modern, <span className="text-[#0084FF] font-semibold">results-driven systems.</span>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="px-6 py-3 rounded-xl bg-[#0084FF] text-black font-semibold text-sm hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03]"
              >
                Work With Me
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-xl border border-[rgba(0,132,255,0.2)] text-[#94a3b8] font-semibold text-sm hover:border-[#00cfff]/30 hover:text-white transition-all duration-200"
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
             {/* Profile cards - 2 column grid */}
<div className="grid grid-cols-2 gap-4">
  {/* Muaz card */}
  <div className="gradient-border p-6 rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] border border-[rgba(0,132,255,0.2)] shadow-sm flex flex-col items-center text-center">
    <div className="w-full aspect-square max-h-48 rounded-2xl bg-gradient-to-br from-[#00cfff] to-[#00cfff] flex items-center justify-center text-6xl font-black text-black mb-5">
      M
    </div>
    <div className="w-full">
      <div className="text-white font-bold text-lg">Muaz Hanout</div>
      <div className="text-[#0084FF] text-sm font-medium mt-1">AI Automation Specialist</div>
      <div className="text-[#0084FF] text-sm font-medium">Front-End Developer</div>
      <div className="text-[#94a3b8] text-xs mt-1">Founder @ ScalaryX</div>
    </div>
    <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[rgba(0,132,255,0.2)] pt-4 mt-4">
      &quot;I specialize in AI automation and build modern front-end interfaces to create complete, scalable systems.&quot;
    </p>
  </div>

  {/* Omar card */}
  <div className="gradient-border p-6 rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] border border-[rgba(0,132,255,0.2)] shadow-sm flex flex-col items-center text-center">
    <div className="w-full aspect-square max-h-48 rounded-2xl overflow-hidden border border-[rgba(0,132,255,0.3)] mb-5">
      <img
        src="/logo2.jpeg"
        alt="Omar Gamal"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full">
      <div className="text-white font-bold text-lg">Omar Gamal</div>
      <div className="text-[#0084FF] text-sm font-medium mt-1">Digital Marketing Specialist</div>
      <div className="text-[#94a3b8] text-xs mt-1">Founder @ ScalaryX</div>
    </div>
    <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[rgba(0,132,255,0.2)] pt-4 mt-4">
      &quot;My goal is simple — help businesses grow faster. The right marketing system turns attention into real, scalable revenue.&quot;
    </p>
  </div>
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
                  className="p-4 rounded-xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-center shadow-sm"
                >
                  <div className="text-2xl font-black text-[#0084FF]">{h.value}</div>
                  <div className="text-xs text-[#94a3b8] mt-1 leading-tight">{h.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["n8n", "Make.com", "OpenAI", "LangChain", "Zapier", "GoHighLevel", "Python" ,"Meta Ads" , "Google Ads"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-[rgba(0,132,255,0.2)] text-[#94a3b8] bg-[#000000]"
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
