"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

const blogPosts = [
  {
    titleKey: "blog_post1_title",
    excerptKey: "blog_post1_excerpt",
    tagKey: "blog_post1_tag",
  },
  {
    titleKey: "blog_post2_title",
    excerptKey: "blog_post2_excerpt",
    tagKey: "blog_post2_tag",
  },
  {
    titleKey: "blog_post3_title",
    excerptKey: "blog_post3_excerpt",
    tagKey: "blog_post3_tag",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

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
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            {t.blog_title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            {t.blog_subtitle}
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
                {t[post.tagKey as keyof typeof t]}
              </span>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug relative z-10">
                {t[post.titleKey as keyof typeof t]}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                {t[post.excerptKey as keyof typeof t]}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
