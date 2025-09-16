import React from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="mt-8 px-4 md:px-6 lg:px-10">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        I’m Fardous, a frontend developer passionate about building applications that balance clean design, performance, and scalability. I design and build fast, scalable, and user-friendly web applications that turn ideas into impact. Over the past year, I’ve built projects ranging from interactive dashboards to e-commerce platforms, always focusing on solving real problems with thoughtful code.
      </p>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
        I thrive in collaborative environments where creativity meets execution, and I’m eager to contribute my skills to a team that values innovation, speed, and user experience.
      </p>

      <ul className="mt-5 flex flex-col gap-y-3">
        <li className="flex items-center gap-x-2.5">
          <FiMail className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" />
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="#"
            mailto="fardousalom42@gmail.com"
          >
            {" "}
            fardousalom42@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-x-2.5">
          <FaGithub className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" />
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="https://github.com/Fardous-Alom"
            target="_blank"
          >
            @Fardous-Alom
          </a>
        </li>

        <li className="flex items-center gap-x-2.5">
          <FaLinkedin className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" />
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="https://www.linkedin.com/in/fardous-alom/"
            target="_blank"
          >
            @Fardous-Alom
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
