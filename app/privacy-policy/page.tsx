import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | ScalaryX",
  description: "ScalaryX Privacy Policy - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "var(--page-bg)" }}>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
