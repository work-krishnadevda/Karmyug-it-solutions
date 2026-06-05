import { Search, Pencil, Rocket, TrendingUp, Headset } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        
        {/* Top Centered Header - Reduced Margin & Size */}
        <div className="w-full text-center mb-10 md:mb-12 select-none">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-black tracking-tight text-slate-900 leading-none font-display">
            How We <span className="text-[#22C55E]">Work</span>
          </h2>
        </div>

        {/* 6-Step Grid Layout - Tighter gaps (gap-y-12) */}
        {/* CHANGED HERE: Added grid-cols-3 as base so it stays 3 columns on small screens */}
        <div className="w-full grid grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-2 sm:gap-x-4 relative z-10">
          
          {/* Step 1: Discovery */}
          <div className="flex flex-col items-center relative group w-full px-1 sm:px-2 text-center select-none">
            {/* Bubble size scaled slightly for smaller screens */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-blue-200 cursor-pointer">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0.01)_70%)] pointer-events-none" />
              <Search
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6] relative z-10 animate-[bounce_5s_infinite_ease-in-out]"
                strokeWidth={2.5}
              />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1E88E5] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center absolute -top-1 -right-1 border-[1.5px] border-white shadow-sm shadow-blue-500/20 z-20">
                01
              </span>
            </div>

            {/* Dotted curve - Height and position adjusted for smaller bubbles */}
            <div className="absolute top-8 sm:top-10 left-[calc(50%+30px)] sm:left-[calc(50%+40px)] w-[calc(100%-60px)] sm:w-[calc(100%-80px)] h-4 sm:h-6 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                <path d="M 1,22 C 30,-5 70,-5 99,22" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 82,14 L 88,18 L 82,22" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-[12px] sm:text-[15px] font-black text-slate-900 mt-3 sm:mt-4 mb-1 font-display">
              Discovery
            </h3>
            <p className="text-[9.5px] sm:text-[11.5px] text-slate-500 font-semibold leading-snug sm:leading-relaxed max-w-[170px]">
              We learn your goals, audience, and technical requirements.
            </p>
          </div>

          {/* Step 2: Design */}
          <div className="flex flex-col items-center relative group w-full px-1 sm:px-2 text-center select-none">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-200 cursor-pointer">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0.01)_70%)] pointer-events-none" />
              <Pencil
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#10B981] relative z-10 hover:rotate-6 transition-transform"
                strokeWidth={2.5}
              />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#22C55E] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center absolute -top-1 -right-1 border-[1.5px] border-white shadow-sm shadow-emerald-500/20 z-20">
                02
              </span>
            </div>

            <div className="absolute top-8 sm:top-10 left-[calc(50%+30px)] sm:left-[calc(50%+40px)] w-[calc(100%-60px)] sm:w-[calc(100%-80px)] h-4 sm:h-6 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                <path d="M 1,22 C 30,-5 70,-5 99,22" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 82,14 L 88,18 L 82,22" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-[12px] sm:text-[15px] font-black text-slate-900 mt-3 sm:mt-4 mb-1 font-display">
              Design
            </h3>
            <p className="text-[9.5px] sm:text-[11.5px] text-slate-500 font-semibold leading-snug sm:leading-relaxed max-w-[170px]">
              Wireframes and UI mockups aligned with your brand identity.
            </p>
          </div>

          {/* Step 3: Develop */}
          <div className="flex flex-col items-center relative group w-full px-1 sm:px-2 text-center select-none">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-amber-200 cursor-pointer">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,rgba(245,158,11,0.01)_70%)] pointer-events-none" />
              
              {/* Custom code bracket scaled down */}
              <div className="relative w-6 h-8 sm:w-7 sm:h-9 bg-[#F59E0B] rounded flex flex-col items-center justify-center shadow-md border border-white/50 group-hover:rotate-3 transition-transform duration-300 z-10">
                <div className="absolute top-0.5 w-3.5 h-1 bg-amber-600 rounded-[1px]" />
                <span className="text-white text-[8px] sm:text-[10px] font-black font-mono tracking-tighter mt-1">
                  &lt;/&gt;
                </span>
              </div>

              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFA000] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center absolute -top-1 -right-1 border-[1.5px] border-white shadow-sm shadow-amber-500/20 z-20">
                03
              </span>
            </div>

            <h3 className="text-[12px] sm:text-[15px] font-black text-slate-900 mt-3 sm:mt-4 mb-1 font-display">
              Develop
            </h3>
            <p className="text-[9.5px] sm:text-[11.5px] text-slate-500 font-semibold leading-snug sm:leading-relaxed max-w-[170px]">
              Agile sprints with weekly demos and transparent progress.
            </p>
          </div>

          {/* Step 4: Launch */}
          <div className="flex flex-col items-center relative group w-full px-1 sm:px-2 text-center select-none">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(244,63,94,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-rose-200 cursor-pointer">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.12)_0%,rgba(244,63,94,0.01)_70%)] pointer-events-none" />
              <Rocket
                className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 -rotate-12 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                strokeWidth={2}
              />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EF5350] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center absolute -top-1 -right-1 border-[1.5px] border-white shadow-sm shadow-red-500/20 z-20">
                04
              </span>
            </div>

            <div className="absolute top-8 sm:top-10 left-[calc(50%+30px)] sm:left-[calc(50%+40px)] w-[calc(100%-60px)] sm:w-[calc(100%-80px)] h-4 sm:h-6 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                <path d="M 1,22 C 30,-5 70,-5 99,22" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 82,14 L 88,18 L 82,22" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-[12px] sm:text-[15px] font-black text-slate-900 mt-3 sm:mt-4 mb-1 font-display">
              Launch
            </h3>
            <p className="text-[9.5px] sm:text-[11.5px] text-slate-500 font-semibold leading-snug sm:leading-relaxed max-w-[170px]">
              Testing, deployment, training, and post-launch support.
            </p>
          </div>

          {/* Step 5: Growth/Scale */}
          <div className="flex flex-col items-center relative group w-full px-1 sm:px-2 text-center select-none">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(168,85,247,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-purple-200 cursor-pointer">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,rgba(168,85,247,0.01)_70%)] pointer-events-none" />
              <TrendingUp
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#A855F7] relative z-10 hover:-translate-y-1 transition-transform"
                strokeWidth={2.5}
              />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9333EA] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center absolute -top-1 -right-1 border-[1.5px] border-white shadow-sm shadow-purple-500/20 z-20">
                05
              </span>
            </div>

            <div className="absolute top-8 sm:top-10 left-[calc(50%+30px)] sm:left-[calc(50%+40px)] w-[calc(100%-60px)] sm:w-[calc(100%-80px)] h-4 sm:h-6 pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
                <path d="M 1,22 C 30,-5 70,-5 99,22" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 82,14 L 88,18 L 82,22" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-[12px] sm:text-[15px] font-black text-slate-900 mt-3 sm:mt-4 mb-1 font-display">
              Scale
            </h3>
            <p className="text-[9.5px] sm:text-[11.5px] text-slate-500 font-semibold leading-snug sm:leading-relaxed max-w-[170px]">
              Monitoring metrics and scaling your product for growth.
            </p>
          </div>

          {/* Step 6: Support */}
          <div className="flex flex-col items-center relative group w-full px-1 sm:px-2 text-center select-none">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-slate-100 shadow-[0_8px_25px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_35px_rgba(6,182,212,0.08)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-200 cursor-pointer">
              <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12)_0%,rgba(6,182,212,0.01)_70%)] pointer-events-none" />
              <Headset
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#06B6D4] relative z-10 hover:scale-110 transition-transform"
                strokeWidth={2.5}
              />
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0891B2] text-white text-[9px] sm:text-[10px] font-black flex items-center justify-center absolute -top-1 -right-1 border-[1.5px] border-white shadow-sm shadow-cyan-500/20 z-20">
                06
              </span>
            </div>

            <h3 className="text-[12px] sm:text-[15px] font-black text-slate-900 mt-3 sm:mt-4 mb-1 font-display">
              Support
            </h3>
            <p className="text-[9.5px] sm:text-[11.5px] text-slate-500 font-semibold leading-snug sm:leading-relaxed max-w-[170px]">
              Ongoing maintenance, updates, and dedicated technical help.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}