export type Skill = {
  name: string;
  level: "Core" | "Working" | "Learning";
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    label: "AI & Agentic Systems",
    skills: [
      { name: "LLMs", level: "Working" },
      { name: "Prompt Engineering", level: "Working" },
      { name: "RAG", level: "Learning" },
      { name: "LangChain", level: "Learning" },
      { name: "LangGraph", level: "Learning" },
      { name: "Agentic Workflows", level: "Learning" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    skills: [
      { name: "Python", level: "Core" },
      { name: "Java", level: "Core" },
      { name: "C", level: "Core" },
      { name: "API Development", level: "Working" },
      { name: "Workflow Automation", level: "Working" },
    ],
  },
  {
    id: "data",
    label: "Data & Databases",
    skills: [
      { name: "MySQL", level: "Core" },
      { name: "PostgreSQL", level: "Working" },
    ],
  },
  {
    id: "web",
    label: "Web Fundamentals",
    skills: [
      { name: "HTML", level: "Core" },
      { name: "CSS", level: "Core" },
      { name: "JavaScript", level: "Core" },
      { name: "PHP", level: "Working" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Tooling",
    skills: [
      { name: "AWS", level: "Working" },
      { name: "Git & GitHub", level: "Core" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "English", level: "Core" },
      { name: "Tamil", level: "Core" },
    ],
  },
];

export const certifications = [
  "AWS — Naan Mudhalvan",
  "Prompt Engineering — Naan Mudhalvan",
  "Microsoft AI — Naan Mudhalvan",
];
