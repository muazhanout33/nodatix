"use client";


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookCallButton } from "./BookCallButton";

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
              <BookCallButton className="px-6 py-3 rounded-xl bg-[#0084FF] text-black font-semibold text-sm hover:bg-[#0066cc] transition-all duration-200 hover:scale-[1.03]" />
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
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {/* Muaz card */}
  <div className="group relative p-6 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-[rgba(0,132,255,0.15)] shadow-lg shadow-[#0084FF]/0 transition-all duration-300 hover:border-[rgba(0,132,255,0.35)] hover:shadow-[0_0_30px_rgba(0,132,255,0.08)]">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0084FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative flex flex-col items-center">
      <div className="w-full aspect-square max-h-48 rounded-2xl overflow-hidden border-2 border-[rgba(0,132,255,0.25)] mb-5 group-hover:border-[#0084FF]/60 group-hover:shadow-[0_0_20px_rgba(0,132,255,0.2)] transition-all duration-300">
        <img
          src="/Muazprofile.jpeg"
          alt="Muaz Hanout - AI Automation Specialist at ScalaryX"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="w-full text-center">
        <h3 className="text-xl font-bold text-white tracking-tight">Muaz Hanout</h3>
        <div className="mt-2 space-y-1">
          <p className="text-[#0084FF] font-semibold text-sm">AI Automation Specialist</p>
          <p className="text-[#0084FF] font-semibold text-sm">Front-End Developer</p>
          <p className="text-[#64748b] text-xs mt-2">Founder @ ScalaryX</p>
        </div>
      </div>
      <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[rgba(0,132,255,0.12)] pt-4 mt-4 text-center max-w-xs">
        "I specialize in AI automation and build modern front-end interfaces to create complete, scalable systems."
      </p>
      <div className="flex items-center gap-3 mt-5">
        <a
          href="https://www.instagram.com/muazhanout?igsh=ZXllYzJlaDN6N3dq"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-[#94a3b8] hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:scale-110 transition-all duration-200"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a
          href="https://www.linkedin.com/in/muaz-hanout-1ba11b327/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-[#94a3b8] hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:scale-110 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a
          href="https://wa.me/201004983587"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-[#94a3b8] hover:text-[#25D366] hover:border-[#25D366]/50 hover:scale-110 transition-all duration-200"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </div>
  </div>

  {/* Omar card */}
  <div className="group relative p-6 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-[rgba(0,132,255,0.15)] shadow-lg shadow-[#0084FF]/0 transition-all duration-300 hover:border-[rgba(0,132,255,0.35)] hover:shadow-[0_0_30px_rgba(0,132,255,0.08)]">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B1A]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative flex flex-col items-center">
      <div className="w-full aspect-square max-h-48 rounded-2xl overflow-hidden border-2 border-[rgba(0,132,255,0.25)] mb-5 group-hover:border-[#0084FF]/60 group-hover:shadow-[0_0_20px_rgba(0,132,255,0.2)] transition-all duration-300">
        <img
          src="/Omarprofile.jpeg"
          alt="Omar Gamal - Digital Marketing Specialist at ScalaryX"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full text-center">
        <h3 className="text-xl font-bold text-white tracking-tight">Omar Gamal</h3>
        <div className="mt-2 space-y-1">
          <p className="text-[#0084FF] font-semibold text-sm">Digital Marketing Specialist</p>
          <p className="text-[#64748b] text-xs mt-2">Founder @ ScalaryX</p>
        </div>
      </div>
      <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[rgba(0,132,255,0.12)] pt-4 mt-4 text-center max-w-xs">
        "I specialize in digital marketing — I build strategies that turn cold traffic into loyal customers and real revenue."
      </p>
      <div className="flex items-center gap-3 mt-5">
        <a
          href="https://wa.me/201067822800"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-[#94a3b8] hover:text-[#25D366] hover:border-[#25D366]/50 hover:scale-110 transition-all duration-200"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a
          href="https://www.instagram.com/omar_nassaar?igsh=MW9ldHJjZzFxdTR4aw=="
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-[#94a3b8] hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:scale-110 transition-all duration-200"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a
          href="https://www.linkedin.com/in/omar-gamal-nassar?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#0a0a0a] border border-[rgba(0,132,255,0.2)] text-[#94a3b8] hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:scale-110 transition-all duration-200"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
  </div>
</div>
    <div className="w-full">
      <div className="text-white font-bold text-lg">Muaz Hanout</div>
      <div className="text-[#0084FF] text-sm font-medium mt-1">AI Automation Specialist</div>
      <div className="text-[#0084FF] text-sm font-medium">Front-End Developer</div>
      <div className="text-[#94a3b8] text-xs mt-1">Founder @ ScalaryX</div>
    </div>
    <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[rgba(0,132,255,0.15)] pt-3 mt-3">
      &quot;I specialize in AI automation and build modern front-end interfaces to create complete, scalable systems.&quot;
    </p>
  </div>

  {/* Omar card */}
  <div className="group gradient-border p-5 rounded-2xl bg-gradient-to-br from-[#FF6B1A]/20 via-[#0a0a0a] to-[#0a0a0a] border border-[rgba(0,132,255,0.2)] shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:border-[#0084FF]/40 hover:shadow-lg hover:shadow-[#0084FF]/5">
    <div className="w-full aspect-square max-h-44 rounded-2xl overflow-hidden border-2 border-[rgba(0,132,255,0.3)] mb-4 group-hover:border-[#0084FF]/50 transition-colors duration-300">
      <img
        src="/Omarprofile.jpeg"
        alt="Omar Gamal - Digital Marketing Specialist at ScalaryX"
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="w-full">
      <div className="text-white font-bold text-lg">Omar Gamal</div>
      <div className="text-[#0084FF] text-sm font-medium mt-1">Digital Marketing Specialist</div>
      <div className="text-[#94a3b8] text-xs mt-1">Founder @ ScalaryX</div>
    </div>
    <p className="text-[#94a3b8] text-sm leading-relaxed border-t border-[rgba(0,132,255,0.15)] pt-3 mt-3">
      &quot;I specialize in digital marketing — I build strategies that turn cold traffic into loyal customers and real revenue.&quot;
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
