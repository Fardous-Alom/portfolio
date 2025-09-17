import React from 'react'
import project1 from '../assets/images/projects/1.png'
import { FaGlobe, FaGithub } from 'react-icons/fa6'

function Projects() {
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto overflow-hidden px-4 md:px-6 lg:px-10 py-5">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow p-6 flex flex-col md:flex-row gap-4 items-center">
        <img
          src={project1}
          alt="Project Screenshot"
          className="rounded-lg mb-4 size-40 object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
            Junior Frontend Developer | WellXperts
          </p>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Tech Stack: Next.js, React, Tailwind CSS
          </p>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Refactored sluggish Next.js applications by implementing dynamic
            imports, image optimization, and caching strategies boosted overall
            performance by 40% and improved load time on slow networks.
          </p>
          <ul className="mt-5 flex flex-row gap-x-4">
            <li className="flex items-center gap-x-2.5">
              <a
                className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400 flex items-center gap-1"
                href="#"
                target="_blank"
              >
                <FaGlobe className="size-3" /> Live
              </a>
            </li>
            <li className="flex items-center gap-x-2.5">
              <a
                className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400 flex items-center gap-1"
                href="#"
                target="_blank"
              >
                <FaGithub className="size-3" />
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects