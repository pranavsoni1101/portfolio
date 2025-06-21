"use client";

import React from "react";
import { FloatingDockNav } from "./floatingDock";
import { Hero } from "./hero";
import { Experience } from "./experience";
import { Contact } from "./contact";

const Home = () => {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <FloatingDockNav />
    </>
  );
};

export default Home;
