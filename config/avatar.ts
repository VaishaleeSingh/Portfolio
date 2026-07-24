export const AVATAR_TOPICS = {
  intro:
    "Hello! I'm Vaishalee Singh, a Data Engineer and AI-focused software developer. I design scalable data pipelines, ETL and ELT workflows, event-driven systems, and Generative AI data products across Python, SQL, FastAPI, Kafka, GCP, vector databases, and modern web stacks.",
  skills:
    "My core skills include Python, SQL, JavaScript, TypeScript, Java, and C++. I work across ETL and ELT pipeline development, data modeling, ingestion, transformation, batch and stream processing, schema design, query optimization, Kafka, Redis, Spark, PySpark, Databricks, Airflow, GCP, AWS, Docker, Kubernetes, Terraform, MLflow, and GitHub Actions. For AI and data products, I build RAG pipelines, vector retrieval, semantic search, embedding workflows, LLM orchestration, LangChain, LangGraph, AI agents, OpenAI APIs, Gemini, Llama, and scikit-learn models.",
  experience:
    "I'm currently a Software Developer Intern at Take U Forward since June 2026, where I build AI-enabled full-stack applications and integrate backend data APIs, processing pipelines, and LLM-powered features. Before that, from November 2025 to May 2026, I worked at Rapid Innovation, RUH AI, where I built ETL and ELT pipelines for GenAI systems, engineered RAG workflows with vector databases, developed multi-agent data orchestration with LangChain and LangGraph, used Kafka and Redis for event-driven processing, deployed Dockerized services on GCP, and instrumented systems with SigNoz.",
  projects:
    "My featured projects are resume-aligned around data and AI. NeuroHR AI is an enterprise AI data and HRMS platform with Python, FastAPI, MongoDB, Llama 3.3, RAG, FAISS, MLflow, and scikit-learn. ModuMentor is a multi-agent data automation system using Gemini 1.5, AutoGen, FastAPI, MCP, LangGraph, and LangChain. Digital Recruiter is a data-driven recruitment management system with structured MongoDB models, REST APIs, analytics dashboards, JWT authentication, and role-based access control. TaskFlow is a team data and task management platform with Node.js APIs, optimized MongoDB schemas, and secure multi-user data handling.",
} as const;

export type AvatarTopic = keyof typeof AVATAR_TOPICS;

export const AVATAR_TOPIC_LABELS: { id: AvatarTopic; label: string }[] = [
  { id: "intro", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
