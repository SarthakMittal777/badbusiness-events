import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center h-24 md:h-20 px-4 py-2 border-b border-red-500 ">
      <Link
        to="/"
        className="flex items-center gap-2 text-white hover:bg-red-500/30 font-semibold pr-6 rounded-md">
        <img
          src="/brand/logo.jpg"
          alt="BB Logo"
          className="h-10 md:h-12 aspect-square rounded-md"
        />
        <span>Events</span>
      </Link>
      <div className="flex text-sm md:text-md justify-center md:justify-end gap-4 md:gap-4 w-full [&>a]:w-1/3 md:[&>a]:w-auto text-center text-red-400">
        <a
          href="https://badbusiness.in"
          className="rounded-md md:px-4 py-0.5 md:py-1.5 border border-transparent hover:border-red-400">
          Home
        </a>
        <Link
          to="/"
          className="hidden md:block rounded-md md:px-4 py-0.5 md:py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-100 hover:border-red-200">
          Events
        </Link>

        <a
          href="https://community.badbusiness.in"
          className="rounded-md md:px-4 py-0.5 md:py-1.5 border border-transparent hover:border-red-400">
          Community
        </a>
        <Link
          to="/register"
          className="rounded-md md:px-4 py-0.5 md:py-1.5 border border-transparent hover:border-red-400">
          Join
        </Link>
        <Link to="/register-event">
          <div>
            <button className="rounded-md px-2 md:px-4 py-0.5 md:py-1.5 border border-transparent hover:border-red-400">
              Register an Event
            </button>
          </div>
        </Link>
        <div>
          <button
            onClick={toggleDropdown}
            className="rounded-md px-5 md:px-2 py-0.5 md:py-1.5 border border-transparent hover:border-red-400">
            <div className="flex items-center">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`h-4 w-4 ml-2 mb-1 transition ${
                  isDropdownOpen ? "-rotate-90" : "rotate-90"
                }`}>
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 0 1 .707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 10 10.293 5.707a1 1 0 0 1 0-1.414A1 1 0 0 1 10 3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white/85 border border-red-400 rounded-md shadow-lg mr-4">
              <Link
                to="/merchandise"
                className="block px-3 py-2 text-red-700 font-medium hover:bg-red-100"
                onClick={() => setIsDropdownOpen(false)}>
                BAD Merchandise
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-red-700 font-medium hover:bg-red-100"
                onClick={() => setIsDropdownOpen(false)}>
                Courses
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
