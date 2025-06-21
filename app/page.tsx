"use client";

import React from "react";
import { FloatingDockNav } from "./floatingDock";
import { Hero } from "./hero";
import { Experience } from "./experience";
import { Contact } from "./contact";
import Skills from "./skills";
import { Projects } from "./projects";

const Home = () => {
  return (
    <>
      <section id="about">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id= "projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <FloatingDockNav />
    </>
  );
};

export default Home;
