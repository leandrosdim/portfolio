export interface ISkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skills: ISkillCategory[] = [
  {
    category: "Web Development",
    description: "Full-stack web applications and SaaS platforms",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Node.js",
      "Express",
    ],
  },
  {
    category: "Mobile Development",
    description: "Cross-platform and native mobile applications",
    skills: [
      "React Native",
      "Expo",
      "Android Development",
      "iOS Development",
      "PWA",
    ],
  },
  {
    category: "AI Solutions",
    description: "Intelligent systems and automation",
    skills: [
      "OpenAI API",
      "Vector Databases",
      "Embeddings",
      "Similarity Search",
      "Document Processing",
    ],
  },
  {
    category: "Database & Infrastructure",
    description: "Scalable and secure data systems",
    skills: [
      "PostgreSQL",
      "MSSQL",
      "Redis",
      "Supabase",
      "REST APIs",
      "Data Modeling",
    ],
  },
  {
    category: "DevOps & Security",
    description: "Production infrastructure and deployment",
    skills: [
      "Linux",
      "Nginx",
      "Docker",
      "CI/CD",
      "SSL/TLS",
      "Security Hardening",
    ],
  },
  {
    category: "Enterprise Integration",
    description: "Connecting systems and automating workflows",
    skills: [
      "ERP Integration",
      "API Development",
      "System Architecture",
      "Performance Tuning",
      "Automation",
    ],
  },
];