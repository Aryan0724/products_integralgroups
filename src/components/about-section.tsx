"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-48 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-48"
          >
            <div className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/20 mb-8">
              The Studio
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.8] mb-12">
              Architecting <br />
              <span className="text-white/20 italic">Digital Value.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-20"
          >
            <div className="text-2xl md:text-4xl text-white/50 leading-[1.3] space-y-12 font-medium tracking-tight">
              <p>
                Integral Studio is the product division of Integral Group focused on building scalable software systems, modern software systems, and AI-powered platforms.
              </p>
              <p>
                We combine product thinking, engineering, and operational scalability to create software built for modern businesses and future-focused ventures.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 pt-20 border-t border-white/5">
              <div>
                <div className="text-5xl font-bold text-white mb-4 tracking-tighter">100%</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Engineering Quality</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-4 tracking-tighter">SaaS</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Focus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
