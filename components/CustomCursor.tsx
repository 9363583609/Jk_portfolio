"use client";

import { useEffect, useRef } from "react";

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: "blue" | "violet" | "cyan";
};

const COLORS: Record<Spark["hue"], string> = {
  blue: "76,111,255",
  violet: "139,92,246",
  cyan: "34,211,238",
};
const HUES: Spark["hue"][] = ["blue", "violet", "cyan"];

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    let sparks: Spark[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let hovering = false;
    let raf = 0;

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = hovering ? 0.6 + Math.random() * 1.4 : 0.3 + Math.random() * 0.8;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 24 + Math.random() * 20,
          size: hovering ? 1.5 + Math.random() * 2 : 1 + Math.random() * 1.6,
          hue: HUES[Math.floor(Math.random() * HUES.length)] ?? "cyan",
        });
      }
      if (sparks.length > 160) sparks = sparks.slice(sparks.length - 160);
    };

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (coreRef.current) {
        coreRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      if (!reduceMotion) spawn(mouseX, mouseY, hovering ? 2 : 1);
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement;
      hovering = Boolean(
        target.closest('a, button, [data-cursor-hover], input, textarea, [role="button"]')
      );
      coreRef.current?.classList.toggle("cursor-core-active", hovering);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        if (!s) continue;
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.96;
        s.vy *= 0.96;
        s.life += 1;

        const t = s.life / s.maxLife;
        if (t >= 1) {
          sparks.splice(i, 1);
          continue;
        }

        const alpha = (1 - t) * 0.85;
        const radius = s.size * (1 - t * 0.4);
        const rgb = COLORS[s.hue];

        ctx.beginPath();
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.shadowColor = `rgba(${rgb},${alpha})`;
        ctx.shadowBlur = 6;
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-spark-canvas" aria-hidden="true" />
      <div ref={coreRef} className="cursor-core" aria-hidden="true" />
    </>
  );
}
