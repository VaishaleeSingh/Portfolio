export const navLinks = [
  { href: "#home", icon: "fa-home", label: "Home" },
  { href: "#about", icon: "fa-user", label: "About" },
  { href: "#education", icon: "fa-graduation-cap", label: "Education & Certs" },
  { href: "#experience", icon: "fa-briefcase", label: "Experience" },
  { href: "#skills", icon: "fa-cogs", label: "Skills" },
  { href: "#projects", icon: "fa-code", label: "Projects" },
  { href: "#additional-info", icon: "fa-chart-line", label: "Key Strengths" },
  { href: "#contact", icon: "fa-envelope", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "Software Engineer with hands-on experience building production-grade full-stack applications and Generative AI systems, currently working as an Apprentice Software Engineer at thinkbridge.",
  "Experienced in designing multi-agent platforms, RAG pipelines, and LLM-powered applications using Python, FastAPI, LangChain, and LangGraph, supported by vector databases, semantic search, and event-driven infrastructure (Kafka, Redis).",
  "Proficient across the .NET ecosystem (C#, ASP.NET Core) and modern web frameworks (Angular, React.js, Next.js, Node.js), with working knowledge of cloud platforms (Azure, GCP).",
  "Committed to clean architecture, code quality, and end-to-end ownership of features from design through deployment and observability in Agile teams.",
];

export const education = [
  {
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Computer Science and Engineering",
    school: "Amity University, Uttar Pradesh",
    detail: "2022 - 2026 | CGPA: 8.26 / 10",
    extra:
      "Relevant Coursework: Data Structures & Algorithms, Web Development, AI/ML, Database Systems, Object-Oriented Programming, Software Engineering, Computer Networks, Operating Systems",
  },
];

export const certifications = [
  {
    title: "Frontend Developer Certification",
    subtitle: "Micro1 | 2026",
    description:
      "Professional certification strengthening frontend engineering skills across React.js, Next.js, TypeScript, responsive interfaces, and modern production web practices.",
  },
];

export const experiences = [
  {
    role: "Apprentice Software Engineer",
    company: "thinkbridge",
    period: "Oct 2026 – Present",
    bullets: [
      "Selected for the Apprentice Software Engineer role upon successful completion of the thinkSchool program and all evaluation rounds.",
      "Develop and maintain application features using C#, ASP.NET Core, and Angular in adherence to established engineering and production-readiness standards.",
      "Apply a design-first approach, evaluating architecture and trade-offs prior to implementation, to deliver scalable and maintainable solutions.",
    ],
  },
  {
    role: "Software Engineering Trainee (thinkSchool Program)",
    company: "thinkbridge",
    period: "Aug 2026 – Sep 2026",
    bullets: [
      "Gained hands-on proficiency in backend engineering with C# and ASP.NET Core, including RESTful API design, layered architecture, and data access patterns.",
      "Developed responsive frontend applications in Angular, applying component-based design, services, routing, and API integration.",
      "Acquired foundational expertise in Microsoft Azure for cloud deployment and application management.",
      "Adopted industry-standard engineering practices including code quality standards, collaborative Git workflows, and structured delivery processes.",
    ],
  },
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
    skills: ["C#", "Python", "TypeScript", "JavaScript", "Java", "C++"],
  },
  {
    icon: "fa-server",
    title: "Backend",
    skills: [
      "ASP.NET Core",
      ".NET",
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices",
      "JWT Authentication",
      "WebSockets",
      "Kafka",
      "Redis",
    ],
  },
  {
    icon: "fa-layer-group",
    title: "Frontend",
    skills: [
      "Angular",
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: "fa-brain",
    title: "AI / GenAI",
    skills: [
      "LLMs",
      "RAG Pipelines",
      "AI Agents",
      "Multi-Agent Systems",
      "Agentic AI",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "MCP",
      "Semantic Search",
      "Vector Databases",
      "OpenAI APIs",
      "Gemini",
      "Llama 3.3 (Groq)",
      "scikit-learn",
      "Model Evaluation",
    ],
  },
  {
    icon: "fa-database",
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQLite"],
  },
  {
    icon: "fa-cloud",
    title: "Cloud & DevOps",
    skills: [
      "Microsoft Azure",
      "Google Cloud Platform",
      "Docker",
      "CI/CD",
      "Linux",
      "Bash",
      "SigNoz",
      "Vercel",
      "Render",
      "Netlify",
    ],
  },
  {
    icon: "fa-tools",
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "Mixpanel",
      "Strapi CMS",
      "DSA",
      "OOP",
      "System Design",
      "API Design",
      "Agile / Scrum",
      "Performance Optimization",
    ],
  },
];

