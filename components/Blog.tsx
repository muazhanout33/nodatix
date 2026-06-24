"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blogPosts = [
  {
    title: "How AI Automation Is Transforming Small Businesses in 2026",
    excerpt:
      "Discover how smart workflow automation tools like n8n and Zapier are helping small businesses save hours every week and scale faster than ever.",
    tag: "AI Automation",
  },
  {
    title: "The Complete Guide to n8n Workflow Automation for Growing Companies",
    excerpt:
      "Learn how n8n automation connects your favorite tools, eliminates manual tasks, and creates powerful business systems — without writing complex code.",
    tag: "n8n Automation",
  },
  {
    title: "Marketing Automation Strategies That Actually Drive Revenue",
    excerpt:
      "Explore proven digital marketing automation tactics that capture leads, nurture prospects, and turn traffic into paying customers on autopilot.",
    tag: "Marketing Automation",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#0084FF] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs text-[#0084FF] font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#0084FF]/20 bg-[#0084FF]/5">
            Blog
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Practical guides on AI automation, workflow systems, and marketing
            growth — built for business owners who want results.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-6 rounded-2xl border border-[#1E3A5F] bg-[#0F1B2D] backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-[#2F6BFF]/40 hover:shadow-[0_0_30px_rgba(47,107,255,0.12)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              <span className="inline-block text-xs text-[#0084FF] font-medium px-3 py-1 rounded-full bg-[#0084FF]/10 border border-[#0084FF]/20 mb-4">
                {post.tag}
              </span>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#5A9BFF] transition-colors duration-300 leading-snug">
                {post.title}
              </h3>
              <p className="text-[#8899B0] text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
