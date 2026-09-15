import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/content';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProjectShowcaseGridProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcaseGrid: React.FC<ProjectShowcaseGridProps> = ({ onSelectProject }) => {
  const multilingualProject = PROJECTS_DATA[0];
  const anicProject = PROJECTS_DATA[1];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Sleek Outer Dark Container */}
      <div className="bg-[#0D0D0F] p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-800/80 shadow-sm space-y-8 relative overflow-hidden">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Practical digital solutions built for real organizational challenges.
            </p>
          </div>

          <Link
            to="/work"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold transition-all group backdrop-blur"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2 Featured Projects Side-by-Side (Real Solution Screenshots) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          
          {/* 📱 CARD 1: Multilingual AI Learning Platform */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onClick={() => onSelectProject(multilingualProject)}
            className="bg-[#141416] border border-slate-800/90 rounded-[2.2rem] p-6 sm:p-7 space-y-5 cursor-pointer group hover:border-[#FA4517]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            {/* Minimal Header */}
            <div className="space-y-1 z-10">
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#FA4517] transition-colors">
                Multilingual AI Platform
              </h3>
              <p className="text-xs font-medium text-slate-400">
                Voice AI • 5 Nigerian Languages • Telegram Integration
              </p>
            </div>

            {/* Real Screenshot Preview */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0B0D] shadow-xl group-hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/assets/projects/multilingual_dashboard.png"
                alt="Multilingual Learning Platform Solution"
                className="w-full h-48 sm:h-52 object-cover object-top"
              />
            </div>

            {/* Inspect Case Study Link */}
            <div className="pt-1 text-xs font-bold text-[#FA4517] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Inspect Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* 💳 CARD 2: ANIC Brand Architecture System (Real ANIC Presentation Screenshot) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            onClick={() => onSelectProject(anicProject)}
            className="bg-[#141416] border border-slate-800/90 rounded-[2.2rem] p-6 sm:p-7 space-y-5 cursor-pointer group hover:border-[#6D28D9]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[380px]"
          >
            {/* Minimal Header */}
            <div className="space-y-1 z-10">
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-[#6D28D9] transition-colors">
                ANIC Brand System
              </h3>
              <p className="text-xs font-medium text-slate-400">
                Brand Architecture • Visual Identity • 3 Sub-Brands
              </p>
            </div>

            {/* Real ANIC Presentation Screenshot */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0B0D] shadow-xl group-hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/assets/projects/anic_showcase.png"
                alt="ANIC Brand System Presentation"
                className="w-full h-48 sm:h-52 object-cover object-top"
              />
            </div>

            {/* Inspect Case Study Link */}
            <div className="pt-1 text-xs font-bold text-[#6D28D9] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              <span>Inspect Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
