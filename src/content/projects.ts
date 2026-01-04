export interface IProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  challenges: string[];
  solutions: string[];
  url?: string;
  github?: string;
  status: "Live" | "Not Live" | "Building";
  type: "Web" | "Mobile" | "Building";
  featured: boolean;
  projectOrder: number;
  slides?: {
    id: string;
    title: string;
    description: string;
  }[];
}

export const projects: IProject[] = [
  {
    id: "mywms",
    title: "MyWMS",
    description: "Warehouse Management System for Android",
    longDescription: "Mobile-first WMS for warehouse operators with scanning workflows, picking, and large-order handling. Focus on performance and usability on rugged handheld devices.",
    technologies: ["React Native", "Android", "SQLite", "ERP-API", "Expo GO"],
    role: "Lead Developer",
    challenges: [
      "Optimizing performance for older Android devices",
      "Ensuring usability in warehouse environments with limited connectivity"
    ],
    solutions: [
      "Implemented offline-first architecture with local data caching",
      "Optimized UI for touch interactions with gloves"
    ],
    status: "Live",
    type: "Mobile",
    featured: true,
    projectOrder: 1,
    slides: [
      {
        id: "mywms1",
        title: "Dashboard Overview",
        description: "Main dashboard showing key metrics and quick access to core features"
      },
      {
        id: "mywms2",
        title: "Inventory Management",
        description: "Real-time inventory tracking with scanning capabilities"
      },
      {
        id: "mywms3",
        title: "Order Processing",
        description: "Streamlined workflow for processing warehouse orders"
      }
    ]
  },
  {
    id: "greentree",
    title: "GreenTree Thessaloniki",
    description: "Web app for recording tree data in an area",
    longDescription: "Web application for recording and managing tree data in urban areas. Built the user-facing form and data entry workflow.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Mapbox"],
    role: "Frontend Developer",
    challenges: [
      "Creating an intuitive data entry interface for field workers",
      "Integrating map functionality with data collection"
    ],
    solutions: [
      "Designed mobile-responsive forms with validation",
      "Implemented interactive map with data visualization"
    ],
    url: "https://thessaloniki.greentree.gr/",
    status: "Live",
    type: "Web",
    featured: false,
    projectOrder: 4,
    slides: [
      {
        id: "greentree1",
        title: "Tree Mapping Interface",
        description: "Interactive map showing tree locations with detailed information"
      },
      {
        id: "greentree2",
        title: "Data Collection Form",
        description: "Mobile-optimized form for field data collection"
      }
    ]
  },
  {
    id: "leader",
    title: "LEADER-EL",
    description: "EU LEADER program applications platform",
    longDescription: "Large web platform for submitting and reviewing EU LEADER program applications. Institutions review applications and iterate with applicants until compliance.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    role: "Full-Stack Developer",
    challenges: [
      "Managing complex application review workflows",
      "Ensuring data security and compliance"
    ],
    solutions: [
      "Implemented role-based access control",
      "Built iterative review system with versioning"
    ],
    url: "https://leader-el.gr/",
    status: "Live",
    type: "Web",
    featured: true,
    projectOrder: 3,
    slides: [
      {
        id: "leader1",
        title: "Application Dashboard",
        description: "Overview of submitted applications with status tracking"
      },
      {
        id: "leader2",
        title: "Review Interface",
        description: "Detailed view for reviewers to evaluate applications"
      },
      {
        id: "leader3",
        title: "Reporting Module",
        description: "Comprehensive reporting tools for program administrators"
      }
    ]
  },
  {
    id: "anastasiasapp",
    title: "AnastasiasApp",
    description: "PWA for personal trainer scheduling and management",
    longDescription: "Progressive Web App for a personal trainer featuring schedule availability, customer bookings, statistics dashboard, customer cards, and financial overview.",
    technologies: ["Next.js", "TypeScript", "PWA", "PostgreSQL"],
    role: "Full-Stack Developer",
    challenges: [
      "Creating a seamless booking experience",
      "Building comprehensive analytics dashboard"
    ],
    solutions: [
      "Implemented real-time availability calendar",
      "Developed interactive data visualization components"
    ],
    url: "https://anastasiasapp.com/",
    status: "Live",
    type: "Web",
    featured: true,
    projectOrder: 2
  },
  {
    id: "multi-agent",
    title: "Multi Agent",
    description: "Multi-agent app integrated with OpenAI",
    longDescription: "Multi-agent application with capabilities for chat, image generation, PDF reading, and lightweight project management, integrated with OpenAI APIs.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "PDF.js"],
    role: "Developer",
    challenges: [
      "Managing multiple AI agents with different capabilities",
      "Ensuring efficient API usage and cost control"
    ],
    solutions: [
      "Implemented agent orchestration system",
      "Built cost monitoring and optimization features"
    ],
    status: "Not Live",
    type: "Web",
    featured: false,
    projectOrder: 5
  },
  {
    id: "law-agent",
    title: "Law Agent",
    description: "Legal document analysis with vector database",
    longDescription: "Application for uploading law PDFs, chunking and embedding content into a vector database, and asking legal questions with retrieval-augmented answers.",
    technologies: ["Next.js", "TypeScript", "Vector DB", "Embeddings"],
    role: "Developer",
    challenges: [
      "Processing and chunking legal documents effectively",
      "Implementing accurate retrieval-augmented generation"
    ],
    solutions: [
      "Developed document chunking algorithm for legal texts",
      "Built semantic search with similarity scoring"
    ],
    status: "Building",
    type: "Building",
    featured: false,
    projectOrder: 6
  },
  {
    id: "crm",
    title: "CRM",
    description: "Customer relationship management system",
    longDescription: "Customer management system with actions (SMS/email/call/meetings), timeline view per customer, and overall activity overview.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Twilio"],
    role: "Developer",
    challenges: [
      "Creating unified timeline view for customer interactions",
      "Integrating multiple communication channels"
    ],
    solutions: [
      "Built timeline component with activity grouping",
      "Implemented multi-channel communication APIs"
    ],
    status: "Building",
    type: "Building",
    featured: false,
    projectOrder: 7
  }
];