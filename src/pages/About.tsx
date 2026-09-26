import React from 'react';
import { motion } from 'framer-motion';
import { SITE_COPY } from '../data/copy';
import { TEAM_MEMBERS } from '../data/content';
import { AnimatedContainer, StaggerParent, StaggerChild } from '../components/AnimatedContainer';
import { SEO } from '../components/SEO';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenPlanner: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenPlanner }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-28 max-w-5xl mx-auto px-4 sm:px-6">
      <SEO
        title="About Us — Strategic Technology & Brand Architecture"
        description="Learn about Duokim Axis, our strategic philosophy, diagnostic auditing framework, and engineering team delivering custom web applications and brand infrastructure."
      />
      
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

      {/* 🚀 THE VISION SECTION */}
      <AnimatedContainer delay={0.25} scale={true}>
        <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
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

            {/* Visual Clean Pillar Illustration */}
            <div className="lg:col-span-4 flex items-center justify-center pt-4 lg:pt-0" aria-hidden="true">
              <div className="w-40 h-40 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col items-center justify-center gap-3 shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-[#0D1C23] flex items-center justify-center p-2.5 shadow-sm">
                  <svg width="32" height="32" viewBox="0 0 384 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 28.8349C0 15.12 11.1005 4.00195 24.7936 4.00195H358.681C372.375 4.00195 383.475 15.1201 383.475 28.8349V376.496C383.475 431.355 339.073 475.828 284.301 475.828H99.1746C44.402 475.828 0 431.355 0 376.496V28.8349Z" fill="#0D1C23"/>
                    <path d="M300.003 98.5901L0 239.434V98.5901V0H383.475V80.985V257.039L151.798 334.502C150.02 335.097 150.447 337.728 152.321 337.728H351.481C364.901 337.728 372.728 352.9 364.963 363.863L300.426 454.969C293.507 464.737 280.614 468.166 269.768 463.125L24.2709 349.01C13.1225 343.828 11.3195 328.705 20.9363 321.039L300.003 98.5901Z" fill="#FA4517"/>
                  </svg>
                </div>
                <span className="text-xs font-heading font-extrabold text-slate-900 tracking-tight text-center">Align. Amplify. Refine.</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContainer>

      {/* 7 Diagnostic Areas */}
      <div className="space-y-6">
        <AnimatedContainer delay={0.1} className="text-center space-y-1">
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">7 Assessment Areas</h2>
          <p className="text-xs text-slate-600">{SITE_COPY.assessmentAreas.subtitle}</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {SITE_COPY.assessmentAreas.areas.map((area, idx) => (
            <StaggerChild key={idx} className="h-full">
              <div className="p-6 rounded-3xl card-clean space-y-3 h-full min-h-35 flex flex-col justify-between">
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

      {/* The Lead Team */}
      <div className="space-y-6">
        <AnimatedContainer delay={0.1} className="text-center space-y-1">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">The Lead Team</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Experienced leadership driving strategy, creative direction, technology, and communications.</p>
        </AnimatedContainer>

        <StaggerParent staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {TEAM_MEMBERS.map((member) => (
            <StaggerChild key={member.id} className="h-full">
              <div className="card-clean rounded-3xl p-6 sm:p-7 flex items-center gap-4 sm:gap-5 h-full">
                <img src={member.avatar} alt={`Portrait of ${member.name}, ${member.role}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0 object-cover border border-slate-200 shadow-xs" />
                <div className="space-y-1 grow">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">{member.name}</h3>
                  <p className="text-xs font-bold text-[#FA4517] leading-snug">{member.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>

    </div>
  );
};
