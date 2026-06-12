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
    id: 'Shubham Pandey',
    name: 'Shubham Pandey',
    role: 'co-founder | CEO',
    description: 'Drives strategic decisions, balances priorities, and keeps every effort aligned with goals.',
    imageUrl: '/8.jpg',
    linkedinUrl:"https://www.linkedin.com/in/shubham-pandey-cofounder",
  },
    {
    id: 'krishna Singh Devda',
    name: 'krishna Singh Devda',
    role: 'Co - Founder | Full Stack Product Engineer',
    description: 'Diagnoses issues quickly and delivers reliable solutions that keep projects moving forward.',
    imageUrl: '/4.jpg',
    linkedinUrl:"https://www.linkedin.com/in/krishna-singh-devda",
  },
  {
    id: 'Vijay Singh Sisodiya',
    name: 'Vijay Singh Sisodiya',
    role: 'Forward Deployed Engineer',
    description: 'Adaptable professional who contributes across multiple domains and handles diverse challenges confidently.',
    imageUrl: '/7.jpg',
    linkedinUrl:"https://www.linkedin.com/in/vijay-singh-b97469369",
  },
    {
    id: 'ashish pandey',
    name: 'Ashish Pandey',
    role: ' Director of Creative & Digital Media',
    description: 'Transforms setbacks into strength, facing challenges fearlessly and emerging stronger every time.',
    imageUrl: '/9.jpg',
    linkedinUrl:"https://www.linkedin.com/in/aashishpandeycreative"
  },
    {
    id: 'tamanna parihar',
    name: 'Tamanna Parihar',
    role: 'HR Manager',
    description: 'Finds great people, unlocks potential, and helps every team member bring their best forward.',
    imageUrl: '/tamanhHR.png',
    linkedinUrl:"https://www.linkedin.com/in/tamanna-parihar-768461403",
  },
  
  {
    id: 'Dharmraj-patidar',
    name: 'Dharmraj patidar',
    role: 'junior Java Script Developer',
    description: 'Focused on action, solving problems efficiently and delivering fixes without unnecessary discussion.',
    imageUrl: '/1.jpg',
    linkedinUrl:"https://www.linkedin.com/in/dharmarajpatidar"
  },
  {
    id: 'deepak keer',
    name: 'Deepak keer',
    role: 'junior Java Script Developer',
    description: "Always exploring, learning, and discovering valuable knowledge to strengthen the team's capabilities.",
    imageUrl: '/6.jpg',
    linkedinUrl:"https://www.linkedin.com/in/deepak-keer-1276a4361",
  },
   {
    id: 'Neha Gandhi',
    name: 'Neha Gandhi',
    role: 'junior Java Script Developer',
    description: 'Analyzes every detail, asks the right questions, and uncovers what others overlook.',
    imageUrl: '/3.jpg',
    linkedinUrl:"https://www.linkedin.com/in/neha-gandhi-103529399",
  },
  {
    id: 'Pawan-chouhan',
    name: 'Pawan chouhan',
    role: 'junior Java Script Developer',
    description: 'Turns complex challenges into simple solutions through determination, speed, and sharp thinking.',
    imageUrl: '/2.jpg',
    linkedinUrl:"https://www.linkedin.com/in/pawan-chouhan31",
  },
 

  {
    id: 'rishabh sharma',
    name: 'Rishabh Sharma',
    role: 'junior Java Script Developer',
    description: 'Quietly exceeds expectations, delivering impactful results while letting achievements speak for themselves.',
    imageUrl: '/5.jpg',
    linkedinUrl:"https://www.linkedin.com/in/rishabh-sharma-63a439366",
  },
  
  
 

];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    text: "Karmyug HRMS has made managing our workforce much easier. The software is user-friendly, and our team was able to adapt to it quickly. What stands out most is the dedicated support provided by Karmyug—they assigned a dedicated resource to assist us, and their response time has always been prompt and helpful. We appreciate their commitment to ensuring a smooth and efficient experience.",
    author: '– Aslam, Assistant Manager',
    company: ' HRMS Crane – Workforce Management System',
    stars: 5
  },
  {
    id: '2',
    text: "We are extremely satisfied with Karmyug Team Services. Their prompt response, clear communication, and efficient support have made a significant difference to our operations. A reliable and professional team that consistently delivers excellent service.",
    author: ' - Manish ( CTO )',
    company: 'HRMS Crane – Workforce Management System',
    stars: 5
  },
 
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
