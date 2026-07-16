"use client";

/**
 * Projects Section
 * Matches reference Portfolio section style:
 * - Project cards with image, tag, title, description
 * - Hover overlay with GitHub & Live Demo buttons
 * - Grid layout with reveal animation
 */
import React, { useEffect, useRef } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { GitHubIcon } from "./Icons";

/* ── Project Data ── */
const PROJECTS = [
  {
    id: 1,
    title: "Motion Fruit Ninja",
    tag: "GAME DEV",
    tagColor: "#8b5cf6",
    description:
      "A motion-controlled desktop game where a smartphone acts as a wireless controller. Features real-time motion tracking, fruit slicing, visual effects, and score tracking.",
    tech: ["Electron", "Three.js", "WebSockets", "JavaScript"],
    github: "https://github.com/sidharth634/Motion-Fruit-Ninja",
    demo: "https://github.com/sidharth634/Motion-Fruit-Ninja/releases#release-Prototype-v2.0",
    /* TO REPLACE: add /public/project-1.jpg with actual screenshot */
    image: null,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "Fire Detection System",
    tag: "AI / COMPUTER VISION",
    tagColor: "#ef4444",
    description:
      "Deep learning-based fire and smoke detection using YOLOv8. Detects fire in images, videos, and live webcam streams with high accuracy.",
    tech: ["Python", "YOLOv8", "OpenCV", "Flask"],
    github: "https://github.com/sidharth634/New-Fire-Detection-System",
    demo: "https://sidharth634.github.io/New-Fire-Detection-System/",
    /* TO REPLACE: add /public/project-2.jpg with actual screenshot */
    image: null,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "Movie Ticket Booking System",
    tag: "DESKTOP APP",
    tagColor: "#10b981",
    description:
      "Java Swing desktop application with seat booking, user authentication, booking history, payment handling, and SQLite database integration.",
    tech: ["Java", "Java Swing", "SQLite"],
    github: "https://github.com/sidharth634/BookMyShowDeluxe",
    demo: "https://github.com/sidharth634/BookMyShowDeluxe/releases",
    /* TO REPLACE: add /public/project-3.jpg with actual screenshot */
    image: null,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

/* ── Project Card ── */
function ProjectCard({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) {
  return (
    <div className="project-card reveal group" style={{ transitionDelay: `${delay}ms` }}>

      {/* Card image / gradient placeholder */}
      <div
        className="w-full h-52 relative"
        style={{
          background: project.gradient,
        }}
      >
        {/*
          TO REPLACE IMAGES:
          1. Add project screenshot as /public/project-{id}.jpg
          2. Uncomment the Image component below and remove the placeholder div
        */}
        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-opacity-60 text-5xl font-bold opacity-30">
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="project-overlay">
          <div className="project-overlay-content w-full">
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6" style={{ backgroundColor: "var(--card-bg)" }}>
        {/* Tag */}
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: project.tagColor }}
        >
          {project.tag}
        </span>

        {/* Title */}
        <h3
          className="text-xl font-bold mt-2 mb-3 group-hover:text-primary-500 transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: "var(--stat-bg)", color: "var(--accent)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real-world software I&apos;ve built — from AI vision systems to interactive games.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 120} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/sidharth634"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <GitHubIcon className="w-4 h-4" />
            View More on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
