"use client";

import React from "react";
import { FloatingDockNav } from "./floatingDock";
import { Hero } from "./hero";
import { Experience } from "./experience";

const Home = () => {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      {/* <section>

      </section> */}
      <FloatingDockNav />
    </>
  );
};

export default Home;
