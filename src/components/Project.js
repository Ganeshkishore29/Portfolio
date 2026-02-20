import { motion } from "framer-motion";

import fluxoImg from "../assets/fluxo.png";
import mlImg from "../assets/mlImg.png";

const projects = [
  {
    title: "Fluxo — AI-Powered E-commerce Platform",
    desc: "Deployed full-stack clothing platform featuring AI image search, recommendation engine, conversational shopping assistant, and secure payments.",
    tech: [
      "React",
      "Tailwind CSS",
      "Django REST",
      "MySQL",
      "JWT",
      "Cloudinary",
      "FAISS",
      "CLIP",
      "LLM",
      "Cashfree",
    ],
    image: fluxoImg,
    demo: "https://fluxo-lilac.vercel.app/",
    code: "https://github.com/Ganeshkishore29/Fluxo",
  },
  {
    title: "Smart Waste Segregation System",
    desc: "ML-integrated web application that classifies waste using a custom Gradient Boosting model with dashboards, history tracking, and feedback system.",
    tech: [
      "React",
      "Django",
      "MySQL",
      "Machine Learning",
      "Gradient Boosting",
    ],
    image: mlImg,
    demo: "#",
    code: "https://github.com/Ganeshkishore29/smart-waste-segregation",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-black text-white py-16 md:py-24 px-4 sm:px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl md:text-6xl
            font-extrabold mb-12 md:mb-16 text-center
            text-white transition-all duration-300
            hover:text-transparent
            hover:[-webkit-text-stroke:1px_white]
          "
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                group
                bg-white/5
                border border-white/10
                rounded-2xl
                p-4 sm:p-5 md:p-6
                backdrop-blur-xl
                transition
              "
            >
              {/* Screenshot */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-44 sm:h-48 md:h-52 object-contain rounded-lg mb-4"
              />

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              {(p.demo !== "#" || p.code !== "#") && (
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

    {p.demo !== "#" && (
      <a
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 bg-white text-black rounded-lg font-medium text-center"
      >
        Live Demo
      </a>
    )}

    {p.code !== "#" && (
      <a
        href={p.code}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 border border-white/20 rounded-lg text-center"
      >
        GitHub
      </a>
    )}

  </div>
)}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;