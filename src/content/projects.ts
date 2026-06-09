export interface IProject {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  role: string;
  challenge: string;
  solution: string;
  results: string[];
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
    frame?: "phone" | "desktop";
  }[];
}

export const projects: IProject[] = [
  {
    id: "leader",
    title: "LEADER-EL",
    description:
      "Large web platform for submitting and reviewing EU LEADER program applications.",
    longDescription:
      "A comprehensive web platform enabling institutions to submit, review, and iterate on EU LEADER program applications. Designed to streamline the complex workflow between applicants and reviewing bodies, driving compliance and reducing administrative overhead across multiple regions and programme areas.",
    category: "Enterprise Platform",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    role: "Full-Stack Developer",
    challenge:
      "Managing complex multi-step application review workflows with version control, role-based access, and iterative compliance tracking across multiple institutions.",
    solution:
      "Implemented role-based access control, iterative review system with versioning, and version comparison tools that surface changes between programme editions.",
    results: [
      "Streamlined application workflows for multiple regions",
      "Reduced compliance review cycles with version tracking",
      "Enabled side-by-side version comparison",
    ],
    url: "https://leader-el.gr/",
    status: "Live",
    type: "Web",
    featured: true,
    projectOrder: 1,
    slides: [
      {
        id: "leader1",
        title: "Home / Main Screen",
        description:
          "Central dashboard with persistent navigation and quick access to all LEADER modules and content.",
      },
      {
        id: "leader2",
        title: "Programme Areas Catalogue",
        description:
          "Expandable regional directory listing all LEADER programme areas and their implementing bodies with key identifiers.",
      },
      {
        id: "leader3",
        title: "Areas Map",
        description:
          "Interactive map visualizing LEADER coverage areas to explore programmes geographically with zoom and selection controls.",
      },
      {
        id: "leader4",
        title: "Active Calls Catalogue",
        description:
          "Consolidated list of currently active LEADER calls, grouped by region, highlighting titles, agencies, and deadlines.",
      },
      {
        id: "leader5",
        title: "Local Programme – Folder B",
        description:
          'Structured "Folder B" workspace with collapsible sections for strategy, interventions, financing, and annual planning.',
      },
      {
        id: "leader6",
        title: "Folder B – Result Indicators",
        description:
          "Modal form for entering and reviewing yearly result indicator values per intervention in a focused, validated layout.",
      },
      {
        id: "leader7",
        title: "Latest Approved Programmes",
        description:
          "Table view of all local programmes showing the latest approved edition, status, dates, and key metadata.",
      },
      {
        id: "leader8",
        title: "Programme Editions Catalogue",
        description:
          "Version matrix that displays each programme's editions across time with color-coded workflow status tracking.",
      },
      {
        id: "leader9",
        title: "Version Comparison (Differences)",
        description:
          "Comparison subsystem that surfaces changes between current and previous programme editions with grouped, side-by-side values.",
      },
    ],
  },
  {
    id: "mywms",
    title: "MyWMS",
    description:
      "Warehouse Management System for Android — scanning workflows, picking, and large-order handling.",
    longDescription:
      "A mobile-first warehouse management system built for warehouse operators working with rugged handheld devices. Features barcode-first scanning workflows, batch picking, offline-first architecture, and real-time ERP synchronization — designed to maximize throughput and minimize errors in demanding warehouse environments.",
    category: "Mobile Application",
    technologies: ["React Native", "Android", "SQLite", "ERP-API", "Expo GO"],
    role: "Lead Developer",
    challenge:
      "Optimizing performance and usability on older Android devices in warehouse environments with limited or unstable connectivity.",
    solution:
      "Implemented offline-first architecture with local SQLite caching, configurable sync modes (local vs. ERP), and touch-optimized UI for gloved operation.",
    results: [
      "Reduced picking errors with barcode-first scanning",
      "Enabled continuous operation offline with sync-on-demand",
      "Optimized for rugged handheld hardware",
    ],
    status: "Live",
    type: "Mobile",
    featured: true,
    projectOrder: 2,
    slides: [
      {
        id: "mywms1",
        title: "Login & Licensing",
        description:
          "Secure sign-in with license-based access control, ensuring only authorized users/devices can use the app.",
        frame: "phone",
      },
      {
        id: "mywms2",
        title: "Main Menu (Sales / Buys / Warehouse / Price Checker)",
        description:
          "Clear module-based navigation that maps directly to real warehouse workflows and reduces training time.",
        frame: "phone",
      },
      {
        id: "mywms3",
        title: "Admin Panel (PIN-Protected)",
        description:
          "Restricted admin area (PIN unlock) for sensitive operations like database maintenance, settings management, and system controls.",
        frame: "phone",
      },
      {
        id: "mywms4",
        title: "Connection & Storage Mode Settings (ERP + SQLite)",
        description:
          "Configurable connection to the ERP plus offline-first options, allowing operation under poor or unstable network conditions.",
        frame: "phone",
      },
      {
        id: "mywms5",
        title: "Orders List (Single-Order Flow)",
        description:
          "High-performance order list with quick search and status visibility, optimized for large volumes of documents.",
        frame: "phone",
      },
      {
        id: "mywms6",
        title: "Multi-Order Selection (Batch Picking)",
        description:
          "Batch picking mode to select multiple orders and process them efficiently, reducing walking time and improving throughput.",
        frame: "phone",
      },
      {
        id: "mywms7",
        title: "Filters / Date Range / Targeted Fetch",
        description:
          "Advanced filtering to quickly locate specific orders (by date range or criteria) and minimize noise in high-traffic environments.",
        frame: "phone",
      },
      {
        id: "mywms8",
        title: "Sync Choice (Local vs ERP)",
        description:
          "Flexible sync workflow: work locally (SQLite) and upload later, or work directly against the ERP for real-time operations.",
        frame: "phone",
      },
      {
        id: "mywms9",
        title: "Picking Screen (Scan-Driven Execution)",
        description:
          "Barcode-first picking screen: scan to match the correct line, update quantities instantly, and prevent wrong-item errors.",
        frame: "phone",
      },
      {
        id: "mywms10",
        title: "Visual Status Indicators (Complete / Overpicked / Pending)",
        description:
          "Color-coded line states that immediately communicate progress and exceptions (e.g., completed or over-picked) for faster decisions.",
        frame: "phone",
      },
      {
        id: "mywms11",
        title: "Line Actions / Quantity Edit Modal & Lot Handling (Expiry / Traceability)",
        description:
          "Fast line-level controls for editing quantity, printing labels and handling exceptions safely, without disrupting the primary scan flow. Lot selection with expiry/traceability support.",
        frame: "phone",
      },
      {
        id: "mywms12",
        title: "Price Checker (Scan-to-Info & Label Printing)",
        description:
          "Instant item lookup by barcode: retrieves live product details from the ERP and supports on-demand label printing at the point of use.",
        frame: "phone",
      },
    ],
  },
  {
    id: "anastasiasapp",
    title: "AnastasiasApp",
    description:
      "PWA for personal trainer scheduling, bookings, and business management.",
    longDescription:
      "A role-based Progressive Web App for personal trainers and their clients — featuring schedule availability management, real-time customer bookings, a comprehensive statistics dashboard, customer cards, and financial overview. Built to give trainers full operational control from a single platform.",
    category: "SaaS Product",
    technologies: ["Next.js", "TypeScript", "PWA", "PostgreSQL"],
    role: "Full-Stack Developer",
    challenge:
      "Creating a seamless booking experience for clients while building comprehensive analytics and management dashboards for trainers.",
    solution:
      "Implemented real-time availability calendar with role-based views, interactive data visualization components, and financial reporting dashboards.",
    results: [
      "Streamlined booking workflows for trainer and clients",
      "Provided full financial and operational visibility",
      "Delivered a production-ready PWA on mobile and desktop",
    ],
    url: "https://anastasiasapp.com/",
    status: "Live",
    type: "Web",
    featured: true,
    projectOrder: 3,
    slides: [
      {
        id: "anastasia1",
        title: "Authentication (Login / Signup)",
        description:
          "Secure authentication system with role-based access using NextAuth and PostgreSQL.",
        frame: "phone",
      },
      {
        id: "anastasia2a",
        title: "Admin Role Sidebar Navigation",
        description:
          "Role-based admin navigation exposing management, scheduling, booking, and reporting features.",
        frame: "desktop",
      },
      {
        id: "anastasia2b",
        title: "Customer Role Sidebar Navigation",
        description:
          "Simplified customer navigation focused on bookings, personal programs, and progress tracking.",
        frame: "phone",
      },
      {
        id: "anastasia3",
        title: "Customer Home Dashboard",
        description:
          "Personalized customer dashboard displaying upcoming sessions and available training options.",
        frame: "phone",
      },
      {
        id: "anastasia4",
        title: "Training Types – Details",
        description:
          "Detailed presentation of training programs with benefits and direct booking actions.",
        frame: "phone",
      },
      {
        id: "anastasia5",
        title: "Booking Calendar Flow",
        description:
          "Interactive booking flow allowing users to select date, training type, and time slot.",
        frame: "phone",
      },
      {
        id: "anastasia6",
        title: "Booking Confirmation",
        description:
          "Real-time booking confirmation with immediate reservation feedback.",
        frame: "phone",
      },
      {
        id: "anastasia7",
        title: "Customer Statistics",
        description:
          "Customer statistics dashboard showing training history and personal fitness metrics.",
        frame: "phone",
      },
      {
        id: "anastasia8",
        title: "Admin Dashboard & Analytics",
        description:
          "Administrative dashboard with advanced filters and monthly analytics for sessions and payments.",
        frame: "desktop",
      },
      {
        id: "anastasia9",
        title: "Customer Management (Admin)",
        description:
          "Comprehensive customer management with instant filtering and profile access.",
        frame: "desktop",
      },
      {
        id: "anastasia10",
        title: "Customer Personal Card (Admin View)",
        description:
          "Centralized customer profile displaying full history of trainings, payments, and actions.",
        frame: "desktop",
      },
      {
        id: "anastasia11",
        title: "Schedule Management (Admin)",
        description:
          "Admin-controlled scheduling system defining availability for customer bookings.",
        frame: "desktop",
      },
      {
        id: "anastasia12",
        title: "Manual Booking & Session Completion",
        description:
          "Manual booking and session status management for real-world operational flexibility.",
        frame: "desktop",
      },
       {
        id: "anastasia13",
        title: "In-App Camera & Session Capture",
        description: "Built-in camera integration for capturing session photos and training moments",
        frame: "phone",
      },
    ],
  },
  {
    id: "greentree",
    title: "GreenTree Thessaloniki",
    description:
      "Web app for recording and visualizing urban tree data on interactive maps.",
    category: "Data Platform",
    longDescription:
      "A web application for recording and managing tree data in urban areas with interactive mapping, species distribution visualization, and statistical analysis dashboards. Built the user-facing form and data entry workflow that enables field workers to efficiently capture and categorize tree data.",
    technologies: ["React", "TypeScript", "PostgreSQL", "Mapbox"],
    role: "Frontend Developer",
    challenge:
      "Creating an intuitive data entry interface for field workers while integrating map functionality with data collection.",
    solution:
      "Designed mobile-responsive forms with validation and implemented interactive map with data visualization for geospatial analysis.",
    results: [
      "Streamlined field data collection workflows",
      "Enabled geospatial visualization of urban tree data",
      "Provided analytical dashboards for decision-making",
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
        description:
          "Interactive city map displaying all recorded trees, color-coded by species and scaled marker size based on tree dimensions, with a side panel showing key details for the selected tree.",
        frame: "desktop",
      },
      {
        id: "greentree2",
        title: "Tree Detail View",
        description:
          "Comprehensive profile of a selected tree including location, biological data, condition, photographs, and QR code access for field identification.",
        frame: "phone",
      },
      {
        id: "greentree3",
        title: "Species Distribution Map",
        description:
          "Geospatial visualization showing the spatial distribution of a specific tree species across the city.",
        frame: "desktop",
      },
      {
        id: "greentree4",
        title: "Tree Species Statistics by Municipal District",
        description:
          "Statistical breakdown of tree species counts per municipal district, presented in a comparative bar chart format.",
        frame: "desktop",
      },
      {
        id: "greentree5",
        title: "Height, Diameter, and Canopy Statistics by Species",
        description:
          "Analytical dashboard presenting aggregated statistics for tree height, trunk diameter, and canopy spread per species using charts and detailed tables.",
        frame: "desktop",
      },
    ],
  },
  {
    id: "multi-agent",
    title: "Multi Agent",
    description:
      "Multi-agent AI platform with chat, image generation, PDF analysis, and project management.",
    category: "AI Platform",
    longDescription:
      "A multi-agent application integrated with OpenAI APIs, featuring conversational AI, image generation from prompts, PDF document analysis, lightweight project management, and web search capabilities. Designed as a demonstration of multi-agent orchestration and AI product architecture.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "PDF.js"],
    role: "Developer",
    challenge:
      "Orchestrating multiple AI agents with different capabilities while ensuring efficient API usage, cost control, and coherent user experience.",
    solution:
      "Implemented agent orchestration system with specialized modules, cost monitoring, and a centralized dashboard for managing multiple AI workflows.",
    results: [
      "Demonstrated multi-agent AI architecture",
      "Integrated multiple AI capabilities in a single platform",
      "Showcased product-grade AI application design",
    ],
    url: "https://multi-agent-omega.vercel.app/",
    status: "Live",
    type: "Web",
    featured: false,
    projectOrder: 5,
    slides: [
      {
        id: "Main menu",
        title: "App Dashboard (Feature Overview)",
        description:
          "A modern, centralized menu that presents all app modules with a clean, production-style UI.",
        frame: "desktop",
      },
      {
        id: "voice agent",
        title: "Voice Agent (Mic-Enabled AI)",
        description:
          "A voice-enabled agent interface where users speak via microphone and control behavior through custom system instructions.",
        frame: "phone",
      },
      {
        id: "project_manager",
        title: "AI Project Manager (Scope & Time Estimation)",
        description:
          "An AI assistant that analyzes a project brief, breaks it into actionable tasks, and estimates time per phase.",
        frame: "phone",
      },
      {
        id: "image_studio_ai",
        title: "AI Image Studio (Prompt-to-Image)",
        description:
          "A prompt-to-image workspace that generates visuals from user prompts using an AI image model.",
        frame: "phone",
      },
      {
        id: "web search agent",
        title: "Web Search Agent (Live Research Chat)",
        description:
          "A chat agent that performs web searches and responds with synthesized answers based on online sources.",
        frame: "phone",
      },
      {
        id: "pdf_analyzer",
        title: "PDF Analyzer (Document Q&A)",
        description:
          "A PDF chat tool that accepts file uploads and enables summarization and question answering over document content.",
        frame: "phone",
      },
      {
        id: "chat_with_answer_3rows",
        title: "Concise Chat Mode (3-Line Answers)",
        description:
          "A chat experience optimized for speed and clarity, limiting responses to a maximum of three lines.",
        frame: "desktop",
      },
      {
        id: "Pricing Plan",
        title: "Pricing Page (Demo UI)",
        description:
          "A playful pricing-plan page included to complete the product feel and demonstrate real-world app structure.",
        frame: "desktop",
      },
    ],
  },
  {
    id: "price-checker",
    title: "Price Checker",
    description:
      "Android app for in-store price verification with licensing and retailer dashboard.",
    category: "Mobile Application",
    longDescription:
      "An Android application for Zebra handheld devices that allows customers to scan items in-store to check prices and discounts. Features a licensing system and retailer dashboard for managing budgets and device access — designed specifically for retail environments.",
    technologies: [
      "React Native",
      "Android",
      "Zebra Devices",
      "Licensing System",
    ],
    role: "Lead Developer",
    challenge:
      "Optimizing for Zebra handheld hardware while implementing a secure licensing and budget management system for retailers.",
    solution:
      "Built device-specific optimizations for Zebra hardware and developed a robust licensing and budget management system for multi-retailer deployments.",
    results: [
      "Enabled instant in-store price verification",
      "Deployed secure licensing for multi-retailer environments",
      "Optimized for Zebra handheld hardware",
    ],
    status: "Live",
    type: "Mobile",
    featured: false,
    projectOrder: 6,
    slides: [
      {
        id: "pricechecker1",
        title: "Scan Input with Logo Management",
        description:
          "Retailers can set logo and let their customers scan to find the price of the items.",
        frame: "desktop",
      },
      {
        id: "pricechecker2",
        title: "Item Scan Interface",
        description:
          "Simple scanning interface that allows customers to quickly check prices and view product information.",
        frame: "desktop",
      },
      {
        id: "pricechecker3",
        title: "Price & Discount Display",
        description:
          "Clear display of current prices, discounts, and promotional information for scanned items.",
        frame: "desktop",
      },
    ],
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Customer relationship management with multi-channel actions and timeline views.",
    category: "Business Application",
    longDescription:
      "A customer relationship management system enabling SMS, email, call, and meeting actions per customer. Features a unified timeline view per customer, overall activity overview, and analytics dashboards — designed to give businesses complete visibility into customer relationships and interactions.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Twilio"],
    role: "Developer",
    challenge:
      "Creating unified timeline views for customer interactions while integrating multiple communication channels into a single interface.",
    solution:
      "Built timeline component with activity grouping and implemented multi-channel communication APIs with centralized customer tracking.",
    results: [
      "Unified multi-channel customer interactions",
      "Complete timeline view per customer",
      "Activity overview across all relationships",
    ],
    status: "Building",
    type: "Building",
    featured: false,
    projectOrder: 7,
    slides: [
      {
        id: "under_construction",
        title: "Under Construction (Coming Soon)",
        description:
          "This feature is currently in development, and a polished version will be available in a future update.",
      },
    ],
  },
  {
    id: "law-agent",
    title: "Law Agent",
    description:
      "Legal document analysis with vector database and retrieval-augmented answers.",
    category: "AI Solution",
    longDescription:
      "An application for uploading law PDFs, chunking and embedding content into a vector database, and asking legal questions with retrieval-augmented answers. Designed to make legal research more efficient by combining document processing, chunking, embeddings, and similarity search into a single workflow.",
    technologies: ["Next.js", "TypeScript", "Vector DB", "Embeddings"],
    role: "Developer",
    challenge:
      "Processing and chunking legal documents effectively while implementing accurate retrieval-augmented generation for legal queries.",
    solution:
      "Developed specialized document chunking algorithm for legal texts and built semantic search with similarity scoring for precise answer retrieval.",
    results: [
      "Automated legal document processing",
      "Enabled semantic search across legal texts",
      "Retrieval-augmented answers for legal queries",
    ],
    status: "Building",
    type: "Building",
    featured: false,
    projectOrder: 8,
    slides: [
      {
        id: "under_construction",
        title: "Under Construction (Coming Soon)",
        description:
          "This feature is currently in development, and a polished version will be available in a future update.",
      },
    ],
  },
];