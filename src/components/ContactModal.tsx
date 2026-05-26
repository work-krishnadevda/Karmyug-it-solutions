import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function ContactModal({ isOpen, onClose, preselectedService = 'General Inquiry' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService || 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync state if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable API post
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const services = [
    'General Inquiry',
    'IT Solutions',
    'Digital Marketing',
    'Business Growth',
    'CRM Development',
    'HRMS Development',
    'ERP Systems',
    'AI Automation'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#0f111a] w-full max-w-lg rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-slate-800/80 overflow-hidden transform transition-all duration-300 animate-[scaleUp_0.3s_ease] font-sans">
        
        {/* Colorful top accent glow line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-brand-purple to-pink-500" />
        
        {/* Soft radial glow behind the top */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Header */}
        <div className="relative px-6 pt-7 pb-5 flex items-center justify-between border-b border-slate-900/60 bg-slate-950/30">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-purple/10 border border-brand-purple/20 text-[#c084fc] rounded-full text-[9px] font-extrabold tracking-widest uppercase mb-1.5">
              <span>CONSULTATION</span>
            </div>
            <h3 className="text-xl font-extrabold font-display text-white tracking-tight leading-none">
              Start Your Project
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">Book your free 30-min discovery call</p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-all p-2 rounded-full hover:bg-slate-800 active:scale-95 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 relative">
          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center select-none animate-[fadeIn_0.4s_ease]">
              <div className="relative inline-flex p-5 bg-emerald-500/10 text-emerald-400 rounded-full mb-6 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                <CheckCircle2 className="w-12 h-12 stroke-[2]" />
              </div>
              <h4 className="text-2xl font-black text-white font-display tracking-tight">Consultation Booked!</h4>
              <p className="text-sm text-slate-300 max-w-xs mx-auto mt-3 leading-relaxed font-semibold">
                Thank you, <span className="text-[#c084fc]">{formData.name}</span>. Our lead consultant Vijay Kumar will reach back within <span className="text-emerald-400">2-4 hours</span> to schedule our call.
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-900 w-full flex flex-col items-center gap-3">
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Need immediate assistance?</p>
                <a
                  href="tel:+919669555811"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#c084fc] hover:text-[#d8b4fe] transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-purple" />
                  <span>Call +91 96695 55811</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', company: '', service: 'General Inquiry', message: '' });
                  onClose();
                }}
                className="mt-8 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800/80 font-bold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer active:scale-[0.98]"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] mb-1.5 opacity-90">
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple focus:bg-slate-900/90 transition-all font-medium"
                />
              </div>

              {/* Row: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] mb-1.5 opacity-90">
                    Email Address <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rajesh@lalsweets.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple focus:bg-slate-900/90 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] mb-1.5 opacity-90">
                    Phone Number <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple focus:bg-slate-900/90 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Company & Selection service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] mb-1.5 opacity-90">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lal Sweets Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple focus:bg-slate-900/90 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] mb-1.5 opacity-90">
                    Required Service
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm text-slate-100 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple focus:bg-slate-900 transition-all font-medium appearance-none cursor-pointer pr-10"
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#0f111a] text-slate-100">
                          {svc}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] mb-1.5 opacity-90">
                  Briefly Describe Your Needs
                </label>
                <textarea
                  rows={3}
                  placeholder="How can we help you? e.g. We want to design a custom e-commerce web portal to scale retail inventory..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900/40 border border-slate-800/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple focus:bg-slate-900/90 transition-all font-medium resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#db2777] hover:brightness-110 text-white font-extrabold text-[13px] tracking-wider uppercase rounded-xl shadow-md shadow-[#7c3aed]/25 hover:shadow-lg hover:shadow-[#7c3aed]/35 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Discovery Call Proposal</span>
                  </>
                )}
              </button>

              <div className="pt-4 border-t border-slate-900/80 flex items-center justify-between text-[10px] text-slate-500 font-mono tracking-wider">
                <span className="inline-flex items-center gap-1.5"><span className="text-brand-purple">🔒</span> Confidential & Secure</span>
                <span className="inline-flex items-center gap-1.5"><span className="text-pink-500">⏱️</span> Response in &lt; 4 hours</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
