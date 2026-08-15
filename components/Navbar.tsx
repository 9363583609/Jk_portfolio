"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/config";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : "glass"
        }`}
      >
        <a href="#home" data-cursor-hover className="font-[var(--font-display)] text-lg font-bold tracking-tight">
          JM<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="rounded-full px-4 py-2 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <MagneticButton as="a" href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" variant="ghost">
            <Download size={15} /> Resume
          </MagneticButton>
          <MagneticButton as="a" href="#contact" variant="primary">
            Hire Me
          </MagneticButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            data-cursor-hover
            className="glass flex h-10 w-10 items-center justify-center rounded-full"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass-strong absolute inset-x-4 top-20 z-40 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-[var(--fg)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2 px-2">
              <MagneticButton
                as="a"
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="w-full justify-center"
              >
                <Download size={15} /> Resume
              </MagneticButton>
              <MagneticButton as="a" href="#contact" variant="primary" className="w-full justify-center">
                Hire Me
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
