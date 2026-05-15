"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

const floatingLogos = [
  { name: "SaaS 1", x: "12%", y: "15%", size: "w-20 h-20", delay: 0 },
  { name: "SaaS 2", x: "82%", y: "20%", size: "w-24 h-24", delay: 0.5 },
  { name: "SaaS 3", x: "8%", y: "65%", size: "w-20 h-20", delay: 1 },
  { name: "SaaS 4", x: "88%", y: "70%", size: "w-22 h-22", delay: 1.5 },
  { name: "SaaS 5", x: "25%", y: "85%", size: "w-16 h-16", delay: 2 },
  { name: "SaaS 6", x: "72%", y: "82%", size: "w-20 h-20", delay: 2.5 },
  { name: "SaaS 7", x: "35%", y: "12%", size: "w-14 h-14", delay: 3 },
  { name: "SaaS 8", x: "65%", y: "88%", size: "w-24 h-24", delay: 3.5 },
  { name: "SaaS 9", x: "50%", y: "5%", size: "w-18 h-18", delay: 4 },
  { name: "SaaS 10", x: "45%", y: "92%", size: "w-20 h-20", delay: 4.5 },
];

export function LibrarySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center pt-48 pb-24">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingLogos.map((logo, i) => (
          <motion.div
            key={i}
            style={{
              left: logo.x,
              top: logo.y,
              y: useTransform(scrollYProgress, [0, 1], [250 * (i % 2 === 0 ? 1 : -1), -250 * (i % 2 === 0 ? 1 : -1)]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, i * 20]),
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: false }}
            className={cn(
              "absolute glass-dark rounded-[2.5rem] border border-white/10 flex items-center justify-center p-4 overflow-hidden group shadow-2xl",
              logo.size
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="/library-logos.png" 
              alt="SaaS Logo"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 scale-[2]"
              style={{ objectPosition: `${(i * 15) % 100}% ${(i * 25) % 100}%` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Centered Content */}
      <motion.div 
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 w-full max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-bold uppercase tracking-[0.6em] text-white/30 mb-16"
        >
          A growing library of
        </motion.p>

        <div className="space-y-4 md:space-y-0">
          <StatLine value={12} label="SaaS Products" delay={0.1} />
          <StatLine value={450} label="Interfaces" delay={0.2} color="text-white/40" />
          <StatLine value={120} label="Workflows" delay={0.3} color="text-white/20" />
        </div>
      </motion.div>
    </section>
  );
}

function StatLine({ value, label, delay, color = "text-white" }: { value: number; label: string; delay: number; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85]", color)}
    >
      <Counter value={value} /> {label}
    </motion.div>
  );
}

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => setCount(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [value, inView]);

  return <span ref={ref}>{count.toLocaleString()}{value > 100 ? "+" : ""}</span>;
}
