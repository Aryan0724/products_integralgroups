"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export function GlobalEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // For CSS variables
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Background System */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Ambient Mesh Gradients */}
      <motion.div 
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-blue-900/10 blur-[160px] rounded-full"
      />
      <motion.div 
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-900/10 blur-[160px] rounded-full"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Interactive Spotlight */}
      <div className="absolute inset-0 spotlight opacity-40" />

      {/* Cursor Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full z-50 pointer-events-none opacity-50"
      />

      {/* Noise Texture */}
      <div className="noise-overlay" />
    </div>
  );
}

