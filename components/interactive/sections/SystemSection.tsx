"use client";

import { useState, useCallback } from "react";
import { useReveal } from "../hooks/useReveal";
import { Icon } from "../SxIcons";

interface SystemProps {
  t: (k: string) => string;
}

const TAB_COUNT = 6;

const tabIcons = [
  "i-target",
  "i-users",
  "i-invoice",
  "i-box",
  "i-zap",
  "i-spark",
];

const PIPELINE_DATA = [
  { key: "stg_new", label: "EGP 96k · 4", pct: 57 },
  { key: "stg_qualified", label: "EGP 118k · 3", pct: 70 },
  { key: "stg_proposal", label: "EGP 168k · 3", pct: 100 },
  { key: "stg_negotiation", label: "EGP 160k · 2", pct: 95 },
];

const INVOICE_DATA = [
  { key: "inv_paid", label: "14 invoices · EGP 1.05M" },
  { key: "inv_unpaid", label: "3 invoices · EGP 96k" },
  { key: "inv_overdue", label: "3 invoices · EGP 90.5k" },
];

const STOCK_DATA = [
  { name: "Welding Machine 200A", left: "2", color: "var(--neg)" },
  { name: "Circuit Breaker 32A", left: "3", color: "var(--neg)" },
  { name: "Generator 5KVA", left: "6", color: undefined },
  { name: "Cordless Drill 20V", left: "31", color: undefined },
];

const AUTOMATION_DATA = [
  "Deal won → ORD-1046 + INV-2086",
  "Payment → INV-2084 Paid",
  "Low stock → PO draft → supplier",
  "New lead → assigned + follow-up",
];

const MONTHS = [
  { l: "F", v: 172 },
  { l: "M", v: 186 },
  { l: "A", v: 178 },
  { l: "M", v: 210 },
  { l: "J", v: 238 },
  { l: "J", v: 256 },
];

function TabPanel({ index, t }: { index: number; t: (k: string) => string }) {
  const title = t(`sv${index + 1}t`);
  const lede = t(`sv${index + 1}l`);
  const items = Array.from({ length: 5 }, (_, j) => t(`sv${index + 1}i${j + 1}`));

  return (
    <div className="sx-solve-panel">
      <h3>{title}</h3>
      <div className="lede">{lede}</div>
      <ul>
        {items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>

      {index === 0 && (
        <>
          {PIPELINE_DATA.map((s) => (
            <div className="sx-vbar" key={s.key}>
              <div className="vt">
                <span>{t(s.key)}</span>
                <b>{s.label}</b>
              </div>
              <div className="vb">
                <i style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
          <div className="sx-vnote">
            EGP 542k · 12 {t("vis_deals")}
          </div>
        </>
      )}

      {index === 1 && (
        <div className="sx-vstats">
          <div className="sx-vstat">
            <div className="l">{t("vis_spend")}</div>
            <div className="v">EGP 2.16M</div>
          </div>
          <div className="sx-vstat">
            <div className="l">{t("vis_custs")}</div>
            <div className="v">22</div>
          </div>
          <div className="sx-vstat">
            <div className="l">{t("vis_aov")}</div>
            <div className="v">EGP 78k</div>
          </div>
          <div className="sx-vstat">
            <div className="l">{t("vis_repeat")}</div>
            <div className="v">64%</div>
          </div>
        </div>
      )}

      {index === 2 && (
        <>
          {INVOICE_DATA.map((inv) => (
            <div className="sx-vrow" key={inv.key}>
              <span className="vl">{t(inv.key)}</span>
              <b>{inv.label}</b>
            </div>
          ))}
          <div className="sx-vnote">EGP 186.5k outstanding</div>
        </>
      )}

      {index === 3 && (
        <>
          {STOCK_DATA.map((s) => (
            <div className="sx-vrow" key={s.name}>
              <span className="vl">{s.name}</span>
              <b style={s.color ? { color: s.color } : undefined}>
                {s.left} {t("vis_left")}
              </b>
            </div>
          ))}
          <div className="sx-vnote">
            6 {t("vis_sup")} · 2 {t("vis_po")}
          </div>
        </>
      )}

      {index === 4 && (
        <>
          {AUTOMATION_DATA.map((row) => (
            <div className="sx-vrow" key={row}>
              <span className="vl">{row}</span>
              <b>auto</b>
            </div>
          ))}
        </>
      )}

      {index === 5 && (
        <>
          <div
            style={{
              fontSize: 12.5,
              color: "var(--mut)",
              marginBottom: 8,
              fontWeight: 600,
            }}
          >
            {t("vis_revh")}
          </div>
          <div className="sx-mbars">
            {MONTHS.map((m) => (
              <div className="mb" key={m.l + m.v}>
                <i style={{ height: `${Math.round((m.v / 256) * 80)}%` }} />
                <span>{m.l}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SystemSection({ t }: SystemProps) {
  const [activeTab, setActiveTab] = useState(0);
  const headRef = useReveal();
  const contentRef = useReveal();

  const handleTab = useCallback((i: number) => {
    setActiveTab(i);
  }, []);

  return (
    <section className="sx-sec alt" id="system">
      <div className="sx-wrap">
        <div className="sx-sec-head" ref={headRef}>
          <span className="sx-kicker">{t("sys_kicker")}</span>
          <h2>{t("sys_title")}</h2>
          <p>{t("sys_sub")}</p>
        </div>
        <div className="sx-solves" ref={contentRef}>
          <div role="tablist">
            {Array.from({ length: TAB_COUNT }, (_, i) => (
              <button
                key={i}
                type="button"
                className={`sx-solve-tab${activeTab === i ? " on" : ""}`}
                onClick={() => handleTab(i)}
                role="tab"
                aria-selected={activeTab === i}
              >
                <Icon name={tabIcons[i]} size={17} />
                <span>{t(`sv${i + 1}t`)}</span>
              </button>
            ))}
          </div>
          <TabPanel index={activeTab} t={t} />
        </div>
      </div>
    </section>
  );
}
