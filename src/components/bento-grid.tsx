"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { LibrarySection } from "./library-section";
import { ArrowRight, Cpu, Layers, Shield, Zap } from "lucide-react";

const products = [
  {
    title: "IntegralHQ",
    description: "The unified operational workspace for modern business orchestration, CRM, and automation. Engineered for high-scale enterprise operations.",
    image: "/integralhq.png",
    className: "md:col-span-2 md:row-span-2",
    color: "from-blue-500/30 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.5)",
    specs: ["Sub-100ms Latency", "Military-Grade Security"],
    category: "Operations",
    icon: Layers
  },
  {
    title: "AlgoPilot",
    description: "AI-powered intelligence for creators. Predictive hooks and engagement signals.",
    image: "/algopilot.png",
    className: "md:col-span-1 md:row-span-1",
    color: "from-purple-500/30 to-transparent",
    glowColor: "rgba(139, 92, 246, 0.5)",
    specs: ["AI Analytics"],
    category: "Intelligence",
    icon: Cpu
  },
  {
    title: "ExamPlanner",
    description: "Institutional management and resource mapping infrastructure.",
    image: "/examplanner.png",
    className: "md:col-span-1 md:row-span-1",
    color: "from-amber-500/30 to-transparent",
    glowColor: "rgba(245, 158, 11, 0.5)",
    specs: ["Resource Mapping"],
    category: "Infrastructure",
    icon: Shield
  },
  {
    title: "System Architecture",
    description: "Bespoke internal tool ecosystems and automation infrastructure built for specialized business logic.",
    image: "/integralhq.png",
    className: "md:col-span-1 md:row-span-2",
    color: "from-emerald-500/30 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.5)",
    specs: ["Auto-Workflows"],
    category: "Engineering",
    icon: Zap
  },
  {
    title: "Intelligence Module",
    description: "Custom predictive models and data visualization layers for specialized analytics.",
    image: "/algopilot.png",
    className: "md:col-span-2 md:row-span-1",
    color: "from-pink-500/30 to-transparent",
    glowColor: "rgba(236, 72, 153, 0.5)",
    specs: ["Predictive Signals"],
    category: "AI",
    icon: Cpu
  }
];

export function BentoGrid() {
  return (
    <section id="products" className="bg-[#050505] relative overflow-hidden">
      <LibrarySection />
      
      <div className="max-w-[1400px] mx-auto px-6 pb-64">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-blue-500" />
            <div className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500">
              Technical Suite
            </div>
          </div>
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white">
            Engineered <br />
            <span className="text-white/20 italic">Artifacts.</span>
          </h2>
          <p className="mt-8 text-white/40 text-xl max-w-xl font-medium">
            A desaturated baseline that renders into full-color, high-fidelity infrastructure on interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <BentoItem key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoItem({ item, i }: { item: any; i: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative rounded-[3rem] overflow-hidden glass-dark border border-white/5 hover:border-white/20 transition-all duration-700 min-h-[450px] flex flex-col cursor-none",
        item.className
      )}
    >
      {/* Dynamic Liquid Glow */}
      <motion.div 
        animate={{ 
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1.2 : 0.8
        }}
        className={cn(
          "absolute -inset-20 bg-gradient-to-br blur-[120px] pointer-events-none transition-all duration-1000",
          item.color
        )} 
      />
      
      <div className="p-12 relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <item.icon className={cn(
                "w-4 h-4 transition-colors duration-700",
                isHovered ? "text-blue-500" : "text-white/20"
              )} />
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">{item.category}</div>
            </div>
            <h3 className="text-4xl font-bold text-white tracking-tighter leading-none transition-transform duration-700 group-hover:translate-x-2">
              {item.title}
            </h3>
          </div>
          <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-xl">
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>

        <p className={cn(
          "text-base leading-relaxed max-w-[300px] mb-12 transition-colors duration-700",
          isHovered ? "text-white/60" : "text-white/20"
        )}>
          {item.description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.specs.map((spec: string) => (
            <span key={spec} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-white transition-colors">
              {spec}
            </span>
          ))}
        </div>

        {/* Visual Mock/Image with Grayscale Reveal */}
        <motion.div 
          style={{ y }}
          className="absolute bottom-0 right-0 w-3/4 h-2/3 translate-y-24 group-hover:translate-y-12 transition-transform duration-1000"
        >
          <div className="relative w-full h-full glass-dark border-t border-l border-white/10 rounded-tl-[3rem] overflow-hidden shadow-2xl backdrop-blur-3xl group-hover:border-white/30 transition-colors duration-700">
            {/* Blueprint Grid Overlay (Visible on Hover) */}
            <motion.div 
              animate={{ opacity: isHovered ? 0.1 : 0 }}
              className="absolute inset-0 grid-pattern z-10 pointer-events-none" 
            />
            
            {/* Cinematic Scanner */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-[-20deg] animate-scan pointer-events-none z-20" />
            
            <motion.img 
              animate={{ 
                filter: isHovered ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.6)",
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Hover Coordinates Decor */}
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-6 left-6 z-30 font-mono text-[8px] text-white/40 tracking-widest"
                >
                  COORD: 34.05 / -118.24 <br />
                  VER: 2.0.48_STABLE
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
