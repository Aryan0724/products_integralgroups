"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Process", href: "/process" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "SaaS Development", href: "/services" },
      { name: "AI Systems", href: "/services" },
      { name: "Automation", href: "/services" },
      { name: "Product Design", href: "/services" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Platforms", href: "/products" },
      { name: "Internal Tools", href: "/products" },
      { name: "Product Systems", href: "/products" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { name: "Integral Group", href: "https://integral.group" },
      { name: "Integral Labs", href: "https://integral.labs" },
      { name: "Integral Media", href: "https://integral.media" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-40 px-6 bg-[#050505] relative overflow-hidden text-left">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          <div className="lg:col-span-4 max-w-sm text-left">
            <Link href="/" className="flex items-center gap-3 group mb-10">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <span className="text-black font-black text-xl tracking-tighter">I</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase leading-none">Integral</span>
                <span className="text-[9px] font-bold tracking-[0.4em] text-white/30 uppercase leading-none mt-1 text-left">Studio</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-medium text-left">
              Architecting scalable software systems, modern SaaS platforms, and AI-powered products for modern digital infrastructure.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:pl-12 text-left">
            {footerLinks.map((section) => (
              <div key={section.title} className="text-left">
                <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-left">
                  {section.title}
                </h4>
                <ul className="space-y-6 text-left">
                  {section.links.map((link) => (
                    <li key={link.name} className="text-left">
                      <Link
                        href={link.href}
                        className="text-white/30 hover:text-white transition-all duration-500 text-xs font-bold uppercase tracking-widest text-left"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/10 text-left">
            © 2026 Integral Studio. All Rights Reserved. Product Division of Integral Group.
          </div>
          <div className="flex items-center gap-12">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/10 hover:text-white transition-colors"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
