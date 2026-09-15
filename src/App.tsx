import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectPlannerModal } from './components/ProjectPlannerModal';

// Code-splitting routes to prevent initial page staggering & optimize loading speed
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Work = lazy(() => import('./pages/Work').then(m => ({ default: m.Work })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

export const App: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between selection:bg-[#FA4517] selection:text-white">
      {/* Accessibility: Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FA4517] focus:text-white focus:rounded-lg focus:font-bold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar onOpenPlanner={() => setPlannerOpen(true)} />

      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-8 h-8 border-3 border-[#FA4517] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home onOpenPlanner={() => setPlannerOpen(true)} />} />
            <Route path="/about" element={<About onOpenPlanner={() => setPlannerOpen(true)} />} />
            <Route path="/services" element={<Services onOpenPlanner={() => setPlannerOpen(true)} />} />
            <Route path="/work" element={<Work onOpenPlanner={() => setPlannerOpen(true)} />} />
            <Route path="/contact" element={<Contact onOpenPlanner={() => setPlannerOpen(true)} />} />
          </Routes>
        </Suspense>
      </main>

      <ProjectPlannerModal
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
      />

      <Footer />

    </div>
  );
};

export default App;
