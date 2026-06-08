export const AVATAR_TOPICS = {
  intro:
    "Hello! I'm Vaishalee Singh, a Software Developer skilled in building scalable full-stack applications using React.js, Next.js, Node.js, FastAPI, and modern web technologies. I'm strong in frontend architecture, API integration, AI-powered systems, state management, and developing real-world applications. I'm passionate about building impactful products and solving complex problems through technology.",
  skills:
    "My technical skills include JavaScript, TypeScript, Java, C++, and Python. On the frontend, I work with React.js, Next.js, Tailwind CSS, Redux, and Zustand. For backend development, I use Node.js, Express.js, FastAPI, and REST APIs with MongoDB and MySQL. I also work with AI and automation tools like AutoGen, Gemini APIs, MCP Tools, and OpenAI APIs. I'm proficient with Git, Vercel, Render, Jira, Mixpanel, Strapi, and GitHub Copilot, and I apply concepts like Data Structures and Algorithms, JWT Authentication, System Design, and Agile Methodology.",
  experience:
    "I'm currently a Software Developer at Take U Forward since June 2026, where I build scalable, high-performance web applications with React.js, Next.js, and TypeScript, develop reusable UI components, and work on API integrations and performance optimization. Before that, from November 2025 to May 2026, I was a Software Developer at Rapid Innovation, RUH AI, where I built full-stack applications with React, Next.js, and FastAPI, integrated Strapi CMS and Mixpanel analytics, and delivered production-ready features in Agile teams.",
  projects:
    "I've built several impactful projects. ModuMentor is a multi-agent AI automation system using AutoGen and Gemini 1.5 with MCP tools and FastAPI. VisionForge is a full-stack AI/ML platform with multi-agent GenAI pipelines, evaluated RAG, sklearn model training with real metrics, and computer vision features. NeuroHR AI is an enterprise HRMS with Groq-first LLM pipelines for KB-grounded JD generation, multi-step resume screening, AI voice interviews, and a 12-step hiring workflow deployed on Netlify and Render. TaskFlow is a full-stack team task management platform with Kanban boards, JWT authentication, and MongoDB. Digital Recruiter is an AI-powered recruitment management system built with React, TypeScript, and Material UI. Each project demonstrates my ability to ship production-ready, scalable software.",
} as const;

export type AvatarTopic = keyof typeof AVATAR_TOPICS;

export const AVATAR_TOPIC_LABELS: { id: AvatarTopic; label: string }[] = [
  { id: "intro", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
