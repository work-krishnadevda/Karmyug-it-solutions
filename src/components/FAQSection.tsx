import React, { useState } from 'react';
import { FAQS_DATA } from '../data';
import { 
  MessageSquare,
  Plus,
  Minus
} from 'lucide-react';
import FAQ3DFigure from './FAQ3DFigure';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('q1'); // Open first FAQ by default

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const halfLen = Math.ceil(FAQS_DATA.length / 2);
  const firstCol = FAQS_DATA.slice(0, halfLen);
  const secondCol = FAQS_DATA.slice(halfLen);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] scroll-mt-24 select-none relative overflow-hidden border-t border-slate-100">
      
      {/* Decorative vector background glows */}
      <div className="absolute top-1/2 left-12 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[85px] pointer-events-none" />
      <div className="absolute bottom-10 right-24 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Dynamic Responsive 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-8 items-start">
          
          {/* Column 1: Title and Subtitle - Spans 3 columns on large desktop */}
          <div className="lg:col-span-3 flex flex-col items-start select-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/60 border border-blue-100/30 text-blue-600 rounded-full text-[11px] font-bold mb-4 tracking-wider uppercase">
              <MessageSquare className="w-3 h-3" />
              <span>Helper Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] font-display leading-[1.15]">
              Frequently <br className="hidden lg:block" /> Asked Questions
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 rounded-full mt-4 mb-4 shadow-sm" />
            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-semibold">
              Quick answers about our IT services, CRM, HRMS, ERP, AI automation, and how to get started.
            </p>
          </div>

          {/* Column 2: First Half of Accordion Items - Spans 4 columns */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[24px] shadow-[0_4px_12px_rgba(15,23,42,0.015)] divide-y divide-slate-100 overflow-hidden">
            {firstCol.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="transition-all duration-350">
                  <button
                    onClick={() => toggleFaq(faq.id)}
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
                    <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 3: Second Half of Accordion Items - Spans 4 columns */}
          <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-[24px] shadow-[0_4px_12px_rgba(15,23,42,0.015)] divide-y divide-slate-100 overflow-hidden">
            {secondCol.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="transition-all duration-350">
                  <button
                    onClick={() => toggleFaq(faq.id)}
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
                    <div className="px-6 py-4 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 4: 3D Isometric Illustration - Spans 1 column on large screens */}
          <div className="lg:col-span-1 hidden lg:flex items-center justify-center select-none py-4">
            <FAQ3DFigure />
          </div>

        </div>

      </div>
    </section>
  );
}
