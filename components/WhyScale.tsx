"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LAYERS = [
  { key: "layer_l4", inset: 0, delay: 0.15 },
  { key: "layer_l3", inset: 11, delay: 0.35 },
  { key: "layer_l2", inset: 22, delay: 0.55 },
  { key: "layer_l1", inset: 32, delay: 0.75 },
] as const;

export default function WhyScale() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6" style={{ background: "var(--section-alt-bg)" }}>
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="order-2 md:order-1"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] block mb-4 sm:mb-5">
            {t.layer_kicker}
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-snug mb-4 sm:mb-5"
            style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}
          >
            {t.layer_title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
            {t.layer_support}
          </p>
        </motion.div>

        {/* Layer diagram — architectural rings assembling around the business */}
        <div className="order-1 md:order-2 flex justify-center" aria-hidden="true">
          <div className="relative w-[min(78vw,22rem)] aspect-square">
            {LAYERS.map((layer) => (
              <motion.div
                key={layer.key}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: layer.delay, ease: EASE }}
                className="absolute rounded-full border border-[var(--border-accent)]"
                style={{ inset: `${layer.inset}%` }}
              />
            ))}

            {LAYERS.map((layer) => (
              <motion.span
                key={`label-${layer.key}`}
                initial={{ opacity: 0, y: -6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: layer.delay + 0.25, ease: EASE }}
                className="absolute left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold tracking-widest uppercase whitespace-nowrap"
                style={{
                  top: `calc(${layer.inset}% - 0.7rem)`,
                  background: "var(--section-alt-bg)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {t[layer.key]}
              </motion.span>
            ))}

            {/* Center: BUSINESS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.95, ease: EASE }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
              style={{
                width: "30%",
                height: "30%",
                background: "var(--badge-bg)",
                border: "1px solid var(--border-accent)",
              }}
            >
              <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest" style={{ color: "var(--accent)" }}>
                {t.layer_center}
              </span>
            </motion.div>

            {/* Connector spokes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {[0, 90, 180, 270].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + Math.cos(rad) * 15;
                const y1 = 50 + Math.sin(rad) * 15;
                const x2 = 50 + Math.cos(rad) * 48;
                const y2 = 50 + Math.sin(rad) * 48;
                return (
                  <motion.line
                    key={angle}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="var(--border-accent)"
                    strokeWidth={0.5}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.08, ease: EASE }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
