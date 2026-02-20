import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCheck } from "react-icons/fa";
import { useState } from "react";

const About = () => {
      const [downloaded, setDownloaded] = useState(false);
    
      const handleClick = () => {
        setDownloaded(true);
        setTimeout(() => setDownloaded(false), 2500);
      };
  return (
    <section className="relative w-full bg-white text-black overflow-hidden px-0 md:px-20 py-16 md:py-20">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_60%)]" />

  <motion.h1
    initial={{ opacity: 0, scale: 1.1 }}
    whileInView={{ opacity: 0.05, scale: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    className="absolute inset-0 flex items-center justify-center text-[24vw] md:text-[16vw] font-black tracking-tight select-none pointer-events-none"
  >
    ABOUT
  </motion.h1>

  <div className="absolute left-0 -translate-y-1/2 -rotate-90 md:left-10 md:top-1/2 md:-translate-y-1/2 md:-rotate-90 text-gray-500 tracking-[0.6em] text-xs md:text-sm">
    PROFILE —
  </div>

  <div className="relative max-w-3xl mx-auto text-center z-10">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-8 md:mb-10"
    >
      About Me
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="text-base md:text-lg text-gray-700 leading-relaxed mb-5 px-6 md:px-0"
    >
      I am a Software Developer focused on building reliable, scalable,
      and user-centric applications. Through intensive hands-on projects,
      I have developed strong foundations in full-stack development and
      practical problem solving.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-base md:text-lg text-gray-700 leading-relaxed mb-5 px-6 md:px-0"
    >
      My primary interests include system design, clean architecture,
      and building real-world applications such as AI-driven e-commerce
      platforms and machine learning systems.
    </motion.p>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 px-6 md:px-0"
    >
      I am actively seeking an entry-level Software Development role
      where I can contribute to meaningful products and grow as a developer.
    </motion.p>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100px" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-px bg-gray-300 mx-auto mb-8"
    />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900 text-base"
    >
      <p>Full-Stack Development (React, Django)</p>
      <p>Data Structures & Algorithms</p>
      <p>REST API Design & Integration</p>
      <p>LLM & Machine Learning Integration</p>
    </motion.div>
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
        mt-6 border border-black
        
      "
    >
      {/* Icon */}
      {downloaded ? <FaCheck /> : <FaDownload />}

      {/* Text */}
      {downloaded ? "Downloaded" : "Download Resume"}
    </motion.a>
  </div>
</section>
  );
};

export default About;