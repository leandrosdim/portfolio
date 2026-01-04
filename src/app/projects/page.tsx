"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | "Web" | "Mobile" | "Building">("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter and sort projects based on type, search term, and projectOrder
  const filteredProjects = projects
    .filter(project => {
      const matchesFilter = filter === "All" || project.type === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => a.projectOrder - b.projectOrder);

  // Get unique project types for filter options
  const projectTypes = ["All", ...new Set(projects.map(project => project.type))] as const;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-slate-300">Check out my latest work</p>
      
      {/* Filter and search controls */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="border rounded-lg overflow-hidden dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
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
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                >
                  View case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-slate-400 text-lg">No projects found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}