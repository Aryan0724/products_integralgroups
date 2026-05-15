"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "./motion/magnetic";
import { MockDashboard } from "./mock-ui";

export function FinalCTA() {
  return (
    <section className="py-96 px-6 bg-black relative overflow-hidden text-center">
      {/* Background Interface Exhibit */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] rotate-12 blur-2xl">
          <MockDashboard />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 mb-16"
        >
          Project Initiation
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-9xl lg:text-[14rem] font-bold tracking-tighter text-white mb-20 leading-[0.75] drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
        >
          Build Better <br />
          <span className="text-white/20 italic">Systems.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-xl md:text-3xl font-medium max-w-3xl mx-auto mb-24 leading-relaxed balance-text"
        >
          Engineering modern SaaS platforms and digital products built for the next generation of scale.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10"
        >
          <Magnetic>
            <Button size="lg" className="rounded-full px-20 h-24 text-xs font-bold uppercase tracking-[0.4em] bg-white text-black hover:scale-105 transition-transform duration-700 shadow-[0_20px_80px_rgba(255,255,255,0.2)]">
              Start A Project
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="ghost" className="rounded-full px-20 h-24 text-xs font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all duration-500">
              Explore Exhibits
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Cinematic Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />
    </section>
  );
}
