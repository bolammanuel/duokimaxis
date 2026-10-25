import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ANALYTICS_ID, CONTACT_EMAIL } from '../config';
import { Brand } from './Brand';

export function Footer({ onPrivacySettings }: { onPrivacySettings: () => void }) {
  const { pathname } = useLocation();
  const showInvitation = !['/contact', '/thank-you', '/privacy', '/terms'].includes(
    pathname.replace(/\/+$/, '') || '/',
  );
  return (
    <footer className="site-footer">
      <div className="container">
        {showInvitation && (
          <div className="footer-invitation">
            <div>
              <p className="eyebrow">A good conversation is a good start.</p>
              <h2>
                Have a good
                <br />
                problem<span className="accent">?</span>
              </h2>
            </div>
            <div className="footer-invitation__aside">
              <p>
                A new idea. A complicated brief.
                <br />
                Something that could work better.
              </p>
              <Link to="/contact" className="button button--light">
                Let’s talk about it <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
        <div className="footer-main">
          <div>
            <Brand light />
            <p>
              Clear thinking. Useful things.
              <br />
              Abuja, Nigeria · Working together, wherever you are.
            </p>
          </div>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <nav aria-label="Footer navigation">
            <Link to="/work">Work</Link>
            <Link to="/services">What we do</Link>
            <Link to="/about">The studio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Duokim Axis</span>
          <span className="footer-signoff">Align. Amplify. Refine.</span>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            {ANALYTICS_ID && (
              <button type="button" onClick={onPrivacySettings}>
                Privacy settings
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
