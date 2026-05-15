"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ProcessTimeline } from "@/components/process-timeline";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const detailedSteps = [
  {
    phase: "01",
    title: "Deep Discovery & Strategic Mapping",
    description: "We begin by dissecting your operational DNA. Our team conducts intensive workshops to map every workflow, bottleneck, and opportunity for automation.",
    details: ["Stakeholder Interviews", "Workflow Auditing", "Feasibility Mapping", "Technical Debt Analysis"]
  },
  {
    phase: "02",
    title: "Architectural Prototyping",
    description: "Before a single line of production code is written, we build the architectural skeletal system. This ensures the foundation is built for sub-100ms latency and infinite scale.",
    details: ["Cloud Infrastructure Design", "Database Schema Optimization", "API First Architecture", "Security Layer Definition"]
  },
  {
    phase: "03",
    title: "Engineering & Iterative Sprints",
    description: "Our engineers build in high-velocity sprints. You get visibility into every commit, ensuring the product evolves exactly as your business needs.",
    details: ["Full-Stack Development", "AI Integration", "Automated Testing", "CI/CD Pipeline Setup"]
  },
  {
    phase: "04",
    title: "Operational Handover & Scaling",
    description: "Launch is just the beginning. We provide complete operational handover, training, and a roadmap for continuous scaling.",
    details: ["Deployment & Migration", "Team Onboarding", "Performance Monitoring", "Long-term Roadmap"]
  }
];

export default function ProcessesPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 max-w-[1400px] mx-auto py-24 border-b border-white/5">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500 mb-8"
          >
            Our Methodology
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-none mb-12"
          >
            Built for <br />
            <span className="text-white/20">Operational Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed"
          >
            Our process is a surgical integration of strategy, design, and high-performance engineering. We don't just build apps; we engineer operational infrastructure.
          </motion.p>
        </div>
      </section>

      {/* The Visual Journey (Re-using the timeline) */}
      <ProcessTimeline />

      {/* Deep Dive Section */}
      <section className="py-64 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          {detailedSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-8"
            >
              <div className="text-6xl font-black text-white/5 tracking-tighter">{step.phase}</div>
              <h2 className="text-4xl font-bold text-white tracking-tight">{step.title}</h2>
              <p className="text-white/40 text-lg leading-relaxed">{step.description}</p>
              
              <div className="grid grid-cols-1 gap-4 pt-8">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-white/20 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-white/40 group-hover:text-white transition-colors tracking-widest uppercase">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Process */}
      <section className="py-64 bg-zinc-950/50 border-y border-white/5 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12">
            Ready to <span className="text-blue-500 italic">optimize</span> your operations?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="px-12 h-16 rounded-full bg-white text-black font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shadow-2xl">
              Schedule a Strategic Mapping session
            </button>
            <button className="px-12 h-16 rounded-full glass-dark border border-white/10 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-colors">
              Download Process PDF
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
