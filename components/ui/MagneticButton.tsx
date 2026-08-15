"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  as = "button",
  href,
  target,
  rel,
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none";
  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-r from-[var(--color-blue-500)] via-[var(--color-violet-500)] to-[var(--color-cyan-400)] shadow-[0_0_30px_-8px_var(--color-violet-500)]"
      : "glass text-[var(--fg)] hover:border-[var(--color-cyan-400)]";

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      data-cursor-hover
      className="inline-block"
    >
      <span className={cn(base, styles, className)}>{children}</span>
    </motion.div>
  );

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} aria-label={ariaLabel} onClick={onClick}>
        {Content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel}>
      {Content}
    </button>
  );
}
