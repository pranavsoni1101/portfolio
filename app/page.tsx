"use client"

import React from 'react';
import { FloatingDockNav } from './floatingDock';
import { Hero } from './hero';

const Home = () => {
  return(
    <>
      <Hero />
      <FloatingDockNav />
    </>
  )
}

export default Home;