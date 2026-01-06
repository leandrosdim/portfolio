export interface ISkillCategory {
  category: string;
  skills: string[];
}

export const skills: ISkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL","MSSQL", "REST APIs", "JWT Next Auth"],
  },
  {
    category: "Mobile",
    skills: ["React Native","Expo GO", "Android Development", "IOS Development"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "Linux", "Nginx", "CI/CD"],
  },
];