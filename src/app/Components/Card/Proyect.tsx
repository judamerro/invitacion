"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Proyecto 1", description: "Descripción del proyecto 1", color: "#165477" },
  { title: "Proyecto 2", description: "Descripción del proyecto 2", color: "#207ba5" },
  { title: "Proyecto 3", description: "Descripción del proyecto 3", color: "#0d3653" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#04182a] text-center">
      <h2 className="text-4xl font-semibold text-[#99f5f3] mb-12">Proyectos</h2>
      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`bg-[${project.color}] p-6 rounded-lg shadow-lg`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl text-[#99f5f3] font-bold mb-2">{project.title}</h3>
            <p className="text-[#c2e9f3]">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;