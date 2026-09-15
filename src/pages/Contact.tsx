import React, { useState } from 'react';
import { SITE_COPY } from '../data/copy';
import { Send, Check } from 'lucide-react';

interface ContactProps {
  onOpenPlanner: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 space-y-16 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-sm">
          <span>{SITE_COPY.contact.badge}</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
          {SITE_COPY.contact.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {SITE_COPY.contact.subtitle}
        </p>
      </div>

      {/* Form Box (Light Theme Glass) */}
      <div className="p-8 sm:p-10 rounded-3xl glass-card-light max-w-2xl mx-auto">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-heading font-bold text-lg text-slate-900 mb-1">Get in Touch</h2>
            
            <div>
              <label htmlFor="contact-name" className="sr-only">Your Name *</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Your Name *"
                aria-label="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="sr-only">Work Email *</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="Work Email *"
                aria-label="Work Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Tell us about your organization's goals *</label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="Tell us about your organization's goals..."
                aria-label="Organization Goals"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#FA4517]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#FA4517] text-white text-xs font-bold shadow-lg shadow-[#FA4517]/25 hover:bg-[#FF6B35] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Send Inquiry</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-3" aria-live="polite" role="status">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/20">
              <Check className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">Inquiry Received!</h3>
            <p className="text-xs text-slate-600">Thank you, <strong className="text-slate-900">{formState.name}</strong>. We will get back to you shortly.</p>
          </div>
        )}
      </div>

    </div>
  );
};
