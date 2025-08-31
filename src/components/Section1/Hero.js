import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-800 leading-tight">
          Crafting Digital Products, Brands, and Experience!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-full md:max-w-2xl mx-auto leading-relaxed">
          With a passion for building beautiful and functional web applications, I create compelling digital experiences tailored to your needs.
        </p>
        <div className="flex justify-center">
          <a
            href="/AbdulResume.pdf"
            download
            className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4 text-base sm:text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Download Me
          </a>
        </div>
      </motion.div>
    </div>
  );
}