import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import Slideshow from "@/components/Slideshow";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the project by ID
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: `${project.title} | Full-Stack Developer`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Full-Stack Developer`,
      description: project.description,
      type: "website",
      locale: "en_US",
      url: `https://yourportfolio.com/projects/${project.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Full-Stack Developer`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Find the project by ID
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  
  // If project not found, return 404
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link */}
      <Link 
        href="/projects" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to projects
      </Link>

      {/* Project header */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === "Live" 
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
              : project.status === "Building" 
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" 
                : "bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-slate-200"
          }`}>
            {project.status}
          </span>
        </div>
        <p className="text-xl text-gray-600 dark:text-slate-300">{project.description}</p>
      </div>

      {/* Slideshow */}
      {project.slides && project.slides.length > 0 && (
        <div className="mb-12">
          <Slideshow projectId={project.id} slides={project.slides} />
        </div>
      )}

      {/* Project details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-lg">{project.longDescription}</p>
          </div>

          {/* Challenges and Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Role</h2>
            <p className="text-gray-700 dark:text-slate-300">{project.role}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="border rounded-lg p-6 dark:border-slate-700 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Project Info</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-500 dark:text-slate-400 text-sm mb-1">Type</h3>
                <p className="capitalize">{project.type.toLowerCase()}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500 dark:text-slate-400 text-sm mb-1">Status</h3>
                <p>{project.status}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-500 dark:text-slate-400 text-sm mb-1">Links</h3>
                <div className="flex flex-col space-y-2">
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                    >
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                    >
                      GitHub
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}