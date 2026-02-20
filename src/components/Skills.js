import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,

} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiPostgresql, SiMysql,SiPostman } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "REST APIs", icon: <FaDatabase /> },
    { name: "Postman", icon: <SiPostman /> },
];

const Skills = () => {
  return (
    <section 
  id="skills"
  className="relative w-full bg-black text-white py-20 md:py-24 px-6 md:px-20 overflow-hidden"
>

  {/* Ambient Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

  <div className="relative max-w-6xl mx-auto text-center z-10">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold mb-14 tracking-tight"
    >
      Skills & Technologies
    </motion.h2>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">

      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.04 }}
          viewport={{ once: true }}
          whileHover={{ y: -3, scale: 1.05 }}
          className="
            relative group
            rounded-2xl
            p-5 md:p-6
            flex flex-col items-center justify-center
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_12px_40px_rgba(0,0,0,0.6)]
            transition overflow-hidden
          "
        >

          {/* Hover glow */}
          <div className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            transition
            bg-[radial-gradient(circle,rgba(255,255,255,0),transparent_70%)]
          " />

          {/* Icon */}
          <div className="relative text-3xl md:text-4xl mb-3 text-white group-hover:scale-110 transition">
            {skill.icon}
          </div>

          {/* Name */}
          <p className="relative text-gray-200 text-sm md:text-base font-medium tracking-wide">
            {skill.name}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>
  );
};

export default Skills;