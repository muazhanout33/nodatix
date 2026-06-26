import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import LazySections from "@/components/LazySections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <LazySections />
      <Footer />
    </main>
  );
}
