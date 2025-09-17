import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-5">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Contact
      </h2>
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        Fill out the form below to get in touch with me.
      </p>

      <div className="flex mt-4 space-x-3">
        <a href="https://github.com/fardous" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 transition-colors duration-200 rounded-full bg-gray-200 p-2">
          <FaGithub />
        </a>
        <a href="https://twitter.com/fardous_alom" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 transition-colors duration-200 rounded-full bg-gray-200 p-2">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com/in/fardous" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 transition-colors duration-200 rounded-full bg-gray-200 p-2">
          <FaLinkedin />
        </a>
        <a href="mailto:fardous@example.com" className="text-gray-500 hover:text-gray-600 dark:text-neutral-400 dark:hover:text-neutral-300 transition-colors duration-200 rounded-full bg-gray-200 p-2">
          <FaEnvelope />
        </a>
      </div>
      
    </div>
  );
}

export default Contact
