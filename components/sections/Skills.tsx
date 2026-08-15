"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillCategories, certifications } from "@/data/skills";

const LEVEL_WIDTH: Record<string, string> = {
  Core: "95%",
  Working: "70%",
  Learning: "45%",
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          label="SKILLS"
          title="What I build with."
          description="A backend-first foundation, extending into the AI stack."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <GlassCard className="h-full" tilt={false}>
                <h3 className="font-[var(--font-display)] text-base font-semibold">{cat.label}</h3>
                <ul className="mt-4 space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[var(--fg)]">{skill.name}</span>
                        <span className="font-[var(--font-mono)] text-[10px] text-[var(--fg-muted)]">
                          {skill.level}
                        </span>
                      </div>
                      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-[var(--glass)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: LEVEL_WIDTH[skill.level] ?? "60%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-cyan-400)]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {certifications.map((c) => (
            <span
              key={c}
              className="glass rounded-full px-4 py-2 font-[var(--font-mono)] text-xs text-[var(--fg-muted)]"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
