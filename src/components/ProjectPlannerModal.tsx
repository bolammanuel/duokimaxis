import React, { useState, useEffect, useRef } from 'react';
import { SCOPE_OPTIONS } from '../data/content';
import { X, Check, ArrowRight, Loader2, AlertCircle, ChevronDown } from 'lucide-react';

interface ProjectPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectPlannerModal: React.FC<ProjectPlannerModalProps> = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string>(SCOPE_OPTIONS[0].id);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const modalRef = useRef<HTMLDivElement>(null);

  const currentScope = SCOPE_OPTIONS.find(opt => opt.id === selectedOption) || SCOPE_OPTIONS[0];

  // Keyboard accessibility & Body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Focus the modal title on open for screen readers
    const timeout = setTimeout(() => {
      const modalElement = modalRef.current;
      if (modalElement) {
        modalElement.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!contactInfo.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactInfo.email.trim()) {
      newErrors.email = 'Work email address is required.';
    } else if (!emailRegex.test(contactInfo.email)) {
      newErrors.email = 'Please enter a valid work email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="planner-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-7 text-slate-900 cursor-default focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal dialog"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1 pr-8">
              <h2 id="planner-modal-title" className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
                Book a Consultation
              </h2>
              <p className="text-xs text-slate-600 font-medium">Schedule a 1-on-1 diagnostic evaluation for your organization.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* Service Area Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="service-area-select" className="text-xs font-bold text-slate-700 block">
                  Select Service Area <span className="text-[#FA4517]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service-area-select"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#FA4517] cursor-pointer appearance-none pr-10 transition-colors"
                  >
                    {SCOPE_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name} — {opt.timeframe}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pl-1">
                  {currentScope.description}
                </p>
              </div>

              {/* Name Field */}
              <div className="space-y-1">
                <label htmlFor="planner-name" className="text-xs font-bold text-slate-700 block">
                  Full Name <span className="text-[#FA4517]">*</span>
                </label>
                <input
                  id="planner-name"
                  type="text"
                  placeholder="e.g. Emmanuel Adeleke"
                  aria-label="Full Name"
                  aria-invalid={Boolean(errors.name)}
                  value={contactInfo.name}
                  onChange={(e) => {
                    setContactInfo({ ...contactInfo, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                    errors.name ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-[#FA4517]'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] font-medium text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label htmlFor="planner-email" className="text-xs font-bold text-slate-700 block">
                  Work Email <span className="text-[#FA4517]">*</span>
                </label>
                <input
                  id="planner-email"
                  type="email"
                  placeholder="name@company.com"
                  aria-label="Work Email"
                  aria-invalid={Boolean(errors.email)}
                  value={contactInfo.email}
                  onChange={(e) => {
                    setContactInfo({ ...contactInfo, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                    errors.email ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-200 focus:border-[#FA4517]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] font-medium text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label htmlFor="planner-message" className="text-xs font-bold text-slate-700 block">
                  Organization Goals
                </label>
                <textarea
                  id="planner-message"
                  rows={2}
                  placeholder="Tell us about your goals..."
                  aria-label="Organization Goals"
                  value={contactInfo.message}
                  onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517] transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#FA4517] text-white text-xs font-bold shadow-lg shadow-[#FA4517]/25 hover:bg-[#FF6B35] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <span>Request Diagnostic Audit</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-3" aria-live="polite" role="status">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/20">
              <Check className="w-6 h-6" aria-hidden="true" />
            </div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">Consultation Request Sent!</h2>
            <p className="text-xs text-slate-600">Thank you, <strong className="text-slate-900">{contactInfo.name}</strong>. We will get back to you shortly at <span className="text-slate-900">{contactInfo.email}</span>.</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#FA4517] text-xs font-bold text-white hover:bg-[#e03a0f] transition-colors shadow-md cursor-pointer"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