export type ProjectLink = { label: string; href: string; icon: string };

export const projects = [
  {
    title: "QuotesApi – Backend REST API (thinkSchool @ thinkbridge)",
    tech: "C# | ASP.NET Core 10 | Minimal APIs | Entity Framework Core | SQLite | Docker | Azure Container Apps | Azure Developer CLI",
    bullets: [
      "Built a RESTful Quotes API using ASP.NET Core 10 Minimal APIs and C#, implementing full CRUD endpoints with clean, lightweight routing and minimal configuration.",
      "Integrated Entity Framework Core as the ORM with SQLite for data persistence, managing database schemas via EF Core migrations and async LINQ-based queries.",
      "Containerized the application with Docker and deployed to Azure Container Apps using Azure Developer CLI (azd), managing cloud provisioning and deployment automation.",
      "Troubleshot real-world production issues including Alpine/musl libc runtime compatibility mismatches and Azure subscription quota limitations during cloud deployment.",
    ],
    links: [] as ProjectLink[][],
  },
  {
    title: "NeuroHR AI: Enterprise AI Data & HRMS Platform",
    tech: "Python | FastAPI | MongoDB | Llama 3.3 70B | scikit-learn | RAG | Vector Databases | FAISS | MLflow | Hugging Face",
    bullets: [
      "Architected a Python/FastAPI data microservice exposing 20+ REST APIs for structured data ingestion, processing, and transformation across resume parsing, JD generation, and AI-driven candidate analytics.",
      "Built RAG data pipelines with vector database retrieval, implementing document chunking, embedding strategies, and semantic search for accurate, context-aware LLM responses over structured knowledge bases.",
      "Developed and trained scikit-learn models with Random Forest, Gradient Boosting, MLP, and GridSearchCV hyperparameter tuning on structured HR datasets for candidate evaluation and scoring.",
      "Engineered LLM data orchestration on Llama 3.3 70B with structured JSON output schemas, token budgeting, retry handling, and Gemini Flash fallback data processing.",
    ],
    links: [
      [
        {
          label: "Live Demo",
          href: "https://neurohrai.netlify.app/",
          icon: "fa-globe",
        },
      ],
      [
        {
          label: "GitHub",
          href: "https://github.com/VaishaleeSingh/NeuroHr",
          icon: "fab fa-github",
        },
      ],
    ] as ProjectLink[][],
  },
  {
    title: "ModuMentor: Multi-Agent Data Automation System",
    tech: "AutoGen | Gemini 1.5 | FastAPI | Python | MCP | LangGraph | LangChain | Hugging Face | REST APIs",
    bullets: [
      "Built an agentic data processing system with Gemini 1.5 as the reasoning engine, autonomously interpreting natural language requests and selecting data transformation and retrieval actions.",
      "Integrated MCP data tools including Web Search, Gmail, Google Sheets, and Weather APIs behind FastAPI services to orchestrate multi-agent data collection and processing pipelines.",
      "Designed event-driven multi-agent communication architecture enabling scalable, parallel data processing across autonomous agents.",
    ],
    links: [
      [
        {
          label: "Live Demo",
          href: "https://modumentor-client.netlify.app/",
          icon: "fa-globe",
        },
      ],
      [
        {
          label: "Frontend",
          href: "https://github.com/VaishaleeSingh/ModuMentorClient",
          icon: "fab fa-github",
        },
        {
          label: "Agent",
          href: "https://github.com/VaishaleeSingh/ModumentorAgent-",
          icon: "fab fa-github",
        },
        {
          label: "Backend",
          href: "https://github.com/VaishaleeSingh/ModuMentorServer",
          icon: "fab fa-github",
        },
      ],
    ] as ProjectLink[][],
  },
  {
    title: "Digital Recruiter: Data-Driven Recruitment Management System",
    tech: "React.js | Next.js | TypeScript | Node.js | Express.js | MongoDB | JWT | React Query | Tailwind CSS",
    bullets: [
      "Designed and implemented structured MongoDB data models for candidate profiles, job postings, and interview scheduling, with indexed schemas and relational references for efficient queries.",
      "Developed RESTful data APIs in Node.js/Express.js with clean layered architecture for CRUD operations across recruitment datasets, application workflows, and analytics.",
      "Built analytics dashboards for data visualization of recruitment metrics, pipeline status, and candidate tracking.",
      "Secured data access with JWT authentication and role-based access control enforcing data governance across recruiter and admin roles.",
    ],
    links: [
      [
        {
          label: "Live Demo",
          href: "https://frontend-dr-od6c.onrender.com/",
          icon: "fa-globe",
        },
      ],
      [
        {
          label: "Frontend",
          href: "https://github.com/VaishaleeSingh/frontend_DR",
          icon: "fab fa-github",
        },
        {
          label: "Backend",
          href: "https://github.com/VaishaleeSingh/backend_DR",
          icon: "fab fa-github",
        },
      ],
    ] as ProjectLink[][],
  },
  {
    title: "TaskFlow: Team Data & Task Management Platform",
    tech: "React.js | Redux | Node.js | Express.js | MongoDB | JWT",
    bullets: [
      "Designed RESTful data APIs in Node.js/Express.js for CRUD operations on tasks, boards, and user datasets, with modular controllers, middleware, and clean data access layers.",
      "Modeled and optimized MongoDB schemas with indexed fields and relational references to support efficient queries across tasks, boards, and user relationships.",
      "Implemented secure data handling with JWT authentication, bcrypt password hashing, and CORS-secured endpoints for multi-user data isolation.",
    ],
    links: [
      [
        {
          label: "Live Demo",
          href: "https://tech-task-management-fe.vercel.app/",
          icon: "fa-globe",
        },
      ],
      [
        {
          label: "Frontend",
          href: "https://github.com/VaishaleeSingh/tech_task_management_fe",
          icon: "fab fa-github",
        },
        {
          label: "Backend",
          href: "https://github.com/VaishaleeSingh/tech_task_management_be",
          icon: "fab fa-github",
        },
      ],
    ] as ProjectLink[][],
  },
];

