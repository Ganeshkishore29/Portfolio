import React, { useRef } from "react";
import Navbar from "./Navbar";
import bg from "../assets/portfolio_hero.png";
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

      {/* 🔥 Parallax Background */}
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

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 h-full flex flex-col items-center justify-end pb-24 text-center"
      >

        {/* Tagline */}
        <p className="text-lg md:text-2xl opacity-90 mb-6 tracking-wide">
          Software Developer • Problem Solver • Builder
        </p>

        {/* Name */}
        <h1 className="
          w-full
          text-[13vw] md:text-[10vw]
          font-extrabold
          bg-gradient-to-r from-gray-200 to-white
          bg-clip-text text-transparent
          drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]
          tracking-tight
          leading-none
          uppercase
        ">
          Ganesh{" "}
          <span className="hover:[-webkit-text-stroke:1px_white]">
            Kishore
          </span>
        </h1>

      </motion.div>
    </section>
  );
};

export default Hero;