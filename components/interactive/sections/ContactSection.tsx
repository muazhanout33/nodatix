"use client";

import { useReveal } from "../hooks/useReveal";
import { Icon } from "../SxIcons";

interface ContactProps {
  t: (k: string) => string;
}

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";
const CAL_LINK =
  "https://cal.com/mezo-hanout-0qmbfk/scalaryx-meeting";
const IG_LINK = "https://www.instagram.com/scalary_x";

export default function ContactSection({ t }: ContactProps) {
  const headRef = useReveal();
  const gridRef = useReveal();
  const stripRef = useReveal();
  const noteRef = useReveal();

  return (
    <section className="sx-sec" id="contact">
      <div className="sx-wrap">
        <div className="sx-sec-head" ref={headRef}>
          <span className="sx-kicker">{t("ct_kicker")}</span>
          <h2>{t("ct_title")}</h2>
          <p>{t("ct_sub")}</p>
        </div>
        <div className="sx-contact-grid" ref={gridRef}>
          {/* WhatsApp */}
          <div className="sx-ccard primary">
            <div
              className="cic"
              style={{ background: "var(--posbg)", color: "var(--wa)" }}
            >
              <Icon name="i-wa" size={24} />
            </div>
            <div>
              <h3>{t("ct_wa_t")}</h3>
              <p>{t("ct_wa_d")}</p>
              <a
                className="sx-btn wa"
                href={WA_LINK}
                target="_blank"
                rel="noopener"
              >
                <Icon name="i-wa" size={16} />
                <span>{t("ct_wa_b")}</span>
              </a>
              <div className="cs">{t("ct_wa_s")}</div>
            </div>
          </div>
          {/* Email */}
          <div className="sx-ccard">
            <div
              className="cic"
              style={{ background: "var(--sky)", color: "var(--blue)" }}
            >
              <Icon name="i-mail" size={22} />
            </div>
            <div>
              <h3>{t("ct_mail_t")}</h3>
              <p>{t("ct_mail_d")}</p>
              <a className="sx-btn" href="mailto:xscalary@gmail.com">
                <span>{t("ct_mail_b")}</span>
              </a>
              <div className="cs">{t("ct_mail_s")}</div>
            </div>
          </div>
          {/* Instagram */}
          <div className="sx-ccard">
            <div
              className="cic"
              style={{ background: "var(--sky)", color: "var(--deep)" }}
            >
              <Icon name="i-ig" size={22} />
            </div>
            <div>
              <h3>{t("ct_ig_t")}</h3>
              <p>{t("ct_ig_d")}</p>
              <a className="sx-btn" href={IG_LINK} target="_blank" rel="noopener">
                @scalary_x ↗
              </a>
              <div className="cs">{t("ct_ig_s")}</div>
            </div>
          </div>
        </div>
        <div className="sx-consult-strip" ref={stripRef}>
          <span>{t("ct_consult")}</span>
          <a
            className="sx-btn blue sm"
            href={CAL_LINK}
            target="_blank"
            rel="noopener"
          >
            <span>{t("nav_consult")}</span> ↗
          </a>
        </div>
        <div className="sx-contact-note" ref={noteRef}>
          <Icon name="i-check" size={16} color="#0E8A5F" />
          <span>{t("ct_note")}</span>
        </div>
      </div>
    </section>
  );
}
