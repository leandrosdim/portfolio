import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { services } from "@/content/services";
import Image from "next/image";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";
import HeroVisual from "@/components/hero-visual";
import ProjectCard from "@/components/project-card";
import ServiceCard from "@/components/service-card";
import Button from "@/components/ui/button";

const serviceIcons: Record<string, React.ReactNode> = {
  globe: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  device: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  api: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  cloud: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
};

const trustItems = [
  { value: "7+", label: "Years Experience" },
  { value: "100%", label: "Production-Ready Systems" },
  { value: "Web+Mobile+AI", label: "Full-Spectrum Expertise" },
  { value: "Enterprise", label: "Integration Experience" },
];

export default function Home() {
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.projectOrder - b.projectOrder)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden" noTopPadding>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Container>
          <div className="grid lg:grid-cols-2 gap-6 items-center min-h-[calc(100vh-52px-120px)]">
            <div>
              <ScrollReveal>
                <Image
                  src="/logo-dark.jpg"
                  alt="Leandros Dimitriadis"
                  width={240}
                  height={240}
                  className="rounded-full mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 100%)",
                    maskImage: "radial-gradient(circle, black 40%, transparent 100%)",
                  }}
                  priority
                />
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {profile.heroHeadline}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 max-w-xl">
                  {profile.heroSubheadline}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" size="lg" href="/portfolio">
                    View Projects
                  </Button>
                  <Button variant="secondary" size="lg" href="/contact">
                    Let&apos;s Talk
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400} direction="scale">
              <HeroVisual />
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <div className="section-divider" />
      <Section>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-brand-text-secondary">{item.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <div className="section-divider" />
      <Section>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What I Build
              </h2>
              <p className="text-brand-text-secondary max-w-2xl mx-auto">
                From web applications to AI solutions — I deliver production-ready software
                that solves real business problems.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100}>
                <ServiceCard
                  icon={serviceIcons[service.icon]}
                  title={service.shortTitle}
                  description={service.description}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={services.length * 100}>
            <div className="text-center mt-12">
              <Button variant="secondary" href="/services">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Projects */}
      <div className="section-divider" />
      <Section>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-brand-text-secondary max-w-2xl mx-auto">
                Production systems built for real organizations — from enterprise platforms
                to mobile applications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 150}>
                <ProjectCard project={project} featured />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="secondary" href="/portfolio">
                View All Projects
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Skills Section */}
      <div className="section-divider" />
      <Section>
        <Container>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Skills & Expertise
              </h2>
              <p className="text-brand-text-secondary max-w-2xl mx-auto">
                A comprehensive toolkit spanning full-stack development, mobile engineering,
                AI integration, and enterprise infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, i) => (
              <ScrollReveal key={category.category} delay={i * 100}>
                <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] backdrop-blur-glass p-6">
                  <h3 className="text-base font-semibold text-brand-text-primary mb-2">
                    {category.category}
                  </h3>
                  <p className="text-sm text-brand-text-secondary mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-brand-text-secondary border border-brand-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <div className="section-divider" />
      <Section>
        <Container>
          <ScrollReveal>
            <div className="relative rounded-glass-lg border border-brand-border bg-brand-secondary p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Something Great?
                </h2>
                <p className="text-brand-text-secondary max-w-xl mx-auto mb-8">
                  Whether you need a web application, mobile app, AI solution, or enterprise
                  integration — I deliver production-ready systems from idea to deployment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" href="/contact">
                    Let&apos;s Talk
                  </Button>
                  <Button variant="secondary" size="lg" href="/portfolio">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}