"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight, Zap, Shield, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "saas", name: "SaaS Platform", icon: Zap },
  { id: "ai", name: "AI Integration", icon: Cpu },
  { id: "ops", name: "Operational Tool", icon: Shield },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "saas",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("success");
  };

  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      <section className="px-6 max-w-[1400px] mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left Side: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500"
            >
              Engagement
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none"
            >
              Let's Engineer <br />
              <span className="text-white/20 italic">Your Vision.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-xl font-medium leading-relaxed max-w-md"
            >
              Ready to build high-fidelity software? Fill out the brief below, and our engineering team will reach out within 24 hours.
            </motion.p>

            <div className="space-y-8 pt-12 border-t border-white/5">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl glass-dark border border-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-white font-bold tracking-widest text-[10px] uppercase mb-1">Response Time</div>
                  <div className="text-white/40 text-sm font-medium">{"<"} 24 Hours</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl glass-dark border border-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-white font-bold tracking-widest text-[10px] uppercase mb-1">Architecture</div>
                  <div className="text-white/40 text-sm font-medium">SOW & Strategic Roadmap included</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass-dark border border-white/5 rounded-[3rem] p-12 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 px-6 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 px-6 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Project Type</label>
                      <div className="grid grid-cols-3 gap-4">
                        {projectTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({...formData, projectType: type.id})}
                            className={cn(
                              "flex flex-col items-center justify-center gap-3 h-28 rounded-2xl border transition-all",
                              formData.projectType === type.id 
                                ? "bg-blue-500/10 border-blue-500 text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                                : "bg-white/[0.02] border-white/5 text-white/20 hover:border-white/20"
                            )}
                          >
                            <type.icon className="w-6 h-6" />
                            <span className="text-[9px] font-black uppercase tracking-widest">{type.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Budget Range</label>
                      <select 
                        required
                        className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 px-6 text-white appearance-none focus:outline-none focus:border-blue-500 transition-colors"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      >
                        <option value="" className="bg-black">Select Budget</option>
                        <option value="10-25k" className="bg-black">$10k - $25k</option>
                        <option value="25-50k" className="bg-black">$25k - $50k</option>
                        <option value="50k+" className="bg-black">$50k+</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 ml-4">Project Brief</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full h-20 rounded-full bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 shadow-2xl group"
                    >
                      {status === "submitting" ? (
                        <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          Initialize Project Engagement
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                  >
                    <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                      <CheckCircle2 className="w-12 h-12 text-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-4xl font-bold text-white tracking-tighter">Transmission Successful.</h2>
                      <p className="text-white/40 text-lg font-medium">Our engineering team has received your brief.</p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-blue-500 font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors"
                    >
                      Send another transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