export const additionalInfo = [
  {
    icon: "fa-shield-halved",
    title: ".NET & Clean Architecture",
    content:
      "Hands-on experience with C#, ASP.NET Core, and design-first engineering — evaluating architecture and trade-offs before implementation.",
  },
  {
    icon: "fa-layer-group",
    title: "Full-Stack Ownership",
    content:
      "End-to-end delivery across Angular, React.js, Next.js frontends and ASP.NET Core, FastAPI, Node.js backends with production observability.",
  },
  {
    icon: "fa-brain",
    title: "GenAI & Agentic Systems",
    content:
      "RAG pipelines, multi-agent orchestration, LangChain/LangGraph, semantic search, and LLM-powered features shipped to production.",
  },
  {
    icon: "fa-bolt",
    title: "Event-Driven Infrastructure",
    content:
      "Apache Kafka and Redis for real-time, low-latency data processing, caching, and state management architectures.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Deployment",
    content:
      "Shipped containerized services on Azure and GCP with Docker, CI/CD pipelines, and distributed tracing via SigNoz.",
  },
  {
    icon: "fa-chart-line",
    title: "Engineering Foundations",
    content:
      "Strong DSA, OOP, API design, system design, and Agile/Scrum practices applied across collaborative production teams.",
  },
];

export const contactLinks = [
  {
    href: "mailto:vaishalisinghsln5@gmail.com",
    icon: "fa-envelope",
    label: "vaishalisinghsln5@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/vaishalee-singh-934847254",
    icon: "fab fa-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/VaishaleeSingh",
    icon: "fab fa-github",
    label: "GitHub",
  },
  {
    href: "https://vaishaleesingh.netlify.app/",
    icon: "fa-globe",
    label: "Portfolio",
  },
];
