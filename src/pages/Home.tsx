import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_COPY } from '../data/copy';
import { SERVICES_DATA, TEAM_MEMBERS } from '../data/content';
import { ProjectModal } from '../components/ProjectModal';
import { WhyBentoSection } from '../components/WhyBentoSection';
import { ProjectShowcaseGrid } from '../components/ProjectShowcaseGrid';
import { CustomerReviewsMarquee } from '../components/CustomerReviewsMarquee';
import { AnimatedContainer, StaggerParent, StaggerChild } from '../components/AnimatedContainer';
import { Project } from '../types';
import { 
  ArrowUpRight, ArrowRight, ChevronRight, Search, Code, Layers
} from 'lucide-react';

interface HomeProps {
  onOpenPlanner: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenPlanner }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  // Animated Word Rotator State
  const animatedWords = ["Measurable Growth", "Digital Solutions", "Practical Outcomes"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [animatedWords.length]);

  return (
    <div className="space-y-24 sm:space-y-28 pb-24">
      
      {/* 🚀 HERO SECTION */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 overflow-hidden">
        
        {/* Soft Ambient Radial Light Glow Halos */}
        <div className="ambient-halo-purple -top-30 left-1/2 -translate-x-1/2"></div>
        <div className="ambient-halo-peach top-1/4 -right-20"></div>
        <div className="ambient-halo-blue top-1/3 -left-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#FA4517] animate-pulse"></span>
            <span>{SITE_COPY.hero.badge}</span>
          </motion.div>

          {/* Main Headline with Smooth Fluid Word Rotation */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="font-heading font-black text-4xl sm:text-6xl text-slate-900 leading-[1.15]"
          >
            {SITE_COPY.hero.titlePrefix}{' '}
            <span className="bg-pill-highlight min-w-[280px] sm:min-w-[340px] text-center inline-flex items-center justify-center rounded-2xl overflow-hidden py-1 px-4 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={animatedWords[wordIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {animatedWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {SITE_COPY.hero.subtitle}
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onOpenPlanner}
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-[#FA4517] text-white font-heading font-bold text-xs hover:bg-[#FF6B35] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{SITE_COPY.hero.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>

            <Link
              to="/contact"
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 font-heading font-bold text-xs border border-slate-200 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{SITE_COPY.hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Minimal Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-500"
          >
            <span>Strategic Advisory</span>
            <span>•</span>
            <span>Digital Systems</span>
            <span>•</span>
            <span>Brand Architecture</span>
          </motion.div>

        </div>
      </section>

      {/* 🎨 CATEGORY CARDS SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <AnimatedContainer delay={0.1} className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Let Your Solution Do the Talking</h2>
          <p className="text-xs text-slate-600">Targeted approaches to solve your specific organizational friction.</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <StaggerChild className="h-full">
            <div className="glass-card-light rounded-3xl p-7 space-y-4 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FA4517]/10 text-[#FA4517] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-[#FA4517] transition-colors">
                  Diagnostic Audit
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluating root operational friction across positioning, systems, and user experience.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#FA4517] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </StaggerChild>

          <StaggerChild className="h-full">
            <div className="glass-card-light rounded-3xl p-7 space-y-4 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#6D28D9]/10 text-[#6D28D9] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-[#6D28D9] transition-colors">
                  Digital Systems
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Building custom web applications, learning platforms, and automated workflow tools.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-[#6D28D9] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </StaggerChild>

          <StaggerChild className="h-full">
            <div className="glass-card-light rounded-3xl p-7 space-y-4 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                  Brand Strategy
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transforming complex propositions into clear, credible, and scalable brand systems.
                </p>
              </div>
              <Link to="/services" className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </StaggerChild>

        </StaggerParent>
      </section>

      {/* 🌟 WHY DUOKIM AXIS BENTO SECTION */}
      <WhyBentoSection onOpenPlanner={onOpenPlanner} />

      {/* ⚙️ NUMBERED SERVICES LIST */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContainer delay={0.1} className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-slate-900">{SITE_COPY.services.title}</h2>
            <p className="text-xs text-slate-600">{SITE_COPY.services.subtitle}</p>
          </div>
          <Link to="/services" className="group text-xs font-bold text-[#FA4517] hover:underline flex items-center gap-1">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.1} className="space-y-3">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeServiceId === service.id;
            return (
              <StaggerChild key={service.id}>
                <div
                  onClick={() => setActiveServiceId(service.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border border-slate-200/90 border-l-4 border-l-[#FA4517] shadow-md scale-[1.005]'
                      : 'glass-card-light'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xl font-extrabold text-[#FA4517]">{service.number}</span>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-slate-900">{service.title}</h3>
                        <p className="text-xs text-slate-600">{service.shortDesc}</p>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[#FA4517] text-white rotate-90' : 'bg-slate-100 text-slate-500'}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
                          <p>{service.fullDesc}</p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {service.deliverables.map((d, i) => (
                              <span key={i} className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-mono font-medium">
                                ✓ {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerChild>
            );
          })}
        </StaggerParent>
      </section>

      {/* 📁 PROVEN CASE STUDIES SHOWCASE */}
      <ProjectShowcaseGrid onSelectProject={(project) => setSelectedProject(project)} />

      {/* 💬 CUSTOMER REVIEWS INFINITE MARQUEE */}
      <CustomerReviewsMarquee />

      {/* 👥 FOUNDING TEAM (Equal Height Cards & Responsive Grid) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContainer delay={0.1} className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">Founding Leadership</h2>
          <p className="text-xs text-slate-600">Experienced leadership driving strategy, technology, and organizational growth.</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {TEAM_MEMBERS.map((m) => (
            <StaggerChild key={m.id} className="h-full">
              <div className="glass-card-light rounded-3xl p-6 sm:p-7 flex items-center gap-4 sm:gap-5 h-full hover:-translate-y-1 transition-all duration-300">
                <img src={m.avatar} alt={m.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex-shrink-0 object-cover border border-slate-200 shadow-sm" />
                <div className="space-y-1 flex-grow">
                  <h3 className="font-heading font-bold text-lg text-slate-900">{m.name}</h3>
                  <p className="text-xs font-bold text-[#FA4517] leading-snug">{m.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedContainer delay={0.2} scale={true}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#6D28D9]/10 via-[#FA4517]/10 to-blue-500/10 border border-slate-200 text-center space-y-4 shadow-sm">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">Schedule Your Organizational Assessment</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">Identify what is holding your business back and map your implementation steps.</p>
            <button
              onClick={onOpenPlanner}
              className="group px-7 py-3.5 rounded-full bg-[#FA4517] text-white text-xs font-bold hover:bg-[#FF6B35] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1.5 shadow-lg shadow-[#FA4517]/25"
            >
              <span>Book a Diagnostic Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </AnimatedContainer>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlanner={onOpenPlanner}
      />

    </div>
  );
};
