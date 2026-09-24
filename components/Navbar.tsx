"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BookCallButton } from "./BookCallButton";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "#problems", label: t.nav_problems },
    { href: "#services", label: t.nav_services },
    { href: "#process", label: t.nav_process },
    { href: "#benefits", label: t.nav_benefits },
    { href: "#about", label: t.nav_about },
    { href: "#faq", label: t.nav_faq },
    { href: "#contact", label: t.nav_contact },
    { href: "/interactive", label: t.nav_projects },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-20">
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
          <Image src="/favicon.ico.webp" alt="ScalaryX" width={56} height={56} className="h-8 sm:h-10 md:h-12 w-auto" priority />
          <span className="text-base sm:text-xl font-bold tracking-tight" style={{ fontFamily: "'IBM Plex Sans Arabic', var(--font-sans), system-ui, sans-serif" }}>
            <span style={{ color: "var(--text-primary)" }}>Scalary</span><span style={{ color: "var(--accent)" }}>X</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] xl:text-sm transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border)",
              background: "var(--badge-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            {locale === "ar" ? "EN" : "عربي"}
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 border"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border)",
              background: "var(--badge-bg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "التبديل إلى الوضع الداكن"}
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <BookCallButton className="btn-primary" />
        </div>

        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="flex items-center px-2 py-1.5 rounded text-[11px] font-semibold transition-all duration-200 border min-w-[36px] justify-center"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border)",
              background: "var(--badge-bg)",
            }}
            aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          >
            {locale === "ar" ? "EN" : "عربي"}
          </button>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded transition-all duration-200 border"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border)",
              background: "var(--badge-bg)",
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "التبديل إلى الوضع الداكن"}
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-8 h-8"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px] items-center justify-center w-5 h-5">
              <span
                className="block w-5 h-[1.5px] rounded-full transition-all duration-300 origin-center"
                style={{
                  background: "var(--text-primary)",
                  transform: menuOpen ? "rotate(45deg) translate(0, 0)" : "",
                }}
              />
              <span
                className="block w-5 h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: "var(--text-primary)",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "scaleX(0)" : "",
                }}
              />
              <span
                className="block w-5 h-[1.5px] rounded-full transition-all duration-300 origin-center"
                style={{
                  background: "var(--text-primary)",
                  transform: menuOpen ? "rotate(-45deg) translate(0, 0)" : "",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t overflow-hidden"
            style={{ background: "var(--mobile-menu-bg)", borderColor: "var(--border)" }}
          >
            <div className="flex flex-col px-4 py-3 gap-0.5" style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="transition-colors py-2.5 px-3 text-sm font-medium rounded-lg"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </a>
              ))}
              <div onClick={() => setMenuOpen(false)} className="mt-2">
                <BookCallButton className="btn-primary w-full py-3 text-sm" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
