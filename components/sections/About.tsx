"use client";

import { motion } from "framer-motion";
import { Brain, Server, Workflow, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { siteConfig } from "@/data/config";

const PILLARS = [
  { icon: Brain, label: "AI Engineering", detail: "LLMs, RAG, and agentic frameworks" },
  { icon: Server, label: "Backend Development", detail: "Scalable services in Python" },
  { icon: Workflow, label: "Workflow Orchestration", detail: "Automating multi-step processes" },
  { icon: Sparkles, label: "Continuous Learning", detail: "AWS, Prompt Engineering, Microsoft AI" },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="ABOUT" title="Engineering AI systems that ship." />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            {siteConfig.summary}
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="h-full">
                  <p.icon size={20} className="text-[var(--color-cyan-400)]" />
                  <p className="mt-3 text-sm font-semibold">{p.label}</p>
                  <p className="mt-1 text-xs text-[var(--fg-muted)]">{p.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
