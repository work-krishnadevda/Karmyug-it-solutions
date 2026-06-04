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
    id: 'lal-sweet',
    title: 'ValuXpert Property Valuation Platform',
    category: 'E-COMMERCE',
    description: 'An enterprise-grade platform that streamlines property valuation workflows, field operations, employee management, reporting, and business intelligence from a single dashboard.',
    type: 'application',
    projecturl:"https://valuxpert-landing-page.vercel.app/",
    imageUrl: '/valuxpert.png',
    bullets: [
      'Automated case allocation, tracking, approvals, and TAT monitoring',
      'Mobile-enabled field inspections with GPS and photo verification',
      'HRMS, payroll, attendance, and workforce management tools',
      'Advanced MIS reporting, analytics, and operational insightsSEO-friendly structure with schema markup for products'
    ]
  },

  {
    id: 'medicare',
   title: 'HRMS Crane - Workforce Management System',
  category: 'HRMS / ENTERPRISE_SAAS',
  description:
    'A full-featured enterprise HRMS platform designed to manage employees, attendance, payroll, advances, and expenses with separate Admin and Staff workspaces, built on a modern Next.js architecture.',
  type: 'application',
projecturl:"https://karmyug-hrms.vercel.app/",
  imageUrl:"/hrms-crane-photo.png",
  bullets: [
    'Dual workspace system: Admin panel (/admin) and Staff portal (/employee)',
    'Secure authentication with Supabase email login and custom mobile HMAC session system',
    'Complete employee lifecycle management with roles, departments, and status control',
    'Advanced attendance system with GPS/photo punch-in, auto-close, and cron-based scheduling',
    'Payroll engine with attendance-based salary calculation and Excel export support',
    'Advance and expense management with approval, rejection, and reimbursement workflow',
    'Role-based access control with HR shell and admin workspace guards',
    'Scalable architecture using Next.js 15, Prisma, PostgreSQL, and Supabase',
    'Automated cron jobs for attendance closure and system reliability',
    'Comprehensive QA and testing matrix for production-grade stability'
  ]
  },
{
  id: 'quixivo',
  title: 'Quixivo Institute Management Platform',
  category: 'EDTECH / INSTITUTE MANAGEMENT',
  description: 'An all-in-one management platform designed for coaching institutes, schools, and educational organizations to streamline operations, student management, attendance, fees, communication, and online learning from a single dashboard.',
  type: 'application',
  imageUrl: '/quivo.png',
  projecturl:"https://quixivo.vercel.app/",
  bullets: [
    'Centralized dashboard to manage students, staff, batches, and academic operations',
    'Automated fee collection, payment tracking, reminders, and financial reporting',
    'Smart attendance management with real-time tracking and analytics',
    'Integrated live classes, online learning, recordings, and digital study resources',
    'Manage 3,000+ students efficiently with scalable infrastructure and role-based access',
    'Student and parent communication through notifications, announcements, and updates',
    'Performance tracking, examination management, and detailed academic reports',
    'Cloud-based platform with secure data storage and access from any device'
  ]
},

 {
  id: 'sagar-pet-care-center',
  title: 'Sagar Pet Care Center',
  category: 'PET CARE / VETERINARY SERVICES',
  description: 'A comprehensive pet care center offering dog boarding, grooming, training, veterinary care, vaccinations, emergency support, and pet wellness services for dogs and cats in Ratlam.',
  type: 'website',
  projecturl:"https://www.sagarpetcarecenter.in/",
  imageUrl: '/sagar-pet-shop.png',
  bullets: [
    'Safe and secure dog hostel with comfortable boarding facilities and 24/7 supervision',
    'Professional dog grooming services including bathing, haircuts, nail trimming, and hygiene care',
    'Expert dog training programs covering obedience, behavior correction, and puppy training',
    'Veterinary services for dogs and cats including treatment, health checkups, and consultations',
    'Complete vaccination programs and preventive healthcare for pets',
    '24/7 emergency pet care support with experienced pet care professionals',
    'Healthy puppies available with vaccination records and health certifications',
    'Pet wellness guidance, nutrition consultation, and long-term healthcare support'
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
    text: 'The ValuXpert platform transformed the way we manage property valuation operations. From automated case allocation to real-time field inspections and comprehensive MIS reporting, everything is now streamlined in one place. The system has significantly improved efficiency, transparency, and turnaround times across our organization.',
    author: '— Operations Head,',
    company: ' ValuXpert',
    stars: 5
  },
  {
    id: '2',
    text: 'HRMS Crane has completely modernized our workforce management process. Attendance tracking, payroll calculations, expense approvals, and employee management are now handled effortlessly through a single platform. The reliability, security, and ease of use have made it an essential part of our daily operations.',
    author: '— HR Director',
    company: 'HRMS Crane – Workforce Management System',
    stars: 5
  },
  {
    id: '3',
    text: "Managing thousands of students, staff, fees, and academic activities was challenging until we adopted Quixivo. The platform provides everything we need in one dashboard, from attendance and fee management to online learning and communication. It has helped us improve operational efficiency while delivering a better experience for students and parents.",
    author: '— Founder,',
    company: ' Educational Institute',
    stars: 5
  },
  {
    id: '4',
    text: "Our new website perfectly reflects the quality and care we provide to pets. It has made it easier for pet owners to learn about our services, book consultations, and connect with us. We've seen a noticeable increase in inquiries and customer trust since launching the platform.",
    author: '— Owner,',
    company: ' Sagar Pet Care Center',
    stars: 5
  },
  {
    id: '5',
    text: "The GPS-enabled field inspection system and automated approval workflows have dramatically reduced manual effort. Our teams can now track every case in real time and deliver reports faster than ever before.",
    author: '— Regional Operations Manager',
    company: 'ValuXpert',
    stars: 5
  },
  {
    id: '6',
    text: "What impressed us most was the seamless integration of attendance, advances, expenses, and payroll into one unified system. It has significantly improved our workforce management process.",
    author: '— Chief Operations Officer',
    company: 'HRMS Crane – Workforce Management System',
    stars: 5
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'q1',
    question: 'What does karmyug IT Solution do?',
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
    question: 'Who is karmyug best suited for?',
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
