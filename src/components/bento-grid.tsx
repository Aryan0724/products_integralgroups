"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cpu, Zap, BarChart3, Database, Layers, ArrowRight } from "lucide-react";

const items = [
  {
    title: "SaaS Platforms",
    description: "Scalable software products built for startups, creators, businesses, and operational systems.",
    icon: Layers,
    className: "md:col-span-2 md:row-span-2",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "AI Products",
    description: "Machine learning systems and AI-powered products designed to automate workflows.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-1",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Automation Systems",
    description: "Workflow automation platforms that streamline execution and operational efficiency.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    color: "from-amber-500/20 to-transparent",
  },
  {
    title: "Internal Tools",
    description: "Purpose-built software systems designed to support the Integral ecosystem.",
    icon: Database,
    className: "md:col-span-1 md:row-span-2",
    color: "from-emerald-500/20 to-transparent",
  },
];

export function BentoGrid() {
  return (
    <section className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]"
          >
            Products Built For <br />
            <span className="text-white/40">Modern Systems.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl font-medium mt-8 max-w-2xl leading-relaxed"
          >
            From internal operational tools to scalable SaaS platforms, Integral Studio develops software systems focused on usability, performance, and long-term scalability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] glass-card p-12 flex flex-col justify-between min-h-[350px] hover:border-white/20",
                item.className
              )}
            >
              {/* Background Glow */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl", item.color)} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 border border-white/10">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 mt-12">
                <div className="w-full h-[1px] bg-white/5 mb-8" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">System Ready</span>
                  </div>
                  <div className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
