export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "brew-and-bean",
    title: "Brew & Bean — Coffee Shop AI Assistant",
    description:
      "An intelligent AI assistant for a coffee shop powered by MCP servers and AI agents with integrated tools. Designed to provide customer support, recommendations, and workflow automation while demonstrating practical use of agent-based architectures.",
    tags: ["Agentic AI", "MCP", "LLMs", "Automation"],
    featured: true,
  },
  {
    slug: "autonomous-coding-agent",
    title: "Autonomous Coding & Research Agent",
    description:
      "An AI agent capable of researching requirements, generating code, reviewing its own implementation, identifying improvements, and enhancing the final solution through iterative refinement. Showcases autonomous software development workflows using modern AI techniques.",
    tags: ["Agentic AI", "Self-Review Loops", "Automation"],
    featured: true,
  },
];

export const earlierProjects: Project[] = [
  {
    slug: "we-vote",
    title: "WeVote — Online Voting System",
    description:
      "An online voting system built with HTML, CSS, JavaScript, and PHP, enabling secure digital participation in place of manual ballots.",
    tags: ["PHP", "JavaScript", "MySQL"],
    featured: false,
  },
  {
    slug: "college-website",
    title: "College Website",
    description:
      "Designed and built the website for Adhi College of Engineering and Technology, focused on clean navigation and a polished look.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    slug: "bus-ticket-booking",
    title: "Bus Ticket Booking System",
    description:
      "An online bus ticket booking platform with seat reservation, built to handle real-world scheduling and availability logic.",
    tags: ["PHP", "MySQL", "JavaScript"],
    featured: false,
  },
];
