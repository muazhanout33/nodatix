"use client";

import { Icon } from "../SxIcons";

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";
const CAL_LINK =
  "https://cal.com/mezo-hanout-0qmbfk/scalaryx-meeting";
const IG_LINK = "https://www.instagram.com/scalary_x";

interface NavProps {
  t: (k: string) => string;
  toggleTheme: () => void;
  toggleLang: () => void;
  isDark: boolean;
  lang: string;
}

export default function NavSection({
  t,
  toggleTheme,
  toggleLang,
  isDark,
  lang,
}: NavProps) {
  return (
    <nav className="sx-mnav">
      <div className="sx-wrap">
        <a className="sx-logo" href="#top">
          <span>Scalary X</span>
          <small>{t("brand_tag")}</small>
        </a>
        <div className="sx-links">
          <a href="#problem">{t("nav_problem")}</a>
          <a href="#solution">{t("nav_solution")}</a>
          <a href="#system">{t("nav_system")}</a>
          <a href="#contact">{t("nav_contact")}</a>
        </div>
        <a
          className="sx-igbtn sx-hide-s"
          href={IG_LINK}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <Icon name="i-ig" size={17} />
        </a>
        <button
          type="button"
          className="sx-tbtn"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <span className="ic-sun">
            <Icon name="i-sun" size={17} />
          </span>
          <span className="ic-moon">
            <Icon name="i-moon" size={17} />
          </span>
        </button>
        <button
          type="button"
          className="sx-tbtn lang"
          onClick={toggleLang}
        >
          {lang === "ar" ? "EN" : "عربي"}
        </button>
        <a
          className="sx-btn o sm sx-hide-s"
          href={CAL_LINK}
          target="_blank"
          rel="noopener"
        >
          {t("nav_consult")}
        </a>
        <a
          className="sx-btn wa sm"
          href={WA_LINK}
          target="_blank"
          rel="noopener"
        >
          <Icon name="i-wa" size={15} />
          <span>{t("nav_wa")}</span>
        </a>
      </div>
    </nav>
  );
}
