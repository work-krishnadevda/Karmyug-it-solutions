import React from "react";
import {
  Users,
  FileText,
  Calendar,
  Layers,
  TrendingUp,
  GitBranch,
  Database,
  Sparkles,
  Briefcase,
} from "lucide-react";

interface WhyChooseProps {
  onOpenContact: () => void;
}

export default function WhyChoose({}: WhyChooseProps) {
  const features = [
    {
      text: "Dedicated project manager on every engagement",
      icon: Users,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      text: "Transparent pricing with no hidden costs",
      icon: FileText,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      text: "Agile delivery with weekly progress demos",
      icon: Calendar,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      text: "Post-launch support and maintenance plans",
      icon: Layers,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20",
    },
    {
      text: "SEO and performance optimization included",
      icon: TrendingUp,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      text: "Source code and assets handed over to you",
      icon: GitBranch,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      text: "Custom CRM, HRMS & ERP built around your workflows",
      icon: Database,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      text: "AI-powered automation to reduce manual work",
      icon: Sparkles,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      text: "Industry-ready software for real estate, logistics & operations",
      icon: Briefcase,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
  ];

return (
  <section
    id="why"
    className="relative overflow-hidden py-12 lg:py-16 bg-[#03091e] border-t border-slate-900"
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatOrb {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          @keyframes rotateRing {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes pulseGlow {
            0%,100% { opacity:.2; }
            50% { opacity:.6; }
          }

          .orb-float {
            animation: floatOrb 8s ease-in-out infinite;
          }

          .ring-rotate {
            animation: rotateRing 35s linear infinite;
          }

          .glow-pulse {
            animation: pulseGlow 4s ease-in-out infinite;
          }
        `,
      }}
    />

    {/* Background Orbs */}

    <div className="absolute top-10 left-10 w-[260px] h-[260px] bg-cyan-500/10 rounded-full blur-[120px] orb-float" />

    <div className="absolute bottom-0 right-10 w-[280px] h-[280px] bg-blue-500/10 rounded-full blur-[120px] orb-float" />

    <div className="absolute top-16 right-1/4 w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[90px] orb-float" />

    {/* Rotating Rings */}

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-[420px] h-[420px]">
        <div className="absolute inset-0 border border-cyan-500/10 rounded-full ring-rotate" />

        <div className="absolute inset-8 border border-blue-500/10 rounded-full ring-rotate" />

        <div className="absolute inset-16 border border-purple-500/10 rounded-full ring-rotate" />
      </div>
    </div>

    {/* Particles */}

    <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full glow-pulse" />
    <div className="absolute top-40 right-1/3 w-2 h-2 bg-blue-400 rounded-full glow-pulse" />
    <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-purple-400 rounded-full glow-pulse" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      {/* Header */}

      <div className="text-center mb-8">
        <p className="text-[#00E5FF] text-xs uppercase tracking-[0.35em] font-black mb-2">
          WHY CHOOSE KAMRYUG
        </p>

        <h2 className="text-3xl md:text-4xl font-black text-white">
          Your Success Is Our Mission
        </h2>

        <p className="mt-2 text-slate-400 max-w-xl mx-auto text-sm">
          We build websites, applications and enterprise software that help
          businesses automate operations, improve efficiency and scale faster.
        </p>
      </div>

      {/* Feature Grid */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-500"
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.border} ${item.bg} mb-3`}
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium group-hover:text-white transition-colors">
              {item.text}
            </p>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
}