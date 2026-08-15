import { siteConfig } from "@/data/config";

export default function Footer() {
  return (
    <footer className="relative px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[var(--glass-border)] pt-6 text-xs text-[var(--fg-muted)] sm:flex-row">
        <p className="font-[var(--font-mono)]">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
        <p className="font-[var(--font-mono)]">Designed for people who build real AI systems.</p>
      </div>
    </footer>
  );
}
