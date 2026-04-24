import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Benefits />
      <About />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}