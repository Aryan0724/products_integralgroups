"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { MockDashboard, MockFlow, MockCode } from "./mock-ui";

const exhibits = [
  {
    title: "SaaS Analytics Engine",
    category: "Operational Intelligence",
    description: "Real-time data visualization and processing for enterprise software systems.",
    component: MockDashboard,
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Automation Infrastructure",
    description: "Complex workflow orchestration and autonomous agent coordination systems.",
    category: "System Engineering",
    component: MockFlow,
    color: "from-emerald-500/20 to-transparent",
  },
  {
    title: "Proprietary Edge SDK",
    description: "Low-latency engineering systems for global product distribution and scale.",
    category: "Infrastructure",
    component: MockCode,
    color: "from-purple-500/20 to-transparent",
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-64 bg-black relative overflow-hidden">
      <div className="px-6 max-w-[1400px] mx-auto mb-40">
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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div ref={ref} className="px-6 max-w-[1400px] mx-auto">
      <div className={cn(
        "flex flex-col gap-24 items-center",
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      )}>
        {/* Visual Side */}
        <motion.div 
          style={{ y, rotateX, perspective: 2000 }}
          className="flex-1 w-full relative group"
        >
          <div className={cn(
            "absolute -inset-10 bg-gradient-to-br blur-[100px] opacity-20 transition-opacity duration-1000 group-hover:opacity-40",
            exhibit.color
          )} />
          
          <div className="relative aspect-[16/10] glass-dark border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl group-hover:border-white/20 transition-colors duration-700">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent pointer-events-none" />
            <exhibit.component className="scale-90 group-hover:scale-[0.92] transition-transform duration-1000" />
            
            {/* Glass Overlay Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>

          {/* Floating Detail Elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute -bottom-10 -right-10 w-48 h-48 glass-dark border border-white/10 rounded-3xl p-6 hidden lg:flex flex-col justify-between shadow-2xl backdrop-blur-3xl"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
            </div>
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-white/20 rounded-full" />
              <div className="w-2/3 h-1.5 bg-white/10 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <div className="flex-1 max-w-xl space-y-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6">{exhibit.category}</div>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
              {exhibit.title}
            </h3>
            <p className="text-white/40 text-lg leading-relaxed">
              {exhibit.description}
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 space-y-6">
            {["Scalable Architecture", "Refined Interaction", "Production Ready"].map((feat) => (
              <div key={feat} className="flex items-center gap-4 group">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6] transition-all" />
                <span className="text-xs uppercase tracking-widest font-bold text-white/30 group-hover:text-white/60 transition-colors">{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Magnetic>
              <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-colors group">
                Deep Dive Case Study 
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
