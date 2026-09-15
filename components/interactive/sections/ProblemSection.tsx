"use client";

import { useReveal } from "../hooks/useReveal";
import { Icon } from "../SxIcons";

interface ProblemProps {
  t: (k: string) => string;
}

const nodes = [
  { key: "sc1", icon: "i-user", left: "2%", top: "5%", rot: "-3deg", delay: "0s" },
  { key: "sc2", icon: "i-sheet", left: "50%", top: "0%", rot: "2deg", delay: ".6s" },
  { key: "sc3", icon: "i-box", left: "68%", top: "30%", rot: "-2deg", delay: "1.2s" },
  { key: "sc4", icon: "i-wa", left: "1%", top: "44%", rot: "2deg", delay: "1.8s" },
  { key: "sc5", icon: "i-cash", left: "56%", top: "60%", rot: "3deg", delay: "2.4s" },
  { key: "sc6", icon: "i-db", left: "22%", top: "78%", rot: "-2deg", delay: "3s" },
];

const painKeys = ["p1", "p2", "p3", "p4", "p5", "p6"];

export default function ProblemSection({ t }: ProblemProps) {
  const headRef = useReveal();
  const scatterRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="sx-sec alt" id="problem">
      <div className="sx-wrap">
        <div className="sx-sec-head" ref={headRef}>
          <span className="sx-kicker">{t("prob_kicker")}</span>
          <h2>{t("prob_title")}</h2>
          <p>{t("prob_sub")}</p>
        </div>
        <div className="sx-prob-grid">
          <div className="sx-scattered" ref={scatterRef}>
            <svg
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line x1="16" y1="13" x2="50" y2="50" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="2 2.4" />
              <line x1="66" y1="8" x2="50" y2="50" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="2 2.4" />
              <line x1="80" y1="37" x2="50" y2="50" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="2 2.4" />
              <line x1="13" y1="52" x2="50" y2="50" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="2 2.4" />
              <line x1="70" y1="68" x2="50" y2="50" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="2 2.4" />
              <line x1="35" y1="86" x2="50" y2="50" stroke="var(--line2)" strokeWidth=".5" strokeDasharray="2 2.4" />
            </svg>
            {nodes.map((n) => (
              <div
                key={n.key}
                className="sx-snode"
                style={{
                  left: n.left,
                  top: n.top,
                  // @ts-expect-error CSS custom property
                  "--rot": n.rot,
                  animationDelay: n.delay,
                }}
              >
                <Icon name={n.icon} size={16} />
                <span>{t(n.key)}</span>
              </div>
            ))}
            <div className="sx-scenter">
              <span className="q">?</span>
              <span style={{ fontSize: 13, fontFamily: "var(--fd)" }}>
                {t("sc_q")}
              </span>
            </div>
          </div>
          <div ref={listRef}>
            <h3 style={{ fontSize: 20, marginBottom: 8 }}>{t("prob_ct")}</h3>
            <p style={{ color: "var(--ink2)", fontSize: 14.5 }}>
              {t("prob_cs")}
            </p>
            <ul className="sx-pains">
              {painKeys.map((k) => (
                <li key={k} dangerouslySetInnerHTML={{ __html: t(k) }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
