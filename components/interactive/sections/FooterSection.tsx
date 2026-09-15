"use client";

import { Icon } from "../SxIcons";

interface FooterProps {
  t: (k: string) => string;
}

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";
const CAL_LINK =
  "https://cal.com/mezo-hanout-0qmbfk/scalaryx-meeting";
const IG_LINK = "https://www.instagram.com/scalary_x";

export default function FooterSection({ t }: FooterProps) {
  return (
    <footer className="sx-footer">
      <div className="sx-wrap">
        <div className="cols">
          <div>
            <a
              className="sx-logo"
              style={{ marginBottom: 16 }}
              href="#top"
            >
              Scalary X
            </a>
            <p
              style={{ fontSize: 13.5, maxWidth: 280, lineHeight: 1.6 }}
            >
              {t("ft_desc")}
            </p>
            <a className="soc" href={IG_LINK} target="_blank" rel="noopener">
              <Icon name="i-ig" size={16} />
              @scalary_x
            </a>
          </div>
          <div>
            <h5>{t("ft_sol")}</h5>
            <a href="#solution">{t("fs1")}</a>
            <a href="#system">{t("fs2")}</a>
            <a href="#system">{t("fs3")}</a>
            <a href="#system">{t("fs4")}</a>
          </div>
          <div>
            <h5>{t("ft_comp")}</h5>
            <a href="#contact">{t("fc1")}</a>
            <a href="/privacy-policy" target="_blank" rel="noopener">{t("fc2")}</a>
            <a href="/terms-of-service" target="_blank" rel="noopener">{t("fc3")}</a>
          </div>
          <div>
            <h5>{t("ft_start")}</h5>
            <a href={WA_LINK} target="_blank" rel="noopener">
              {t("fg1")}
            </a>
            <a href="mailto:xscalary@gmail.com">{t("fg2")}</a>
            <a href={CAL_LINK} target="_blank" rel="noopener">
              {t("fg3")}
            </a>
            <a href="#request">{t("fg4")}</a>
          </div>
        </div>
        <div className="fine">
          <span>
            © {new Date().getFullYear()} Scalary X · {t("ft_rights")}
          </span>
          <span
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                gap: 7,
                alignItems: "center",
              }}
            >
              <Icon name="i-wa" size={14} />
              +20 110 592 0342
            </a>
            <a href="mailto:xscalary@gmail.com">xscalary@gmail.com</a>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                gap: 7,
                alignItems: "center",
              }}
            >
              <Icon name="i-ig" size={14} />
              @scalary_x
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
