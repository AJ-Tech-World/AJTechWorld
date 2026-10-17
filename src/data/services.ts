export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  iconName: "Monitor" | "Smartphone" | "Layers" | "Cloud";
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    iconName: "Monitor",
    shortDescription:
      "Business websites, landing pages, e-commerce stores and custom web applications.",
    detailedDescription:
      "Modern, responsive and SEO-friendly websites for businesses of all sizes.",
    features: [
      "Business Websites",
      "E-commerce Stores",
      "Landing Pages",
      "Admin Panels",
    ],
    deliverables: [
      "Responsive UI/UX design optimized for all screen sizes",
      "Next.js and React high-performance architecture",
      "Search Engine Optimization (SEO) and speed optimization",
      "Content Management System (CMS) integration",
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    iconName: "Smartphone",
    shortDescription:
      "Android and iOS applications for startups, businesses and enterprise needs.",
    detailedDescription:
      "High-quality Android and iOS applications with great user experience.",
    features: [
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps",
      "App Maintenance",
    ],
    deliverables: [
      "Native & cross-platform React Native / Flutter apps",
      "Fluid 60fps animations and offline-first capabilities",
      "Push notifications and real-time backend synchronization",
      "App Store & Google Play Store submission and compliance",
    ],
  },
  {
    id: "custom-software",
    slug: "custom-software",
    title: "Custom Software",
    iconName: "Layers",
    shortDescription:
      "Business management systems, CRM, dashboards and workflow automation.",
    detailedDescription:
      "Tailored software solutions to streamline your business operations.",
    features: [
      "CRM Systems",
      "Dashboards & Analytics",
      "Workflow Automation",
      "API Integrations",
    ],
    deliverables: [
      "Role-based access control and secure authentication",
      "Custom business dashboards and interactive data reporting",
      "Automated notification triggers and third-party webhooks",
      "Scalable relational & document database architectures",
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    iconName: "Cloud",
    shortDescription:
      "Deployment, infrastructure setup, performance optimization and ongoing support.",
    detailedDescription:
      "Reliable deployment, monitoring and long-term support.",
    features: [
      "Cloud Deployment",
      "CI/CD Setup",
      "Performance Optimization",
      "Ongoing Support",
    ],
    deliverables: [
      "AWS, Google Cloud, and Vercel infrastructure setup",
      "Automated continuous integration and deployment pipelines",
      "Zero-downtime database migrations and automated backups",
      "24/7 uptime monitoring, alerting, and security hardening",
    ],
  },
];
