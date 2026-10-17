export type ProjectCategory =
  | "All"
  | "Web Applications"
  | "Mobile Apps"
  | "Custom Software";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Web Application" | "Mobile App" | "Custom Software";
  filterCategory: "Web Applications" | "Mobile Apps" | "Custom Software";
  shortDescription: string;
  detailedOverview: string;
  challenge: string;
  solution: string;
  status: string;
  technologies: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "real-estate-platform",
    slug: "real-estate-platform",
    title: "Real Estate Platform",
    category: "Web Application",
    filterCategory: "Web Applications",
    shortDescription:
      "Property listings, search filters, buyer inquiries and an admin dashboard.",
    detailedOverview:
      "A premier real estate digital platform tailored for property discovery, scheduling in-person viewings, and managing broker portfolios. Designed for speed, responsive visual appeal, and conversion across both desktop and mobile viewports.",
    challenge:
      "Traditional real estate websites suffer from sluggish property filtering, slow photo loading, and disjointed inquiry forms that cause prospective buyers to drop off before reaching an agent.",
    solution:
      "We engineered a modern Next.js solution with instant client-side filtering, optimized progressive image loading, interactive neighborhood mapping, and an integrated agent lead dashboard.",
    status: "Live Production System",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Mapbox GL",
    ],
    keyFeatures: [
      {
        title: "Dynamic Filter Engine",
        description:
          "Instant filtering by price range, bedrooms, square footage, property category, and amenities without full page reloads.",
      },
      {
        title: "High-Resolution Image Galleries",
        description:
          "Responsive multi-angle image previews with optimized webp delivery and light-box virtual tours.",
      },
      {
        title: "Agent Scheduling & Inquiries",
        description:
          "Seamless lead capture forms that sync in real-time with agent notification channels and CRM records.",
      },
      {
        title: "Secure Admin Management",
        description:
          "Back-office dashboard for agents to publish new listings, review inquiries, and update property availability.",
      },
    ],
    metrics: [
      { label: "Page Load Speed", value: "< 0.8s" },
      { label: "Mobile Conversions", value: "+38%" },
      { label: "Listings Managed", value: "2,500+" },
    ],
  },
  {
    id: "ecommerce-store",
    slug: "ecommerce-store",
    title: "E-commerce Store",
    category: "Web Application",
    filterCategory: "Web Applications",
    shortDescription:
      "Product catalog, cart, checkout, order management and inventory tracking.",
    detailedOverview:
      "A modern, high-converting digital storefront built for a boutique apparel brand. Features lightning-fast product navigation, frictionless checkout, real-time stock sync, and a responsive shopping experience.",
    challenge:
      "High shopping cart abandonment during high-traffic product drops due to clunky multi-step checkouts and stock synchronization latency.",
    solution:
      "We built a headless commerce architecture with instant cart sliding drawer, single-page checkout integration, and automated inventory reservation to eliminate overselling.",
    status: "Live Production System",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Stripe API",
      "Redis",
      "PostgreSQL",
    ],
    keyFeatures: [
      {
        title: "Instant Predictive Search",
        description:
          "Search suggestions as you type with thumbnail previews and inventory status.",
      },
      {
        title: "Frictionless Cart & Drawer",
        description:
          "Optimistic cart updates with promo-code validation, free shipping progress bars, and one-tap checkout.",
      },
      {
        title: "Automated Inventory Tracking",
        description:
          "Real-time low-stock badges and webhook integrations with warehouse management systems.",
      },
      {
        title: "Order Tracking Portal",
        description:
          "Customer portal with live carrier tracking, invoice generation, and return management.",
      },
    ],
    metrics: [
      { label: "Cart Abandonment", value: "-24%" },
      { label: "Checkout Completion", value: "98.2%" },
      { label: "Uptime During Drops", value: "99.99%" },
    ],
  },
  {
    id: "business-management-system",
    slug: "business-management-system",
    title: "Business Management System",
    category: "Web Application",
    filterCategory: "Custom Software",
    shortDescription:
      "Dashboard, user management, reporting and automated workflows.",
    detailedOverview:
      "A centralized enterprise management portal consolidating business analytics, client invoicing, employee role permissions, and cross-department operational workflows into a single unified workspace.",
    challenge:
      "The client relied on disparate spreadsheets and disconnected tools, spending over 15 hours per week manually reconciling records and tracking project deliverables.",
    solution:
      "Designed and deployed a comprehensive software system featuring customizable analytics widgets, automated invoice reminders, role-based security, and webhook integrations.",
    status: "Production Ready",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
    keyFeatures: [
      {
        title: "Executive KPI Dashboard",
        description:
          "Real-time gauges for monthly recurring revenue, operational expenses, and team billable hours.",
      },
      {
        title: "Role-Based Permissions",
        description:
          "Granular access control dividing admin, finance, manager, and contractor permissions.",
      },
      {
        title: "Automated Invoicing Engine",
        description:
          "Scheduled recurring PDF invoices, tax calculation, and automated payment overdue reminders.",
      },
      {
        title: "Audit Logs & Activity Feeds",
        description:
          "Tamper-proof chronological logging of every critical modification and data export.",
      },
    ],
    metrics: [
      { label: "Admin Hours Saved", value: "15 hrs/wk" },
      { label: "Report Generation", value: "Instant" },
      { label: "Data Accuracy", value: "100%" },
    ],
  },
  {
    id: "fitness-mobile-app",
    slug: "fitness-mobile-app",
    title: "Fitness Mobile App",
    category: "Mobile App",
    filterCategory: "Mobile Apps",
    shortDescription:
      "Daily workout tracking, heart-rate analytics, telemetry and structured training programs.",
    detailedOverview:
      "A sleek, tactile mobile fitness application providing personalized training regimens, real-time biometric metrics, rest interval timers, and interactive progress rings.",
    challenge:
      "Gym users needed an app that could be used seamlessly with one hand while lifting, without clunky menus or requiring constant internet connectivity.",
    solution:
      "Engineered an offline-first mobile app featuring high-contrast dark mode, large touch targets, haptic feedback on rep completion, and background biometric sync.",
    status: "Production Ready",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "HealthKit",
      "Supabase",
    ],
    keyFeatures: [
      {
        title: "One-Tap Workout Logger",
        description:
          "Large numerical touch controls for logging weights and reps in seconds during rest periods.",
      },
      {
        title: "Visual Progress Rings",
        description:
          "Daily active calories, workout duration, and weekly target progress rings inspired by modern telemetry.",
      },
      {
        title: "Offline-First Sync Engine",
        description:
          "Complete local SQLite caching that synchronizes transparently when mobile reception resumes.",
      },
      {
        title: "Personalized Program Builder",
        description:
          "Customizable split routines with exercise demonstration animations and rest timer alerts.",
      },
    ],
    metrics: [
      { label: "Daily Active Retention", value: "72%" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Offline Sync Rate", value: "100%" },
    ],
  },
];
