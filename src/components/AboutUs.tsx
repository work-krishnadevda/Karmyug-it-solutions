import React from 'react';
import { 
  Rocket, 
  Eye, 
  Cpu, 
  Gem, 
  Star 
} from 'lucide-react';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-[#FAFBFD] scroll-mt-24 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatAbout1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes floatAbout2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-3deg); }
        }
        .anime-about-float-1 {
          animation: floatAbout1 10s ease-in-out infinite;
        }
        .anime-about-float-2 {
          animation: floatAbout2 12s ease-in-out infinite;
        }
        .prism-cylinder {
          transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
          transform-style: preserve-3d;
        }
        .isometric-bar {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .isometric-bar:hover {
          transform: scale3d(1.1, 1.1, 1.25);
        }
      `}} />

      {/* Background Glows */}
      <div className="absolute top-1/4 left-4 sm:left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-500/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-8 sm:bottom-12 right-4 sm:right-20 w-56 sm:w-80 lg:w-[450px] h-56 sm:h-80 lg:h-[450px] bg-indigo-500/5 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 lg:mb-14 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display">
            About karmyug
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 w-12 sm:w-16 rounded-full mt-3 sm:mt-3.5 shadow-sm" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 xl:gap-4 items-stretch">

          {/* Card 1: Our Mission */}
          <div className="bg-white border border-slate-200 rounded-[16px] sm:rounded-[20px] p-3.5 sm:p-4 flex flex-col justify-start group hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-2 sm:mb-2.5 relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-md rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-b from-white/30 to-transparent" />
              <Rocket className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-sm" />
            </div>
            
            <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-black tracking-tight text-slate-900 font-display mb-1">
              Our Mission
            </h3>
            {/* Changed to leading-snug for tighter text */}
            <p className="text-[10.5px] sm:text-[11.5px] text-slate-500 leading-snug font-semibold">
              Empower businesses with reliable, AI-ready software — from websites and marketing to CRM, HRMS, ERP, and workflow automation — so teams work smarter and scale with confidence.
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-white border border-slate-200 rounded-[16px] sm:rounded-[20px] p-3.5 sm:p-4 flex flex-col justify-start group hover:border-[#10B981] hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-2 sm:mb-2.5 relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-md rotate-[4deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-b from-white/30 to-transparent" />
              <Eye className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-sm" />
            </div>
            
            <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-black tracking-tight text-slate-900 font-display mb-1">
              Our Vision
            </h3>
            <p className="text-[10.5px] sm:text-[11.5px] text-slate-500 leading-snug font-semibold">
              To be the trusted technology partner for startups and enterprises across India and globally, known for custom solutions that deliver measurable business impact.
            </p>
          </div>

          {/* Card 3: AI-First Philosophy */}
          <div className="bg-white border border-slate-200 rounded-[16px] sm:rounded-[20px] p-3.5 sm:p-4 flex flex-col justify-start group hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-2 sm:mb-2.5 relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-md rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-b from-white/30 to-transparent" />
              <Cpu className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-sm" />
            </div>
            
            <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-black tracking-tight text-slate-900 font-display mb-1">
              AI-First Philosophy
            </h3>
            <p className="text-[10.5px] sm:text-[11.5px] text-slate-500 leading-snug font-semibold">
              We believe in an AI-first, human-centered approach: automate what should be automated, keep people in control, and build software that grows with your business.
            </p>
          </div>

          {/* Card 4: Our Values */}
          <div className="bg-white border border-slate-200 rounded-[16px] sm:rounded-[20px] p-3.5 sm:p-4 flex flex-col justify-start group hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-rose-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-2 sm:mb-2.5 relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center shadow-md rotate-[6deg] group-hover:rotate-0 transition-transform duration-300">
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-b from-white/30 to-transparent" />
              <Gem className="w-4 h-4 sm:w-4 sm:h-4 text-white drop-shadow-sm" />
            </div>
            
            <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-black tracking-tight text-slate-900 font-display mb-1.5">
              Our Values
            </h3>
            {/* Reduced vertical space between list items */}
            <ul className="space-y-1.5 sm:space-y-2 pr-1">
              {[
                'Quality & transparency',
                'Client ownership',
                'Innovation with ROI focus',
                'Long-term support'
              ].map((val, idx) => (
                <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-slate-600 font-bold text-[10px] sm:text-[11px] leading-tight select-none">
                  <div className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] rounded-full bg-amber-500/[0.08] flex items-center justify-center shrink-0 border border-amber-500/10">
                    <Star className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] text-amber-500 fill-amber-500" strokeWidth={3} />
                  </div>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 5: Stats (Unchanged to maintain graph layout) */}
          <div className="col-span-2 lg:col-span-1 bg-white border border-[#4F46E5]/15 rounded-[20px] sm:rounded-[24px] xl:rounded-[28px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between group hover:border-[#4F46E5] hover:shadow-[0_22px_45px_rgba(79,70,229,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full min-h-[280px] sm:min-h-[260px] lg:min-h-[auto]">
            <div className="absolute inset-[1px] rounded-[19px] sm:rounded-[23px] xl:rounded-[27px] pointer-events-none border border-transparent group-hover:border-[#4f46e5]/10 transition-colors" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-[9px] sm:text-[9.5px] font-black uppercase tracking-[0.16em] text-slate-400 mb-3 sm:mb-4 font-mono select-none">
                  Years of Excellence
                </p>

                <div className="mb-3 sm:mb-4">
                  <div className="text-[28px] sm:text-[30px] lg:text-[34px] font-black text-slate-900 font-display leading-none mb-0.5 tracking-tight group-hover:text-blue-600 transition-colors">
                    8+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>

                <div className="w-8 sm:w-10 h-[1.5px] border-t border-dashed border-slate-200 my-3 sm:my-4" />

                <div>
                  <div className="text-[28px] sm:text-[30px] lg:text-[34px] font-black text-slate-900 font-display leading-none mb-0.5 tracking-tight group-hover:text-emerald-600 transition-colors">
                    500+
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* 3D Bar Chart */}
              <div className="absolute bottom-[-15px] right-[-10px] w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex items-end justify-center pointer-events-none pb-3 sm:pb-4 relative z-5">
                <div className="relative w-20 sm:w-24 lg:w-28 h-16 sm:h-18 lg:h-20 flex gap-1.5 sm:gap-2 items-end select-none">

                  {/* Left Column (Red) */}
                  <div className="relative w-3 sm:w-4 group/bar h-8 sm:h-10 transition-transform duration-300 select-none cursor-default mb-1 pl-0.5 sm:pl-1">
                    <div className="absolute -bottom-1 -left-1 w-4 sm:w-5 h-1.5 sm:h-2 bg-slate-900/10 blur-[3px] rounded-full filter" />
                    <div className="relative h-full w-3 sm:w-3.5 bg-rose-500 rounded-sm shadow-[inset_1px_1px_rgba(255,255,255,0.2)]">
                      <div className="absolute -top-[3px] inset-x-[0.5px] h-1 bg-rose-400 rounded-t-sm rotate-[12deg] shadow-sm" />
                      <div className="absolute inset-y-0 right-0 w-[2px] sm:w-[2.5px] bg-red-700/40 rounded-r-sm" />
                    </div>
                  </div>

                  {/* Middle Column (Gold) */}
                  <div className="relative w-3 sm:w-4 group/bar h-12 sm:h-16 transition-transform duration-300 select-none cursor-default mb-1">
                    <div className="absolute -bottom-1 -left-1 w-5 sm:w-6 h-1.5 sm:h-2 bg-slate-900/10 blur-[3px] rounded-full filter" />
                    <div className="relative h-full w-3 sm:w-3.5 bg-amber-500 rounded-sm shadow-[inset_1px_1px_rgba(255,255,255,0.2)]">
                      <div className="absolute -top-[3px] inset-x-[0.5px] h-1 bg-amber-300 rounded-t-sm rotate-[12deg] shadow-sm" />
                      <div className="absolute inset-y-0 right-0 w-[2px] sm:w-[2.5px] bg-amber-700/45 rounded-r-sm" />
                    </div>
                  </div>

                  {/* Right Column (Blue) */}
                  <div className="relative w-3 sm:w-4 group/bar h-18 sm:h-24 transition-transform duration-300 select-none cursor-default">
                    <div className="absolute -bottom-1 -left-1 w-5 sm:w-6 h-2 sm:h-2.5 bg-slate-900/20 blur-[4px] rounded-full filter" />
                    <div className="relative h-full w-3 sm:w-4 bg-gradient-to-t from-blue-600 to-sky-500 rounded-sm sm:rounded-md shadow-[inset_1px_1.5px_rgba(255,255,255,0.25)]">
                      <div className="absolute -top-[3px] sm:-top-[4px] inset-x-[0.5px] h-1 sm:h-1.5 bg-sky-300 rounded-t-sm rotate-[12deg] shadow-sm" />
                      <div className="absolute inset-y-0 right-0 w-[2px] sm:w-[3px] bg-blue-800/45 rounded-r-sm sm:rounded-r-md" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}