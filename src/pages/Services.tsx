import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../data/content';
import { SITE_COPY } from '../data/copy';
import { AnimatedContainer, StaggerParent, StaggerChild } from '../components/AnimatedContainer';
import { SEO } from '../components/SEO';
import { ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onOpenPlanner: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenPlanner }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_DATA[0].id);

  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-28 max-w-5xl mx-auto px-4 sm:px-6">
      <SEO
        title="Services & Solutions — Web Applications & Brand Strategy"
        description="Explore Duokim Axis digital solutions: Brand Architecture, Custom Web Applications, 7-Dimension Diagnostic Audits, and Automated Growth Systems."
      />
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-sm"
        >
          <span>{SITE_COPY.services.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900"
        >
          {SITE_COPY.services.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-600 font-medium"
        >
          {SITE_COPY.services.subtitle}
        </motion.p>
      </div>

      {/* 🎯 WHAT WE DELIVER SECTION (From Brand Deck) */}
      <AnimatedContainer delay={0.25} scale={true}>
        <div className="bg-white p-7 sm:p-10 rounded-[2.5rem] border border-slate-200/90 shadow-sm space-y-6">
          
          {/* Header */}
          <div className="space-y-2 max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
              {SITE_COPY.whatWeDeliver.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {SITE_COPY.whatWeDeliver.intro}
            </p>
          </div>

          {/* Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
            {SITE_COPY.whatWeDeliver.deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#FA4517] hover:bg-white transition-all duration-300 flex items-center gap-3 group shadow-2xs"
              >
                <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </AnimatedContainer>

      {/* Numbered Services Header */}
      <div className="pt-4 text-center max-w-xl mx-auto space-y-1">
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">Full Service Spectrum</h2>
        <p className="text-xs text-slate-600">Click any service to view detailed capabilities and deliverables.</p>
      </div>
      <StaggerParent staggerDelay={0.1} className="space-y-4">
        {SERVICES_DATA.map((service) => {
          const isExpanded = selectedService === service.id;
          return (
            <StaggerChild key={service.id}>
              <div
                onClick={() => setSelectedService(service.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isExpanded
                    ? 'bg-white border border-slate-200/90 border-l-4 border-l-[#FA4517] shadow-sm'
                    : 'glass-card-light border border-slate-200/70 hover:border-slate-300'
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

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isExpanded ? 'bg-[#FA4517] text-white rotate-90' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-3">
                        <p>{service.fullDesc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">Capabilities</h4>
                            <ul className="space-y-1">
                              {service.capabilities.map((c, i) => (
                                <li key={i} className="flex items-center gap-1.5 text-slate-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FA4517]" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">Deliverables</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {service.deliverables.map((d, i) => (
                                <span key={i} className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-[11px] font-mono font-medium">
                                  ✓ {d}
                                </span>
                              ))}
                            </div>
                          </div>
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

    </div>
  );
};
