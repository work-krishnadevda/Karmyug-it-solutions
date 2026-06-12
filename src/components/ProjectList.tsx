import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';
// Added ChevronDown and ChevronUp for the Read More button
import { ArrowUpRight, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectListProps {
  onStartProject: (projectName: string) => void;
  onViewAllProjects?: () => void;
}

// Extracted the single card into a sub-component to handle the "Read More" state independently
const ProjectCard = ({ project, index, onStartProject }: { project: ProjectItem; index: number; onStartProject: (name: string) => void }) => {
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);

  // If expanded show all bullets, otherwise show only the first 2
  const visibleBullets = isExpanded ? project.bullets : project.bullets.slice(0, 2);

  return (
    <div
      className={`flex flex-col lg:flex-row gap-10 lg:gap-14 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Visual Image Screen Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div 
          className="relative w-full overflow-visible preserve-3d group cursor-pointer"
          style={{ perspective: '1200px' }}
        >
          {/* Perspective card boundary box */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-150/80 bg-white shadow-lg shadow-slate-200 project-card-3d flex">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/12 via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 z-10" />
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/12 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-all duration-500" />

            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain group-hover:scale-[1.04] transition-transform duration-700"
            />
            
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
          </div>

          {/* INTERACTIVE FLOATING 3D ELEMENTS */}
          {isEven ? (
            <div 
              className="absolute -right-5 -bottom-5 w-16 h-16 preserve-3d pointer-events-none z-20 transition-all duration-500 ease-out group-hover:scale-125 group-hover:translate-x-3 group-hover:-translate-y-5 filter drop-shadow-[0_12px_24px_rgba(245,158,11,0.28)]"
              style={{ transform: 'translateZ(45px)' }}
            >
              <div className="relative w-full h-full preserve-3d anime-float-normal">
                <div className="absolute inset-0 preserve-3d animate-[slowSpinRight_10s_linear_infinite]">
                  <div className="absolute inset-0 bg-amber-500/35 border border-white/65 backdrop-blur-[2px] rounded-md" style={{ transform: 'translateZ(16px)' }} />
                  <div className="absolute inset-0 bg-yellow-400/20 border border-white/45 backdrop-blur-[2px] rounded-md" style={{ transform: 'rotateY(90deg) translateZ(16px)' }} />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-amber-300/30 border border-white/60 backdrop-blur-[2px] rounded-md" style={{ transform: 'rotateX(90deg) translateZ(16px)' }} />
                  <div className="absolute inset-0 bg-amber-600/30 border border-white/20 rounded-md" style={{ transform: 'translateZ(-16px) rotateY(180deg)' }} />
                </div>
              </div>
            </div>
          ) : (
            <div 
              className="absolute -left-5 -bottom-5 w-16 h-16 preserve-3d pointer-events-none z-20 transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-x-3 group-hover:-translate-y-5 filter drop-shadow-[0_12px_24px_rgba(59,130,246,0.28)]"
              style={{ transform: 'translateZ(55px)' }}
            >
              <div className="relative w-full h-full preserve-3d anime-float-reverse">
                <div className="absolute inset-0 preserve-3d animate-[slowSpinLeft_12s_linear_infinite]">
                  <div className="absolute inset-0 bg-blue-500/35 border border-white/70 backdrop-blur-[2px] rounded-xl" style={{ transform: 'translateZ(14px)' }} />
                  <div className="absolute inset-1 bg-indigo-600/20 border border-white/30 rounded-xl" style={{ transform: 'translateZ(-14px) rotateY(180deg)' }} />
                  <div className="absolute inset-0 border border-emerald-400/40 rounded-full bg-emerald-400/5" style={{ transform: 'rotateX(45deg)' }} />
                </div>
              </div>
            </div>
          )}

          <div 
            className="absolute top-10 right-8 w-5.5 h-5.5 bg-gradient-to-br from-indigo-400/25 to-purple-400/25 border border-white/35 backdrop-blur-[2px] rounded-full pointer-events-none z-20 transition-all duration-700 ease-out group-hover:translate-y-[-12px] group-hover:scale-125"
            style={{ transform: 'translateZ(25px)' }}
          />
          <div 
            className="absolute bottom-1/4 left-10 w-4 h-4 bg-gradient-to-tr from-emerald-400/25 to-teal-400/25 border border-white/35 backdrop-blur-[2px] rounded-full pointer-events-none z-20 transition-all duration-750 ease-out group-hover:translate-x-[-15px] group-hover:scale-125"
            style={{ transform: 'translateZ(35px)' }}
          />

          <div className="absolute -bottom-4 inset-x-8 h-4 bg-slate-950/5 rounded-full blur-md -z-10 group-hover:scale-x-[1.03] group-hover:bg-slate-950/8 transition-all duration-500" />
        </div>
      </div>

      {/* Content Side - Added justify-center to vertically center text parallel to image */}
      <div className="w-full lg:w-1/2 flex flex-col items-start select-none justify-center">
        
        {/* Category badge */}
        <span className="text-[10.5px] font-black tracking-widest text-blue-600 bg-blue-50 border border-blue-100/30 px-3.5 py-1.5 rounded-full mb-4 uppercase">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 font-display leading-tight">
          {project.title}
        </h3>

        {/* Main Paragraph - Added line-clamp-3 when not expanded */}
        <p className={`text-slate-500 mb-5 leading-relaxed font-semibold text-sm sm:text-[14.5px] transition-all duration-300 ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {project.description}
        </p>

        {/* Bullets grid - Uses visibleBullets array */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4 w-full">
          {visibleBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 flex items-center justify-center p-1 bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-mono font-black w-6 h-6 rounded-md border border-blue-100/40 shadow-sm">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-slate-600 leading-snug">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        {/* Read More Toggle Button */}
        {(project.bullets.length > 2 || project.description.length > 150) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-indigo-600 font-bold text-[13px] mb-8 transition-colors group/btn"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
            )}
          </button>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => onStartProject(project.title)}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-black text-sm shadow-md shadow-blue-600/15 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/20 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={project.projecturl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-black text-sm shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>View Project Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default function ProjectList({ onStartProject, onViewAllProjects }: ProjectListProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'website' | 'application'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeTab === 'all') return true;
    return project.type === activeTab;
  }).slice(0, 6);

  return (
    <section id="portfolio" className="py-14 bg-gradient-to-b from-[#F8FAFC] to-white scroll-mt-12 relative overflow-hidden select-none border-t border-slate-100">
      
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
      `}} />

      {/* Decorative halos in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/5 via-indigo-400/0 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400/[0.015] rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[85px] pointer-events-none -z-10" />

      {/* Left Margin: Glass 3D Diamond/Prism Shape */}
      <div className="hidden xl:flex absolute top-[18%] left-8 w-24 h-24 items-center justify-center anime-3d-float-1 pointer-events-none z-10 opacity-70">
        <div className="relative w-16 h-16 preserve-3d anime-spin-3d-left">
          <div className="absolute inset-0 bg-blue-500/15 border border-white/40 shadow-inner rounded-sm backdrop-blur-[2px]" style={{ transform: 'translateZ(16px)' }} />
          <div className="absolute inset-0 bg-indigo-600/10 border border-white/10 rounded-sm" style={{ transform: 'translateZ(-16px) rotateY(180deg)' }} />
          <div className="absolute inset-x-0 top-0 bottom-0 bg-indigo-500/15 border border-white/25 rounded-sm origin-left" style={{ transform: 'rotateY(90deg) translateZ(-16px)' }} />
          <div className="absolute inset-x-0 top-0 bottom-0 bg-blue-400/20 border border-white/30 rounded-sm origin-right" style={{ transform: 'rotateY(-90deg) translateZ(-16px)' }} />
          <div className="absolute w-12 h-12 bg-indigo-900/10 rounded-full blur-sm -bottom-10 left-2 transform" style={{ transform: 'rotateX(90deg) translateZ(-30px)' }} />
        </div>
      </div>

      {/* Right Margin: Glass 3D Floating Double Cube Ring */}
      <div className="hidden xl:flex absolute bottom-[25%] right-8 w-28 h-28 items-center justify-center anime-3d-float-2 pointer-events-none z-10 opacity-70">
        <div className="relative w-16 h-16 preserve-3d anime-spin-3d-right">
          <div className="absolute inset-2 bg-emerald-400/20 border border-white/45 shadow-sm rounded-md backdrop-blur-[2px]" style={{ transform: 'translateZ(10px)' }} />
          <div className="absolute inset-2 bg-teal-500/15 border border-white/20 rounded-md" style={{ transform: 'translateZ(-10px) rotateY(180deg)' }} />
          <div className="absolute inset-0 border border-blue-400/30 rounded-lg bg-blue-400/5" style={{ transform: 'translateZ(-20px)' }} />
          <div className="absolute inset-0 border border-indigo-400/30 rounded-lg bg-indigo-550/5" style={{ transform: 'translateZ(20px)' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 select-none flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/60 border border-blue-100/30 text-blue-600 rounded-full text-[10px] font-bold mb-4 tracking-widest uppercase">
            <span>OUR PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl font-black tracking-tight text-slate-900 font-display sm:text-5xl">
            Our Top <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="mt-4 text-sm sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed font-semibold">
            Explore websites and applications we have designed, built, and launched for brands across India and beyond.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1 rounded-full border border-slate-100 flex items-center shadow-sm">
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
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/15 scale-[1.02]'
                      : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects List with Alternating Layout mapped using the extracted ProjectCard */}
        <div className="space-y-24 sm:space-y-28">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onStartProject={onStartProject} 
            />
          ))}
        </div>

        {/* View All Projects link */}
        <div className="text-center mt-20">
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 font-black text-sm sm:text-base text-blue-600 hover:text-indigo-600 font-display group/all cursor-pointer transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover/all:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}