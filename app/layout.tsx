import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import WhatsAppButton from "@/components/WhatsAppButton";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScalaryX | AI Automation & Marketing Systems",
  description:
    "Scalaryx helps businesses automate workflows, save time, and scale faster with AI automation, n8n integrations, and smart marketing systems.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "AI Automation Agency Egypt",
    "Marketing Automation Cairo",
    "AI Solutions for Small Business",
    "Digital Marketing Egypt",
    "AI Automation",
    "Business Automation",
    "AI Agents",
    "Workflow Automation",
    "Lead Automation",
    "ScalaryX",
    "AI Agency",
    "Performance Marketing",
  ],
  authors: [{ name: "Moaaz Hanout", url: "https://scalaryx.com" }],
  creator: "ScalaryX",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://www.scalaryx.com",
    title: "ScalaryX | AI Automation & Marketing Systems",
    description:
      "Scalaryx helps businesses automate workflows, save time, and scale faster with AI automation, n8n integrations, and smart marketing systems.",
    siteName: "Scalaryx",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scalaryx - AI Automation & Marketing Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalaryX | AI Automation & Marketing Systems",
    description:
      "Scalaryx helps businesses automate workflows, save time, and scale faster with AI automation, n8n integrations, and smart marketing systems.",
    creator: "@scalaryx",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://scalaryx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics 4 — deferred */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-B0EQ5V5MDM`}
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B0EQ5V5MDM', {
                page_title: document.title,
                page_location: window.location.href
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ScalaryX",
              url: "https://scalaryx.com",
              logo: "https://scalaryx.com/logo.jpg.jpeg",
              description:
                "Scalaryx helps businesses automate workflows, save time, and scale faster with AI automation, n8n integrations, and smart marketing systems.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
                addressLocality: "Egypt",
              },
              areaServed: {
                "@type": "Country",
                name: "Egypt",
              },
              serviceType: [
                "AI Automation",
                "n8n Workflow Automation",
                "Marketing Automation",
                "Business Automation",
                "Digital Marketing",
              ],
              sameAs: [
                "https://twitter.com/scalaryx",
                "https://instagram.com/scalaryx",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "scalaryx@gmail.com",
                contactType: "Sales",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is AI Automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI Automation is using artificial intelligence tools — like ChatGPT, n8n, and Zapier — to handle repetitive business tasks automatically.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can automation help my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Automation frees your team from time-consuming tasks by handling things like customer support replies, lead generation, email marketing campaigns, and social media posting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does automation cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pricing depends on your business needs and the complexity of the system. Simple automations can start at a low budget.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            {children}
            <AnalyticsTracker />
            <WhatsAppButton />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
