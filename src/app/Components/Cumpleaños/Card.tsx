"use client";
import React from 'react';
import { motion } from 'framer-motion'

interface BalloonProps {
  delay: number;
  duration: number;
  color: string;
}

// Balloon component for individual animated balloons
const Balloon = ({ delay, duration, color }: BalloonProps) => {
  // Animation variants for a single balloon
  const balloonVariants = {
    initial: {
      y: '100vh', // Start from bottom of the screen
      opacity: 0,
      scale: 0.5,
      x: Math.random() * 200 - 100, // Random horizontal start position
    },
    animate: {
      y: '-100vh', // Float up to the top
      opacity: [0, 1, 1, 0], // Fade in, stay, then fade out
      scale: [0.5, 1, 1, 0.8], // Grow, stay, then shrink slightly
      x: [
        Math.random() * 200 - 100, // Initial random sway
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
      ], // Random horizontal sway
      rotate: Math.random() * 360, // Random initial rotation
      transition: {
        duration: duration, // Duration of the animation
        ease: "linear", // Linear movement for continuous floating
        repeat: Infinity, // Repeat indefinitely
        delay: delay, // Staggered delay for each balloon
      },
    },
  };

  return (
    <motion.div
      className={`absolute rounded-full w-12 h-16 sm:w-16 sm:h-20`}
      style={{ backgroundColor: color }} // Set balloon color dynamically
      variants={balloonVariants}
      initial="initial"
      animate="animate"
    >
      {/* Balloon string */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gray-400"></div>
    </motion.div>
  );
};

// Balloons container component
const Balloons = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  const colors = [
    '#A78BFA', // purple-400
    '#EC4899', // pink-500
    '#F87171', // red-400
    '#FACC15', // yellow-400
    '#60A5FA', // blue-400
  ];
  const numBalloons = 15; // Number of balloons to display

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: numBalloons }).map((_, i) => (
        <Balloon
          key={i}
          delay={i * 0.8} // Staggered delay for each balloon
          duration={Math.random() * 10 + 15} // Random duration between 15 and 25 seconds
          color={colors[i % colors.length]} // Cycle through defined colors
        />
      ))}
    </div>
  );
};

// Main App component for the birthday invitation
export default function App() {
  // Animation variants for smooth entry effects
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-zinc-950 to-black flex items-center justify-center p-4 font-inter text-white relative overflow-hidden">
      {/* Background grid/lines for neofuturistic feel */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern bg-repeat [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 bg-dot-pattern bg-repeat [background-size:10px_10px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Balloons in the background */}
      <Balloons />

      {/* Invitation Card with framer-motion animation */}
      <motion.div
        className="relative z-10 bg-zinc-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 max-w-lg w-full text-center border border-purple-700/50
                   [box-shadow:0_0_30px_rgba(167,83,250,0.4),0_0_60px_rgba(236,72,153,0.3)]"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
      
        {/* Title Section */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4 leading-tight tracking-wide
                     [text-shadow:0_0_15px_rgba(167,83,250,0.8),0_0_30px_rgba(236,72,153,0.6)]"
          variants={itemVariants}
        >
          Juan David Meza Rodríguez  <span className="text-pink-500">🎉</span>
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-8" // Added specific styling for the name
          variants={itemVariants}
          transition={{ delay: 0.3 }} // Slightly delayed animation
        >
        Te  invita a un compartir familiar el día de mi cumpleaños


        </motion.p>
        
        {/* Host Name */}
        


        {/* Invitation Details */}
        <div className="space-y-6 mb-10">
          <motion.div
            className="bg-zinc-800/70 p-4 rounded-xl shadow-md border border-purple-600/30
                       [box-shadow:0_0_10px_rgba(167,83,250,0.2)]"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-purple-300 mb-1">Fecha:</h2>
            <p className="text-xl sm:text-2xl font-bold text-purple-400">27 de Mayo</p>
          </motion.div>

          <motion.div
            className="bg-zinc-800/70 p-4 rounded-xl shadow-md border border-pink-600/30
                       [box-shadow:0_0_10px_rgba(236,72,153,0.2)]"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-pink-300 mb-1">Hora:</h2>
            <p className="text-xl sm:text-2xl font-bold text-pink-400">7:00 P.m</p>
          </motion.div>

          <motion.div
            className="bg-zinc-800/70 p-4 rounded-xl shadow-md border border-red-600/30
                       [box-shadow:0_0_10px_rgba(248,113,113,0.2)]"
            variants={itemVariants}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-red-300 mb-1">Lugar:</h2>
            <p className="text-xl sm:text-2xl font-bold text-red-400">Mi Residencia</p>
          </motion.div>
        </div>

        {/* Closing Message */}
        <motion.p
          className="text-2xl sm:text-3xl font-bold text-gray-200 mb-6"
          variants={itemVariants}
          transition={{ delay: 1.0 }}
        >
          ¡Te espero! <span className="text-yellow-300">✨</span>
        </motion.p>

        {/* Decorative Element */}
        <motion.div
          className="text-5xl"
          variants={itemVariants}
          transition={{ delay: 1.2 }}
        >
          <span className="text-blue-400">🎂</span>
        </motion.div>
      </motion.div>
    </div>
  );
}