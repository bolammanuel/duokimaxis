import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { SITE_COPY } from '../data/copy';
import { SERVICES_DATA, TEAM_MEMBERS } from '../data/content';
import { FeaturesOrbitalCanvas } from '../components/FeaturesOrbitalCanvas';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { ProjectModal } from '../components/ProjectModal';
import { WhyBentoSection } from '../components/WhyBentoSection';
import { ProjectShowcaseGrid } from '../components/ProjectShowcaseGrid';
import { CustomerReviewsMarquee } from '../components/CustomerReviewsMarquee';
import { AnimatedContainer, StaggerParent, StaggerChild } from '../components/AnimatedContainer';
import { Project } from '../types';
import { 
  ArrowUpRight, ArrowRight, ChevronRight, Search, Code, Layers, Sparkles, RotateCcw
} from 'lucide-react';

interface HomeProps {
  onOpenPlanner: () => void;
}

// Lightweight Paper Physics Pill Component
interface PaperPillProps {
  name: string;
  idx: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const PaperPill: React.FC<PaperPillProps> = ({ name, idx, containerRef }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    // Initial paper fall into place on load
    controls.start({
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 65,
        damping: 11,
        mass: 0.5,
        delay: 0.15 + idx * 0.07
      }
    });
  }, [controls, idx]);

  const handleDragEnd = (_: any, info: any) => {
    // Determine flutter sway direction based on horizontal movement
    const swingDirection = info.offset.x >= 0 ? 1 : -1;
    
    // Fluttering lightweight paper floating gently back down to baseline (x: 0, y: 0)
    controls.start({
      x: 0,
      y: 0,
      rotate: [swingDirection * 12, swingDirection * -6, 0],
      transition: {
        type: 'spring',
        stiffness: 38,   // Floating paper spring
        damping: 12,     // Air friction damping
        mass: 0.35,      // Extremely light paper weight
        bounce: 0.25
      }
    });
  };

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.8}
      dragMomentum={true}
      dragTransition={{ power: 0.35, timeConstant: 300 }}
      animate={controls}
      initial={{ opacity: 0, y: -240, rotate: idx % 2 === 0 ? -12 : 12 }}
      onDragEnd={handleDragEnd}
      whileHover={{ 
        scale: 1.06, 
        rotate: idx % 2 === 0 ? 3 : -3,
        borderColor: '#FA4517', 
        color: '#FA4517' 
      }}
      whileDrag={{ 
        scale: 1.12, 
        rotate: idx % 2 === 0 ? [ -4, 6, -3 ] : [ 4, -6, 3 ],
        zIndex: 60, 
        cursor: 'grabbing', 
        boxShadow: '0 18px 36px -6px rgba(250, 69, 23, 0.28)' 
      }}
      className="px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-xs text-slate-800 text-xs font-bold cursor-grab select-none touch-none transition-colors active:border-[#FA4517] min-h-11 flex items-center justify-center pointer-events-auto"
    >
      <span>{name}</span>
    </motion.div>
  );
};

