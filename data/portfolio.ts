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
  "I work across Data Engineering, AI Engineering, Generative AI, and full-stack development, with hands-on experience building scalable data pipelines, ETL/ELT workflows, and event-driven systems.",
  "I use Python and SQL for data processing, transformation, and analytical problem-solving across cloud data platforms, Kafka-driven streaming architectures, vector databases, and production data services.",
  "My work connects Data Engineering and Generative AI through RAG pipelines, semantic search, LLM orchestration, structured schemas, query optimization, and observability across the full data lifecycle.",
  "I am comfortable contributing across GenAI, AI Engineering, Data Engineering, and full-stack development with Spark, PySpark, Databricks, Kubernetes, cloud-native architectures, and modern software engineering practices.",
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
    role: "Software Developer Intern",
    company: "Take U Forward",
    period: "Jun 2026 - Present",
    bullets: [
      "Build and maintain production-scale AI-enabled full-stack applications in React.js, Next.js, TypeScript, and Node.js, integrating backend data APIs and processing pipelines for high-traffic platform features.",
      "Integrate LLM-powered data features into product surfaces, including prompt-engineered data retrieval flows and API-backed AI assistance with structured data transformation for AI outputs.",
      "Optimize API integrations and data flows through reusable component design, efficient state management, and targeted production debugging in Linux environments.",
      "Collaborate in Agile/Scrum workflows managing feature development, debugging cycles, and release delivery end to end.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Rapid Innovation (RUH AI)",
    period: "Nov 2025 - May 2026",
    bullets: [
      "Designed and built production-grade ETL/ELT data pipelines for Generative AI systems using Python and FastAPI, processing unstructured data into structured, LLM-ready formats.",
      "Engineered RAG pipelines with vector databases, implementing chunking strategies, embedding generation, and semantic search for accurate, low-latency data retrieval.",
      "Developed multi-agent data orchestration platforms using LangChain and LangGraph to manage automated multi-step data workflows and structured output generation.",
      "Built event-driven data streaming architecture using Apache Kafka for real-time message processing and Redis for high-speed caching and low-latency state management.",
      "Deployed containerized data services with Docker on Google Cloud Platform (GCP), enabling scalable and repeatable data pipeline deployment.",
      "Instrumented distributed data systems with SigNoz for tracing, metrics, production monitoring, and end-to-end observability of data pipelines.",
      "Designed MongoDB data models and schemas for candidate profiles, application data, and analytics, with query optimization for efficient retrieval at scale.",
    ],
  },
];

export const skillCategories = [
  {
    icon: "fa-code",
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    icon: "fa-diagram-project",
    title: "Data Engineering",
    skills: [
      "ETL/ELT Pipelines",
      "Data Modeling",
      "Data Ingestion",
      "Data Transformation",
      "Batch Processing",
      "Stream Processing",
      "Schema Design",
      "Query Optimization",
      "Data Warehousing",
    ],
  },
  {
    icon: "fa-bolt",
    title: "Big Data & Streaming",
    skills: [
      "Apache Kafka",
      "Redis",
      "REST API Integration",
      "Microservices Architecture",
      "Apache Spark",
      "PySpark",
      "Databricks",
      "Airflow",
    ],
  },
  {
    icon: "fa-cloud",
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "Azure OpenAI",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "MLflow",
      "Vercel",
      "Render",
      "Netlify",
    ],
  },
  {
    icon: "fa-brain",
    title: "AI / GenAI & Data",
    skills: [
      "RAG Pipelines",
      "Vector Databases",
      "Semantic Search",
      "Embedding Strategies",
      "LLM Orchestration",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Prompt Engineering",
      "scikit-learn",
      "Model Evaluation",
      "OpenAI APIs",
      "Gemini 1.5",
      "Llama 3.3",
    ],
  },
  {
    icon: "fa-database",
    title: "Databases",
    skills: [
      "MongoDB",
      "MySQL",
      "Pinecone",
      "ChromaDB",
      "FAISS",
      "Elasticsearch",
      "OpenSearch",
    ],
  },
  {
    icon: "fa-server",
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "WebSockets",
    ],
  },
  {
    icon: "fa-tools",
    title: "Tools & Practices",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Linux",
      "Bash",
      "SigNoz",
      "OpenTelemetry",
      "PyTest",
      "Jest",
      "Jira",
      "Agile / Scrum",
      "Performance Optimization",
      "System Design",
      "DSA",
      "OOP",
    ],
  },
];

export type ProjectLink = { label: string; href: string; icon: string };

export const projects = [
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
    icon: "fa-code-branch",
    title: "Python & SQL Proficiency",
    content:
      "Applied across data pipeline development, ML model training, analytical problem-solving, and transformation workflows.",
  },
  {
    icon: "fa-diagram-project",
    title: "ETL/ELT Pipeline Design",
    content:
      "Hands-on work across ingestion, chunking, transformation, embedding generation, vector storage, and structured serving.",
  },
  {
    icon: "fa-bolt",
    title: "Event-Driven Streaming",
    content:
      "Apache Kafka and Redis experience for real-time, low-latency data processing and state management architectures.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Data Deployment",
    content:
      "Dockerized services on GCP with CI/CD practices for repeatable, production-grade data service delivery.",
  },
  {
    icon: "fa-chart-line",
    title: "Analytical Problem-Solving",
    content:
      "Strong DSA, OOP, query optimization, and system design foundations applied to scalable data systems.",
  },
  {
    icon: "fa-brain",
    title: "GenAI + Data Convergence",
    content:
      "Positioned to contribute across Lakehouse AI, RAG, LLM orchestration, AI agents, and ML-backed data products.",
  },
];

export const contactLinks = [
  {
    href: "mailto:vaishalisinghsln5@gmail.com",
    icon: "fa-envelope",
    label: "vaishalisinghsln5@gmail.com",
  },
  { href: "tel:+916394531994", icon: "fa-phone", label: "+91 63945 31994" },
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
