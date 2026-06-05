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
      <header className="sticky top-0 z-40 w-full bg-slate-950/90 border-b border-slate-900 shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-md py-4 px-6 flex justify-center pointer-events-none transition-all duration-300">
        <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto">
          {/* Desktop Logo */}
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
  className="block h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
/>
</div>

              <div className="flex flex-col text-left leading-tight">
                <span className="font-display font-extrabold tracking-wider text-white text-[13.5px]">
                  KARMYUG
                </span>
                <span className="text-[8px] tracking-widest text-[#a78bfa] font-black uppercase">
                  IT Solutions
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Central Navigation Links */}
          <div className="hidden md:flex items-center gap-2.5 font-sans justify-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  currentPage === item.id &&
                  (item.id !== "home" || activeSection === "home")
                    ? "bg-white/10 text-white shadow-inner shadow-white/5"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Side CTA Action Button */}
          <div className="hidden md:flex items-center justify-end">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:brightness-105 active:scale-[0.97] text-white font-extrabold text-[12px] tracking-wide rounded-full shadow-md shadow-blue-600/15 hover:shadow-lg transition-all duration-300 cursor-pointer"
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
              <span className="text-white font-display font-extrabold tracking-wider text-[13px] uppercase">
                karmyug
              </span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-1.5 bg-white/5 rounded-md transition-colors"
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

      {/* Premium Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-xl flex flex-col justify-between items-center py-12 px-6 md:hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Top Section: Close Button */}
          <div className="w-full flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-colors duration-200"
              aria-label="Close menu"
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
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="flex flex-col items-center gap-8 w-full -mt-10">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`relative text-3xl font-light tracking-wide transition-colors duration-300 ${
                    isActive ? "text-white font-medium" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Premium glowing dot indicator for active state */}
                  {isActive && (
                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Bottom Section: CTA */}
          <div className="w-full flex flex-col items-center gap-6 mt-auto">
            {/* Subtle divider */}
            <div className="w-12 h-[1px] bg-white/10"></div>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full max-w-[280px] px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-full shadow-[0_8px_30px_rgba(59,130,246,0.25)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)] active:scale-95 transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </>
  );
}