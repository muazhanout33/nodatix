import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AutomationSamples from "@/components/AutomationSamples";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] overflow-x-hidden">
      <Navbar />
      <Hero />
      <AutomationSamples />
      <Problems />
      <Services />
      <Benefits />
      <About />
      <Blog />
      <Booking />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
}