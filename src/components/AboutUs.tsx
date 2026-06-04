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
  className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] scroll-mt-24 border-t border-slate-200/80 relative overflow-hidden"
>      
      {/* 3D Isometric / Orthographic Shapes for Background Ambience */}
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

        /* Isometric Cylinder/Prisms CSS */
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

      {/* Background Soft Interactive Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-20 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading Left-Aligned styled premiumly */}
        <div className="mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display">
            About karmyug
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 w-16 rounded-full mt-3.5 shadow-sm" />
        </div>

        {/* 5-Column Responsive Layout - side by side on Desktop */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-6 items-stretch">          
          {/* Card 1: Our Mission */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-7 flex flex-col justify-between group hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              {/* Glossy 3D-feeling Blue Rocket Icon container */}
              <div className="mb-6 relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-[0_10px_25px_rgba(59,130,246,0.3)] rotate-[-4deg] group-hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent" />
                <Rocket className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
              </div>
              <h3 className="text-base sm:text-[17px] font-black tracking-tight text-slate-900 font-display mb-3">
                Our Mission
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                Empower businesses with reliable, AI-ready software — from websites and marketing to CRM, HRMS, ERP, and workflow automation — so teams work smarter and scale with confidence.
              </p>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-7 flex flex-col justify-between group hover:border-[#10B981] hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              {/* Glossy 3D-feeling Green Eye Icon container */}
              <div className="mb-6 relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-[0_10px_25px_rgba(16,185,129,0.3)] rotate-[4deg] group-hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent" />
                <Eye className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
              </div>
              <h3 className="text-base sm:text-[17px] font-black tracking-tight text-slate-900 font-display mb-3">
                Our Vision
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                To be the trusted technology partner for startups and enterprises across India and globally, known for custom solutions that deliver measurable business impact.
              </p>
            </div>
          </div>

          {/* Card 3: AI-First Philosophy */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-7 flex flex-col justify-between group hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              {/* Glossy 3D-feeling Orange CPU Icon container */}
              <div className="mb-6 relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-[0_10px_25px_rgba(245,158,11,0.3)] rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent" />
                <Cpu className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
              </div>
              <h3 className="text-base sm:text-[17px] font-black tracking-tight text-slate-900 font-display mb-3">
                AI-First Philosophy
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                We believe in an AI-first, human-centered approach: automate what should be automated, keep people in control, and build software that grows with your business.
              </p>
            </div>
          </div>

          {/* Card 4: Our Values */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-7 flex flex-col justify-between group hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full">
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-rose-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div>
              {/* Glossy 3D-feeling Red Jewel/Gem Icon container */}
              <div className="mb-6 relative w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-400 flex items-center justify-center shadow-[0_10px_25px_rgba(244,63,94,0.3)] rotate-[6deg] group-hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent" />
                <Gem className="w-6 h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
              </div>
              <h3 className="text-base sm:text-[17px] font-black tracking-tight text-slate-900 font-display mb-4">
                Our Values
              </h3>
              
              {/* Beautiful custom-styled Star Bullet points exactly matching design */}
              <ul className="space-y-3.5 pr-2">
                {[
                  'Quality & transparency',
                  'Client ownership',
                  'Innovation with ROI focus',
                  'Long-term support'
                ].map((val, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-[12px] sm:text-[12.5px] leading-tight select-none">
                    <div className="w-[18px] h-[18px] rounded-full bg-amber-500/[0.08] flex items-center justify-center shrink-0 border border-amber-500/10">
                      <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" strokeWidth={3} />
                    </div>
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 5: Modern Stats Section containing Custom CSS 3D Isometric Cylinders */}
          <div className="bg-white border border-[#4F46E5]/15 rounded-[28px] p-7 flex flex-col justify-between group hover:border-[#4F46E5] hover:shadow-[0_22px_45px_rgba(79,70,229,0.06)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full min-h-[320px] sm:min-h-[auto]">
            {/* Visual Glass Edge Light Highlight inside stats card */}
            <div className="absolute inset-[1px] rounded-[27px] pointer-events-none border border-transparent group-hover:border-[#4f46e5]/10 transition-colors" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <p className="text-[9.5px] font-black uppercase tracking-[0.16em] text-slate-400 mb-4 font-mono select-none">
                  Years of Excellence
                </p>
                
                {/* Stat block 1 */}
                <div className="mb-4">
                  <div className="text-[34px] font-black text-slate-900 font-display leading-none mb-0.5 tracking-tight group-hover:text-blue-600 transition-colors">
                    8+
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>

                {/* Subdued dash separator */}
                <div className="w-10 h-[1.5px] border-t border-dashed border-slate-200 my-4" />

                {/* Stat block 2 */}
                <div>
                  <div className="text-[34px] font-black text-slate-900 font-display leading-none mb-0.5 tracking-tight group-hover:text-emerald-600 transition-colors">
                    500+
                  </div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* 3D Isometric Cylinder/Column Chart rendered beautifully via purely responsive HTML/Tailwind CSS at bottom-right of card */}
              <div className="absolute bottom-[-15px] right-[-10px] w-36 h-36 flex items-end justify-center pointer-events-none pb-4 relative z-5">
                
                {/* Isometric coordinate sandbox Container (Leaning Isometric projection perspective effect matching reference) */}
                <div className="relative w-28 h-20 flex gap-2 items-end select-none">
                  
                  {/* Left Column (Red) - Stands represent 3D cuboids */}
                  <div className="relative w-4 group/bar h-10 transition-transform duration-300 select-none cursor-default mb-1 pl-1">
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-1 -left-1 w-5 h-2 bg-slate-900/10 blur-[3px] rounded-full filter" />
                    
                    {/* Cuboid 3D structure using purely CSS angles and shadows */}
                    <div className="relative h-full w-3.5 bg-rose-500 rounded-sm shadow-[inset_1px_1px_rgba(255,255,255,0.2)]">
                      {/* Top cap (Glossy light reflection) */}
                      <div className="absolute -top-[3px] inset-x-[0.5px] h-1 bg-rose-400 rounded-t-sm rotate-[12deg] shadow-sm" />
                      {/* Side angle depth */}
                      <div className="absolute inset-y-0 right-0 w-[2.5px] bg-red-700/40 rounded-r-sm" />
                    </div>
                  </div>

                  {/* Middle Column (Gold/Yellow) */}
                  <div className="relative w-4 group/bar h-16 transition-transform duration-300 select-none cursor-default mb-1">
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-1 -left-1 w-6 h-2 bg-slate-900/10 blur-[3px] rounded-full filter" />
                    
                    {/* Cuboid 3D structure */}
                    <div className="relative h-full w-3.5 bg-amber-500 rounded-sm shadow-[inset_1px_1px_rgba(255,255,255,0.2)]">
                      {/* Top cap */}
                      <div className="absolute -top-[3px] inset-x-[0.5px] h-1 bg-amber-300 rounded-t-sm rotate-[12deg] shadow-sm" />
                      {/* Side angle depth */}
                      <div className="absolute inset-y-0 right-0 w-[2.5px] bg-amber-700/45 rounded-r-sm" />
                    </div>
                  </div>

                  {/* Right Column (Blue) - Tallest */}
                  <div className="relative w-4 group/bar h-24 transition-transform duration-300 select-none cursor-default">
                    {/* Shadow underneath */}
                    <div className="absolute -bottom-1 -left-1 w-6 h-2.5 bg-slate-900/20 blur-[4px] rounded-full filter" />
                    
                    {/* Cuboid 3D structure */}
                    <div className="relative h-full w-4 bg-gradient-to-t from-blue-600 to-sky-500 rounded-md shadow-[inset_1px_1.5px_rgba(255,255,255,0.25)]">
                      {/* Top cap */}
                      <div className="absolute -top-[4px] inset-x-[0.5px] h-1.5 bg-sky-300 rounded-t-sm rotate-[12deg] shadow-sm" />
                      {/* Side angle depth */}
                      <div className="absolute inset-y-0 right-0 w-[3px] bg-blue-800/45 rounded-r-md" />
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
