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
  "I am a Software Developer skilled in building scalable full-stack applications using React.js, Next.js, Node.js, FastAPI, and modern web technologies. I have strong expertise in frontend architecture, API integration, AI-powered systems, state management, and developing real-world, production-ready applications.",
  "I am currently a Software Developer at Take U Forward, building scalable, high-performance web applications with React.js, Next.js, and TypeScript. Previously at Rapid Innovation (RUH AI), I developed full-stack solutions, integrated Strapi CMS and Mixpanel analytics, and built modular FastAPI backend services.",
  "I am passionate about building impactful products and solving complex problems through technology — from AI agent workflows with AutoGen and Gemini APIs to performant full-stack platforms used at scale.",
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
    role: "Software Developer",
    company: "Take U Forward",
    period: "June 2026 – Present",
    bullets: [
      "Developing scalable and high-performance web applications using React.js, Next.js, TypeScript, and modern frontend technologies.",
      "Building reusable UI components and improving application architecture for better scalability and maintainability.",
      "Working on feature development, API integrations, debugging, and performance optimization.",
      "Collaborating with engineering teams to deliver production-ready software solutions following best development practices.",
    ],
  },
  {
    role: "Software Developer",
    company: "Rapid Innovation (RUH AI)",
    period: "Nov 2025 – May 2026",
    bullets: [
      "Developed scalable full-stack applications using React.js, Next.js, REST APIs, and FastAPI.",
      "Built responsive user interfaces with optimized state management using Redux and Zustand.",
      "Implemented secure REST API integrations for frontend and backend communication.",
      "Developed backend services and reusable components to improve scalability and maintainability.",
      "Integrated Strapi CMS and Mixpanel analytics for content management and user behavior tracking.",
      "Collaborated with teams in Agile environments to deliver production-ready features.",
    ],
  },
];

export const skillCategories = [
  { icon: "fa-code", title: "Languages", skills: ["JavaScript", "TypeScript", "Java", "C++", "Python"] },
  {
    icon: "fa-laptop-code",
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Zustand", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: "fa-server",
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    icon: "fa-brain",
    title: "AI & Automation",
    skills: [
      "AutoGen",
      "Gemini APIs",
      "Groq",
      "MCP Tools",
      "LLM Orchestration",
      "Multi-Agent Systems",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
      "OpenAI APIs",
      "SSE Streaming",
    ],
  },
  {
    icon: "fa-chart-line",
    title: "ML & Data",
    skills: [
      "scikit-learn",
      "pandas",
      "NLP",
      "TF-IDF",
      "Random Forest",
      "Model Evaluation",
      "Computer Vision APIs",
    ],
  },
  {
    icon: "fa-tools",
    title: "Developer Tools",
    skills: ["Git", "Vercel", "Render", "Jira", "Mixpanel", "Strapi", "GitHub Copilot"],
  },
  {
    icon: "fa-lightbulb",
    title: "Key Concepts",
    skills: ["Data Structures & Algorithms", "OOP", "JWT Authentication", "API Integration", "System Design", "Agile Methodology"],
  },
];

export type ProjectLink = { label: string; href: string; icon: string };

