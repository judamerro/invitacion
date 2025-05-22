"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-[#0d3653] shadow-lg py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold text-[#99f5f3] tracking-wide">
          Juan David Meza Rodríguez
        </h1>
        <nav className="space-x-6">
          <a href="#about" className="text-[#3eb5d9] hover:text-[#99f5f3] transition duration-300">
            Sobre mí
          </a>
          <a href="#projects" className="text-[#3eb5d9] hover:text-[#99f5f3] transition duration-300">
            Proyectos
          </a>
          <a href="#contact" className="text-[#3eb5d9] hover:text-[#99f5f3] transition duration-300">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;