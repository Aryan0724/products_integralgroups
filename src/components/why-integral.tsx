"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Layout, Server } from "lucide-react";

const points = [
  {
    title: "Modern Engineering",
    description: "Built with scalable architecture, modern frameworks, and performance-focused systems.",
    icon: Server,
  },
  {
    title: "Product-Focused Thinking",
    description: "Every product is designed around usability, workflows, and long-term scalability.",
    icon: Zap,
  },
  {
    title: "Premium Frontend Systems",
    description: "Modern interfaces engineered with clarity, responsiveness, and refined user experience.",
    icon: Layout,
  },
  {
    title: "Scalable Infrastructure",
    description: "Systems designed for deployment, growth, optimization, and operational scalability.",
    icon: Shield,
  },
];

export function WhyIntegral() {
  return (
    <section className="py-48 px-6 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4"
          >
            Philosophy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8"
          >
            Why <span className="text-white/40">Integral Studio.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-16 flex flex-col justify-between group hover:bg-zinc-900/40 transition-colors duration-700"
            >
              <div>
                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{point.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
