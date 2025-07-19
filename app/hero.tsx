"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function Hero() {
  const handleContactClick = (): void => {
    const sectionId = "contact"; // The ID of your contact section

    // 1. Scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // 2. Update the URL in the browser's address bar without causing a full page navigation or 404
    window.history.pushState(null, '', `/${sectionId}`);
  };
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className="md:hidden block text-3xl mb-4 text-left font-bold
             bg-gradient-to-br from-[#e0e0e0] via-[#a0a0a0] to-[#e0e0e0]
             bg-clip-text text-transparent z-20
             "
      >
        Pranav Soni
      </h1>

      <h1
        className="hidden md:block text-2xl  md:text-6xl font-bold
             bg-gradient-to-br from-[#e0e0e0] via-[#a0a0a0] to-[#e0e0e0]
             bg-clip-text text-transparent z-20
             "
      >
        Pranav Soni
      </h1>
      <h2 className="text-center mt-2 text-neutral-300 px-2 relative z-20">
        My two states: deep in code, or deep in sleep. Both are essential for
        writing efficient software.
      </h2>
      <button
        onClick={handleContactClick} // Call your new handler here
        className="relative mt-3 inline-flex h-12 w-52 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        type="button" // Important for buttons not within a form
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Get in Touch
        </span>
      </button>
    </div>
  );
}
