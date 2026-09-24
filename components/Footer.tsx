"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  const footerLinks = {
    [t.footer_services]: [
      { label: t.footer_svc1, href: "#services" },
      { label: t.footer_svc2, href: "#services" },
      { label: t.footer_svc3, href: "#services" },
      { label: t.footer_svc4, href: "#services" },
    ],
    [t.footer_marketing]: [
      { label: t.footer_mkt1, href: "#services" },
      { label: t.footer_mkt2, href: "#services" },
      { label: t.footer_mkt3, href: "#services" },
    ],
    [t.footer_company]: [
      { label: t.footer_cpy1, href: "#about" },
      { label: t.footer_cpy2, href: "#benefits" },
      { label: t.footer_cpy3, href: "#testimonials" },
      { label: t.footer_cpy4, href: "#contact" },
    ],
  };

  return (
    <footer className="border-t border-[var(--footer-border)] pt-10 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6" style={{ background: "var(--footer-bg)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/favicon.ico.webp"
                alt="ScalaryX Logo"
                width={48}
                height={48}
                className="h-9 w-auto object-contain"
              />
              <span className="text-[var(--text-primary)] font-bold text-lg tracking-tight">
                Scalary<span className="text-[var(--accent)]">X</span>
              </span>
            </Link>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed max-w-xs">
              {t.footer_desc}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/scalary_x?igsh=MWJ4eDJ6bWNsZWdhdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[var(--footer-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com/share/1Lf3Sf82Qh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[var(--footer-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--border-accent)] transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <div className="text-[var(--text-primary)] font-semibold text-xs sm:text-sm mb-3 sm:mb-5 uppercase tracking-wider">
                {group}
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[var(--text-secondary)] text-xs sm:text-sm hover:text-[var(--accent)] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--footer-border)] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[var(--text-muted)] text-xs">
            &copy; {new Date().getFullYear()} ScalaryX. {t.footer_rights}
          </p>
          <div className="flex gap-5">
            <a
              href="/privacy-policy"
              className="text-[var(--text-muted)] text-xs hover:text-[var(--text-secondary)] transition-colors"
            >
              {t.footer_privacy}
            </a>
            <a
              href="/terms-of-service"
              className="text-[var(--text-muted)] text-xs hover:text-[var(--text-secondary)] transition-colors"
            >
              {t.footer_terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
