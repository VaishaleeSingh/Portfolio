export const navLinks = [
  { href: "#home", icon: "fa-home", label: "Home" },
  { href: "#about", icon: "fa-user", label: "About" },
  { href: "#education", icon: "fa-graduation-cap", label: "Education & Certs" },
  { href: "#experience", icon: "fa-briefcase", label: "Experience" },
  { href: "#skills", icon: "fa-cogs", label: "Skills" },
  { href: "#projects", icon: "fa-code", label: "Projects" },
  { href: "#additional-info", icon: "fa-info-circle", label: "Additional Info" },
  { href: "#contact", icon: "fa-envelope", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "AI Engineer and full-stack developer specializing in production-grade Generative AI systems — multi-agent platforms, RAG pipelines, and LLM applications.",
  "I design and ship end-to-end intelligent systems with Python, FastAPI, LangChain, LangGraph, and agentic AI frameworks, backed by vector databases, semantic search, and event-driven infrastructure (Kafka, Redis).",
  "Equally strong across the modern web stack (React.js, Next.js, Node.js), and comfortable owning features from architecture through cloud deployment and observability in Agile teams.",
];

export const education = [
  {
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Computer Science and Engineering",
    school: "Amity University Uttar Pradesh",
    detail: "2022 – 2026 | CGPA: 8.26/10",
    extra:
      "Relevant Coursework: Data Structures & Algorithms, Web Development, AI/ML, Database Systems, Object-Oriented Programming, Software Engineering, Computer Networks, Operating Systems",
  },
  {
    title: "Senior Secondary (XII)",
    subtitle: "Science",
    school: "Stella Maris Convent School, Sultanpur, UP",
    detail: "CBSE Board | 89.4%",
  },
  {
    title: "Secondary (X)",
    subtitle: "CBSE",
    school: "Stella Maris Convent School, Sultanpur, UP",
    detail: "CBSE Board | 92%",
  },
];

export const certifications = [
  {
    title: "Frontend Developer Certification",
    subtitle: "Micro1 • 2026",
    description:
      "Professional certification validating expertise in frontend engineering, focusing on React.js, Next.js, TypeScript, state management, and modern responsive design best practices.",
  },
];

export const experiences = [
  {
    role: "Software Developer Intern",
    company: "Take U Forward",
    period: "Jun 2026 – Present",
    bullets: [
      "Build and maintain production-scale apps in React.js, Next.js, TypeScript, and Node.js on a modular, component-driven architecture.",
      "Integrate LLM-powered features into product surfaces — prompt-engineered flows and API-backed AI assistance — to enhance functionality.",
      "Own complex Git workflows end to end — feature branching, interactive rebasing, cherry-picking, conflict resolution, and release syncing.",
      "Improve performance through optimized API integrations, reusable component design, and targeted production debugging in Linux environments.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Rapid Innovation (RUH AI)",
    period: "Nov 2025 – May 2026",
    bullets: [
      "Built production Generative AI systems — RAG pipelines and multi-agent platforms — using Python, FastAPI, LangChain, and LangGraph to orchestrate autonomous agent workflows.",
      "Engineered semantic search over vector databases with tuned retrieval, chunking, and embedding strategies for accurate, low-latency LLM responses.",
      "Designed agentic AI frameworks and applied prompt engineering to shape agent behavior, tool selection, and structured outputs across multi-step tasks.",
      "Deployed services with Docker on GCP, using Kafka for event-driven messaging and Redis for caching and low-latency state.",
      "Instrumented systems with SigNoz for distributed tracing, metrics, and production observability.",
      "Delivered full-stack features with React.js, Next.js, REST APIs, Strapi CMS, Redux/Zustand, and Mixpanel analytics.",
    ],
  },
];

export const skillCategories = [
  {
    icon: "fa-code",
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    icon: "fa-brain",
    title: "AI / GenAI",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Multi-Agent Systems",
      "Agentic AI",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "MCP",
      "Semantic Search",
      "Vector Retrieval",
      "Vector Databases",
      "OpenAI APIs",
      "Gemini 1.5",
      "Llama 3.3 (Groq)",
      "NLP",
      "scikit-learn",
      "Model Evaluation",
    ],
  },
  {
    icon: "fa-server",
    title: "Backend",
    skills: ["FastAPI", "Node.js", "REST APIs", "Express.js", "JWT Auth", "CORS", "WebSockets", "Microservices", "Kafka", "Redis"],
  },
  {
    icon: "fa-laptop-code",
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Zustand", "React Query", "Tailwind CSS", "Material UI", "HTML5", "CSS3"],
  },
  {
    icon: "fa-database",
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    icon: "fa-tools",
    title: "DevOps & Tools",
    skills: ["Docker", "GCP", "CI/CD", "Git", "GitHub", "Linux", "Bash", "SigNoz", "Postman", "Jira", "Mixpanel", "Strapi", "Vercel", "Render", "Netlify"],
  },
  {
    icon: "fa-lightbulb",
    title: "Foundations",
    skills: ["DSA", "OOP", "System Design", "API Design", "Agile / Scrum", "Performance Optimization"],
  },
];

export type ProjectLink = { label: string; href: string; icon: string };

export const projects = [
  {
    title: "ModuMentor: Multi-Agent AI Automation System",
    tech: "AutoGen • Gemini 1.5 • FastAPI • Python • MCP • React.js",
    bullets: [
      "Built an agentic system with Gemini 1.5 as the reasoning engine, autonomously interpreting requests and selecting actions.",
      "Integrated MCP tools — Web Search, Dictionary, Gmail, Google Sheets, Weather — behind FastAPI services orchestrating multi-agent communication.",
      "Designed tool-calling architecture enabling agents to execute multi-step tasks with contextual understanding and modular agent workflows.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://modumentor-client.netlify.app/", icon: "fa-globe" }],
      [
        { label: "Frontend", href: "https://github.com/VaishaleeSingh/ModuMentorClient", icon: "fab fa-github" },
        { label: "Agent", href: "https://github.com/VaishaleeSingh/ModumentorAgent-", icon: "fab fa-github" },
        { label: "Backend", href: "https://github.com/VaishaleeSingh/ModuMentorServer", icon: "fab fa-github" },
      ],
    ] as ProjectLink[][],
  },
  {
    title: "VisionForge: Full-Stack AI/ML Platform",
    tech: "Next.js • React.js • TypeScript • Python • scikit-learn • MongoDB • Gemini • Groq • Hugging Face BGE • fal.ai • NextAuth",
    bullets: [
      "Built a full-stack AI/ML platform integrating multi-agent LLM workflows, RAG document Q&A, image generation, and executable model training across FinTech, security, manufacturing, and compliance use cases.",
      "Designed multi-agent orchestration pipelines (Research, Content, Analysis, 9-step ML Planning) with SSE streaming, step-level persistence, and Gemini/Groq fallback for rate limits.",
      "Engineered RAG pipeline: PDF upload → chunking → embeddings (Gemini / Hugging Face BGE) → vector retrieval → cited chat, with precision@5 retrieval evaluation for deployment readiness.",
      "Implemented real sklearn training via Node→Python subprocess — Random Forest for tabular data, TF-IDF + Logistic Regression for NLP — persisting accuracy, F1, and CV scores as joblib artifacts.",
      "Delivered six business ML presets (churn, loan default, fraud, emissions, QA defect, phishing) with CSV validation, dataset profiling, and AI-generated stakeholder summaries.",
      "Built GenAI product features — streaming text studio, fal.ai image generation, resume–JD matching screener — with NextAuth user auth and MongoDB persistence.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://visionforgevs.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/Vision-Forge", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "NeuroHR AI: Enterprise HRMS & AI Recruitment Platform",
    tech: "Next.js 14 • TypeScript • Express.js • FastAPI • MongoDB • Llama 3.3 70B • scikit-learn • Google OAuth • Render",
    bullets: [
      "Architected a Groq-first AI/ML microservice in FastAPI exposing 20+ APIs for resume screening, JD generation, AI interviews, and candidate evaluation.",
      "Engineered LLM orchestration on Llama 3.3 70B with structured JSON outputs, token budgeting, retry handling, and Gemini Flash fallback.",
      "Built RAG knowledge-base pipelines with vector retrieval, plus scikit-learn models (Random Forest, Gradient Boosting, MLP) tuned via GridSearchCV.",
      "Implemented harness-style resume screening SOPs returning dimension scores, skill gaps, and human-escalation flags with auto-shortlist at ≥80% JD match.",
      "Designed 5-dimension weighted interview evaluation with composite hiring score (80% resume + 20% interview) and per-candidate question fallbacks.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://neurohrai.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/NeuroHr", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "TaskFlow: Team Task Management Platform",
    tech: "React.js • Redux • Node.js • Express.js • MongoDB • JWT • CORS",
    bullets: [
      "Built a responsive React.js frontend with drag-and-drop Kanban boards and Redux-managed global state for real-time task lifecycle updates.",
      "Designed RESTful APIs in Node.js/Express.js for full CRUD on tasks, boards, and users, with modular controllers and middleware.",
      "Modeled tasks, boards, and users in MongoDB with indexed schemas and relational references for efficient queries.",
      "Implemented JWT-based authentication, bcrypt password hashing, CORS-secured endpoints, and role-based access control for multi-user collaboration.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://tech-task-management-fe.vercel.app/", icon: "fa-globe" }],
      [
        { label: "Frontend", href: "https://github.com/VaishaleeSingh/tech_task_management_fe", icon: "fab fa-github" },
        { label: "Backend", href: "https://github.com/VaishaleeSingh/tech_task_management_be", icon: "fab fa-github" },
      ],
    ] as ProjectLink[][],
  },
  {
    title: "Digital Recruiter: AI-Powered Recruitment Management System",
    tech: "React.js • TypeScript • Material UI • Node.js • Express.js • MongoDB • JWT",
    bullets: [
      "Built a TypeScript + React.js interface with Material UI for candidate tracking, resume management, interview scheduling, and analytics dashboards.",
      "Developed REST APIs in Node.js/Express.js to manage candidates, job postings, and interview workflows with a clean, layered architecture.",
      "Persisted candidate profiles, applications, and scheduling data in MongoDB with structured schemas and query optimization.",
      "Secured the platform with JWT authentication and role-based access control across recruiter and admin roles.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://frontend-dr-od6c.onrender.com/", icon: "fa-globe" }],
      [
        { label: "Frontend", href: "https://github.com/VaishaleeSingh/frontend_DR", icon: "fab fa-github" },
        { label: "Backend", href: "https://github.com/VaishaleeSingh/backend_DR", icon: "fab fa-github" },
      ],
    ] as ProjectLink[][],
  },
  {
    title: "Hunting Coder: Full-Stack Blog Platform",
    tech: "Next.js • React.js • TypeScript • Redux Toolkit • Tailwind CSS • Next.js API Routes",
    bullets: [
      "Built a full-stack Next.js blog with dynamic markdown rendering, advanced full-text search, and category filtering.",
      "Leveraged SSG and dynamic routing for sub-millisecond page transitions and SEO-optimized metadata.",
      "Implemented file-based JSON storage via Next.js API routes for user feedback submission and post read-time estimates.",
      "Managed global UI state with Redux Toolkit covering dark/light mode, active filters, and theme persistence.",
      "Designed a utility-first Tailwind CSS layout with smooth scroll-triggered micro-animations.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://hunting-coders.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/Hunting-Coders-", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "Weather Forecasting Application",
    tech: "JavaScript (ES6+) • HTML5 • CSS3 • OpenWeather API • Geolocation API • Chart.js",
    bullets: [
      "Built a real-time weather app integrating OpenWeather API with current conditions, hourly metrics, and 7-day forecasts.",
      "Visualized weather trends with Chart.js — temperature curves, humidity bars, and wind charts rendered dynamically.",
      "Auto-detected user location via the Geolocation API for immediate local forecast loading on page open.",
      "Managed async API calls, loading states, and error boundaries in vanilla ES6+ JavaScript without any framework.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://vaishaleesingh.github.io/WeatherForecast/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/WeatherForecast", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "TextForge: Text Utility & Analyzer Web Application",
    tech: "React.js • Bootstrap 5 • Intersection Observer API • Web File API • LocalStorage",
    bullets: [
      "Built a real-time text analysis tool in React.js delivering instant word/character counts, reading-speed estimates, and word-frequency breakdowns.",
      "Implemented 7+ text manipulation features — capitalization, regex find-and-replace, whitespace cleaning, and more — with theme preferences persisted via LocalStorage.",
      "Integrated the Web File API for direct .txt file upload, feeding content into the analysis pipeline without page reload.",
      "Wired scroll-triggered entrance animations via the Intersection Observer API for smooth, high-polish UI transitions.",
      "Built a responsive layout with Bootstrap 5 grid and Flexbox, adapting cleanly across desktop and mobile viewports.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://dreamy-kulfi-20d862.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/TextForge.git", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "NewsMonkey: Real-Time News Aggregation Platform",
    tech: "React.js • NewsAPI • GNews API • React Router • Bootstrap 5",
    bullets: [
      "Aggregated real-time articles from NewsAPI and GNews API across 7+ categories with client-side filtering and search.",
      "Built infinite-scroll pagination using the Intersection Observer API, fetching the next page automatically on scroll.",
      "Optimized rendering with useCallback and useMemo to eliminate unnecessary re-renders across category and search state changes.",
      "Styled with CSS3 glassmorphism, backdrop filters, and a dark/light mode switcher for a polished UI.",
      "Implemented multi-route SPA navigation with React Router for seamless category switching without page reloads.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://news-monkey1.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/News-Monkey", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
];

export const additionalInfo = [
  { icon: "fa-users", title: "Soft Skills", content: "Problem-Solving, Team Collaboration, Agile Methodology, Communication, Adaptability, Attention to Detail" },
  { icon: "fa-language", title: "Languages", content: "English (Fluent), Hindi (Native)" },
  { icon: "fa-tasks", title: "Work Methodology", content: "Agile/Scrum, Version Control (Git), Code Reviews, CI/CD Practices" },
  { icon: "fa-heart", title: "Interests", content: "Frontend Architecture, UI/UX Design, Open-source Contributions, AI/ML Research, Emerging Web Technologies" },
  { icon: "fa-bullseye", title: "Professional Focus", content: "Building Scalable Web Applications, Performance Optimization, User Experience Enhancement" },
];

export const contactLinks = [
  { href: "mailto:vaishalisinghsln5@gmail.com", icon: "fa-envelope", label: "vaishalisinghsln5@gmail.com" },
  { href: "tel:+916394531994", icon: "fa-phone", label: "+91-6394531994" },
  { href: "https://www.linkedin.com/in/vaishalee-singh-934847254", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "https://github.com/VaishaleeSingh", icon: "fab fa-github", label: "GitHub" },
];
