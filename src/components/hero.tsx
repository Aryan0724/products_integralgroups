"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence, type MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion/magnetic";

const words = ["AI Systems", "SaaS Products", "Growth Engines", "Autonomous Workflows", "Digital Platforms"];

import { 
  SiOpenai, SiVercel, SiSupabase, SiCloudflare, SiDatadog
} from "react-icons/si";

const saasLogos = [
  { name: "AlgoPilot", Icon: SiOpenai, color: "text-[#74aa9c]" },
  { name: "IntegralOS", Icon: SiVercel, color: "text-white" },
  { name: "NexusFlow", Icon: SiSupabase, color: "text-[#3ecf8e]" },
  { name: "VaultAI", Icon: SiCloudflare, color: "text-[#f38020]" },
  { name: "SignalStack", Icon: SiDatadog, color: "text-[#632ca6]" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 25);
    mouseY.set((clientY - innerHeight / 2) / 25);
  };

  const headline = "Launching Modern SaaS Products.";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[140vh] flex flex-col items-center justify-start overflow-hidden px-6 bg-[#050505]"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating SaaS Logos with Scroll-triggered Circle Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {mounted && <FloatingSaaSLogos scrollYProgress={scrollYProgress} springX={springX} springY={springY} />}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1200px] w-full text-center flex flex-col items-center pt-64">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="glass-dark px-6 py-2 rounded-full border border-white/10 flex items-center gap-3 group hover:border-white/20 transition-colors cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-white/60 transition-colors">
              A Product & SaaS Division of Integral Group
            </span>
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter mb-12 leading-[0.85] text-white flex flex-wrap justify-center drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {headline.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.2em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex flex-col items-center gap-8 mb-16"
        >
          <div className="text-lg md:text-xl text-white/40 font-medium max-w-3xl leading-relaxed space-y-8">
            <p className="balance-text">
              Integral Studio designs, develops, launches, and scales SaaS platforms, 
              automation systems, AI-powered tools, and modern digital products 
              for startups, businesses, and the Integral ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Magnetic>
                <Button size="lg" className="rounded-full px-12 h-16 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black hover:scale-105 transition-transform duration-500 shadow-2xl">
                  Explore Products
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="ghost" className="rounded-full px-12 h-16 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white flex items-center gap-2 group">
                  Start A Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white/20"
        >
          <div className="w-12 h-[1px] bg-white/10" />
          <span>Built with modern engineering, scalable systems, and product-focused design</span>
          <div className="w-12 h-[1px] bg-white/10" />
        </motion.div>
      </div>


      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full" />
      </div>
    </section>
  );
}

function FloatingSaaSLogos({ 
  scrollYProgress, 
  springX, 
  springY 
}: { 
  scrollYProgress: MotionValue<number>; 
  springX: MotionValue<number>; 
  springY: MotionValue<number>; 
}) {
  const radius = useTransform(scrollYProgress, [0, 0.4], [550, 250]);
  const rotation = useTransform(scrollYProgress, [0, 0.5], [0, 360]);
  const globalOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const globalScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0.5]);

  return (
    <>
      {saasLogos.map((logo, i) => {
        const angleOffset = (i / saasLogos.length) * Math.PI * 2;
        
        // Dynamic coordinates with breathing effect
        const x = useTransform(scrollYProgress, (s: number) => {
          const r = radius.get();
          const rot = rotation.get() * (Math.PI / 180);
          
          // Initial scattered phase (s=0) to Circle phase (s=0.4)
          const scatterX = Math.cos(angleOffset) * 700 + (i % 2 === 0 ? 150 : -150);
          const circleX = Math.cos(angleOffset + rot) * r;
          
          const progress = Math.min(s / 0.4, 1);
          return scatterX * (1 - progress) + circleX * progress;
        });

        const y = useTransform(scrollYProgress, (s: number) => {
          const r = radius.get();
          const rot = rotation.get() * (Math.PI / 180);
          
          const scatterY = Math.sin(angleOffset) * 500 + (i % 2 === 0 ? 100 : -100);
          const circleY = Math.sin(angleOffset + rot) * r;
          
          const progress = Math.min(s / 0.4, 1);
          return scatterY * (1 - progress) + circleY * progress;
        });

        return (
          <motion.div
            key={i}
            style={{
              x,
              y,
              opacity: globalOpacity,
              scale: globalScale,
              left: "50%",
              top: "45%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="absolute z-0"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, i % 2 === 0 ? 2 : -2, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                x: useTransform(springX, (v: number) => v * (1 + i * 0.1)),
                y: useTransform(springY, (v: number) => v * (1 + i * 0.1)),
              }}
              className="flex flex-col items-center gap-5 group"
            >
              {/* Premium Logo Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-24 h-24 glass-dark border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl group-hover:border-white/40 group-hover:scale-110 transition-all duration-700">
                  <logo.Icon className={cn("w-10 h-10 transition-transform duration-700 group-hover:rotate-12", logo.color)} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-20 group-hover:opacity-100 transition-all duration-700">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white whitespace-nowrap">{logo.name}</span>
                <div className="w-1 h-1 bg-blue-500 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}

