import React from 'react';

export default function FAQ3DFigure() {
  return (
    <div className="relative w-36 h-36 flex items-center justify-center select-none shrink-0 anime-faq-3d-float">
      
      {/* CSS 3D Support Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes isometricFaqFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .anime-faq-3d-float {
          animation: isometricFaqFloat 7s ease-in-out infinite;
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}} />

      {/* Main Isometric Container */}
      <div 
        className="relative w-32 h-32 preserve-3d" 
        style={{ transform: 'rotateX(55deg) rotateY(0deg) rotateZ(-35deg)' }}
      >
        
        {/* =========================================================
            1. GREEN SQUIRCLE BASE PLATFORM (Multilayer Extrusion)
           ========================================================= */}
        
        {/* Bottom Ambient Drop Shadow on the floor */}
        <div 
          className="absolute inset-0 w-28 h-22 bg-slate-900/15 rounded-[22px] blur-md pointer-events-none"
          style={{ transform: 'translateZ(-16px) scale(0.95)' }}
        />

        {/* 3D Sides of Green Base (Sub-layers to give volume/thickness) */}
        <div className="absolute inset-0 w-28 h-22 bg-[#047857] rounded-[22px]" style={{ transform: 'translateZ(-10px)' }} />
        <div className="absolute inset-0 w-28 h-22 bg-[#059669] rounded-[22px]" style={{ transform: 'translateZ(-8px)' }} />
        <div className="absolute inset-0 w-28 h-22 bg-[#059669] rounded-[22px]" style={{ transform: 'translateZ(-6px)' }} />
        <div className="absolute inset-0 w-28 h-22 bg-[#059669] rounded-[22px]" style={{ transform: 'translateZ(-4px)' }} />
        <div className="absolute inset-0 w-28 h-22 bg-[#065F46] rounded-[22px]" style={{ transform: 'translateZ(-2px)' }} />

        {/* Green Base Top Surface */}
        <div 
          className="absolute inset-0 w-28 h-22 bg-gradient-to-tr from-[#10B981] to-[#34D399] rounded-[22px] border border-emerald-300/40 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]"
          style={{ transform: 'translateZ(0px)' }}
        >
          {/* Subtle Grid pattern on base to look technical/premium */}
          <div className="absolute inset-2 rounded-[16px] border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px]" />
        </div>


        {/* =========================================================
            2. LEFT SHORT GREEN PILLAR (Cylinder Stack)
           ========================================================= */}
        <div className="absolute top-10 left-3 preserve-3d">
          {/* Base of cylinder */}
          <div className="absolute w-7 h-7 bg-[#047857] rounded-full" style={{ transform: 'translateZ(2px)' }} />
          {/* Body Layering to simulate a 3D cylindrical shape */}
          <div className="absolute w-7 h-7 bg-[#059669] rounded-full" style={{ transform: 'translateZ(5px)' }} />
          <div className="absolute w-7 h-7 bg-[#059669] rounded-full" style={{ transform: 'translateZ(8px)' }} />
          <div className="absolute w-7 h-7 bg-[#10B981] rounded-full" style={{ transform: 'translateZ(11px)' }} />
          <div className="absolute w-7 h-7 bg-[#10B981] rounded-full" style={{ transform: 'translateZ(14px)' }} />
          {/* Cylinder Top Cap */}
          <div 
            className="absolute w-7 h-7 bg-gradient-to-tr from-[#34D399] to-[#6EE7B7] rounded-full border border-emerald-200/40 shadow-inner" 
            style={{ transform: 'translateZ(16px)' }}
          />
        </div>


        {/* =========================================================
            3. LEFT FLOATING CYAN CUBE (True 3D Cube)
           ========================================================= */}
        <div className="absolute top-2 left-4 preserve-3d" style={{ width: '24px', height: '24px' }}>
          
          {/* Front Left Wall */}
          <div 
            className="absolute inset-0 bg-[#0284C7] rounded-[3px]"
            style={{ 
              transform: 'rotateY(-90deg) translateZ(12px)',
              width: '24px',
              height: '24px'
            }} 
          />

          {/* Front Right Wall */}
          <div 
            className="absolute inset-0 bg-[#0369A1] rounded-[3px]"
            style={{ 
              transform: 'rotateX(-90deg) translateZ(12px)',
              width: '24px',
              height: '24px'
            }} 
          />

          {/* Top Cap Face (Slanted flat square) */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-[#38BDF8] to-[#7DD3FC] border border-sky-200/35 rounded-[3px] shadow-[inset_0_1px_rgba(255,255,255,0.4)]"
            style={{ transform: 'translateZ(24px)' }} 
          />

          {/* Subtle drop shadow of cube onto the base */}
          <div 
            className="absolute inset-0 bg-slate-900/25 blur-[3px] rounded-full"
            style={{ transform: 'translateZ(2px) scale(0.7)' }}
          />

        </div>


        {/* =========================================================
            4. COMPACT STANDING BLUE QUESTION SHIELD 
           ========================================================= */}
        <div 
          className="absolute left-10 top-2 preserve-3d"
          style={{
            /* Standing upright: rotated backwards relative to the slanted platform */
            transform: 'rotateX(-90deg) rotateY(5deg) translate3d(24px, -18px, 12px)',
            width: '64px',
            height: '64px'
          }}
        >
          {/* Extruded Depth Layers behind the shield (gives volumetric block thickness) */}
          <div className="absolute inset-0 bg-[#1E3A8A] rounded-2xl" style={{ transform: 'translateZ(-12px)' }} />
          <div className="absolute inset-0 bg-[#1e40af] rounded-2xl" style={{ transform: 'translateZ(-9px)' }} />
          <div className="absolute inset-0 bg-[#1D4ED8] rounded-2xl opacity-90" style={{ transform: 'translateZ(-6px)' }} />
          <div className="absolute inset-0 bg-[#2563EB] rounded-2xl opacity-90" style={{ transform: 'translateZ(-3px)' }} />

          {/* Front glossy blue facade */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-[#3B82F6] to-[#60A5FA] rounded-2xl border border-blue-300/40 flex items-center justify-center p-[1px] shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_10px_20px_rgba(37,99,235,0.2)]"
            style={{ transform: 'translateZ(0px)' }}
          >
            {/* White Printed Question Mark */}
            <span 
              className="text-4xl font-extrabold text-white font-sans drop-shadow-[0_2.5px_2px_rgba(29,78,216,0.5)] select-none relative -top-[1px] leading-none"
            >
              ?
            </span>
          </div>

          {/* Shadow of Shield on green platform */}
          <div 
            className="absolute inset-x-2 bottom-[-10px] h-6 bg-slate-900/30 rounded-2xl blur-[4px]"
            style={{ transform: 'rotateX(90deg) translatey(5px)' }}
          />
        </div>


        {/* =========================================================
            5. RIGHT SOLID YELLOW MODULE
           ========================================================= */}
        <div className="absolute bottom-5 right-2 preserve-3d" style={{ width: '28px', height: '28px' }}>
          
          {/* Back/Mid thickness layers */}
          <div className="absolute inset-0 bg-[#B45309] rounded-lg" style={{ transform: 'translateZ(2px)' }} />
          <div className="absolute inset-0 bg-[#D97706] rounded-lg" style={{ transform: 'translateZ(5px)' }} />

          {/* Front polished gold plate */}
          <div 
            className="absolute inset-0 bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] rounded-lg border border-amber-305/45 shadow-[inset_0_1px_rgba(255,255,255,0.45)]"
            style={{ transform: 'translateZ(8px)' }}
          />

          {/* Shadow below gold plate */}
          <div 
            className="absolute inset-0 bg-slate-900/15 blur-[2.5px] rounded-lg"
            style={{ transform: 'translateZ(-1px) scale(0.9)' }}
          />

        </div>

      </div>

    </div>
  );
}
