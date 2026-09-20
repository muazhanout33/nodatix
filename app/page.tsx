import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LazySections from "@/components/LazySections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{ background: "var(--page-bg)" }}>
      <Navbar />
      <Hero />
      <LazySections />
      <Footer />
    </main>
  );
}
