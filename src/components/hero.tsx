"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence, type MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Layers, Zap, Database, Shield, TrendingUp, Sparkles, Globe, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion/magnetic";
import { MockDashboard, MockFlow, MockCode } from "./mock-ui";

const floatingProducts = [
  { name: "AI Systems", Icon: Cpu, x: "15%", y: "20%", size: "w-16 h-16", delay: 0 },
  { name: "SaaS Platform", Icon: Layers, x: "85%", y: "25%", size: "w-20 h-20", delay: 1 },
  { name: "Automation", Icon: Zap, x: "10%", y: "70%", size: "w-14 h-14", delay: 2 },
  { name: "Analytics", Icon: TrendingUp, x: "90%", y: "65%", size: "w-18 h-18", delay: 0.5 },
  { name: "Infrastructure", Icon: Database, x: "25%", y: "85%", size: "w-12 h-12", delay: 1.5 },
  { name: "Security", Icon: Shield, x: "75%", y: "80%", size: "w-16 h-16", delay: 0.8 },
  { name: "Edge SDK", Icon: Terminal, x: "5%", y: "45%", size: "w-16 h-16", delay: 2.2 },
  { name: "Global Cloud", Icon: Globe, x: "95%", y: "40%", size: "w-14 h-14", delay: 1.2 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 40);
      mouseY.set((clientY - innerHeight / 2) / 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  if (!mounted) return <section className="min-h-screen bg-[#050505]" />;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] bg-[#050505] overflow-hidden flex flex-col items-center"
    >
      {/* Background System */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        
        {/* Floating Product Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingProducts.map((product, i) => (
            <FloatingProduct key={i} product={product} springX={springX} springY={springY} />
          ))}
        </div>

        {/* Cinematic Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full opacity-40" />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full opacity-20" />
        </div>
      </div>

      {/* Hero Content Area */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-20 max-w-[1400px] w-full pt-80 flex flex-col items-center text-center px-6"
      >
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="glass-dark px-8 py-3 rounded-full border border-white/5 flex items-center gap-4 group hover:border-white/20 transition-all duration-700 cursor-default shadow-2xl">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500 animate-ping opacity-50" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/30 group-hover:text-white/60 transition-colors">
              A Product & SaaS Division of Integral Group
            </span>
          </div>
        </motion.div>

        {/* Headline System */}
        <h1 className="text-6xl md:text-8xl lg:text-[11.5rem] font-bold tracking-tighter text-white leading-[0.75] mb-20 flex flex-wrap justify-center drop-shadow-[0_0_60px_rgba(255,255,255,0.08)]">
          {["Launching", "Modern", "SaaS", "Products."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtext & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-20"
        >
          <p className="text-xl md:text-3xl text-white/30 font-medium max-w-4xl leading-[1.4] balance-text tracking-tight">
            Integral Studio designs, develops, launches, and scales SaaS platforms, automation systems, AI tools, and digital products for modern businesses and future-focused ventures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <Magnetic>
              <Button size="lg" className="rounded-full px-20 h-24 text-xs font-bold uppercase tracking-[0.4em] bg-white text-black hover:scale-105 transition-transform duration-700 shadow-[0_20px_80px_rgba(255,255,255,0.2)]">
                Explore Products
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="ghost" className="rounded-full px-20 h-24 text-xs font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white flex items-center gap-4 group transition-all duration-500">
                Start A Project <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
            </Magnetic>
          </div>
        </motion.div>
      </motion.div>

      {/* Layered Interface Stack (Sticky/Scroll Reveal) */}
      <div className="sticky top-0 w-full h-screen mt-[-100vh] z-10 pointer-events-none flex items-end justify-center pb-20 overflow-hidden">
        <InterfaceStack scrollYProgress={scrollYProgress} springX={springX} springY={springY} />
      </div>

      {/* Bottom Cinematic Aura */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-[#050505] to-transparent z-30 pointer-events-none" />
    </section>
  );
}

function FloatingProduct({ product, springX, springY }: { product: any; springX: any; springY: any }) {
  const index = floatingProducts.indexOf(product);
  const radius = 20;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: product.delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        left: product.x,
        top: product.y,
        translateX: useTransform(springX, (v: number) => v * (0.5 + index * 0.1)),
        translateY: useTransform(springY, (v: number) => v * (0.5 + index * 0.1)),
      }}
      className="absolute flex flex-col items-center gap-4"
    >
      <motion.div
        animate={{
          y: [0, -radius, 0],
        }}
        transition={{
          duration: 6 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={cn(
          "glass-dark border border-white/10 rounded-[2rem] flex items-center justify-center backdrop-blur-2xl shadow-2xl relative group hover:border-white/30 transition-colors duration-700",
          product.size
        )}
      >
        <product.Icon className="w-1/2 h-1/2 text-white/20 group-hover:text-white transition-colors duration-700" />
        {/* Lens Flare Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />
      </motion.div>
      <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/5 group-hover:text-white/30 transition-colors duration-700 whitespace-nowrap">
        {product.name}
      </span>
    </motion.div>
  );
}

function InterfaceStack({ scrollYProgress, springX, springY }: { scrollYProgress: MotionValue<number>; springX: MotionValue<number>; springY: MotionValue<number> }) {
  const y1 = useTransform(scrollYProgress, [0.1, 0.6], [600, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.7], [800, 0]);
  const y3 = useTransform(scrollYProgress, [0.2, 0.8], [1000, 0]);
  
  const rotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div style={{ opacity, perspective: 2000 }} className="relative w-[1400px] h-[800px] flex items-center justify-center">
      {/* Background Code Layer */}
      <motion.div
        style={{
          y: y3,
          rotateX,
          x: useTransform(springX, (v: number) => v * 0.3),
          translateY: useTransform(springY, (v: number) => v * 0.3),
        }}
        className="absolute w-[1000px] h-[500px] z-0 opacity-40 blur-[1px]"
      >
        <div className="w-full h-full glass-dark border border-white/5 rounded-[4rem] overflow-hidden backdrop-blur-md">
          <MockCode className="opacity-40 p-12 text-xl" />
        </div>
      </motion.div>

      {/* Middle Flow Layer */}
      <motion.div
        style={{
          y: y2,
          rotateX,
          x: useTransform(springX, (v: number) => v * 0.6),
          translateY: useTransform(springY, (v: number) => v * 0.6),
        }}
        className="absolute w-[800px] h-[600px] z-10 translate-x-[200px] translate-y-[100px]"
      >
        <div className="w-full h-full glass-dark border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl group">
          <MockFlow className="opacity-60 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Top Dashboard Layer */}
      <motion.div
        style={{
          y: y1,
          rotateX,
          x: useTransform(springX, (v: number) => v * 1),
          translateY: useTransform(springY, (v: number) => v * 1),
        }}
        className="absolute w-[1100px] h-[700px] z-20 translate-y-[200px]"
      >
        <div className="w-full h-full glass-dark border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
          <MockDashboard className="opacity-80" />
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}
