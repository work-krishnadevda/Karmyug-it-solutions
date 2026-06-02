import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Heart } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onOpenContact: () => void;
  onNavigate?: (page: 'home' | 'services' | 'portfolio' | 'contact') => void;
}

export default function Footer({ onScrollTo, onOpenContact, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'portfolio') {
      if (onNavigate) onNavigate('portfolio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'contact') {
      if (onNavigate) onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'home') {
      if (onNavigate) onNavigate('home');
      setTimeout(() => onScrollTo(id), 50);
    } else {
      onScrollTo(id);
    }
  };

  return (
    <footer className="bg-brand-dark text-slate-300 pt-20 pb-10 border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand details (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              {/* Star Logo */}
              <div className="p-1.5 bg-white/5 rounded-full inline-block">
                <svg width="28" height="28" viewBox="0 0 100 100" className="fill-none stroke-[8] stroke-linejoin-round">
                  <defs>
                    <linearGradient id="footerStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50 5 L63 38 L98 38 L70 59 L81 92 L50 72 L19 92 L30 59 L2 38 L37 38 Z"
                    stroke="url(#footerStarGrad)"
                  />
                </svg>
              </div>
              <div>
                <span className="block font-display font-extrabold tracking-wider text-white text-base">
                  karmyug
                </span>
                <span className="block text-[10px] tracking-widest text-[#8b5cf6] font-bold">
                  IT SOLUTIONS
                </span>
              </div>
            </div>
 
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Empower businesses with reliable, AI-ready software — from websites and marketing to CRM, HRMS, ERP, and workflow automation — so teams work smarter and scale with confidence.
            </p>
 
            <p className="text-xs text-slate-400 italic border-l-2 border-[#8b5cf6]/40 pl-3 leading-relaxed">
              <strong>Vision:</strong> To be the trusted technology partner for startups and enterprises across India and globally, known for custom solutions that deliver measurable business impact.
            </p>
          </div>
 
          {/* Col 2: Quick Links (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick('home', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300 hover:underline"
                >
                  <ChevronRight className="w-3 h-3 text-[#8b5cf6]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick('services', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300 hover:underline"
                >
                  <ChevronRight className="w-3 h-3 text-[#8b5cf6]" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkClick('portfolio', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300 hover:underline"
                >
                  <ChevronRight className="w-3 h-3 text-[#8b5cf6]" />
                  <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick('contact', e)}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300 hover:underline cursor-pointer text-left focus:outline-none"
                >
                  <ChevronRight className="w-3 h-3 text-[#8b5cf6]" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services details (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>IT Solutions</li>
              <li>Digital Marketing</li>
              <li>Business Growth</li>
              <li>CRM Development</li>
              <li>HRMS Development</li>
              <li>ERP Systems</li>
              <li>AI Automation</li>
            </ul>
          </div>

          {/* Col 4: Contact details (span 3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <a href="tel:+919669555811" className="flex items-start gap-3 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-[#8b5cf6] mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-medium text-gray-200">+91 8962241437</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">Mon - Sat, 10am - 7pm</span>
                </div>
              </a>

              <a href="mailto:karmyugtechzone@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-[#8b5cf6] group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-200 truncate">karmyugtechzone@gmail.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8b5cf6] mt-0.5" />
                <div>
                  <span className="block text-gray-200">India</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">Serving clients worldwide</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b5cf6]/20 hover:bg-[#8b5cf6] text-[#c084fc] hover:text-white font-medium text-xs rounded-lg transition-all focus:outline-none cursor-pointer"
              >
                <span>Get in Touch</span>
                <span>➔</span>
              </button>
            </div>
          </div>

        </div>

        {/* Content footer copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-mono">
          <div>
            @ {currentYear} karmyug IT Solution. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-display font-black tracking-widest text-[10px] text-[#8b5cf6] uppercase">
            <span>QUALITY ABOVE ALL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
