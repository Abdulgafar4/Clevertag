import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
      <div className="flex flex-col items-center p-8 mx-auto px-4 py-16  md:py-24 my-16">

          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
              <motion.div
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: 0.3, duration: 0.8}}
                  className="flex-1 text-center lg:text-left px-4 md:px-8 lg:px-12"

              >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-600 leading-tight">
                      Hi 👋 I'm
                      <span className="block text-[#00bfa6]">Abdulgafar</span>
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
              </motion.div>

              <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* New Gradient Blob */}
                  <motion.div
                      initial={{scale: 0}}
                      animate={{scale: 1}}
                      transition={{
                          delay: 0.1,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                      }}
                      className="absolute inset-0 w-full h-full"
                      style={{zIndex: 0}}
                  >
                      <svg
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                      >
                          <defs>
                              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                  <stop
                                      id="stop1"
                                      stopColor="rgba(110.39, 232.871, 216.839, 1)"
                                      offset="0%"
                                  ></stop>
                                  <stop
                                      id="stop2"
                                      stopColor="rgba(74.397, 206.473, 189.185, 1)"
                                      offset="100%"
                                  ></stop>
                              </linearGradient>
                          </defs>
                          <path
                              fill="url(#sw-gradient)"
                              d="M22.8,-25.6C30.6,-20.6,38.8,-14.4,40.5,-6.8C42.2,0.7,37.4,9.8,31.6,16.9C25.9,24,19.2,29.3,11.2,33.2C3.3,37.1,-6,39.6,-13.8,37.1C-21.5,34.6,-27.7,27.1,-33.3,18.6C-38.9,10.1,-44,0.7,-42.3,-7.2C-40.6,-15.2,-32.2,-21.8,-24,-26.7C-15.9,-31.7,-7.9,-35,-0.2,-34.7C7.5,-34.4,15,-30.6,22.8,-25.6Z"
                              width="100%"
                              height="100%"
                              transform="translate(50 50)"
                              strokeWidth="0"
                              style={{transition: "0.3s"}}
                          />
                      </svg>
                  </motion.div>

                  {/* Lighter Teal Blob Shape with Stripes */}
                  <motion.div
                      initial={{scale: 0}}
                      animate={{scale: 1}}
                      transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                      }}
                      className="absolute inset-0 w-full h-full"
                      style={{
                          background: `
                  linear-gradient(45deg, #00bfa6 2px, transparent 2px) 0 0 / 30px 20px,
                  radial-gradient(circle at 50% 50%, #00bfa6 95%, transparent 95%)
                `,
                          borderRadius: "70% 30% 50% 50% / 30% 60% 40% 70%",
                          transform: "rotate(-15deg)",
                          opacity: 0.3,
                          zIndex: 1,
                      }}
                  />
                  <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{delay: 0.5, duration: 0.5}}
                      className="absolute inset-0 z-10 flex items-center justify-center"
                      style={{ left: "-20px" }}
                  >
                      <div className="relative w-full h-3/4 pb-2">
                          <img
                              src="/MPP.png"
                              alt="Abdul"
                              className="object-contain relative w-full h-full"
                              style={{filter: "brightness(0.9) contrast(1.1)"}}
                          />
                      </div>
                  </motion.div>
              </div>


          </motion.div>
      </div>
  );
}