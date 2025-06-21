"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Pranav Soni
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        My two states: deep in code, or deep in sleep. Both are essential for
        writing efficient software.
      </p>
      <a href="#contact">
        <button className="relative mt-3 inline-flex h-12 w-52 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get in Touch
          </span>
        </button>
      </a>
    </div>
  );
}
