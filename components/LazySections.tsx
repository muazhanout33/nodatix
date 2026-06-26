"use client";

import dynamic from "next/dynamic";

const AutomationSamples = dynamic(() => import("@/components/AutomationSamples"), { ssr: false });
const Problems = dynamic(() => import("@/components/Problems"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Blog = dynamic(() => import("@/components/Blog"), { ssr: false });
const Booking = dynamic(() => import("@/components/Booking"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });

export default function LazySections() {
  return (
    <>
      <AutomationSamples />
      <Problems />
      <Services />
      <Benefits />
      <About />
      <Blog />
      <Booking />
      <Contact />
      <FAQ />
    </>
  );
}
