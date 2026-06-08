import type { Metadata } from "next";
import { services } from "@/content/services";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, mobile apps, AI solutions, API development, database architecture, and cloud deployments. I deliver production-ready systems from idea to deployment.",
  openGraph: {
    title: "Services | Leandros Dimitriadis",
    description:
      "Custom web applications, mobile apps, AI solutions, and enterprise integrations designed for modern businesses.",
    url: "https://leandrosdim.com/services",
  },
};

const serviceIllustrations: Record<string, { gradient: string; iconBg: string }> = {
  globe: { gradient: "from-blue-500/10 to-cyan-500/5", iconBg: "bg-blue-500/10" },
  device: { gradient: "from-emerald-500/10 to-teal-500/5", iconBg: "bg-emerald-500/10" },
  brain: { gradient: "from-violet-500/10 to-purple-500/5", iconBg: "bg-violet-500/10" },
  api: { gradient: "from-amber-500/10 to-orange-500/5", iconBg: "bg-amber-500/10" },
  database: { gradient: "from-rose-500/10 to-pink-500/5", iconBg: "bg-rose-500/10" },
  cloud: { gradient: "from-sky-500/10 to-indigo-500/5", iconBg: "bg-sky-500/10" },
};

const serviceIconsLarge: Record<string, React.ReactNode> = {
  globe: (
    <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  device: (
    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  brain: (
    <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  api: (
    <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  database: (
    <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container narrow>
          <ScrollReveal>
            <p className="text-brand-accent font-medium mb-4 text-sm uppercase tracking-wider">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solutions That Deliver
              <br />
              <span className="text-gradient">Real Business Value</span>
            </h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed max-w-2xl">
              I don&apos;t just write code. I build complete software solutions — from architecture
              to deployment — designed around your business goals and operational realities.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Services Detail */}
      <div className="section-divider" />
      <Section>
        <Container>
          <div className="space-y-16">
            {services.map((service) => {
              const illustration = serviceIllustrations[service.icon];
              return (
                <ScrollReveal key={service.id} delay={100}>
                  <div
                    className={`rounded-glass-lg border border-brand-border bg-[var(--glass-bg)] backdrop-blur-glass overflow-hidden`}
                  >
                    {/* Header */}
                    <div
                      className={`p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start`}
                    >
                      <div className={`shrink-0 w-16 h-16 rounded-2xl ${illustration.iconBg} border border-brand-border flex items-center justify-center`}>
                        {serviceIconsLarge[service.icon]}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-3">
                          {service.title}
                        </h2>
                        <p className="text-brand-text-secondary leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                          {/* Problems Solved */}
                          <div>
                            <h3 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-3">
                              Problems Solved
                            </h3>
                            <ul className="space-y-2">
                              {service.problemsSolved.map((problem) => (
                                <li
                                  key={problem}
                                  className="text-sm text-brand-text-secondary flex items-start gap-2"
                                >
                                  <svg
                                    className="w-4 h-4 text-brand-accent mt-0.5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.68.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01"
                                    />
                                  </svg>
                                  {problem}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h3 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-3">
                              Technologies
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-brand-text-secondary border border-brand-border"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Client Benefits */}
                          <div>
                            <h3 className="text-sm font-semibold text-brand-text-primary uppercase tracking-wider mb-3">
                              Client Benefits
                            </h3>
                            <ul className="space-y-2">
                              {service.clientBenefits.map((benefit) => (
                                <li
                                  key={benefit}
                                  className="text-sm text-brand-text-secondary flex items-start gap-2"
                                >
                                  <svg
                                    className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.5 12.75l6 6 9-13.5"
                                    />
                                  </svg>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <div className="section-divider" />
      <Section>
        <Container narrow>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-brand-text-secondary max-w-xl mx-auto mb-8">
                Whether you need a complete platform, a mobile app, or an AI-powered solution
                — I&apos;m ready to help bring your vision to production.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="/contact">
                  Let&apos;s Talk
                </Button>
                <Button variant="secondary" size="lg" href="/portfolio">
                  See My Work
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}