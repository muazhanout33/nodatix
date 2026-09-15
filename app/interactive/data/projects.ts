export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  tags: string[];
  interactiveUrl: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  capabilities: string[];
  workflowSteps: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "crm-erp",
    title: "Scalary X — CRM + ERP Systems",
    shortDescription:
      "Custom CRM + ERP systems built around your business. Leads, deals, inventory, orders, invoices, and payments — one connected workflow.",
    icon: "📊",
    tags: ["CRM", "ERP", "Automation"],
    interactiveUrl: "/interactive/projects/crm-erp/index.html",
    category: "Business Automation",
    problem:
      "Most companies track leads in notebooks or WhatsApp, invoice from Excel, and follow stock on paper. Every deal that closes gets re-typed somewhere else — and things fall through the cracks. Double data entry, slow invoicing, cash-flow blindness, stock surprises, lost follow-ups, and manual reports waste hours every week.",
    solution:
      "A custom CRM + ERP system connected to your business — leads, deals, inventory, orders, invoices, and payments flowing in one connected workflow, from first contact to collected payment. When a deal is won, the order is created, the invoice is generated, the payment is tracked, and management dashboards update — automatically.",
    features: [
      "Sales & Pipeline management with deal stages, values, and owners",
      "Customer 360 — full profile with entire relationship history",
      "Invoicing & Payments — auto-generated from closed deals",
      "Inventory & Suppliers — live stock levels with low-stock alerts",
      "Automation — deal won triggers order, invoice, and stock updates",
      "Reports & AI — sales dashboards, receivables, and AI assistant",
    ],
    technologies: [
      "Custom CRM/ERP",
      "n8n Automation",
      "AI Integration",
      "Real-time Dashboards",
    ],
    capabilities: [
      "Lead capture and qualification",
      "Deal pipeline with stages and values",
      "Automatic order and invoice creation",
      "Inventory tracking with alerts",
      "Payment status management",
      "Management reporting dashboards",
    ],
    workflowSteps: [
      "Lead",
      "Customer",
      "Deal",
      "Order",
      "Invoice",
      "Payment",
      "Reports",
    ],
  },
  {
    slug: "ai-clinic-automation",
    title: "AI-Powered Clinic Automation System",
    shortDescription:
      "AI-driven clinic automation: patient intake, appointment booking, CRM, follow-up, and multi-channel communication — fully automated.",
    icon: "🏥",
    tags: ["AI", "Clinic", "Healthcare"],
    interactiveUrl: "/interactive/projects/ai-clinic-automation/index.html",
    category: "Healthcare Automation",
    problem:
      "Patients usually contact more than one clinic before deciding where to book. When every reply is fully manual, the clinic that replies fastest wins. Staff availability is limited to working hours, repeated questions consume team time, conversations slip through during peak hours, and patient data is scattered across chats.",
    solution:
      "An AI-powered clinic automation system that answers patients, captures their data, manages their appointments, organizes every conversation, and follows up after treatment — with no manual work. The system connects to WhatsApp, Instagram, Telegram, Snapchat, and TikTok through a unified automation layer.",
    features: [
      "Smart AI reception — instant replies around the clock",
      "Automatic patient data capture and CRM records",
      "Appointment booking workflow with slot selection",
      "Post-visit follow-up automation (Day 1, 3, 14, and beyond)",
      "Multi-channel integration (WhatsApp, Telegram, Instagram, etc.)",
      "Interactive patient journey walkthrough",
    ],
    technologies: [
      "AI Chatbot",
      "Telegram Bot",
      "WhatsApp Integration",
      "CRM System",
      "n8n Automation",
    ],
    capabilities: [
      "24/7 patient intake and qualification",
      "Automatic patient record creation",
      "Appointment scheduling and confirmation",
      "Post-visit follow-up messaging",
      "Multi-channel communication hub",
      "Human handoff for complex cases",
    ],
    workflowSteps: [
      "Patient Contact",
      "Instant Reply",
      "Data Capture",
      "CRM",
      "Booking",
      "Follow-up",
    ],
  },
  {
    slug: "ai-research-automation",
    title: "AI Research Automation System",
    shortDescription:
      "Automate research workflows: video processing, PDF analysis, web research, and organized document generation — all in one AI pipeline.",
    icon: "🔬",
    tags: ["AI", "Research", "Automation"],
    interactiveUrl: "/interactive/projects/ai-research-automation/index.html",
    category: "Research Automation",
    problem:
      "Researchers spend hours opening video after video, searching for transcripts, writing notes, reading long files, extracting numbers, comparing information, and formatting final documents. The problem isn't just the research itself — it's all the time lost organizing and synthesizing scattered information.",
    solution:
      "An AI automation workflow that collects content, extracts key information, organizes it, and generates ready-to-use documents. Instead of using different tools for every step, the system combines core research phases in one place: input, extraction, AI analysis, web research, organization, and output to Google Docs.",
    features: [
      "Video processing — extract concepts and key information from playlists",
      "PDF analysis — analyze research structure and extract results",
      "Web source research — find and rank reliable sources automatically",
      "Knowledge organization — structured, academically formatted documents",
      "Google Docs integration — output directly to usable documents",
      "Customizable workflows for different research needs",
    ],
    technologies: [
      "Google Gemini",
      "Perplexity Sonar",
      "YouTube Data API",
      "Google Docs",
      "Google Drive",
      "n8n Automation",
    ],
    capabilities: [
      "Video content extraction and summarization",
      "PDF structure analysis and data extraction",
      "Automated web source discovery",
      "Cross-source information comparison",
      "Document generation and formatting",
      "Integration with Google Workspace",
    ],
    workflowSteps: [
      "Input",
      "AI Processing",
      "Research",
      "Analysis",
      "Organized Docs",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
