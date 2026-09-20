"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BookCallButton } from "./BookCallButton";
import { useI18n } from "@/lib/i18n";

const highlights = [
  { valueKey: "about_highlight1_value", labelKey: "about_highlight1_label" },
  { valueKey: "about_highlight2_value", labelKey: "about_highlight2_label" },
  { valueKey: "about_highlight3_value", labelKey: "about_highlight3_label" },
];

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
              {t.about_title}
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>{t.about_p1}</p>
              <p>{t.about_p2}</p>
              <p>{t.about_p3}</p>
              <p>{t.about_p4}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookCallButton className="btn-primary" />
              <a href="#services" className="btn-ghost">
                {t.about_cta_services}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="card-premium p-6 group relative">
                <div className="card-sweep" />
                <div className="relative flex flex-col items-center z-10">
                  <div className="w-full aspect-square max-h-48 rounded-2xl overflow-hidden border border-white/[0.06] mb-5 group-hover:border-[var(--border-accent)] transition-all duration-300">
                    <Image
                      src="/muaznew.jpeg"
                      alt="Muaz Hanout - AI Automation Specialist at ScalaryX"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full text-center">
                    <h3 className="text-lg font-semibold text-white tracking-tight">Muaz Hanout</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-[var(--accent)] font-medium text-sm">{t.about_muaz_role}</p>
                      <p className="text-[var(--text-muted)] text-xs mt-2">{t.founder_label}</p>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed border-t border-white/[0.06] pt-4 mt-4 text-center max-w-xs">
                    &quot;{t.about_muaz_quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <a
                      href="https://www.instagram.com/muazhanout?igsh=ZXllYzJlaDN6N3dq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-muted)] hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muaz-hanout-1ba11b327/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-muted)] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    <a
                      href="https://wa.me/201004983587"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-muted)] hover:text-[var(--success)] hover:border-[var(--success)]/30 transition-all duration-200"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-premium p-6 group relative">
                <div className="card-sweep" />
                <div className="relative flex flex-col items-center z-10">
                  <div className="w-full aspect-square max-h-48 rounded-2xl overflow-hidden border border-white/[0.06] mb-5 group-hover:border-[var(--border-accent)] transition-all duration-300">
                    <Image
                      src="/Omarprofile.webp"
                      alt="Omar Gamal - Digital Marketing Specialist at ScalaryX"
                      width={384}
                      height={384}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-full text-center">
                    <h3 className="text-lg font-semibold text-white tracking-tight">Omar Gamal</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-[var(--accent)] font-medium text-sm">{t.about_omar_role}</p>
                      <p className="text-[var(--text-muted)] text-xs mt-2">{t.founder_label}</p>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed border-t border-white/[0.06] pt-4 mt-4 text-center max-w-xs">
                    &quot;{t.about_omar_quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <a
                      href="https://wa.me/201067822800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-muted)] hover:text-[var(--success)] hover:border-[var(--success)]/30 transition-all duration-200"
                      aria-label="WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                    <a
                      href="https://www.instagram.com/omar_nassaar?igsh=MW9ldHJjZzFxdTR4aw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-muted)] hover:text-[#E4405F] hover:border-[#E4405F]/30 transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/omar-gamal-nassar?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[var(--text-muted)] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card-premium p-4 text-center"
                >
                  <div className="text-xl font-bold text-white">{t[h.valueKey as keyof typeof t]}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 leading-tight">{t[h.labelKey as keyof typeof t]}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["n8n", "Make.com", "OpenAI", "LangChain", "Zapier", "GoHighLevel", "Python", "Meta Ads", "Google Ads"].map((tag) => (
                <span
                  key={tag}
                  className="card-tag px-3 py-1 rounded-full text-xs text-[var(--text-muted)]"
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
