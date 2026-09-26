import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { initAnalytics } from '../utils/analytics';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('duokim_cookie_consent');
    if (!consent) {
      // Show banner after a slight delay for better UX
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      initAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('duokim_cookie_consent', 'accepted');
    setVisible(false);
    initAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem('duokim_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom duration-300"
    >
      <div className="bg-[#0D1C23]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl rounded-2xl p-5 text-white space-y-3.5 relative overflow-hidden">
        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FA4517]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FA4517]/15 text-[#FA4517] flex items-center justify-center shrink-0 border border-[#FA4517]/20">
            <Cookie className="w-5 h-5" aria-hidden="true" />
          </div>

          <div className="space-y-1 pr-4">
            <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
              <span>We value your privacy</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 inline" aria-hidden="true" />
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              We use essential cookies and anonymous analytics to improve system performance and deliver tailored strategic solutions.{' '}
              <Link to="/privacy" className="text-[#FA4517] underline hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
            </p>
          </div>

          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors absolute top-3 right-3"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#FA4517] hover:bg-[#e03a0f] text-white text-xs font-bold transition-all shadow-md cursor-pointer text-center"
          >
            Accept Cookies
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition-all border border-slate-700 cursor-pointer text-center"
          >
            Decline Non-Essential
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
