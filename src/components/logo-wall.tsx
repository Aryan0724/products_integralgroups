"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiSupabase, SiPostgresql, SiOpenai, SiVercel, SiTailwindcss, SiPython 
} from "react-icons/si";

const technologies = [
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
    <section className="py-24 border-y border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center gap-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 text-center"
          >
            Trusted technologies, modern infrastructure, and scalable product systems.
          </motion.p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {technologies.map((tech, i) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <tech.Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors uppercase">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
