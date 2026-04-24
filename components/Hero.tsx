"use client";

import { motion, type Variants } from "framer-motion";

const floatVariants: Variants = {
  animate: {
    y: [0, -16, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#00cfff 1px, transparent 1px), linear-gradient(90deg, #00cfff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0084FF] opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0084FF] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Floating badges */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-36 right-[10%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000] border border-[rgba(0,132,255,0.2)] text-xs text-gray-400"
      >
        <span className="w-2 h-2 rounded-full bg-[#0084FF] animate-pulse" />
        AI Automation Active
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-40 left-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#000000] border border-[rgba(0,132,255,0.2)] text-xs text-gray-400"
      >
        <span className="text-[#0084FF]">⚡</span>
        80% Time Saved
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT: existing content */}
          <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00cfff]/30 bg-[#0084FF]/5 text-[#0084FF] text-xs font-medium mb-8 tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
            AI Automation Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight mb-6 text-white"
          >
             Scale your business{" "}
            <span className="gradient-text">faster with AI Automation</span>& Performance Marketing 
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Automate your operations and scale your brand with high-performance systems.
          </motion.p>

          {/* 🔥 NEW: Service Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          >

            {/* AI Automation Card */}
            <div className="p-6 rounded-2xl border border-[rgba(0,132,255,0.2)] bg-[#0a0a0a] hover:border-[#0084FF] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                🤖 AI Automation
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Automate repetitive tasks, manage workflows, and streamline your operations using smart AI systems — so you can focus on growth.
              </p>
            </div>

            {/* Marketing Card */}
            <div className="p-6 rounded-2xl border border-[rgba(0,132,255,0.2)] bg-[#0a0a0a] hover:border-[#0084FF] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">
                📈 Digital Marketing
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Grow your brand, attract qualified leads, and convert attention into customers using data-driven marketing strategies.
              </p>
            </div>

          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#booking"
              className="group relative px-8 py-4 rounded-xl bg-[#0084FF] text-black font-bold text-base hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03]"
              style={{ boxShadow: "0 0 30px rgba(0,132,255,0.3)" }}
            >
              Book a Free Call →
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-xl border border-[rgba(0,132,255,0.2)] text-gray-300 hover:text-white transition"
            >
              See Services
            </a>
          </motion.div>
          </div>

          {/* RIGHT: logo image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img 
              src="/logo2.jpeg" 
              alt="Logo" 
              width={450} 
              height={450} 
              className="object-contain"
            />
          </div>

        </div>
      </div>

      {/* Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </section>
  );
}