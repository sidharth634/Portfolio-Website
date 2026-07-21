"use client";

/**
 * Skills Section
 * Replaces the "Work Process" section from reference with skills.
 * Features:
 * - Category grid (Programming, AI/CV, Tools, Soft Skills)
 * - Animated progress bars triggered on scroll
 * - Matches reference card layout (asymmetric 2-column grid)
 */
import React, { useEffect, useRef, useState } from "react";
import {
  CodeBracketSquareIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

/* ── Skill Data ── */
const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: CodeBracketSquareIcon,
    color: "#8b5cf6",
    skills: [
      { name: "Python",  level: 90 },
      { name: "Java",    level: 75 },
      { name: "ReactJS", level: 70 },
      { name: "Flask",   level: 72 },
      { name: "MySQL",   level: 68 },
    ],
  },
  {
    title: "AI & Computer Vision",
    icon: CpuChipIcon,
    color: "#06b6d4",
    skills: [
      { name: "YOLOv8",  level: 80 },
      { name: "OpenCV",  level: 78 },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: WrenchScrewdriverIcon,
    color: "#10b981",
    skills: [
      { name: "AWS",             level: 80 },
      { name: "Cloud Computing", level: 85 },
      { name: "Git",             level: 82 },
      { name: "GitHub",          level: 85 },
      { name: "VS Code",         level: 95 },
    ],
  },
  {
    title: "Soft Skills",
    icon: UserGroupIcon,
    color: "#f59e0b",
    skills: [
      { name: "Leadership",      level: 85 },
      { name: "Communication",   level: 88 },
      { name: "Teamwork",        level: 90 },
      { name: "Creativity",      level: 82 },
      { name: "Problem Solving", level: 87 },
    ],
  },
];

/* ── Animated Skill Bar ── */
function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{name}</span>
        <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: animate ? `${level}%` : "0%",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

/* ── Skill Category Card ── */
function SkillCard({
  category,
  animate,
  delay,
}: {
  category: typeof SKILL_CATEGORIES[0];
  animate: boolean;
  delay: number;
}) {
  const Icon = category.icon;
  return (
    <div
      className="card p-6 reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color: category.color }} />
        </div>
        <h3 className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
          {category.title}
        </h3>
      </div>

      {/* Skill bars */}
      {category.skills.map(skill => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          animate={animate}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          entry.target.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 section-alt">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14 reveal">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build intelligent, scalable software.
          </p>
        </div>

        {/* Cards grid — matches reference asymmetric 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard
              key={cat.title}
              category={cat}
              animate={animate}
              delay={i * 100}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