export const projects = [
  {
    title: "ModuMentor: Multi-Agent AI Automation System",
    tech: "AutoGen • Gemini 1.5 • FastAPI • Python • MCP Tools • React.js",
    bullets: [
      "Built an agentic AI system using AutoGen integrated with Gemini 1.5 as the core reasoning engine for intelligent task execution.",
      "Designed and orchestrated autonomous AI agents capable of understanding user requests and dynamically selecting actions.",
      "Integrated 5 MCP tools including Tavily Web Search, Dictionary API, Gmail, Google Sheets, and Weather API for real-time information retrieval and workflow automation.",
      "Implemented tool-calling architecture enabling agents to execute multi-step tasks with contextual understanding.",
      "Developed backend APIs using FastAPI and Python for agent communication, tool orchestration, and workflow management.",
      "Improved system efficiency using asynchronous API handling and modular agent workflows.",
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
    tech: "Next.js • React • TypeScript • Python • scikit-learn • MongoDB • Gemini • Groq • Hugging Face BGE • fal.ai • NextAuth",
    bullets: [
      "Built a full-stack AI/ML platform (Next.js, MongoDB) integrating multi-agent LLM workflows, RAG document Q&A, image generation, and executable model training across FinTech, security, manufacturing, and compliance use cases.",
      "Designed multi-agent orchestration pipelines (Research, Content, Analysis, 9-step ML Planning) with Server-Sent Events streaming, step-level persistence, and Gemini/Groq fallback for rate limits.",
      "Implemented real sklearn training via Node→Python subprocess (Random Forest for tabular, TF-IDF + Logistic Regression for NLP) with persisted metrics (accuracy, F1, CV scores) and joblib artifacts — separate from LLM-generated planning output.",
      "Delivered six business ML presets (churn, loan default, fraud, CO emission risk, QA defect severity, phishing email) with CSV validation, dataset profiling, and AI-generated stakeholder summaries from training metrics.",
      "Built an evaluated RAG pipeline: PDF upload → chunking → embeddings (Gemini / Hugging Face BGE) → vector retrieval → cited chat, plus precision@5 retrieval evaluation for deployment readiness.",
      "Developed GenAI product features including streaming text studio, fal.ai image generation, resume–JD matching screener, and a searchable generation library with user auth and MongoDB persistence.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://visionforgevs.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/Vision-Forge", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "NeuroHR AI: Enterprise HRMS & AI Recruitment Platform",
    tech: "Next.js 14 • TypeScript • Express.js • FastAPI • MongoDB • Groq (Llama 3.3) • Gemini • scikit-learn • Google OAuth • Render",
    bullets: [
      "Built a production HRMS with a 12-step Groq-first hiring pipeline: org knowledge base → grounded JD generation → multi-step resume SOP screening → 15-question AI voice interviews → human panel → offer accept/decline → employee onboarding.",
      "Architected a dedicated FastAPI ML microservice (20+ endpoints) orchestrating Llama 3.3 70B for screening, interview evaluation, tailored question generation, and HR email synthesis with token budgeting, JSON schema enforcement, and Gemini Flash fallback.",
      "Engineered KB-grounded JD generation: catalog markdown → Groq tech-stack extraction → must-have/nice-to-have skill mapping → 7-section job descriptions tied to real repo stacks instead of generic templates.",
      "Implemented harness-style resume screening SOPs (10-step fresher / 8-step experienced) returning dimension scores, skill gaps, and human-escalation flags; auto-shortlist at ≥80% JD match with human-in-the-loop gates and no auto-reject.",
      "Designed 5-dimension weighted interview evaluation (Technical, Problem Solving, Communication, Culture, Experience) with composite hiring score (80% resume + 20% interview) and per-candidate Groq question fallbacks when LLM JSON fails.",
      "Deployed full stack on Netlify + Render with dual Gmail OAuth (HR + Agent), Google Calendar Meet scheduling, scikit-learn CSV training to .pkl artifacts, and synchronous offer/leave email delivery for serverless reliability.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://neurohrai.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/NeuroHr", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "TaskFlow: Team Task Management Platform",
    tech: "React.js • Node.js • Express.js • MongoDB • JWT • RBAC • Tailwind CSS",
    bullets: [
      "Developed a full-stack task management and collaboration platform for organizing projects and tracking team workflows.",
      "Built an interactive Kanban board with task stages including To Do, In Progress, Review, and Completed.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC) for secure user and admin access.",
      "Developed REST APIs using Node.js and Express.js for task creation, assignment, and status updates.",
      "Integrated MongoDB for efficient task storage and real-time data synchronization.",
      "Designed responsive user interfaces using React.js and Tailwind CSS with optimized state management.",
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
      "Developed a recruitment management platform to streamline candidate tracking and hiring workflows.",
      "Implemented resume management, candidate status tracking, interview scheduling, and application management features.",
      "Built secure JWT authentication and role-based access for recruiters and candidates.",
      "Developed REST APIs using Node.js and Express.js for candidate and recruitment operations.",
      "Built analytics dashboards for monitoring recruitment activities and hiring progress.",
      "Designed responsive user interfaces using React.js, TypeScript, and Material UI.",
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
    tech: "Next.js 16 • React 19 • TypeScript • Redux Toolkit • Tailwind CSS • JSON Database",
    bullets: [
      "Developed a full-stack blog platform using Next.js 16 and React 19 with dynamic markdown rendering and advanced text search.",
      "Implemented Static Site Generation (SSG) and dynamic routing for sub-millisecond page transitions and optimized SEO.",
      "Configured file-based JSON storage on the server with API endpoints for user feedback and post read-time estimations.",
      "Managed global UI state with Redux Toolkit for theme configuration (dark/light mode) and interactive filters.",
      "Built fluid utility-first layout using Tailwind CSS with smooth transition micro-animations.",
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
      "Built a responsive real-time weather tracking application with seamless third-party API integration.",
      "Integrated Chart.js for interactive data visualization showing weather trends, hourly metrics, and 7-day temperature forecasts.",
      "Implemented location-based forecasting using the browser Geolocation API for immediate local data loading.",
      "Handled asynchronous operations and API error handling state transitions with vanilla JavaScript.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://vaishaleesingh.github.io/WeatherForecast/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/WeatherForecast", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "TextForge: Text Utility & Analyzer Web Application",
    tech: "React 19 • Bootstrap 5 • Intersection Observer API • Web File API • LocalStorage",
    bullets: [
      "Developed a real-time text analysis tool utilizing React 19 for instant data transformations and stats generation.",
      "Created advanced processing features including word/character counters, reading speed calculators, and word frequency analysis.",
      "Implemented 7+ text manipulation features (capitalization, regex replacement, white-space cleaning, etc.) with custom theme configurations persisted in LocalStorage.",
      "Programmed smooth scroll-based animations using the Intersection Observer API for high visual polish.",
      "Built responsive CSS layouts using Bootstrap 5, grid layers, and Flexbox.",
    ],
    links: [
      [{ label: "Live Demo", href: "https://dreamy-kulfi-20d862.netlify.app/", icon: "fa-globe" }],
      [{ label: "GitHub", href: "https://github.com/VaishaleeSingh/TextForge.git", icon: "fab fa-github" }],
    ] as ProjectLink[][],
  },
  {
    title: "NewsMonkey: Real-Time News Aggregation Platform",
    tech: "React 19 • NewsAPI • GNews API • React Router • Bootstrap 5",
    bullets: [
      "Engineered a news aggregation platform integrating NewsAPI and GNews API to fetch real-time articles across 7+ categories.",
      "Developed a high-performance infinite scroll pagination mechanism using the Intersection Observer API.",
      "Optimized component rendering cycles and callback references using React hooks (useCallback, useMemo) to prevent unnecessary re-renders.",
      "Designed a premium glassmorphic interface with modern CSS3 animations, backdrop filters, and a dark/light mode switcher.",
      "Implemented multi-route single-page navigation using React Router for clean route transitions.",
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
