"use client";

/**
 * Internship Section
 * Premium layout matching card-based design with scroll reveal.
 * Features:
 * - Clean metadata block (Title, Date, Collaborators)
 * - Beautiful custom logo/badges block
 * - Rich description focusing on key technologies
 */
import React, { useEffect, useRef } from "react";
import { BriefcaseIcon, CalendarIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

export default function Internship() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="internship" ref={sectionRef} className="py-24 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-title">Internship</h2>
          <p className="section-subtitle">
            Professional experience and industrial training programs.
          </p>
        </div>

        {/* Internship Card */}
        <div className="max-w-4xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
          <div
            className="rounded-3xl shadow-card p-8 lg:p-12 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(139,92,246,0.1)", color: "var(--accent)" }}
                >
                  <BriefcaseIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                    AI for Sustainability Virtual Internship
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-1 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    <span className="flex items-center gap-1.5">
                      <BuildingOfficeIcon className="w-4 h-4 text-primary-500" />
                      IBM SkillsBuild · AICTE · 1M1B
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold self-start md:self-center"
                style={{ backgroundColor: "var(--stat-bg)", color: "var(--accent)" }}
              >
                <CalendarIcon className="w-4 h-4" />
                Completed
              </div>
            </div>

            {/* Description / Body Area */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Completed an AI-focused virtual internship in collaboration with IBM SkillsBuild, AICTE, and 1M1B, gaining hands-on experience in Agentic AI, Retrieval-Augmented Generation (RAG), responsible AI, and AI-driven sustainability solutions while developing practical problem-solving skills aligned with the UN Sustainable Development Goals (SDGs).
              </p>

              {/* Technologies / Key Focus Areas */}
              <div>
                <h4 className="text-sm font-bold tracking-wider uppercase mb-3" style={{ color: "var(--text-primary)" }}>
                  Key Areas & Technologies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["Agentic AI", "Retrieval-Augmented Generation (RAG)", "Responsible AI", "AI Sustainability Solutions", "UN SDGs", "IBM SkillsBuild"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "var(--stat-bg)", color: "var(--accent)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
