import { Bot } from "lucide-react";

/**
 * Original icon-only mark for the portfolio assistant — deliberately not a
 * character/mascot (no copyrighted references), just a clean gradient badge.
 */
export default function AssistantIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-blue-500)] via-[var(--color-violet-500)] to-[var(--color-cyan-400)] ${className}`}
    >
      <Bot className="h-[55%] w-[55%] text-white" strokeWidth={2.25} />
    </div>
  );
}
