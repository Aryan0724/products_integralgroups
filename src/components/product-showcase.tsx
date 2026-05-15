"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "AlgoPilot",
    category: "AI Trading Systems",
    description: "High-frequency algorithmic execution for digital asset markets.",
    image: "/products/algopilot.webp",
    color: "bg-blue-600",
  },
  {
    title: "IntegralOS",
    category: "Studio Management",
    description: "The core operating system for modern venture studios.",
    image: "/products/integralos.webp",
    color: "bg-zinc-600",
  },
  {
    title: "NexusFlow",
    category: "Workflow Automation",
    description: "Autonomous agent coordination across enterprise stacks.",
    image: "/products/nexusflow.webp",
    color: "bg-indigo-600",
  },
  {
    title: "VaultAI",
    category: "Secure Intelligence",
    description: "Private LLM clusters for sensitive financial data.",
    image: "/products/vaultai.webp",
    color: "bg-emerald-600",
  },
  {
    title: "SignalStack",
    category: "Market Intelligence",
    description: "Real-time global sentiment analysis and trend forecasting.",
    image: "/products/signalstack.webp",
    color: "bg-amber-600",
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} className="py-48 bg-background relative overflow-hidden">
      <div className="px-6 max-w-[1400px] mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4"
            >
              Showcase
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Selected Product <br />
              <span className="text-white/40">Interfaces.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-lg md:text-xl font-medium mt-6 max-w-xl leading-relaxed"
            >
              Modern software interfaces designed with clarity, usability, and scalability in mind.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 md:max-w-md md:justify-end"
          >
            {[
              "Analytics Platforms", "AI Dashboards", "Automation Systems", 
              "Admin Interfaces", "Operational Software", "SaaS Products"
            ].map((tag) => (
              <span key={tag} className="px-5 py-2 rounded-full glass-dark border border-white/5 text-[10px] uppercase tracking-widest font-bold text-white/30 hover:text-white transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative h-[600px] flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-6 cursor-grab active:cursor-grabbing">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-[450px] h-[550px] rounded-[3rem] overflow-hidden glass-card group"
            >
              {/* Product Preview Mockup */}
              <div className="absolute inset-x-8 top-16 bottom-32 bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                
                {/* Mock UI Elements */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-white/5" />
                      <div className="w-4 h-4 rounded-full bg-white/5" />
                    </div>
                  </div>
                  <div className="w-full h-32 bg-white/5 rounded-xl animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/5 rounded-xl" />
                    <div className="h-20 bg-white/5 rounded-xl" />
                  </div>
                </div>

                {/* Accent Glow */}
                <div className={cn("absolute -bottom-20 -right-20 w-64 h-64 blur-[80px] opacity-30 rounded-full", product.color)} />
              </div>

              {/* Product Info */}
              <div className="absolute inset-x-10 bottom-10 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-2">{product.category}</div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{product.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12 text-center backdrop-blur-sm">
                <p className="text-white text-lg font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
