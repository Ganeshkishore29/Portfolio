import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Developer Intern",
    company: "ACSASS IT | ITES",
    period: "Sep 2025 — Oct 2025",
    points: [
      "Built full-stack e-commerce platform (React + Django REST).",
      "Implemented 2FA and secure payment integration.",
      "Optimized backend queries for faster APIs.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Vcodez",
    period: "Jan 2025 — May 2025",
    points: [
      "Developed responsive UI with React and Django backend.",
      "Improved performance and engagement.",
      "Maintained scalable modular architecture.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-20 px-6 md:px-20">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        {/* Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-xl
                p-6
                hover:border-white/30
                transition
              "
            >

              <h3 className="text-xl font-semibold mb-1">
                {item.role}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {item.company} • {item.period}
              </p>

              <ul className="space-y-1 text-gray-300 text-sm leading-relaxed">
                {item.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;