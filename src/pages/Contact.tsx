import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SITE_COPY } from '../data/copy';
import { SEO } from '../components/SEO';
import { Send, MapPin, Mail, Clock, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { FaqSection } from '../components/FaqSection';

interface ContactProps {
  onOpenPlanner: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPlanner }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Work email address is required.';
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid work email address (e.g. name@company.com).';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Please provide a brief description of your organization goals or questions.';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate async submission loading state
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 800);
  };

  return (
    <>
      <SEO
        title="Contact Us & Book Diagnostic Audit"
        description="Get in touch with Duokim Axis. Schedule a 7-Dimension Diagnostic Audit or discuss your custom web application and brand strategy requirements."
      />

      <div className="pt-32 pb-20 space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-xs">
            <span>{SITE_COPY.contact.badge}</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            {SITE_COPY.contact.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {SITE_COPY.contact.subtitle}
          </p>
        </div>

        {/* Contact Grid: Perfectly Aligned Matching Light Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Info & Details (Stretched Light Theme Card) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-7 shadow-xs">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading font-extrabold text-xl text-slate-900">Direct Contact</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Connect directly with our strategy and digital engineering leads to discuss your organization's roadmap.
                </p>
              </div>

              <div className="space-y-6 text-xs">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FA4517]/10 text-[#FA4517] flex items-center justify-center shrink-0 border border-[#FA4517]/20 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Location</h3>
                    <p className="text-slate-900 font-bold text-xs leading-relaxed">
                      Abuja, Nigeria <span className="text-slate-400 font-mono font-medium">(WAT / GMT+1)</span>
                    </p>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FA4517]/10 text-[#FA4517] flex items-center justify-center shrink-0 border border-[#FA4517]/20 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Email Inquiries</h3>
                    <a href="mailto:duokimaxis@gmail.com" className="text-slate-900 font-bold text-xs hover:text-[#FA4517] transition-colors block">
                      duokimaxis@gmail.com
                    </a>
                    <a href="mailto:contact@duokimaxis.com" className="text-slate-500 font-medium text-xs hover:text-[#FA4517] transition-colors block">
                      contact@duokimaxis.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FA4517]/10 text-[#FA4517] flex items-center justify-center shrink-0 border border-[#FA4517]/20 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Operating Hours</h3>
                    <p className="text-slate-900 font-bold text-xs">Monday – Friday: 9:00 AM – 6:00 PM (WAT)</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onOpenPlanner}
                className="w-full py-3.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#FA4517]" />
                <span>Launch Interactive Project Planner</span>
              </button>
            </div>
          </div>

          {/* Right: Form Box (Matching Height Light Card) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h2 className="font-heading font-extrabold text-xl text-slate-900 mb-1">Get in Touch</h2>
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 block">
                  Your Full Name <span className="text-[#FA4517]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Emmanuel Adeleke"
                  aria-label="Your Name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                      : 'border-slate-200 focus:border-[#FA4517]'
                  }`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="text-[11px] font-medium text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block">
                  Work Email Address <span className="text-[#FA4517]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@company.com"
                  aria-label="Work Email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  value={formState.email}
                  onChange={(e) => {
                    setFormState({ ...formState, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                      : 'border-slate-200 focus:border-[#FA4517]'
                  }`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="text-[11px] font-medium text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block">
                  Tell us about your organization's goals <span className="text-[#FA4517]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your current tech challenges, scope expectations, or timeline..."
                  aria-label="Organization Goals"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500 bg-red-50/20'
                      : 'border-slate-200 focus:border-[#FA4517]'
                  }`}
                ></textarea>
                {errors.message && (
                  <p id="contact-message-error" className="text-[11px] font-medium text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#FA4517] text-white text-xs font-bold shadow-lg shadow-[#FA4517]/25 hover:bg-[#FF6B35] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Inquiry & Schedule Call</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                By submitting, you agree to our{' '}
                <Link to="/privacy" className="text-[#FA4517] underline hover:text-slate-700">Privacy Policy</Link> and{' '}
                <Link to="/terms" className="text-[#FA4517] underline hover:text-slate-700">Terms of Service</Link>.
              </p>
            </form>
          </div>

        </div>

        {/* Frequently Asked Questions */}
        <FaqSection onOpenPlanner={onOpenPlanner} />

      </div>
    </>
  );
};

export default Contact;
