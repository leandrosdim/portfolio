"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { submitContactForm } from "./actions/submitContactForm";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";

const PROJECT_TYPES = [
  "Web Application",
  "Mobile Application",
  "AI Solution",
  "API Integration",
  "Enterprise Platform",
  "Consulting",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    if (!formData.name.trim()) {
      setSubmitError("Name is required");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitError("Valid email is required");
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setSubmitError("Message is required");
      setIsSubmitting(false);
      return;
    }

    if (formData.message.trim().length > 2000) {
      setSubmitError("Message is too long (max 2000 characters)");
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", formData.projectType || "General Inquiry");
      formDataObj.append("message", formData.message);
      formDataObj.append("website", "");

      const result = await submitContactForm(formDataObj);

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", projectType: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(result.error || "Failed to send message");
      }
    } catch {
      setSubmitError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <ScrollReveal>
                <p className="text-brand-accent font-medium mb-4 text-sm uppercase tracking-wider">
                  Contact
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let&apos;s Build Something
                  <br />
                  <span className="text-gradient">Great Together</span>
                </h1>
                <p className="text-brand-text-secondary leading-relaxed mb-8">
                  Whether you have a project in mind, need a technical consultation, or want
                  to explore how software can transform your business — I&apos;m here to help.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-text-primary mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-text-primary mb-1">
                        Location
                      </h3>
                      <p className="text-sm text-brand-text-secondary">
                        {profile.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-brand-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-text-primary mb-1">
                        Response Time
                      </h3>
                      <p className="text-sm text-brand-text-secondary">
                        Usually within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/leandrosdim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/[0.04] border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/leandros-dimitriadis-648765179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/[0.04] border border-brand-border flex items-center justify-center text-brand-text-secondary hover:text-brand-accent hover:border-brand-accent/30 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="mt-8">
                  <a
                    href="/leandros-dimitriadis-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-transparent text-brand-text-primary border border-brand-border hover:border-brand-border-hover hover:bg-white/[0.03] px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form */}
            <ScrollReveal delay={150}>
              <div className="rounded-glass-lg border border-brand-border bg-[var(--glass-bg)] backdrop-blur-glass p-8">
                <h2 className="text-xl font-bold text-brand-text-primary mb-6">
                  Send a Message
                </h2>

                {submitSuccess ? (
                  <div className="rounded-glass border border-emerald-500/20 bg-emerald-500/10 p-6 text-center">
                    <svg
                      className="w-12 h-12 text-emerald-400 mx-auto mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-brand-text-primary mb-2">
                      Message Sent
                    </h3>
                    <p className="text-sm text-brand-text-secondary">
                      Thank you! I&apos;ll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="hidden">
                      <label htmlFor="website">Website</label>
                      <input type="text" id="website" name="website" className="hidden" />
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-brand-text-secondary mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-brand-text-secondary mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-brand-text-secondary mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-brand-text-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 focus:outline-none transition-all duration-200 appearance-none"
                      >
                        <option value="">Select a project type</option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-brand-text-secondary mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 rounded-lg bg-brand-bg border border-brand-border text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    {submitError && (
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
                        <p className="text-sm text-red-400">{submitError}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow hover:shadow-glow-lg"
                    >
                      {isSubmitting ? "Sending..." : "Let's Build Something Great"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}