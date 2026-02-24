import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPostman,
} from "react-icons/si";

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
  const ref = useRef(null);

  // Track section visibility
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "start 60%"],
  });

  // Motion values for colors
  const bgColor = useMotionValue("#ffffff");
  const textColor = useMotionValue("#000000");

  // Switch when section ~20% visible
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const visibleEnough = v > 0.5; // midpoint of the range
    bgColor.set(visibleEnough ? "#000000" : "#ffffff");
    textColor.set(visibleEnough ? "#ffffff" : "#000000");
  });

  // Smooth transitions
  const smoothBg = useSpring(bgColor, { stiffness: 80, damping: 20 });
  const smoothText = useSpring(textColor, { stiffness: 80, damping: 20 });

  return (
    <motion.section
      ref={ref}
      id="skills"
      style={{ backgroundColor: smoothBg, color: smoothText }}
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_65%)]" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-14 tracking-tight"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, scale: 1.05 }}
              className="
                relative group rounded-2xl p-5 md:p-6
                flex flex-col items-center justify-center
                bg-current/5 border border-current/10 backdrop-blur-xl
                shadow-[0_12px_40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.05)]
                transition overflow-hidden
              "
            >
              <div className="text-3xl md:text-4xl mb-3 text-current">
                {skill.icon}
              </div>

              <p className="text-current text-sm md:text-base font-medium">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;