"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Linkedin, Download, Mail, Github, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/config";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the email is still visible/selectable on the page.
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="05"
          label="CONTACT"
          title="Let's build something."
          description="Open to AI engineering and backend roles, freelance work, and interesting collaborations."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <GlassCard className="border-gradient" tilt={false}>
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="font-[var(--font-mono)] text-xs text-[var(--fg-muted)]">EMAIL</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  data-cursor-hover
                  className="flex items-center gap-2 text-base font-medium sm:text-lg"
                  aria-label="Copy email address"
                >
                  {siteConfig.email}
                  {copied ? <Check size={16} className="text-[var(--color-cyan-400)]" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <MagneticButton as="a" href={`mailto:${siteConfig.email}`} variant="primary">
                  <Mail size={16} /> Hire Me
                </MagneticButton>
                <MagneticButton as="a" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" variant="ghost">
                  <Linkedin size={16} /> Open LinkedIn
                </MagneticButton>
                <MagneticButton as="a" href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" variant="ghost">
                  <Download size={16} /> Download Resume
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-4 border-t border-[var(--glass-border)] pt-5 text-sm text-[var(--fg-muted)]">
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" data-cursor-hover className="flex items-center gap-1.5 hover:text-[var(--fg)]">
                  <Github size={15} /> GitHub
                </a>
                <a href={siteConfig.links.leetcode} target="_blank" rel="noopener noreferrer" data-cursor-hover className="flex items-center gap-1.5 hover:text-[var(--fg)]">
                  <Code2 size={15} /> LeetCode
                </a>
                <a href={siteConfig.links.codechef} target="_blank" rel="noopener noreferrer" data-cursor-hover className="flex items-center gap-1.5 hover:text-[var(--fg)]">
                  <Code2 size={15} /> CodeChef
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
