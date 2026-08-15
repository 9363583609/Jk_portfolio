"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { featuredProjects, earlierProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          label="PROJECTS"
          title="Selected work."
          description="Agentic AI builds first, followed by earlier full-stack work."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <span className="eyebrow">FEATURED</span>
                <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--glass-border)] px-3 py-1 font-[var(--font-mono)] text-[11px] text-[var(--color-cyan-400)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">EARLIER_WORK</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {earlierProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <GlassCard className="h-full">
                  <h4 className="font-[var(--font-display)] text-base font-semibold">{project.title}</h4>
                  <p className="mt-2 text-sm text-[var(--fg-muted)]">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-[var(--font-mono)] text-[11px] text-[var(--fg-muted)]">
                        #{tag.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
