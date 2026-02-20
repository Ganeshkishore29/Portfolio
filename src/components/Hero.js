import React, { useRef } from "react";
import Navbar from "./Navbar";
import bg from "../assets/hero_bg.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ scale: bgScale, backgroundImage: `url(${bg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Headline */}
<h3
  className="
    absolute md:top-1/2 md:left-1/4 top-1/2 left-2
    md:-translate-x-1/4 md:-translate-y-1/2  translate-x-2 -translate-y-1/2
    text-white
    text-lg sm:text-xl md:text-6xl
    font-semibold
    tracking-wide
    z-30 uppercase
     pr-6 md:pr-0
    transition-all duration-300

    hover:text-transparent
    hover:[-webkit-text-stroke:1px_white]
  "
>
  Full-Stack Developer & AI Enthusiast
</h3>
      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="
          relative z-20 h-full
          flex flex-col items-center justify-end
          pb-28 md:pb-24
          text-center px-4
        "
      >
        {/* Tagline */}
        <p
          className="
            text-base sm:text-lg md:text-2xl
            opacity-90
            mb-4 md:mb-6
            tracking-wide
            max-w-md
          "
        >
          Designing systems. Building products. Solving real problems.
        </p>

        {/* Name */}
        <h1
          className="
            w-full
            text-[12vw] sm:text-[10vw] md:text-[10vw]
            font-extrabold
            bg-gradient-to-r from-gray-200 to-white
            bg-clip-text text-transparent
            drop-shadow-[0_10px_40px_rgba(0,0,0,0.2)]
            tracking-tight
            leading-[0.9]
            uppercase
          "
        >
          Ganesh{" "}
          <span
            className="
              block sm:inline
              hover:[-webkit-text-stroke:1px_white]
            "
          >
            Kishore
          </span>
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;