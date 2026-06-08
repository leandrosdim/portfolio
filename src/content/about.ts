export interface IAboutData {
  overview: string;
  valuePropositions: string[];
  timeline: ITimelineItem[];
}

export interface ITimelineItem {
  year: string;
  title: string;
  description: string;
  icon: "graduation" | "code" | "business" | "freelance" | "ai" | "infrastructure";
}

export const about: IAboutData = {
  overview:
    "I combine expertise in Economic Science with deep software engineering knowledge to build systems that understand business constraints — not just technical requirements. This dual perspective means I design solutions that align with real-world operations, from financial workflows to logistics and enterprise compliance.",
  valuePropositions: [
    "Business-first approach: I understand operations before writing code",
    "End-to-end delivery: From architecture to deployment, a single point of accountability",
    "Production-ready systems: Built for scale, security, and long-term maintainability",
    "7+ years of delivering real systems used by real organizations",
  ],
  timeline: [
    {
      year: "2017",
      title: "Economic Science Foundation",
      description:
        "Graduated with a degree in Economic Science, building the business understanding that would later distinguish my approach to software — knowing not just how to build, but why.",
      icon: "graduation",
    },
    {
      year: "2018",
      title: "Software Engineering Career Start",
      description:
        "Transitioned into professional software development, quickly moving from fundamentals to production-grade web and mobile applications.",
      icon: "code",
    },
    {
      year: "2019",
      title: "Enterprise Systems & ERP Integration",
      description:
        "Deep experience with enterprise resource planning systems, learning how large organizations manage data, workflows, and compliance at scale.",
      icon: "business",
    },
    {
      year: "2021",
      title: "Full-Stack Consulting & Mobile Development",
      description:
        "Began delivering complete projects as a consultant — from mobile warehouse management systems (MyWMS) to customer-facing SaaS platforms (AnastasiasApp).",
      icon: "freelance",
    },
    {
      year: "2023",
      title: "AI Solutions & Multi-Agent Systems",
      description:
        "Expanded into AI-powered applications with multi-agent architectures, vector databases, and retrieval-augmented generation for intelligent document analysis.",
      icon: "ai",
    },
    {
      year: "2024",
      title: "Infrastructure & Business Technology Consulting",
      description:
        "Consolidating full-spectrum capability — from Linux server administration and Nginx configurations to business technology strategy — delivering complete solutions from idea to production.",
      icon: "infrastructure",
    },
  ],
};