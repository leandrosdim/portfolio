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
        title: "City Trees Map Overview",
        description: "Interactive city map displaying all recorded trees, color-coded by species and scaled marker size based on tree dimensions, with a side panel showing key details for the selected tree."
      },
      {
        id: "greentree2",
        title: "Tree Detail View",
        description: "Comprehensive profile of a selected tree including location, biological data, condition, photographs, and QR code access for field identification."
      },
      {
        id: "greentree3",
        title: "Species Distribution Map",
        description: "Geospatial visualization showing the spatial distribution of a specific tree species across the city."
      },
      {
        id: "greentree4",
        title: "Tree Species Statistics by Municipal District",
        description: "Statistical breakdown of tree species counts per municipal district, presented in a comparative bar chart format."
      },
      {
        id: "greentree5",
        title: "Height, Diameter, and Canopy Statistics by Species",
        description: "Analytical dashboard presenting aggregated statistics for tree height, trunk diameter, and canopy spread per species using charts and detailed tables."
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
        title: "Home / Main Screen",
        description: "Central dashboard with persistent navigation and quick access to all LEADER modules and content."
      },
      {
        id: "leader2",
        title: "Programme Areas Catalogue",
        description: "Expandable regional directory listing all LEADER programme areas and their implementing bodies with key identifiers"
      },
      {
        id: "leader3",
        title: "Areas Map",
        description: "Interactive map visualizing LEADER coverage areas to explore programmes geographically with zoom and selection controls."
      },
      {
        id: "leader4",
        title: "Active Calls Catalogue",
        description: "Consolidated list of currently active LEADER calls, grouped by region, highlighting titles, agencies, and deadlines."
      },
      {
        id: "leader5",
        title: "Local Programme – Folder B",
        description: "Structured “Folder B” workspace with collapsible sections for strategy, interventions, financing, and annual planning."
      },
      {
        id: "leader6",
        title: "Folder B – Result Indicators",
        description: "Modal form for entering and reviewing yearly result indicator values per intervention in a focused, validated layout."
      },
      {
        id: "leader7",
        title: "Latest Approved Programmes",
        description: "Table view of all local programmes showing the latest approved edition, status, dates, and key metadata."
      },
      {
        id: "leader8",
        title: "Programme Editions Catalogue",
        description: "Version matrix that displays each programme’s editions across time with color-coded workflow status tracking."
      },
      {
        id: "leader9",
        title: "Version Comparison (Differences)",
        description: "Comparison subsystem that surfaces changes between current and previous programme editions with grouped, side-by-side values."
      }
    ]
  },
  {
    id: "anastasiasapp",
    title: "AnastasiasApp",
    description: "PWA for personal trainer scheduling and management",
    longDescription: "Role-based Progressive Web App for a personal trainer & clients - featuring schedule availability, customer bookings, statistics dashboard, customer cards, and financial overview.",
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
    projectOrder: 2,
    slides: [
      {
        id: "anastasia1",
        title: "Authentication (Login / Signup)",
        description: "Secure authentication system with role-based access using NextAuth and PostgreSQL."
      },
      {
        id: "anastasia2a",
        title: "🛠 Admin Role Sidebar Navigation",
        description: "Role-based admin navigation exposing management, scheduling, booking, and reporting features."
      }, {
        id: "anastasia2b",
        title: "👤 Customer Role Sidebar Navigation",
        description: "Simplified customer navigation focused on bookings, personal programs, and progress tracking."
      },

      {
        id: "anastasia3",
        title: "Customer Home Dashboard",
        description: "Personalized customer dashboard displaying upcoming sessions and available training options."
      },
      {
        id: "anastasia4",
        title: "Training Types – Details",
        description: "Detailed presentation of training programs with benefits and direct booking actions."
      },
      {
        id: "anastasia5",
        title: "Booking Calendar Flow",
        description: "Interactive booking flow allowing users to select date, training type, and time slot."
      },
      {
        id: "anastasia6",
        title: "Booking Confirmation",
        description: "Real-time booking confirmation with immediate reservation feedback."
      },
      {
        id: "anastasia7",
        title: "Customer Statistics",
        description: "Customer statistics dashboard showing training history and personal fitness metrics."
      },
      {
        id: "anastasia8",
        title: "Admin Dashboard & Analytics",
        description: "Administrative dashboard with advanced filters and monthly analytics for sessions and payments."
      },     
      {
        id: "anastasia9",
        title: "Customer Management (Admin)",
        description: "Comprehensive customer management with instant filtering and profile access."
      },
      {
        id: "anastasia10",
        title: "Customer Personal Card (Admin View)",
        description: "Centralized customer profile displaying full history of trainings, payments, and actions."
      },
      {
        id: "anastasia11",
        title: "Schedule Management (Admin)",
        description: "Admin-controlled scheduling system defining availability for customer bookings."
      },
      {
        id: "anastasia12",
        title: "Manual Booking & Session Completion",
        description: "Manual booking and session status management for real-world operational flexibility."
      },
    ],
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