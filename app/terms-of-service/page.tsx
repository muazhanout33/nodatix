import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | ScalaryX",
  description: "ScalaryX Terms of Service - Learn the terms and conditions for using our services.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "var(--page-bg)" }}>
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  );
}
