import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_COPY } from '../data/copy';

interface FooterProps {
  onOpenPlanner?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlanner }) => {
  return (
    <footer className="border-t border-slate-200 bg-[#0A1318] text-slate-300 pt-16 pb-10 overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 w-full min-w-0">
        
        {/* Top Banner CTA Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-[#0D1C23] to-slate-900 border border-slate-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl w-full">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-[#FA4517]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 text-center md:text-left z-10 min-w-0 max-w-full">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              Ready to eliminate operational friction?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl">
              Schedule a 7-Dimension Diagnostic Audit or discuss your custom web application requirements with our team.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 z-10 shrink-0">
            <button
              onClick={onOpenPlanner}
              className="px-5 py-3 rounded-xl bg-[#FA4517] hover:bg-[#e03a0f] text-white font-bold text-sm tracking-tight transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FA4517] cursor-pointer"
            >
              Book Diagnostic Call
            </button>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm tracking-tight transition-all border border-slate-700 hover:border-slate-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pt-4 border-b border-slate-800/80 pb-12 w-full min-w-0">
          
          {/* Brand Info (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-5 min-w-0 max-w-full">
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-md">
                  <svg width="22" height="22" viewBox="0 0 384 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 28.8349C0 15.12 11.1005 4.00195 24.7936 4.00195H358.681C372.375 4.00195 383.475 15.1201 383.475 28.8349V376.496C383.475 431.355 339.073 475.828 284.301 475.828H99.1746C44.402 475.828 0 431.355 0 376.496V28.8349Z" fill="#0D1C23"/>
                    <path d="M300.003 98.5901L0 239.434V98.5901V0H383.475V80.985V257.039L151.798 334.502C150.02 335.097 150.447 337.728 152.321 337.728H351.481C364.901 337.728 372.728 352.9 364.963 363.863L300.426 454.969C293.507 464.737 280.614 468.166 269.768 463.125L24.2709 349.01C13.1225 343.828 11.3195 328.705 20.9363 321.039L300.003 98.5901Z" fill="#FA4517"/>
                  </svg>
                </div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  DUOKIM<span className="text-[#FA4517]">AXIS</span>
                </span>
              </Link>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {SITE_COPY.brand.description}
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-1 min-w-0 max-w-full">
              <div className="flex flex-row items-center gap-2.5 min-w-0">
                <svg className="w-4 h-4 text-[#FA4517] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-slate-300">Nigeria</span>
              </div>
              
              <a href="mailto:duokimaxis@gmail.com" className="flex flex-row items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors group min-w-0 max-w-full">
                <svg className="w-4 h-4 text-[#FA4517] group-hover:text-white shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium truncate sm:break-normal min-w-0">duokimaxis@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2 max-w-full">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 shrink-0 rounded-full bg-slate-900 border border-slate-800 hover:border-[#FA4517] hover:bg-[#FA4517]/10 hover:text-[#FA4517] flex items-center justify-center text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#FA4517]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 shrink-0 rounded-full bg-slate-900 border border-slate-800 hover:border-[#FA4517] hover:bg-[#FA4517]/10 hover:text-[#FA4517] flex items-center justify-center text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#FA4517]"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 shrink-0 rounded-full bg-slate-900 border border-slate-800 hover:border-[#FA4517] hover:bg-[#FA4517]/10 hover:text-[#FA4517] flex items-center justify-center text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#FA4517]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="w-10 h-10 shrink-0 rounded-full bg-slate-900 border border-slate-800 hover:border-[#FA4517] hover:bg-[#FA4517]/10 hover:text-[#FA4517] flex items-center justify-center text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#FA4517]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.5 7.5h5v1.2h-5z"/>
                  <path d="M4.5 6.5h4.2c1.7 0 2.8.8 2.8 2.1 0 1.1-.6 1.7-1.4 2 1.1.3 1.8 1.1 1.8 2.4 0 1.6-1.3 2.5-3.2 2.5H4.5V6.5zm3.7 3.4c.8 0 1.2-.4 1.2-1s-.4-1-1.2-1H6.7v2h1.5zm.2 4.1c.9 0 1.4-.4 1.4-1.1 0-.7-.5-1.1-1.4-1.1H6.7v2.2h1.7zM17 10.3c-2 0-3.5 1.4-3.5 3.6 0 2.1 1.4 3.6 3.5 3.6 1.6 0 2.8-.9 3.2-2.1h-1.8c-.3.5-.8.8-1.4.8-1 0-1.6-.6-1.7-1.7h5c0-.2.1-.6.1-.9 0-2-1.2-3.3-3.4-3.3zm-1.6 2.4c.1-.8.7-1.4 1.6-1.4s1.5.6 1.6 1.4h-3.2z"/>
                </svg>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 shrink-0 rounded-full bg-slate-900 border border-slate-800 hover:border-[#FA4517] hover:bg-[#FA4517]/10 hover:text-[#FA4517] flex items-center justify-center text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-[#FA4517]"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.39V9a6.34 6.34 0 1 0 6.34 6.34V8.7a8.16 8.16 0 0 0 3.77.93V6.69z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-[#FA4517] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FA4517] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#FA4517] transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FA4517] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Brand Architecture</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Custom Web Apps</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Diagnostic Audit</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Workflow Automation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Digital Infrastructure</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FA4517] transition-colors">Scale Retainer</Link>
              </li>
            </ul>
          </div>

          {/* Diagnostic Areas Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              7 Assessment Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SITE_COPY.assessmentAreas.areas.map((area, idx) => (
                <li key={idx}>
                  <span className="hover:text-white transition-colors cursor-default">
                    {area.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Duokim Axis. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-mono text-[11px]">
              Align. Amplify. Refine.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

