import Link from "next/link";
import Badge from "@/components/ui/badge";
import type { IProject } from "@/content/projects";

interface IProjectCardProps {
  project: IProject;
  featured?: boolean;
}

const statusVariant = {
  Live: "live" as const,
  "Not Live": "notLive" as const,
  Building: "building" as const,
};

function isFirstSlidePhone(project: IProject): boolean {
  return project.slides?.[0]?.frame === "phone";
}

function getFirstSlideImageSrc(project: IProject): string {
  const slide = project.slides?.[0];
  if (!slide) return "";

  return `/${project.id}/${slide.id}.${slide.extension ?? "jpg"}`;
}

export default function ProjectCard({ project, featured = false }: IProjectCardProps) {
  const isPhone = isFirstSlidePhone(project);
  const firstSlideImageSrc = getFirstSlideImageSrc(project);

  return (
    <Link
      href={`/portfolio/${project.id}`}
      className={`group flex flex-col h-full rounded-glass-lg border border-brand-border bg-[var(--glass-bg)] backdrop-blur-glass transition-all duration-300 hover:border-brand-border-hover hover:shadow-glow hover:-translate-y-1 overflow-hidden ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Screenshot area */}
      <div className={`relative bg-brand-secondary overflow-hidden aspect-video ${isPhone ? "flex items-center justify-center" : ""}`}>
        {project.slides && project.slides.length > 0 ? (
          isPhone ? (
            <div className="relative rounded-[20px] border-[3px] border-brand-border bg-brand-bg p-1.5 shadow-glass-lg h-[85%] w-fit">
              <div className="relative overflow-hidden rounded-[16px] bg-brand-secondary h-full">
                <div className="absolute inset-x-0 top-0 z-10 flex h-3 items-center justify-center">
                  <div className="h-[3px] w-[36px] rounded-full bg-brand-border" />
                </div>
                <div className="relative aspect-[9/19.5] h-full overflow-hidden rounded-[16px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={firstSlideImageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0.5 z-10 flex justify-center">
                  <div className="h-[3px] w-[48px] rounded-full bg-brand-border" />
                </div>
              </div>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={firstSlideImageSrc}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-brand-text-secondary/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        )}
        {/* Status badge overlay */}
        <div className="absolute top-3 right-3">
          <Badge variant={statusVariant[project.status]}>
            {project.status}
          </Badge>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="accent">{project.type}</Badge>
        </div>
        {/* Hover overlay */}
        {!isPhone && (
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span className="text-sm font-medium text-brand-accent inline-flex items-center gap-1">
              View Case Study
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-brand-text-primary group-hover:text-brand-accent transition-colors duration-200 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-brand-text-secondary leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-white/[0.06] text-brand-text-secondary border border-brand-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.06] text-brand-text-secondary border border-brand-border">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}