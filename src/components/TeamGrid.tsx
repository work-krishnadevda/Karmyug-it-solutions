import React, { useRef, useState, useEffect } from "react";
import { TEAM_DATA } from '../data';
import { 
  Linkedin, 
  Youtube,
  Sparkles,
  ChevronLeft,
  ChevronRight
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

export default function PremiumTeamCoverflow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Scroll Logic to detect Active Card ---
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Find the center of the scroll container
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    // Check distance of each card to the center
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Add scroll event listener
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll, { passive: true });
      // Trigger once on mount to set initial active state
      handleScroll();
    }
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Navigation Controls ---
  const scrollToIndex = (index: number) => {
    if (!cardsRef.current[index]) return;
    
    // Smoothly scroll the selected card to the center of the container
    cardsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const scrollPrev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  const scrollNext = () => {
    if (activeIndex < TEAM_DATA.length - 1) scrollToIndex(activeIndex + 1);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100/50 relative overflow-hidden font-sans">
      
      {/* Inline styles to hide scrollbar while keeping functionality */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 relative z-10 mb-16 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/80 border border-blue-100 text-blue-600 rounded-full text-[10px] font-bold mb-4 uppercase tracking-widest backdrop-blur-sm">
          <Sparkles className="w-3 h-3" /> Behind The Success
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Meet Our Team
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-[1400px] mx-auto group">
        
        {/* Navigation Buttons (Hidden on mobile, visible on md+) */}
        <button
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          aria-label="Previous Team Member"
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl text-slate-700 hover:text-blue-600 hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          disabled={activeIndex === TEAM_DATA.length - 1}
          aria-label="Next Team Member"
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl text-slate-700 hover:text-blue-600 hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed hidden sm:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll scroll-smooth py-12"
          style={{
            // This padding ensures the first and last cards can be snapped to the absolute center of the screen
            paddingLeft: "calc(50vw - 140px)", // 140px is half of the mobile card width (280px)
            paddingRight: "calc(50vw - 140px)",
          }}
        >
          {TEAM_DATA.map((member, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={member.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onClick={() => scrollToIndex(index)}
                className={`
                  snap-center shrink-0 cursor-pointer transition-all duration-700 ease-out
                  w-[280px] sm:w-[320px] md:w-[380px]
                  ${isActive 
                    ? "scale-100 opacity-100 z-20" 
                    : "scale-[0.85] opacity-50 z-0 hover:opacity-80"
                  }
                `}
              >
                {/* Premium Card Surface */}
                <div 
                  className={`
                    relative rounded-[32px] p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-700
                    ${isActive 
                      ? "bg-white/95 backdrop-blur-xl border border-white shadow-[0_25px_50px_-12px_rgba(59,130,246,0.15)]" 
                      : "bg-white/40 backdrop-blur-md border border-white/50 shadow-md"
                    }
                  `}
                >
                  {/* Subtle Background Glow for Active Card */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 transition-opacity duration-700 -z-10 ${isActive ? "opacity-100" : "opacity-0"}`} />

                  {/* LinkedIn Logo (Top Right Corner) */}
                  <a
                    href={member.linkedinUrl || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => e.stopPropagation()} 
                    className={`absolute top-6 right-6 transition-colors duration-300 z-30 ${
                      isActive 
                        ? "text-slate-400 hover:text-blue-600" 
                        : "text-slate-300 pointer-events-none"
                    }`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>

                  {/* Avatar - Updated w-24 h-24 to w-32 h-32 */}
                  <div className="relative mb-6">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className={`w-32 h-32 rounded-full object-cover border-[4px] border-white transition-all duration-700 ${isActive ? "shadow-lg" : "shadow-sm"}`}
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <span className={`px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-colors duration-700 ${isActive ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-slate-100 text-slate-500 border border-transparent"}`}>
                    {member.role}
                  </span>

                  {/* Description */}
                  <p className="mt-5 text-sm text-slate-500 leading-relaxed max-w-[260px] h-[60px]">
                    {member.description}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {TEAM_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              activeIndex === index
                ? "w-8 h-2.5 bg-blue-600"
                : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}