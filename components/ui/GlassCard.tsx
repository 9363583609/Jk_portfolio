"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
};

export default function GlassCard({ children, className, tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    const rotateX = tilt ? (0.5 - py / 100) * 8 : 0;
    const rotateY = tilt ? (px / 100 - 0.5) * 8 : 0;

    setStyle({
      "--spot-x": `${px}%`,
      "--spot-y": `${py}%`,
      transform: tilt
        ? `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
        : undefined,
    } as React.CSSProperties);
  };

  const reset = () => setStyle({ transform: "perspective(700px) rotateX(0) rotateY(0) translateY(0)" });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      data-cursor-hover
      style={style}
      className={cn(
        "group relative overflow-hidden rounded-2xl glass p-6 transition-transform duration-300 ease-out will-change-transform",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in srgb, var(--color-cyan-400) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
