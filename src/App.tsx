import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import ServicesView from "./components/ServicesView";
import ProjectList from "./components/ProjectList";
import PortfolioView from "./components/PortfolioView";
import ContactView from "./components/ContactView";
import WhyChoose from "./components/WhyChoose";
import AboutUs from "./components/AboutUs";
import OurClient from "./components/ourclient";
import TeamGrid from "./components/TeamGrid";
import TestimonialsGrid from "./components/TestimonialsGrid";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import {
  Sparkles,
  Megaphone,
  Target,
  Phone,
  ChevronRight,
  ArrowRight,
  Zap,
  TrendingUp,
  Activity,
  Shield,
  Users,
  Building2,
  Star,
  Headphones,
  Laptop,
  Clock,
} from "lucide-react";
import HowWeWork from "./components/HowWeWork";
import OurClients from "./components/ourclient";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "portfolio" | "contact"
  >("home");
  const [activeSection, setActiveSection] = useState("home");
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Inquiry");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      const sections = ["home", "services", "portfolio"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const handleStartProject = (serviceOrProject: string) => {
    setSelectedService(serviceOrProject);
    setContactOpen(true);
  };

  const handleOpenContactDefault = () => {
    setSelectedService("General Inquiry");
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-brand-purple/20 selection:text-brand-purple">
      {/* Sticky Header with navigation */}
      <Header
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onScrollTo={handleScrollTo}
        onOpenContact={handleOpenContactDefault}
      />

      {currentPage === "home" ? (
        /* Scrollable Home wrapper */
        <div id="home" className="scroll-mt-24 w-full overflow-x-hidden">
          {/* Elite Premium Split Hero Section representing exact mockup design */}
          <section className="relative pt-10 pb-12 lg:pt-20 lg:pb-16 px-4 sm:px-6 max-w-7xl mx-auto gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-12 items-center select-none overflow-visible font-sans">
            {/* Ambient background soft light glows */}
            <div className="absolute top-[-5rem] left-[10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-100/30 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-10 right-0 w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] bg-indigo-100/40 rounded-full blur-[90px] lg:blur-[130px] pointer-events-none" />

            {/* Left Side Content - Match typography & details of mockup */}
            <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20 animate-[fadeIn_0.5s_ease-out]">
              {/* Gorgeous 3D-styled display headline with precise gradient color assignments */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-black tracking-tight text-slate-950 font-display leading-[1.1] lg:leading-[1.08] max-w-xl">
                We Help You Grow <br />
                Your Business With <br />
                <span className="text-[#3b82f6] bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm font-black">
                  AI-Powered
                </span>{" "}
                <span className="text-[#10b981] bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent drop-shadow-sm font-black block sm:inline mt-1 sm:mt-0">
                  Custom Software
                </span>
              </h1>

              {/* Subheadline description text with premium styling */}
              <p className="mt-6 text-[14px] sm:text-[15.5px] text-slate-500 leading-relaxed font-semibold max-w-[480px]">
                karmyug provides high-end technology products, digital marketing
                strategies, and expert consulting to scale your business
                internationally.
              </p>

              {/* Action buttons mirroring gold yellow and sleek light-blue borders */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                {/* Gold-Yellow Accent Primary Button */}
                <button
                  onClick={handleOpenContactDefault}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FFC820] to-[#F1B608] hover:brightness-105 active:scale-[0.985] text-slate-950 font-extrabold text-[13.5px] rounded-full shadow-[0_8px_20px_rgba(255,200,32,0.28)] hover:shadow-[0_10px_28px_rgba(255,200,32,0.42)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Start Your Journey</span>
                  <span className="text-base font-black transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Semi-transparent Cyan/Light Blue Outline Secondary Button */}
                <a
                  href="tel:+919669555811"
                  className="w-full sm:w-auto px-8 py-4 bg-[#EDF5FF]/40 hover:bg-[#EDF5FF]/85 border border-[#BFDBFE]/60 text-[#2563EB] rounded-full font-extrabold text-[13.5px] active:scale-[0.985] hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group shadow-[0_4px_10px_rgba(37,99,235,0.02)]"
                >
                  <Phone className="w-4 h-4 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />
                  <span>Call Us Directly</span>
                </a>
              </div>

              {/* Modern Social proof row immediately below client action items */}
              <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <div className="flex -space-x-3 overflow-hidden">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
                  ].map((src, i) => (
                    <img
                      key={i}
                      className="inline-block h-9.5 w-9.5 rounded-full ring-2 ring-white object-cover shadow-sm hover:translate-y-[-2px] transition-transform duration-200"
                      src={src}
                      alt="Customer Portrait"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-slate-500">
                    <span className="font-extrabold text-slate-800">
                      10+ happy clients
                    </span>{" "}
                    trust our services
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Tilted Macbook Laptop & Surrounding Floating 3D Widgets */}
            {/* HEIGHT CONSTRAINT ADDED HERE so scaled container doesn't leave huge whitespace on mobile */}
            <div className="lg:col-span-6 relative w-full flex justify-center items-center mt-6 lg:mt-0 select-none h-[300px] min-[400px]:h-[350px] sm:h-[420px] lg:h-auto">
              {/* Radial background magical glow */}
              <div className="absolute w-[300px] lg:w-[450px] h-[300px] lg:h-[350px] bg-blue-200/25 rounded-full blur-[70px] lg:blur-[90px] -z-10" />

              {/* MAGIC RESPONSIVE SCALING WRAPPER: Original design ko touch kiye bina isko mobile me fit karta hai */}
              <div className="relative flex justify-center items-center scale-[0.55] min-[400px]:scale-[0.65] sm:scale-[0.80] md:scale-[0.90] lg:scale-100 origin-center transition-transform duration-300 z-10">
                {/* ---------- YOUR EXACT ORIGINAL 3D PERSPECTIVE WRAPPER STARTS HERE ---------- */}
                <div className="relative w-full max-w-[480px] h-[330px] flex items-center justify-center [perspective:1400px]">
                  {/* MAIN MACBOOK CONTAINER (TILTED) */}
                  <div
                    className="relative transition-transform duration-700 ease-out flex flex-col items-center"
                    style={{
                      transform: "rotateY(-10deg) rotateX(7deg) rotateZ(-1deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* LAPTOP SCREEN (LIDS) */}
                    <div
                      className="w-[360px] sm:w-[410px] h-[230px] sm:h-[260px] bg-slate-950 rounded-2xl p-2.5 shadow-[0_25px_50px_-12px_rgba(15,17,26,0.22)] border border-slate-800 relative z-10 flex flex-col overflow-hidden"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      {/* Top camera bezel dot */}
                      <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-900 rounded-full flex items-center justify-center">
                        <span className="w-0.5 h-0.5 bg-blue-500 rounded-full opacity-60" />
                      </span>

                      {/* SCREEN CONTENT - Premium White UI SaaS Dashboard */}
                      <div className="w-full h-full bg-slate-100 rounded-lg flex overflow-hidden relative">
                        {/* Left Sidebar Mini Console */}
                        <div className="w-12 bg-slate-900 flex flex-col items-center py-2.5 gap-2.5 shrink-0 select-none border-r border-slate-950">
                          {/* Dot badge */}
                          <div className="w-5.5 h-5.5 rounded-lg bg-gradient-to-tr from-blue-500 via-indigo-500 to-pink-500 flex items-center justify-center shadow-md">
                            <span className="text-[8px] font-black text-white">
                              KY
                            </span>
                          </div>
                          <div className="w-6 h-[1.5px] bg-slate-800 my-1.5" />

                          <div className="w-5.5 h-5.5 rounded bg-blue-600/95 flex items-center justify-center text-white">
                            <TrendingUp className="w-3 h-3 text-white" />
                          </div>
                          <div className="w-5.5 h-5.5 rounded bg-slate-800/60 flex items-center justify-center text-slate-400">
                            <Users className="w-3 h-3" />
                          </div>
                          <div className="w-5.5 h-5.5 rounded bg-slate-800/60 flex items-center justify-center text-slate-400">
                            <Activity className="w-3 h-3" />
                          </div>
                          <div className="w-5.5 h-5.5 rounded bg-slate-800/60 flex items-center justify-center text-slate-400">
                            <Shield className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Main Workspace Frame */}
                        <div className="flex-1 p-3 flex flex-col justify-between overflow-hidden">
                          {/* Workspace top inner bar */}
                          <div className="flex items-center justify-between border-b border-slate-200/70 pb-1.5 mb-1.5">
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] font-extrabold text-slate-800 font-sans tracking-tight">
                                Dashboard
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="w-4 h-4 rounded-full bg-slate-200" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                            </div>
                          </div>

                          {/* Chart row */}
                          <div className="grid grid-cols-5 gap-2 flex-1 items-stretch">
                            {/* Sales Overview Spark Column */}
                            <div className="col-span-3 bg-white border border-slate-200/50 rounded-xl p-2 flex flex-col justify-between">
                              <span className="text-[7px] font-extrabold text-slate-400 uppercase tracking-widest block font-sans">
                                Sales Overview
                              </span>

                              {/* Graphic wave line mockup */}
                              <div className="h-14 relative mt-1">
                                <svg
                                  className="w-full h-full"
                                  viewBox="0 0 100 40"
                                  preserveAspectRatio="none"
                                >
                                  <path
                                    d="M0 35 C 15 32, 30 14, 45 28 C 65 6, 80 18, 100 2"
                                    fill="none"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                  />
                                  <path
                                    d="M0 35 C 15 32, 30 14, 45 28 C 65 6, 80 18, 100 2 L 100 40 L 0 40 Z"
                                    fill="url(#dashChartGrad)"
                                    opacity="0.08"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="dashChartGrad"
                                      x1="0"
                                      y1="0"
                                      x2="0"
                                      y2="1"
                                    >
                                      <stop offset="0%" stopColor="#2563eb" />
                                      <stop
                                        offset="100%"
                                        stopColor="#2563eb"
                                        stopOpacity="0"
                                      />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </div>
                            </div>

                            {/* Top Channels Donut representation */}
                            <div className="col-span-2 bg-white border border-slate-200/50 rounded-xl p-2.5 flex flex-col items-center justify-between">
                              <span className="text-[7px] font-extrabold text-slate-400 uppercase tracking-widest block text-center self-stretch font-sans">
                                Top Channels
                              </span>

                              <div className="relative w-11 h-11 flex items-center justify-center mb-1">
                                {/* Colored concentric rings */}
                                <svg
                                  className="absolute inset-0 w-full h-full rotate-[-45deg]"
                                  viewBox="0 0 32 32"
                                >
                                  <circle
                                    cx="16"
                                    cy="16"
                                    r="11"
                                    stroke="#f1f5f9"
                                    strokeWidth="3.5"
                                    fill="none"
                                  />
                                  <circle
                                    cx="16"
                                    cy="16"
                                    r="11"
                                    stroke="#3b82f6"
                                    strokeWidth="3.5"
                                    strokeDasharray="69"
                                    strokeDashoffset="18"
                                    strokeLinecap="round"
                                    fill="none"
                                  />
                                  <circle
                                    cx="16"
                                    cy="16"
                                    r="11"
                                    stroke="#10b981"
                                    strokeWidth="3.5"
                                    strokeDasharray="69"
                                    strokeDashoffset="44"
                                    strokeLinecap="round"
                                    fill="none"
                                  />
                                  <circle
                                    cx="16"
                                    cy="16"
                                    r="11"
                                    stroke="#f59e0b"
                                    strokeWidth="3.5"
                                    strokeDasharray="69"
                                    strokeDashoffset="58"
                                    strokeLinecap="round"
                                    fill="none"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Recent activity widget */}
                          <div className="bg-white border border-slate-200/50 rounded-xl p-2.5 mt-2 flex flex-col justify-between">
                            <span className="text-[7.5px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1 font-sans">
                              Recent Activities
                            </span>
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-[7.5px] font-semibold text-slate-600 border-b border-slate-100 pb-0.5">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.2 h-1.2 rounded-full bg-blue-500" />{" "}
                                  New License Purchased
                                </span>
                                <span className="text-slate-400 font-bold">
                                  $540 x8
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[7.5px] font-semibold text-slate-600">
                                <span className="flex items-center gap-1.5">
                                  <span className="w-1.2 h-1.2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                                  API deployment node
                                </span>
                                <span className="text-emerald-500 font-extrabold">
                                  Successful
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* LAPTOP BOTTOM BASE CHASSIS (ALUMINUM BED) */}
                    <div
                      className="w-[390px] sm:w-[440px] h-[10px] bg-[#94a3b8] rounded-b-xl border-t border-[#cbd5e1] shadow-[0_15px_30px_rgba(0,0,0,0.18)] relative z-20"
                      style={{
                        transform:
                          "rotateX(82deg) translateY(-8px) translateZ(-4px)",
                        transformOrigin: "bottom center",
                      }}
                    >
                      {/* Visual center latch indicator notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-slate-900/60 rounded-b" />
                    </div>
                  </div>

                  {/* --- OVERLAPPING HIGHEST-END FLOATING WIDGETS (SATELLITES) --- */}

                  {/* 1. Floating Card: Total Revenue (Top Right off-center) */}
                  <div className="absolute -top-12 -right-8 z-30 bg-white/95 backdrop-blur-md border border-slate-100 p-4 rounded-[22px] shadow-[0_12px_32px_rgba(15,17,26,0.08)] flex items-center justify-between gap-5.5 w-[210px] hover:-translate-y-1 transition-transform duration-350 cursor-pointer">
                    <div>
                      <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider block font-mono">
                        Total Revenue
                      </span>
                      <h4 className="text-lg font-black text-slate-800 tracking-tight font-display mt-0.5">
                        ₹24.8M
                      </h4>
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-md text-[9px] font-extrabold mt-1.5 font-sans">
                        ▲ +24.9%
                      </span>
                    </div>
                    {/* Miniature columns representation */}
                    <div className="flex items-end gap-1 h-9 pb-1">
                      <div className="w-1.5 bg-blue-100 rounded-sm h-3" />
                      <div className="w-1.5 bg-blue-200 rounded-sm h-5" />
                      <div className="w-1.5 bg-blue-300 rounded-sm h-7" />
                      <div className="w-1.5 bg-blue-400 rounded-sm h-4" />
                      <div className="w-1.5 bg-blue-600 rounded-sm h-8" />
                    </div>
                  </div>

                  {/* 2. Floating Card: New Customers (Left middle overlap screen) */}
                  <div className="absolute top-[8%] -left-16 z-30 bg-white/95 backdrop-blur-md border border-slate-100 p-4 rounded-[22px] shadow-[0_12px_32px_rgba(15,17,26,0.08)] w-[180px] hover:-translate-y-1 transition-transform duration-350 cursor-pointer">
                    <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider block font-mono">
                      New Customers
                    </span>
                    <div className="flex items-center justify-between mt-0.5">
                      <h4 className="text-lg font-black text-slate-800 tracking-tight font-display">
                        2,356
                      </h4>
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-md text-[9px] font-extrabold font-sans">
                        ▲ +10.4%
                      </span>
                    </div>
                    {/* Wave Line SVG */}
                    <div className="w-full h-7 mt-2.5">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 30"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 25 Q 25 5, 50 20 T 100 5"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0 25 Q 25 5, 50 20 T 100 5 L 100 30 L 0 30 Z"
                          fill="url(#greenSparkGrad)"
                          opacity="0.1"
                        />
                        <defs>
                          <linearGradient
                            id="greenSparkGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#10b981" />
                            <stop
                              offset="100%"
                              stopColor="#10b981"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* 3. Floating Card: Project Progress (Right middle off borders) */}
                  <div className="absolute top-[38%] -right-12 z-30 bg-white/95 backdrop-blur-md border border-slate-100 p-4 rounded-[22px] shadow-[0_12px_32px_rgba(15,17,26,0.08)] w-[135px] text-center hover:-translate-y-1 transition-transform duration-350 cursor-pointer">
                    <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider block mb-2 font-mono">
                      Project Progress
                    </span>

                    <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                      {/* Circular dial gauge representation */}
                      <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                        <circle
                          cx="32"
                          cy="32"
                          r="26"
                          stroke="#f1f5f9"
                          strokeWidth="5.5"
                          fill="none"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="26"
                          stroke="url(#circularProgressGrad)"
                          strokeWidth="5.5"
                          strokeDasharray="163"
                          strokeDashoffset="36"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <defs>
                          <linearGradient
                            id="circularProgressGrad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#f43f5e" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="z-10 text-center">
                        <span className="block text-sm font-black text-slate-800 leading-none">
                          78%
                        </span>
                        <span className="text-[8px] font-bold text-emerald-500 mt-0.5 block">
                          On Track
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 4. Floating Card: AI Automation (Bottom left overlap base) */}
                  <div className="absolute bottom-[2%] -left-12 z-40 bg-white/95 border border-slate-200/60 p-4 rounded-[22px] shadow-[0_15px_35px_rgba(15,17,26,0.09)] w-[165px] hover:-translate-y-1 transition-transform duration-350 cursor-pointer">
                    <span className="text-[9.5px] text-slate-400 font-bold uppercase tracking-widest block font-mono">
                      AI Automation
                    </span>
                    <h4 className="text-xl font-black text-slate-800 tracking-tight font-display mt-0.5">
                      300+
                    </h4>
                    <p className="text-[10px] font-bold text-slate-500 leading-none mt-1">
                      Hours Saved
                    </p>
                  </div>

                  {/* 5. Glowing Circular Security Shield (Far left middle) */}
                  <div className="absolute left-[-6.5rem] top-[40%] z-20 pointer-events-none opacity-90 animate-[bounce_4.5s_infinite_ease-in-out]">
                    <svg
                      width="70"
                      height="75"
                      viewBox="0 0 100 105"
                      fill="none"
                    >
                      <path
                        d="M50 5 L90 20 V55 C90 77 73 95 50 101 C27 95 10 77 10 55 V20 L50 5 Z"
                        fill="url(#shieldGlassFill)"
                        stroke="url(#shieldGlassStroke)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="14"
                        fill="#60a5fa"
                        opacity="0.3"
                      />
                      <circle cx="50" cy="50" r="8" fill="#3b82f6" />
                      <defs>
                        <linearGradient
                          id="shieldGlassFill"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#93c5fd"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity="0.6"
                          />
                        </linearGradient>
                        <linearGradient
                          id="shieldGlassStroke"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* 6. Cute 3D glowing robot mascot chatbot buddy on bottom right */}
                  <div className="absolute -bottom-8 right-[-1.5rem] z-40 flex flex-col items-center animate-[bounce_4.5s_infinite_ease-in-out_200ms]">
                    <div className="relative w-18 h-18 bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-[24px] p-2 flex flex-col items-center justify-center shadow-[0_12px_28px_rgba(15,17,26,0.12)]">
                      {/* Left ear */}
                      <span className="absolute -left-1.5 top-[35%] w-2 h-4.5 bg-slate-300 border border-slate-400 rounded-full" />
                      {/* Right ear */}
                      <span className="absolute -right-1.5 top-[35%] w-2 h-4.5 bg-slate-300 border border-slate-400 rounded-full" />
                      {/* Antenna */}
                      <span className="absolute -top-2 left-[calc(50%-1px)] w-0.5 h-2.5 bg-slate-400" />
                      <span className="absolute -top-3.5 left-[calc(50%-2.5px)] w-2 h-2 bg-blue-500 rounded-full border border-slate-300 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />

                      {/* Face mask viewport screen */}
                      <div className="w-full h-10 bg-slate-950 rounded-[15px] border border-slate-800 p-1 flex items-center justify-center relative overflow-hidden">
                        {/* Floating dual eyes lights */}
                        <div className="flex gap-2">
                          <span className="w-3 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
                          <span className="w-3 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 7. Floating 3D blue isometric cubes & circles background decoratives */}
                  {/* 3D torus ring */}
                  <div className="absolute -top-16 left-[22%] opacity-60 pointer-events-none animate-[spin_25s_linear_infinite] -z-10">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 100 100"
                      fill="none"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="32"
                        stroke="url(#torusCoreGrad)"
                        strokeWidth="12"
                      />
                      <defs>
                        <linearGradient
                          id="torusCoreGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#93c5fd" />
                          <stop offset="100%" stopColor="#1e3a8a" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Glossy cuboid blue 1 */}
                  <div className="absolute right-[-4rem] top-[-3.5rem] opacity-75 pointer-events-none animate-[spin_40s_linear_infinite] -z-10">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 60 60"
                      fill="none"
                      className="rotate-[20deg]"
                    >
                      <path
                        d="M30 5 L55 18 V42 L30 55 L5 42 V18 L30 5 Z"
                        fill="url(#glossBlockGrad)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="glossBlockGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#2563eb"
                            stopOpacity="0.8"
                          />
                          <stop
                            offset="100%"
                            stopColor="#bae6fd"
                            stopOpacity="0.3"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Glossy cuboid blue 2 */}
                  <div className="absolute left-[8%] bottom-[-5.5rem] opacity-70 pointer-events-none animate-[spin_35s_linear_infinite] -z-10">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 60 60"
                      fill="none"
                      className="rotate-[-32deg]"
                    >
                      <path
                        d="M30 5 L55 18 V42 L30 55 L5 42 V18 L30 5 Z"
                        fill="url(#glossBlockGrad2)"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="glossBlockGrad2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#60a5fa"
                            stopOpacity="0.75"
                          />
                          <stop
                            offset="100%"
                            stopColor="#1e40af"
                            stopOpacity="0.35"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                {/* ---------- EXACT ORIGINAL 3D PERSPECTIVE WRAPPER ENDS HERE ---------- */}
              </div>
            </div>
          </section>

          {/* Premium Enterprise Brand Stats Grid Row (Directly below Hero section) */}
          <section className="relative pb-16 pt-6 select-none z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* grid-cols-2 forces 2 items per row on mobile screens */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {/* Stats Card 1 */}
                <div className="bg-white/75 backdrop-blur-md border border-slate-200/50 p-4 sm:p-6.5 rounded-[20px] sm:rounded-[26px] shadow-[0_8px_30px_rgba(241,245,249,0.5)] hover:-translate-y-1 hover:shadow-lg hover:border-blue-200/60 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4.5 cursor-pointer overflow-hidden">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-blue-50/80 flex items-center justify-center text-blue-600 shrink-0 shadow-inner">
                    <Users className="w-5 h-5 sm:w-6.5 sm:h-6.5 text-blue-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xl sm:text-3xl font-black font-display tracking-tight text-slate-900 leading-none">
                      250+
                    </h4>
                    <p className="text-[9px] sm:text-[12px] font-extrabold text-[#64748B] uppercase tracking-wider mt-1 sm:mt-1.5 font-mono break-words">
                      Clients Served
                    </p>
                  </div>
                </div>

                {/* Stats Card 2 */}
                <div className="bg-white/75 backdrop-blur-md border border-slate-200/50 p-4 sm:p-6.5 rounded-[20px] sm:rounded-[26px] shadow-[0_8px_30px_rgba(241,245,249,0.5)] hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200/60 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4.5 cursor-pointer overflow-hidden">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-emerald-50/80 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                    <Building2 className="w-5 h-5 sm:w-6.5 sm:h-6.5 text-emerald-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xl sm:text-3xl font-black font-display tracking-tight text-slate-900 leading-none">
                      15+
                    </h4>
                    <p className="text-[9px] sm:text-[12px] font-extrabold text-[#64748B] uppercase tracking-wider mt-1 sm:mt-1.5 font-mono break-words">
                      Industries Covered
                    </p>
                  </div>
                </div>

                {/* Stats Card 3 */}
                <div className="bg-white/75 backdrop-blur-md border border-slate-200/50 p-4 sm:p-6.5 rounded-[20px] sm:rounded-[26px] shadow-[0_8px_30px_rgba(241,245,249,0.5)] hover:-translate-y-1 hover:shadow-lg hover:border-amber-200/60 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4.5 cursor-pointer overflow-hidden">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-amber-50/80 flex items-center justify-center text-amber-500 shrink-0 shadow-inner">
                    <Star className="w-5 h-5 sm:w-6.5 sm:h-6.5 text-amber-500 fill-amber-400" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xl sm:text-3xl font-black font-display tracking-tight text-slate-900 leading-none">
                      98%
                    </h4>
                    <p className="text-[9px] sm:text-[12px] font-extrabold text-[#64748B] uppercase tracking-wider mt-1 sm:mt-1.5 font-mono break-words">
                      Client Satisfaction
                    </p>
                  </div>
                </div>

                {/* Stats Card 4 */}
                <div className="bg-white/75 backdrop-blur-md border border-slate-200/50 p-4 sm:p-6.5 rounded-[20px] sm:rounded-[26px] shadow-[0_8px_30px_rgba(241,245,249,0.5)] hover:-translate-y-1 hover:shadow-lg hover:border-rose-200/60 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4.5 cursor-pointer overflow-hidden">
                  <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-rose-50/80 flex items-center justify-center text-rose-500 shrink-0 shadow-inner">
                    <Headphones className="w-5 h-5 sm:w-6.5 sm:h-6.5 text-rose-500" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xl sm:text-3xl font-black font-display tracking-tight text-slate-900 leading-none">
                      24/7
                    </h4>
                    <p className="text-[9px] sm:text-[12px] font-extrabold text-[#64748B] uppercase tracking-wider mt-1 sm:mt-1.5 font-mono break-words">
                      Support Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <ServicesSection
            onStartProject={handleStartProject}
            onViewAllServices={() => {
              setCurrentPage("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          <HowWeWork />

          {/* Why Choose Section */}
          <WhyChoose onOpenContact={handleOpenContactDefault} />

          {/* About Section */}
          <AboutUs />

            {/* Clients Logos Section */}
          <OurClients />

          {/* Projects section */}
          <ProjectList
            onStartProject={handleStartProject}
            onViewAllProjects={() => {
              setCurrentPage("portfolio");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          {/* Team block */}
          <TeamGrid />

          {/* Testimonials block */}
          <TestimonialsGrid />

          {/* FAQs accordion block */}
          <FAQSection />

          {/* Central Call-To-Action Campaign block */}
          <section className="py-24 bg-[#FAFBFD] w-full text-center relative overflow-hidden select-none border-t border-slate-200/80">
            {/* Soft decorative ambient glow circles inside */}
            <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-[44px] font-black tracking-tight font-display mb-6 text-slate-900">
                Ready to Grow Your Business?
              </h3>
              <p className="text-sm sm:text-base md:text-[17px] text-slate-500 max-w-4xl mx-auto leading-relaxed mb-10 font-semibold font-sans">
                Let's discuss your project — whether it's a new website, mobile
                app, or full digital transformation. Free consultation, no
                obligation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                <button
                  onClick={handleOpenContactDefault}
                  className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-black text-sm sm:text-base rounded-full shadow-lg shadow-blue-600/15 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Start Your Journey</span>
                  <span className="text-lg leading-none">➔</span>
                </button>
                <a
                  href="tel:+918962241437"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-white hover:bg-[#FAFBFD] border border-slate-200 text-slate-700 font-extrabold text-sm sm:text-base rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-3xs"
                >
                  Call +91 8962241437
                </a>
              </div>
            </div>
          </section>
        </div>
      ) : currentPage === "services" ? (
        <ServicesView onOpenContact={handleOpenContactDefault} />
      ) : currentPage === "portfolio" ? (
        <PortfolioView onStartProject={handleStartProject} />
      ) : (
        <ContactView />
      )}

      {/* Footer Area */}
      <Footer
        onScrollTo={handleScrollTo}
        onNavigate={setCurrentPage}
        onOpenContact={handleOpenContactDefault}
      />

      {/* Appointment/Inquiry Form Modal dialog */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
}