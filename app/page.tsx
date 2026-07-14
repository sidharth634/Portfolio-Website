/**
 * Main Portfolio Page — H. Sidharthan
 * Assembles all section components in the exact order of the reference:
 * Navbar → Hero → About → Skills → Projects → Achievements → Contact → Footer → BackToTop
 */

import Navbar      from "./_components/Navbar";
import Hero        from "./_components/Hero";
import About       from "./_components/About";
import Skills      from "./_components/Skills";
import Projects    from "./_components/Projects";
import Internship  from "./_components/Internship";
import Achievements from "./_components/Achievements";
import Contact     from "./_components/Contact";
import Footer      from "./_components/Footer";
import BackToTop   from "./_components/BackToTop";

export default function Home() {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />

      <main>
        {/* 1. Hero — gradient background, name, CTA */}
        <Hero />

        {/* 2. About — bio, education, profile */}
        <About />

        {/* 3. Skills — animated progress bars by category */}
        <Skills />

        {/* 4. Projects — cards with hover overlay + GitHub/Demo links */}
        <Projects />

        {/* 5. Internship */}
        <Internship />

        {/* 6. Achievements & Certifications */}
        <Achievements />

        {/* 6. Contact — form + info */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating back-to-top button */}
      <BackToTop />
    </>
  );
}
