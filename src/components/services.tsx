"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, PenTool, Code2, Rocket, TrendingUp, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./motion/magnetic";

const services = [
  {
    title: "SaaS Development",
    description: "Modern scalable software systems designed for startups and businesses.",
    icon: Layers,
  },
  {
    title: "AI Integration",
    description: "AI-powered workflows, intelligent tools, and automation systems built for modern operations.",
    icon: Cpu,
  },
  {
    title: "Product Design",
    description: "Clean, usable, and premium digital experiences designed for real-world scalability.",
    icon: PenTool,
  },
  {
    title: "Frontend Engineering",
    description: "Modern frontend systems built with performance, responsiveness, and usability in mind.",
    icon: Code2,
  },
  {
    title: "MVP Development",
    description: "Rapid product development focused on validation, usability, and scalable foundations.",
    icon: Rocket,
  },
  {
    title: "Product Scaling",
    description: "Infrastructure, optimization, and engineering systems designed for long-term growth.",
    icon: TrendingUp,
  },
];

export function Services() {
  return (
    <section id="services" className="py-64 px-6 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-10 leading-[0.9]"
          >
            What We <span className="text-white/40">Do.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl font-medium max-w-3xl leading-relaxed balance-text"
          >
            Integral Studio combines product strategy, software engineering, frontend systems, automation, and UX architecture to build scalable digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-black p-12 flex flex-col justify-between aspect-square hover:bg-zinc-900/40 transition-colors duration-700"
            >
              <div>
                <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors duration-700">
                  {service.description}
                </p>
              </div>

              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Magnetic>
                  <button className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
