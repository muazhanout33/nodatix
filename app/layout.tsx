import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scalaryx | AI Automation, n8n Workflows & Business Growth",
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
    locale: "en_US",
    url: "https://www.scalaryx.com",
    title: "Scalaryx | AI Automation, n8n Workflows & Business Growth",
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
    title: "Scalaryx | AI Automation, n8n Workflows & Business Growth",
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-B0EQ5V5MDM`}
        />
        <Script
          strategy="afterInteractive"
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
      </head>
      <body className={`${inter.variable} antialiased bg-[#000000] text-white`}>
        {children}
        <AnalyticsTracker />
        <WhatsAppButton />
      </body>
    </html>
  );
}
