import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Full-Stack Developer",
  description: "Explore my portfolio of web and mobile development projects",
  openGraph: {
    title: "Projects | Full-Stack Developer",
    description: "Explore my portfolio of web and mobile development projects",
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Full-Stack Developer",
    description: "Explore my portfolio of web and mobile development projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}