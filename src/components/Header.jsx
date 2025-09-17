import React, { useState } from "react";
import { FaRegMoon, FaSun, FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm ">
      <nav className="my-4 relative max-w-6xl w-full border rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-600 px-4 md:px-6 lg:px-10">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" aria-label="Fardous">
            <h1 className="text-gray-900 dark:text-gray-100 font-bold text-xl">
              Fardous
            </h1>
          </Link>
          {/* End Logo */}
        </div>

        <div className="flex items-center gap-1 md:order-4 md:ms-4">
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 text-gray-900 hover:bg-gray-600 hover:text-gray-100 dark:text-gray-100 dark:hover:text-gray-100"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <FaSun className="w-5 h-5" />
            ) : (
              <FaRegMoon className="w-5 h-5" />
            )}
          </button>
          {/* Toggle mobile menu */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex justify-center items-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-navbar-header-floating-collapse"
              aria-expanded={isMenuOpen}
              aria-controls="hs-navbar-header-floating"
              aria-label="Toggle navigation"
            >
              <FaAlignRight />
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-header-floating"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute top-full left-0 right-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-b-2xl mx-2 md:shadow-none md:bg-transparent md:dark:bg-transparent md:static md:mx-0`}
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 py-2 px-4 md:px-0 md:py-0 md:ps-7">
            <Link
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-semibold text-gray-800 hover:text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200"
              to="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 font-semibold"
              to="/works"
            >
              Work
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200 font-semibold cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;