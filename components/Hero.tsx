"use client";

import { motion, type Variants } from "framer-motion";
import { BookCallButton } from "./BookCallButton";

const floatVariants: Variants = {
  animate: {
    y: [0, -16, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 60% 45%, rgba(47,107,255,0.12) 0%, rgba(61,125,255,0.06) 40%, transparent 70%),
            radial-gradient(ellipse 40% 35% at 55% 50%, rgba(90,155,255,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 80% 60% at 40% 55%, rgba(47,107,255,0.05) 0%, transparent 65%),
            linear-gradient(180deg, #060608 0%, #0B0D12 40%, #111318 100%)
          `,
        }}
      />

      {/* Soft Radial Glow */}
      <div
        className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(47,107,255,0.10) 0%, rgba(61,125,255,0.05) 35%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating badges */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-36 right-[10%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000] border border-[rgba(0,132,255,0.2)] text-xs text-gray-400"
      >
        <span className="w-2 h-2 rounded-full bg-[#0084FF] animate-pulse" />
      AI Automation & Marketing Active
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-40 left-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000] border border-[rgba(0,132,255,0.2)] text-xs text-gray-400"
      >
        <span className="text-[#0084FF]">⚡</span>
        Workflow Automation Active
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00cfff]/30 bg-[#0084FF]/5 text-[#0084FF] text-xs font-medium mb-8 tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
            AI Automation &amp; Workflow Systems
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight mb-6 text-white"
        >
          AI Automation &amp; Marketing{" "}
          <span className="gradient-text">Systems</span>{" "}
          For Growing Businesses
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
        We build intelligent n8n workflows that save hours of manual work,
         streamline operations, and support high-performing 
         marketing strategies — so you can focus on growth while automation handles the rest.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <BookCallButton className="group relative w-1/2 px-6 py-4  rounded-xl bg-[#0084FF] text-black font-bold text-xs hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03]">
            Get Your Free Automation Audit
          </BookCallButton>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-[rgba(0,132,255,0.2)] text-gray-300 hover:text-white transition"
          >
            See How It Works →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* AI Automation Card */}
          <div className="card-premium p-6">
            <div className="card-sweep" />
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">
              🤖 AI Automation
            </h3>
            <p className="text-[#8899B0] leading-relaxed text-sm relative z-10">
              Automate repetitive tasks, manage workflows, and streamline your operations using smart AI systems — so you can focus on growth.
            </p>
          </div>
          {/* Marketing Card */}
          <div className="card-premium p-6">
            <div className="card-sweep" />
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">
              📈 Digital Marketing
            </h3>
            <p className="text-[#8899B0] leading-relaxed text-sm relative z-10">
              Grow your brand, attract qualified leads, and convert attention into customers using data-driven marketing strategies.
            </p>
          </div>
       </motion.div>

      </div>

      {/* Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}