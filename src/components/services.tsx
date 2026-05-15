"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="services" className="py-48 px-6 bg-black relative overflow-hidden">
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
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            What We <span className="text-white/40">Do.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
          >
            Integral Studio combines product strategy, software engineering, frontend systems, automation, and UX architecture to build scalable digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2rem] glass-dark border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
