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
            "linear-gradient(#00FF87 1px, transparent 1px), linear-gradient(90deg, #00FF87 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#00FF87] opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#00ccff] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Floating badge */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-36 right-[10%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1117] border border-[#1e2433] text-xs text-gray-400"
      >
        <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
        AI Automation Active
      </motion.div>

      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute bottom-40 left-[8%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1117] border border-[#1e2433] text-xs text-gray-400"
      >
        <span className="text-[#00FF87]">⚡</span>
        80% Time Saved
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF87]/30 bg-[#00FF87]/5 text-[#00FF87] text-xs font-medium mb-8 tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
          AI Automation Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.08] tracking-tight mb-6 text-white"
        >
          We help businesses{" "}
          <span className="gradient-text">save time</span> and scale
          using{" "}
          <span className="gradient-text">AI Automation</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Automate repetitive tasks, manage leads, and generate content
          using smart AI systems — so you can focus on what actually grows your business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="group relative px-8 py-4 rounded-xl bg-[#00FF87] text-black font-bold text-base hover:bg-[#00cc6a] transition-all duration-200 hover:scale-[1.03] active:scale-95"
            style={{ boxShadow: "0 0 30px rgba(0,255,135,0.3)" }}
          >
            Book a Free Call
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-[#1e2433] text-gray-300 font-medium text-base hover:border-[#00FF87]/40 hover:text-white transition-all duration-200"
          >
            See Our Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "80%", label: "Time Saved" },
            { value: "3x", label: "Faster Growth" },
            { value: "0", label: "Human Errors" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#00FF87] glow-text">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08090d] to-transparent pointer-events-none" />
    </section>
  );
}
