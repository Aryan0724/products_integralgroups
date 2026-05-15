"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Settings, 
  Users, 
  ArrowUpRight,
  Plus,
  Search,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Products", value: "3", change: "+1", icon: Package },
  { label: "Active Case Studies", value: "8", change: "+2", icon: FileText },
  { label: "Studio Visitors", value: "1.2k", change: "+12%", icon: Users },
  { label: "System Health", value: "100%", change: "Stable", icon: LayoutDashboard },
];

const quickActions = [
  { name: "Edit Homepage", icon: LayoutDashboard, href: "#" },
  { name: "Manage Products", icon: Package, href: "#" },
  { name: "Update Case Studies", icon: FileText, href: "#" },
  { name: "SEO Settings", icon: Settings, href: "#" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-12 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-4">Management Console</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">Integral <span className="text-white/40">HQ</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="rounded-full border border-white/5 px-8 h-12 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">
            <Search className="w-4 h-4 mr-2" /> Search Data
          </Button>
          <Button className="rounded-full bg-white text-black px-8 h-12 text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            <Plus className="w-4 h-4 mr-2" /> New Entry
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-dark p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors group"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold text-emerald-400 tracking-widest">{stat.change}</div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-white/30">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-8">
          <h2 className="text-xl font-bold tracking-tight text-white/40 uppercase tracking-[0.2em]">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            {quickActions.map((action, i) => (
              <button
                key={i}
                className="flex items-center justify-between p-6 glass-dark rounded-2xl border border-white/5 hover:border-white/20 transition-all group text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <action.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold tracking-tight text-white/60 group-hover:text-white transition-colors">{action.name}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Live Preview / Recent Activity */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-white/40 uppercase tracking-[0.2em]">Recent Modifications</h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">View All Logs</button>
          </div>
          <div className="glass-dark rounded-[2.5rem] border border-white/5 overflow-hidden">
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                <span className="text-xs font-bold tracking-tight text-white">System Synchronized</span>
              </div>
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Last Update: 2m ago</span>
            </div>
            <div className="divide-y divide-white/5">
              {[
                { type: "Product", name: "IntegralHQ", user: "Aryan", action: "Updated Infrastructure", time: "10m ago" },
                { type: "Showcase", name: "AlgoPilot Dashboard", user: "System", action: "Re-rendered Preview", time: "45m ago" },
                { type: "Case Study", name: "ExamPlanner V2", user: "Aryan", action: "Published Design", time: "2h ago" },
                { type: "SEO", name: "Homepage Meta", user: "Aryan", action: "Optimized Tags", time: "5h ago" },
              ].map((activity, i) => (
                <div key={i} className="p-8 flex items-center justify-between hover:bg-white/[0.01] transition-colors cursor-default group">
                  <div className="flex items-center gap-6">
                    <div className="text-[10px] font-black text-white/10 group-hover:text-white/20 transition-colors">0{i+1}</div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{activity.name}</div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-1">{activity.action} • {activity.user}</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Media Management Preview */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold tracking-tight text-white/40 uppercase tracking-[0.2em]">Studio Media</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-square rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white/10 group-hover:text-white transition-all group-hover:scale-110" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
