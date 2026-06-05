import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Plus, Minus, Users, Star, Globe, Shield, MessageSquare, Bot } from 'lucide-react';
import FAQ3DFigure from './FAQ3DFigure';
import ContactModal from './ContactModal';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [openFaqId, setOpenFaqId] = useState<number | null>(0); // first item open by default
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const faqs = [
    {
      question: 'What is the best way to reach karmyug?',
      answer: 'Call us at +91 8962241437, email karmyugtechzone@gmail.com, or fill out the contact form on this page. We respond to all inquiries within 24 hours on business days.'
    },
    {
      question: 'What should I prepare before our first call?',
      answer: 'Share your business goals, target audience, any reference websites you like, and your approximate budget range. Even rough ideas help us give better recommendations.'
    },
    {
      question: 'How quickly will I get a response after submitting the form?',
      answer: 'We aim to reply within 24 hours on weekdays. Urgent requests can call us directly for faster assistance.'
    },
    {
      question: 'Do you offer in-person meetings?',
      answer: 'Most work is done remotely for efficiency, but in-person meetings can be arranged for local clients in India by prior appointment.'
    },
    {
      question: 'Will I receive a formal project quote?',
      answer: 'Yes. After understanding your requirements, we send a detailed proposal with scope, timeline, milestones, and pricing – usually within 2-3 business days of our discovery call.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Yes. All project details and business information shared with us are treated as confidential. We can sign an NDA before detailed discussions if required.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqId(openFaqId === index ? null : index);
  };

  return (
    <div className="animate-[fadeIn_0.5s_ease-out] bg-slate-50 relative overflow-hidden">
      
      {/* Embedded CSS for 3D elements and float animations */}
      <style>{`
        @keyframes cube-rotate {
          0% {
            transform: rotateY(0deg) rotateX(14deg) translateY(0px);
          }
          50% {
            transform: rotateY(180deg) rotateX(20deg) translateY(-8px);
          }
          100% {
            transform: rotateY(360deg) rotateX(14deg) translateY(0px);
          }
        }

        @keyframes satellite-float-1 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(-1.5deg); }
        }

        @keyframes satellite-float-2 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-7px) rotate(1deg); }
        }

        @keyframes satellite-float-3 {
          0%, 100% { transform: translateY(0px) translate3d(0,0,0); }
          50% { transform: translateY(-6px) translate3d(0, -3px, 8px); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.04); }
        }

        .cube-scene {
          perspective: 1200px;
          perspective-origin: 50% 50%;
          transform-style: preserve-3d;
        }

        .cube {
          position: relative;
          width: 140px;
          height: 140px;
          transform-style: preserve-3d;
          animation: cube-rotate 15s linear infinite;
        }

        .cube-face {
          position: absolute;
          width: 140px;
          height: 140px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(4px);
          border-radius: 28px;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.15), 0 0 15px rgba(59, 130, 246, 0.08);
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cube-face-front  { transform: rotateY(  0deg) translateZ(70px); }
        .cube-face-back   { transform: rotateY(180deg) translateZ(70px); }
        .cube-face-left   { transform: rotateY(-90deg) translateZ(70px); }
        .cube-face-right  { transform: rotateY( 90deg) translateZ(70px); }
        .cube-face-top    { transform: rotateX( 90deg) translateZ(70px); }
        .cube-face-bottom { transform: rotateX(-90deg) translateZ(70px); }

        .anime-satellite-1 {
          animation: satellite-float-1 5.5s ease-in-out infinite;
        }

        .anime-satellite-2 {
          animation: satellite-float-2 4.8s ease-in-out infinite 0.4s;
        }

        .anime-satellite-3 {
          animation: satellite-float-3 5.2s ease-in-out infinite 0.2s;
        }

        .anime-satellite-4 {
          animation: satellite-float-1 5.8s ease-in-out infinite 0.6s;
        }

        .anime-satellite-5 {
          animation: satellite-float-2 4.5s ease-in-out infinite 0.1s;
        }

        .anime-satellite-6 {
          animation: satellite-float-3 6.2s ease-in-out infinite 0.8s;
        }

        .anime-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .preserve-3d-header {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] bg-blue-100/30 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[25%] right-[-5%] w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* HERO SECTION CONTAINER */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-16 select-none border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT COLUMN: HERO INTRO & DESCRIPTION */}
          <div className="lg:col-span-6 flex flex-col items-start text-left justify-center">
            
            {/* Dynamic Pill Label */}
            <span className="text-[12px] md:text-[13px] font-black text-blue-600 tracking-wider uppercase mb-5 font-sans block">
              CONTACT US
            </span>

            {/* Title / Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-950 font-display leading-[1.08] max-w-xl">
              Let's Build The Future Of <br />
              Your <span className="text-[#2563EB]">Business</span> Together
            </h1>

            {/* Description Paragraph */}
            <p className="mt-6 text-[14px] sm:text-[15.5px] text-slate-500 font-semibold leading-relaxed max-w-[500px]">
              Tell us your goals, product idea, automation needs, or growth plans — our experts respond within 24 hours with the right strategy.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4.5 w-full sm:w-auto">
              {/* Button 1: Consultation trigger */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFC820] to-[#F1B608] hover:brightness-105 active:scale-[0.985] text-slate-950 font-extrabold text-[14px] rounded-full shadow-[0_8px_20px_rgba(255,200,32,0.22)] hover:shadow-[0_10px_28px_rgba(255,200,32,0.35)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Get Free Consultation</span>
                <span className="text-base font-black transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>

              {/* Button 2: Direct call number matching mockup exactly */}
              <a
                href="tel:+919669555811"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-blue-400 text-[#2563EB] rounded-full font-extrabold text-[14px] active:scale-[0.985] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-3xs"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" strokeWidth={2.5} />
                <span>Call+91 8962241437</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH FIDELITY 3D STAGE & FLOATING GRAPHICAL ARTIFACTS */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[380px] sm:min-h-[440px] px-2 select-none">
            
            {/* Background interactive coordinate frame graph map */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none -z-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:20px_20px] rounded-3xl" />

            {/* Dotted World Map overlay matching graphic background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.25] pointer-events-none -z-10 mix-blend-multiply select-none">
              <svg width="100%" height="100%" viewBox="0 0 800 400" className="w-full max-w-[480px]">
                <g fill="#3b82f6" opacity="0.6">
                  {/* North America dots */}
                  <circle cx="150" cy="110" r="2.5" /><circle cx="170" cy="120" r="2.5" /><circle cx="190" cy="100" r="2.5" />
                  <circle cx="130" cy="130" r="2" /><circle cx="150" cy="140" r="2" /><circle cx="180" cy="130" r="2" />
                  {/* Europe / Asia dots */}
                  <circle cx="390" cy="100" r="2" /><circle cx="410" cy="110" r="2" /><circle cx="430" cy="95" r="2" />
                  <circle cx="450" cy="115" r="2" /><circle cx="470" cy="105" r="2.5" /><circle cx="490" cy="125" r="2" />
                  <circle cx="510" cy="120" r="1.5" /><circle cx="530" cy="140" r="2" /><circle cx="550" cy="130" r="2.5" />
                  {/* India dots */}
                  <circle cx="480" cy="180" r="3" /><circle cx="490" cy="190" r="3.5" /><circle cx="475" cy="195" r="3" />
                  {/* South America dots */}
                  <circle cx="210" cy="240" r="2" /><circle cx="225" cy="265" r="2" /><circle cx="230" cy="290" r="1.5" />
                  {/* Africa dots */}
                  <circle cx="410" cy="210" r="2" /><circle cx="420" cy="240" r="2" /><circle cx="440" cy="260" r="2.5" />
                  {/* Oceania dots */}
                  <circle cx="620" cy="280" r="2" /><circle cx="640" cy="290" r="2" /><circle cx="660" cy="310" r="1.5" />
                </g>
              </svg>
            </div>

            {/* Elegant glowing Concentric Blue Orbital Ring paths underneath Pedestal */}
            <div className="absolute bottom-[4%] w-80 sm:w-[380px] h-32 border border-[#38BDF8]/65 bg-[#E0F2FE]/5 rounded-full scale-y-[0.38] animate-[spin-slow_45s_linear_infinite] -z-10" />
            <div className="absolute bottom-[3%] w-[330px] sm:w-[390px] h-36 border border-dashed border-[#60A5FA]/30 rounded-full scale-y-[0.34] animate-[spin-slow_60s_linear_infinite_reverse] -z-10" />

            {/* Outer dark ground shadow */}
            <div className="absolute bottom-[6%] w-72 sm:w-80 h-10 bg-slate-400/[0.15] blur-md rounded-full -z-10" />

            {/* THREE LAYER BASE PEDESTAL */}
            <div className="absolute bottom-[3%] flex flex-col items-center justify-center pointer-events-none -z-10">
              {/* Outer Blue Ring Platter */}
              <div className="w-72 h-[48px] bg-gradient-to-b from-[#141B2D] via-[#1E293B] to-[#0F172A] border border-blue-900/60 rounded-full flex items-center justify-center p-0.5" style={{ transform: 'rotateX(72deg)' }}>
                {/* Shiny metallic edge */}
                <div className="w-full h-full rounded-full border border-sky-400/25 bg-[#0A0F1D] relative flex items-center justify-center">
                  <div className="absolute inset-1 border border-[#3b82f6]/35 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-dashed border-sky-500/15 animate-[spin-slow_20s_linear_infinite]" />
                </div>
              </div>
              {/* Middle Neon Blue pulsing Platter */}
              <div className="w-64 h-[38px] bg-gradient-to-tr from-[#1E3A8A] via-[#2563EB]/45 to-[#0F172A] border border-sky-500/55 rounded-full shadow-[0_0_35px_rgba(37,99,235,0.45)] absolute mb-2" style={{ transform: 'rotateX(74deg)' }}>
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center p-0.5">
                  <div className="w-full h-full rounded-full border border-[#06b6d4]/45 bg-[#030712]" />
                </div>
              </div>
              {/* Inner ultra-bright saucer plate with extreme glowing blue light */}
              <div className="w-52 h-[28px] bg-sky-500 rounded-full shadow-[0_0_25px_#0EA5E9] absolute mb-4" style={{ transform: 'rotateX(76deg)' }}>
                <div className="w-full h-full rounded-full bg-gradient-to-b from-sky-300 via-sky-500 to-blue-700 opacity-90 relative">
                  <div className="absolute inset-2 bg-cyan-400 blur-xs rounded-full opacity-60 animate-pulse" />
                </div>
              </div>
            </div>

            {/* MAIN 3D TRANSLUCENT GLASS CUBE CORE */}
            <div className="relative w-44 h-44 sm:w-[190px] sm:h-[190px] cube-scene flex items-center justify-center mb-8 select-none z-20">
              
              {/* Spinning 3D Cube Structure */}
              <div className="cube">
                <div className="cube-face cube-face-front">
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                </div>
                <div className="cube-face cube-face-back">
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                </div>
                <div className="cube-face cube-face-left">
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                </div>
                <div className="cube-face cube-face-right">
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                </div>
                <div className="cube-face cube-face-top">
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                </div>
                <div className="cube-face cube-face-bottom">
                  <div className="absolute inset-2 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[22px]" />
                </div>

                {/* Highly reflective glowing cylinder rods inside cube */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}>
                  <div className="relative w-28 h-28 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Rod 1: Vertical Bar (Peach-Orange-Pink gradient) */}
                    <div className="absolute left-[38%] top-[18%] bottom-[18%] w-4.5 bg-gradient-to-b from-[#FFA8A8] via-[#FF5E5E] to-[#D92B6B] rounded-full shadow-[inset_-2px_0_6px_rgba(255,255,255,0.65),0_8px_16px_rgba(217,43,107,0.4)]" style={{ transform: 'translateZ(8px)' }} />
                    
                    {/* Rod 2: Top Diagonal Arm (Yellow-Red gradient) */}
                    <div className="absolute left-[40%] top-[24%] w-[52px] h-4.5 bg-gradient-to-r from-[#FFDD55] via-[#FF8C33] to-[#FF4444] rounded-full origin-left rotate-[-36deg] shadow-[inset_0_2px_4px_rgba(255,255,255,0.65),0_6px_12px_rgba(255,140,51,0.35)]" style={{ transform: 'translateZ(14px)' }} />
                    
                    {/* Rod 3: Bottom Diagonal Arm (Turquoise-Cyan-Blue gradient) */}
                    <div className="absolute left-[44%] top-[56%] w-[56px] h-4.5 bg-gradient-to-r from-[#44E0D1] via-[#00B4D8] to-[#2563EB] rounded-full origin-left rotate-[38deg] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.65),0_6px_12px_rgba(0,180,216,0.35)]" style={{ transform: 'translateZ(20px)' }} />
                  </div>
                </div>

              </div>
            </div>

            {/* --- CORE ORBITING WIDGET ARTIFACTS --- */}

            {/* 1. Phone Card Float Widget (Left-Mid) with +91 96695 55811 */}
            <div className="absolute top-[6%] left-[-2%] sm:left-[2%] flex flex-col items-center select-none anime-satellite-1 z-30 group cursor-pointer hover:scale-105 duration-300 w-[175px] sm:w-[195px] bg-white/80 backdrop-blur-md rounded-[24px] p-4 border border-white/45 shadow-[0_15px_40px_rgba(15,17,26,0.08)]">
              {/* Top row: phone icon + phone number + sub-label 'Incoming Call' */}
              <div className="flex gap-3 items-center w-full mb-3.5">
                <span className="w-8.5 h-8.5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-600/15">
                  <Phone className="w-4 h-4 text-white fill-white" />
                </span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[12px] font-black tracking-tight text-slate-800 font-sans">++91 8962241437</span>
                  <span className="text-[9.5px] font-semibold text-slate-400 tracking-wide mt-0.5 font-sans">Incoming Call</span>
                </div>
              </div>

              {/* Lower row: Call Actions with animated bridge line */}
              <div className="flex items-center gap-3 justify-between w-full px-1">
                {/* Accept Button (Green) */}
                <a
                  href="tel:+91 8962241437"
                  className="w-8.5 h-8.5 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20 hover:scale-110 active:scale-95 transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 fill-white text-white" />
                </a>

                {/* Connecting lines or pulses */}
                <div className="flex-1 flex items-center justify-center gap-1 opacity-40 px-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse delay-75" />
                  <span className="text-slate-400 text-xs font-black">→</span>
                </div>

                {/* Decline Button (Red) */}
                <div className="w-8.5 h-8.5 rounded-full bg-[#EF4444] flex items-center justify-center text-white shrink-0 shadow-md shadow-rose-500/20 hover:scale-110 active:scale-95 transition-transform">
                  <XLineIcon />
                </div>
              </div>
            </div>

            {/* 2. Direct Mail Card Widget (Right-Mid-Top) with karmyug.com */}
            <div className="absolute top-[3%] right-[-4%] sm:right-[1%] flex flex-col items-center select-none anime-satellite-2 z-30 group cursor-pointer hover:scale-105 duration-300 w-[180px] sm:w-[200px] bg-white/80 backdrop-blur-md rounded-[24px] p-4 border border-white/45 shadow-[0_15px_40px_rgba(15,17,26,0.08)]">
              <div className="flex gap-3 items-center w-full">
                <span className="w-8.5 h-8.5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 border border-blue-100 shadow-md shadow-blue-600/10">
                  <Mail className="w-4 h-4 text-white" />
                </span>
                <div className="flex flex-col text-left leading-tight w-full truncate">
                  <span className="text-[12px] font-black tracking-tight text-slate-800 font-sans truncate">karmyugtechzone@gmail.com</span>
                  <span className="text-[9.5px] font-semibold text-slate-400 tracking-wide mt-0.5 font-sans flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span>New Message</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 3. CRM 3D Button Widget (Right-Mid-Bottom) */}
            <div 
              className="absolute top-[48%] right-[-2%] sm:right-[4%] anime-satellite-4 flex flex-col items-center select-none z-30"
              style={{
                perspective: '800px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 relative bg-gradient-to-tr from-[#1E40AF] to-[#3B82F6] rounded-2xl shadow-[0_12px_28px_rgba(37,99,235,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer border border-sky-400/35"
                style={{
                  transform: 'rotateY(20deg) rotateX(20deg) translateZ(5px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 bg-blue-800 rounded-2xl" style={{ transform: 'translateZ(-5px)' }} />
                <div className="absolute inset-0 bg-blue-950 rounded-2xl" style={{ transform: 'translateZ(-10px)' }} />
                
                <span className="text-white text-[12px] sm:text-[13px] font-black tracking-wide font-sans select-none relative z-10">CRM</span>
              </div>
            </div>

            {/* 4. Cute Spherical White Cyborg Assistant Widget (Bottom-Right) */}
            <div className="absolute bottom-[-1%] right-[5%] sm:right-[8%] anime-satellite-5 z-40 flex flex-col items-center">
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-b from-white via-slate-50 to-slate-200 border border-slate-200/85 rounded-full p-2.5 flex flex-col items-center justify-center shadow-[0_15px_35px_rgba(15,17,26,0.15)] relative">
                
                {/* Left ear cup */}
                <span className="absolute left-[-5px] top-[30%] w-2 h-6 bg-slate-300 rounded-full border border-slate-200 shadow-sm" />
                {/* Right ear cup pulsing */}
                <span className="absolute right-[-5px] top-[30%] w-2 h-6 bg-blue-600 rounded-full border border-blue-500 shadow-sm animate-pulse" />

                {/* Head Antennas */}
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-slate-400" />
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full border border-white filter drop-shadow-[0_0_4px_#38bdf8] animate-ping" />
                
                {/* Visor black glass screen */}
                <div className="w-full h-8.5 bg-slate-950 rounded-2xl border border-slate-800 p-1 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-12 pointer-events-none" />
                  <div className="flex gap-2 relative z-10">
                    <span className="w-2.5 h-2 bg-sky-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                    <span className="w-2.5 h-2 bg-sky-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
                  </div>
                </div>

                <span className="w-2 h-0.5 bg-cyan-400/85 rounded-full mt-1.5 shadow-[0_0_4px_#22d3ee] animate-pulse" />
              </div>
            </div>

            {/* 4.5 Global Floating Label Card (Bottom-Left) */}
            <div className="absolute bottom-[2%] left-[-2%] sm:left-[2%] anime-satellite-3 bg-white/95 border border-slate-150 p-4 rounded-[22px] shadow-[0_12px_32px_rgba(15,17,26,0.06)] w-[125px] cursor-pointer hover:scale-105 duration-300 z-30">
              <span className="text-[14px] font-black text-blue-600 block leading-tight">Global</span>
              <span className="text-[10px] text-slate-500 font-bold block mt-0.5">Support</span>
              <span className="text-[10px] text-slate-500 font-bold block">Worldwide</span>
            </div>

            {/* 5. Floating Translucent Isometric Cubes Decor */}
            <div className="absolute top-[32%] left-[28%] opacity-35 select-none pointer-events-none anime-satellite-3 scale-75">
              <svg width="22" height="22" viewBox="0 0 60 60" fill="none" className="rotate-[12deg]">
                <path d="M30 5 L55 18 V42 L30 55 L5 42 V18 L30 5 Z" fill="url(#miniCubeHeroGrad)" stroke="white" strokeWidth="0.5" />
                <defs>
                  <linearGradient id="miniCubeHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute bottom-[35%] left-[-2%] opacity-50 select-none pointer-events-none anime-satellite-6 scale-90">
              <svg width="26" height="26" viewBox="0 0 60 60" fill="none" className="rotate-[-22deg]">
                <path d="M30 5 L55 18 V42 L30 55 L5 42 V18 L30 5 Z" fill="url(#miniCubeHeroGrad2)" stroke="white" strokeWidth="0.5" />
                <defs>
                  <linearGradient id="miniCubeHeroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" opacity="0.8" />
                    <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute bottom-[22%] right-[-2%] opacity-45 select-none pointer-events-none anime-satellite-2 scale-95">
              <svg width="25" height="25" viewBox="0 0 60 60" fill="none" className="rotate-[18deg]">
                <path d="M30 5 L55 18 V42 L30 55 L5 42 V18 L30 5 Z" fill="url(#miniCubeHeroGrad)" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* 4 HIGH CONTRAST BRAND CONTACT CARDS (Bottom row below Hero) */}
 <section className="relative py-8 select-none border-b border-slate-100 bg-[#F8FAFC]/30">
  <div className="max-w-7xl mx-auto px-6">
    {/* Grid setup */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
      
      {/* Contact Card 1: Call Us */}
      <div className="relative bg-white border border-slate-200/80 p-5 sm:p-6 rounded-[24px] shadow-[0_8px_20px_rgba(15,17,26,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,17,26,0.06)] hover:border-blue-200/60 transition-all duration-300 flex flex-col justify-between items-start cursor-pointer select-none w-full max-w-[260px] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] group">
        
        {/* Blue Dot Badge on top right */}
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </div>

        {/* 3D Telephone Receiver Icon */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-start filter drop-shadow-[0_8px_14px_rgba(37,99,235,0.18)]">
          <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
            <defs>
              <linearGradient id="phone3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="phone3DHigh" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              d="M13.8 8.8C15.1 7.2 17.5 7.2 18.8 8.8L22.2 13C23.3 14.4 23.3 16.4 22.2 17.8L19.4 21.2C19.1 21.6 19.1 22.2 19.4 22.6C21.6 25.8 24.8 29 28 31.2C28.4 31.5 29 31.5 29.4 31.2L32.8 28.4C34.2 27.3 36.2 27.3 37.6 28.4L41.8 31.8C43.4 33.1 43.4 35.5 41.8 36.8L38.2 40.4C35.2 43.4 30.2 41.4 25.2 38.2C20.2 35 15.2 30 12 25C8.8 20 6.8 15 9.8 12L13.8 8.8Z" 
              fill="url(#phone3D)" 
            />
            <path 
              d="M13.8 8.8C15.1 7.2 17.5 7.2 18.8 8.8L22.2 13C22.6 13.5 22.8 14.2 22.8 14.8" 
              stroke="url(#phone3DHigh)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
            <circle cx="16" cy="12" r="3" fill="#FFFFFF" opacity="0.3" filter="blur(0.5px)" />
            <circle cx="38" cy="34" r="3.5" fill="#FFFFFF" opacity="0.25" filter="blur(0.5px)" />
          </svg>
        </div>

        {/* Text Section at Bottom */}
        <div className="flex flex-col text-left gap-0.5 w-full mt-auto">
          <span className="text-[15px] sm:text-[18px] font-extrabold text-slate-900 tracking-tight font-sans leading-none">+91 8962241437</span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">Call Us</span>
        </div>
      </div>

      {/* Contact Card 2: Email Us */}
      <div className="relative bg-white border border-slate-200/80 p-5 sm:p-6 rounded-[24px] shadow-[0_8px_20px_rgba(15,17,26,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,17,26,0.06)] hover:border-blue-200/60 transition-all duration-300 flex flex-col justify-between items-start cursor-pointer select-none w-full max-w-[260px] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] group">
        
        {/* Blue Dot Badge on top right */}
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </div>

        {/* 3D Envelope Icon */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-start filter drop-shadow-[0_8px_14px_rgba(37,99,235,0.18)]">
          <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
            <defs>
              <linearGradient id="mailBack3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
              <linearGradient id="mailFront3D" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <linearGradient id="mailHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="8" y="14" width="40" height="28" rx="6" fill="url(#mailBack3D)" />
            <path d="M8 17L28 32L48 17" fill="none" stroke="#172554" strokeWidth="2.5" opacity="0.15" />
            <path d="M8 42L24.5 28C26.5 26.5 29.5 26.5 31.5 28L48 42H8Z" fill="url(#mailFront3D)" />
            <path d="M8 15L25.8 28.5C27.1 29.5 28.9 29.5 30.2 28.5L48 15" stroke="url(#mailHighlight)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 15H48" stroke="url(#mailHighlight)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Text Section at Bottom */}
        <div className="flex flex-col text-left gap-0.5 w-full mt-auto">
          <span className="text-[13px] sm:text-[15px] font-extrabold text-slate-900 tracking-tight font-sans leading-none truncate w-full">karmyugtech...</span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">Email Us</span>
        </div>
      </div>

      {/* Contact Card 3: Global Reach */}
      <div className="relative bg-white border border-slate-200/80 p-5 sm:p-6 rounded-[24px] shadow-[0_8px_20px_rgba(15,17,26,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,17,26,0.06)] hover:border-blue-200/60 transition-all duration-300 flex flex-col justify-between items-start cursor-pointer select-none w-full max-w-[260px] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] group">
        
        {/* Blue Dot Badge on top right */}
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </div>

        {/* 3D Globe Icon */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-start filter drop-shadow-[0_8px_14px_rgba(37,99,235,0.18)]">
          <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
            <defs>
              <linearGradient id="globeBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="globeGlossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="28" cy="28" r="20" fill="url(#globeBaseGrad)" />
            <ellipse cx="28" cy="28" rx="14" ry="20" stroke="#93C5FD" strokeWidth="2" opacity="0.55" fill="none" />
            <ellipse cx="28" cy="28" rx="7" ry="20" stroke="#93C5FD" strokeWidth="2" opacity="0.55" fill="none" />
            <line x1="8" y1="28" x2="48" y2="28" stroke="#93C5FD" strokeWidth="2" opacity="0.55" />
            <path d="M9.5 18H46.5" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
            <path d="M9.5 38H46.5" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
            <line x1="28" y1="8" x2="28" y2="48" stroke="#93C5FD" strokeWidth="2" opacity="0.55" />
            <path d="M12 18C15 12 21 10 28 10C35 10 41 12 44 18C38 12 28 11 12 18Z" fill="url(#globeGlossHighlight)" />
          </svg>
        </div>

        {/* Text Section at Bottom */}
        <div className="flex flex-col text-left gap-0.5 w-full mt-auto">
          <span className="text-[15px] sm:text-[18px] font-extrabold text-slate-900 tracking-tight font-sans leading-none">Worldwide</span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">Global Reach</span>
        </div>
      </div>

      {/* Contact Card 4: Working Hours */}
      <div className="relative bg-white border border-slate-200/80 p-5 sm:p-6 rounded-[24px] shadow-[0_8px_20px_rgba(15,17,26,0.02)] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,17,26,0.06)] hover:border-blue-200/60 transition-all duration-300 flex flex-col justify-between items-start cursor-pointer select-none w-full max-w-[260px] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] group">
        
        {/* Blue Dot Badge on top right */}
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-blue-50 border border-blue-100/50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
        </div>

        {/* 3D Clock Icon */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-start filter drop-shadow-[0_8px_14px_rgba(37,99,235,0.18)]">
          <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
            <defs>
              <linearGradient id="clockRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="40%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
              <linearGradient id="clockFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EFF6FF" />
              </linearGradient>
            </defs>
            <circle cx="28" cy="28" r="21" fill="url(#clockRingGrad)" />
            <circle cx="28" cy="28" r="17.5" fill="url(#clockFaceGrad)" />
            <line x1="28" y1="28" x2="28" y2="17" stroke="#1E40AF" strokeWidth="3" strokeLinecap="round" />
            <line x1="28" y1="28" x2="36" y2="28" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
            <circle cx="28" cy="28" r="2.5" fill="#1D4ED8" />
            <circle cx="28" cy="28" r="1" fill="#FFFFFF" />
            <line x1="28" y1="12" x2="28" y2="14" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="28" y1="42" x2="28" y2="44" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="12" y1="28" x2="14" y2="28" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="42" y1="28" x2="44" y2="28" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M11 20C13 14 19 11.5 28 11.5C37 11.5 43 14 45 20C41 15 35 13 28 13C21 13 15 15 11 20Z" fill="#FFFFFF" opacity="0.75" />
          </svg>
        </div>

        {/* Text Section at Bottom */}
        <div className="flex flex-col text-left gap-0.5 w-full mt-auto">
          <span className="text-[15px] sm:text-[18px] font-extrabold text-slate-900 tracking-tight font-sans leading-none">10AM - 7PM</span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">Working Hours</span>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* COHESIVE PHYSICAL PROPOSAL MESSAGE FORM */}
      <section className="py-20 bg-[#F8FAFC]/65 scroll-mt-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Content */}
            <div className="lg:col-span-5 flex flex-col justify-start items-start select-none">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-display leading-[1.12]">
                Let's Talk Business
              </h2>
              <div className="h-1 bg-blue-600 w-12 rounded-full mt-4 mb-5" />
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-8">
                Ready to take your operations to the next level? Fill in this brief proposal template, and our expert engineering team will connect with you to review ideas.
              </p>

              {/* Direct interactive buttons */}
              <div className="w-full space-y-4">
                <a
                  href="tel:+919669555811"
                  className="flex items-center gap-4 p-4 border border-slate-150 bg-white hover:bg-slate-50 rounded-2xl transition-all w-full shadow-3xs hover:shadow-xs"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-50 text-[#2563EB] flex items-center justify-center rounded-xl border border-blue-100/50">
                    <Phone className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-black tracking-wider text-slate-400 uppercase font-mono">
                      Phone Call Consultation
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-slate-800 font-display mt-0.5">
                      +91 8962241437
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:karmyugtechzone@gmail.com"
                  className="flex items-center gap-4 p-4 border border-slate-150 bg-white hover:bg-slate-50 rounded-2xl transition-all w-full shadow-3xs hover:shadow-xs"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-50 text-[#2563EB] flex items-center justify-center rounded-xl border border-blue-100/50">
                    <Mail className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <span className="block text-[10px] font-black tracking-wider text-slate-400 uppercase font-mono">
                      Direct Email Inbox
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-slate-800 font-display mt-0.5">
                      karmyugtechzone@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column Form wrapper */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-9 border border-slate-200/80 rounded-3xl shadow-3xs relative">
              {submitted ? (
                <div className="text-center py-10 flex flex-col items-center">
                  <div className="inline-flex p-4 bg-emerald-50 text-emerald-500 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 stroke-[2]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-display">Message Received!</h3>
                  <p className="text-sm text-gray-500 max-w-sm mx-auto mt-3 leading-relaxed font-semibold">
                    Thank you, <strong>{formData.name}</strong>. Our chief consultant Vijay Kumar will reach back to you within 2-4 hours to schedule details.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="mt-8 px-6 py-2.5 bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-bold text-xs rounded-full transition-colors cursor-pointer"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-450 font-sans mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 border border-slate-200 bg-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 font-display placeholder-gray-400"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-450 font-sans mb-1.5">
                      Mobile number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3.5 border border-slate-200 bg-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 font-display placeholder-gray-400"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-450 font-sans mb-1.5">
                      How can we help you?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your goals, product specifications, or service requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 border border-slate-200 bg-[#F8FAFC] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 font-display placeholder-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:brightness-105 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-blue-500/15 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <span>Submit Proposal</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FAQ SECTION ACCORDION GRID */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] scroll-mt-24 select-none relative overflow-hidden border-t border-slate-100">
        
        {/* Ambient background accent glows */}
        <div className="absolute top-1/2 left-12 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[85px] pointer-events-none" />
        <div className="absolute bottom-10 right-24 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-8 items-start">
            
            {/* Left header card */}
            <div className="lg:col-span-3 flex flex-col items-start select-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-[11px] font-bold mb-4 tracking-wider uppercase font-sans">
                <Mail className="w-3 h-3" />
                <span>Contact FAQ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display leading-[1.15]">
                Common <br className="hidden lg:block" /> Questions
              </h2>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 rounded-full mt-4 mb-4 shadow-sm" />
              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
                How to reach us, what to expect, and answers before you get in touch.
              </p>
            </div>

            {/* Column group 1 */}
            <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[24px] shadow-[0_4px_12px_rgba(15,23,42,0.015)] divide-y divide-slate-100 overflow-hidden">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const originalIndex = idx;
                const isOpen = openFaqId === originalIndex;
                return (
                  <div key={idx} className="transition-all duration-350">
                    <button
                      onClick={() => toggleFaq(originalIndex)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-blue-600 font-display transition-colors cursor-pointer select-none"
                    >
                      <span className="text-[13px] sm:text-[13.5px] leading-snug">{faq.question}</span>
                      <span className="flex-shrink-0 text-slate-400 group-hover:text-blue-500 font-medium">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-350 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-slate-50/55 bg-slate-50/[0.15]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-semibold">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column group 2 */}
            <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[24px] shadow-[0_4px_12px_rgba(15,23,42,0.015)] divide-y divide-slate-100 overflow-hidden">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, idx) => {
                const originalIndex = Math.ceil(faqs.length / 2) + idx;
                const isOpen = openFaqId === originalIndex;
                return (
                  <div key={idx} className="transition-all duration-350">
                    <button
                      onClick={() => toggleFaq(originalIndex)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-800 hover:text-blue-600 font-display transition-colors cursor-pointer select-none"
                    >
                      <span className="text-[13px] sm:text-[13.5px] leading-snug">{faq.question}</span>
                      <span className="flex-shrink-0 text-slate-400 group-hover:text-blue-500 font-medium">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-350 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-slate-50/55 bg-slate-50/[0.15]' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-semibold">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3D FAQ graphic block */}
            <div className="lg:col-span-1 hidden lg:flex items-center justify-center select-none py-4">
              <FAQ3DFigure />
            </div>

          </div>
        </div>
      </section>

      {/* STABLE MODAL COMPONENT WINDOW POPUP FOR GET FREE CONSULTATION */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

    </div>
  );
}

// Utility mini custom SVG icon for declining/X represent inside Call panel
function XLineIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="stroke-white" strokeWidth="2.5" strokeLinecap="round">
      <path d="M1 1 L9 9 M9 1 L1 8" />
    </svg>
  );
}
