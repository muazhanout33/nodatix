"use client";

import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { BookCallButton } from "./BookCallButton";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { FLOW_LABELS, SCALE_LABEL, STAGES } from "./services/stages";
import SystemDiagram from "./services/SystemDiagram";

const GrowthSystemScene = dynamic(() => import("./services/GrowthSystemScene"), {
  ssr: false,
  loading: () => null,
});

const FINAL_LINES = [
  "services_final_l1",
  "services_final_l2",
  "services_final_l3",
  "services_final_l4",
  "services_final_l5",
] as const;

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
  } catch {
    return false;
  }
}

export default function Services() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const prefersReduced = useReducedMotion();

  const [storyMode, setStoryMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [stage, setStage] = useState(0);
  const [sceneArmed, setSceneArmed] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [storyNear, setStoryNear] = useState(false);
  const [staticActive, setStaticActive] = useState<number | undefined>(undefined);

  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });

  useEffect(() => {
    const reducedQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQ = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setStoryMode(!reducedQ.matches && hasWebGL());
      setIsMobile(mobileQ.matches);
    };
    sync();
    reducedQ.addEventListener("change", sync);
    mobileQ.addEventListener("change", sync);

    const el = storyRef.current;
    let io: IntersectionObserver | null = null;
    if (el) {
      io = new IntersectionObserver(
        (entries) => {
          const intersecting = entries.some((entry) => entry.isIntersecting);
          setStoryNear(intersecting);
          if (intersecting) setSceneArmed(true);
        },
        { rootMargin: "600px 0px 600px 0px" }
      );
      io.observe(el);
    }

    return () => {
      reducedQ.removeEventListener("change", sync);
      mobileQ.removeEventListener("change", sync);
      io?.disconnect();
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!storyMode) return;
    const next = Math.min(FLOW_LABELS.length - 1, Math.max(0, Math.floor(p * FLOW_LABELS.length)));
    setStage((prev) => (prev === next ? prev : next));
  });

  const scrollToStage = (index: number) => {
    const el = storyRef.current;
    if (!el || !storyMode) return;
    const rect = el.getBoundingClientRect();
    const storyTop = rect.top + window.scrollY;
    const scrollable = Math.max(el.offsetHeight - window.innerHeight, 1);
    const target = storyTop + ((index + 0.5) / FLOW_LABELS.length) * scrollable;
    window.scrollTo({ top: target, behavior: prefersReduced ? "auto" : "smooth" });
  };

  const activeSide = stage < STAGES.length ? STAGES[stage].side : "start";
  const showScene = storyMode && sceneArmed;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-x-clip"
      style={{ background: "var(--section-alt-bg)" }}
    >
      <div className="services-glow" aria-hidden="true" />

      {/* ── Intro ─────────────────────────────────────────────── */}
      <div className="relative z-10 px-4 sm:px-6 pt-14 sm:pt-24 pb-8 sm:pb-14">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="badge-brand mb-5 sm:mb-7 inline-flex"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            {t.services_kicker}
          </motion.div>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-bold leading-[1.08] tracking-tight mb-4 sm:mb-5"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 3.4rem)",
            }}
          >
            {t.services_title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-[var(--text-secondary)] mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.125rem)", maxWidth: "40rem" }}
          >
            {t.services_subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="svc-flow"
            aria-hidden="true"
          >
            {FLOW_LABELS.map((label, i) => (
              <Fragment key={label}>
                {i > 0 && (
                  <span className="svc-flow-arrow rtl-flip">→</span>
                )}
                <span className="svc-flow-chip">{label}</span>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Story / Static body ───────────────────────────────── */}
      <div ref={storyRef} className={storyMode ? "services-story relative" : "relative"}>
        {storyMode ? (
          <div className="services-sticky">
            {/* 3D canvas region */}
            <div className="services-canvas">
              {showScene && (
                <GrowthSystemScene
                  progress={scrollYProgress}
                  theme={theme}
                  isMobile={isMobile}
                  visible={storyNear}
                  onReady={() => setSceneReady(true)}
                />
              )}
              {!sceneReady && (
                <div className="absolute inset-0 flex items-center justify-center px-6 opacity-50">
                  <SystemDiagram className="w-full max-w-2xl" highlightAll />
                </div>
              )}

              <AnimatePresence>
                {stage === FLOW_LABELS.length - 1 && (
                  <motion.div
                    key="scale"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="scale-mark"
                    aria-hidden="true"
                  >
                    {SCALE_LABEL}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile / tablet progress rail */}
            <nav className="services-rail-mobile" aria-label="Growth system stages">
              {FLOW_LABELS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => scrollToStage(i)}
                  className="svc-rail-dot"
                  data-on={stage === i}
                  aria-label={label}
                  aria-current={stage === i ? "step" : undefined}
                />
              ))}
            </nav>

            {/* Stage panel */}
            <div
              className="services-panel-slot"
              data-side={activeSide}
              data-empty={stage >= STAGES.length ? "" : undefined}
            >
              <AnimatePresence mode="wait" initial={false}>
                {stage < STAGES.length && (
                  <motion.article
                    key={stage}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="services-panel"
                  >
                    <span className="svc-ghost" aria-hidden="true">
                      {String(stage + 1).padStart(2, "0")}
                    </span>
                    <div className="svc-label">
                      <span className="svc-label-num">{String(stage + 1).padStart(2, "0")}</span>
                      <span className="svc-label-sep" aria-hidden="true">
                        —
                      </span>
                      <span className="svc-label-text">{STAGES[stage].label}</span>
                    </div>
                    <h3 className="svc-title">{t[STAGES[stage].titleKey]}</h3>
                    <p className="svc-desc">{t[STAGES[stage].descKey]}</p>
                    <div className="svc-meter" aria-hidden="true">
                      <span
                        className="svc-meter-fill"
                        style={{ width: `${((stage + 1) / FLOW_LABELS.length) * 100}%` }}
                      />
                    </div>
                  </motion.article>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop progress rail */}
            <nav className="services-rail-desktop" aria-label="Growth system stages">
              <span className="svc-rail-count" aria-hidden="true">
                {String(stage + 1).padStart(2, "0")}/{String(FLOW_LABELS.length).padStart(2, "0")}
              </span>
              {FLOW_LABELS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => scrollToStage(i)}
                  className="svc-rail-dot"
                  data-on={stage === i}
                  aria-label={label}
                  aria-current={stage === i ? "step" : undefined}
                />
              ))}
            </nav>
          </div>
        ) : (
          /* Static / fallback presentation */
          <div className="relative z-10 px-4 sm:px-6 pb-6 sm:pb-10">
            <SystemDiagram
              className="max-w-3xl mx-auto mb-8 sm:mb-14"
              activeIndex={staticActive}
            />
            <ol className="max-w-3xl mx-auto svc-static-list">
              {STAGES.map((s) => (
                <motion.li
                  key={s.index}
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  onViewportEnter={() => setStaticActive(s.index)}
                  className="svc-static-row"
                >
                  <div className="svc-static-meta">
                    <span className="svc-label-num">{String(s.index + 1).padStart(2, "0")}</span>
                    <span className="svc-label-sep" aria-hidden="true">
                      —
                    </span>
                    <span className="svc-label-text">{s.label}</span>
                  </div>
                  <div>
                    <h3 className="svc-title">{t[s.titleKey]}</h3>
                    <p className="svc-desc">{t[s.descKey]}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* ── Finale ────────────────────────────────────────────── */}
      <div className="relative z-10 px-4 sm:px-6 py-14 sm:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold leading-[1.15] tracking-tight mb-6 sm:mb-8"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif",
              fontSize: "clamp(1.55rem, 4vw, 2.75rem)",
            }}
          >
            {t.services_final_title}
          </motion.h2>

          <ul className="mb-7 sm:mb-9 space-y-2.5 sm:space-y-3">
            {FINAL_LINES.map((key, i) => (
              <motion.li
                key={key}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
                className="svc-final-line"
              >
                <span className="svc-final-bullet" aria-hidden="true" />
                <span>{t[key]}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="font-semibold mb-7 sm:mb-9"
            style={{
              color: "var(--accent)",
              fontSize: "clamp(1.15rem, 2.5vw, 1.6rem)",
              fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif",
            }}
          >
            {t.services_final_connect}
          </motion.p>

          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.78 }}
          >
            <BookCallButton className="btn-primary w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base">
              {t.services_final_cta}
              <span className="rtl-flip inline-block">→</span>
            </BookCallButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
