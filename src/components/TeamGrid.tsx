import React from "react";
import { TEAM_DATA } from "../data";
import { Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const THEMES = [
  {
    card: "hover:border-blue-400",
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    ring: "group-hover:ring-blue-400/40",
    text: "group-hover:text-blue-600",
    glow: "bg-blue-500/5",
    imageBg: "from-blue-500/10 to-sky-400/5",
  },
  {
    card: "hover:border-purple-400",
    badge: "bg-purple-50 text-purple-600 border-purple-100",
    ring: "group-hover:ring-purple-400/40",
    text: "group-hover:text-purple-600",
    glow: "bg-purple-500/5",
    imageBg: "from-purple-500/10 to-pink-400/5",
  },
  {
    card: "hover:border-emerald-400",
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
    ring: "group-hover:ring-emerald-400/40",
    text: "group-hover:text-emerald-600",
    glow: "bg-emerald-500/5",
    imageBg: "from-emerald-500/10 to-green-400/5",
  },
  {
    card: "hover:border-rose-400",
    badge: "bg-rose-50 text-rose-600 border-rose-100",
    ring: "group-hover:ring-rose-400/40",
    text: "group-hover:text-rose-600",
    glow: "bg-rose-500/5",
    imageBg: "from-rose-500/10 to-red-400/5",
  },
  {
    card: "hover:border-amber-400",
    badge: "bg-amber-50 text-amber-700 border-amber-100",
    ring: "group-hover:ring-amber-400/40",
    text: "group-hover:text-amber-600",
    glow: "bg-amber-500/5",
    imageBg: "from-amber-500/10 to-orange-400/5",
  },
  {
    card: "hover:border-cyan-400",
    badge: "bg-cyan-50 text-cyan-600 border-cyan-100",
    ring: "group-hover:ring-cyan-400/40",
    text: "group-hover:text-cyan-600",
    glow: "bg-cyan-500/5",
    imageBg: "from-cyan-500/10 to-sky-400/5",
  },
  {
    card: "hover:border-indigo-400",
    badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
    ring: "group-hover:ring-indigo-400/40",
    text: "group-hover:text-indigo-600",
    glow: "bg-indigo-500/5",
    imageBg: "from-indigo-500/10 to-violet-400/5",
  },
  {
    card: "hover:border-lime-400",
    badge: "bg-lime-50 text-lime-700 border-lime-100",
    ring: "group-hover:ring-lime-400/40",
    text: "group-hover:text-lime-600",
    glow: "bg-lime-500/5",
    imageBg: "from-lime-500/10 to-green-400/5",
  },
  {
    card: "hover:border-fuchsia-400",
    badge: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100",
    ring: "group-hover:ring-fuchsia-400/40",
    text: "group-hover:text-fuchsia-600",
    glow: "bg-fuchsia-500/5",
    imageBg: "from-fuchsia-500/10 to-pink-400/5",
  },
];

export default function TeamGrid() {
  return (
   <section className="py-20 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-[10px] font-bold mb-3 uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Behind The Success
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Meet Our Team</h2>
        </div>

        {/* Responsive Swiper Slider */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.1} // Default mobile view
          spaceBetween={15}   // Space on mobile
          navigation={true}   // Enabled for all devices
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 40 } // Professional desktop spacing
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          className="team-swiper !py-12 !px-4"
        >
          {TEAM_DATA.map((member) => (
            <SwiperSlide key={member.id} className="transition-all duration-500">
              {/* Card Container - Designed to match image_a550c6.png */}
              <div className="bg-white border border-slate-200 rounded-[32px] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full relative">
                
                {/* Top Right LinkedIn Icon */}
                <div className="absolute top-8 right-8">
                  <a href="#" className="text-slate-300 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Avatar */}
                <div className="relative mb-5">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]" 
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
                <span className="mt-3 px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                  {member.role}
                </span>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-[240px]">
                  {member.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
