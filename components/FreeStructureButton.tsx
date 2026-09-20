"use client";

import { useI18n } from "@/lib/i18n";

export function FreeStructureButton({
  className = "btn-ghost",
  short = false,
  children,
}: {
  className?: string;
  short?: boolean;
  children?: React.ReactNode;
}) {
  const { t, locale } = useI18n();

  const message =
    locale === "ar"
      ? "مرحباً ScalaryX، أرغب في الحصول على هيكلة مجانية لمشروعي."
      : "Hello ScalaryX, I would like to request a free business/automation structure for my project.";

  const whatsappUrl = `https://wa.me/201105920342?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={t.cta_free_structure}
    >
      <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6Zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25ZM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6Zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25Z" />
      </svg>
      <span>{children || (short ? t.cta_free_structure_short : t.cta_free_structure)}</span>
    </a>
  );
}