export const Home: React.FC<HomeProps> = ({ onOpenPlanner }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [resetKey, setResetKey] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Animated Word Rotator State
  const rotatorItems = SITE_COPY.hero.rotatorItems;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatorItems.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [rotatorItems.length]);

  return (
    <div className="space-y-24 sm:space-y-28 pb-24">
      
      {/* 🚀 HERO SECTION */}
      <section ref={heroRef} aria-labelledby="hero-heading" className="relative pt-36 sm:pt-44 pb-16 px-4 sm:px-6 overflow-hidden">
        
        {/* Animated Background Glowing Orbs */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }} 
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 sm:w-125 h-87.5 sm:h-125 bg-linear-to-tr from-[#FA4517]/15 via-orange-400/10 to-transparent rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              x: [0, -25, 0]
            }} 
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} 
            className="absolute top-1/4 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-size-[32px_32px] opacity-40" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 sm:space-y-10">
          
          {/* Eyebrow Badge (Dot removed as requested) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-slate-800 text-xs font-bold"
          >
            <span>{SITE_COPY.hero.badge}</span>
          </motion.div>

          {/* Main Headline with Solid Brand Orange Animated Text Swap */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 leading-[1.15] tracking-tight"
          >
            {SITE_COPY.hero.titleMain} <br className="hidden sm:inline" />
            <span className="relative inline-block min-h-[1.2em] text-[#FA4517]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(3px)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="inline-block text-[#FA4517] font-black"
                >
                  {rotatorItems[wordIndex]}
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
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-[#FA4517] text-white font-heading font-bold text-xs hover:bg-[#FF6B35] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#FA4517]/25 focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none cursor-pointer"
              aria-label="Book a call with Duokim Axis"
            >
              <span>{SITE_COPY.hero.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
            </button>

            <Link
              to="/contact"
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 font-heading font-bold text-xs border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-xs focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none"
              aria-label="Navigate to contact page"
            >
              <span>{SITE_COPY.hero.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* 🌊 KINETIC WATERFALL / LIGHTWEIGHT PAPER PHYSICS PILLS */}
          <div className="pt-8 relative z-20">
            <div key={resetKey} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto px-2">
              {[
                { name: "Diagnostic Audit" },
                { name: "Brand Architecture" },
                { name: "Digital Systems" },
                { name: "Workflow Automation" },
                { name: "Customer Experience" },
                { name: "Growth Analytics" },
                { name: "Tech Infrastructure" }
              ].map((pill, idx) => (
                <PaperPill
                  key={`${pill.name}-${resetKey}`}
                  name={pill.name}
                  idx={idx}
                  containerRef={heroRef}
                />
              ))}
            </div>
          </div>

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

      {/* 🌐 ORBITAL FEATURES CANVAS (Bumpa Inspired) */}
      <FeaturesOrbitalCanvas onOpenPlanner={onOpenPlanner} />

      {/* 🌟 WHY DUOKIM AXIS BENTO SECTION */}
      <WhyBentoSection onOpenPlanner={onOpenPlanner} />

      {/* ⚙️ NUMBERED SERVICES LIST */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContainer delay={0.1} className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-slate-900">{SITE_COPY.services.title}</h2>
            <p className="text-xs text-slate-600">{SITE_COPY.services.subtitle}</p>
          </div>
          <Link to="/services" className="group text-xs font-bold text-[#FA4517] hover:underline flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none">
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.1} className="space-y-3">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeServiceId === service.id;
            return (
              <StaggerChild key={service.id}>
                <div
                  onClick={() => setActiveServiceId(service.id)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isSelected}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveServiceId(service.id); }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none ${
                    isSelected
                      ? 'bg-white border border-slate-200 border-l-4 border-l-[#FA4517] shadow-xs'
                      : 'card-clean'
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

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[#FA4517] text-white rotate-90' : 'bg-slate-100 text-slate-500'}`} aria-hidden="true">
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
                        <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
                          <p>{service.fullDesc}</p>
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

      {/* 🏷️ PRICING SECTION (Bumpa Inspired) */}
      <PricingSection onOpenPlanner={onOpenPlanner} />

      {/* 💬 CUSTOMER REVIEWS INFINITE MARQUEE */}
      <CustomerReviewsMarquee />

      {/* 👥 FOUNDING LEADERSHIP */}
      <section aria-labelledby="team-heading" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContainer delay={0.1} className="text-center max-w-xl mx-auto space-y-1">
          <h2 id="team-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">Founding Leadership</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Experienced leadership driving strategy, creative direction, and digital engineering.</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {TEAM_MEMBERS.slice(0, 2).map((m) => (
            <StaggerChild key={m.id} className="h-full">
              <div className="card-clean rounded-3xl p-6 sm:p-7 flex items-center gap-4 sm:gap-5 h-full">
                <img src={m.avatar} alt={`Portrait of ${m.name}, ${m.role}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0 object-cover border border-slate-200 shadow-xs" />
                <div className="space-y-1 grow">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">{m.name}</h3>
                  <p className="text-xs font-bold text-[#FA4517] leading-snug">{m.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.bio}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </section>

      {/* ❓ FAQ SECTION (Bumpa Inspired - Limited to top 3 for Homepage) */}
      <FaqSection limit={3} onOpenPlanner={onOpenPlanner} />

      {/* 🚀 CALL TO ACTION */}
      <section aria-labelledby="cta-heading" className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedContainer delay={0.2} scale={true}>
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-4 shadow-sm">
            <h2 id="cta-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Schedule Your Organizational Assessment</h2>
            <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">Identify operational friction and receive a 7-Dimension diagnostic roadmap for your business.</p>
            <button
              onClick={onOpenPlanner}
              className="group px-7 py-3.5 rounded-full bg-[#FA4517] text-white text-xs font-bold hover:bg-[#FF6B35] transition-all inline-flex items-center gap-1.5 shadow-md shadow-[#FA4517]/25 focus-visible:ring-2 focus-visible:ring-white focus:outline-none"
              aria-label="Book a diagnostic consultation"
            >
              <span>Book a Diagnostic Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
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
