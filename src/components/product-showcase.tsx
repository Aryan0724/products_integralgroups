"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion/magnetic";

const exhibits = [
  {
    title: "AlgoPilot",
    category: "AI • Analytics • Creator Tools",
    description: "A creator intelligence platform designed to analyze hooks, engagement potential, retention signals, and video performance before publishing.",
    image: "/algopilot.png",
    color: "from-blue-500/20 to-transparent",
    tags: ["AI Analytics", "Predictive Hooks", "Retention Signals"],
  },
  {
    title: "IntegralHQ",
    category: "Workspace • CRM • Operations",
    description: "A unified operational workspace combining communication, documentation, CRM systems, email workflows, automation infrastructure, and organizational management into a centralized platform.",
    image: "/integralhq.png",
    color: "from-emerald-500/20 to-transparent",
    tags: ["Unified CRM", "Auto-Workflows", "Ops Infrastructure"],
  },
  {
    title: "ExamPlanner",
    category: "Education • Scheduling • Management",
    description: "An institutional planning system focused on student allotment, invigilator management, examination workflows, scheduling systems, and academic operations.",
    image: "/examplanner.png",
    color: "from-purple-500/20 to-transparent",
    tags: ["Institutional Logic", "Resource Mapping", "Smart Scheduling"],
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-40 bg-black relative overflow-hidden">
      <div className="px-6 max-w-[1400px] mx-auto mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6"
            >
              Exhibits
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-8"
            >
              Engineered <br />
              <span className="text-white/40">Product Interfaces.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-xl font-medium leading-relaxed balance-text"
            >
              Believable, functional, and scalable interfaces built for modern digital infrastructure.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 md:justify-end"
          >
            {["SaaS", "AI", "Infrastructure", "Automation"].map((tag) => (
              <span key={tag} className="px-6 py-3 rounded-full glass-dark border border-white/5 text-[10px] uppercase tracking-widest font-bold text-white/30 hover:text-white transition-all cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="space-y-64">
        {exhibits.map((exhibit, i) => (
          <ExhibitCard key={i} exhibit={exhibit} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExhibitCard({ exhibit, index }: { exhibit: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Independent Parallax Layers for depth
  const layerBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const layerMain = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const layerFront = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scannerPos = useTransform(scrollYProgress, [0.3, 0.7], ["-100%", "200%"]);

  return (
    <div ref={ref} className="px-6 max-w-[1400px] mx-auto overflow-visible">
      <div className={cn(
        "flex flex-col gap-24 items-center",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}>
        {/* Visual Theatre */}
        <div className="flex-1 w-full relative h-[400px] md:h-[550px] perspective-[2000px]">
          {/* Background Glow Layer */}
          <motion.div 
            style={{ y: layerBg }}
            className={cn(
              "absolute -inset-20 bg-gradient-to-br blur-[120px] opacity-20 pointer-events-none",
              exhibit.color
            )} 
          />

          <motion.div 
            style={{ y: layerMain, rotateX }}
            className="relative w-full h-full group"
          >
            {/* The Main Stage */}
            <div className="relative w-full h-full glass-dark border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl group-hover:border-white/20 transition-all duration-700">
              {/* Cinematic Scanner Sweep */}
              <motion.div 
                style={{ left: scannerPos }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-[-20deg] pointer-events-none z-10"
              />

              {/* Product Interface Image */}
              <img 
                src={exhibit.image} 
                alt={exhibit.title}
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
              />

              {/* Detail Markers (Hotspots) */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {[
                  { t: "20%", l: "15%", label: "Architecture" },
                  { t: "45%", l: "80%", label: "Interface" },
                  { t: "70%", l: "35%", label: "Integrations" }
                ].map((marker, i) => (
                  <div key={i} style={{ top: marker.t, left: marker.l }} className="absolute">
                    <div className="w-4 h-4 rounded-full bg-blue-500/40 flex items-center justify-center animate-ping" />
                    <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] border border-white/20" />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full glass-dark border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest">{marker.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Glass Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Floating Feature Clusters */}
          <motion.div 
            style={{ y: layerFront }}
            className={cn(
              "absolute z-30 flex flex-col gap-4",
              index % 2 === 0 ? "-right-12 top-1/4" : "-left-12 top-1/4"
            )}
          >
            {exhibit.tags.slice(0, 2).map((tag: string, i: number) => (
              <div key={i} className="glass-dark border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-3xl translate-x-4 group-hover:translate-x-0 transition-transform duration-700 w-48">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-4 shadow-[0_0_10px_#3b82f6]" />
                <div className="text-[9px] uppercase tracking-[0.3em] font-black text-white/20 mb-1">Module</div>
                <div className="text-xs font-bold text-white tracking-tight">{tag}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Text Presentation */}
        <div className="flex-1 max-w-xl space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">{exhibit.category}</span>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              {exhibit.title}
            </h3>
            
            <p className="text-white/40 text-xl font-medium leading-relaxed balance-text">
              {exhibit.description}
            </p>
          </div>

          {/* Technical Specs List */}
          <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
            {[
              { label: "Infrastructure", val: "Enterprise-Ready" },
              { label: "Latency", val: "Sub-100ms" },
              { label: "Security", val: "Military-Grade" },
              { label: "AI Integration", val: "Native" }
            ].map((spec) => (
              <div key={spec.label} className="space-y-1 group">
                <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-white/40 transition-colors">{spec.label}</div>
                <div className="text-sm font-bold text-white/60 group-hover:text-white transition-colors tracking-tight">{spec.val}</div>
              </div>
            ))}
          </div>

          <div className="pt-10">
            <Magnetic>
              <button className="h-16 px-10 rounded-full glass-dark border border-white/10 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 hover:text-white hover:bg-white hover:text-black transition-all duration-500 group shadow-xl">
                Explore The Product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
