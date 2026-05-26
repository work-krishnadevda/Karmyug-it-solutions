import React from 'react';
import { SERVICES_DATA } from '../data';
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
  ArrowRight 
} from 'lucide-react';

interface ServicesSectionProps {
  onStartProject: (serviceName: string) => void;
  onViewAllServices?: () => void;
}

// Custom 3D Glossy Icon Component to mimic the reference image
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

// Precise text content bullet mappings matching reference image
const SERVICES_BULLETS: Record<string, string[]> = {
  'it-solutions': ['Scalable Architecture', 'Modern Tech Stack', 'Seamless Integrations'],
  'digital-marketing': ['SEO & Local SEO', 'PPC & Paid Campaigns', 'Analytics & Reporting'],
  'business-growth': ['Business Strategy', 'Workflow Automation', 'Dashboards & Insights'],
  'crm-development': ['Sales Pipeline Management', 'Automation & Reminders', 'WhatsApp & Email Integration'],
  'hrms-development': ['Employee Self Service', 'Leave & Attendance', 'Reports & Analytics'],
  'erp-systems': ['Inventory Management', 'Finance & Accounting', 'Multi-Department Flow'],
  'ai-automation': ['Workflow Automation', 'Chatbots & Assistants', 'Lead Scoring & Insights'],
  'global-support': ['Multi-language Support', 'Time-zone Friendly', '24/7 Technical Assistance'],
  'web-app-development': ['Responsive & Fast', 'PWA Development', 'Mobile-First Approach'],
  'brand-content': ['Brand Identity Design', 'Content Strategy', 'Creative Assets'],
  'cloud-devops': ['AWS / Vercel / GCP', 'CI/CD Automation', 'Monitoring & Backups'],
  'cybersecurity': ['Security Audit', 'WAF & SSL', 'Compliance & Best Practices']
};

// Exact descriptions matching reference image
const SERVICES_DESCRIPTIONS: Record<string, string> = {
  'it-solutions': 'Custom software, web apps, and enterprise systems built for speed and reliability.',
  'digital-marketing': 'SEO, paid ads, and social campaigns that turn visibility into qualified leads.',
  'business-growth': 'Strategy, automation, and analytics to scale operations without extra overhead.',
  'crm-development': 'Centralize leads, customers, and sales pipelines in one intelligent CRM built for your team.',
  'hrms-development': 'Payroll, attendance, leave, and employee records in a secure HR platform.',
  'erp-systems': 'Unify inventory, finance, operations, and reporting in one scalable enterprise system.',
  'ai-automation': 'Automate repetitive tasks with smart workflows, bots, and data-driven insights.',
  'global-support': 'Cross-border digital presence, localization, and 24/7 technical assistance.',
  'web-app-development': 'Responsive websites, PWAs, and mobile-ready products with modern stacks.',
  'brand-content': 'Brand identity, content strategy, and creative assets that build trust.',
  'cloud-devops': 'Hosting, CI/CD, and infrastructure that keeps your product always online.',
  'cybersecurity': 'Audits, hardening, and best practices to protect your business data.'
};

