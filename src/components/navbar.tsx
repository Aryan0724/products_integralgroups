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
      <div className="glass-dark border border-white/10 rounded-full px-8 py-4 flex items-center justify-between w-full max-w-[1200px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl">
            <div className="w-3 h-3 bg-black rounded-sm" />
          </div>
          <span className="font-bold text-sm uppercase tracking-[0.4em] font-sans text-white">
            Integral
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <Magnetic key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-white relative py-1",
                    pathname === item.href ? "text-white" : "text-white/30"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                    />
                  )}
                </Link>
              </Magnetic>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <Magnetic>
            <Link href="/contact">
              <Button variant="ghost" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white px-0 h-auto hover:bg-transparent">
                Contact
              </Button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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

