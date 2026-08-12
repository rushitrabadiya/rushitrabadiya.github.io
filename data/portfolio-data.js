// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
//  Reviewed & corrected against verified resume/project data.
//  See inline comments (⚠️) for items that still need YOUR input.
// ============================================================
window.portfolioData = {
  // ── Meta / SEO ──────────────────────────────────────────────
  meta: {
    siteTitle: "Rushit Rabadiya — Software Engineer",
    siteDescription:
      "Software Engineer with 3 years exp. (incl. 6-mo. internship) — backend systems in Node.js & TypeScript, growing into applied AI (RAG, LLM).",
    resumeUrl: "assets/resume.pdf",
    favicon: "assets/img/favicon.svg",
  },

  // ── Profile ─────────────────────────────────────────────────
  profile: {
    name: "Rushit Rabadiya",
    title: "Software Engineer",
    bio: "Software Engineer with 3 years of experience (including 6 months of backend development internship experience), building scalable backend systems using Node.js, Express.js, and TypeScript. Strong in RESTful API design, hybrid database architecture (PostgreSQL, MongoDB, Redis), and containerized deployment (Docker, AWS EC2/S3, CI/CD). Experienced owning backend architecture end-to-end, from system design through production deployment. Currently exploring applied AI as a growing area alongside backend engineering, with hands-on experimentation in RAG pipelines, vector databases, LLM integration, and multi-provider AI orchestration.",
    avatar: "assets/img/avatar.jpg",
    status: "Available for new opportunities",
    phone: "+91 77779 53418",
    address: "Ahmedabad, Gujarat, India",
    email: "rushitrabadiya.work@gmail.com",
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    name: "Rushit Rabadiya",
    // Typing animation cycles through these roles
    roles: [
      "Software Engineer",
      "API Architect",
      "System Designer",
      // "DevOps Engineer",
      "AI / RAG Builder",
    ],
    tagline:
      "Software Engineer building scalable SaaS systems — backend architecture, system design, and growing into applied AI.",
    cta: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Get In Touch", href: "#contact" },
    },
  },

  // ── Contact Form ────────────────────────────────────────────
  contact: {
    // Web3Forms access key — https://web3forms.com/ — powers the
    // contact form submission (#contact-form) without a backend.
    web3FormsKey: "07368a4d-71da-4148-959e-d0b23e25f6f7",
    // Sent along with every submission so you can tell which site a
    // message came from if this same Web3Forms key is reused elsewhere.
    project: "Rushit Portfolio",
  },

  // ── Social Links ────────────────────────────────────────────
  socialLinks: {
    github: "https://github.com/rushitrabadiya",
    linkedin: "https://www.linkedin.com/in/rushit-rabadiya",
    twitter: "", // Leave blank unless you have one
    email: "rushitrabadiya.work@gmail.com",
  },

  // ── About Stats ─────────────────────────────────────────────
  // ⚠️ NOTE: this array isn't currently wired up — the stat cards on the
  // page are hardcoded in index.html's #stats-grid. Kept here in sync so
  // it stays a source of truth if that gets data-driven later.
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "<100ms", label: "API Latency" },
  ],

  // ── Skills ──────────────────────────────────────────────────
  skills: [
    { name: "Node.js", category: "Backend", level: 90 },
    { name: "Express.js", category: "Backend", level: 90 },
    { name: "TypeScript", category: "Backend", level: 85 },
    { name: "JavaScript", category: "Backend", level: 90 },
    { name: "REST APIs", category: "Backend", level: 90 },
    { name: "Microservices", category: "Backend", level: 75 },
    { name: "Socket.io", category: "Backend", level: 75 },
    { name: "BullMQ", category: "Backend", level: 75 },
    { name: "JWT / RBAC", category: "Backend", level: 80 },
    { name: "Tsyringe DI", category: "Backend", level: 75 },
    { name: "PostgreSQL", category: "Database", level: 85 },
    { name: "MongoDB", category: "Database", level: 85 },
    { name: "Redis", category: "Database", level: 75 },
    { name: "Prisma", category: "Database", level: 70 },
    { name: "Sequelize", category: "Database", level: 80 },
    { name: "Mongoose", category: "Database", level: 80 },
    { name: "Docker", category: "DevOps", level: 80 },
    { name: "AWS (EC2, S3)", category: "DevOps", level: 75 },
    { name: "CI/CD (GitHub Actions)", category: "DevOps", level: 75 },
    { name: "Nginx", category: "DevOps", level: 65 },
    { name: "Turborepo", category: "DevOps", level: 50 },
    { name: "React", category: "Frontend", level: 65 },
    { name: "Next.js", category: "Frontend", level: 65 },
    { name: "RAG / Vector DBs", category: "AI / ML", level: 50 },
    { name: "LLM Orchestration", category: "AI / ML", level: 50 },
    { name: "Ollama (Local LLMs)", category: "AI / ML", level: 50 },
  ],

  // ── Experience ──────────────────────────────────────────────
  // Grouped LinkedIn-style: one entry per company, with multiple
  // `positions` for people who held more than one role/promotion
  // at the same company (e.g. Edzyme Tech below).
  experience: [
    {
      company: "Edzyme Tech Private Limited",
      location: "Ahmedabad, India",
      positions: [
        {
          role: "Senior Software Engineer",
          startDate: "Jan 2026",
          endDate: "Present",
          current: true,
          description: [
            "Promoted to own end-to-end backend architecture and system design for Kipi, an enterprise SaaS/ERP platform for educational institutes",
            "Collaborate closely with the engineering team on technical decisions, code architecture, and PR reviews",
            "Own deployment processes and production releases, maintaining API latency under 100ms at peak load",
          ],
          tech: [
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "BullMQ",
            "Docker",
            "AWS",
          ],
        },
        {
          role: "Back End Developer",
          startDate: "Dec 2024",
          endDate: "Jan 2026",
          current: false,
          description: [
            "Built core backend features for Kipi, including fee billing, wallet transactions, and academy management modules",
            "Designed a hybrid database architecture (PostgreSQL + MongoDB) with asynchronous processing pipelines (Redis, BullMQ) for notifications, PDF generation, and payment reconciliation",
            "Integrated PhonePe payments and Socket.io real-time features, including live notifications and in-app chat",
          ],
          tech: [
            "Node.js",
            "TypeScript",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "BullMQ",
          ],
        },
      ],
    },
    {
      company: "Stackdot",
      location: "Ahmedabad, India",
      positions: [
        {
          role: "Junior Backend Developer",
          startDate: "Mar 2024",
          endDate: "Dec 2024",
          current: false,
          description: [
            "Built and maintained scalable backend applications using Node.js and Express.js across multiple projects",
            "Worked with both PostgreSQL and MongoDB, adapting the data layer to each project's needs",
            "Designed secure RESTful APIs with JWT-based authentication, role-based access control, and input validation",
          ],
          tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT"],
        },
        {
          role: "Backend Developer Intern",
          startDate: "May 2023",
          endDate: "Oct 2023",
          current: false,
          description: [
            "Designed and integrated RESTful APIs for communication between frontend and backend systems",
            "Worked with Node.js and Express.js to build backend services, learning asynchronous, middleware, and event-driven architectures",
            "Worked with PostgreSQL and MongoDB across different projects based on application requirements",
            "Collaborated with the development team to build scalable and maintainable backend solutions",
          ],
          tech: [
            "Node.js",
            "Express.js",
            "JavaScript",
            "PostgreSQL",
            "MongoDB",
            "REST APIs",
          ],
        },
      ],
    },
  ],

  // ── Projects ────────────────────────────────────────────────
  projects: [
    {
      title: "Kipi — Enterprise SaaS/ERP",
      description:
        "Enterprise-grade SaaS/ERP backend powering sports academies and educational institutes, with hybrid SQL+NoSQL architecture, real-time updates, and automated fee processing. Collaborate closely with the engineering team through design, review, and deployment.",
      image: "assets/img/projects/kipi.webp",
      // Optional: Array of multiple images for the gallery
      images: [
        "assets/img/projects/kipi.webp",
        "assets/img/projects/kipi-2.webp",
        "assets/img/projects/kipi-3.webp",
      ],
      // Optional: Video URL (MP4) to play in the modal
      video: "",
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Socket.io",
        "Docker",
        "AWS",
      ],
      githubUrl: "",
      liveUrl: "https://kipiapp.in",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "Archrendr — Digital Asset E-Commerce",
      description:
        "Cloud-native e-commerce for buying/selling 3D models & plugins, with Stripe subscriptions and secure S3 pre-signed URL asset delivery.",
      image: "assets/img/projects/Archrendr.png",
      images: [
        "assets/img/projects/Archrendr.png",
        "assets/img/projects/Archrendr-2.png",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Sequelize",
        "Docker",
        "AWS",
        "CI/CD",
      ],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "NexusChat — AI RAG Platform",
      description:
        "Multi-tenant document chat platform using Retrieval-Augmented Generation, with multi-provider AI failover (Gemini, Groq, Ollama) and pgvector storage.",
      image: "assets/img/projects/NexusChat-2.png",
      images: [
        "assets/img/projects/NexusChat.png",
        "assets/img/projects/NexusChat-2.png",
        "assets/img/projects/NexusChat-3.png",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "React",
        "RAG",
        "Ollama",
      ],
      githubUrl: "https://github.com/rushitrabadiya/NexusChat",
      liveUrl: "",
      category: "AI / ML",
      featured: true,
    },
    {
      title: "Smart Society Management",
      description:
        "Enterprise-grade backend to digitize residential society operations — billing, guest entries, complaints, and multi-provider file storage with a factory pattern.",
      image: "assets/img/projects/project-4.jpg",
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Socket.io",
        "JWT",
        "Docker",
      ],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "LAMS — Live Auction System",
      description:
        "High-concurrency IPL-style auction platform with real-time Socket.io bid broadcasting and Redis-backed concurrency handling to prevent race conditions.",
      image: "assets/img/projects/LAMS.png",
      images: [
        "assets/img/projects/LAMS.png",
        "assets/img/projects/LAMS-2.png",
        "assets/img/projects/LAMS-3.png",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "Socket.io",
      ],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Mahavir (Go-Celox Trading)",
      description:
        "Premium B2B marketing site for a chemical trading company, built with Next.js 15 with focus on SEO and answer-engine optimization.",
      image: "assets/img/projects/mahavir-2.png",
      images: [
        "assets/img/projects/mahavir-1.png",
        "assets/img/projects/mahavir-2.png",
      ],
      technologies: ["Next.js", "React", "TypeScript"],
      githubUrl: "https://github.com/rushitrabadiya/Go-Celox-trading",
      liveUrl: "https://www.mahavirco.com",
      category: "Web App",
      featured: false,
    },
    {
      title: "Remindify — Reminder Platform",
      description:
        "Full-stack PWA reminder platform with recurring events, offline IndexedDB support, and async push notifications via BullMQ.",
      image: "assets/img/projects/Remindify.png",
      images: [
        "assets/img/projects/Remindify.png",
        "assets/img/projects/Remindify-2.png",
        "assets/img/projects/Remindify-3.png",
        "assets/img/projects/Remindify-4.png",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "TypeScript",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Docker",
      ],
      githubUrl: "",
      liveUrl: "",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Minimal Gemini Chat",
      description:
        "Lightning-fast minimalist AI chat app on Google Gemini with SSE streaming, dynamic model switching (Flash / Pro), and multilingual support.",
      image: "assets/img/projects/Minimal Gemini Chat-2.png",
      images: [
        "assets/img/projects/Minimal Gemini Chat.png",
        "assets/img/projects/Minimal Gemini Chat-2.png",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
      githubUrl: "",
      liveUrl: "",
      category: "AI / ML",
      featured: false,
    },
    {
      title: "Satyanarayan POS",
      description:
        "Multi-store retail POS backend with inventory, RBAC staff roles, order processing, and receipt generation for a desktop app.",
      image: "assets/img/projects/project-9.jpg",
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Socket.io",
        "JWT",
      ],
      githubUrl: "",
      liveUrl: "https://icecreampos-68b6b.web.app/",
      category: "Desktop App",
      featured: false,
    },
    {
      title: "GMS — Get My Sport",
      description:
        "Real-time sports venue booking platform preventing double-bookings, with partner backend for venue owners and clients on web + mobile.",
      image: "assets/img/projects/GMS.jpeg",
      images: [
        "assets/img/projects/GMS.jpeg",
        "assets/img/projects/GMS-2.jpeg",
        "assets/img/projects/GMS-3.jpeg",
      ],
      technologies: ["Node.js", "React", "MongoDB", "PostgreSQL"],
      githubUrl: "",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.getmysport.app",
      category: "Full Stack",
      featured: false,
    },
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
      credentialUrl: "https://www.udemy.com/",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuingOrganization: "freeCodeCamp",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://www.freecodecamp.org/",
    },
    {
      name: "Introduction to MongoDB",
      issuingOrganization: "MongoDB (Official Course)",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://learn.mongodb.com/",
    },
    {
      name: "Getting Started with MongoDB Atlas",
      issuingOrganization: "MongoDB (Official Course)",
      issueDate: "", // ⚠️ add real date if known
      credentialUrl: "https://learn.mongodb.com/",
    },
  ],

  // ── Testimonials ────────────────────────────────────────────
  // ⚠️ REMOVED — the previous file had fully fabricated names, quotes,
  // and stock photos attributed to your real employers (Edzyme Tech,
  // Stackdot). Publishing invented testimonials under real company names
  // is misleading to visitors and risky if a real colleague ever sees it.
  // Replace this empty array with REAL quotes from real colleagues/managers
  // once you have them (with their permission), or hide the section on
  // the site until then.
  testimonials: [],
};
