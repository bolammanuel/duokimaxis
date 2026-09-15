import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_COPY } from '../data/copy';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          <div className="space-y-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#0D1C23] flex items-center justify-center p-1 border border-slate-200">
                <svg width="20" height="20" viewBox="0 0 384 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 28.8349C0 15.12 11.1005 4.00195 24.7936 4.00195H358.681C372.375 4.00195 383.475 15.1201 383.475 28.8349V376.496C383.475 431.355 339.073 475.828 284.301 475.828H99.1746C44.402 475.828 0 431.355 0 376.496V28.8349Z" fill="#0D1C23"/>
                  <path d="M300.003 98.5901L0 239.434V98.5901V0H383.475V80.985V257.039L151.798 334.502C150.02 335.097 150.447 337.728 152.321 337.728H351.481C364.901 337.728 372.728 352.9 364.963 363.863L300.426 454.969C293.507 464.737 280.614 468.166 269.768 463.125L24.2709 349.01C13.1225 343.828 11.3195 328.705 20.9363 321.039L300.003 98.5901Z" fill="#FA4517"/>
                </svg>
              </div>
              <span className="font-heading font-extrabold text-lg text-slate-900">
                DUOKIM<span className="text-[#FA4517]">AXIS</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 font-medium">{SITE_COPY.brand.subSlogan}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
            <Link to="/" className="hover:text-[#FA4517] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#FA4517] transition-colors">About</Link>
            <Link to="/services" className="hover:text-[#FA4517] transition-colors">Services</Link>
            <Link to="/work" className="hover:text-[#FA4517] transition-colors">Work</Link>
            <Link to="/contact" className="hover:text-[#FA4517] transition-colors">Contact</Link>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Duokim Axis. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
