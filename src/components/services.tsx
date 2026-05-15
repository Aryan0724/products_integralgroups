"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layers, Cpu, PenTool, Code2, Rocket, TrendingUp, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion/magnetic";

export function Services() {
  const coreServices = [
    {
      strike: "The Junior Handoff",
      title: "Founder-Led Execution",
      description: "You won't be sold by partners and handed to junior devs. Our lead engineers architect and oversee every single platform we touch.",
      icon: Layers,
      color: "bg-[#0A0A0A]",
      borderColor: "border-purple-500/20",
      glowColor: "shadow-[0_0_50px_rgba(168,85,247,0.15)]",
      iconColor: "text-purple-400",
    },
    {
      strike: "The Black Box",
      title: "Technical Transparency",
      description: "No hidden layers or complex jargon. We provide total visibility into our engineering process, AI models, and infrastructure decisions.",
      icon: Cpu,
      color: "bg-[#0D0D0D]",
      borderColor: "border-blue-500/20",
      glowColor: "shadow-[0_0_50px_rgba(59,130,246,0.15)]",
      iconColor: "text-blue-400",
    },
    {
      strike: "The Generic Blueprint",
      title: "Product-First Design",
      description: "We don't use templates. Every interface is purpose-built to solve specific user problems and drive operational efficiency.",
      icon: PenTool,
      color: "bg-[#111111]",
      borderColor: "border-emerald-500/20",
      glowColor: "shadow-[0_0_50px_rgba(16,185,129,0.15)]",
      iconColor: "text-emerald-400",
    },
    {
      strike: "The Slow Turnaround",
      title: "Accelerated Launch",
      description: "We engineer for speed without sacrificing quality. Our systems are built to go from concept to production-grade deployment in weeks, not months.",
      icon: Rocket,
      color: "bg-[#141414]",
      borderColor: "border-amber-500/20",
      glowColor: "shadow-[0_0_50px_rgba(245,158,11,0.15)]",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section id="services" className="relative bg-black py-48 lg:py-64 overflow-visible">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Sticky Content */}
          <div className="lg:sticky lg:top-40 lg:h-fit z-30 mb-24 lg:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-purple-500" />
              <div className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-500">
                The Difference
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-white leading-[1] mb-12"
            >
              Skip the agency <br />
              <span className="text-white/20 italic">runaround.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/40 text-xl font-medium max-w-lg leading-relaxed mb-12"
            >
              We engineered Integral Studio to be the exact opposite of traditional agencies. No bloated retainers, no junior hand-offs, no playing telephone. Just pure, concentrated digital execution.
            </motion.p>
            
            <div className="flex">
              <Magnetic>
                <button className="bg-white text-black px-10 py-6 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform group shadow-2xl">
                  Request Proposal
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Right Side: Stacking Cards */}
          <div className="relative z-20 pb-[80vh]">
            {coreServices.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Cinematic Aura */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        scale, 
        opacity,
        top: `calc(8rem + ${index * 24}px)`,
        zIndex: index + 10,
      }}
      className={cn(
        "lg:sticky w-full min-h-[400px] p-12 lg:p-16 rounded-[4rem] border flex flex-col justify-center transition-all duration-700 shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl mb-[15vh] lg:mb-40 last:mb-20",
        service.color,
        service.borderColor,
        service.glowColor
      )}
    >
      <div className="relative">
        {/* Icon Top Right */}
        <div className={cn(
          "absolute -top-4 -right-4 w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl",
          service.iconColor
        )}>
          <service.icon className="w-7 h-7" />
        </div>

        <div className="mb-10">
          <span className="text-lg font-medium text-white/20 line-through decoration-red-500/60 decoration-2">
            {service.strike}
          </span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-md group-hover:text-white/70 transition-colors duration-700">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
