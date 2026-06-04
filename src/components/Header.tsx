import React, { useState } from "react";

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
  onOpenContact: () => void;
  activeSection: string;
  currentPage: "home" | "services" | "portfolio" | "contact";
  onNavigate: (page: "home" | "services" | "portfolio" | "contact") => void;
}

export default function Header({
  onScrollTo,
  onOpenContact,
  activeSection,
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Logo", id: "logo" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === "logo") {
      onNavigate("home");
      setTimeout(() => onScrollTo("home"), 50);
    } else if (id === "contact") {
      onNavigate("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "portfolio") {
      onNavigate("portfolio");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "home") {
      onNavigate("home");
      setTimeout(() => onScrollTo("home"), 50);
    } else if (id === "services") {
      onNavigate("services");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-slate-950/90 border-b border-slate-900 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-md py-3 sm:py-4 px-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none transition-all duration-300">
        <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto gap-4">
          <div className="hidden md:flex items-center justify-start">
            <a
              href="#home"
              onClick={(e) => handleNavClick("logo", e)}
              className="group flex items-center gap-3 p-1 rounded-full transition-all duration-300"
              aria-label="karmyug Home"
            >
              <div className="flex items-center justify-center">
               <img
  src="/logo.png"
  alt="karmyug Logo"
  className="h-8 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
/>
              </div>

              <div className="flex flex-col text-left leading-tight">
                <span className="font-display font-extrabold tracking-wider text-white text-xs lg:text-[13.5px]">
                  KARMYUG
                </span>
                <span className="text-[8px] tracking-widest text-[#a78bfa] font-black uppercase">
                  IT Solutions
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Central Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2.5 font-sans justify-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick("home", e)}
              className={`text-xs lg:text-[13px] font-bold px-3 lg:px-4 py-2 rounded-full transition-all duration-200 ${
                currentPage === "home" && activeSection === "home"
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick("services", e)}
              className={`text-xs lg:text-[13px] font-bold px-3 lg:px-4 py-2 rounded-full transition-all duration-200 ${
                currentPage === "services"
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick("portfolio", e)}
              className={`text-xs lg:text-[13px] font-bold px-3 lg:px-4 py-2 rounded-full transition-all duration-200 ${
                currentPage === "portfolio"
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick("contact", e)}
              className={`text-xs lg:text-[13px] font-bold px-3 lg:px-4 py-2 rounded-full transition-all duration-200 ${
                currentPage === "contact"
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Desktop Right Side CTA Action Button */}
          <div className="hidden md:flex items-center justify-end">
            <button
              onClick={onOpenContact}
              className="px-4 lg:px-5 py-2 lg:py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:brightness-105 active:scale-[0.97] text-white font-extrabold text-[11px] lg:text-[12px] tracking-wide rounded-full shadow-md shadow-blue-600/15 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Header Layout */}
          <div className="flex md:hidden items-center justify-between w-full">
            <a
              href="#home"
              onClick={(e) => handleNavClick("logo", e)}
              className="flex items-center gap-2.5 group"
            >
              <div className="p-0.5 bg-white/5 rounded-full flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  className="fill-none stroke-[8]"
                >
                  <path
                    d="M50 5 L63 38 L98 38 L70 59 L81 92 L50 72 L19 92 L30 59 L2 38 L37 38 Z"
                    stroke="url(#starGrad)"
                  />
                </svg>
              </div>
              <span className="text-white font-display font-extrabold tracking-wider text-[13px]">
                karmyug
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 bg-white/5 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div       className="
      fixed
      top-0
      right-0
      h-screen
      w-[85%]
      max-w-sm
      bg-slate-950
      border-l
      border-white/10
      z-[60]
      md:hidden
      flex
      flex-col
      shadow-2xl
      animate-in
      slide-in-from-right
      duration-300
    "
>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a
            href="#home"
            onClick={(e) => handleNavClick("home", e)}
            className={`text-xl sm:text-2xl font-semibold px-6 py-2 rounded-full ${
              currentPage === "home"
                ? "bg-brand-purple text-white"
                : "text-gray-300"
            }`}
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick("services", e)}
            className={`text-xl sm:text-2xl font-semibold px-6 py-2 rounded-full ${
              currentPage === "services"
                ? "bg-brand-purple text-white"
                : "text-gray-300"
            }`}
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleNavClick("portfolio", e)}
            className={`text-xl sm:text-2xl font-semibold px-6 py-2 rounded-full ${
              currentPage === "portfolio"
                ? "bg-brand-purple text-white"
                : "text-gray-300"
            }`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick("contact", e)}
            className={`text-xl sm:text-2xl font-semibold px-6 py-2 rounded-full ${
              currentPage === "contact"
                ? "bg-brand-purple text-white"
                : "text-gray-300"
            }`}
          >
            Contact
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
           className="mt-4 w-full max-w-xs px-6 py-3 bg-brand-purple text-white font-medium rounded-full shadow-lg shadow-brand-purple/30 hover:bg-brand-deep transition-all"
          >
            Get Free Consultation
          </button>
        </div>
      )}
    </>
  );
}
