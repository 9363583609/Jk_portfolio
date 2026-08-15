"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import NeuralBackground from "@/components/NeuralBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import RecruiterMode from "@/components/sections/RecruiterMode";
import Contact from "@/components/sections/Contact";

export default function PageShell() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <div
        aria-hidden={loading}
        className="transition-opacity duration-700"
        style={{ opacity: loading ? 0 : 1 }}
      >
        <NeuralBackground />
        <CustomCursor />
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <RecruiterMode />
          <Contact />
        </main>

        <Footer />
        <Chatbot />
      </div>
    </>
  );
}
