"use client";

import dynamic from "next/dynamic";

const Problems = dynamic(() => import("@/components/Problems"), { ssr: false });
const Benefits = dynamic(() => import("@/components/Benefits"), { ssr: false });
const WhyScale = dynamic(() => import("@/components/WhyScale"), { ssr: false });
const Services = dynamic(() => import("@/components/Services"), { ssr: false });
const InteractiveProjects = dynamic(() => import("@/components/InteractiveProjects"), { ssr: false });
const Process = dynamic(() => import("@/components/Process"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Booking = dynamic(() => import("@/components/Booking"), { ssr: false });
const Capabilities = dynamic(() => import("@/components/Capabilities"), { ssr: false });
const Blog = dynamic(() => import("@/components/Blog"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function LazySections() {
  return (
    <>
      <Problems />
      <Benefits />
      <WhyScale />
      <Services />
      <InteractiveProjects />
      <Process />
      <About />
      <Booking />
      <Capabilities />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
