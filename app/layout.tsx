import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nodatix | AI Automation Agency",
  description:
    "Nodatix helps businesses save time and scale using AI Automation. We automate repetitive tasks, manage leads, and generate content with smart AI systems.",
  keywords: [
    "AI Automation",
    "Business Automation",
    "AI Agents",
    "Workflow Automation",
    "Lead Automation",
    "Nodatix",
    "AI Agency",
  ],
  authors: [{ name: "Moaaz Hanout", url: "https://nodatix.com" }],
  creator: "Nodatix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nodatix.com",
    title: "Nodatix | AI Automation Agency",
    description:
      "Automate repetitive tasks, manage leads, and generate content using smart AI systems. Book a free strategy call today.",
    siteName: "Nodatix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodatix | AI Automation Agency",
    description:
      "Save 50–80% of your time with AI Automation. Smart systems for businesses that want to scale.",
    creator: "@nodatix",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#08090d] text-white`}>
        {children}
      </body>
    </html>
  );
}
