import Link from "next/link";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${profile.name} | Full-Stack Developer`,
  description: profile.bio,
  openGraph: {
    title: `${profile.name} | Full-Stack Developer`,
    description: profile.bio,
    type: "website",
    locale: "en_US",
    url: "https://leandrosdim.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Full-Stack Developer`,
    description: profile.bio,
  },
};

export default function Home() {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{profile.name}</h1>
        <p className="text-xl text-gray-600 dark:text-slate-300 mb-8">{profile.title}</p>
        <p className="text-lg max-w-2xl mx-auto mb-8">{profile.bio}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="bg-white dark:bg-slate-800 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Expertise & Tech-Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="border rounded-lg p-6 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-3">{skillCategory.category}</h3>
              <ul className="space-y-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden dark:border-slate-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Live" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                      : project.status === "Building" 
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" 
                        : "bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-slate-200"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.flatMap(skillCategory => skillCategory.skills).map((skill, index) => (
            <span 
              key={index} 
              className="bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience & Capabilities</h2>
        <div className="max-w-3xl mx-auto">
          <div className="border-l-1 border-blue-600 pl-6 ml-3">
            <div className="mb-8 relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-8 top-1"></div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Expertise in building modern web applications using React, Next.js, and TypeScript 
                with both frontend and backend components.
              </p>
            </div>
            <div className="mb-8 relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-8 top-1"></div>
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Experience in building mobile applications for Android using React Native with 
                focus on performance and usability.
              </p>
            </div>
            <div className="mb-8 relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-8 top-1"></div>
              <h3 className="text-xl font-semibold mb-2">System Administration</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Linux system administration, Nginx configuration, deployments, and security hardening.
              </p>
            </div>
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute -left-8 top-1"></div>
              <h3 className="text-xl font-semibold mb-2">API Integrations</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Building and integrating with REST APIs, automation, and performance tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-lg text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, and creative ideas.
        </p>
        <Link 
          href="/contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}