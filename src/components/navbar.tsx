"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { Magnetic } from "./motion/magnetic";

const navItems = [
  { name: "Products", href: "/products" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-8 left-0 right-0 z-[100] flex items-center justify-center px-6"
    >
      <div className="max-w-[1400px] mx-auto h-20 px-8 flex items-center justify-between relative w-full">
        {/* Glass Background Refinement */}
        <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-2xl border border-white/5 rounded-full -z-10" />
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="text-black font-black text-xl tracking-tighter">I</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.2em] text-white uppercase leading-none">Integral</span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase leading-none mt-1">Studio</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-all duration-500 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Magnetic>
            <Link href="/contact">
              <Button className="hidden md:flex rounded-full bg-white text-black hover:scale-105 transition-transform duration-500 px-8 h-12 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                Start A Project
              </Button>
            </Link>
          </Magnetic>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-white"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-px bg-white"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-6 right-6 mt-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden md:hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          >
            <div className="p-10 flex flex-col gap-8">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-bold tracking-tight text-white/50 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-2xl h-16 text-xs font-bold uppercase tracking-widest mt-4 bg-white text-black">Start Project</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

