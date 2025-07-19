"use client";

import React from "react";
import { FloatingDockNav } from "./floatingDock";
import { Hero } from "./hero";
import { Experience } from "./experience";
import { Contact } from "./contact";
import Skills from "./skills";
import { Projects } from "./projects";
import Head from "next/head";

const Home = () => {
  return (
    <>
     <Head>
        <title>Pranav Soni - Full Stack Developer Portfolio | React & Node.js</title>
        <meta name="description" content="Pranav Soni's portfolio showcasing full stack development projects using React, Node.js, and modern web technologies. Available for freelance work in Pune, India." />
        <meta name="keywords" content="Pranav Soni, portfolio, full stack developer, React, Node.js, web development, developer" />
        <link rel="canonical" href="https://pranavsoni.com" />
      </Head>
      <main>
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
      </main>
    </>
  );
};

export default Home;
