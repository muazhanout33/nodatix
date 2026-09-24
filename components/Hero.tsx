"use client";

import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookCallButton } from "./BookCallButton";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const NODE_YS = [52, 136, 220, 304, 388] as const;
const BUS_X = 250;
const CORE_CX = 360;
const CORE_CY = 220;
const CORE_R = 56;
const CORE_LEFT = CORE_CX - CORE_R;
const CORE_RIGHT = CORE_CX + CORE_R;
const OUT_Y = CORE_CY;
const PILL_X = 470;
const PILL_W = 82;
const PILL_H = 34;
const PILL_Y = OUT_Y - PILL_H / 2;

function nodePath(y: number) {
  return `M 132 ${y} H ${BUS_X} V ${CORE_CY} H ${CORE_LEFT}`;
}

function SystemMap({ labels }: { labels: string[] }) {
  return (
    <svg
      viewBox="0 0 560 440"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* connector paths — draw on load (disconnected → connected) */}
      {NODE_YS.map((y, i) => (
        <motion.path
          key={`p-${i}`}
          d={nodePath(y)}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.75 + i * 0.07, ease: EASE }}
        />
      ))}

      {/* input nodes — start slightly offset/disconnected, settle in */}
      {NODE_YS.map((y, i) => (
        <motion.g
          key={`n-${i}`}
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease: EASE }}
        >
          <circle cx={132} cy={y} r={3.5} fill="var(--accent)" />
          <text
            x={118}
            y={y}
            textAnchor="end"
            dominantBaseline="middle"
            fill="var(--text-secondary)"
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              fontSize: 13,
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            {labels[i]}
          </text>
        </motion.g>
      ))}

      {/* core system */}
      <motion.g
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 1.15, ease: EASE }}
        style={{ transformOrigin: `${CORE_CX}px ${CORE_CY}px` }}
      >
        <circle
          cx={CORE_CX}
          cy={CORE_CY}
          r={CORE_R + 8}
          fill="none"
          stroke="var(--border-accent)"
          strokeWidth={1}
          opacity={0.45}
          className="hero-core-pulse"
        />
        <circle
          cx={CORE_CX}
          cy={CORE_CY}
          r={CORE_R}
          fill="var(--badge-bg)"
          stroke="var(--accent)"
          strokeWidth={1.5}
        />
        <text
          x={CORE_CX}
          y={CORE_CY - 7}
          textAnchor="middle"
          fill="var(--text-primary)"
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          SCALARYX
        </text>
        <text
          x={CORE_CX}
          y={CORE_CY + 12}
          textAnchor="middle"
          fill="var(--accent)"
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
          }}
        >
          SYSTEM
        </text>
      </motion.g>

      {/* output line + scale pill — emerge last */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 1.5, ease: EASE }}
      >
        <path
          d={`M ${CORE_RIGHT} ${OUT_Y} H ${PILL_X - 8}`}
          fill="none"
          stroke="var(--border-accent)"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          d={`M ${PILL_X - 14} ${OUT_Y - 5} L ${PILL_X - 8} ${OUT_Y} L ${PILL_X - 14} ${OUT_Y + 5}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle r={3} cy={OUT_Y} cx={CORE_RIGHT} fill="var(--accent)" className="hero-flow-dot" />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.65, ease: EASE }}
      >
        <rect
          x={PILL_X}
          y={PILL_Y}
          width={PILL_W}
          height={PILL_H}
          rx={PILL_H / 2}
          fill="var(--badge-bg)"
          stroke="var(--accent)"
          strokeWidth={1.5}
        />
        <text
          x={PILL_X + PILL_W / 2}
          y={OUT_Y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="var(--accent)"
          style={{
            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          SCALE
        </text>
      </motion.g>
    </svg>
  );
}

function VerticalFlow({ labels, core, scale }: { labels: string[]; core: string; scale: string }) {
  return (
    <div className="flex flex-col items-center gap-0 w-full max-w-[260px] mx-auto" aria-hidden="true">
      {labels.map((label, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 + i * 0.08, ease: EASE }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span
              className="text-[13px] font-medium text-[var(--text-secondary)]"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", letterSpacing: "0.14em" }}
            >
              {label}
            </span>
          </div>
          <svg width="12" height="16" viewBox="0 0 12 16" className="text-[var(--border)]" aria-hidden="true">
            <path d="M6 0 V12 M2 9 L6 13 L10 9" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.85, ease: EASE }}
        className="flex flex-col items-center"
      >
        <div
          className="inline-flex items-center rounded-full bg-[var(--badge-bg)] border border-[var(--accent)] text-[var(--accent)] px-3.5 py-2 font-mono text-[11px] tracking-[0.12em] font-semibold"
        >
          {core}
        </div>
        <svg width="12" height="16" viewBox="0 0 12 16" className="text-[var(--border)] mt-1" aria-hidden="true">
          <path d="M6 0 V12 M2 9 L6 13 L10 9" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 1.05, ease: EASE }}
        className="inline-flex items-center rounded-full bg-[var(--badge-bg)] border border-[var(--accent)] text-[var(--accent)] px-4 py-2 mt-0.5 font-mono text-[12px] tracking-[0.16em] font-bold"
      >
        {scale}
      </motion.div>
    </div>
  );
}

const Hero = memo(function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const mapGrow = useTransform(scrollYProgress, [0.1, 0.8], [1, 1.04]);

  const nodeLabels = [
    t.hero_v_node1,
    t.hero_v_node2,
    t.hero_v_node3,
    t.hero_v_node4,
    t.hero_v_node5,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92svh] lg:min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 pb-14 sm:pb-20"
    >
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] xl:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* ── Left: editorial copy ── */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            className="flex items-center gap-3 mb-6 sm:mb-7"
          >
            <span className="w-7 h-px bg-[var(--accent)]" aria-hidden="true" />
            <span
              className="text-[11px] sm:text-xs font-semibold uppercase text-[var(--accent)]"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", letterSpacing: "0.2em" }}
            >
              {t.hero_eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="text-[2.25rem] leading-[1.06] sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-7xl font-bold tracking-tight mb-6 sm:mb-7"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif",
            }}
          >
            {t.hero_headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: EASE }}
            className="text-[15px] sm:text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] max-w-xl mb-6"
          >
            {t.hero_supporting}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease: EASE }}
            className="border-s-2 border-[var(--accent)] ps-4 text-[15px] sm:text-lg font-semibold text-[var(--text-primary)] leading-snug max-w-md mb-8 sm:mb-10"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.hero_secondary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: EASE }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <BookCallButton className="btn-primary px-6 sm:px-7 py-3.5 text-sm sm:text-base">
              {t.services_final_cta}
              <span className="rtl-flip" aria-hidden="true">
                &rarr;
              </span>
            </BookCallButton>
            <a href="#services" className="btn-ghost px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-medium">
              {t.hero_cta_how}
              <span className="rtl-flip" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </motion.div>
        </div>

        {/* ── Right: system visualization ── */}
        <div className="lg:justify-self-end w-full">
          {/* Desktop: chaos → system → scale map; on scroll it eases toward SCALE */}
          <motion.div
            aria-hidden="true"
            style={{ y: mapY, scale: mapGrow, transformOrigin: "left center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden lg:block h-[400px] xl:h-[460px] w-full max-w-[560px]"
          >
            <SystemMap labels={nodeLabels} />
          </motion.div>

          {/* Mobile: dedicated vertical flow */}
          <div className="lg:hidden mt-10 flex justify-center">
            <VerticalFlow labels={nodeLabels} core={t.hero_v_core} scale={t.hero_v_scale} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
