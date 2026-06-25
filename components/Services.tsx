"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NetworkOverlay from "./NetworkOverlay";

const services = [
  {
    icon: "⚙️",
    title: "AI Automation Systems",
    description:
      "End-to-end business automation pipelines that eliminate manual work. We design, build, and deploy AI workflows that run 24/7 — reducing costs and boosting output.",
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
      "We build data-driven marketing systems designed to generate consistent, scalable growth. From ad campaigns to conversion funnels, every step is optimized to turn traffic into real revenue.",
    tag: "Core Service",
  },
  {
    icon: "🎯",
    title: "Paid Ads & Lead Generation",
    description:
      "We run high-performance ad campaigns that bring you qualified leads — not just traffic — while maximizing your ROI across Meta and Google.",
    tag: "Growth Engine",
  },
  {
    icon: "✍️",
    title: "Content Marketing Strategy",
    description:
      "We create strategic content that builds trust, increases engagement, and positions your brand as the obvious choice in your market.",
    tag: "Content & Branding",
  },
  {
    icon: "📊",
    title: "Funnels & Optimization",
    description:
      "We design conversion-focused funnels that turn visitors into customers by testing, analyzing, and optimizing every step of the journey.",
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
      className="card-premium p-6 cursor-default group"
    >
      <div className="card-sweep" />
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="card-icon w-12 h-12 text-xl group-hover:bg-[#2F6BFF]/25 transition-colors duration-300">
          {service.icon}
        </div>
        <span className="card-tag text-xs text-[#5A9BFF] font-medium px-3 py-1 rounded-full">
          {service.tag}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#5A9BFF] transition-colors duration-300 relative z-10">
        {service.title}
      </h3>
      <p className="text-[#8899B0] text-sm leading-relaxed relative z-10">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 px-6 relative overflow-hidden cyber-network">
      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 40% at 30% 50%, rgba(47,107,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 35% at 70% 40%, rgba(61,125,255,0.04) 0%, transparent 55%),
            linear-gradient(180deg, transparent 0%, rgba(6,6,8,0.5) 50%, transparent 100%)
          `,
        }}
      />
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-[#0084FF] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <NetworkOverlay columns={4} rows={2} />
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
            We build n8n automation and marketing automation systems that replace
            repetitive human work — saving time, cutting costs, and scaling your
            business on autopilot.
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
