"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { educationTimeline, achievements, experience } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="EDUCATION" title="The path so far." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-blue-500)] via-[var(--color-violet-500)] to-[var(--color-cyan-400)]" />
            <ol className="space-y-10">
              {educationTimeline.map((entry, i) => (
                <motion.li
                  key={entry.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--bg)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-cyan-400)]" />
                  </span>
                  <GlassCard tilt={false}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-[var(--font-mono)] text-xs text-[var(--color-cyan-400)]">{entry.period}</p>
                      <span className="rounded-full bg-[var(--glass)] px-3 py-1 text-xs text-[var(--fg-muted)]">
                        {entry.detail}
                      </span>
                    </div>
                    <h3 className="mt-2 font-[var(--font-display)] text-lg font-semibold">{entry.degree}</h3>
                    <p className="text-sm text-[var(--fg-muted)]">{entry.institution}</p>
                  </GlassCard>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard tilt={false}>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Briefcase size={16} className="text-[var(--color-cyan-400)]" /> Experience
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--fg-muted)]">
                  {experience.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassCard tilt={false}>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Trophy size={16} className="text-[var(--color-cyan-400)]" /> Achievements
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--fg-muted)]">
                  {achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard tilt={false}>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <GraduationCap size={16} className="text-[var(--color-cyan-400)]" /> Currently
                </div>
                <p className="mt-3 text-sm text-[var(--fg-muted)]">
                  Final-year B.Tech IT student, applying coursework to real AI + backend projects.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
