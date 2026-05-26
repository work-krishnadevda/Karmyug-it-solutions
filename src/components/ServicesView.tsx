import React, { useState } from 'react';
import { 
  Code, 
  Megaphone, 
  TrendingUp, 
  Users, 
  ClipboardSignature, 
  Layers, 
  Cpu, 
  Globe, 
  Laptop, 
  Edit3, 
  Cloud, 
  Shield, 
  ArrowRight,
  Plus,
  Minus,
  Search,
  Pencil,
  Rocket,
  BarChart2,
  Star,
  Headphones
} from 'lucide-react';
import FAQ3DFigure from './FAQ3DFigure';

interface ServicesViewProps {
  onOpenContact: () => void;
}

// Custom 3D Glossy Icon Component to match home page
function GlossyIcon({ type }: { type: string }) {
  let gradient = '';
  let shadow = '';
  let innerNode = null;

  switch (type) {
    case 'it-solutions':
      gradient = 'from-[#3B82F6] to-[#1D4ED8]';
      shadow = 'shadow-[0_8px_20px_rgba(59,130,246,0.3)]';
      innerNode = <Code className="w-5.5 h-5.5 text-white" strokeWidth={2.5} />;
      break;
    case 'digital-marketing':
      gradient = 'from-[#10B981] to-[#047857]';
      shadow = 'shadow-[0_8px_20px_rgba(16,185,129,0.3)]';
      innerNode = <Megaphone className="w-5.5 h-5.5 text-white -rotate-12" strokeWidth={2.5} />;
      break;
    case 'business-growth':
      gradient = 'from-[#F59E0B] to-[#D97706]';
      shadow = 'shadow-[0_8px_20px_rgba(245,158,11,0.3)]';
      innerNode = <TrendingUp className="w-5.5 h-5.5 text-white" strokeWidth={2.5} />;
      break;
    case 'crm-development':
      gradient = 'from-[#EF4444] to-[#B91C1C]';
      shadow = 'shadow-[0_8px_20px_rgba(239,68,68,0.3)]';
      innerNode = <Users className="w-5.5 h-5.5 text-white" strokeWidth={2.5} />;
      break;
    case 'hrms-development':
      gradient = 'from-[#10B981] to-[#059669]';
      shadow = 'shadow-[0_8px_20px_rgba(16,185,129,0.3)]';
      innerNode = <ClipboardSignature className="w-5.5 h-5.5 text-white" strokeWidth={2.5} />;
      break;
    case 'erp-systems':
      gradient = 'from-[#3B82F6] to-[#1E40AF]';
      shadow = 'shadow-[0_8px_20px_rgba(59,130,246,0.3)]';
      innerNode = <Layers className="w-5.5 h-5.5 text-white" strokeWidth={2.5} />;
      break;
    case 'ai-automation':
      gradient = 'from-[#8B5CF6] to-[#5B21B6]';
      shadow = 'shadow-[0_8px_20px_rgba(124,58,237,0.3)]';
      innerNode = (
        <div className="relative flex items-center justify-center w-full h-full">
          <Cpu className="w-5.5 h-5.5 text-white/40" strokeWidth={2} />
          <span className="absolute text-[10px] font-black tracking-tight text-white leading-none font-sans mt-[-1px]">AI</span>
        </div>
      );
      break;
    case 'global-support':
      gradient = 'from-[#0ea5e9] to-[#0284c7]';
      shadow = 'shadow-[0_8px_20px_rgba(14,165,233,0.3)]';
      innerNode = <Globe className="w-5.5 h-5.5 text-white animate-[spin_40s_linear_infinite]" strokeWidth={2} />;
      break;
    case 'web-app-development':
      gradient = 'from-[#3B82F6] to-[#2563EB]';
      shadow = 'shadow-[0_8px_20px_rgba(37,99,235,0.3)]';
      innerNode = <Laptop className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />;
      break;
    case 'brand-content':
      gradient = 'from-[#F59E0B] to-[#D97706]';
      shadow = 'shadow-[0_8px_20px_rgba(245,158,11,0.3)]';
      innerNode = <Edit3 className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />;
      break;
    case 'cloud-devops':
      gradient = 'from-[#10B981] to-[#047857]';
      shadow = 'shadow-[0_8px_20px_rgba(16,185,129,0.3)]';
      innerNode = <Cloud className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />;
      break;
    case 'cybersecurity':
      gradient = 'from-[#EF4444] to-[#991B1B]';
      shadow = 'shadow-[0_8px_20px_rgba(239,68,68,0.3)]';
      innerNode = <Shield className="w-5.5 h-5.5 text-white" strokeWidth={2.2} />;
      break;
    default:
      gradient = 'from-[#64748B] to-[#475569]';
      shadow = 'shadow-[0_8px_20px_rgba(100,116,139,0.3)]';
      innerNode = <Code className="w-5.5 h-5.5 text-white" />;
  }

  return (
    <div className={`relative w-13 h-13 rounded-[18px] bg-gradient-to-br ${gradient} ${shadow} flex items-center justify-center overflow-hidden shrink-0 border border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
      {/* Glossy top-highlight reflection */}
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-t-[18px]" />
      
      {/* Soft inner glow boundary */}
      <div className="absolute inset-[1.5px] rounded-[15px] border border-white/10 pointer-events-none" />
      
      {/* Icon node */}
      <div className="relative z-10 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.15)] flex items-center justify-center">
        {innerNode}
      </div>
    </div>
  );
}

// User-specified 12 card items with complete short descriptions & descriptions
const ALL_SERVICES_DETAILS = [
  {
    id: 'it-solutions',
    title: 'IT Solutions',
    shortDescription: 'Custom software, web apps, and enterprise systems built for speed and reliability.',
    detail: 'From MVPs to enterprise platforms, we architect scalable backends, intuitive frontends, and seamless integrations tailored to your workflow.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'SEO, paid ads, and social campaigns that turn visibility into qualified leads.',
    detail: 'Data-driven campaigns across Google, Meta, and LinkedIn — with tracking, A/B testing, and monthly growth reports you can act on.'
  },
  {
    id: 'business-growth',
    title: 'Business Growth',
    shortDescription: 'Strategy, automation, and analytics to scale operations without extra overhead.',
    detail: 'We help you automate repetitive tasks, build dashboards, and implement CRM flows so your team focuses on high-value work.'
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    shortDescription: 'Centralize leads, customers, and sales pipelines in one intelligent CRM built for your team.',
    detail: 'Custom dashboards, follow-up automation, WhatsApp & email integration, and role-based access — so nothing falls through the cracks.'
  },
  {
    id: 'hrms-development',
    title: 'HRMS Development',
    shortDescription: 'Payroll, attendance, leave, and employee records in a secure HR platform tailored to your policies.',
    detail: 'Onboarding workflows, document management, and reports that help HR and management make faster decisions.'
  },
  {
    id: 'erp-systems',
    title: 'ERP Systems',
    shortDescription: 'Unify inventory, finance, operations, and reporting in one scalable enterprise system.',
    detail: 'Module-based ERP for manufacturing, retail, and services — integrated with your existing tools and workflows.'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortDescription: 'Automate repetitive tasks with smart workflows, bots, and data-driven insights.',
    detail: 'From document processing to lead scoring and chat assistants — we build practical AI that saves hours every week.'
  },
  {
    id: 'global-support',
    title: 'Global Support',
    shortDescription: 'Cross-border digital presence, localization, and 24/7 technical assistance.',
    detail: 'Multi-language sites, timezone-aware support, and CDN setup for international audiences.'
  },
  {
    id: 'web-app-development',
    title: 'Web & App Development',
    shortDescription: 'Responsive websites, PWAs, and mobile-ready products with modern stacks.',
    detail: 'React, Node, and cloud-native builds with performance budgets and accessibility baked in.'
  },
  {
    id: 'brand-content',
    title: 'Brand & Content',
    shortDescription: 'Brand identity, content strategy, and creative assets that build trust.',
    detail: 'Logo systems, brand guidelines, and content calendars aligned with your growth goals.'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDescription: 'Hosting, CI/CD, and infrastructure that keeps your product always online.',
    detail: 'AWS, Vercel, and Docker pipelines with monitoring, backups, and zero-downtime deploys.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Audits, hardening, and best practices to protect your business data.',
    detail: 'SSL, WAF, penetration testing, and compliance guidance for sensitive industries.'
  }
];

export default function ServicesView({ onOpenContact }: ServicesViewProps) {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0); // Open first FAQ by default

  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We learn your goals, audience, and technical requirements.'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Wireframes and UI mockups aligned with your brand identity.'
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'Agile sprints with weekly demos and transparent progress.'
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Testing, deployment, training, and post-launch support.'
    }
  ];

  const faqs = [
    {
      question: 'Which service should I choose for my business?',
      answer: 'New businesses usually start with a website plus basic SEO. Growing teams add CRM or digital marketing. Operations-heavy companies benefit from HRMS or ERP. We help you pick the right mix on a free consultation call.'
    },
    {
      question: 'What is included in CRM development?',
      answer: 'Lead capture, pipeline stages, customer profiles, task reminders, team roles, reports, and integrations (email, WhatsApp, etc.) — all customized to how your sales team actually works.'
    },
    {
      question: 'Can you integrate HRMS with our existing payroll or attendance tools?',
      answer: 'Yes. We plan integrations during discovery — whether you need biometric attendance, Excel imports, or API links to accounting and payroll systems.'
    },
    {
      question: 'How is your ERP different from off-the-shelf software?',
      answer: 'Off-the-shelf ERP forces you to adopt their process. We build modules around your workflow — inventory, billing, production, or field operations — so the system fits your business, not the other way around.'
    },
    {
      question: 'Do you offer AI automation as a standalone service?',
      answer: 'Yes. We can add AI workflows to existing systems or build new automations — chatbots, document extraction, smart notifications, and dashboard insights — scoped to clear business outcomes.'
    },
    {
      question: 'Can I combine multiple services in one package?',
      answer: 'Yes. Most clients bundle web development with SEO and social media, or app development with cloud hosting. Bundled packages are more cost-effective than buying services separately.'
    },
    {
      question: 'How does your SEO service work?',
      answer: 'We start with keyword research and site audit, fix technical issues, optimize on-page content, build quality backlinks, and send monthly reports showing rankings, traffic, and leads.'
    },
    {
      question: 'Do you offer monthly marketing retainers?',
      answer: 'Yes. Digital marketing retainers include ad management, content creation, social posting, and analytics — typically billed monthly with flexible plans by budget.'
    },
    {
      question: 'What is included in IT Solutions & app development?',
      answer: 'Requirements gathering, UI/UX design, development, testing, deployment, training, and optional maintenance. You get documentation and full ownership of the codebase.'
    },
    {
      question: 'How many design revisions are included?',
      answer: 'Our standard packages include 2-3 rounds of design revisions per milestone. Additional revisions can be added if needed — we agree on this upfront in the proposal.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      
      {/* Premium Header Area themed blue & emerald */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#FAFBFD] to-white border-b border-slate-100 overflow-hidden select-none">
        {/* Ambient background soft light spot */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[110px] pointer-events-none" />
        {/* 3D styling animations specifically designed for the neon K-cube and orbiting satellites */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes floatSatelliteOrbit {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes cube-rotate {
            0% {
              transform: rotateY(0deg) rotateX(14deg) translateY(0px);
            }
            50% {
              transform: rotateY(180deg) rotateX(20deg) translateY(-8px);
            }
            100% {
              transform: rotateY(360deg) rotateX(14deg) translateY(0px);
            }
          }
          .anime-kcube-float {
            position: relative;
            width: 140px;
            height: 140px;
            transform-style: preserve-3d;
            animation: cube-rotate 15s linear infinite;
          }
          .cube-scene {
            perspective: 1200px;
            perspective-origin: 50% 50%;
            transform-style: preserve-3d;
          }
          .cube-face {
            position: absolute;
            width: 140px;
            height: 140px;
            background: rgba(255, 255, 255, 0.04);
            border: 1.5px solid rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(4px);
            border-radius: 28px;
            box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.15), 0 0 15px rgba(59, 130, 246, 0.08);
            transform-style: preserve-3d;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cube-face-front  { transform: rotateY(  0deg) translateZ(70px); }
          .cube-face-back   { transform: rotateY(180deg) translateZ(70px); }
          .cube-face-left   { transform: rotateY(-90deg) translateZ(70px); }
          .cube-face-right  { transform: rotateY( 90deg) translateZ(70px); }
          .cube-face-top    { transform: rotateX( 90deg) translateZ(70px); }
          .cube-face-bottom { transform: rotateX(-90deg) translateZ(70px); }

          .anime-satellite-1 {
            animation: floatSatelliteOrbit 5s ease-in-out infinite;
            animation-delay: 0s;
          }
          .anime-satellite-2 {
            animation: floatSatelliteOrbit 5.5s ease-in-out infinite;
            animation-delay: -1s;
          }
          .anime-satellite-3 {
            animation: floatSatelliteOrbit 4.8s ease-in-out infinite;
            animation-delay: -2s;
          }
          .anime-satellite-4 {
            animation: floatSatelliteOrbit 5.2s ease-in-out infinite;
            animation-delay: -1.5s;
          }
          .anime-satellite-5 {
            animation: floatSatelliteOrbit 5.8s ease-in-out infinite;
            animation-delay: -0.5s;
          }
          .anime-satellite-6 {
            animation: floatSatelliteOrbit 6s ease-in-out infinite;
            animation-delay: -2.5s;
          }
          .preserve-3d-header {
            transform-style: preserve-3d;
          }
        `}} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between">
            
            {/* LEFT COLUMN: Human Wording & Stats Cards */}
            <div className="w-full lg:w-[46%] text-left flex flex-col justify-center">
              
              {/* Blue Badge */}
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100/40 text-blue-600 rounded-full text-[10.5px] font-black mb-5 tracking-widest uppercase">
                <span>OUR SERVICES</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-[52px] font-black tracking-tight text-slate-900 leading-[1.08] mb-6 font-display">
                Smart Solutions For <br className="hidden sm:inline" />Modern <span className="text-[#2563EB]">Businesses</span>
              </h1>

              {/* Description Content */}
              <p className="text-[14px] sm:text-[15px] text-slate-500 font-semibold leading-relaxed mb-4 max-w-[560px]">
                End-to-end digital solutions — websites, CRM, HRMS, ERP, AI automation, marketing, cloud, and cybersecurity. We tailor every engagement to your business goals.
              </p>
            </div>

            {/* RIGHT COLUMN: HIGH FIDELITY NEON "K" CUBE & ORBITING SATS */}
            <div className="w-full lg:w-[50%] flex items-center justify-center py-8 relative overflow-visible select-none lg:h-[480px]">
              
              <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] flex items-center justify-center overflow-visible">
                
                {/* Glowing Ground Base shadow below pedestal */}
                <div className="absolute top-[80%] w-60 h-10 bg-blue-900/15 rounded-full blur-[12px] -z-10" />

                {/* ====================================================
                    1. CENTRAL GLASS-NEON CUBE PEDESTAL WITH "K" core
                   ==================================================== */}
                <div className="relative w-[190px] h-[190px] preserve-3d-header flex items-center justify-center mb-8">
                  
                  {/* Outer Orbit Wireframe Dash Ring track (Lying flat, tilted in perspective) */}
                  <div 
                    className="absolute w-[360px] h-[360px] border border-[#CBD5E1]/70 border-dashed rounded-full pointer-events-none -z-10"
                    style={{ transform: 'rotateX(72deg) rotateY(-11deg)' }}
                  />

                  {/* THREE LAYER BASE PEDESTAL */}
                  <div className="absolute bottom-[-15%] flex flex-col items-center justify-center pointer-events-none -z-10">
                    <div className="w-72 h-[48px] bg-gradient-to-b from-[#141B2D] via-[#1E293B] to-[#0F172A] border border-blue-900/60 rounded-full flex items-center justify-center p-0.5" style={{ transform: 'rotateX(72deg)' }}>
                      <div className="w-full h-full rounded-full border border-sky-400/25 bg-[#0A0F1D] relative flex items-center justify-center">
                        <div className="absolute inset-1 border border-[#3b82f6]/35 rounded-full animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-sky-500/15 animate-[spin-slow_20s_linear_infinite]" />
                      </div>
                    </div>
                    <div className="w-64 h-[38px] bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB]/45 to-[#0F172A] border border-sky-500/55 rounded-full shadow-[0_0_35px_rgba(37,99,235,0.45)] absolute mb-2" style={{ transform: 'rotateX(74deg)' }}>
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center p-0.5">
                        <div className="w-full h-full rounded-full border border-[#06b6d4]/45 bg-[#030712]" />
                      </div>
                    </div>
                    <div className="w-52 h-[28px] bg-sky-500 rounded-full shadow-[0_0_25px_#0EA5E9] absolute mb-4" style={{ transform: 'rotateX(76deg)' }}>
                      <div className="w-full h-full rounded-full bg-gradient-to-b from-sky-300 via-sky-500 to-blue-700 opacity-90 relative">
                        <div className="absolute inset-2 bg-cyan-400 blur-xs rounded-full opacity-60 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* MAIN 3D TRANSLUCENT GLASS CUBE */}
                  <div className="relative w-44 h-44 sm:w-[190px] sm:h-[190px] cube-scene flex items-center justify-center select-none z-20">
                    <div className="anime-kcube-float">
                      <div className="cube-face cube-face-front">
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                      </div>
                      <div className="cube-face cube-face-back">
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                      </div>
                      <div className="cube-face cube-face-left">
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                      </div>
                      <div className="cube-face cube-face-right">
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                      </div>
                      <div className="cube-face cube-face-top">
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                      </div>
                      <div className="cube-face cube-face-bottom">
                        <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                      </div>

                      {/* Depth-layered rods inside cube */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}>
                        <div className="relative w-28 h-28 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                          <div className="absolute left-[38%] top-[18%] bottom-[18%] w-4.5 bg-gradient-to-b from-[#FFA8A8] via-[#FF5E5E] to-[#D92B6B] rounded-full shadow-[inset_-2px_0_6px_rgba(255,255,255,0.65),0_8px_16px_rgba(217,43,107,0.4)]" style={{ transform: 'translateZ(8px)' }} />
                          <div className="absolute left-[40%] top-[24%] w-[52px] h-4.5 bg-gradient-to-r from-[#FFDD55] via-[#FF8C33] to-[#FF4444] rounded-full origin-left rotate-[-36deg] shadow-[inset_0_2px_4px_rgba(255,255,255,0.65),0_6px_12px_rgba(255,140,51,0.35)]" style={{ transform: 'translateZ(14px)' }} />
                          <div className="absolute left-[44%] top-[56%] w-[56px] h-4.5 bg-gradient-to-r from-[#44E0D1] via-[#00B4D8] to-[#2563EB] rounded-full origin-left rotate-[38deg] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.65),0_6px_12px_rgba(0,180,216,0.35)]" style={{ transform: 'translateZ(20px)' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* ====================================================
                    2. ORBITING OPTIMIZED SATELLITE WIDGETS
                   ==================================================== */}
                
                {/* SATELLITE 1: AI Automation (Top-left, blue/cyan icon) */}
                <div 
                  className="absolute top-[8%] left-[10%] flex flex-col items-center select-none anime-satellite-1 group cursor-pointer"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 border border-white/45 p-2 flex items-center justify-center shadow-lg hover:shadow-sky-400/30 transition-shadow">
                    <Cpu className="w-6.5 h-6.5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#475569] mt-2 tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-none">AI Automation</span>
                </div>

                {/* SATELLITE 2: CRM (Right-mid top, deep blue container) */}
                <div 
                  className="absolute top-[12%] right-[10%] flex flex-col items-center select-none anime-satellite-2 group cursor-pointer"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#1E40AF] to-[#2563EB] border border-white/45 p-2 flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-shadow">
                    <Globe className="w-6.5 h-6.5 text-white animate-[spin_30s_linear_infinite]" strokeWidth={2.2} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#475569] mt-2 tracking-tight group-hover:text-[#1D4ED8] transition-colors leading-none">CRM</span>
                </div>

                {/* SATELLITE 3: ERP (Left-mid bottom, violet/purple) */}
                <div 
                  className="absolute top-[48%] left-[-2%] flex flex-col items-center select-none anime-satellite-3 group cursor-pointer"
                  style={{ transform: 'translateZ(35px)' }}
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] border border-white/40 p-2 flex items-center justify-center shadow-lg hover:shadow-violet-500/30 transition-shadow">
                    <Layers className="w-6.5 h-6.5 text-white" strokeWidth={2.4} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#475569] mt-2 tracking-tight group-hover:text-[#4F46E5] transition-colors leading-none">ERP</span>
                </div>

                {/* SATELLITE 4: Cloud (Right-mid bottom, light green/teal) */}
                <div 
                  className="absolute top-[45%] right-[-2%] flex flex-col items-center select-none anime-satellite-4 group cursor-pointer"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] border border-white/[0.45] p-2 flex items-center justify-center shadow-lg hover:shadow-emerald-500/30 transition-shadow">
                    <Cloud className="w-6.5 h-6.5 text-white" strokeWidth={2.2} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#475569] mt-2 tracking-tight group-hover:text-[#10B981] transition-colors leading-none">Cloud</span>
                </div>

                {/* SATELLITE 5: Analytics/Sales (Bottom-left, orange/yellow) */}
                <div 
                  className="absolute bottom-[6%] left-[16%] flex flex-col items-center select-none anime-satellite-5 group cursor-pointer"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#EA580C] border border-white/45 p-2 flex items-center justify-center shadow-lg hover:shadow-amber-500/30 transition-shadow">
                    <BarChart2 className="w-6.5 h-6.5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#475569] mt-2 tracking-tight group-hover:text-[#EA580C] transition-colors leading-none">Growth</span>
                </div>

                {/* SATELLITE 6: Security (Bottom-right, gorgeous security Lock blue) */}
                <div 
                  className="absolute bottom-[4%] right-[16%] flex flex-col items-center select-none anime-satellite-6 group cursor-pointer"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#2563EB] to-blue-500 border border-white/45 p-2 flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-shadow">
                    <Shield className="w-6.5 h-6.5 text-white" strokeWidth={2.4} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#475569] mt-2 tracking-tight group-hover:text-blue-600 transition-colors leading-none">Security</span>
                </div>

              </div>

            </div>

          </div>

          {/* 4 Stats Cards matching user screenshot layout perfectly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-16 sm:mt-20 w-full relative z-10">
            
            {/* Stat 1: Clients Served */}
            <div className="bg-white border border-slate-100/85 p-5 rounded-2xl shadow-[0_4px_25px_rgba(15,23,42,0.015)] flex flex-row items-center gap-4 hover:border-blue-200/60 hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <div className="w-13 h-13 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#2563EB] fill-[#2563EB]/10" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[19px] sm:text-[20px] font-black text-slate-900">250+</span>
                <span className="text-[11px] sm:text-[11.5px] text-slate-400 font-bold mt-1.5 tracking-tight font-sans">Clients Served</span>
              </div>
            </div>

            {/* Stat 2: Industries Covered */}
            <div className="bg-white border border-slate-100/85 p-5 rounded-2xl shadow-[0_4px_25px_rgba(15,23,42,0.015)] flex flex-row items-center gap-4 hover:border-blue-200/60 hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <div className="w-13 h-13 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <BarChart2 className="w-6 h-6 text-[#2563EB]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[19px] sm:text-[20px] font-black text-slate-900">15+</span>
                <span className="text-[11px] sm:text-[11.5px] text-slate-400 font-bold mt-1.5 tracking-tight font-sans">Industries Covered</span>
              </div>
            </div>

            {/* Stat 3: Client Satisfaction */}
            <div className="bg-white border border-slate-100/85 p-5 rounded-2xl shadow-[0_4px_25px_rgba(15,23,42,0.015)] flex flex-row items-center gap-4 hover:border-blue-200/60 hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <div className="w-13 h-13 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-[#2563EB] fill-[#2563EB]" strokeWidth={2} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[19px] sm:text-[20px] font-black text-slate-900">98%</span>
                <span className="text-[11px] sm:text-[11.5px] text-slate-400 font-bold mt-1.5 tracking-tight font-sans">Client Satisfaction</span>
              </div>
            </div>

            {/* Stat 4: Support Available */}
            <div className="bg-white border border-slate-100/85 p-5 rounded-2xl shadow-[0_4px_25px_rgba(15,23,42,0.015)] flex flex-row items-center gap-4 hover:border-blue-200/60 hover:shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-300">
              <div className="w-13 h-13 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-[#2563EB]" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[19px] sm:text-[20px] font-black text-slate-900">24/7</span>
                <span className="text-[11px] sm:text-[11.5px] text-slate-400 font-bold mt-1.5 tracking-tight font-sans">Support Available</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Grid of 12 Services */}
      <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle grid mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-25" />
          
          {/* Giant background neon visual glows */}
          <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[130px]" />
          <div className="absolute bottom-1/4 left-[5%] w-[650px] h-[650px] bg-emerald-500/[0.03] rounded-full blur-[150px]" />
          
          {/* Rotating abstract isometric orbits */}
          <div className="absolute top-16 left-12 w-64 h-64 border border-slate-200 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center opacity-40">
            <div className="w-52 h-52 border border-dashed border-slate-300/40 rounded-full" />
            <div className="w-36 h-36 border border-slate-200 rounded-full" />
            <span className="absolute w-3 h-3 bg-blue-500/40 rounded-full top-5 left-5" />
          </div>

          <div className="absolute bottom-24 right-16 w-80 h-80 border border-slate-200 rounded-full animate-[spin_80s_linear_infinite] flex items-center justify-center opacity-40">
            <svg className="w-full h-full text-slate-300" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
            </svg>
            <span className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full bottom-10 right-10" />
          </div>
        </div>

        {/* 12-Card Grid exactly matching the design of the home page */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header as requested */}
          <div className="text-center max-w-3xl mx-auto mb-16 select-none flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100/40 text-blue-600 rounded-full text-[10.5px] font-black mb-4 tracking-widest uppercase animate-pulse">
              <span>OUR SERVICES</span>
            </div>
            
            <h2 className="text-4xl font-black tracking-tight text-slate-900 font-display sm:text-5xl">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h2>
            
            <p className="mt-4 text-[14px] sm:text-[15px] text-slate-550 max-w-2xl mx-auto leading-relaxed font-semibold">
              End-to-end digital solutions — websites, CRM, HRMS, ERP, AI automation, marketing, cloud, and cybersecurity. We tailor every engagement to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-7">
            {ALL_SERVICES_DETAILS.map((service) => (
              <div
                key={service.id}
                onClick={onOpenContact}
                className="bg-white border border-slate-200 rounded-[24px] p-7 flex flex-col justify-between group h-full cursor-pointer relative transition-all duration-300 ease-out hover:border-blue-400 hover:shadow-[0_22px_45px_rgba(59,130,246,0.08)] hover:-translate-y-2.5 active:scale-[0.99]"
              >
                {/* Micro reflection top highlight boundary inside cards on hover */}
                <div className="absolute inset-0 rounded-[24px] pointer-events-none border border-transparent group-hover:border-blue-500/10 transition-colors duration-300" />
                
                {/* Card subtle background tint pulse on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-500/[0.005] group-hover:to-indigo-500/[0.015] rounded-[24px] transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Glossy 3D Icon Container */}
                  <div className="mb-6 inline-block">
                    <GlossyIcon type={service.id} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[17px] font-black text-slate-900 mb-2.5 tracking-tight font-display transition-colors duration-200 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 font-medium">
                    {service.shortDescription}
                  </p>

                  {/* Extended detailed narrative paragraph with green bullet alignment */}
                  <div className="mt-4 pt-4 border-t border-slate-100/80">
                    <div className="flex gap-2.5 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover:bg-blue-500 transition-colors duration-300 mt-1.5 shrink-0" />
                      <p className="text-[11.5px] sm:text-[12px] text-slate-600 font-bold leading-relaxed group-hover:text-slate-900 transition-colors">
                        {service.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explore Service Action Trigger */}
                <div className="pt-4 border-t border-slate-100 mt-6 pt-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] group-hover:text-[#1D4ED8] group/btn cursor-pointer transition-colors duration-150"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 justify-between">
            {/* Left Side: Premium left-aligned title as in the uploaded image */}
            <div className="w-full lg:w-[22%] shrink-0 text-left mb-4 lg:mb-0 select-none lg:pt-4">
              <h2 className="text-[36px] sm:text-[42px] font-black tracking-tight text-slate-900 leading-none font-display">
                How We <span className="text-[#22C55E]">Work</span>
              </h2>
            </div>

            {/* Right Side: High Fidelity Connected 3D-ish Wave Steps */}
            <div className="w-full lg:w-[78%] flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0 relative z-10 w-full">
              
              {/* Step 1: Discovery */}
              <div className="flex-1 flex flex-col items-center relative group w-full px-2 text-center select-none">
                
                {/* 3D Glass Bubble Container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_45px_rgba(59,130,246,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200 cursor-pointer">
                  {/* Soft Internal Blue Backdrop glow */}
                  <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0.01)_70%)] pointer-events-none" />
                  
                  {/* Icon */}
                  <Search className="w-8 h-8 sm:w-9 sm:h-9 text-[#3B82F6] relative z-10 animate-[bounce_5s_infinite_ease-in-out]" strokeWidth={2.5} />
                  
                  {/* Floating Number circle Badge - Pill 01 */}
                  <span className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#1E88E5] text-white text-[11px] sm:text-[12px] font-black flex items-center justify-center absolute -top-1 sm:-top-1.5 -right-1 sm:-right-1 border-2 border-white shadow-md shadow-blue-500/20 z-20">
                    01
                  </span>
                </div>

                {/* Dotted upward Bezier Connect Curve (Displays only in gap 1 to 2 on desktop) */}
                <div className="absolute top-14 left-[calc(50%+55px)] w-[calc(100%-110px)] h-12 pointer-events-none hidden md:block z-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M 1,22 C 30,-5 70,-5 99,22" 
                      fill="none" 
                      stroke="#CBD5E1" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />
                    <path 
                      d="M 82,14 L 88,18 L 82,22" 
                      fill="none" 
                      stroke="#94A3B8" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* Capture labels and details */}
                <h3 className="text-base sm:text-[17px] font-black text-slate-900 mt-6 mb-2 font-display">
                  Discovery
                </h3>
                <p className="text-xs sm:text-[12.5px] text-slate-500 font-semibold leading-relaxed max-w-[180px] sm:max-w-[200px]">
                  We learn your goals, audience, and technical requirements.
                </p>
              </div>

              {/* Step 2: Design */}
              <div className="flex-1 flex flex-col items-center relative group w-full px-2 text-center select-none">
                
                {/* 3D Glass Bubble Container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_45px_rgba(16,185,129,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-200 cursor-pointer">
                  {/* Soft Internal Green Backdrop glow */}
                  <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0.01)_70%)] pointer-events-none" />
                  
                  {/* Icon */}
                  <Pencil className="w-8 h-8 sm:w-9 sm:h-9 text-[#10B981] relative z-10 hover:rotate-6 transition-transform" strokeWidth={2.5} />
                  
                  {/* Floating Number circle Badge - Pill 02 */}
                  <span className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#22C55E] text-white text-[11px] sm:text-[12px] font-black flex items-center justify-center absolute -top-1 sm:-top-1.5 -right-1 sm:-right-1 border-2 border-white shadow-md shadow-emerald-500/20 z-20">
                    02
                  </span>
                </div>

                {/* Dotted upward Bezier Connect Curve (Displays only in gap 2 to 3 on desktop) */}
                <div className="absolute top-14 left-[calc(50%+55px)] w-[calc(100%-110px)] h-12 pointer-events-none hidden md:block z-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M 1,22 C 30,-5 70,-5 99,22" 
                      fill="none" 
                      stroke="#CBD5E1" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />
                    <path 
                      d="M 82,14 L 88,18 L 82,22" 
                      fill="none" 
                      stroke="#94A3B8" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* Capture labels and details */}
                <h3 className="text-base sm:text-[17px] font-black text-slate-900 mt-6 mb-2 font-display">
                  Design
                </h3>
                <p className="text-xs sm:text-[12.5px] text-slate-500 font-semibold leading-relaxed max-w-[180px] sm:max-w-[200px]">
                  Wireframes and UI mockups aligned with your brand identity.
                </p>
              </div>

              {/* Step 3: Develop */}
              <div className="flex-1 flex flex-col items-center relative group w-full px-2 text-center select-none">
                
                {/* 3D Glass Bubble Container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_45px_rgba(245,158,11,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-amber-200 cursor-pointer">
                  {/* Soft Internal Amber/Gold Backdrop glow */}
                  <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,rgba(245,158,11,0.01)_70%)] pointer-events-none" />
                  
                  {/* Custom 3D Clipboard bracket Icon matching image precisely */}
                  <div className="relative w-11 h-13 bg-[#F59E0B] rounded-lg flex flex-col items-center justify-center shadow-lg border border-white/50 group-hover:rotate-3 transition-transform duration-300 relative z-10">
                    {/* Metal clip on top */}
                    <div className="absolute top-0.5 w-5 h-1.5 bg-amber-600 rounded-sm" />
                    {/* Bracket code block text inside */}
                    <span className="text-white text-[11px] sm:text-[12px] font-black font-mono tracking-tighter mt-1.5">&lt;/&gt;</span>
                  </div>
                  
                  {/* Floating Number circle Badge - Pill 03 */}
                  <span className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FFA000] text-white text-[11px] sm:text-[12px] font-black flex items-center justify-center absolute -top-1 sm:-top-1.5 -right-1 sm:-right-1 border-2 border-white shadow-md shadow-amber-500/20 z-20">
                    03
                  </span>
                </div>

                {/* Dotted upward Bezier Connect Curve (Displays only in gap 3 to 4 on desktop) */}
                <div className="absolute top-14 left-[calc(50%+55px)] w-[calc(100%-110px)] h-12 pointer-events-none hidden md:block z-0">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M 1,22 C 30,-5 70,-5 99,22" 
                      fill="none" 
                      stroke="#CBD5E1" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />
                    <path 
                      d="M 82,14 L 88,18 L 82,22" 
                      fill="none" 
                      stroke="#94A3B8" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>

                {/* Capture labels and details */}
                <h3 className="text-base sm:text-[17px] font-black text-slate-900 mt-6 mb-2 font-display">
                  Develop
                </h3>
                <p className="text-xs sm:text-[12.5px] text-slate-500 font-semibold leading-relaxed max-w-[180px] sm:max-w-[200px]">
                  Agile sprints with weekly demos and transparent progress.
                </p>
              </div>

              {/* Step 4: Launch */}
              <div className="flex-1 flex flex-col items-center relative group w-full px-2 text-center select-none">
                
                {/* 3D Glass Bubble Container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border border-slate-100 shadow-[0_10px_35px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_45px_rgba(244,63,94,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-rose-200 cursor-pointer">
                  {/* Soft Internal Red Backdrop glow */}
                  <div className="absolute inset-1.5 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0%,rgba(244,63,94,0.01)_70%)] pointer-events-none" />
                  
                  {/* Icon */}
                  <Rocket className="w-8 h-8 sm:w-9 sm:h-9 text-rose-500 -rotate-12 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
                  
                  {/* Floating Number circle Badge - Pill 04 */}
                  <span className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#EF5350] text-white text-[11px] sm:text-[12px] font-black flex items-center justify-center absolute -top-1 sm:-top-1.5 -right-1 sm:-right-1 border-2 border-white shadow-md shadow-red-500/20 z-20">
                    04
                  </span>
                </div>

                {/* Capture labels and details */}
                <h3 className="text-base sm:text-[17px] font-black text-slate-900 mt-6 mb-2 font-display">
                  Launch
                </h3>
                <p className="text-xs sm:text-[12.5px] text-slate-500 font-semibold leading-relaxed max-w-[180px] sm:max-w-[200px]">
                  Testing, deployment, training, and post-launch support.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Not Sure Where to Start campaign banner banner (Completely Redesigned with Isometric 3D High Fidelity Layout) */}
      <section className="py-16 bg-[#F8FAFC]/50 flex justify-center selection:bg-blue-500/20 select-none border-t border-slate-100">
        <div className="w-full max-w-7xl px-6">
          
          <div className="relative rounded-[32px] bg-gradient-to-b from-[#030C1E] to-[#010610] border border-slate-800/80 p-8 md:p-10 lg:p-12 overflow-hidden shadow-2xl shadow-indigo-950/20 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Ambient Backlight radial glow behind the banner text */}
            <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-sky-500/[0.04] rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[30%] w-[400px] h-[400px] bg-emerald-500/[0.03]/40 rounded-full blur-[110px] pointer-events-none" />
            
            {/* 3D styling for background elements */}
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes innerNotSureFloat {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-7px) rotate(1.5deg); }
              }
              .anime-not-sure-avatar {
                animation: innerNotSureFloat 5s ease-in-out infinite;
              }
              .preserve-3d-ns {
                transform-style: preserve-3d;
              }
            `}} />

            {/* =========================================================
                COLUMN 1: LITERAL CONTENT DETAILS
               ========================================================= */}
            <div className="w-full lg:w-[32%] flex flex-col items-start text-left relative z-10 select-none">
              
              <span className="text-[11px] font-black tracking-widest text-[#38BDF8] uppercase mb-3.5">
                NEED GUIDANCE?
              </span>

              <h3 className="text-3xl sm:text-[35px] font-black text-white leading-[1.12] tracking-tight font-display">
                Not Sure <br className="hidden sm:inline" />Where to Start?
              </h3>

              <p className="mt-3.5 text-xs sm:text-[13.5px] text-slate-400 font-semibold leading-relaxed max-w-[340px]">
                Book a free consultation and we'll recommend the right mix of services for your stage and budget.
              </p>

              <button
                onClick={onOpenContact}
                className="mt-7 inline-flex items-center gap-2 px-6.5 py-3.5 bg-gradient-to-r from-[#FBBF24] to-[#FACC15] hover:from-[#FCD34D] hover:to-[#FBBF24] text-slate-950 rounded-full font-black text-xs sm:text-[13px] shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <span className="font-extrabold sm:text-sm ml-1">→</span>
              </button>
            </div>

            {/* =========================================================
                COLUMN 2: 3 ORBS CAROUSEL LIST (Expert Advice, No Obligation, Best Roadmap)
               ========================================================= */}
            <div className="w-full lg:w-[38%] flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6 justify-center items-center relative z-10 py-4 lg:py-0 border-y lg:border-y-0 border-slate-800/40">
              
              {/* Orb 1: Expert Advice */}
              <div className="flex-1 flex flex-col items-center text-center w-[130px] sm:w-auto">
                <div className="relative w-14 h-14 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.12)] hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35)_0%,rgba(56,189,248,0.01)_70%)] rounded-full pointer-events-none" />
                  <Shield className="w-5.5 h-5.5 text-sky-400" strokeWidth={2.5} />
                </div>
                <h4 className="text-[13px] font-black text-white mt-3 mb-1 font-display tracking-tight">Expert Advice</h4>
                <p className="text-[10px] text-slate-400/90 leading-relaxed font-semibold max-w-[130px]">Get tailored guidance from our experts</p>
              </div>

              {/* Orb 2: No Obligation */}
              <div className="flex-1 flex flex-col items-center text-center w-[130px] sm:w-auto mt-2 sm:mt-0">
                <div className="relative w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.12)] hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35)_0%,rgba(16,185,129,0.01)_70%)] rounded-full pointer-events-none" />
                  <ClipboardSignature className="w-5.5 h-5.5 text-emerald-400" strokeWidth={2.5} />
                </div>
                <h4 className="text-[13px] font-black text-white mt-3 mb-1 font-display tracking-tight">No Obligation</h4>
                <p className="text-[10px] text-slate-400/90 leading-relaxed font-semibold max-w-[130px]">100% free consultation with no commitment</p>
              </div>

              {/* Orb 3: Best Roadmap */}
              <div className="flex-1 flex flex-col items-center text-center w-[130px] sm:w-auto mt-2 sm:mt-0">
                <div className="relative w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.12)] hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.35)_0%,rgba(245,158,11,0.01)_70%)] rounded-full pointer-events-none" />
                  <TrendingUp className="w-5.5 h-5.5 text-amber-400" strokeWidth={2.5} />
                </div>
                <h4 className="text-[13px] font-black text-white mt-3 mb-1 font-display tracking-tight">Best Roadmap</h4>
                <p className="text-[10px] text-slate-400/90 leading-relaxed font-semibold max-w-[130px]">Clear roadmap for your business growth</p>
              </div>

            </div>

            {/* =========================================================
                COLUMN 3: MAJESTIC PREMIUM ISOMETRIC 3D SCENE
               ========================================================= */}
            <div className="w-full lg:w-[28%] flex items-center justify-center py-4 lg:py-0 relative z-10 shrink-0 select-none overflow-visible">
              
              <div className="relative w-72 h-60 preserve-3d-ns anime-not-sure-avatar" style={{ perspective: '1100px' }}>
                <div className="relative w-full h-full preserve-3d-ns" style={{ transform: 'rotateX(25deg) rotateY(-22deg) rotateZ(-2deg)' }}>
                  
                  {/* Bottom shadow of 3D floor onto dark space */}
                  <div className="absolute top-[120px] left-6 w-56 h-36 bg-slate-950/40 rounded-full blur-[8px] -z-10" />

                  {/* ==========================================
                      1. THE FUTURISTIC WORKSTATION (DESK)
                     ========================================== */}
                  {/* Table Top Surface */}
                  <div 
                    className="absolute top-[105px] left-14 w-44 h-24 bg-gradient-to-tr from-[#EDEDED] to-[#FBFBFB] rounded-xl border-t border-r border-white/80 shadow-[inset_0_1.5px_rgba(255,255,255,0.8),0_12px_24px_rgba(0,0,0,0.3)] flex items-center justify-center preserve-3d-ns"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    {/* Tiny visual paper sheet on table */}
                    <div className="absolute top-3 right-4 w-12 h-14 bg-white/50 border border-slate-200 rounded-sm shadow-2xs rotate-6" />
                  </div>

                  {/* Silver Support Legs (Extruded Cylindrical Blocks) */}
                  <div className="absolute top-[125px] left-[70px] w-1.5 h-20 bg-slate-300 rounded-sm border-r border-[#94A3B8]" style={{ transform: 'rotateX(90deg) translateZ(10px)' }} />
                  <div className="absolute top-[125px] left-[215px] w-1.5 h-20 bg-slate-300 rounded-sm border-r border-[#94A3B8]" style={{ transform: 'rotateX(90deg) translateZ(10px)' }} />
                  <div className="absolute top-[200px] left-[75px] w-1.5 h-20 bg-slate-400 rounded-sm border-r border-[#64748B]" style={{ transform: 'rotateX(90deg) translateZ(10px)' }} />
                  <div className="absolute top-[200px] left-[220px] w-1.5 h-20 bg-slate-400 rounded-sm border-r border-[#64748B]" style={{ transform: 'rotateX(90deg) translateZ(10px)' }} />

                  {/* ==========================================
                      2. DIGITAL BLUE REVOLVING CHAIR & SIT DEVELOPER
                     ========================================== */}
                  {/* Rounded blue ergonomic task chair */}
                  <div 
                    className="absolute top-[155px] left-28 w-16 h-16 bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] rounded-full border border-sky-300/35 shadow-lg flex items-center justify-center preserve-3d-ns"
                    style={{ transform: 'translateZ(24px)' }}
                  >
                    {/* Chair Armrest layers */}
                    <div className="absolute -left-1 w-2.5 h-10 bg-[#1D4ED8] rounded-full border-r border-white/15" />
                    <div className="absolute -right-1 w-2.5 h-10 bg-[#1D4ED8] rounded-full border-l border-white/15" />

                    {/* Sitting Developer Head & body accent */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#10B981] to-[#34D399] border-t border-emerald-300/40 flex items-center justify-center text-white/90 text-[10px] font-black font-sans uppercase shadow-[inset_0_1.5px_rgba(255,255,255,0.3)]">
                      DEV
                    </div>
                  </div>

                  {/* Base support shaft for the chair */}
                  <div className="absolute top-[210px] left-[142px] w-2 h-10 bg-slate-500 rounded-sm" style={{ transform: 'rotateX(90deg) translateZ(10px)' }} />


                  {/* ==========================================
                      3. CODER TABLE ACCESSORY (THE LAPTOP WITH SCREEN)
                     ========================================== */}
                  {/* Keyboard bottom base plate on table */}
                  <div 
                    className="absolute top-[125px] left-[125px] w-13 h-9 bg-[#1E293B] rounded-[3px] border border-slate-700 shadow-sm flex items-center justify-center"
                    style={{ transform: 'translateZ(16.5px)' }}
                  >
                    {/* Keyboard layout details with fine code grids */}
                    <div className="w-[44px] h-[28px] bg-[#020617] rounded-[1.5px] grid grid-cols-5 gap-[1px] p-[1.5px] border border-slate-800">
                      <div className="bg-[#475569]/50 rounded-[0.5px] col-span-2"></div>
                      <div className="bg-[#475569]/30 rounded-[0.5px]"></div>
                      <div className="bg-[#475569]/40 rounded-[0.5px] col-span-2"></div>
                      <div className="bg-[#10B981]/80 rounded-[0.5px] animate-pulse"></div>
                      <div className="bg-[#475569]/60 rounded-[0.5px]"></div>
                      <div className="bg-[#475569]/30 rounded-[0.5px] col-span-3"></div>
                    </div>
                  </div>

                  {/* Upright opening screen with glowing code editor layout */}
                  <div 
                    className="absolute top-[110px] left-[125px] w-13 h-9 bg-slate-900 border border-sky-400/45 rounded-[3px] p-[1.5px] shadow-[0_0_15px_rgba(56,189,248,0.25)] flex flex-col justify-between"
                    style={{ transform: 'translate3d(0px, -2px, 24px) rotateX(-50deg)' }}
                  >
                    {/* Glowing blue mini rows */}
                    <div className="w-full h-1.5 bg-[#0284C7] rounded-[1px] mb-[1.5px] flex items-center px-1"><span className="w-2 h-[1px] bg-white rounded-full"></span></div>
                    <div className="flex-1 flex flex-col gap-[1.5px] p-[1px]">
                      <div className="w-[85%] h-[2px] bg-slate-700 rounded-full"></div>
                      <div className="w-[50%] h-[2px] bg-[#10B981] rounded-full animate-pulse"></div>
                      <div className="w-[70%] h-[2px] bg-sky-400 rounded-full"></div>
                      <div className="w-[40%] h-[2px] bg-[#F59E0B] rounded-full"></div>
                    </div>
                  </div>


                  {/* ==========================================
                      4. ORANGE MULTI-LAYER SERVER BOX (ON FLOOR OR CORNER)
                     ========================================== */}
                  {/* Isometric orange box at left margin of design */}
                  <div className="absolute top-[165px] left-[4px] preserve-3d-ns">
                    {/* Depth Sides */}
                    <div className="absolute w-12 h-14 bg-[#C2410C] rounded-lg" style={{ transform: 'translateZ(-10px)' }} />
                    <div className="absolute w-12 h-14 bg-[#EA580C] rounded-lg" style={{ transform: 'translateZ(-5px)' }} />
                    
                    {/* Upper face plate */}
                    <div 
                      className="absolute w-12 h-14 bg-gradient-to-tr from-[#EA580C] to-[#F97316] rounded-lg border border-orange-300/35 shadow-inner flex flex-col items-center justify-center p-1.5"
                      style={{ transform: 'translateZ(0px)' }}
                    >
                      {/* Technical lines & system port lights */}
                      <div className="w-full flex justify-between px-1 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                      </div>
                      <div className="w-full h-1 bg-black/35 rounded-sm mb-1" />
                      <div className="w-full h-1 bg-black/35 rounded-sm" />
                    </div>
                  </div>


                  {/* ==========================================
                      5. FUTURISTIC FLOATING HOLOGRAPHIC COCKPIT SCREEN
                     ========================================== */}
                  <div 
                    className="absolute top-1 right-[2px] w-[148px] h-[92px] bg-[#030C21]/80 backdrop-blur-md rounded-xl border border-sky-500/30 p-2 shadow-[0_0_25px_rgba(56,189,248,0.25)] flex flex-col preserve-3d-ns hover:scale-105 transition-all duration-300"
                    style={{ transform: 'translate3d(0px, 0px, 48px) rotateY(-10deg) rotateX(5deg)' }}
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800/60">
                      <span className="text-[7.5px] font-black text-sky-450 uppercase tracking-tighter">ANALYTICS GRID</span>
                      <div className="flex gap-[1.5px]">
                        <span className="w-[3px] h-[3px] rounded-full bg-rose-500" />
                        <span className="w-[3px] h-[3px] rounded-full bg-yellow-500" />
                        <span className="w-[3px] h-[3px] rounded-full bg-emerald-500" />
                      </div>
                    </div>

                    {/* Chart mock inside */}
                    <div className="flex-1 flex gap-1 items-end p-[1.5px] bg-[#020617]/50 rounded border border-slate-900 leading-none">
                      {/* Bar charts growing with pulses */}
                      <div className="w-2.5 bg-sky-500/20 hover:bg-sky-500 rounded-[1px] transition-all" style={{ height: '35%' }}></div>
                      <div className="w-2.5 bg-emerald-500/40 hover:bg-emerald-500 rounded-[1px] transition-all" style={{ height: '75%' }}></div>
                      <div className="w-2.5 bg-blue-500/60 hover:bg-blue-500 rounded-[1px] transition-all" style={{ height: '55%' }}></div>
                      <div className="w-2.5 bg-[#FFA000]/50 hover:bg-amber-500 rounded-[1px] transition-all" style={{ height: '40%' }}></div>
                      <div className="w-2.5 bg-rose-500/40 hover:bg-rose-500 rounded-[1px] transition-all" style={{ height: '90%' }}></div>
                      
                      {/* Floating percentage label indicator in center */}
                      <span className="absolute right-1.5 bottom-1 text-[8.5px] font-mono font-black text-[#10B981] animate-pulse">98.4%</span>
                    </div>
                  </div>


                  {/* ==========================================
                      6. THE STANDING ADVISOR FIGURINE IN SUIT
                     ========================================== */}
                  {/* Multi-layered character figurine gesturing towards the hologram */}
                  <div 
                    className="absolute top-[45px] left-[15px] preserve-3d-ns"
                    style={{ transform: 'translateZ(30px) rotateY(15deg)' }}
                  >
                    {/* Head */}
                    <div className="w-6.5 h-6.5 rounded-full bg-[#E2E8F0] border-t border-white/60 shadow-md mb-0.5" />
                    
                    {/* Torso/Jumpsuit Blue body */}
                    <div className="w-7 h-11 bg-gradient-to-tr from-[#1D4ED8] to-[#3B82F6] rounded-lg border-t border-sky-400/40 shadow-md relative flex items-center justify-center">
                      {/* Golden tie */}
                      <div className="absolute top-1 w-1 h-4 bg-amber-400 rounded-sm" />
                      
                      {/* Gesturing Arm outreach towards the screen */}
                      <div className="absolute top-[3px] -right-2.5 w-4 h-2 bg-[#2563EB] rounded-full border border-sky-400/40 rotate-[35deg]" />
                    </div>

                    {/* Left/Right Legs */}
                    <div className="flex gap-1 justify-center mt-0.5">
                      <div className="w-2.5 h-7 bg-[#1E3A8A] rounded-b-sm border-r border-[#1e40af]" />
                      <div className="w-2.5 h-7 bg-[#1E3A8A] rounded-b-sm" />
                    </div>
                  </div>

                </div>
              </div>

            </div>


          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] scroll-mt-24 select-none relative overflow-hidden border-t border-slate-100">
        
        {/* Decorative halos */}
        <div className="absolute top-1/2 left-12 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[85px] pointer-events-none" />
        <div className="absolute bottom-10 right-24 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-8 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-3 flex flex-col items-start select-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/60 border border-blue-100/30 text-blue-600 rounded-full text-[11px] font-bold mb-4 tracking-wider uppercase">
                <span>SERVICES FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display leading-[1.15]">
                Services <br className="hidden lg:block" /> FAQ
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 rounded-full mt-4 mb-4 shadow-sm" />
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                Common questions about our IT, marketing, and development services.
              </p>
            </div>

            {/* Middle Column 1 */}
            <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[24px] shadow-[0_4px_12px_rgba(15,23,42,0.015)] divide-y divide-slate-100 overflow-hidden">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const originalIndex = idx;
                const isOpen = openFaqId === originalIndex;
                return (
                  <div key={idx} className="transition-all duration-350">
                    <button
                      onClick={() => toggleFaq(originalIndex)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-blue-600 font-display transition-colors cursor-pointer select-none"
                    >
                      <span className="text-[13px] sm:text-[13.5px] leading-snug">{faq.question}</span>
                      <span className="flex-shrink-0 text-slate-400 group-hover:text-blue-500 font-medium">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-350 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-slate-50/55 bg-slate-50/[0.15]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Column 2 */}
            <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[24px] shadow-[0_4px_12px_rgba(15,23,42,0.015)] divide-y divide-slate-100 overflow-hidden">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const originalIndex = Math.ceil(faqs.length / 2) + idx;
                const isOpen = openFaqId === originalIndex;
                return (
                  <div key={idx} className="transition-all duration-350">
                    <button
                      onClick={() => toggleFaq(originalIndex)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-blue-600 font-display transition-colors cursor-pointer select-none"
                    >
                      <span className="text-[13px] sm:text-[13.5px] leading-snug">{faq.question}</span>
                      <span className="flex-shrink-0 text-slate-400 group-hover:text-blue-500 font-medium">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-350 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-slate-50/55 bg-slate-50/[0.15]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-semibold font-medium">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Far Right 3D Column */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center select-none py-4">
              <FAQ3DFigure />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
