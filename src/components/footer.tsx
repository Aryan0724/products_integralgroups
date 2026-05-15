"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <footer className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3 group mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                <div className="w-3 h-3 bg-black rounded-sm" />
              </div>
              <span className="font-bold text-sm uppercase tracking-[0.4em] font-sans text-white">
                Integral Studio
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              Integral Studio is the SaaS and product division of Integral Group focused on building scalable software systems, automation platforms, AI tools, and modern digital products.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/30 hover:text-white transition-colors text-sm"
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

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
            © 2026 Integral Studio. All Rights Reserved.
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
