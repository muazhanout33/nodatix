"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "⚙️",
    title: "AI Automation Systems",
    description:
      "End-to-end automation pipelines that eliminate manual work. We design, build, and deploy AI workflows that run 24/7 — reducing costs and boosting output.",
    tag: "Core Service",
  },
  {
    icon: "🎯",
    title: "Lead Management Automation",
    description:
      "Never lose a lead again. Our AI systems capture, qualify, follow up, and nurture prospects automatically — keeping your pipeline full without lifting a finger.",
    tag: "CRM & Sales",
  },
  {
    icon: "✍️",
    title: "Content Automation",
    description:
      "Generate high-quality blog posts, social captions, emails, and ad copy at scale using AI. Stay consistent and visible across every channel effortlessly.",
    tag: "Marketing",
  },
  {
    icon: "🤖",
    title: "Custom AI Agents",
    description:
      "Bespoke AI agents trained on your business data — from customer support bots to internal assistants that handle tasks your team shouldn't spend time on.",
    tag: "Advanced AI",
  },
  {
    icon: "📣",
    title: "Performance Digital Marketing Systems",
    description:
      "Data-driven marketing systems built to generate consistent growth. We create and optimize campaigns, funnels, and content strategies that turn attention into real revenue.",
    tag: "Core Service",
  },
  {
    icon: "🎯",
    title: "Paid Ads & Lead Generation",
    description:
      "High-performance ad campaigns designed to attract the right audience, generate qualified leads, and maximize ROI across platforms like Meta and Google.",
    tag: "Growth Engine",
  },
  {
    icon: "✍️",
    title: "Content Marketing Strategy",
    description:
      "Strategic content systems that build brand awareness and trust. From social media content to ad creatives, we ensure your brand stays visible and impactful.",
    tag: "Content & Branding",
  },
  {
    icon: "📊",
    title: "Funnels & Optimization",
    description:
      "We design and optimize conversion funnels that turn traffic into customers. Every step is tracked, tested, and improved for maximum performance.",
    tag: "Conversion Focus",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="gradient-border group relative p-6 rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] hover:bg-[#000000] transition-all duration-300 cursor-default"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-[#0084FF]/10 flex items-center justify-center text-xl group-hover:bg-[#0084FF]/20 transition-colors duration-300">
          {service.icon}
        </div>
        <span className="text-xs text-[#0084FF] font-medium px-3 py-1 rounded-full bg-[#0084FF]/10 border border-[#0084FF]/20">
          {service.tag}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0084FF] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* hover glow line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#0084FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-6 relative">
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-[#0084FF] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#0084FF]/20 bg-[#0084FF]/5">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We build AI systems that replace repetitive human work — saving
            time, cutting costs, and scaling your business on autopilot.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
