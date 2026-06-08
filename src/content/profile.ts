export interface IProfile {
  name: string;
  title: string;
  secondaryTitle: string;
  bio: string;
  shortBio: string;
  heroHeadline: string;
  heroSubheadline: string;
  location: string;
  languages: string[];
  experience: string;
  email: string;
  website: string;
  socialLinks: {
    name: string;
    url: string;
  }[];
}

export const profile: IProfile = {
  name: "Leandros Dimitriadis",
  title: "Software Engineer & Business Technology Consultant",
  secondaryTitle:
    "Building Web Applications, Mobile Apps, AI Solutions & Enterprise Integrations",
  bio: "I combine deep business understanding with full-stack software engineering expertise to design, develop, and deliver production-ready systems. With 7+ years of experience spanning web platforms, mobile applications, AI-powered solutions, and enterprise integrations, I help organizations transform their operations through technology that works.",
  shortBio:
    "Software Engineer & Business Technology Consultant with 7+ years building production-ready web apps, mobile solutions, AI systems, and enterprise integrations.",
  heroHeadline: "Building Software That Solves Real Business Problems",
  heroSubheadline:
    "Custom web applications, mobile apps, AI solutions, and enterprise integrations designed for modern businesses.",
  location: "Thessaloniki, Greece",
  languages: ["Greek", "English"],
  experience: "7+",
  email: "leandrosdim777@gmail.com",
  website: "https://leandrosdim.com",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/leandrosdim",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/leandros-dimitriadis-648765179",
    },
  ],
};