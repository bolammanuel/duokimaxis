import React, { useState } from 'react';
import { SCOPE_OPTIONS } from '../data/content';
import { X, Check, ArrowRight } from 'lucide-react';

interface ProjectPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPlannerModal: React.FC<ProjectPlannerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedOption, setSelectedOption] = useState<string>(SCOPE_OPTIONS[0].id);
  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] border border-slate-200/80 shadow-2xl p-6 sm:p-7 text-slate-900 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1 pr-8">
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">Book a Consultation</h2>
              <p className="text-xs text-slate-600 font-medium">Select a service area to schedule your diagnostic audit.</p>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Select Service Area</label>
              <div className="space-y-2">
                {SCOPE_OPTIONS.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#FA4517]/5 border-[#FA4517] shadow-sm'
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      {/* Selection Radio Dot */}
                      <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'border-[#FA4517] bg-[#FA4517]' : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      <div className="flex-grow space-y-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-heading font-bold text-xs text-slate-900">{opt.name}</h4>
                          <span className="text-[10px] font-mono font-bold text-[#FA4517] px-2 py-0.5 rounded-full bg-[#FA4517]/10 flex-shrink-0">
                            {opt.timeframe}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug font-medium">{opt.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517] transition-colors"
              />

              <input
                type="email"
                required
                placeholder="Work Email *"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517] transition-colors"
              />

              <textarea
                rows={2}
                placeholder="Tell us about your organization's goals..."
                value={contactInfo.message}
                onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517] transition-colors"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FA4517] text-white text-xs font-bold shadow-lg shadow-[#FA4517]/25 hover:bg-[#FF6B35] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Diagnostic Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/20">
              <Check className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">Consultation Request Sent!</h2>
            <p className="text-xs text-slate-600">Thank you, <strong className="text-slate-900">{contactInfo.name}</strong>. We will get back to you shortly at <span className="text-slate-900">{contactInfo.email}</span>.</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
