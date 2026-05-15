"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
    <section ref={containerRef} className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4"
          >
            Our Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            How We <br />
            <span className="text-white/40">Launch Products.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-white to-white/40 md:-translate-x-1/2 z-10"
          />

          <div className="space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-12",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className="flex-1 w-full md:text-right text-left">
                  <div className={cn("max-w-md", i % 2 === 0 ? "md:ml-auto" : "md:mr-auto md:text-left")}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center bg-[#050505] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-white/10 blur-xl rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


