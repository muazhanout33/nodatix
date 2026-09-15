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
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            From the blog
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            Practical guides on AI automation, workflow systems, and marketing
            growth — built for business owners who want results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="card-premium p-6 group cursor-pointer"
            >
              <div className="card-sweep" />
              <span className="card-tag inline-block text-xs text-[var(--text-muted)] font-medium px-3 py-1 rounded-full mb-4 relative z-10">
                {post.tag}
              </span>
              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug relative z-10">
                {post.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
