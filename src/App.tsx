import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectPlannerModal } from './components/ProjectPlannerModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-between selection:bg-[#FA4517] selection:text-white">
      
      <Navbar onOpenPlanner={() => setPlannerOpen(true)} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenPlanner={() => setPlannerOpen(true)} />} />
          <Route path="/about" element={<About onOpenPlanner={() => setPlannerOpen(true)} />} />
          <Route path="/services" element={<Services onOpenPlanner={() => setPlannerOpen(true)} />} />
          <Route path="/work" element={<Work onOpenPlanner={() => setPlannerOpen(true)} />} />
          <Route path="/contact" element={<Contact onOpenPlanner={() => setPlannerOpen(true)} />} />
        </Routes>
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
