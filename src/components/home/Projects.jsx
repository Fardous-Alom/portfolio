import React from "react";
import projects from "../../assets/data/projects.json";
import { FaGlobe, FaGithub } from "react-icons/fa6";

function Projects() {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-5">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      <div className="grid gap-6">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow p-6 flex flex-col md:flex-row gap-4 items-center"
          >
            <img
              src={
                new URL(
                  `../../assets/images/projects/${project.image}`,
                  import.meta.url
                ).href
              }
              alt={project.title}
              className="rounded-lg h-40 w-60 object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-neutral-200 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500 mb-2">
                Tech Stack: {project.tech_stack.join(", ")}
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-row gap-x-4">
                <li className="flex items-center gap-x-2.5">
                  <a
                    className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400 flex items-center gap-1"
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="size-3" /> Live
                  </a>
                </li>
                {project.github_link !== "#" && (
                  <li className="flex items-center gap-x-2.5">
                    <a
                      className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400 flex items-center gap-1"
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="size-3" />
                      Github
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
