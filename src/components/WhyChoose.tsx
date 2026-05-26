import React from 'react';
import { 
  Users, 
  FileText, 
  Calendar, 
  Layers, 
  TrendingUp, 
  GitBranch, 
  Database, 
  Sparkles, 
  Briefcase 
} from 'lucide-react';
// @ts-ignore
import rocketImage from '../assets/images/launch_rocket_3d_1779529228672.png';

interface WhyChooseProps {
  onOpenContact: () => void;
}

export default function WhyChoose({ onOpenContact }: WhyChooseProps) {
  const firstRowPoints = [
    {
      text: "Dedicated project manager on every engagement",
      icon: Users,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
      dotColor: "bg-emerald-400"
    },
    {
      text: "Transparent pricing with no hidden costs",
      icon: FileText,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
      dotColor: "bg-amber-400"
    },
    {
      text: "Agile delivery with weekly progress demos",
      icon: Calendar,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
      dotColor: "bg-blue-400"
    },
    {
      text: "Post-launch support and maintenance plans",
      icon: Layers,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20 shadow-[0_0_15px_rgba(251,113,133,0.15)]",
      dotColor: "bg-rose-400"
    },
    {
      text: "SEO and performance optimization included",
      icon: TrendingUp,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.15)]",
      dotColor: "bg-yellow-400"
    }
  ];

  const capsulePoints = [
    {
      text: "Source code and assets handed over to you",
      icon: GitBranch,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20 shadow-[0_0_15px_rgba(192,132,252,0.15)]",
      dotColor: "bg-purple-400"
    },
    {
      text: "Custom CRM, HRMS & ERP built around your workflows",
      icon: Database,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]",
      dotColor: "bg-red-400"
    },
    {
      text: "AI-powered automation to reduce manual work",
      icon: Sparkles,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.15)]",
      dotColor: "bg-teal-400"
    },
    {
      text: "Industry-ready software for real estate, logistics & operations",
      icon: Briefcase,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
      dotColor: "bg-[#F59E0B]"
    }
  ];

  return (
    <section id="why" className="relative py-24 bg-[#03091e] overflow-hidden select-none border-t border-slate-900 scroll-mt-24">
      {/* Custom Styles Injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes chooseFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.05); }
        }
        .anime-choose-float {
          animation: chooseFloat 6s ease-in-out infinite;
        }
        .anime-orbit-1 {
          animation: orbitSpin 35s linear infinite;
        }
        .anime-orbit-2 {
          animation: orbitSpin 50s linear infinite reverse;
        }
        .anime-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}} />

      {/* Decorative Space Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none anime-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none anime-pulse-glow" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#7c3aed]/5 rounded-full blur-[100px] pointer-events-none anime-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Block with Title, Description, and Features lists */}
          <div className="xl:col-span-9 flex flex-col justify-between">
            <div>
              {/* Premium small tag */}
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#00E5FF] mb-2 font-mono">
                Why Choose Kamryug?
              </p>
              
              {/* Stunning Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white font-display leading-[1.12]">
                Your Success Is Our Mission
              </h2>
            </div>

            {/* Grid of 5 Standard Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
              {firstRowPoints.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center border ${item.border} ${item.bg} shrink-0 relative transition-transform duration-300 group-hover:scale-110`}>
                    <div className={`absolute inset-0 rounded-full ${item.bg} blur-sm opacity-40`} />
                    <item.icon className={`w-5 h-5 ${item.color} relative z-10`} />
                    <span className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enclosing Glass Capsule containing the remaining 4 features */}
            <div className="relative mt-12 backdrop-blur-md bg-white/[0.01] border border-white/[0.06] rounded-[28px] p-6 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_20px_50px_rgba(0,0,0,0.35)]">
              {/* Soft background light streak in the glass capsule */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {capsulePoints.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center border ${item.border} ${item.bg} shrink-0 relative transition-transform duration-300 group-hover:scale-110`}>
                      <div className={`absolute inset-0 rounded-full ${item.bg} blur-sm opacity-40`} />
                      <item.icon className={`w-5 h-5 ${item.color} relative z-10`} />
                      <span className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block - Rocket Visual Stage */}
          <div className="xl:col-span-3 flex justify-center items-center relative py-8 xl:py-0">
            {/* Ambient Pad Light */}
            <div className="absolute bottom-1 w-52 h-14 bg-blue-500/10 blur-xl rounded-full" />
            
            {/* The Stage Visual */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center anime-choose-float">
              
              {/* Orbiting track 1 */}
              <div className="absolute w-full h-full border border-dashed border-sky-500/10 rounded-full anime-orbit-1 pointer-events-none" />
              
              {/* Orbiting track 2 with some rotation angle */}
              <div className="absolute w-full h-full border border-sky-500/15 rounded-full rotate-[40deg] anime-orbit-2 pointer-events-none">
                {/* Glowing points along the orbit to represent space particles */}
                <span className="absolute top-4 left-12 w-2 h-2 rounded-full bg-cyan-400 blur-[2px] shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                <span className="absolute bottom-10 right-8 w-1.5 h-1.5 rounded-full bg-blue-400 blur-[1px] shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>

              {/* Pedestal platform ring */}
              <div className="absolute bottom-4 w-48 h-3.5 bg-gradient-to-r from-slate-900 to-[#0e172e] rounded-full border border-slate-700/80 shadow-2xl flex items-center justify-center">
                <div className="w-11/12 h-2 bg-gradient-to-r from-[#00E5FF]/20 to-[#3B82F6]/30 blur-xs rounded-full animate-pulse" />
              </div>

              {/* The rocket render itself */}
              <img
                src={rocketImage}
                alt="Kamryug Success Launch 3D Rocket"
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-contain relative z-10 select-none drop-shadow-[0_15px_30px_rgba(59,130,246,0.25)] transition-transform duration-300 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Space cloud puffs or visual vapor emissions below rocket */}
              <div className="absolute bottom-5 flex gap-1 justify-center items-center z-5 pointer-events-none">
                <span className="w-8 h-8 rounded-full bg-white/10 blur-md animate-ping" />
                <span className="w-12 h-12 rounded-full bg-cyan-500/10 blur-lg animate-pulse" />
                <span className="w-6 h-6 rounded-full bg-blue-500/10 blur-md animate-ping" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
