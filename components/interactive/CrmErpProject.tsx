"use client";

import { useTheme } from "./hooks/useTheme";
import { useLang } from "./hooks/useLang";
import SxIcons from "./SxIcons";
import NavSection from "./sections/NavSection";
import HeroSection from "./sections/HeroSection";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";
import SystemSection from "./sections/SystemSection";
import ContactSection from "./sections/ContactSection";
import RequestFormSection from "./sections/RequestFormSection";
import TrustBandSection from "./sections/TrustBandSection";
import FooterSection from "./sections/FooterSection";
import "./project.css";

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";

export default function CrmErpProject() {
  const { theme, toggleTheme, isDark } = useTheme();
  const { lang, toggleLang, t } = useLang();

  return (
    <div
      className="sx-project"
      data-theme={theme}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <SxIcons />
      <NavSection
        t={t}
        toggleTheme={toggleTheme}
        toggleLang={toggleLang}
        isDark={isDark}
        lang={lang}
      />
      <HeroSection t={t} />
      <ProblemSection t={t} />
      <SolutionSection t={t} />
      <SystemSection t={t} />
      <ContactSection t={t} />
      <RequestFormSection t={t} />
      <TrustBandSection t={t} />
      <FooterSection t={t} />

      {/* WhatsApp Floating Button */}
      <a
        className="sx-wa-float"
        href={WA_LINK}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
      >
        <svg
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="#i-wa" />
        </svg>
      </a>
    </div>
  );
}
