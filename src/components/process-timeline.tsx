"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import { Layers, Cpu, PenTool, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    step: "01",
    title: "Architecture",
    description: "We architect the technical blueprint and data structures that will support your product's long-term scale and AI integration.",
    icon: Layers,
    color: "from-blue-500/20 to-transparent",
  },
  {
    step: "02",
    title: "Engineering",
    description: "Our lead engineers build the core infrastructure, backend systems, and frontend frameworks with production-grade precision.",
    icon: Cpu,
    color: "from-purple-500/20 to-transparent",
  },
  {
    step: "03",
    title: "Refinement",
    description: "Every interaction is polished. We fine-tune the UX, optimize performance, and harden security before the final launch.",
    icon: PenTool,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    step: "04",
    title: "Deployment",
    description: "We scale the product to production, implementing automated CI/CD pipelines and real-time monitoring for total reliability.",
    icon: Rocket,
    color: "from-amber-500/20 to-transparent",
  },
];

export function ProcessTimeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Balanced spring for slow, deliberate motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001
  });

  // Increased range to ensure the 4th milestone is reachable
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section ref={targetRef} className="relative h-[800vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-600/5 blur-[180px] rounded-full" />
        </div>

        {/* Section Header */}
        <div className="max-w-[1400px] mx-auto px-6 w-full mb-8 relative z-40">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-blue-500" />
            <div className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500">
              Technical Delivery
            </div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
          >
            Engineered to <span className="text-white/20 italic">launch.</span>
          </motion.h2>
        </div>

        {/* Curvilinear Path Container */}
        <div className="relative w-full h-[600px] z-30">
          <motion.div 
            style={{ x }} 
            className="absolute top-0 left-0 flex items-center h-full w-[5000px]"
          >
            <svg
              viewBox="0 0 5000 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Base Path (Shadow) */}
              <path
                d="M0 300C400 300 500 200 1000 200C1500 200 1700 450 2200 450C2700 450 2900 200 3400 200C3900 200 4200 300 5000 300"
                stroke="white"
                strokeOpacity="0.05"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="12 12"
              />
              
              {/* Animated Progress Path */}
              <motion.path
                d="M0 300C400 300 500 200 1000 200C1500 200 1700 450 2200 450C2700 450 2900 200 3400 200C3900 200 4200 300 5000 300"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />

              <defs>
                <linearGradient id="pathGradient" x1="0" y1="300" x2="5000" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="0.33" stopColor="#8B5CF6" />
                  <stop offset="0.66" stopColor="#EC4899" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestones (Nodes) */}
            {processSteps.map((step, i) => {
              const positions = [
                { x: 1000, y: 200 },
                { x: 2200, y: 450 },
                { x: 3400, y: 200 },
                { x: 4400, y: 300 },
              ];
              const pos = positions[i];
              return (
                <MilestoneNode 
                  key={i} 
                  step={step} 
                  i={i} 
                  xPos={pos.x} 
                  yPos={pos.y} 
                  scrollYProgress={smoothProgress} 
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MilestoneNode({ step, i, xPos, yPos, scrollYProgress }: { step: any; i: number; xPos: number; yPos: number; scrollYProgress: MotionValue<number> }) {
  // PERFECTED TRIGGER POINTS
  const triggerPoints = [0.12, 0.4, 0.7, 0.92];
  const trigger = triggerPoints[i];
  
  // Extra wide plateau for long reading time
  const start = Math.max(0, trigger - 0.18);
  const peakStart = trigger - 0.08;
  const peakEnd = trigger + 0.1;
  const end = Math.min(1, trigger + 0.2);
  
  const opacity = useTransform(scrollYProgress, [start, peakStart, peakEnd, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, peakStart, peakEnd, end], [0.7, 1.1, 1.1, 0.7]);
  const glow = useTransform(scrollYProgress, [start, peakStart, peakEnd, end], [0, 1, 1, 0.2]);
  const textY = useTransform(scrollYProgress, [start, peakStart], [30, 0]);

  return (
    <motion.div
      style={{ 
        left: xPos, 
        top: yPos,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30 group"
    >
      {/* Background Phase Number - Slightly smaller to avoid overlap */}
      <motion.div 
        style={{ opacity: useTransform(opacity, v => v * 0.08) }}
        className="absolute -top-24 text-[12rem] font-black text-white pointer-events-none select-none tracking-tighter"
      >
        {step.step}
      </motion.div>

      <div className="relative">
        <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center pointer-events-none" />
        
        <motion.div 
          style={{ 
            opacity, 
            scale,
            boxShadow: useTransform(glow, v => `0 0 ${v * 80}px rgba(59, 130, 246, 0.6)`)
          }}
          className="absolute inset-0 w-14 h-14 rounded-full glass-dark border border-white/50 flex items-center justify-center group-hover:border-white/70 transition-colors duration-700 shadow-2xl"
        >
          <step.icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity, y: textY }}
        className={cn(
          "absolute w-[380px] p-10 rounded-[3rem] glass-dark border border-white/20 flex flex-col gap-4 shadow-2xl backdrop-blur-3xl",
          yPos < 300 ? "top-20 items-center text-center" : "bottom-20 items-center text-center"
        )}
      >
        <span className="text-[12px] uppercase tracking-[0.8em] font-black text-blue-500 mb-1">
          {step.step} / PHASE
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter leading-none mb-1">
          {step.title}
        </h3>
        <p className="text-white/60 text-base leading-relaxed max-w-[320px] group-hover:text-white/90 transition-colors duration-700">
          {step.description}
        </p>
        
        <div className="mt-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 inline-flex items-center gap-3 w-fit">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Excellence</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
