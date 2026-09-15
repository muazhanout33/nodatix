"use client";

import { useReveal } from "../hooks/useReveal";
import { Icon } from "../SxIcons";

interface TrustBandProps {
  t: (k: string) => string;
}

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";

const trustItems = ["tr1", "tr2", "tr3", "tr4", "tr5"];
const trustIcons = ["i-db", "i-zap", "i-box", "i-spark", "i-link"];

export default function TrustBandSection({ t }: TrustBandProps) {
  const trustRef = useReveal();
  const bandRef = useReveal();

  return (
    <section className="sx-sec" style={{ paddingTop: 20 }}>
      <div className="sx-wrap">
        <div className="sx-trust" ref={trustRef}>
          {trustItems.map((item, i) => (
            <div key={item}>
              <Icon name={trustIcons[i]} size={18} />
              <span>{t(item)}</span>
            </div>
          ))}
        </div>
        <div className="sx-band" ref={bandRef} style={{ marginTop: 70 }}>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: t("band_t") }} />
            <p>{t("band_s")}</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              className="sx-btn wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener"
            >
              <Icon name="i-wa" size={16} />
              <span>{t("band_cta1")}</span>
            </a>
            <a className="sx-btn o" href="#request">
              {t("band_cta2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
