import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScalaryX | AI Automation & Performance Marketing Agency in Egypt",
  description:
    "ScalaryX helps businesses scale faster using AI Automation and Performance Marketing. Save time, convert more leads, and grow smarter.",
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
    url: "https://scalaryx.com",
    title: "ScalaryX | AI Automation & Performance Marketing Agency in Egypt",
    description:
      "ScalaryX helps businesses scale faster using AI Automation and Performance Marketing. Save time, convert more leads, and grow smarter.",
    siteName: "ScalaryX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScalaryX - AI Automation & Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalaryX | AI Automation & Performance Marketing Agency in Egypt",
    description:
      "ScalaryX helps businesses scale faster using AI Automation and Performance Marketing. Save time, convert more leads, and grow smarter.",
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
                "ScalaryX helps businesses scale faster using AI Automation and Performance Marketing. Save time, convert more leads, and grow smarter.",
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
                "Performance Marketing",
                "Lead Management",
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
      </body>
    </html>
  );
}
