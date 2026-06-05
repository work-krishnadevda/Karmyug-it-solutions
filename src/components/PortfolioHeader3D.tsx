import React from 'react';
import { Globe, Box, Users, Building2, TrendingUp, Settings, ShieldCheck } from 'lucide-react';

export default function PortfolioHeader3D() {
  return (
    <div className="relative w-full h-[420px] min-[400px]:h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center select-none overflow-x-clip overflow-y-visible">
            <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtleFloating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1.5deg); }
        }
        @keyframes floatAccents-slow {
          0%, 100% { transform: translateY(0px) rotate(4deg) translateZ(30px); }
          50% { transform: translateY(-12px) rotate(-2deg) translateZ(45px); }
        }
        @keyframes floatAccents-fast {
          0%, 100% { transform: translateY(0px) rotate(-6deg) translateZ(40px); }
          50% { transform: translateY(-16px) rotate(4deg) translateZ(60px); }
        }
        @keyframes floatAccents-medium {
          0%, 100% { transform: translateY(0px) rotate(1deg) translateZ(20px); }
          50% { transform: translateY(-9px) rotate(-4deg) translateZ(35px); }
        }
        @keyframes rocketVibrate {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(1px, -1.5px) rotate(0.5deg); }
          50% { transform: translate(-0.5px, 1px) rotate(-0.5deg); }
          75% { transform: translate(-1.5px, -0.5px) rotate(0.2deg); }
        }
        @keyframes orbitalRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scalePulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; filter: blur(50px); }
          50% { opacity: 0.65; filter: blur(65px); }
        }
        @keyframes lineDash {
          to { stroke-dashoffset: -20; }
        }
        
        .anime-float-slow {
          animation: floatAccents-slow 7s ease-in-out infinite;
        }
        .anime-float-fast {
          animation: floatAccents-fast 5s ease-in-out infinite;
        }
        .anime-float-medium {
          animation: floatAccents-medium 6s ease-in-out infinite;
        }
        .anime-main-float {
          animation: subtleFloating 8s ease-in-out infinite;
        }
        .anime-rocket-shake {
          animation: rocketVibrate 0.15s linear infinite;
        }
        .anime-orbit-spin {
          animation: orbitalRotate 30s linear infinite;
        }
        .anime-orbit-spin-reverse {
          animation: orbitalRotate 25s linear infinite reverse;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        /* Glossy Reflection Highlight Overlays */
        .glass-reflection-shine {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0) 60%
          );
        }
      `}} />

      {/* MAGIC RESPONSIVE SCALING WRAPPER */}
      <div className="relative flex items-center justify-center scale-[0.60] min-[390px]:scale-[0.70] sm:scale-[0.85] md:scale-100 origin-center transition-transform duration-300 w-full z-10">

        {/* Ambient Radial Color Underlayers */}
        <div 
          className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/25 via-indigo-500/5 to-transparent rounded-full pointer-events-none -z-10"
          style={{ animation: 'glowPulse 9s ease-in-out infinite', top: '10%' }}
        />
        <div 
          className="absolute w-[350px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 via-teal-500/0 to-transparent rounded-full pointer-events-none -z-10"
          style={{ animation: 'glowPulse 6s ease-in-out infinite', right: '5%', top: '20%' }}
        />

        {/* Global 3D Perspective Canvas */}
        <div 
          className="relative w-[340px] sm:w-[420px] h-[320px] sm:h-[380px] preserve-3d flex items-center justify-center"
          style={{ transform: 'perspective(1600px) rotateX(15deg) rotateY(-11deg) rotateZ(0deg)' }}
        >
          
          {/* 1. CYBERPUNK 3D CONCENTRIC NEON PEDESTAL BASE */}
          <div 
            className="absolute bottom-[-102px] sm:bottom-[-135px] preserve-3d flex items-center justify-center pointer-events-none"
            style={{ transform: 'rotateX(72deg) rotateY(0deg) rotateZ(0deg) translateZ(-50px) scale(1.15)' }}
          >
            <div className="absolute w-[340px] h-[340px] rounded-full border border-blue-500/10 opacity-60" />
            
            <div className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-sky-400/25 anime-orbit-spin-reverse flex items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_12px_#38BDF8]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34D399]" />
            </div>

            <div className="absolute w-[265px] h-[265px] rounded-full bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#020617] border-[3px] border-[#1E40AF]/60 shadow-[0_0_35px_rgba(37,99,235,0.45),inset_0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center">
              <div className="w-[225px] h-[225px] rounded-full bg-slate-900/90 border border-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.2)] flex items-center justify-center relative">
                <div className="absolute inset-2 border-2 border-dashed border-blue-500/10 rounded-full anime-orbit-spin" />
                <div className="absolute top-1/2 w-full h-[1px] bg-blue-500/15" />
                <div className="absolute left-1/2 w-[1px] h-full bg-blue-500/15" />
                <div className="w-[170px] h-[170px] rounded-full bg-gradient-to-tr from-[#1E3A8A]/90 to-sky-950/90 border border-[#06B6D4]/50 flex items-center justify-center relative">
                  <div 
                    className="w-[120px] h-[120px] rounded-full bg-[#0284C7]/20 border-2 border-[#38BDF8] flex items-center justify-center relative"
                    style={{ animation: 'scalePulse 4s ease-in-out infinite' }}
                  >
                    <div className="absolute inset-1.5 rounded-full bg-cyan-400/25 blur-[2px] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[290px] h-[290px] bg-[#020617] opacity-60 rounded-full blur-md -translate-y-2 z-[-2]" />
          </div>


          {/* 2. SLEEK VERTICAL SMARTPHONE MOCKUP */}
          <div 
            className="relative w-[184px] h-[335px] sm:w-[210px] sm:h-[375px] preserve-3d anime-main-float z-20 flex items-center justify-center select-none"
            style={{ transform: 'translateY(-15px) translateZ(10px) rotateX(1deg) rotateY(-5deg)' }}
          >
            <div className="absolute inset-x-2 -bottom-2 h-6 bg-slate-950/45 rounded-[36px] blur-[15px] -z-10 transform scale-x-[0.9] origin-bottom" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2E364F] via-[#101424] to-[#070A14] rounded-[34px] sm:rounded-[38px] p-2.5 sm:p-3 border-[1.5px] border-slate-700/50 shadow-[inset_0_2px_6px_rgba(255,255,255,0.45),0_18px_36px_rgba(4,7,20,0.4)] flex flex-col justify-between preserve-3d">
              <div className="absolute inset-[1px] rounded-[32px] sm:rounded-[35px] border border-white/10 pointer-events-none" />
              <div className="relative w-full h-full bg-[#0B1226] rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col border border-slate-900 shadow-inner">
                <div className="absolute top-0 right-0 w-[150%] h-[150%] glass-reflection-shine -translate-y-1/2 translate-x-1/3 transform rotate-[35deg] pointer-events-none z-10 opacity-75" />
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 bg-black rounded-full flex items-center justify-between px-2.5 z-25 border border-slate-800/60 shadow-[inset_0_-1px_1px_rgba(255,255,255,0.1)]">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="w-0.5 h-0.5 bg-cyan-400 rounded-full" />
                  </div>
                  <div className="w-5 h-1 bg-slate-800 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                </div>
                <div className="w-full pt-6 px-3 flex justify-between items-center text-[7px] sm:text-[8px] text-sky-300/60 font-semibold relative z-15">
                  <span className="font-mono mt-0.5 opacity-90 select-none">12:30</span>
                  <div className="flex items-center gap-1 opacity-80">
                    <span className="text-[6.5px] text-emerald-400 font-bold">5G</span>
                    <div className="w-3.5 h-2 border border-sky-400/40 rounded-[2.5px] p-0.5 flex items-center justify-start bg-slate-950/40">
                      <div className="w-2 h-full bg-sky-400 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 px-2.5 pt-2 pb-3 overflow-hidden flex flex-col justify-between select-none relative z-10">
                  <div className="flex justify-between items-center bg-[#172554]/45 px-2 py-1 rounded-lg border border-blue-500/15">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[7.5px] sm:text-[8px] font-extrabold text-blue-200 tracking-wider uppercase font-sans">Project Overview</span>
                    </div>
                    <Settings className="w-2 h-2 text-blue-400/75 animate-[spin-slow_12s_linear_infinite]" />
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 my-1.5">
                    <div className="bg-[#111C3A]/90 p-1.5 sm:p-2 rounded-xl border border-blue-500/20 shadow-sm flex flex-col justify-between leading-none min-h-[46px] sm:min-h-[50px]">
                      <span className="text-[6px] sm:text-[6.5px] text-indigo-300 font-bold uppercase tracking-widest font-mono">Total Projects</span>
                      <span className="text-[14px] sm:text-[16px] font-black text-sky-300 drop-shadow-[0_2px_6px_rgba(56,189,248,0.3)] mt-1 font-sans">15+</span>
                      <div className="w-full h-[2px] bg-sky-950 rounded-full mt-1.5 overflow-hidden">
                        <div className="w-[80%] h-full bg-[#38BDF8]" />
                      </div>
                    </div>
                    <div className="bg-[#111C3A]/90 p-1.5 sm:p-2 rounded-xl border border-blue-500/20 shadow-sm flex flex-col justify-between leading-none min-h-[46px] sm:min-h-[50px]">
                      <span className="text-[6px] sm:text-[6.5px] text-indigo-300 font-bold uppercase tracking-widest font-mono">Success Rate</span>
                      <span className="text-[14px] sm:text-[16px] font-black text-emerald-400 drop-shadow-[0_2px_6px_rgba(52,211,153,0.3)] mt-1 font-sans">98%</span>
                      <div className="w-full h-[2px] bg-emerald-950 rounded-full mt-1.5 overflow-hidden">
                        <div className="w-[98%] h-full bg-[#34D399]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 bg-[#0F1D40]/80 rounded-xl border border-blue-400/20 p-2 flex flex-col justify-between shadow-[0_1px_2px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    <div className="absolute inset-x-2 top-4 border-t border-indigo-500/5" />
                    <div className="absolute inset-x-2 top-9 border-t border-indigo-500/5" />
                    <div className="absolute inset-x-2 top-14 border-t border-indigo-500/5" />
                    <div className="absolute inset-x-2 bottom-6 border-t border-indigo-500/10" />
                    <div className="flex justify-between items-center text-[5.5px] sm:text-[6px] text-slate-400 font-bold relative z-10 leading-none">
                      <span className="text-blue-300 flex items-center gap-0.5">
                        <TrendingUp className="w-1.5 h-1.5 text-blue-400" /> Development Trend
                      </span>
                      <span className="text-emerald-400 font-extrabold flex items-center gap-0.5 font-mono">
                        <span>Live App Metrics</span>
                      </span>
                    </div>

                    <div className="w-full h-16 sm:h-[75px] mt-1 relative z-10">
                      <svg viewBox="0 0 100 36" width="100%" height="100%" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="neonOrangeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.45"/>
                            <stop offset="100%" stopColor="#FB923C" stopOpacity="0"/>
                          </linearGradient>
                          <linearGradient id="neonCyanGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5"/>
                            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M0,30 L10,26 L23,28 L34,18 L48,22" fill="none" stroke="#FB923C" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M0,30 L10,26 L23,28 L34,18 L48,22 L48,36 L0,36 Z" fill="url(#neonOrangeGrad)" />
                        <path d="M48,22 Q58,16 68,14 T88,4 L100,2" fill="none" stroke="#38BDF8" strokeWidth="2.1" strokeLinecap="round" />
                        <path d="M48,22 Q58,16 68,14 T88,4 L100,2 L100,36 L48,36 Z" fill="url(#neonCyanGrad)" />
                        <circle cx="48" cy="22" r="1.5" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                        <circle cx="48" cy="22" r="1.5" fill="#FB923C" />
                        <circle cx="88" cy="4" r="1.8" fill="#FFFFFF" className="animate-pulse" />
                        <circle cx="88" cy="4" r="1.2" fill="#38BDF8" />
                        <circle cx="100" cy="2" r="2" fill="#34D399" />
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[5px] sm:text-[5.5px] text-indigo-400 font-extrabold tracking-widest font-mono mt-1">
                      <span>Q2 2025</span>
                      <span>Q4 2025</span>
                      <span>Q2 2026</span>
                    </div>
                  </div>

                  <div className="mt-1.5 flex items-center justify-between bg-[#111C3A]/60 px-2 py-1.5 rounded-lg border border-blue-500/10 text-[6.5px] sm:text-[7px] text-slate-300 font-bold leading-none select-none">
                    <div className="flex items-center gap-1.5">
                      <div className="relative w-4.5 h-4.5 flex items-center justify-center">
                        <svg viewBox="0 0 20 20" className="w-full h-full transform -rotate-90">
                          <circle cx="10" cy="10" r="8" fill="none" stroke="#13234F" strokeWidth="2" />
                          <circle cx="10" cy="10" r="8" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="38 52" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[4.5px] text-white opacity-80 font-black">
                          75
                        </div>
                      </div>
                      <span className="text-slate-400">Project Velocity: <strong className="text-emerald-400">Excellent</strong></span>
                    </div>
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>

                </div>
              </div>
            </div>
          </div>


          {/* 3. GLOSSY 3D FLOATING GLASSMORPHIC CARDS (PILLS) */}
          <div 
            className="absolute -top-12 -left-16 sm:-top-16 sm:-left-24 w-[115px] sm:w-[130px] rounded-2xl bg-gradient-to-br from-white/12 to-blue-500/5 backdrop-blur-[2px] border border-white/45 p-3 flex flex-col justify-between items-start cursor-pointer select-none shadow-[2px_12px_28px_rgba(37,99,235,0.18),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 z-30 group anime-float-slow"
            style={{ transform: 'translateZ(95px)', perspective: '800px' }}
          >
            <div className="absolute inset-0 rounded-2xl glass-reflection-shine opacity-60 pointer-events-none" />
            <div className="absolute top-2.5 right-2 w-3.5 h-3.5 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#60A5FA] to-[#1E40AF] flex items-center justify-center text-white shadow-md shadow-blue-500/15 mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div className="text-left font-sans leading-none">
              <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-extrabold tracking-wider uppercase">Websites</p>
              <h5 className="text-[17px] sm:text-[19px] font-black tracking-tight text-slate-800 mt-1">10+</h5>
            </div>
          </div>

          <div 
            className="absolute bottom-8 -left-20 sm:bottom-12 sm:-left-32 w-[115px] sm:w-[130px] rounded-2xl bg-gradient-to-br from-white/12 to-indigo-500/5 backdrop-blur-[2px] border border-white/45 p-3 flex flex-col justify-between items-start cursor-pointer select-none shadow-[2px_12px_28px_rgba(99,102,241,0.18),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 z-35 group anime-float-medium"
            style={{ transform: 'translateZ(85px)' }}
          >
            <div className="absolute inset-0 rounded-2xl glass-reflection-shine opacity-60 pointer-events-none" />
            <div className="absolute top-2.5 right-2 w-3.5 h-3.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-indigo-400" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#818CF8] to-[#4F46E5] flex items-center justify-center text-white shadow-md shadow-indigo-500/15 mb-4 group-hover:scale-110 transition-transform">
              <Box className="w-4 h-4 text-white" />
            </div>
            <div className="text-left font-sans leading-none">
              <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-extrabold tracking-wider uppercase">Applications</p>
              <h5 className="text-[17px] sm:text-[19px] font-black tracking-tight text-slate-800 mt-1">8+</h5>
            </div>
          </div>

          <div 
            className="absolute -top-6 -right-16 sm:-top-10 sm:-right-24 w-[115px] sm:w-[130px] rounded-2xl bg-gradient-to-br from-white/12 to-sky-500/5 backdrop-blur-[2px] border border-white/45 p-3 flex flex-col justify-between items-start cursor-pointer select-none shadow-[2px_12px_28px_rgba(14,165,233,0.18),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 z-30 group anime-float-medium"
            style={{ transform: 'translateZ(90px)', animationDelay: '100ms' }}
          >
            <div className="absolute inset-0 rounded-2xl glass-reflection-shine opacity-60 pointer-events-none" />
            <div className="absolute top-2.5 right-2 w-3.5 h-3.5 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-sky-400 animate-pulse" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#0369A1] flex items-center justify-center text-white shadow-md shadow-sky-500/15 mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div className="text-left font-sans leading-none">
              <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-extrabold tracking-wider uppercase">Clients Served</p>
              <h5 className="text-[17px] sm:text-[19px] font-black tracking-tight text-slate-800 mt-1">500+</h5>
            </div>
          </div>

          <div 
            className="absolute bottom-16 -right-16 sm:bottom-20 sm:-right-24 w-[115px] sm:w-[130px] rounded-2xl bg-gradient-to-br from-white/12 to-teal-500/5 backdrop-blur-[2px] border border-white/45 p-3 flex flex-col justify-between items-start cursor-pointer select-none shadow-[2px_12px_28px_rgba(20,184,166,0.18),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 z-35 group anime-float-fast"
            style={{ transform: 'translateZ(75px)' }}
          >
            <div className="absolute inset-0 rounded-2xl glass-reflection-shine opacity-60 pointer-events-none" />
            <div className="absolute top-2.5 right-2 w-3.5 h-3.5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-teal-400" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2DD4BF] to-[#0F766E] flex items-center justify-center text-white shadow-md shadow-teal-500/15 mb-4 group-hover:scale-110 transition-transform">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <div className="text-left font-sans leading-none">
              <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-extrabold tracking-wider uppercase">Industries</p>
              <h5 className="text-[17px] sm:text-[19px] font-black tracking-tight text-slate-800 mt-1">12+</h5>
            </div>
          </div>


          {/* 4. FLOATING GLOSSY GEOMETRIC BACKGROUND ACCENTS */}
          <div 
            className="absolute -top-24 right-4 sm:-top-28 sm:right-10 w-20 h-20 pointer-events-none z-10 anime-float-slow"
            style={{ transform: 'translateZ(30px)' }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#93C5FD] via-[#6366F1] to-[#312E81] shadow-[inset_2px_3px_10px_rgba(255,255,255,0.4),0_8px_20px_rgba(99,102,241,0.3)]" />
              <div 
                className="absolute top-1/2 left-[-10px] w-[95px] h-4 border-2 border-indigo-300/40 rounded-full select-none"
                style={{ transform: 'translateY(-50%) rotateX(65deg) rotateY(-18deg)' }}
              />
            </div>
          </div>

          <div 
            className="absolute -top-28 left-6 sm:-top-32 sm:left-12 w-14 h-14 pointer-events-none z-15 anime-float-fast flex items-center justify-center"
            style={{ transform: 'translateZ(50px)' }}
          >
            <div className="anime-rocket-shake w-full h-full flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 56 56" fill="none">
                <defs>
                  <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#94A3B8" />
                  </linearGradient>
                  <linearGradient id="rocketFins" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F87171" />
                    <stop offset="100%" stopColor="#DC2626" />
                  </linearGradient>
                  <linearGradient id="rocketThrust" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFEDD5" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M12 44C8 48 10 54 10 54C10 54 16 52 20 48L15 43L12 44Z" fill="url(#rocketThrust)" opacity="0.9" />
                <path d="M11 27L4 39C3 41 5 44 8 44L16 41" fill="url(#rocketFins)" />
                <path d="M27 11L39 4C41 3 44 5 44 8L41 16" fill="url(#rocketFins)" />
                <ellipse cx="23" cy="23" rx="10" ry="21" transform="rotate(-45 23 23)" fill="url(#rocketBody)" />
                <path d="M34 10C39 12 44 17 46 22L46 10L34 10Z" fill="url(#rocketFins)" />
                <circle cx="23" cy="23" r="3.5" fill="#38BDF8" stroke="#64748B" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div 
            className="absolute top-1/2 -left-28 w-6 h-6 rounded-md bg-gradient-to-tr from-sky-400/35 to-blue-500/20 border border-white/35 backdrop-blur-[2px] anime-float-slow"
            style={{ transform: 'rotateX(30deg) rotateY(45deg) translateZ(10px)' }}
          />
          <div 
            className="absolute bottom-12 -right-28 w-5 h-5 rounded-md bg-gradient-to-tr from-purple-400/30 to-indigo-500/15 border border-white/30 backdrop-blur-[2px] anime-float-medium"
            style={{ transform: 'rotateX(-45deg) rotateY(30deg) translateZ(20px)' }}
          />
          <div 
            className="absolute bottom-28 -right-16 w-3.5 h-3.5 rounded-full bg-sky-300 opacity-60 shadow-[0_0_8px_rgba(56,189,248,0.6)] animate-ping"
            style={{ animationDuration: '3.5s' }}
          />

        </div>
      </div>
    </div>
  );
}