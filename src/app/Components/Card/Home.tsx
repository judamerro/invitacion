"use client";

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#04182a] text-white flex flex-col items-center justify-center text-center">
      <motion.img 
        src="/images/imagen1.jpg" 
        alt="Inspiración" 
        className="w-64 h-64 object-cover rounded-full shadow-lg mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2 
        className="text-5xl font-bold text-[#99f5f3]" 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ¡Hola! Soy Juan
      </motion.h2>
      <motion.p 
        className="mt-4 text-lg max-w-2xl text-[#3eb5d9]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Ingeniero de software apasionado por la tecnología y la innovación.
      </motion.p>
    </section>
  );
};

export default Home;