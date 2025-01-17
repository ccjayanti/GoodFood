"use client";
import Lenis from "lenis";

import { useEffect } from "react";

import Hero from "./components/Hero";
import Why from "./components/Why";
import Who from "./components/Who";
import What from "./components/What";
import Connect from "./components/Connect";

export default function Home() {
  //effect to implement smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Hero></Hero>
      <Why></Why>
      <Who></Who>
      <What></What>
      <Connect></Connect>
    </div>
  );
}
