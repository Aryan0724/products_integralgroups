"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, Map, Layout, Code2, Rocket, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Research",
    description: "Understanding the product, users, workflows, and operational requirements.",
    icon: Search,
  },
  {
    title: "Product Strategy",
    description: "Defining architecture, scalability, product systems, and technical direction.",
    icon: Map,
  },
  {
    title: "UX & Interface Systems",
    description: "Designing clean, usable, and scalable user experiences.",
    icon: Layout,
  },
  {
    title: "Development",
    description: "Building modern frontend systems, backend infrastructure, and automation workflows.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "Deploying stable and production-ready digital systems.",
    icon: Rocket,
  },
  {
    title: "Scale",
    description: "Optimizing infrastructure, workflows, and product systems for long-term scalability.",
    icon: TrendingUp,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-64 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6"
          >
            Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9]"
          >
            How We <br />
            <span className="text-white/40">Launch Products.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 -translate-x-1/2 z-10"
          />

          <div className="space-y-48">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative flex items-center gap-24",
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className="flex-1 text-right">
                  <div className={cn("max-w-md", i % 2 === 0 ? "ml-auto" : "mr-auto text-left")}>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-4">Step 0{i + 1}</div>
                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                    <p className="text-white/40 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl glass-dark border border-white/10 flex items-center justify-center bg-[#050505] shadow-2xl group transition-all duration-700">
                    <step.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
