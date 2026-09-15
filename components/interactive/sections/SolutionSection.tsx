"use client";

import { useReveal } from "../hooks/useReveal";
import { Icon } from "../SxIcons";

interface SolutionProps {
  t: (k: string) => string;
}

const flowSteps = [
  { tKey: "flow1t", sKey: "flow1s", icon: "i-user" },
  { tKey: "flow2t", sKey: "flow2s", icon: "i-users" },
  { tKey: "flow3t", sKey: "flow3s", icon: "i-target" },
  { tKey: "flow4t", sKey: "flow4s", icon: "i-cart" },
  { tKey: "flow5t", sKey: "flow5s", icon: "i-invoice" },
  { tKey: "flow6t", sKey: "flow6s", icon: "i-cash" },
  { tKey: "flow7t", sKey: "flow7s", icon: "i-chart" },
];

export default function SolutionSection({ t }: SolutionProps) {
  const headRef = useReveal();
  const flowRef = useReveal();
  const calloutRef = useReveal();
  const statsRef = useReveal();

  return (
    <section className="sx-sec" id="solution">
      <div className="sx-wrap">
        <div className="sx-sec-head" ref={headRef}>
          <span className="sx-kicker">{t("sol_kicker")}</span>
          <h2>{t("sol_title")}</h2>
          <p>{t("sol_sub")}</p>
        </div>
        <div className="sx-flow" ref={flowRef}>
          {flowSteps.map((step, i) => (
            <div key={step.tKey} style={{ display: "contents" }}>
              <div className="sx-fnode">
                <div className="ic">
                  <Icon name={step.icon} size={18} />
                </div>
                <h4>{t(step.tKey)}</h4>
                <p>{t(step.sKey)}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="sx-farrow">
                  <Icon name="i-arrow-ur" size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="sx-callout" ref={calloutRef}>
          <div className="cic">
            <Icon name="i-alert" size={20} />
          </div>
          <div>
            <h4>{t("callout_t")}</h4>
            <p>{t("callout_b")}</p>
          </div>
        </div>
        <div className="sx-statline" ref={statsRef}>
          <div>
            <b>{t("st1b")}</b>
            <span>{t("st1s")}</span>
          </div>
          <div>
            <b>{t("st2b")}</b>
            <span>{t("st2s")}</span>
          </div>
          <div>
            <b>{t("st3b")}</b>
            <span>{t("st3s")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
