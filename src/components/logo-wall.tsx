"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiSupabase, SiPostgresql, 
  SiOpenai, SiVercel, SiTailwindcss, SiPython 
} from "react-icons/si";

const techStack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Vercel", Icon: SiVercel },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Python", Icon: SiPython },
];

export function LogoWall() {
  return (
    <section className="py-40 bg-black relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20"
          >
            Trusted Technologies & Infrastructure
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <tech.Icon className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-110" />
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/0 group-hover:text-white/40 transition-all duration-500">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
}
