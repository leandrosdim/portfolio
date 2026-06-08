import type { Metadata } from "next";
import { about } from "@/content/about";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer & Business Technology Consultant with 7+ years of experience building production-ready systems. Combining economic science expertise with full-stack engineering.",
  openGraph: {
    title: "About | Leandros Dimitriadis",
    description:
      "Software Engineer & Business Technology Consultant with 7+ years of experience building production-ready systems.",
    url: "https://leandrosdim.com/about",
  },
};

const timelineIcons: Record<string, React.ReactNode> = {
  graduation: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  business: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  freelance: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.224-.043-.472-.076-.738-.103a48.527 48.527 0 00-3.413-.387m0 0a48.502 48.502 0 00-3.462.168 48.502 48.502 0 00-3.462-.168m12.337 0c-2.258-.162-4.556-.168-6.925-.013m0 0a48.527 48.527 0 00-3.413.387" />
    </svg>
  ),
  ai: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  infrastructure: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a3 3 0 100 6m16.293-3.002a3.001 3.001 0 00-2.957-3H11.25" />
    </svg>
  ),
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container narrow>
          <ScrollReveal>
            <p className="text-brand-accent font-medium mb-4 text-sm uppercase tracking-wider">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering Software That
              <br />
              <span className="text-gradient">Understands Business</span>
            </h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 max-w-2xl">
              {about.overview}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {about.valuePropositions.map((vp) => (
                <div
                  key={vp}
                  className="flex items-start gap-3 rounded-glass border border-brand-border bg-[var(--glass-bg)] p-4"
                >
                  <svg
                    className="w-5 h-5 text-brand-accent mt-0.5 shrink-0"
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
                  <p className="text-sm text-brand-text-secondary">{vp}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="/contact">
                Let&apos;s Talk
              </Button>
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
        </Container>
      </Section>

      {/* Timeline */}
      <div className="section-divider" />
      <Section>
        <Container narrow>
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Experience & Evolution
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-brand-border" />

            <div className="space-y-10">
              {about.timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 100}>
                  <div className="flex gap-6">
                    {/* Icon + year */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent z-10">
                        {timelineIcons[item.icon]}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2 pb-6">
                      <div className="text-sm font-mono text-brand-accent mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-semibold text-brand-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Stats */}
      <div className="section-divider" />
      <Section>
        <Container>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {profile.experience}+
                </div>
                <div className="text-sm text-brand-text-secondary">Years Experience</div>
              </div>
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {projects.filter((p) => p.status === "Live").length}
                </div>
                <div className="text-sm text-brand-text-secondary">Live Projects</div>
              </div>
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6">
                <div className="text-3xl font-bold text-gradient mb-2">6+</div>
                <div className="text-sm text-brand-text-secondary">Industries Served</div>
              </div>
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6">
                <div className="text-3xl font-bold text-gradient mb-2">2</div>
                <div className="text-sm text-brand-text-secondary">
                  Languages (Greek, English)
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}