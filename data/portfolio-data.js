// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
//  Reviewed & corrected against verified resume/project data.
//  See inline comments (⚠️) for items that still need YOUR input.
// ============================================================
window.portfolioData = {

  // ── Meta / SEO ──────────────────────────────────────────────
  meta: {
    siteTitle: "Rushit Rabadiya — Backend Developer",
    siteDescription:
      "Backend Developer with 2.5+ years of experience building scalable web applications using Node.js, Express.js, and TypeScript.",
    // ⚠️ REPLACE: Add your resume PDF/DOCX URL here once hosted (e.g. after uploading via your admin panel's Resume & Documents section)
    resumeUrl: "https://docs.google.com/document/d/1VJqMvRwUL5lBH5PMsmm7PkW-HBdrlnHJ/edit?usp=sharing&ouid=103983007504582390685&rtpof=true&sd=true",
    // ⚠️ REPLACE: Set your custom favicon URL here (or leave the dummy one for now)
    favicon: "https://github.githubassets.com/favicons/favicon.png"
  },

  // ── Profile ─────────────────────────────────────────────────
  profile: {
    name: "Rushit Rabadiya",
    title: "Backend Developer",
    bio: "Backend Developer with 2.5 years of experience building scalable web applications using Node.js, Express.js, and TypeScript. Strong in RESTful API design, hybrid database architecture (PostgreSQL, MongoDB, Redis), and containerized deployment (Docker, AWS EC2/S3, CI/CD). Experienced leading backend architecture and owning end-to-end delivery, with hands-on exposure to applied AI (RAG pipelines, multi-provider LLM orchestration, local model deployment).",
    // ⚠️ REPLACE: This is a random stock photo placeholder, not you — swap for your real photo
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    status: "Available for new opportunities",
    phone: "+91 77779 53418",
    address: "Ahmedabad, Gujarat, India",
    email: "rushitrabadiya.work@gmail.com"
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    name: "Rushit Rabadiya",
    // Typing animation cycles through these roles
    roles: [
      "Backend Developer",
      "API Architect",
      "System Designer",
      "DevOps Engineer",
      "AI / RAG Builder"
    ],
    tagline:
      "Building scalable, resilient backends that power real products — from API design to cloud deployment.",
    cta: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Get In Touch", href: "#contact" }
    }
  },

  // ── Social Links ────────────────────────────────────────────
  socialLinks: {
    github: "https://github.com/rushitrabadiya",
    linkedin: "https://www.linkedin.com/in/rushit-rabadiya",
    twitter: "", // Leave blank unless you have one
    email: "rushitrabadiya.work@gmail.com"
  },

  // ── About Stats ─────────────────────────────────────────────
  stats: [
    { value: "2.5+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "6", label: "Engineers Led" },
    { value: "<100ms", label: "API Latency" }
  ],

  // ── Skills ──────────────────────────────────────────────────
  skills: [
    { name: "Node.js",               category: "Backend",  level: 90 },
    { name: "Express.js",            category: "Backend",  level: 90 },
    { name: "TypeScript",            category: "Backend",  level: 85 },
    { name: "JavaScript",            category: "Backend",  level: 90 },
    { name: "REST APIs",             category: "Backend",  level: 90 },
    { name: "Microservices",         category: "Backend",  level: 75 },
    { name: "Socket.io",             category: "Backend",  level: 75 },
    { name: "BullMQ",                category: "Backend",  level: 75 },
    { name: "JWT / RBAC",            category: "Backend",  level: 80 },
    { name: "Tsyringe DI",           category: "Backend",  level: 75 },
    { name: "PostgreSQL",            category: "Database", level: 85 },
    { name: "MongoDB",               category: "Database", level: 85 },
    { name: "Redis",                 category: "Database", level: 75 },
    { name: "Prisma",                category: "Database", level: 70 },
    { name: "Sequelize",             category: "Database", level: 80 },
    { name: "Mongoose",              category: "Database", level: 80 },
    { name: "Docker",                category: "DevOps",   level: 80 },
    { name: "AWS (EC2, S3)",         category: "DevOps",   level: 75 },
    { name: "CI/CD (GitHub Actions)",category: "DevOps",   level: 75 },
    { name: "Nginx",                 category: "DevOps",   level: 65 },
    { name: "Turborepo",             category: "DevOps",   level: 65 },
    { name: "React",                 category: "Frontend", level: 65 },
    { name: "Next.js",               category: "Frontend", level: 65 },
    { name: "RAG / Vector DBs",      category: "AI / ML",  level: 65 },
    { name: "LLM Orchestration",     category: "AI / ML",  level: 60 },
    { name: "Ollama (Local LLMs)",   category: "AI / ML",  level: 55 }
  ],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      company: "Edzyme Tech Private Limited",
      role: "Senior Software Developer",
      location: "Ahmedabad, India",
      startDate: "Dec 2024",
      endDate: "Present",
      current: true,
      description: [
        "Owned end-to-end backend architecture and system design for Kipi, an enterprise SaaS/ERP platform for educational institutes",
        "Led a team of 6 engineers, directing technical decisions, code architecture, and PR reviews",
        "Designed a hybrid database architecture (PostgreSQL + MongoDB) across microservices",
        "Built async processing pipelines using Redis and BullMQ for notifications, PDF generation, and payment reconciliation, maintaining API latency under 100ms at peak load",
        "Owned deployment processes and production releases across the engineering team"
      ],
      tech: ["Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "Docker", "AWS"]
    },
    {
      company: "Stackdot",
      role: "Backend Developer",
      location: "Ahmedabad, India",
      startDate: "Mar 2024",
      endDate: "Dec 2024",
      current: false,
      description: [
        "Built and maintained scalable backend applications using Node.js, Express.js, and MongoDB within a Turborepo-based monorepo",
        "Designed secure RESTful APIs with JWT-based authentication, role-based access control, and input validation",
        "Followed clean architecture principles for production-ready, maintainable code"
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Turborepo"]
    }
  ],

  // ── Projects ────────────────────────────────────────────────
  projects: [
    {
      title: "Kipi — Enterprise SaaS/ERP",
      description:
        "Enterprise-grade SaaS/ERP backend powering sports academies and educational institutes, with hybrid SQL+NoSQL architecture, real-time updates, and automated fee processing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "Socket.io", "Docker", "AWS"],
      githubUrl: "",
      liveUrl: "https://kipiapp.in",
      category: "Full Stack",
      featured: true
    },
    {
      title: "Archrendr — Digital Asset E-Commerce",
      description:
        "Cloud-native e-commerce for buying/selling 3D models & plugins, with Stripe subscriptions and secure S3 pre-signed URL asset delivery.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Sequelize", "Docker", "AWS", "CI/CD"],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: true
    },
    {
      title: "NexusChat — AI RAG Platform",
      description:
        "Multi-tenant document chat platform using Retrieval-Augmented Generation, with multi-provider AI failover (Gemini, Groq, Ollama) and pgvector storage.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "React", "RAG", "Ollama"],
      githubUrl: "https://github.com/rushitrabadiya/NexusChat",
      liveUrl: "",
      category: "AI / ML",
      featured: true
    },
    {
      title: "Smart Society Management",
      description:
        "Enterprise-grade backend to digitize residential society operations — billing, guest entries, complaints, and multi-provider file storage with a factory pattern.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "Socket.io", "JWT", "Docker"],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false
    },
    {
      title: "LAMS — Live Auction System",
      description:
        "High-concurrency IPL-style auction platform with real-time Socket.io bid broadcasting and Redis-backed concurrency handling to prevent race conditions.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Socket.io"],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false
    },
    {
      title: "Mahavir (Go-Celox Trading)",
      description:
        "Premium B2B marketing site for a chemical trading company, built with Next.js 15 with focus on SEO and answer-engine optimization.",
      image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&q=80",
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/rushitrabadiya/Go-Celox-trading",
      liveUrl: "https://www.mahavirco.com",
      category: "Web App",
      featured: false
    },
    {
      title: "Remindify — Reminder Platform",
      description:
        "Full-stack PWA reminder platform with recurring events, offline IndexedDB support, and async push notifications via BullMQ.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "BullMQ", "Docker"],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false
    },
    {
      title: "Minimal Gemini Chat",
      description:
        "Lightning-fast minimalist AI chat app on Google Gemini with SSE streaming, dynamic model switching (Flash / Pro), and multilingual support.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      technologies: ["React", "Node.js", "Express.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "",
      liveUrl: "",
      category: "AI / ML",
      featured: false
    },
    {
      title: "Satyanarayan POS",
      description:
        "Multi-store retail POS backend with inventory, RBAC staff roles, order processing, and receipt generation for a desktop app.",
      image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=800&q=80",
      technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "Socket.io", "JWT"],
      githubUrl: "",
      liveUrl: "",
      category: "Desktop App",
      featured: false
    },
    {
      title: "GMS — Get My Sport",
      description:
        "Real-time sports venue booking platform preventing double-bookings, with partner backend for venue owners and clients on web + mobile.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
      technologies: ["Node.js", "React", "MongoDB", "PostgreSQL"],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false
    }
  ],

  // ── Certifications ──────────────────────────────────────────
  // Fixed: matches your actual resume exactly. The MongoDB Atlas course
  // and the Intro to MongoDB course are two SEPARATE certificates, not one.
  // ⚠️ Dates removed — the previous file had invented dates (Mar/Feb/Jan 2023)
  // that don't appear anywhere in your source data. Add real dates if you have them.
  certifications: [
    {
      name: "Node.js, Express, MongoDB Bootcamp",
      issuingOrganization: "Udemy",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://www.udemy.com/"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuingOrganization: "freeCodeCamp",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://www.freecodecamp.org/"
    },
    {
      name: "Introduction to MongoDB",
      issuingOrganization: "MongoDB (Official Course)",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://learn.mongodb.com/"
    },
    {
      name: "Getting Started with MongoDB Atlas",
      issuingOrganization: "MongoDB (Official Course)",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://learn.mongodb.com/"
    }
  ],

  // ── Testimonials ────────────────────────────────────────────
  // ⚠️ REMOVED — the previous file had fully fabricated names, quotes,
  // and stock photos attributed to your real employers (Edzyme Tech,
  // Stackdot). Publishing invented testimonials under real company names
  // is misleading to visitors and risky if a real colleague ever sees it.
  // Replace this empty array with REAL quotes from real colleagues/managers
  // once you have them (with their permission), or hide the section on
  // the site until then.
  testimonials: []
};