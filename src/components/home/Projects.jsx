import React from "react";
import { Link } from "react-router-dom";
import project1 from "/src/assets/images/projects/1.png";

function Projects() {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-5">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow p-6 flex flex-col md:flex-row gap-4">
        <img
          src={project1}
          alt="Project Screenshot"
          className="rounded-lg mb-4 size-40 object-cover"
        />
        <div>
        <h3 className="text-xl font-semibold mb-2">Project Name</h3>
        <p className="text-gray-600 dark:text-gray-400 flex-grow">
          Short description...
        </p>
        <div className="mt-4 flex space-x-4">
          <a
            href="#"
            className=" text-white rounded-lg text-sm font-medium"
          >
            Live
          </a>
          <a
            href="#"
            className=" rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            GitHub
          </a>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
