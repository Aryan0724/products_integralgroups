"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InsightsPreview } from "@/components/insights-preview";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function InsightsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-48 pb-12 bg-black">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 font-plus-jakarta tracking-tight"
          >
            Technical <span className="text-gradient">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of playbooks, manifestos, and technical deep-dives from our engineering and growth teams.
          </motion.p>
        </div>
      </section>
      <InsightsPreview />
      <div className="py-12 bg-black">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
           {/* Placeholder for more blog posts */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                <span className="text-blue-500 font-mono text-xs mb-4 block uppercase tracking-widest">Case Study</span>
                <h3 className="text-2xl font-bold mb-4 font-plus-jakarta">Scaling AlgoPilot: From Zero to $100M Transaction Volume</h3>
                <p className="text-muted-foreground mb-6">A deep dive into the infrastructure challenges of high-frequency trading and how we optimized for sub-millisecond latency.</p>
                <button className="text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">Read Case Study <ArrowRight className="w-4 h-4" /></button>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-colors">
                <span className="text-blue-500 font-mono text-xs mb-4 block uppercase tracking-widest">Whitepaper</span>
                <h3 className="text-2xl font-bold mb-4 font-plus-jakarta">The Future of Autonomous SaaS: A 2026 Perspective</h3>
                <p className="text-muted-foreground mb-6">Our research on how AI agents will shift the SaaS landscape from tool-based to outcome-based software.</p>
                <button className="text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">Read Whitepaper <ArrowRight className="w-4 h-4" /></button>
              </div>
           </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
