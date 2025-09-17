import React from 'react'
import { FaGithub, FaPhoneAlt, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-5" id="contact">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              © 2025 Fardous Alom All rights reserved.
            </p>
          </div>

          <div className="flex mt-4 space-x-3 items-center">
            <p className="text-xs text-gray-600 dark:text-neutral-400">Contact:</p>
            <a
              href="#"
              tel="+8801556840017"
              className="text-gray-500 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-900 transition-colors duration-200 rounded-full bg-gray-200 p-2"
            >
              <FaPhoneAlt />
            </a>
            <a
              href="#"
              mailto="fardousalom42@gmail.com"
              className="text-gray-500 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-900 transition-colors duration-200 rounded-full bg-gray-200 p-2"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://facebook.com/fardous42/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-900 transition-colors duration-200 rounded-full bg-gray-200 p-2"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Fardous-Alom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-900 transition-colors duration-200 rounded-full bg-gray-200 p-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/fardous-alom/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-900 transition-colors duration-200 rounded-full bg-gray-200 p-2"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
