"use client";

/**
 * Contact Section
 * Exactly matches reference "Let's discuss your Project" layout:
 * - Left: Contact details with icon boxes + social links
 * - Right: Contact form
 * Wrapped in a white card that floats on dark footer background
 */
import React, { useEffect, useRef, useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "./Icons";

const CONTACT_INFO = [
  {
    icon: MapPinIcon,
    label: "Location:",
    value: "Chennai, Tamil Nadu, India",
    href: null,
  },
  {
    icon: EnvelopeIcon,
    label: "My Email:",
    value: "sidharthhs2006@gmail.com",
    href: "mailto:sidharthhs2006@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Call Me Now:",
    value: "+91 81222 14053",
    href: "tel:+918122214053",
  },
];

const SOCIAL_LINKS = [
  { icon: GitHubIcon,   href: "https://github.com/sidharth634",                                          label: "GitHub"    },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/sidharthan-hariharasudhan-1222ab328",         label: "LinkedIn"  },
  { icon: GlobeIcon,    href: "https://sidharth1-github-io.vercel.app/",                                 label: "Portfolio" },
];

const TARGET_EMAIL = "sidharthhs2006@gmail.com";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: formState.subject,
          message: formState.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success === "true") {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError("Failed to send message. Please try again or email directly.");
      }
    } catch (err) {
      setSubmitError("An error occurred. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact"
      ref={sectionRef}
      className="py-24"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Floating card (matches reference exactly) */}
        <div
          className="rounded-3xl shadow-card p-8 lg:p-14"
          style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}
        >
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ── Left: Info ── */}
            <div className="lg:w-2/5 reveal">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Let&apos;s Connect
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I&apos;m always open to new opportunities, collaborations, or just a friendly chat.
                Feel free to reach out — I&apos;ll get back to you soon!
              </p>

              {/* Contact items */}
              <div className="flex flex-col gap-6 mb-10">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="contact-icon-box">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "var(--text-secondary)" }}>{label}</div>
                      {href ? (
                        <a
                          href={href}
                          className="font-semibold hover:text-primary-500 transition-colors"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="font-semibold" style={{ color: "var(--text-primary)" }}>{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-primary-500 hover:text-white"
                    style={{ backgroundColor: "var(--stat-bg)", color: "var(--accent)" }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="lg:w-3/5 reveal" style={{ transitionDelay: "0.2s" }}>
              <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
                Send me a message and I&apos;ll respond within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl text-sm font-medium text-white bg-primary-500">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-xl text-sm font-medium text-white bg-red-500">
                  ✕ {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Subject */}
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <textarea
                    name="message"
                    placeholder="Message*"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting} className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
