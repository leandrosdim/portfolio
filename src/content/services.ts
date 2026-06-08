export interface IService {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  problemsSolved: string[];
  technologies: string[];
  clientBenefits: string[];
  icon: "globe" | "device" | "brain" | "api" | "database" | "cloud";
}

export const services: IService[] = [
  {
    id: "web-applications",
    title: "Custom Web Applications",
    shortTitle: "Web Applications",
    description:
      "Business platforms, SaaS products, portals and dashboards — built with modern frameworks and designed for scale.",
    problemsSolved: [
      "Outdated legacy systems that slow down operations",
      "Manual processes that should be automated",
      "Disconnected tools creating data silos",
      "Off-the-shelf software that doesn't fit your workflow",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    clientBenefits: [
      "Tailored to your exact business processes",
      "Scalable architecture that grows with you",
      "Modern, responsive interfaces your team will actually use",
      "Full ownership — no vendor lock-in",
    ],
    icon: "globe",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    description:
      "Android, iOS and enterprise mobile solutions — built for performance and usability on any device.",
    problemsSolved: [
      "Workers stuck at desks who need mobile access",
      "Field operations dependent on paper processes",
      "Consumer-facing opportunities on mobile platforms",
      "Enterprise workflows requiring rugged-device support",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Android",
      "iOS",
      "Offline-First Architecture",
    ],
    clientBenefits: [
      "Cross-platform development reduces time and cost",
      "Offline-first design for unreliable connectivity",
      "Optimized for real hardware and use conditions",
      "App Store and Play Store deployment",
    ],
    icon: "device",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI Solutions",
    description:
      "AI assistants, automation and intelligent workflows — turning data into actionable insights and automation.",
    problemsSolved: [
      "Manual research and document analysis taking hours",
      "Repetitive decision-making that could be automated",
      "Data sitting in documents that needs intelligent extraction",
      "Need for conversational interfaces over complex data",
    ],
    technologies: [
      "OpenAI",
      "Vector Databases",
      "Embeddings",
      "RAG",
      "Next.js",
    ],
    clientBenefits: [
      "Automate document processing and analysis",
      "Reduce search time from hours to seconds",
      "Intelligent chatbots that understand your data",
      "Competitive advantage through AI-powered features",
    ],
    icon: "brain",
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    shortTitle: "API Development",
    description:
      "System integrations and backend architecture — connecting your tools and automating data flow.",
    problemsSolved: [
      "Systems that don't talk to each other",
      "Manual data transfer between platforms",
      "Third-party integrations that are unreliable",
      "Need for a unified API layer across services",
    ],
    technologies: [
      "Node.js",
      "Express",
      "REST",
      "PostgreSQL",
      "ERP APIs",
    ],
    clientBenefits: [
      "Seamless data flow between all your systems",
      "Eliminate manual data entry and transfer",
      "Reliable integration with third-party services",
      "Centralized API management",
    ],
    icon: "api",
  },
  {
    id: "database-architecture",
    title: "Database Architecture",
    shortTitle: "Database Architecture",
    description:
      "Scalable and secure data systems — designed for performance, reliability, and integrity.",
    problemsSolved: [
      "Databases that can't handle your growth",
      "Slow queries affecting application performance",
      "Data integrity concerns and migration complexity",
      "Need for specialized data storage (vector, time-series)",
    ],
    technologies: [
      "PostgreSQL",
      "MSSQL",
      "Redis",
      "Vector DB",
      "Data Modeling",
    ],
    clientBenefits: [
      "Databases designed for your specific workload",
      "Optimized queries for fast application response",
      "Secure and reliable data storage",
      "Flexible architecture for future requirements",
    ],
    icon: "database",
  },
  {
    id: "cloud-deployments",
    title: "Cloud Deployments & Infrastructure",
    shortTitle: "Cloud Deployments",
    description:
      "Production infrastructure and hosting solutions — from deployment pipelines to security hardening.",
    problemsSolved: [
      "Applications running on unreliable infrastructure",
      "No automated deployment or testing pipeline",
      "Security vulnerabilities in production environments",
      "Downtime and performance issues under load",
    ],
    technologies: [
      "Linux",
      "Nginx",
      "Docker",
      "CI/CD",
      "SSL/TLS",
    ],
    clientBenefits: [
      "Reliable infrastructure that stays up under load",
      "Automated deployments with zero-downtime releases",
      "Security hardening for production environments",
      "Monitoring and performance optimization",
    ],
    icon: "cloud",
  },
];