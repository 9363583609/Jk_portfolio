"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string; // e.g. "02"
  label: string; // e.g. "ABOUT"
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <span className="eyebrow">{`${index}_${label}`}</span>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--fg-muted)] text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
