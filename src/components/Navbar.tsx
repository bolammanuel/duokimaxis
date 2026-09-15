import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanner }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo (Light Theme Glass) */}
        <Link 
          to="/" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-full glass-nav-light transition-all group hover:shadow-md"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0D1C23] flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 384 476" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 28.8349C0 15.12 11.1005 4.00195 24.7936 4.00195H358.681C372.375 4.00195 383.475 15.1201 383.475 28.8349V376.496C383.475 431.355 339.073 475.828 284.301 475.828H99.1746C44.402 475.828 0 431.355 0 376.496V28.8349Z" fill="#0D1C23"/>
              <path d="M300.003 98.5901L0 239.434V98.5901V0H383.475V80.985V257.039L151.798 334.502C150.02 335.097 150.447 337.728 152.321 337.728H351.481C364.901 337.728 372.728 352.9 364.963 363.863L300.426 454.969C293.507 464.737 280.614 468.166 269.768 463.125L24.2709 349.01C13.1225 343.828 11.3195 328.705 20.9363 321.039L300.003 98.5901Z" fill="#FA4517"/>
            </svg>
          </div>
          <span className="font-heading font-extrabold text-base tracking-tight text-slate-900">
            DUOKIM<span className="text-[#FA4517]">AXIS</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-nav-light">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPlanner}
            className="px-5 py-2.5 rounded-full bg-[#FA4517] text-white text-xs font-bold hover:bg-[#FF6B35] transition-all flex items-center gap-1.5 shadow-md shadow-[#FA4517]/20"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full glass-nav-light text-slate-700 hover:text-slate-900"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile Navigation" className="md:hidden mt-3 max-w-sm mx-auto rounded-2xl glass-nav-light p-4 shadow-xl pointer-events-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};
