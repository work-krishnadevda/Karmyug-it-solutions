import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const AVATARS: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120', // Rajesh Patel
  '2': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120', // Sneha Reddy
  '3': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120', // Amit Joshi
  '4': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120', // Kavita Nair
  '5': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120', // Arjun Malhotra
  '6': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120', // Deepa Iyer
};

export default function TestimonialsGrid() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to Amit Joshi (index 2)
  const [cardWidth, setCardWidth] = useState(380);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(280);
      } else if (window.innerWidth < 768) {
        setCardWidth(340);
      } else {
        setCardWidth(380);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const gap = 24; // Tailwind gap-6 is 24px
  const transformOffset = `calc(50% - ${cardWidth / 2}px - ${activeIndex * (cardWidth + gap)}px)`;

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] scroll-mt-24 select-none relative overflow-hidden border-t border-slate-100">
      
      {/* 3D Floating Animations & Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float3DLeft {
          0%, 100% { transform: translateY(0px) rotateX(15deg) rotateY(-18deg) rotateZ(-10deg); }
          50% { transform: translateY(-10px) rotateX(12deg) rotateY(-14deg) rotateZ(-8deg); }
        }
        @keyframes float3DRight {
          0%, 100% { transform: translateY(0px) rotateX(18deg) rotateY(15deg) rotateZ(10deg); }
          50% { transform: translateY(-10px) rotateX(22deg) rotateY(18deg) rotateZ(12deg); }
        }
        .anime-3d-left {
          animation: float3DLeft 6s ease-in-out infinite;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .anime-3d-right {
          animation: float3DRight 6.5s ease-in-out infinite;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}} />

      {/* Decorative background curves */}
      <div className="absolute top-1/2 left-12 w-96 h-96 bg-blue-500/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-24 w-96 h-96 bg-purple-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

      {/* FLOATING 3D SPEECH BUBBLE - LEFT SIDE */}
      <div className="absolute left-4 top-1/4 lg:left-16 lg:top-24 z-0 pointer-events-none hidden md:block anime-3d-left">
        <div 
          className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-[28px] bg-gradient-to-br from-[#818CF8] via-[#A78BFA] to-[#F472B6] p-[1.5px] flex items-center justify-center shadow-[0_20px_50px_rgba(139,92,246,0.35)]"
          style={{
            boxShadow: 'inset 0 4px 12px rgba(255, 255, 255, 0.45), 0 25px 45px rgba(139, 92, 246, 0.3)'
          }}
        >
          {/* Highlight shine */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-white/0 via-white/10 to-white/40 pointer-events-none" />
          
          <span className="text-white text-5xl lg:text-6xl font-black font-sans leading-none drop-shadow-[0_4px_10px_rgba(109,40,217,0.35)] relative -top-1">
            “
          </span>
          
          {/* Tail */}
          <div 
            className="absolute bottom-[-10px] right-8 w-6 h-6 bg-gradient-to-br from-[#A78BFA] to-[#F472B6] transform rotate-45 rounded-sm"
          />
        </div>
      </div>

      {/* FLOATING 3D SPEECH BUBBLE - RIGHT SIDE */}
      <div className="absolute right-4 top-1/4 lg:right-16 lg:top-24 z-0 pointer-events-none hidden md:block anime-3d-right">
        <div 
          className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-[28px] bg-gradient-to-br from-[#34D399] via-[#10B981] to-[#059669] p-[1.5px] flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.35)]"
          style={{
            boxShadow: 'inset 0 4px 12px rgba(255, 255, 255, 0.45), 0 25px 45px rgba(16, 185, 129, 0.3)'
          }}
        >
          {/* Highlight shine */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-white/0 via-white/10 to-white/40 pointer-events-none" />
          
          {/* Stars */}
          <div className="flex items-center gap-0.5 bg-emerald-800/20 px-2.5 py-1.5 rounded-full border border-white/20 backdrop-blur-xs shadow-inner">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-xs lg:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] font-bold">★</span>
            ))}
          </div>
          
          {/* Tail */}
          <div 
            className="absolute bottom-[-10px] left-8 w-6 h-6 bg-gradient-to-br from-[#10B981] to-[#059669] transform rotate-45 rounded-sm"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-xs font-bold mb-4 tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
            <span>What Clients Say</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] font-display leading-tight">
            Trusted by <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">10+ Businesses</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed font-semibold max-w-2xl mx-auto">
            We're proud to be the technology partner for startups and enterprises across e-commerce, fintech, healthcare, and SaaS.
          </p>
        </div>

        {/* Slider Container with programmatically translated track */}
        <div className="relative w-full overflow-hidden py-10 px-4">
          
          {/* Interactive Navigation Arrows - Absolute positioning over track */}
          <div className="absolute inset-y-0 left-0 md:left-4 flex items-center z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-blue-500/20 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 md:right-4 flex items-center z-20 pointer-events-none">
            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg hover:border-blue-500/20 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all cursor-pointer pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Testimonial Track */}
          <div 
            className="flex gap-6 items-center transition-all duration-500 ease-out py-6"
            style={{
              transform: `translateX(${transformOffset})`,
            }}
          >
            {TESTIMONIALS_DATA.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`shrink-0 bg-white border rounded-[28px] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 relative cursor-pointer group select-none min-h-[340px] md:min-h-[380px] ${
                    isActive
                      ? 'border-transparent shadow-[0_20px_50px_rgba(59,130,246,0.12)] scale-[1.03] md:scale-[1.05] z-10 opacity-100 pointer-events-auto'
                      : 'border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md scale-95 opacity-55 hover:opacity-85 filter blur-[0.5px] hover:blur-0 z-0'
                  }`}
                  style={{ width: `${cardWidth}px` }}
                >
                  {/* Decorative Gradient Inner Ring on active card */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-[#9333EA]/35 via-[#3B82F6]/35 to-[#22D3EE]/35 p-[1.5px] -z-10 pointer-events-none" />
                  )}

                  <div>
                    {/* Header quotes and stars */}
                    <div className="flex justify-between items-start mb-6 w-full">
                      <span className={`text-4xl lg:text-5xl font-serif font-black leading-none ${isActive ? 'text-indigo-400' : 'text-slate-300'}`}>
                        “
                      </span>
                      <div className="flex items-center gap-0.5 mt-1">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className={`text-xs sm:text-sm md:text-[14.5px] leading-relaxed mb-8 select-all font-medium ${
                      isActive ? 'text-slate-700 italic' : 'text-slate-500 italic'
                    }`}>
                      "{t.text}"
                    </p>
                  </div>

                  {/* Author Meta Bottom block */}
                  <div className="pt-6 border-t border-dashed border-slate-100 flex items-center gap-4">
                    <img
                      src={AVATARS[t.id] || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"}
                      alt={t.author}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-[13px] sm:text-[14px] font-bold text-slate-800 font-display">
                        {t.author}
                      </h4>
                      <p className="text-[10px] md:text-[11px] font-bold text-blue-600 uppercase tracking-wider mt-0.5">
                        {t.company}
                      </p>
                    </div>
                  </div>

                  {/* Custom bottom intersecting white & purple Quotes badge on Active Card */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-[#818CF8] via-[#8B5CF6] to-[#EF4444] flex items-center justify-center border-4 border-white shadow-md text-white font-serif text-lg font-black pointer-events-none">
                      “
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Dot Pagination representing pages */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-gradient-to-r from-blue-600 to-indigo-600'
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
