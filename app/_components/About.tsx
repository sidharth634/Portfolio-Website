"use client";

/**
 * About Section
 * Matches reference: Left photo card, Right bio + buttons
 * Features:
 * - Profile image card with social links overlay
 * - Education card
 * - Bio text
 * - My Projects + Download CV buttons
 * - Reveal animation on scroll
 */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "./Icons";

const SOCIAL_LINKS = [
  { icon: GitHubIcon,   href: "https://github.com/sidharth634",                                          label: "GitHub"    },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/sidharthan-hariharasudhan-1222ab328",         label: "LinkedIn"  },
  { icon: GlobeIcon,    href: "https://sidharth1-github-io.vercel.app/",                                 label: "Portfolio" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* ── Overlapping card wrapper (matches reference shadow card pattern) ── */}
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className="rounded-3xl shadow-card p-8 lg:p-16"
          style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* ── Left: Profile Image Card ── */}
            <div className="lg:w-2/5 reveal">
              <div
                className="relative rounded-2xl overflow-hidden shadow-card"
                style={{ backgroundColor: "var(--section-alt)" }}
              >
                {/*
                  Profile photo placeholder.
                  TO REPLACE: add your photo as /public/profile.jpg
                  and change src below from /hero.png to /profile.jpg
                */}
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/hero.png"
                    alt="H. Sidharthan profile photo"
                    fill
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Social links strip */}
                <div
                  className="flex items-center justify-center gap-4 py-4 px-6"
                  style={{ backgroundColor: "var(--card-bg)" }}
                >
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-primary-500 hover:text-white"
                      style={{ backgroundColor: "var(--stat-bg)", color: "var(--accent)" }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Bio Text & Education ── */}
            <div className="lg:w-3/5 reveal" style={{ transitionDelay: "0.2s" }}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>
                I am a CS Engineer &amp; Python Developer
              </h2>

              <p className="mb-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I am a Computer Science Engineering student passionate about building
                real-world software using AI, Python, Java, React, and Computer Vision.
                I enjoy solving practical problems, participating in hackathons, and
                continuously learning modern technologies.
              </p>

              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                My goal is to become a skilled Software Engineer specialising in
                AI-powered applications that make a real difference in people&apos;s lives.
              </p>

              {/* Education Card */}
              <div
                className="rounded-2xl p-5 mb-8"
                style={{ backgroundColor: "var(--stat-bg)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    🎓
                  </div>
                  <div>
                    <div className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                      B.E Computer Science Engineering
                    </div>
                    <div className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>
                      Easwari Engineering College · 2024–2028
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                      CGPA: 8.2
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  My Projects
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a href="/resume.pdf" download className="btn-outline">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
