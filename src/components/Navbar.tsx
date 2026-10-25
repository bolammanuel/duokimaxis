import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Brand } from './Brand';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/services">What we do</NavLink>
          <NavLink to="/about">The studio</NavLink>
        </nav>
        <NavLink to="/contact" className="header-contact">
          Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
        </NavLink>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav container"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <NavLink to="/work" onClick={() => setOpen(false)}>
          Work <ArrowUpRight aria-hidden="true" />
        </NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>
          What we do <ArrowUpRight aria-hidden="true" />
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          The studio <ArrowUpRight aria-hidden="true" />
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight aria-hidden="true" />
        </NavLink>
      </nav>
    </header>
  );
}
