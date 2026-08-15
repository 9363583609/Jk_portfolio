export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
};

// Simple local knowledge base — no external API key required.
// Add new entries here any time; the UI never needs to change.
export const chatbotKnowledge: KnowledgeEntry[] = [
  {
    id: "who",
    keywords: ["who", "jayakumar", "about him", "introduce"],
    answer:
      "Jayakumar M is an AI Engineer & Backend Developer who builds LLM-powered apps, RAG pipelines, and agentic AI workflows on top of scalable Python backends.",
  },
  {
    id: "education",
    keywords: ["education", "college", "degree", "study", "cgpa", "school"],
    answer:
      "He's pursuing a B.Tech in Information Technology at Adhi College of Engineering and Technology (2022–2026, CGPA 8.9), after SSLC (96%) and HSC (81%).",
  },
  {
    id: "skills",
    keywords: ["skill", "tech", "stack", "language", "know", "python", "java"],
    answer:
      "Core strengths are Python, Java, C, MySQL, and web fundamentals — with growing hands-on work in LLMs, prompt engineering, RAG, and agentic frameworks like LangChain/LangGraph.",
  },
  {
    id: "projects",
    keywords: ["project", "built", "portfolio", "work sample"],
    answer:
      "Two flagship builds: 'Brew & Bean' — an MCP-powered coffee shop AI assistant, and an Autonomous Coding & Research Agent that reviews and refines its own output. He's also built a voting system, a college website, and a bus ticket booking platform.",
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download"],
    answer: "You can grab his resume using the Download Resume button in the navbar or Contact section.",
  },
  {
    id: "career",
    keywords: ["hire", "career", "job", "opportunity", "internship", "looking for"],
    answer:
      "He's focused on AI engineering and backend roles — building production LLM systems, RAG pipelines, and scalable APIs. Reach out via the Contact section if that matches what you're hiring for.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "linkedin", "reach"],
    answer:
      "Best ways to connect: email at jayakumarm2004@gmail.com or LinkedIn — both linked in the Contact section.",
  },
];

export const suggestedQuestions = [
  "What does Jayakumar work on?",
  "What are his core skills?",
  "Tell me about his projects",
  "How can I contact him?",
];

export const fallbackAnswer =
  "I'm dedicated to answering questions about Jayakumar — his education, skills, projects, and how to reach him. Try asking about one of those!";
