"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const legalSections = [
  {
    title: "1. Operational Engagement",
    content: "Integral Studio operates as a high-fidelity product engineering firm. All engagements are governed by individual Statement of Work (SOW) documents which outline specific technical delivery milestones, architectural requirements, and operational handover protocols."
  },
  {
    title: "2. Intellectual Property & Code Ownership",
    content: "Upon final project handover and completion of all contractual obligations, full ownership of custom application logic and proprietary front-end code is transferred to the client. Integral Studio retains ownership of core 'System Skeleton' libraries and reusable infrastructure components unless otherwise specified."
  },
  {
    title: "3. Data Sovereignty & Security",
    content: "We implement military-grade encryption and sub-100ms database orchestration. Clients are responsible for maintaining compliance with regional data privacy laws (GDPR, CCPA) within their specific product instances. Integral Studio is not liable for data breaches resulting from third-party API vulnerabilities outside of our engineered infrastructure."
  },
  {
    title: "4. Maintenance & Uptime SLA",
    content: "Our 'Production Ready' infrastructure is designed for 99.9% uptime. Post-launch maintenance tiers are available to ensure continuous scaling and security patching as digital infrastructure evolves."
  }
];

export default function LegalPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      {/* Header */}
      <section className="px-6 max-w-[1400px] mx-auto py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 mb-8"
          >
            Governance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-12"
          >
            Legal & <br />
            <span className="text-white/20 italic">Protocols.</span>
          </motion.h1>
          <p className="text-white/40 text-xl font-medium leading-relaxed max-w-2xl">
            The technical governance framework for all products built within the Integral Studio ecosystem.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="max-w-3xl space-y-24">
          {legalSections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white tracking-tight">{section.title}</h2>
              <div className="w-12 h-px bg-blue-500" />
              <p className="text-white/40 text-lg leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="p-12 md:p-24 rounded-[4rem] glass-dark border border-white/5 bg-white/[0.01] text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Have legal inquiries regarding your project?</h2>
          <button className="px-12 h-16 rounded-full bg-white text-black font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
            Contact Compliance Team
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
