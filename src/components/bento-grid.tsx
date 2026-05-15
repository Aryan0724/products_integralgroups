"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MockDashboard, MockFlow, MockCode } from "./mock-ui";

const items = [
  {
    title: "SaaS Platforms",
    description: "Scalable software products built for startups, creators, businesses, and operational systems.",
    component: MockDashboard,
    className: "md:col-span-2 md:row-span-2",
    color: "from-blue-500/10 to-transparent",
  },
  {
    title: "AI Products",
    description: "Machine learning systems and AI-powered products.",
    component: MockFlow,
    className: "md:col-span-1 md:row-span-1",
    color: "from-purple-500/10 to-transparent",
  },
  {
    title: "Automation Systems",
    description: "Workflow automation and operational efficiency.",
    component: MockCode,
    className: "md:col-span-1 md:row-span-1",
    color: "from-amber-500/10 to-transparent",
  },
  {
    title: "Internal Tools",
    description: "Purpose-built software systems designed for efficiency.",
    component: MockDashboard,
    className: "md:col-span-1 md:row-span-2",
    color: "from-emerald-500/10 to-transparent",
  },
];

export function BentoGrid() {
  return (
    <section className="py-64 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-40 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-6"
            >
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9]"
            >
              Products Built For <br />
              <span className="text-white/40">Modern Systems.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl font-medium max-w-lg leading-relaxed balance-text"
          >
            From internal operational tools to scalable SaaS platforms, Integral Studio develops software systems focused on usability and scalability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative rounded-[2.5rem] overflow-hidden glass-dark border border-white/5 hover:border-white/20 transition-all duration-700",
                item.className
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="p-10 h-full flex flex-col">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs">{item.description}</p>
                </div>

                <div className="flex-1 min-h-[300px] relative mt-auto translate-y-10 group-hover:translate-y-0 transition-transform duration-1000">
                  <div className={cn(
                    "absolute -inset-10 bg-gradient-to-br blur-[80px] opacity-10 transition-opacity duration-1000",
                    item.color
                  )} />
                  <div className="relative w-full h-full glass-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                    <item.component className="scale-90 group-hover:scale-95 transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
