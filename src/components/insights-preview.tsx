"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "The Architecture of Autonomous Systems",
    date: "May 12, 2026",
    category: "Engineering",
    href: "/insights/autonomous-systems",
  },
  {
    title: "Scaling SaaS with AI Infrastructure",
    date: "Apr 28, 2026",
    category: "Product",
    href: "/insights/scaling-saas",
  },
  {
    title: "Why We Build in Public",
    date: "Apr 15, 2026",
    category: "Philosophy",
    href: "/insights/build-in-public",
  },
];

export function InsightsPreview() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4"
            >
              Knowledge Base
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Latest internal <br />
              <span className="text-white/40">system insights.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/insights" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors flex items-center gap-2">
              Read the full archive <ArrowUpRight className="w-3 h-3" />
            </Link>
          </motion.div>
        </div>

        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={article.href}
                className="group block relative p-10 rounded-[2rem] glass border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 w-24">
                      {article.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500 tracking-tight">
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                      {article.date}
                    </span>
                    <div className="w-10 h-10 rounded-full glass border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
