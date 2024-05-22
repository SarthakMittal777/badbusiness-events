import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="relative flex flex-col md:flex-row justify-between items-center h-24 md:h-20 px-4 py-2 border-b border-red-500">
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
      <div className="md:hidden absolute top-0 left-0 mt-5 ml-4">
        <button onClick={toggleNav} className="text-red-400 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isNavOpen ? "open" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isNavOpen ? "flex" : "hidden"
        } md:flex flex-col ml-2 md:flex-row md:items-center w-fit px-3 py-4 md:px-4 text-white font-semibold md:font-normal md:w-auto md:justify-end mt-4 md:mt-0 absolute md:static top-20 left-0 md:top-auto md:left-auto bg-white/25 md:bg-transparent z-10 backdrop-blur-xl rounded-sm  md:gap-2`}>
        <a
          href="https://badbusiness.in"
          className="block md:inline-block rounded-md px-2 md:px-4 py-2 md:py-1.5 border border-transparent hover:border-red-400">
          Home
        </a>
        <Link
          to="/"
          className="hidden md:block rounded-md md:px-4 px-2 py-2 md:py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-100 hover:border-red-200">
          Events
        </Link>
        <a
          href="https://community.badbusiness.in"
          className="block md:inline-block rounded-md px-2 md:px-4 py-2 md:py-1.5 border border-transparent hover:border-red-400">
          Community
        </a>
        <Link
          to="/register"
          className="block md:inline-block rounded-md px-2 md:px-4 py-2 md:py-1.5 border border-transparent hover:border-red-400">
          Join
        </Link>
        <Link to="/register-event">
          <button className="block md:inline-block px-2 rounded-md py-2 md:px-4 md:py-1.5 border border-transparent hover:border-red-400">
            Register an Event
          </button>
        </Link>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="block md:inline-block rounded-md px-2 py-2 md:px-2 md:py-1.5 border border-transparent hover:border-red-400">
            <div className="flex items-center">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className={`h-4 w-4 ml-2 mb-1 transition-transform ${
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
            <div className="absolute -left-3  mt-5 w-32 bg-white/85 border border-red-400 rounded-sm shadow-lg">
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
