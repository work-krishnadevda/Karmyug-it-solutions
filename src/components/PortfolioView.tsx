import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import FAQ3DFigure from './FAQ3DFigure';
import PortfolioHeader3D from './PortfolioHeader3D';

interface PortfolioViewProps {
  onStartProject: (projectName: string) => void;
}

export default function PortfolioView({ onStartProject }: PortfolioViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'website' | 'application'>('all');
  const [openFaqId, setOpenFaqId] = useState<number | null>(0); // first item open by default

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === 'all') return true;
    return project.type === activeTab;
  });

  const faqs = [
    {
      question: 'How long does it take to deliver a website or application?',
      answer: 'A standard business website typically takes 3-5 weeks. Custom web applications range from 8-16 weeks depending on scope. We share a clear timeline after the discovery call.'
    },
    {
      question: 'Do you provide the complete source code after development?',
      answer: 'Yes. Upon final payment, you receive full source code, documentation, and deployment credentials. You own the product — we retain no lock-in.'
    },
    {
      question: 'What\'s the difference between a template site and custom development?',
      answer: 'Template sites are faster and cheaper but limited in branding and features. Custom builds are tailored to your workflow, scalable, and optimized for SEO and performance.'
    },
    {
      question: 'Do you provide maintenance and support after delivery?',
      answer: 'We offer monthly maintenance plans covering updates, security patches, backups, and priority support. One-off support is also available.'
    },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use React, TypeScript, Node.js, PostgresQL, and cloud platforms like AWS and Vercel. Stacks are chosen based on your project needs and team familiarity.'
    },
    {
      question: 'Can you help with digital marketing after the site goes live?',
      answer: 'Absolutely. Our marketing team handles SEO, Google Ads, social media, and content strategy — either standalone or bundled with development.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqId(openFaqId === idx ? null : idx);
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      
      {/* Portfolio Header Section */}
      <section className="relative pt-12 pb-10 md:pt-16 md:pb-12 bg-gradient-to-b from-blue-50/15 via-white to-slate-50 select-none overflow-hidden border-b border-slate-100">
        
        {/* Curvy background wave path matching image layout */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
            <path d="M-80,180 C240,320 480,80 880,240 C1280,400 1380,220 1520,290" stroke="url(#waveGrad)" strokeWidth="1.5" />
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#34D399" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-6 text-left flex flex-col items-start select-none">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/60 border border-blue-100/35 text-blue-600 rounded-full text-[11px] font-bold mb-5 tracking-widest uppercase">
                <span>OUR PORTFOLIO</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 font-display leading-[1.12]">
                Our Top <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">Projects</span>
              </h1>

              {/* Subtitle description */}
              <p className="mt-5 text-sm sm:text-[14.5px] text-slate-500 max-w-xl leading-relaxed font-semibold">
                Explore websites and applications we have designed, built, and launched for brands across India and beyond.
              </p>

              {/* Left-Aligned Category Tabs (Aligned below description exactly like screenshot) */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {[
                  { label: 'All', value: 'all' },
                  { label: 'Websites', value: 'website' },
                  { label: 'Applications', value: 'application' }
                ].map((tab) => {
                  const isActive = activeTab === tab.value;
                  return (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value as any)}
                      className={`px-7 py-2.5 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/15 scale-[1.03]'
                          : 'bg-white border border-slate-100 hover:border-slate-200 text-slate-600 hover:text-blue-600 hover:scale-[1.02] shadow-3xs'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right isometric/3D elements column */}
            <div className="lg:col-span-6 w-full flex items-center justify-center">
              <PortfolioHeader3D />
            </div>

          </div>
        </div>
      </section>

      {/* Alternating Project Layout items list (Redesigned with identical high fidelity 3D features) */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white scroll-mt-12 relative overflow-hidden select-none border-t border-slate-100">
        
        {/* 3D and floating Keyframes for backgrounds & overlays */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes subtleHologramFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-12px) rotate(4deg); }
          }
          @keyframes subtleHologramFloatReverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(12px) rotate(-4deg); }
          }
          @keyframes slowSpinLeft {
            0% { transform: rotateX(35deg) rotateY(45deg) rotate(0deg); }
            100% { transform: rotateX(35deg) rotateY(45deg) rotate(-360deg); }
          }
          @keyframes slowSpinRight {
            0% { transform: rotateX(45deg) rotateY(-35deg) rotate(0deg); }
            100% { transform: rotateX(45deg) rotateY(-35deg) rotate(360deg); }
          }
          @keyframes floatCenterCore {
            0%, 100% { transform: translateY(0px) rotateY(0deg) rotateX(15deg); }
            50% { transform: translateY(-16px) rotateY(180deg) rotateX(25deg); }
          }
          @keyframes centerOrbit {
            0% { transform: rotateZ(0deg); }
            100% { transform: rotateZ(360deg); }
          }
          .anime-3d-float-1 {
            animation: subtleHologramFloat 8s ease-in-out infinite;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .anime-3d-float-2 {
            animation: subtleHologramFloat 10s ease-in-out infinite;
            animation-delay: -2.5s;
            perspective: 1000px;
            transform-style: preserve-3d;
          }
          .anime-spin-3d-left {
            animation: slowSpinLeft 18s linear infinite;
          }
          .anime-spin-3d-right {
            animation: slowSpinRight 22s linear infinite;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .project-card-3d {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
            transform-style: preserve-3d;
            position: relative;
          }
          .project-card-3d::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              45deg,
              transparent 45%,
              rgba(255, 255, 255, 0.08) 48%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.08) 52%,
              transparent 55%
            );
            transform: rotate(-45deg) translateY(-100%);
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
            z-index: 15;
          }
          .group:hover .project-card-3d {
            transform: rotateX(4deg) rotateY(-5deg) translateZ(16px);
            box-shadow: 0 30px 60px -15px rgba(59, 130, 246, 0.28);
          }
          .group:hover .project-card-3d::after {
            transform: rotate(-45deg) translateY(100%);
          }
          .anime-float-normal {
            animation: subtleHologramFloat 6s ease-in-out infinite;
          }
          .anime-float-reverse {
            animation: subtleHologramFloatReverse 7s ease-in-out infinite;
          }
          .anime-center-crystal {
            animation: floatCenterCore 10s ease-in-out infinite;
            transform-style: preserve-3d;
          }
          .anime-center-orbit-track {
            animation: centerOrbit 25s linear infinite;
          }
        `}} />

        {/* Decorative halos in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-radial from-blue-400/5 via-indigo-400/0 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400/[0.015] rounded-full blur-[90px] pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[85px] pointer-events-none -z-10" />

        {/* ==========================================
            DYNAMIC 3D ELEMENTS ON SIDES (PRECISE & APPROPRIATE SIZE)
           ========================================== */}
        
        {/* Left Margin: Glass 3D Diamond/Prism Shape */}
        <div className="hidden xl:flex absolute top-[18%] left-8 w-24 h-24 items-center justify-center anime-3d-float-1 pointer-events-none z-10 opacity-70">
          <div className="relative w-16 h-16 preserve-3d anime-spin-3d-left">
            {/* Top Face */}
            <div className="absolute inset-0 bg-blue-500/15 border border-white/40 shadow-inner rounded-sm backdrop-blur-3xs" style={{ transform: 'translateZ(16px)' }} />
            {/* Bottom Face */}
            <div className="absolute inset-0 bg-indigo-600/10 border border-white/10 rounded-sm" style={{ transform: 'translateZ(-16px) rotateY(180deg)' }} />
            {/* Outer Side Faces */}
            <div className="absolute inset-x-0 top-0 bottom-0 bg-indigo-500/15 border border-white/25 rounded-sm origin-left" style={{ transform: 'rotateY(90deg) translateZ(-16px)' }} />
            <div className="absolute inset-x-0 top-0 bottom-0 bg-blue-400/20 border border-white/30 rounded-sm origin-right" style={{ transform: 'rotateY(-90deg) translateZ(-16px)' }} />
            {/* Subtle bottom shadow */}
            <div className="absolute w-12 h-12 bg-indigo-900/10 rounded-full blur-sm -bottom-10 left-2 transform" style={{ transform: 'rotateX(90deg) translateZ(-30px)' }} />
          </div>
        </div>

        {/* Right Margin: Glass 3D Floating Double Cube Ring */}
        <div className="hidden xl:flex absolute bottom-[25%] right-8 w-28 h-28 items-center justify-center anime-3d-float-2 pointer-events-none z-10 opacity-70">
          <div className="relative w-16 h-16 preserve-3d anime-spin-3d-right">
            {/* 3D Emerald-Green Core Accent Cube */}
            <div className="absolute inset-2 bg-emerald-400/20 border border-white/45 shadow-sm rounded-md backdrop-blur-3xs" style={{ transform: 'translateZ(10px)' }} />
            <div className="absolute inset-2 bg-teal-500/15 border border-white/20 rounded-md" style={{ transform: 'translateZ(-10px) rotateY(180deg)' }} />
            {/* Transparent Outer Frame Plate */}
            <div className="absolute inset-0 border border-blue-400/30 rounded-lg bg-blue-400/5" style={{ transform: 'translateZ(-20px)' }} />
            <div className="absolute inset-0 border border-indigo-400/30 rounded-lg bg-indigo-550/5" style={{ transform: 'translateZ(20px)' }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          
          {/* Projects List Container */}
          <div className="space-y-20 mt-4">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  
                  {/* Visual Image Screen Container (UPGRADED TO MODERN 3D HOVER TILT VIEWPORT) */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div 
                      className="relative w-full overflow-visible preserve-3d group cursor-pointer"
                      style={{ perspective: '1200px' }}
                    >
                      
                      {/* Perspective card boundary box */}
                      <div 
                        className="relative overflow-hidden rounded-3xl border border-slate-150/80 bg-white shadow-lg shadow-slate-100 project-card-3d"
                      >
                        {/* Glossy overlay on top of project visual */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/12 via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 z-10" />

                        {/* Accent glow corner */}
                        <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-radial from-blue-400/12 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-all duration-500" />

                        {/* The Project Image */}
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
                        />
                        
                        {/* Subtle elegant gradient backdrop strip at the very bottom */}
                        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950/25 to-transparent pointer-events-none" />

                      </div>

                      {/* ==========================================
                          INTERACTIVE FLOATING 3D ELEMENTS (BREAKS OUT OVER CARD)
                         ========================================== */}
                      {isEven ? (
                        /* 3D Glass Amber Hex-Prism on the outer border representing fine technical design */
                        <div 
                          className="absolute -right-5 -bottom-5 w-16 h-16 preserve-3d pointer-events-none z-20 transition-all duration-500 ease-out group-hover:scale-130 group-hover:translate-x-3 group-hover:-translate-y-5 filter drop-shadow-[0_12px_24px_rgba(245,158,11,0.28)]"
                          style={{ transform: 'translateZ(45px)' }}
                        >
                          <div className="relative w-full h-full preserve-3d anime-float-normal">
                            <div className="absolute inset-0 preserve-3d animate-[slowSpinRight_10s_linear_infinite]">
                              {/* Prism faces resembling fine crystal geometry */}
                              <div className="absolute inset-0 bg-amber-500/35 border border-white/65 backdrop-blur-3xs rounded-md" style={{ transform: 'translateZ(16px)' }} />
                              <div className="absolute inset-0 bg-yellow-400/20 border border-white/45 backdrop-blur-3xs rounded-md" style={{ transform: 'rotateY(90deg) translateZ(16px)' }} />
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-amber-300/30 border border-white/60 backdrop-blur-3xs rounded-md" style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
                              <div className="absolute inset-0 bg-amber-600/30 border border-white/20 rounded-md" style={{ transform: 'translateZ(-16px) rotateY(180deg)' }} />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* 3D Glass Cyan-Emerald double frame block on the left border */
                        <div 
                          className="absolute -left-5 -bottom-5 w-16 h-16 preserve-3d pointer-events-none z-20 transition-all duration-500 ease-out group-hover:scale-130 group-hover:-translate-x-3 group-hover:-translate-y-5 filter drop-shadow-[0_12px_24px_rgba(59,130,246,0.28)]"
                          style={{ transform: 'translateZ(55px)' }}
                        >
                          <div className="relative w-full h-full preserve-3d anime-float-reverse">
                            <div className="absolute inset-0 preserve-3d animate-[slowSpinLeft_12s_linear_infinite]">
                              <div className="absolute inset-0 bg-blue-500/35 border border-white/70 backdrop-blur-3xs rounded-xl" style={{ transform: 'translateZ(14px)' }} />
                              <div className="absolute inset-1 bg-indigo-600/20 border border-white/30 rounded-xl" style={{ transform: 'translateZ(-14px) rotateY(180deg)' }} />
                              <div className="absolute inset-0 border border-emerald-400/40 rounded-full bg-emerald-400/5" style={{ transform: 'rotateX(45deg)' }} />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tiny micro particles/spheres floating in front orbits */}
                      <div 
                        className="absolute top-10 right-8 w-5.5 h-5.5 bg-gradient-to-br from-indigo-400/25 to-purple-400/25 border border-white/35 backdrop-blur-3xs rounded-full pointer-events-none z-20 transition-all duration-700 ease-out group-hover:translate-y-[-12px] group-hover:scale-125"
                        style={{ transform: 'translateZ(25px)' }}
                      />
                      <div 
                        className="absolute bottom-1/4 left-10 w-4 h-4 bg-gradient-to-tr from-emerald-400/25 to-teal-400/25 border border-white/35 backdrop-blur-3xs rounded-full pointer-events-none z-20 transition-all duration-750 ease-out group-hover:translate-x-[-15px] group-hover:scale-130"
                        style={{ transform: 'translateZ(35px)' }}
                      />

                      {/* Floor 3D ambient shadow */}
                      <div className="absolute -bottom-4 inset-x-8 h-4 bg-slate-950/5 rounded-full blur-md -z-10 group-hover:scale-x-[1.03] group-hover:bg-slate-950/8 transition-all duration-500" />

                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start select-none">
                    
                    {/* Category badge - coordinated with light-blue theme */}
                    <span className="text-[10.5px] font-black tracking-widest text-blue-600 bg-blue-50 border border-blue-100/30 px-3.5 py-1.5 rounded-full mb-5 uppercase">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 font-display leading-tight">
                      {project.title}
                    </h3>

                    {/* Main Paragraph */}
                    <p className="text-slate-500 mb-8 leading-relaxed font-semibold text-sm sm:text-[14.5px]">
                      {project.description}
                    </p>

                    {/* Bullets with exquisite matching color theme numbers */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-9 w-full">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 flex items-center justify-center p-1 bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-mono font-black w-6 h-6 rounded-md border border-blue-100/40 shadow-3xs">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm font-semibold text-slate-600 leading-snug">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Styled Button - Coordinate with high end blue/indigo gradient styling */}
                    <button
                      onClick={() => onStartProject(project.title)}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-black text-sm shadow-md shadow-blue-600/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20 cursor-pointer"
                    >
                      <span>Start Your Project</span>
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </button>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Portfolio FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] scroll-mt-24 select-none relative overflow-hidden border-t border-slate-100">
        
        {/* Decorative halos */}
        <div className="absolute top-1/2 left-12 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[85px] pointer-events-none" />
        <div className="absolute bottom-10 right-24 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-8 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-3 flex flex-col items-start select-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/60 border border-blue-100/30 text-blue-600 rounded-full text-[11px] font-bold mb-4 tracking-wider uppercase">
                <span>PROJECT FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display leading-[1.15]">
                Frequently <br className="hidden lg:block" /> Asked Questions
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 rounded-full mt-4 mb-4 shadow-sm" />
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                Timelines, deliverables, source code, and support — everything about our project work.
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
                      <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-medium">
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
