"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-48 px-6 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-48"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4">
              Our Identity
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              A Modern SaaS <br />
              <span className="text-white/40">Product Studio.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="text-xl md:text-2xl text-white/60 leading-relaxed space-y-8 font-medium">
              <p>
                Integral Studio is the product and SaaS division of Integral Group focused on building scalable digital products, modern software systems, automation infrastructure, and AI-powered platforms.
              </p>
              <p>
                We combine product thinking, engineering, frontend systems, and operational scalability to create software built for modern businesses and future-focused ventures.
              </p>
              <p>
                Instead of building generic digital products, our focus is on creating usable, scalable, and maintainable systems with modern engineering standards and premium user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Engineering Quality</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">SaaS</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Focused Architecture</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
