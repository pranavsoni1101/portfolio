"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Contact() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Get in Touch
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Have a project in mind, a question, or just want to say hi? Feel free
          to reach out! I'm always open to new opportunities and collaborations.
        </p>
        <input
          type="text"
          placeholder="hi@pranav"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-2"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
