"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroPortrait from "@/components/sections/HeroPortrait";
import { siteConfig } from "@/data/config";

const ThreeAccent = dynamic(() => import("@/components/ThreeAccent"), { ssr: false });

function useTypingEffect(words: readonly string[], speed = 45, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(siteConfig.taglines);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            00_HELLO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            I'm <span className="text-gradient">{siteConfig.name}</span>
            <br />
            {siteConfig.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 h-6 font-[var(--font-mono)] text-sm text-[var(--fg-muted)] sm:text-base"
          >
            {typed}
            <span className="animate-pulse text-[var(--color-cyan-400)]">_</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton as="a" href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" variant="primary">
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton as="a" href="#projects" variant="ghost">
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton as="a" href="#contact" variant="ghost">
              <Mail size={16} /> Hire Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0">
            <ThreeAccent />
          </div>
          <HeroPortrait src={siteConfig.avatarUrl} alt={`Portrait of ${siteConfig.name}`} />
        </motion.div>
      </div>
    </section>
  );
}
