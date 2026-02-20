import React from "react";
import { FaGithub, FaLinkedin, FaInstagram,FaEnvelope } from "react-icons/fa";
import { FaDownload, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
    const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };
  return (
    <footer id='contact' className="w-full bg-black text-white px-6 md:px-20 py-12 border-t border-white/10">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Identity */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Ganesh Kishore</h3>
          <p className="text-gray-400 text-sm">
            Full-Stack Developer • AI-Powered Applications
          </p>
        </div>

        {/* Social Links */}
<div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-gray-300">

  {/* GitHub */}
  <a
    href="https://github.com/Ganeshkishore29"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-white transition"
    aria-label="GitHub"
  >
    <FaGithub className="text-xl" />
    <span className="text-sm">GitHub</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/ganesh-kishore-s"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-white transition"
    aria-label="LinkedIn"
  >
    <FaLinkedin className="text-xl" />
    <span className="text-sm">LinkedIn</span>
  </a>

    {/* Email */}
  <a
    href="mailto:ganeshkishores29@gmail.com"
    className="flex items-center gap-2 hover:text-white transition"
    aria-label="Email"
  >
    <FaEnvelope className="text-xl" />
    <span className="text-sm">ganeshkishores29@gmail.com</span>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/kishhore_/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-white transition"
    aria-label="Instagram"
  >
    <FaInstagram className="text-xl" />
    <span className="text-sm">Instagram</span>
  </a>

</div>
{/* Resume Download */}
         <motion.a
      href="/Ganesh_Kishore_S_resume.pdf"
      download
      onClick={handleClick}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      className="
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-full
        bg-white text-black
        text-sm font-medium
        hover:bg-gray-200
        transition
        overflow-hidden
      "
    >
      {/* Icon */}
      {downloaded ? <FaCheck /> : <FaDownload />}

      {/* Text */}
      {downloaded ? "Downloaded" : "Download Resume"}
    </motion.a>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Ganesh Kishore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;