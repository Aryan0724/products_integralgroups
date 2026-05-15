"use client";

import React from "react";
import { motion } from "framer-motion";
import { MockDashboard, MockFlow } from "./mock-ui";

const reasons = [
  {
    title: "Engineering First",
    description: "We don't just design interfaces; we architect scalable software systems built for production-grade reliability.",
    metric: "100%",
    subMetric: "Production Ready",
  },
  {
    title: "Product Focus",
    description: "Our approach is driven by product-thinking, ensuring usability, scalability, and long-term maintainability.",
    metric: "01",
    subMetric: "Core Philosophy",
  },
  {
    title: "Operational Speed",
    description: "Accelerated development cycles without compromising on engineering quality or architectural integrity.",
    metric: "10x",
    subMetric: "Execution Speed",
  },
];

export function WhyIntegral() {
  return (
    <section className="py-64 px-6 bg-black relative overflow-hidden">
      {/* Background Exhibit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 blur-3xl pointer-events-none">
        <MockFlow />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          <div className="lg:col-span-12 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 mb-8"
            >
              The Edge
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]"
            >
              Why Integral <br />
              <span className="text-white/20">Studio.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-16">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 glass-dark border border-white/5 rounded-[3rem] hover:border-white/20 transition-all duration-700"
              >
                <div className="text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-blue-500 transition-colors">
                  {reason.metric}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold mb-10">
                  {reason.subMetric}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{reason.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
