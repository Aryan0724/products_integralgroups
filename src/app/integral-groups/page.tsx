"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { ArrowRight, Globe, Layers, Users, Zap, ExternalLink } from "lucide-react";

const departments = [
  {
    title: "Integral Studio",
    role: "Product Engineering & Design",
    description: "The high-fidelity daughter company focused on building believable, production-ready software artifacts and operational infrastructure.",
    icon: Zap
  },
  {
    title: "Venture Lab",
    role: "Startup Incubation",
    description: "Architecting the next generation of SaaS ecosystems from the ground up, providing the technical and strategic foundation for scale.",
    icon: Globe
  },
  {
    title: "Strategic Ops",
    role: "Business Orchestration",
    description: "Coordinating cross-departmental resources to function as a singular, unified machine for modern enterprise efficiency.",
    icon: Layers
  }
];

export default function IntegralGroupsPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      {/* Hero Section */}
      <section className="px-6 max-w-[1400px] mx-auto py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500 mb-8"
          >
            The Ecosystem
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-none mb-12"
          >
            Integral <br />
            <span className="text-white/20 italic">Groups.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl"
          >
            A unified startup ecosystem where specialized departments collaborate as one singular, high-performance organism. Integral Groups is the parent infrastructure behind the world's most believable digital products.
          </motion.p>
        </div>
      </section>

      {/* The Subsidiary Relationship */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-white tracking-tighter leading-tight">
              One Vision. <br />
              <span className="text-white/40">Multiple Engines.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-md font-medium">
              Integral Studio functions as the primary delivery daughter company of Integral Groups. While the Studio focuses on engineering excellence, the Group provides the overarching strategic and operational ecosystem that allows every product to thrive.
            </p>
            <div className="flex items-center gap-4 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">
              The Parent Ecosystem <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="relative aspect-square glass-dark border border-white/5 rounded-[4rem] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px]" />
            <div className="relative z-10 text-center space-y-10 flex flex-col items-center">
              <div className="scale-[2.5] mb-8">
                <Logo iconOnly />
              </div>
              <div className="text-white font-black uppercase tracking-[0.5em] text-sm">Integral Groups</div>
            </div>
            
            {/* Orbital Decor */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-white/5 animate-spin-slow" />
              <div className="absolute w-80 h-80 rounded-full border border-white/5 animate-spin-reverse-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-64 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] glass-dark border border-white/5 hover:border-blue-500/50 transition-all duration-700 bg-white/[0.01]"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-black transition-all">
                <dept.icon className="w-6 h-6" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20 mb-2">{dept.role}</div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{dept.title}</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                {dept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* External Portal Link */}
      <section className="py-64 bg-zinc-950 border-y border-white/5 px-6">
        <div className="max-w-[1400px] mx-auto text-center space-y-12">
          <div className="text-[10px] uppercase tracking-[1em] font-bold text-white/20">The Main Portal</div>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
            Access the <span className="text-blue-500">Core.</span>
          </h2>
          <a 
            href="https://integralgroups.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-6 px-16 h-24 rounded-full bg-white text-black font-black uppercase tracking-[0.4em] text-[12px] hover:scale-105 transition-all shadow-2xl group"
          >
            Visit integralgroups.in
            <ExternalLink className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
