import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden px-6 md:px-20 py-28">

      {/* 🔥 Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* 🔥 Giant Masked Typography */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          absolute inset-0
          flex items-center justify-center
          text-[28vw] md:text-[18vw]
          font-black
          tracking-tight
          select-none
          pointer-events-none
        "
      >
        ABOUT
      </motion.h1>

      {/* 🔥 Vertical Editorial Label */}
      <div className="
        absolute left-4 md:left-10 top-1/2
        -translate-y-1/2 -rotate-90
        text-gray-500
        tracking-[0.6em]
        text-xs md:text-sm
      ">
        PROFILE —
      </div>

      {/* 🔥 Main Content */}
      <div className="relative max-w-3xl mx-auto text-center z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-14"
        >
          About Me
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10"
        >
          I am a Software Developer focused on building reliable, scalable,
          and user-centric applications. Through intensive hands-on projects,
          I have developed strong foundations in full-stack development and
          practical problem solving.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12"
        >
          My primary interests include system design, clean architecture,
          and building real-world applications such as AI-driven e-commerce
          platforms and machine learning systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-16"
        >
          I am actively seeking an entry-level Software Development role
          where I can contribute to meaningful products, work with strong
          engineering teams, and continuously grow as a developer.
        </motion.p>

        {/* 🔥 Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-white/40 mx-auto mb-14"
        />

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200 text-lg"
        >
          <p>Full-Stack Development (React, Django)</p>
          <p>Data Structures & Algorithms</p>
          <p>REST API Design & Integration</p>
          <p>LLM & Machine Learning Integration</p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;