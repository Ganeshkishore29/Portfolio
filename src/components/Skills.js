import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Full-Stack Web Applications",
    desc: "Design and build scalable applications using React, Django REST Framework, and clean architecture.",
  },
  {
    title: "AI-Powered Features",
    desc: "Integrate CLIP, FAISS, and LLM models into real products for search, recommendations, and automation.",
  },
  {
    title: "Secure Backend Systems",
    desc: "Implement authentication, REST APIs, database design, and payment integrations for production use.",
  },
  {
    title: "Performance & Scalability",
    desc: "Optimize queries, structure maintainable codebases, and design systems for real-world usage.",
  },
];

const Skills = () => {
  return (
    <section className="relative w-full bg-black text-white py-36 px-6 md:px-20">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-24 text-center"
        >
          What I Build
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20" />

          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative mb-20
                md:flex md:items-start
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg" />

              {/* Content */}
              <div className="
                ml-12 md:ml-0 md:w-1/2
                px-4
              ">
                <div className="
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  rounded-2xl
                  p-6
                  shadow-lg
                ">
                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;