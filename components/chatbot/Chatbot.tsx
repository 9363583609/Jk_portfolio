"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Minus } from "lucide-react";
import AssistantIcon from "@/components/chatbot/AssistantIcon";
import { chatbotKnowledge, suggestedQuestions, fallbackAnswer } from "@/data/chatbotKnowledge";
import { matchKnowledge } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const INTRO: Message = {
  id: "intro",
  role: "bot",
  text: "Hey, I'm Pickachu \u26a1 Ask me anything about Jayakumar — his education, skills, projects, or how to reach him.",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const respond = (question: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    window.setTimeout(() => {
      const answer = matchKnowledge(question, chatbotKnowledge) ?? fallbackAnswer;
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "bot", text: answer }]);
      setTyping(false);
    }, 500 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    respond(input.trim());
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`glass-strong mb-4 flex w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl shadow-2xl transition-[height] ${
              minimized ? "h-16" : "h-[28rem]"
            }`}
            role="dialog"
            aria-label="Pickachu portfolio assistant"
          >
            <div className="flex items-center justify-between border-b border-[var(--glass-border)] px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8">
                  <AssistantIcon className="h-full w-full" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Pickachu</p>
                  <p className="text-[10px] leading-tight text-[var(--fg-muted)]">Portfolio Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label={minimized ? "Maximize chat" : "Minimize chat"}
                  onClick={() => setMinimized((v) => !v)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[var(--glass)]"
                >
                  <Minus size={15} />
                </button>
                <button
                  type="button"
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[var(--glass)]"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "ml-auto bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-violet-500)] text-white"
                          : "glass"
                      }`}
                    >
                      {m.text}
                    </div>
                  ))}
                  {typing && (
                    <div className="glass flex w-14 items-center gap-1 rounded-2xl px-3.5 py-3">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--fg-muted)] [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--fg-muted)]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--fg-muted)] [animation-delay:0.2s]" />
                    </div>
                  )}

                  {messages.length === 1 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => respond(q)}
                          className="glass rounded-full px-3 py-1.5 text-xs text-[var(--fg-muted)] hover:text-[var(--fg)]"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-[var(--glass-border)] p-3">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Jayakumar..."
                    aria-label="Type your question"
                    className="flex-1 rounded-full bg-[var(--glass)] px-4 py-2 text-sm outline-none placeholder:text-[var(--fg-muted)] focus-visible:outline-2 focus-visible:outline-[var(--color-cyan-400)]"
                  />
                  <button
                    type="submit"
                    aria-label="Send message"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-blue-500)] to-[var(--color-cyan-400)] text-white"
                  >
                    <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setMinimized(false);
        }}
        data-cursor-hover
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close Pickachu chat" : "Open Pickachu chat"}
        className="glass-strong flex h-16 w-16 items-center justify-center rounded-full shadow-2xl"
      >
        <div className="h-11 w-11">
          <AssistantIcon className="h-full w-full" />
        </div>
      </motion.button>
    </div>
  );
}
