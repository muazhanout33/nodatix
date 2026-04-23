import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScalaryX | AI Automation Agency",
  description:
    "ScalaryX helps businesses save time and scale using AI Automation. We automate repetitive tasks, manage leads, and generate content with smart AI systems.",
  keywords: [
    "AI Automation",
    "Business Automation",
    "AI Agents",
    "Workflow Automation",
    "Lead Automation",
    "ScalaryX",
    "AI Agency",
  ],
  authors: [{ name: "Moaaz Hanout", url: "https://scalaryx.com" }],
  creator: "ScalaryX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scalaryx.com",
    title: "ScalaryX | AI Automation Agency",
    description:
      "Automate repetitive tasks, manage leads, and generate content using smart AI systems. Book a free strategy call today.",
    siteName: "ScalaryX",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalaryX | AI Automation Agency",
    description:
      "Save 50–80% of your time with AI Automation. Smart systems for businesses that want to scale.",
    creator: "@scalaryx",
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
      <body className={`${inter.variable} antialiased bg-[#000000] text-white`}>
        {children}
      </body>
    </html>
  );
}
