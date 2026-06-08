"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import ScrollReveal from "@/components/scroll-reveal";
import ProjectCard from "@/components/project-card";

type FilterType = "All" | "Web" | "Mobile" | "Building";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters: FilterType[] = ["All", "Web", "Mobile", "Building"];

  const filteredProjects = projects
    .filter((project) => {
      const matchesFilter = filter === "All" || project.type === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => a.projectOrder - b.projectOrder);

  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <ScrollReveal>
            <p className="text-brand-accent font-medium mb-4 text-sm uppercase tracking-wider">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Software That Ships
            </h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed max-w-2xl mb-12">
              Every project is a case study — a real business problem, a designed solution,
              and a production-ready system. Browse by type or search to find what matters to you.
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={100}>
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="flex flex-wrap gap-2">
                {filters.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      filter === type
                        ? "bg-brand-accent text-white shadow-glow"
                        : "bg-white/[0.04] text-brand-text-secondary border border-brand-border hover:border-brand-border-hover hover:text-brand-text-primary"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-brand-border text-brand-text-primary placeholder:text-brand-text-secondary/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 100}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-brand-text-secondary text-lg">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setFilter("All");
                  setSearchTerm("");
                }}
                className="mt-4 text-brand-accent hover:text-brand-accent-hover transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}