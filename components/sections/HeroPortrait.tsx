"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function HeroPortrait({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 180, damping: 18 });
  const glareX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(my, [0, 1], ["0%", "100%"]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="mx-auto w-3/4 max-w-sm [perspective:1200px]">
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        data-cursor-hover
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-strong border-gradient relative aspect-square overflow-hidden rounded-[2rem] p-2 shadow-2xl"
      >
        {/* reveal: image wipes in on page load, with a scanning line sweep */}
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative h-full w-full overflow-hidden rounded-[1.5rem]"
          style={{ transform: "translateZ(0px)" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 60vw, 320px"
            className="object-cover"
            priority
          />

          {!reduceMotion && (
            <motion.div
              initial={{ y: "-10%", opacity: 0.9 }}
              animate={{ y: "120%", opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="pointer-events-none absolute inset-x-0 h-1/4 bg-gradient-to-b from-transparent via-[var(--color-cyan-400)]/40 to-transparent"
              aria-hidden="true"
            />
          )}
        </motion.div>

        {/* pointer-tracked glare for the 3D tilt */}
        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[1.5rem]"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) =>
                  `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.18), transparent 55%)`
              ),
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
