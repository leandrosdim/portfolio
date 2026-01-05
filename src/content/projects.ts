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
        title: "Login & Licensing",
        description: "Secure sign-in with license-based access control, ensuring only authorized users/devices can use the app."
      },
      {
        id: "mywms2",
        title: "Main Menu (Sales / Buys / Warehouse / Price Checker)",
        description: "Clear module-based navigation that maps directly to real warehouse workflows and reduces training time."
      },
      {
        id: "mywms3",
        title: "Admin Panel (PIN-Protected)",
        description: "Restricted admin area (PIN unlock) for sensitive operations like database maintenance, settings management, and system controls."
      },
      {
        id: "mywms4",
        title: "Connection & Storage Mode Settings (ERP + SQLite)",
        description: "Configurable connection to the ERP plus offline-first options, allowing operation under poor or unstable network conditions."
      },
      {
        id: "mywms5",
        title: "Orders List (Single-Order Flow)",
        description: "High-performance order list with quick search and status visibility, optimized for large volumes of documents."
      },
      {
        id: "mywms6",
        title: "Multi-Order Selection (Batch Picking)",
        description: "Batch picking mode to select multiple orders and process them efficiently, reducing walking time and improving throughput."
      },
      {
        id: "mywms7",
        title: "Filters / Date Range / Targeted Fetch",
        description: "Advanced filtering to quickly locate specific orders (by date range or criteria) and minimize noise in high-traffic environments."
      },
      {
        id: "mywms8",
        title: "Sync Choice (Local vs ERP)",
        description: "Flexible sync workflow: work locally (SQLite) and upload later, or work directly against the ERP for real-time operations."
      },
      {
        id: "mywms9",
        title: "Picking Screen (Scan-Driven Execution)",
        description: "Barcode-first picking screen: scan to match the correct line, update quantities instantly, and prevent wrong-item errors."
      },
      {
        id: "mywms10",
        title: "Visual Status Indicators (Complete / Overpicked / Pending)",
        description: "Color-coded line states that immediately communicate progress and exceptions (e.g., completed or over-picked) for faster decisions."
      },
      {
        id: "mywms11",
        title: "Line Actions / Quantity Edit Modal && Lot Handling (Expiry / Traceability)",
        description: "Fast line-level controls for editing quantity, printing labels and handling exceptions safely, without disrupting the primary scan flow.Lot selection with expiry/traceability support to ensure compliance and accurate stock validation per lot and location."
      },
      {
        id: "mywms12",
        title: "Price Checker (Scan-to-Info & Label Printing)",
        description: "Instant item lookup by barcode: retrieves live product details from the ERP and supports on-demand label printing at the point of use."
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