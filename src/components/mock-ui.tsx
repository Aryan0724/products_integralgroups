"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MockDashboard = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-full bg-[#0a0a0a] rounded-xl border border-white/5 overflow-hidden flex flex-col", className)}>
    <div className="h-10 border-b border-white/5 px-4 flex items-center justify-between bg-white/[0.02]">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
      </div>
      <div className="w-32 h-2 bg-white/5 rounded-full" />
      <div className="w-4 h-4 rounded bg-white/5" />
    </div>
    <div className="flex-1 p-6 flex gap-6">
      <div className="w-40 flex flex-col gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="h-8 rounded bg-white/[0.03] border border-white/5" />
        ))}
        <div className="mt-auto h-24 rounded bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/10" />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 rounded-xl bg-white/[0.02] border border-white/5 p-4 flex flex-col justify-between">
              <div className="w-12 h-2 bg-white/10 rounded-full" />
              <div className="w-16 h-4 bg-white/20 rounded-full" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/5 p-6 relative overflow-hidden">
          <div className="flex justify-between mb-8">
            <div className="space-y-2">
              <div className="w-24 h-2 bg-white/20 rounded-full" />
              <div className="w-32 h-1.5 bg-white/5 rounded-full" />
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-6 rounded bg-white/5 border border-white/10" />
              <div className="w-16 h-6 rounded bg-blue-500/20 border border-blue-500/20" />
            </div>
          </div>
          {/* Chart Simulation */}
          <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-1 px-6">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-blue-500/20 rounded-t-sm transition-all duration-1000"
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MockFlow = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-full bg-[#080808] rounded-xl border border-white/5 p-8 flex flex-col gap-8 items-center justify-center", className)}>
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <div className="w-5 h-5 rounded bg-blue-400" />
      </div>
      <div className="w-24 h-2 bg-white/20 rounded-full" />
    </div>
    <div className="w-[2px] h-12 bg-gradient-to-b from-blue-500/40 to-transparent" />
    <div className="grid grid-cols-2 gap-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%+48px)] h-[1px] bg-white/5" />
      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-white/20" />
        </div>
        <div className="w-16 h-1.5 bg-white/10 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-emerald-400/40" />
        </div>
        <div className="w-16 h-1.5 bg-white/10 rounded-full" />
      </div>
    </div>
  </div>
);

export const MockCode = ({ className }: { className?: string }) => (
  <div className={cn("w-full h-full bg-[#0c0c0c] rounded-xl border border-white/5 p-6 font-mono text-[11px] leading-relaxed", className)}>
    <div className="flex gap-4 mb-6">
      <div className="w-24 h-4 rounded bg-white/5" />
      <div className="w-16 h-4 rounded bg-white/5" />
    </div>
    <div className="space-y-2">
      <div className="flex gap-2"><span className="text-blue-400">const</span> <span className="text-purple-400">deploy</span> = <span className="text-emerald-400">async</span> () ={">"} {"{"}</div>
      <div className="flex gap-2 pl-4"><span className="text-blue-400">await</span> <span className="text-zinc-400">Integral.</span><span className="text-yellow-400">provision</span>({"{"}</div>
      <div className="flex gap-2 pl-8"><span className="text-orange-400">cluster:</span> <span className="text-emerald-400">"edge-v2"</span>,</div>
      <div className="flex gap-2 pl-8"><span className="text-orange-400">scaling:</span> <span className="text-blue-400">true</span></div>
      <div className="flex gap-2 pl-4">{"})"};</div>
      <div className="flex gap-2 pl-4"><span className="text-purple-400">return</span> <span className="text-zinc-400">status;</span></div>
      <div className="flex gap-2">{"}"}</div>
    </div>
  </div>
);
