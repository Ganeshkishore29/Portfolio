import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Developer Intern",
    company: "ACSASS IT | ITES",
    period: "Sep 2025 — Oct 2025",
    points: [
      "Developed a full-stack e-commerce platform using React and Django REST Framework with RESTful CRUD APIs.",
      "Implemented two-factor authentication and secure payment gateway integration.",
      "Optimized backend queries and database schema to improve API response time.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Vcodez",
    period: "Jan 2025 — May 2025",
    points: [
      "Built responsive UI components with React and backend features using Django and Node.js.",
      "Improved application performance and user engagement.",
      "Maintained scalable full-stack applications with clean, modular architecture.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 md:py-24 px-6 md:px-20">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-24 text-center"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative mb-24
                md:flex md:items-start
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg" />

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">

                <div className="
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  rounded-2xl
                  p-7
                  shadow-lg
                ">

                  {/* Role */}
                  <h3 className="text-2xl font-semibold">
                    {item.role}
                  </h3>

                  {/* Company + Period */}
                  <p className="text-gray-400 mt-1 mb-4">
                    {item.company} • {item.period}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 text-gray-300">
                    {item.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Experience;