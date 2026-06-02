import React from 'react';
import { TEAM_DATA } from '../data';
import { 
  Linkedin, 
  Twitter, 
  Youtube,
  Sparkles,
  Mail
} from 'lucide-react';

const TEAM_METADATA: Record<string, {
  colorTheme: string;
  cardStyle: string;
  imageBg: string;
  roleBadge: string;
  ringColor: string;
  textHover: string;
  glowColor: string;
  socials: { linkedin: string; twitter: string; youtube: string };
}> = {
  'vijay-kumar': {
    colorTheme: 'blue',
    cardStyle: 'border-blue-100/60 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(59,130,246,0.07)]',
    imageBg: 'from-blue-500/10 to-sky-400/5',
    roleBadge: 'bg-blue-50/70 border-blue-100/60 text-blue-600',
    ringColor: 'ring-blue-100 group-hover:ring-blue-400/40',
    textHover: 'group-hover:text-blue-600',
    glowColor: 'bg-blue-500/5',
    socials: { linkedin: '#', twitter: '#', youtube: '#' }
  },
  'priya-sharma': {
    colorTheme: 'purple',
    cardStyle: 'border-purple-100/60 hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(168,85,247,0.07)]',
    imageBg: 'from-purple-500/10 to-pink-400/5',
    roleBadge: 'bg-purple-50/70 border-purple-100/60 text-purple-600',
    ringColor: 'ring-purple-100 group-hover:ring-purple-400/40',
    textHover: 'group-hover:text-purple-600',
    glowColor: 'bg-purple-500/5',
    socials: { linkedin: '#', twitter: '#', youtube: '#' }
  },
  'rahul-mehta': {
    colorTheme: 'amber',
    cardStyle: 'border-amber-100/60 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(245,158,11,0.07)]',
    imageBg: 'from-amber-500/10 to-orange-400/5',
    roleBadge: 'bg-amber-50/70 border-amber-100/60 text-amber-700',
    ringColor: 'ring-amber-100 group-hover:ring-amber-400/40',
    textHover: 'group-hover:text-amber-600',
    glowColor: 'bg-amber-500/5',
    socials: { linkedin: '#', twitter: '#', youtube: '#' }
  },
  'anita-desai': {
    colorTheme: 'rose',
    cardStyle: 'border-rose-100/60 hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.07)]',
    imageBg: 'from-rose-500/10 to-red-400/5',
    roleBadge: 'bg-rose-50/70 border-rose-100/60 text-rose-600',
    ringColor: 'ring-rose-100 group-hover:ring-rose-400/40',
    textHover: 'group-hover:text-rose-600',
    glowColor: 'bg-rose-500/5',
    socials: { linkedin: '#', twitter: '#', youtube: '#' }
  }
};

export default function TeamGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/60 scroll-mt-24 relative overflow-hidden select-none">
      
      {/* Dynamic Background Grid and Ambient Glow spots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/[0.02] rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-purple-500/[0.02] rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Left-Aligned Premium Header to match About Us style */}
        <div className="mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/60 border border-blue-100/30 text-blue-600 rounded-full text-[11px] font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Behind the Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display">
            Meet Our Team
          </h2>
          <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 w-16 rounded-full mt-3.5 shadow-sm" />
          <p className="mt-4 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
            Passionate experts who combine technology, design, and marketing to deliver real results.
          </p>
        </div>

        {/* Cohesive Horizontal-Layout Inspired Cards Grid (2 columns on tablets, 4 columns on large systems) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7">
          {TEAM_DATA.map((member) => {
            const meta = TEAM_METADATA[member.id] || TEAM_METADATA['vijay-kumar'];
            
            return (
              <div
                key={member.id}
                className={`group bg-white border rounded-[28px] p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${meta.cardStyle} hover:-translate-y-1.5`}
              >
                {/* Soft backdrop radial auroral glow active on card hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-550 ${meta.glowColor}`} />
                
                {/* Glare/Glossy line inside card */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                <div className="flex flex-col items-center text-center relative z-10">
                  
                  {/* Circle Portrait Frame with custom dynamic offset themes */}
                  <div className="relative w-24 h-24 mb-5 flex items-center justify-center shrink-0">
                    
                    {/* Ring layer */}
                    <div className={`absolute inset-0 rounded-full ring-4 ring-offset-2 transition-all duration-500 ${meta.ringColor}`} />
                    
                    {/* Decorative color halo backdrop behind face */}
                    <div className={`absolute inset-1.5 rounded-full bg-gradient-to-tr ${meta.imageBg} pointer-events-none`} />
                    
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="relative z-10 w-22 h-22 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/40"
                    />
                  </div>

                  {/* Header Info */}
                  <h3 className={`text-[16px] sm:text-[17px] font-black text-slate-900 tracking-tight font-display transition-colors duration-200 mt-1 ${meta.textHover}`}>
                    {member.name}
                  </h3>
                  
                  {/* Small tag badge */}
                  <span className={`inline-block mt-2 px-3 py-0.5 border rounded-full text-[9px] font-extrabold tracking-wider uppercase ${meta.roleBadge}`}>
                    {member.role}
                  </span>

                  {/* Description text */}
                  <p className="mt-4 text-[12px] sm:text-[12.5px] text-slate-500 leading-relaxed font-semibold px-1">
                    {member.description}
                  </p>
                </div>

                {/* Social media connections footer perfectly aligned */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-3.5 relative z-10">
                  
                  {/* LinkedIn */}
                  <a
                    href={meta.socials.linkedin}
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-transparent text-slate-400 bg-slate-50/50 hover:bg-[#0A66C2] hover:text-white hover:shadow-[0_4px_12px_rgba(10,102,194,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>

                  {/* Twitter */}
                  <a
                    href={meta.socials.twitter}
                    aria-label={`${member.name} Twitter Profile`}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-transparent text-slate-400 bg-slate-50/50 hover:bg-[#1DA1F2] hover:text-white hover:shadow-[0_4px_12px_rgba(29,161,242,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Twitter className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>

                  {/* Email Support Contact link */}
                  <a
                    href={`mailto:contact@kamryug.com?subject=Contact%20with%20${encodeURIComponent(member.name)}`}
                    aria-label={`Contact ${member.name}`}
                    className="w-8 h-8 rounded-full border border-slate-200 hover:border-transparent text-slate-400 bg-slate-50/50 hover:bg-[#EA4335] hover:text-white hover:shadow-[0_4px_12px_rgba(234,67,53,0.25)] flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
