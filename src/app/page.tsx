"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
