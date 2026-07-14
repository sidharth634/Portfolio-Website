"use client";

/**
 * Footer Component
 * Matches reference dark footer:
 * - Logo + Nav links row
 * - Copyright text
 * - Dark background (navy/dark)
 * - Social icons
 */
import React from "react";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "./Icons";

const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Internship",   href: "#internship" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: GitHubIcon,   href: "https://github.com/sidharth634",                                   label: "GitHub"    },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/sidharthan-hariharasudhan-1222ab328",  label: "LinkedIn"  },
  { icon: GlobeIcon,    href: "https://sidharth1-github-io.vercel.app/",                          label: "Portfolio" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container mx-auto px-4 lg:px-8 py-10">
        {/* ── Top Row: Logo + Nav + Social ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-primary-400 transition-colors">
              HS
            </div>
            <span className="font-bold text-lg text-white">Sidharthan</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-primary-400"
                style={{ color: "var(--footer-text)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500 transition-all duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-b border-white border-opacity-10 mb-8" />

        {/* ── Bottom Row: Copyright ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm"
             style={{ color: "var(--footer-text)" }}>
          <span>Copyright © {currentYear} H. Sidharthan. All Rights Reserved.</span>
          <span className="text-xs opacity-60">
            Built with Next.js &amp; TailwindCSS
          </span>
        </div>
      </div>
    </footer>
  );
}
