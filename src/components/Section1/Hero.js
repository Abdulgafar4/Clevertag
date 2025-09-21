import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
      <div className="flex flex-col items-center p-8 mx-auto px-4 py-16  md:py-24 my-16">


                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-600 leading-tight">
                      Hi 👋 I'm
                      <span className="text-[#00bfa6]"> Abdulgafar</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-full md:max-w-2xl mx-auto md:mx-0 leading-relaxed">
                      A passionate front-end developer who builds seamless and captivating digital experiences.
                      My portfolio showcases my expertise in creating user-friendly web applications, with a focus
                      on clean design and efficient performance.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                      <a
                          href="/AbdulResume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#00bfa6] hover:bg-[#00a392] text-white rounded-full px-6 py-4 text-base sm:text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                      >
                          My Resume
                      </a>
                  </div>

      </div>
  );
}