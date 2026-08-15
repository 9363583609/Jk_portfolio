"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import AssistantIcon from "@/components/chatbot/AssistantIcon";

const MESSAGES = [
  "Initializing AI Systems...",
  "Loading Neural Networks...",
  "Preparing Portfolio...",
  "Almost Ready...",
];

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);
  const counter = useRef({ value: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (mascotRef.current && !reduceMotion) {
      gsap.to(mascotRef.current, {
        y: -14,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      gsap.to(mascotRef.current, {
        rotate: 4,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (rootRef.current) {
          gsap.to(rootRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: onDone,
          });
        } else {
          onDone();
        }
      },
    });

    tl.to(counter.current, {
      value: 100,
      duration: reduceMotion ? 0.3 : 2.4,
      ease: "power1.inOut",
      onUpdate: () => {
        const v = Math.round(counter.current.value);
        setProgress(v);
        const idx = Math.min(MESSAGES.length - 1, Math.floor((v / 100) * MESSAGES.length));
        setMessageIndex(idx);
      },
    });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[var(--bg)]"
      role="status"
      aria-live="polite"
    >
      <div ref={mascotRef} className="h-28 w-28 sm:h-36 sm:w-36">
        <AssistantIcon className="h-full w-full" />
      </div>

      <p className="mt-6 font-[var(--font-mono)] text-sm text-[var(--fg-muted)]">{MESSAGES[messageIndex] ?? MESSAGES[0]}</p>

      <div className="mt-4 h-1 w-56 overflow-hidden rounded-full bg-[var(--glass)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-blue-500)] via-[var(--color-violet-500)] to-[var(--color-cyan-400)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="mt-2 font-[var(--font-mono)] text-xs text-[var(--fg-muted)]">{progress}%</span>
    </div>
  );
}
