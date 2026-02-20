import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 text-white">
      <div className="space-x-6">
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar


