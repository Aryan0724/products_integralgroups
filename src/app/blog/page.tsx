"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "Engineering Sub-100ms Latency for Enterprise CRM",
    excerpt: "A deep dive into our caching strategy and database orchestration for IntegralHQ, ensuring sub-100ms response times for million-row datasets.",
    date: "May 12, 2026",
    author: "Aryan",
    category: "Engineering",
    image: "/integralhq.png"
  },
  {
    title: "The Future of Creator Intelligence: Predictive AI",
    excerpt: "Exploring the machine learning models behind AlgoPilot and how we predict audience retention before a video is even published.",
    date: "May 08, 2026",
    author: "Technical Team",
    category: "AI & ML",
    image: "/algopilot.png"
  },
  {
    title: "Scaling Institutional Logic for Modern Education",
    excerpt: "How we rebuilt ExamPlanner's scheduling engine to handle complex multi-institutional allotment at scale.",
    date: "April 30, 2026",
    author: "Product Lead",
    category: "Case Study",
    image: "/examplanner.png"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen pt-32">
      <Navbar />
      
      {/* Header */}
      <section className="px-6 max-w-[1400px] mx-auto py-24 border-b border-white/5">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-blue-500 mb-8"
          >
            Insights & Updates
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-none mb-12"
          >
            The Studio <br />
            <span className="text-white/20 italic">Intelligence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed"
          >
            Deep dives into architectural decisions, AI breakthroughs, and the evolution of the Integral Suite.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center group cursor-pointer">
          <div className="relative aspect-[16/9] glass-dark border border-white/10 rounded-[3rem] overflow-hidden">
            <img 
              src={posts[0].image} 
              alt={posts[0].title}
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="px-4 py-1.5 rounded-full glass-dark border border-white/10 text-[9px] uppercase tracking-widest font-black text-blue-500">{posts[0].category}</span>
              <div className="flex items-center gap-2 text-white/20 text-[10px] uppercase tracking-widest font-bold">
                <Calendar className="w-3 h-3" />
                {posts[0].date}
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none group-hover:text-blue-500 transition-colors duration-500">
              {posts[0].title}
            </h2>
            <p className="text-white/40 text-xl leading-relaxed">
              {posts[0].excerpt}
            </p>
            <div className="flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-[10px]">
              Read Full Post <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {posts.slice(1).map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer space-y-8"
            >
              <div className="relative aspect-[16/10] glass-dark border border-white/10 rounded-[2.5rem] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  <span className="text-[9px] uppercase tracking-widest font-black text-white/20 group-hover:text-blue-500 transition-colors">{post.category}</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/10">{post.date}</span>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
