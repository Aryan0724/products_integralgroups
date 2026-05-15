"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "./motion/magnetic";

export function FinalCTA() {
  return (
    <section className="py-64 px-6 bg-background relative overflow-hidden text-center">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-12"
        >
          Ready to scale
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-16 leading-[0.85] drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          Build Better <br />
          <span className="text-white/40">Software Products.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-20 leading-relaxed"
        >
          Modern SaaS systems, automation platforms, and digital products engineered for usability, scalability, and performance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Magnetic>
            <Button size="lg" className="rounded-full px-16 h-20 text-xs font-bold uppercase tracking-[0.3em] bg-white text-black hover:scale-105 transition-transform duration-500 shadow-2xl">
              Start A Project
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="ghost" className="rounded-full px-16 h-20 text-xs font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white group">
              Explore Products
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[160px] rounded-full" />
        <div className="absolute inset-0 grid-pattern opacity-5" />
      </div>
    </section>
  );
}
