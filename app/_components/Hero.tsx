"use client";

/**
 * Hero Section
 * Matches reference layout: Left text + CTA, Right profile image
 * Features:
 * - Gradient background (purple → white → teal)
 * - Animated headline
 * - Stats counters (Education year, Projects, Hackathons)
 * - CTA buttons: Contact & Download Resume
 * - Floating developer illustration on right
 */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const STATS = [
  { value: "2024", label: "Batch Year" },
  { value: "5+",   label: "Projects Built" },
  { value: "2",    label: "Hackathon Wins" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Typewriter-style fade-in on mount
  useEffect(() => {
    const el = headingRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <section
      id="home"
      className="hero-gradient pt-28 lg:pt-40 pb-0"
    >
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row lg:gap-x-16 xl:gap-x-24 items-center">

          {/* ── Left Column: Text & Stats ── */}
          <div className="lg:w-3/5 flex flex-col justify-between gap-y-12 animate-fadeInUp">
            <div>
              {/* Greeting badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                   style={{ backgroundColor: "var(--stat-bg)", color: "var(--accent)" }}>
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Available for Opportunities
              </div>

              {/* Main Heading */}
              <h1
                ref={headingRef}
                className="text-gray-900 dark:text-white font-bold text-5xl lg:text-7xl leading-tight mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Hello, I&apos;m
                <br />
                <span className="text-primary-500">Sidharthan</span>
              </h1>

              {/* Role description */}
              <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Computer Science Engineering Student · Python Developer ·
                AI &amp; Computer Vision Enthusiast · Full Stack Learner
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  Say Hello!
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-outline"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card flex flex-col items-center justify-center gap-1.5 p-5 rounded-xl"
                >
                  <div className="font-bold text-2xl lg:text-3xl" style={{ color: "var(--text-primary)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Profile Image ── */}
          <div className="lg:w-2/5 mt-12 lg:mt-0 animate-scaleIn">
            <div
              className="rounded-3xl overflow-hidden flex items-center justify-center shadow-card"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="relative w-full max-h-[460px] aspect-square animate-float">
                <Image
                  src="/hero.png"
                  alt="H. Sidharthan — CS Engineer & Python Developer"
                  fill
                  className="object-cover object-top rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
