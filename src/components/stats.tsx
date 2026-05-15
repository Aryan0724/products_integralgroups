"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Systems Built", value: "40+", suffix: "" },
  { label: "Aggregate Revenue", value: "120", suffix: "M+" },
  { label: "Average Growth", value: "4.2", suffix: "X" },
  { label: "Total Users", value: "2.4", suffix: "M" },
];

export function Stats() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto border-y border-white/5 py-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-6">
                {stat.label}
              </div>
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: i * 0.1 + 0.2 }}
                  className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                >
                  {stat.value}
                </motion.span>
                <span className="text-2xl md:text-3xl font-bold text-white/40">{stat.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
