import React from 'react';
import { TEAM_DATA } from '../data';
import { 
  Linkedin, 
  Twitter, 
  Youtube,
  Sparkles,
  Mail
} from 'lucide-react';

const THEMES = [
  {
    card: 'hover:border-blue-400',
    badge: 'bg-blue-50 text-blue-600 border-blue-100',
    ring: 'group-hover:ring-blue-400/40',
    text: 'group-hover:text-blue-600',
    glow: 'bg-blue-500/5',
    imageBg: 'from-blue-500/10 to-sky-400/5',
  },
  {
    card: 'hover:border-purple-400',
    badge: 'bg-purple-50 text-purple-600 border-purple-100',
    ring: 'group-hover:ring-purple-400/40',
    text: 'group-hover:text-purple-600',
    glow: 'bg-purple-500/5',
    imageBg: 'from-purple-500/10 to-pink-400/5',
  },
  {
    card: 'hover:border-emerald-400',
    badge: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    ring: 'group-hover:ring-emerald-400/40',
    text: 'group-hover:text-emerald-600',
    glow: 'bg-emerald-500/5',
    imageBg: 'from-emerald-500/10 to-green-400/5',
  },
  {
    card: 'hover:border-rose-400',
    badge: 'bg-rose-50 text-rose-600 border-rose-100',
    ring: 'group-hover:ring-rose-400/40',
    text: 'group-hover:text-rose-600',
    glow: 'bg-rose-500/5',
    imageBg: 'from-rose-500/10 to-red-400/5',
  },
  {
    card: 'hover:border-amber-400',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    ring: 'group-hover:ring-amber-400/40',
    text: 'group-hover:text-amber-600',
    glow: 'bg-amber-500/5',
    imageBg: 'from-amber-500/10 to-orange-400/5',
  },
  {
    card: 'hover:border-cyan-400',
    badge: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    ring: 'group-hover:ring-cyan-400/40',
    text: 'group-hover:text-cyan-600',
    glow: 'bg-cyan-500/5',
    imageBg: 'from-cyan-500/10 to-sky-400/5',
  },
  {
    card: 'hover:border-indigo-400',
    badge: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    ring: 'group-hover:ring-indigo-400/40',
    text: 'group-hover:text-indigo-600',
    glow: 'bg-indigo-500/5',
    imageBg: 'from-indigo-500/10 to-violet-400/5',
  },
  {
    card: 'hover:border-lime-400',
    badge: 'bg-lime-50 text-lime-700 border-lime-100',
    ring: 'group-hover:ring-lime-400/40',
    text: 'group-hover:text-lime-600',
    glow: 'bg-lime-500/5',
    imageBg: 'from-lime-500/10 to-green-400/5',
  },
  {
    card: 'hover:border-fuchsia-400',
    badge: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
    ring: 'group-hover:ring-fuchsia-400/40',
    text: 'group-hover:text-fuchsia-600',
    glow: 'bg-fuchsia-500/5',
    imageBg: 'from-fuchsia-500/10 to-pink-400/5',
  },
];


export default function TeamGrid() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[220px] h-[220px] bg-blue-500/[0.02] rounded-full blur-[70px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[220px] h-[220px] bg-purple-500/[0.02] rounded-full blur-[70px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">

        {/* Header */}
        <div className="mb-8 text-center">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-[10px] font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Behind The Success
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Team
          </h2>

          <div className="h-1 w-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-3" />

          <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto">
            Passionate experts who combine technology, design and marketing
            to deliver exceptional digital experiences.
          </p>

        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {TEAM_DATA.map((member, index) => {
            const theme = THEMES[index % THEMES.length];

            return (
              <div
                key={member.id}
                className={`group bg-white border border-slate-100 rounded-[24px] p-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${theme.card}`}
              >
                {/* Hover Glow */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${theme.glow}`}
                />

                <div className="relative z-10 flex flex-col items-center text-center">

                  {/* Avatar */}
                  <div className="relative w-[72px] h-[72px] mb-3">

                    <div
                      className={`absolute inset-0 rounded-full ring-4 ring-slate-100 transition-all duration-500 ${theme.ring}`}
                    />

                    <div
                      className={`absolute inset-1 rounded-full bg-gradient-to-tr ${theme.imageBg}`}
                    />

                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="relative z-10 w-full h-full rounded-full object-cover border border-white"
                    />
                  </div>

                  {/* Name */}
                  <h3
                    className={`text-[15px] font-black text-slate-900 transition-colors duration-300 ${theme.text}`}
                  >
                    {member.name}
                  </h3>

                  {/* Role */}
                  <span
                    className={`mt-1.5 px-3 py-1 rounded-full border text-[9px] font-bold tracking-wider uppercase ${theme.badge}`}
                  >
                    {member.role}
                  </span>

                  {/* Description */}
                  <p className="mt-2 text-[11px] text-slate-500 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-2.5 w-full">

                    <a
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:text-white hover:border-transparent transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="#"
                      aria-label={`${member.name} Twitter`}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:text-white hover:border-transparent transition-all"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`mailto:contact@karmyug.com?subject=Contact%20with%20${member.name}`}
                      aria-label={`Contact ${member.name}`}
                      className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-[#EA4335] hover:text-white hover:border-transparent transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


