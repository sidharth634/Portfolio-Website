"use client";

/**
 * Achievements & Certifications Section
 * Replaces reference "Services / Blogs" sections.
 * Left: Hackathon achievements with trophy icon cards
 * Right: Certifications as a badge/chip list
 * Matches reference two-column card style.
 */
import React, { useEffect, useRef } from "react";
import { TrophyIcon, AcademicCapIcon, StarIcon } from "@heroicons/react/24/solid";

const ACHIEVEMENTS = [
  {
    icon: TrophyIcon,
    color: "#f59e0b",
    title: "Winner – Codezilla Event",
    subtitle: "Pinnacle&apos;25",
    description:
      "Won the Codezilla competitive programming event at Pinnacle&apos;25, demonstrating strong algorithmic and problem-solving skills.",
  },
  {
    icon: StarIcon,
    color: "#8b5cf6",
    title: "Theme Prize Winner",
    subtitle: "CMR HackFest 3.0, Hyderabad",
    description:
      "Won the Transportation &amp; Logistics Theme Prize at CMR HackFest 3.0 in Hyderabad, building an innovative logistics solution under a 24-hour hackathon.",
  },
  {
    icon: TrophyIcon,
    color: "#10b981",
    title: "First Prize – Project Arena",
    subtitle: "PRAZYOTEAV&apos;26 (Easwari Engineering College)",
    description:
      "Participated in PRAZYOTEAV&apos;26 held at our college as part of a team, showcasing innovation, technical skills, and teamwork. Our team secured First Prize in the Project Arena event conducted by the Institution of Electronics and Telecommunication Engineers Student Forum (IETE ISF) in association with the Department of Electronics and Communication Engineering, Easwari Engineering College.",
  },
];

const CERTIFICATIONS = [
  { name: "AWS Certified Cloud Practitioner",                        grade: "",       provider: "Amazon Web Services"    },
  { name: "Industrial IoT",                                         grade: "Elite",  provider: "NPTEL (IIT)"            },
  { name: "Human-Computer Interactions",                            grade: "Elite",  provider: "NPTEL (IIT)"            },
  { name: "MongoDB Basics",                                         grade: "",       provider: "MongoDB University"     },
  { name: "Power Bi for beginners",                                 grade: "",       provider: "Simplilearn and Microsoft" },
  { name: "Introduction to Generative AI Studio",                   grade: "",       provider: "Simplilearn and Google Cloud" },
  { name: "Core Java Programming Revisited",                        grade: "",       provider: "Infosys Springboard"    },
  { name: "Career Essentials in Generative AI",                     grade: "",       provider: "Microsoft & LinkedIn"   },
];

export default function Achievements() {
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
    <section
      id="achievements"
      ref={sectionRef}
      className="py-24 section-alt"
    >
      <div className="container mx-auto px-4 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Left: Achievements ── */}
          <div className="lg:w-1/2">
            <div className="reveal mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Achievements
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Recognition from hackathons and competitive events.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {ACHIEVEMENTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="achievement-card reveal"
                    style={{ transitionDelay: `${i * 120}ms` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}
                           dangerouslySetInnerHTML={{ __html: item.title }} />
                      <div className="text-sm font-medium mb-2 text-primary-500"
                           dangerouslySetInnerHTML={{ __html: item.subtitle }} />
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}
                         dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Certifications ── */}
          <div className="lg:w-1/2">
            <div className="reveal mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Certifications
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                Credentials from globally recognised platforms.
              </p>
            </div>

            {/* Certification card list */}
            <div className="flex flex-col gap-3 reveal" style={{ transitionDelay: "0.2s" }}>
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:shadow-card-hover"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--stat-bg)" }}
                  >
                    <AcademicCapIcon className="w-5 h-5" style={{ color: "var(--accent)" }} />
                  </div>
                  <div className="flex-1" style={{ minWidth: 0 }}>
                    <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {cert.name}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                      {cert.provider}
                    </div>
                  </div>
                  {cert.grade && (
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "rgba(139,92,246,0.1)", color: "var(--accent)" }}
                    >
                      {cert.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
