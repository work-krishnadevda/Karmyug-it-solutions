import { ServiceItem, ProjectItem, TeamMember, Testimonial, FAQItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    iconName: 'Laptop',
    description: 'Custom software, scalable web platforms, and enterprise systems engineered for performance and growth.',
    longDescription: 'High-availability architecture built from the ground up to secure and power high-volume transactions.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    iconName: 'Megaphone',
    description: 'Data-driven marketing strategies designed to increase visibility, conversions, and long-term brand growth.',
    longDescription: 'Precision campaign scaling backed by dynamic funnel optimization to maximize customer lifetime values.'
  },
  {
    id: 'business-growth',
    title: 'Business Growth',
    iconName: 'TrendingUp',
    description: 'Automation, analytics, and smart workflows that help modern businesses scale efficiently.',
    longDescription: 'Optimize corporate operational efficiency through custom system integrations and clear ROI structures.'
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    iconName: 'Users',
    description: 'Tailored CRM pipelines and customer architectures engineered to optimize and accelerate your sales cycles.',
    longDescription: 'Lead scoring, communication logging, and visual pipes that empower sales reps to close deals faster.'
  },
  {
    id: 'hrms-development',
    title: 'HRMS Development',
    iconName: 'ClipboardSignature',
    description: 'Intelligent HR portals, tracking modules, and secure automated payroll systems for modern workforce management.',
    longDescription: 'Consolidate leave requests, compliance documents, and payroll structures into a secure unified platform.'
  },
  {
    id: 'erp-systems',
    title: 'ERP Systems',
    iconName: 'Network',
    description: 'Integrated resource planning networks that centralize your inventory, billing, finance, and operations.',
    longDescription: 'A single source of truth across warehouse locations, shipping lanes, and corporate ledger endpoints.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    iconName: 'Sparkles',
    description: 'Next-generation AI agents, secure workflows, and predictive analytics that reduce operations overhead.',
    longDescription: 'Deploy large language models, dynamic routing agents, and automatic classification of business data.'
  },
  {
    id: 'global-support',
    title: 'Global Support',
    iconName: 'Globe',
    description: 'Dedicated localization, regional content adaptation, and 24/7 technical assistance for global markets.',
    longDescription: 'Timezone-agnostic service delivery backed by CDN configurations and robust service level agreements.'
  },
  {
    id: 'web-app-development',
    title: 'Web & App Development',
    iconName: 'Code',
    description: 'Bespoke high-performance web and mobile interfaces built with modern frameworks and clean styling.',
    longDescription: 'Optimized server-side rendering, ultra-responsive grid layouts, and smooth micro-interactions.'
  },
  {
    id: 'brand-content',
    title: 'Brand & Content',
    iconName: 'PenTool',
    description: 'Cohesive brand identities and data-backed creative content strategies that build lasting authority.',
    longDescription: 'Distinct visual styles, logos, and high-converting editorial plans that command premium pricing.'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Always-on cloud infrastructures, automated deployment pipelines, and zero-downtime hosting.',
    longDescription: 'Docker containers, safe cloud configurations, and continuous deployment workflows (CI/CD).'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    iconName: 'ShieldCheck',
    description: 'Continuous compliance strategies, firewalls, and penetration auditing to secure mission-critical databases.',
    longDescription: 'Bank-grade database security, tokenized authorization channels, and thorough code audits.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'lal-sweets',
    title: 'Lal Sweets Ecom Website',
    category: 'E-COMMERCE',
    description: 'A modern sweets store with festive branding, smooth checkout, and mobile-first shopping experience.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Modern sweets store with festive UI and fast load times',
      'Category-wise product listings with filters and search',
      'Quick checkout with UPI, cards, and COD options',
      'SEO-friendly structure with schema markup for products'
    ]
  },
  {
    id: 'kirtilals',
    title: 'Kirtilals Luxury Website',
    category: 'JEWELRY & LIFESTYLE',
    description: 'Premium jewelry catalog with elegant typography, high-res galleries, and lead capture funnels.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Luxury look-and-feel with gold-accent design system',
      'High-resolution product galleries with zoom',
      'Appointment booking and WhatsApp lead integration',
      'Multi-language ready architecture for global buyers'
    ]
  },
  {
    id: 'medicare',
    title: 'MediCare Plus Portal',
    category: 'HEALTHCARE',
    description: 'Patient booking, digital records, and teleconsultation in one HIPAA-aware healthcare portal.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Online appointment scheduling with doctor profiles',
      'Secure patient dashboard for reports and history',
      'Teleconsultation video room integration',
      'Admin panel for clinics with role-based access'
    ]
  },
  {
    id: 'realtyhub',
    title: 'RealtyHub Properties',
    category: 'REAL ESTATE',
    description: 'Property listings with map search, virtual tours, and agent CRM hooks for real estate teams.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Interactive map-based property discovery',
      'Advanced filters for budget, location, and type',
      'Lead forms synced to agent dashboards',
      'Blog and SEO pages for local market dominance'
    ]
  },
  {
    id: 'fitlife',
    title: 'FitLife Studio',
    category: 'FITNESS & WELLNESS',
    description: 'Gym and wellness brand site with class schedules, trainer profiles, and membership plans.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Class timetable with online booking',
      'Trainer profiles with specializations',
      'Membership tier comparison and signup',
      'Before/after gallery and testimonial wall'
    ]
  },
  {
    id: 'spiceroute',
    title: 'SpiceRoute Restaurant',
    category: 'FOOD & HOSPITALITY',
    description: 'Restaurant website with digital menu, table reservations, and delivery partner integrations.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Dynamic menu with dietary tags and specials',
      'Table reservation with time-slot management',
      'Zomato/Swiggy order link integration',
      'Event catering inquiry forms'
    ]
  },
  {
    id: 'legalease',
    title: 'LegalEase Partners',
    category: 'LEGAL SERVICES',
    description: 'Professional law firm presence with practice areas, case studies, and confidential contact flows.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Practice area pages with expert bios',
      'Case study library with outcome highlights',
      'Secure client intake forms',
      'GDPR-compliant privacy and cookie controls'
    ]
  },
  {
    id: 'buildcraft',
    title: 'BuildCraft Infra',
    category: 'CONSTRUCTION',
    description: 'Construction company portfolio showcasing projects, certifications, and tender inquiries.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Project portfolio with timeline and budgets',
      'Certification and safety compliance showcase',
      'Tender and RFP submission portal',
      'Careers page with application tracking'
    ]
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust Travel Co.',
    category: 'TRAVEL & TOURISM',
    description: 'Travel agency with package builder, destination guides, and instant quote requests.',
    type: 'website',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Curated destination guides with itineraries',
      'Custom package quote calculator',
      'Customer review and rating system',
      'Newsletter and deal alert subscriptions'
    ]
  },
  {
    id: 'greenharvest',
    title: 'GreenHarvest Marketplace',
    category: 'AGRI-TECH',
    description: 'Farm-to-table marketplace connecting growers with distributors and retail buyers.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Farmer onboarding with crop catalogues',
      'Bulk order and logistics coordination',
      'Price analytics dashboard for buyers',
      'Mobile-responsive ordering for field agents'
    ]
  },
  {
    id: 'tradescribe',
    title: 'TradeScribe Platform',
    category: 'FINTECH',
    description: 'Trading analytics dashboard with real-time charts, portfolios, and secure user accounts.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Real-time market charts with custom indicators',
      'Portfolio tracking across multiple brokers',
      'Alerts and watchlists with push notifications',
      'Bank-grade encryption and 2FA login'
    ]
  },
  {
    id: 'eduspark',
    title: 'EduSpark LMS',
    category: 'EDTECH',
    description: 'Learning management system with live classes, assignments, quizzes, and progress analytics.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Live video classes with attendance tracking',
      'Assignment upload and automated grading hooks',
      'Student progress dashboards for parents',
      'Course marketplace for instructors'
    ]
  },
  {
    id: 'quickbill',
    title: 'QuickBill POS',
    category: 'SAAS / RETAIL',
    description: 'Point-of-sale and invoicing app for retail stores with inventory and GST billing.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Fast billing with barcode scanner support',
      'Inventory sync across multiple outlets',
      'GST-compliant invoice generation',
      'Daily sales reports and export to Excel'
    ]
  },
  {
    id: 'fleettrack',
    title: 'FleetTrack Logistics',
    category: 'LOGISTICS',
    description: 'Fleet management app with live GPS tracking, route optimization, and driver assignments.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Live GPS map with vehicle status',
      'Route optimization and fuel analytics',
      'Driver app for proof-of-delivery',
      'Maintenance reminders and trip history'
    ]
  },
  {
    id: 'mindcare',
    title: 'MindCare Wellness App',
    category: 'HEALTHCARE APP',
    description: 'Mental wellness app with mood tracking, guided sessions, and therapist booking.',
    type: 'application',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    bullets: [
      'Daily mood journal with insights',
      'Guided meditation and breathing modules',
      'Therapist discovery and session booking',
      'Anonymous community support groups'
    ]
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'vijay-kumar',
    name: 'Vijay Kumar',
    role: 'FOUNDER & CEO',
    description: 'Leads product vision and client strategy with 8+ years in IT consulting.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'HEAD OF MARKETING',
    description: 'Drives brand growth through data-led campaigns and creative storytelling.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'rahul-mehta',
    name: 'Rahul Mehta',
    role: 'LEAD DEVELOPER',
    description: 'Architects scalable web and cloud solutions for startups and enterprises.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'anita-desai',
    name: 'Anita Desai',
    role: 'UX & DESIGN LEAD',
    description: 'Crafts intuitive interfaces that convert visitors into loyal customers.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    text: 'Kamryug built our e-commerce platform from scratch. Sales doubled within three months of launch.',
    author: 'Rajesh Patel',
    company: 'Lal Sweets',
    stars: 5
  },
  {
    id: '2',
    text: 'Their design team understood our luxury brand perfectly. Online inquiries grew 4x after relaunch.',
    author: 'Sneha Reddy',
    company: 'Kirtilals Jewelry',
    stars: 5
  },
  {
    id: '3',
    text: 'Professional, fast, and always available. The fintech dashboard they delivered exceeded expectations.',
    author: 'Amit Joshi',
    company: 'TradeScribe',
    stars: 5
  },
  {
    id: '4',
    text: 'From planning to deployment, the process was smooth. Patients love the new booking experience.',
    author: 'Kavita Nair',
    company: 'MediCare Plus',
    stars: 5
  },
  {
    id: '5',
    text: 'The LMS handles 10,000+ students without a glitch. Kamryug is our long-term tech partner.',
    author: 'Arjun Malhotra',
    company: 'EduSpark',
    stars: 5
  },
  {
    id: '6',
    text: 'Marketplace UX is intuitive for farmers and buyers alike. Onboarding was seamless.',
    author: 'Deepa Iyer',
    company: 'GreenHarvest',
    stars: 5
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'q1',
    question: 'What does Kamryug IT Solution do?',
    answer: 'We build custom websites, web applications, CRM, HRMS, ERP systems, AI automation, and digital marketing strategies — helping businesses grow online and streamline operations.'
  },
  {
    id: 'q2',
    question: 'Do you build custom CRM and ERP software?',
    answer: 'Yes. We design and develop CRM, HRMS, and ERP platforms tailored to your industry — including lead management, payroll, inventory, finance modules, and reporting dashboards.'
  },
  {
    id: 'q3',
    question: 'What is AI automation and how can it help my business?',
    answer: 'AI automation uses smart workflows and tools to handle repetitive tasks — such as lead follow-ups, data entry, document processing, and customer queries — so your team focuses on high-value work.'
  },
  {
    id: 'q4',
    question: 'Who is Kamryug best suited for?',
    answer: 'Small businesses, e-commerce brands, healthcare clinics, ed-tech startups, and any company that needs a professional digital presence with real business results.'
  },
  {
    id: 'q5',
    question: 'Do you offer a free consultation before starting?',
    answer: 'Yes. We offer a free 30-minute discovery call to understand your goals, suggest the right services, and give a rough timeline and budget range — no obligation.'
  },
  {
    id: 'q6',
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely. We audit your current site, improve UX, refresh the design, and migrate content without losing SEO rankings where possible.'
  },
  {
    id: 'q7',
    question: 'Do you work with clients outside India?',
    answer: 'Yes. We serve clients globally with remote collaboration via video calls, shared project boards, and clear communication in English and Hindi.'
  }
];
