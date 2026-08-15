"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Mail, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig, recruiterHighlights } from "@/data/config";

export default function RecruiterMode() {
  return (
    <section id="recruiter" className="relative px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard tilt={false} className="border-gradient">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="eyebrow">RECRUITER_MODE</span>
                <h3 className="mt-2 font-[var(--font-display)] text-2xl font-bold sm:text-3xl">
                  30-second overview
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)] sm:text-base">
                  {recruiterHighlights.overview}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {recruiterHighlights.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[var(--fg)]">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-cyan-400)]" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {recruiterHighlights.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-full bg-[var(--glass)] px-3 py-1 font-[var(--font-mono)] text-xs text-[var(--fg-muted)]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-start gap-3 lg:flex-col">
                <MagneticButton
                  as="a"
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full justify-center"
                >
                  <Download size={16} /> Download Resume
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  className="w-full justify-center"
                >
                  <Linkedin size={16} /> LinkedIn
                </MagneticButton>
                <MagneticButton as="a" href={`mailto:${siteConfig.email}`} variant="ghost" className="w-full justify-center">
                  <Mail size={16} /> Quick Contact
                </MagneticButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
