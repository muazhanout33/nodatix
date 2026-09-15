"use client";

import { useRef, useCallback } from "react";
import { Icon } from "../SxIcons";

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";
const CAL_LINK =
  "https://cal.com/mezo-hanout-0qmbfk/scalaryx-meeting";

interface HeroProps {
  t: (k: string) => string;
}

export default function HeroSection({ t }: HeroProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const pvRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      const scene = sceneRef.current;
      const pv = pvRef.current;
      if (!scene || !pv) return;
      const r = scene.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      pv.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 7}deg)`;
    },
    []
  );

  const onPointerLeave = useCallback(() => {
    if (pvRef.current) pvRef.current.style.transform = "";
  }, []);

  return (
    <header className="sx-hero" id="top">
      <div className="sx-wrap">
        <div>
          <span className="sx-kicker">{t("hero_kicker")}</span>
          <h1 dangerouslySetInnerHTML={{ __html: t("hero_title_h") }} />
          <p className="sx-sub">{t("hero_sub")}</p>
          <div className="sx-hero-cta">
            <a
              className="sx-btn wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener"
            >
              <Icon name="i-wa" size={16} />
              <span>{t("cta_wa")}</span>
            </a>
            <a
              className="sx-btn o"
              href={CAL_LINK}
              target="_blank"
              rel="noopener"
            >
              <span>{t("cta_consult")}</span> ↗
            </a>
          </div>
          <a className="sx-hero-alt" href="#request">
            <span>{t("cta_request")}</span>
            <Icon name="i-arrow-ur" size={15} />
          </a>
          <div className="sx-hero-meta">
            <div>
              <b>{t("hm1b")}</b>
              <span>{t("hm1s")}</span>
            </div>
            <div>
              <b>{t("hm2b")}</b>
              <span>{t("hm2s")}</span>
            </div>
            <div>
              <b>{t("hm3b")}</b>
              <span>{t("hm3s")}</span>
            </div>
          </div>
        </div>
        <div
          className="sx-pv-scene"
          ref={sceneRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <div className="sx-pv" ref={pvRef}>
            <div className="sx-pv-main">
              <div className="sx-pv-head">
                <div>
                  <div className="nm">Horizon Trading Co.</div>
                  <div className="sb">{t("pv_sb")}</div>
                </div>
                <span className="sx-live">
                  <i />
                  LIVE
                </span>
              </div>
              <div className="sx-pv-kpis">
                <div className="sx-pv-kpi">
                  <div className="l">{t("pv_sales")}</div>
                  <div className="v">EGP 1.24M</div>
                  <div className="d sx-up sx-mono">▲ 7.6%</div>
                </div>
                <div className="sx-pv-kpi">
                  <div className="l">{t("pv_out")}</div>
                  <div className="v">EGP 186.5k</div>
                  <div className="d sx-dn sx-mono">{t("pv_d2")}</div>
                </div>
                <div className="sx-pv-kpi">
                  <div className="l">{t("pv_pipe")}</div>
                  <div className="v">EGP 542k</div>
                  <div className="d sx-up sx-mono">{t("pv_d3")}</div>
                </div>
              </div>
              <svg
                width="100%"
                height="36"
                viewBox="0 0 110 36"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0,28L18,26L36,27L54,21L72,23L90,12L110,6L110,36L0,36Z"
                  fill="rgba(30,86,200,.08)"
                />
                <path
                  d="M0,28L18,26L36,27L54,21L72,23L90,12L110,6"
                  fill="none"
                  stroke="#1E56C8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <div className="sx-pv-auto">
                <div>
                  <b>{t("pv_auto_b")}</b>
                  <span>{t("pv_auto")}</span>
                </div>
              </div>
              <div className="sx-pv-chips">
                <div className="sx-pv-chip">
                  <Icon name="i-alert" size={15} color="#BF3B3B" />
                  <span>{t("pv_f1")}</span>
                </div>
                <div className="sx-pv-chip">
                  <Icon name="i-check" size={15} color="#0E8A5F" />
                  <span>{t("pv_f2")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
