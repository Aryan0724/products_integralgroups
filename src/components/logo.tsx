"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-black tracking-[-0.05em] text-white leading-none uppercase">
            Integral
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_15px_#3b82f6] transition-all duration-700" />
        </div>
        <span className="text-[10px] font-black tracking-[0.7em] text-white/30 uppercase leading-none mt-2.5 group-hover:text-white transition-colors duration-700">
          Studio
        </span>
      </div>
    </div>
  );
}
