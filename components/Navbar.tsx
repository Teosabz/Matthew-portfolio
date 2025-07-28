import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 bg-[#0d1117] text-[#c9d1d9] sticky top-0 z-[1000]">
      <h2 className="text-lg sm:text-xl font-bold tracking-wide text-[#58a6ff]">
        Matthew Sabeta
      </h2>
      <ul className="hidden sm:flex gap-6 list-none m-0 p-0 text-sm sm:text-base">
        <li>
          <a
            href="#hero"
            className="text-[#c9d1d9] font-medium hover:text-[#58a6ff] transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-[#c9d1d9] font-medium hover:text-[#58a6ff] transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-[#c9d1d9] font-medium hover:text-[#58a6ff] transition-colors"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-[#c9d1d9] font-medium hover:text-[#58a6ff] transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
