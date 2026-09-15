import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../data/copy';
import { TEAM_MEMBERS } from '../data/content';
import { AnimatedContainer, StaggerParent, StaggerChild } from '../components/AnimatedContainer';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenPlanner: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenPlanner }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-28 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-sm"
        >
          <span>{SITE_COPY.about.badge}</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900"
        >
          {SITE_COPY.about.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium"
        >
          {SITE_COPY.about.narrative}
        </motion.p>
      </div>

      {/* 🚀 THE VISION SECTION (Light Card, Brand Orange Heading & Zero Heavy Drop Shadows) */}
      <AnimatedContainer delay={0.25} scale={true}>
        <div className="bg-[#F8FAFC] p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Text Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-1">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight uppercase">
                  {SITE_COPY.vision.title}
                </h2>
              </div>

              <div className="space-y-4 text-slate-900">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug">
                  {SITE_COPY.vision.headline}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {SITE_COPY.vision.subtext}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium pt-3 border-t border-slate-200">
                  {SITE_COPY.vision.mission}
                </p>
              </div>
            </div>

            {/* Visual Graphic Cubes Stack (Matching Deck Light Illustration) */}
            <div className="lg:col-span-4 flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <motion.div 
                  animate={{ y: [0, -6, 0], rotate: [6, 9, 6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-28 h-28 bg-[#84CC16] rounded-2xl transform rotate-6 absolute top-1 right-2 border border-white shadow-sm"
                />
                <motion.div 
                  animate={{ y: [0, 6, 0], rotate: [-9, -6, -9] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-28 h-28 bg-[#0D9488] rounded-2xl transform -rotate-12 absolute bottom-1 left-2 border border-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedContainer>

      {/* 7 Diagnostic Areas (EQUAL SIZE CARDS) */}
      <div className="space-y-6">
        <AnimatedContainer delay={0.1} className="text-center space-y-1">
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">7 Assessment Areas</h2>
          <p className="text-xs text-slate-600">{SITE_COPY.assessmentAreas.subtitle}</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {SITE_COPY.assessmentAreas.areas.map((area, idx) => (
            <StaggerChild key={idx} className="h-full">
              <div className="p-6 rounded-3xl glass-card-light space-y-3 h-full min-h-[140px] flex flex-col justify-between border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-[#FA4517] font-extrabold">0{idx + 1}.</span>
                  <h3 className="font-heading font-bold text-sm text-slate-900 leading-snug">{area.name}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-normal">{area.desc}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>

      {/* Team Profiles (Equal Height & Responsive Alignment) */}
      <div className="space-y-6">
        <AnimatedContainer delay={0.1} className="text-center space-y-1">
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">Founding Leadership</h2>
          <p className="text-xs text-slate-600">Experienced leadership driving strategy, technology, and organizational growth.</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {TEAM_MEMBERS.map((member) => (
            <StaggerChild key={member.id} className="h-full">
              <div className="glass-card-light rounded-3xl p-6 sm:p-7 flex items-center gap-4 sm:gap-5 h-full hover:-translate-y-1 transition-transform duration-300">
                <img src={member.avatar} alt={member.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex-shrink-0 object-cover border border-slate-200 shadow-sm" />
                <div className="space-y-1 flex-grow">
                  <h3 className="font-heading font-bold text-lg text-slate-900">{member.name}</h3>
                  <p className="text-xs font-bold text-[#FA4517] leading-snug">{member.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>

      {/* CTA */}
      <AnimatedContainer delay={0.2} scale={true}>
        <div className="p-8 rounded-3xl glass-card-light text-center space-y-3">
          <h3 className="font-heading font-bold text-xl text-slate-900">Schedule Your Diagnostic Audit</h3>
          <p className="text-xs text-slate-600">Discover what is holding your business back and map your next steps.</p>
          <button
            onClick={onOpenPlanner}
            className="group px-6 py-3 rounded-full bg-[#FA4517] text-white text-xs font-bold hover:bg-[#FF6B35] hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1.5 shadow-md shadow-[#FA4517]/20"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </AnimatedContainer>

    </div>
  );
};
