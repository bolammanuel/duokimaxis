import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { CookieBanner } from './components/CookieBanner';
import { PageMotion } from './components/PageMotion';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { ThankYou } from './pages/ThankYou';
import { NotFound } from './pages/NotFound';
import { ANALYTICS_ID } from './config';
import {
  CONSENT_KEY,
  readConsent,
  saveConsent,
  setAnalyticsEnabled,
  trackPageView,
  type AnalyticsConsent,
} from './utils/analytics';
import { getMetadata } from './utils/metadata';

function RouteFocus() {
  const { pathname, hash } = useLocation();
  const previous = useRef<string | null>(null);
  useEffect(() => {
    const initialVisit = previous.current === null;
    const changed = previous.current !== pathname;
    previous.current = pathname;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {
          /* Use the literal anchor if it is malformed. */
        }
        const target = document.getElementById(id);
        target?.scrollIntoView();
        if (!initialVisit && target?.hasAttribute('tabindex'))
          target.focus({ preventScroll: true });
      } else if (changed && !initialVisit) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [consent, setConsent] = useState<AnalyticsConsent | undefined>(undefined);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const trackedPath = useRef('');
  useEffect(() => {
    if (!ANALYTICS_ID) return;
    const value = readConsent();
    setConsent(value);
    setPrivacyOpen(value === null);
    const sync = (event: StorageEvent) => {
      if (event.key === CONSENT_KEY) {
        setConsent(readConsent());
        trackedPath.current = '';
      }
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  useEffect(() => {
    if (consent !== undefined) setAnalyticsEnabled(consent === 'accepted');
  }, [consent]);
  useEffect(() => {
    if (consent !== 'accepted') {
      trackedPath.current = '';
      return;
    }
    if (trackedPath.current !== location.pathname) {
      trackPageView(location.pathname, getMetadata(location.pathname).title);
      trackedPath.current = location.pathname;
    }
  }, [consent, location.pathname]);
  const chooseConsent = (choice: Exclude<AnalyticsConsent, null>) => {
    saveConsent(choice);
    setConsent(choice);
    setPrivacyOpen(false);
  };
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SEO />
      <RouteFocus />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageMotion key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageMotion>
      </main>
      <Footer onPrivacySettings={() => setPrivacyOpen(true)} />
      {ANALYTICS_ID && privacyOpen && <CookieBanner onChoice={chooseConsent} />}
    </>
  );
}
