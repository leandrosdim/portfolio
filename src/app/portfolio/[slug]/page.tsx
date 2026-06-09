import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import PhoneFrame from "@/components/phone-frame";

type Props = {
  params: Promise<{ slug: string }>;
};

const statusVariant = {
  Live: "live" as const,
  "Not Live": "notLive" as const,
  Building: "building" as const,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Leandros Dimitriadis`,
      description: project.description,
      type: "website",
      url: `https://leandrosdim.com/portfolio/${project.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Leandros Dimitriadis`,
      description: project.description,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <ScrollReveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-brand-text-secondary hover:text-brand-accent transition-colors mb-8 text-sm"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Portfolio
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap items-start gap-4 mb-4">
              <Badge variant={statusVariant[project.status]}>
                {project.status}
              </Badge>
              <Badge variant="accent">{project.category}</Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl text-brand-text-secondary leading-relaxed max-w-3xl mb-8">
              {project.longDescription}
            </p>
          </ScrollReveal>

          {/* Links + Role */}
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap gap-4 mb-8">
              {project.role && (
                <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] px-4 py-2">
                  <span className="text-xs text-brand-text-secondary">Role</span>
                  <p className="text-sm font-medium text-brand-text-primary">
                    {project.role}
                  </p>
                </div>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-glass border border-brand-border bg-[var(--glass-bg)] px-4 py-2 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <span className="text-sm font-medium text-brand-text-primary">
                    Visit Project
                  </span>
                </a>
              )}
            </div>
          </ScrollReveal>

          {/* Technologies */}
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-2 mb-12">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 rounded-full bg-brand-accent-muted text-brand-accent border border-brand-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Screenshots Gallery */}
          {project.slides && project.slides.length > 0 && (
            <ScrollReveal delay={350}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.slides.map((slide) =>
                    slide.frame === "phone" ? (
                      <div
                        key={slide.id}
                        className="flex justify-center"
                      >
                        <PhoneFrame
                          src={`/${project.id}/${slide.id}.jpg`}
                          alt={slide.title}
                          title={slide.title}
                          description={slide.description}
                        />
                      </div>
                    ) : (
                      <div
                        key={slide.id}
                        className="group relative aspect-video rounded-glass overflow-hidden border border-brand-border bg-brand-secondary"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/${project.id}/${slide.id}.jpg`}
                          alt={slide.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div>
                            <p className="text-sm font-medium text-brand-text-primary">
                              {slide.title}
                            </p>
                            <p className="text-xs text-brand-text-secondary mt-1 line-clamp-2">
                              {slide.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Challenge / Solution / Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScrollReveal delay={400}>
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-amber-400"
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
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text-primary">
                    Challenge
                  </h3>
                </div>
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5 5.25a6.015 6.015 0 01-1.5-.189m1.5 5.25a6.015 6.015 0 01-1.5-.189m1.5 5.25V12m0 0a6.015 6.015 0 011.5.189M12 12a6.015 6.015 0 011.5-.189"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text-primary">
                    Solution
                  </h3>
                </div>
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="rounded-glass border border-brand-border bg-[var(--glass-bg)] p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-emerald-400"
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
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text-primary">
                    Results
                  </h3>
                </div>
                <ul className="space-y-2">
                  {project.results.map((result) => (
                    <li
                      key={result}
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
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="rounded-glass-lg border border-brand-border bg-brand-secondary p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-3">
                Interested in a Similar Project?
              </h2>
              <p className="text-brand-text-secondary mb-6">
                Contact for quote — I&apos;ll help you design and build a solution tailored to
                your needs.
              </p>
              <Button variant="primary" href="/contact">
                Let&apos;s Talk
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}