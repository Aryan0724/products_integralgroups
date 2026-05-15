"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhyIntegral } from "@/components/why-integral";
import { ProcessTimeline } from "@/components/process-timeline";
import { motion } from "framer-motion";

export default function StudioPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-48 pb-12 bg-black">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 font-plus-jakarta tracking-tight"
            >
              Building the <br />
              <span className="text-gradient">Digital Edge.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Integral Studio is a multi-disciplinary venture studio. We are operators, engineers, and growth architects who believe in building scalable internet systems with extreme precision and speed.
            </motion.p>
          </div>
        </div>
      </section>
      <WhyIntegral />
      <ProcessTimeline />
      <Footer />
    </main>
  );
}