export default function ServicesSection({ onStartProject, onViewAllServices }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 bg-[#FAFBFD] scroll-mt-24 border-t border-slate-200 relative overflow-hidden select-none">
      
      {/* Custom Styles for 3D Background Objects and Premium Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bgFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-20px) rotate(8deg) scale(1.05); }
        }
        @keyframes bgFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1.05); }
          50% { transform: translateY(20px) rotate(-8deg) scale(0.95); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatPerspective {
          0%, 100% { transform: perspective(800px) rotateX(15deg) rotateY(-15deg) translateY(0px); }
          50% { transform: perspective(800px) rotateX(18deg) rotateY(-10deg) translateY(-12px); }
        }
        .anime-bg-float-1 {
          animation: bgFloat1 18s ease-in-out infinite;
        }
        .anime-bg-float-2 {
          animation: bgFloat2 24s ease-in-out infinite;
        }
        .anime-spin-orbit {
          animation: spinOrbit 45s linear infinite;
        }
        .anime-float-perspective {
          animation: floatPerspective 8s ease-in-out infinite;
        }
      `}} />

      {/* 3D Background Animated Elements */}
      <div className="absolute top-10 left-12 w-64 h-64 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-12 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Interactive 3D Dotted Orbit in background */}
      <div className="absolute top-1/4 right-[5%] w-[380px] h-[380px] border border-dashed border-slate-200/50 rounded-full opacity-40 anime-spin-orbit pointer-events-none hidden lg:block" />
      <div className="absolute bottom-1/4 left-[3%] w-[320px] h-[320px] border border-slate-200/40 rounded-full opacity-30 anime-bg-float-2 pointer-events-none hidden lg:block flex items-center justify-center">
        <div className="w-[180px] h-[180px] border border-dashed border-slate-300/40 rounded-full" />
      </div>

      {/* Floating 3D geometric visual representation elements (Custom SVGs under perspective floating) */}
      <div className="absolute top-[35%] right-[8%] opacity-35 anime-float-perspective pointer-events-none hidden xl:block">
        <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-2xl">
          <polygon points="50,15 90,35 90,75 50,95 10,75 10,35" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          <polygon points="50,30 80,45 80,70 50,85 20,70 20,45" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" />
          <line x1="50" y1="15" x2="50" y2="95" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="10" y1="35" x2="90" y2="75" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <line x1="90" y1="35" x2="10" y2="75" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[8%] opacity-30 anime-bg-float-1 pointer-events-none hidden xl:block">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="2" strokeDasharray="6,6" />
          <circle cx="60" cy="60" r="25" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          <path d="M 60,15 L 60,105 M 15,60 L 105,60" stroke="rgba(203, 213, 225, 0.3)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header with exact Hero Color Combo alignment */}
        <div className="flex flex-col items-center text-center mb-16 gap-3.5 max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#1D4ED8] bg-[#EBF5FF] rounded-md mb-1 font-sans border border-[#BFDBFE]/30 shadow-xs">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 font-display leading-[1.12]">
            Our{' '}
            <span className="text-[#3b82f6] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-xs font-black">
              Core
            </span>{' '}
            <span className="text-[#10b981] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent drop-shadow-xs font-black">
              Services
            </span>
          </h2>
          <p className="max-w-2xl text-slate-500 font-semibold text-sm sm:text-[15.5px] leading-relaxed">
            IT excellence, digital marketing, business growth — plus custom CRM, HRMS, ERP, and AI automation for modern teams.
          </p>
        </div>

        {/* 8-Card Grid (4 columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES_DATA.filter((s) => [
            'digital-marketing',
            'business-growth',
            'crm-development',
            'hrms-development',
            'ai-automation',
            'web-app-development',
            'cloud-devops',
            'cybersecurity'
          ].includes(s.id)).map((service) => {
            const description = SERVICES_DESCRIPTIONS[service.id] || service.description;
            const bullets = SERVICES_BULLETS[service.id] || [];

            return (
              <div
                key={service.id}
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

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-6 font-medium">
                    {description}
                  </p>

                  {/* Bullet Lists */}
                  {bullets.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {bullets.map((bullet, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-2.5 text-slate-600 font-semibold text-[11.5px] sm:text-[12px] leading-none group/bul cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] group-hover:bg-blue-500 transition-colors duration-300 shrink-0" />
                          <span className="group-hover/bul:text-slate-900 transition-colors duration-150">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Explore Service Action Trigger */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => onStartProject(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B82F6] group-hover:text-[#1D4ED8] group/btn cursor-pointer transition-colors duration-150"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA Button (Kept exactly as requested) */}
        <div className="text-center mt-16 font-display">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-slate-300 rounded-full text-slate-700 hover:text-slate-900 font-extrabold text-xs sm:text-[13px] tracking-wide transition-all duration-300 shadow-sm shadow-black/2 cursor-pointer active:scale-[0.985] group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
