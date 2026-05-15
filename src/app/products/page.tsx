"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { BentoGrid } from "@/components/bento-grid";
import { ArrowRight, Globe, Zap, Shield, Cpu } from "lucide-react";

const productFeatures = [
  {
    title: "Enterprise Grade Infrastructure",
    description: "Every product is built on a resilient, military-grade infrastructure designed for infinite scalability.",
    icon: Shield
  },
  {
    title: "Real-time Intelligence",
    description: "Native AI integration and predictive analytics are baked into the core of our software suites.",
    icon: Cpu
  },
  {
    title: "Sub-100ms Latency",
    description: "Performance is not an afterthought. We optimize for high-velocity operational workflows.",
    icon: Zap
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      {/* Header */}
      <section className="px-6 max-w-[1400px] mx-auto py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500 mb-8"
          >
            The Exhibit
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-none mb-12"
          >
            Believable <br />
            <span className="text-white/20 italic">Products.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl"
          >
            A catalog of functional, high-fidelity software built for modern digital orchestration. From creator intelligence to institutional management.
          </motion.p>
        </div>
      </section>

      {/* The Grid */}
      <BentoGrid />

      {/* Product Philosophy */}
      <section className="py-64 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {productFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="w-12 h-12 rounded-2xl glass-dark border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-64 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-2xl">
              Want to see the <span className="italic">architecture</span> behind the scenes?
            </h2>
            <button className="h-20 px-12 rounded-full bg-black text-white font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shrink-0">
              Request Deep Dive Access
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
