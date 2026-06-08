export interface INavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: INavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/leandrosdim",
  linkedin: "https://linkedin.com/in/leandros-dimitriadis-648765179",
} as const;

export const SITE_CONFIG = {
  name: "Leandros Dimitriadis",
  title: "Software Engineer & Business Technology Consultant",
  description:
    "Building web applications, mobile apps, AI solutions & enterprise integrations. 7+ years delivering production-ready systems for modern businesses.",
  url: "https://leandrosdim.com",
  locale: "en_US",
} as const;

export const CV_URL = "/leandros-dimitriadis-cv.pdf" as const;