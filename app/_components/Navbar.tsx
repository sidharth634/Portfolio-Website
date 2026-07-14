"use client";

/**
 * Navbar Component
 * Sticky, blurred navigation bar with:
 * - Logo (initials-based, matches reference)
 * - Nav links with active state highlighting
 * - Dark/light theme toggle
 * - Mobile hamburger menu
 * - Smooth scroll behaviour
 */
import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "./Icons";

const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Internship",   href: "#internship" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("#home");

  // Add shadow & background blur once user scrolls past 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active nav link based on scroll position
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setActiveLink(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-sticky ${
        scrolled
          ? "shadow-md py-3"
          : "py-5"
      }`}
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-3 group" onClick={() => handleLinkClick("#home")}>
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:bg-primary-600 transition-colors">
            HS
          </div>
          <span className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
            Sidharthan
          </span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeLink === link.href ? "active" : ""}`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right Controls ── */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* Contact CTA — Desktop */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-primary py-2 px-5 text-sm"
            onClick={() => handleLinkClick("#contact")}
          >
            Let&apos;s Connect
          </a>

          {/* Hamburger — Mobile */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden mobile-menu overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-2">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeLink === link.href
                  ? "bg-primary-500 text-white"
                  : "hover:bg-primary-50 dark:hover:bg-primary-900"
              }`}
              style={{ color: activeLink === link.href ? "white" : "var(--text-primary)" }}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-2 text-center justify-center" onClick={() => handleLinkClick("#contact")}>
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}
