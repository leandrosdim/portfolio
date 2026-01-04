export interface IProfile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  socialLinks: {
    name: string;
    url: string;
    icon?: string;
  }[];
}

export const profile: IProfile = {
  name: "Leandros Dimitriadis",
  title: "Full-Stack Developer",
  bio: "I'm a passionate full-stack developer with expertise in building modern web applications using React, Next.js, and TypeScript. I enjoy creating efficient, scalable solutions and have experience with both frontend and backend technologies.",
  location: "Thessaloniki, Greece",
  email: "leandrosdim777@gmail.com",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/leandrosdim",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/leandros-dimitriadis-648765179",
    }    
  ],
};