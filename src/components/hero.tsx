"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence, type MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Zap, Database, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion/magnetic";

import { MockDashboard, MockFlow, MockCode } from "./mock-ui";

const orbitalIcons = [
  { name: "AI", Icon: Cpu, color: "text-blue-400", delay: 0 },
  { name: "SaaS", Icon: Layers, color: "text-zinc-300", delay: 2 },
  { name: "Flow", Icon: Zap, color: "text-emerald-400", delay: 4 },
  { name: "Logic", Icon: Database, color: "text-purple-400", delay: 1 },
  { name: "Auth", Icon: Shield, color: "text-orange-400", delay: 3 },
  { name: "Scale", Icon: TrendingUp, color: "text-indigo-400", delay: 5 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 40);
    mouseY.set((clientY - innerHeight / 2) / 40);
  };

  const headline = "Launching Modern SaaS Products.";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[160vh] flex flex-col items-center justify-start overflow-hidden px-6 bg-[#050505]"
    >
      {/* Dynamic Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        {/* Orbital Icons */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          {orbitalIcons.map((icon, i) => (
            <OrbitalIcon key={i} icon={icon} index={i} total={orbitalIcons.length} springX={springX} springY={springY} />
          ))}
        </div>
      </div>

      {/* Layered Interface Previews */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <InterfaceLayer 
          scrollYProgress={scrollYProgress} 
          springX={springX} 
          springY={springY} 
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] w-full text-center flex flex-col items-center pt-72">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="glass-dark px-6 py-2 rounded-full border border-white/10 flex items-center gap-3 group hover:border-white/20 transition-all duration-500 cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white/60 transition-colors">
              A Product & SaaS Division of Integral Group
            </span>
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-bold tracking-tighter mb-14 leading-[0.8] text-white flex flex-wrap justify-center drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          {headline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.2em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center gap-12"
        >
          <p className="text-lg md:text-2xl text-white/40 font-medium max-w-4xl leading-relaxed balance-text px-4">
            Integral Studio designs, develops, launches, and scales SaaS platforms, 
            automation systems, AI-powered tools, and modern digital products 
            for startups, businesses, and the Integral ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Magnetic>
              <Button size="lg" className="rounded-full px-16 h-20 text-xs font-bold uppercase tracking-[0.3em] bg-white text-black hover:scale-105 transition-transform duration-700 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                Explore Products
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="ghost" className="rounded-full px-16 h-20 text-xs font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white flex items-center gap-3 group transition-all duration-500">
                Start A Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 2 }}
          className="mt-32 flex items-center gap-6"
        >
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">
            Engineered for compounding scalability
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/20" />
        </motion.div>
      </div>

      {/* Cinematic Lighting Refinement */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] pointer-events-none z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full opacity-50" />
        <div className="absolute top-[-100px] left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full opacity-30" />
      </div>
    </section>
  );
}

function OrbitalIcon({ icon, index, total, springX, springY }: { icon: any; index: number; total: number; springX: any; springY: any }) {
  const angle = (index / total) * Math.PI * 2;
  const radius = 500;
  
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 40 + index * 10,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-full h-full flex items-center justify-center"
    >
      <motion.div
        style={{
          x: Math.round(Math.cos(angle) * radius),
          y: Math.round(Math.sin(angle) * radius),
          translateX: useTransform(springX, (v: number) => v * (1.2 + index * 0.1)),
          translateY: useTransform(springY, (v: number) => v * (1.2 + index * 0.1)),
        }}
        className="relative group"
      >
        <div className="w-16 h-16 glass-dark border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-3xl group-hover:border-white/40 group-hover:bg-white/[0.05] transition-all duration-700 shadow-2xl">
          <icon.Icon className={cn("w-7 h-7 opacity-30 group-hover:opacity-100 transition-opacity duration-700", icon.color)} />
        </div>
        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] font-bold text-white/10 group-hover:text-white/40 transition-colors duration-700 whitespace-nowrap">
          {icon.name}
        </div>
      </motion.div>
    </motion.div>
  );
}

function InterfaceLayer({ scrollYProgress, springX, springY }: { scrollYProgress: MotionValue<number>; springX: MotionValue<number>; springY: MotionValue<number> }) {
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
      {/* Left Preview */}
      <motion.div
        style={{
          x: useTransform(springX, (v: number) => -500 + v * 0.5),
          y: useTransform(y1, (v: number) => -100 + springY.get() * 0.5 + v),
          rotateY: 25,
          rotateX: 10,
        }}
        className="absolute w-[600px] h-[400px] hidden lg:block"
      >
        <div className="relative w-full h-full glass-dark border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl group transition-all duration-1000">
          <MockDashboard className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-white/5 rounded-3xl" />
        </div>
      </motion.div>

      {/* Right Preview */}
      <motion.div
        style={{
          x: useTransform(springX, (v: number) => 500 + v * 0.8),
          y: useTransform(y2, (v: number) => 200 + springY.get() * 0.8 + v),
          rotateY: -25,
          rotateX: -10,
        }}
        className="absolute w-[500px] h-[350px] hidden lg:block"
      >
        <div className="relative w-full h-full glass-dark border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl group transition-all duration-1000">
          <MockFlow className="opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.05] via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-white/5 rounded-3xl" />
        </div>
      </motion.div>

      {/* Center Background Preview */}
      <motion.div
        style={{
          y: useTransform(springY, (v: number) => 400 + v * 0.3),
          opacity: 0.4,
        }}
        className="absolute w-[800px] h-[200px] hidden lg:block"
      >
        <div className="w-full h-full glass-dark border border-white/5 rounded-[4rem] overflow-hidden backdrop-blur-md">
          <MockCode className="opacity-20 p-12 text-lg" />
        </div>
      </motion.div>
    </motion.div>
  );
}

