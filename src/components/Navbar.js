import React from "react";

function Navbar() {
  return (
    <nav className="
      w-full
      flex justify-between items-center
      px-6 md:px-8 py-4
      text-white
      z-50
    ">

     
      {/* Links */}
      <div className="flex space-x-4 md:space-x-6 text-sm md:text-base">
        <a href="#projects" className="hover:text-blue-400 transition">
          Projects
        </a>

        <a href="#skills" className="hover:text-blue-400 transition">
          Skills
        </a>

        <a href="#contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;