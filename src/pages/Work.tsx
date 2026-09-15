import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/content';
import { SITE_COPY } from '../data/copy';
import { ProjectModal } from '../components/ProjectModal';
import { StaggerParent, StaggerChild } from '../components/AnimatedContainer';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface WorkProps {
  onOpenPlanner: () => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenPlanner }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="pt-32 pb-20 space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-sm"
        >
          <span>{SITE_COPY.work.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900"
        >
          {SITE_COPY.work.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-600 font-medium"
        >
          {SITE_COPY.work.subtitle}
        </motion.p>
      </div>

      {/* 2 Real Projects Grid */}
      <StaggerParent staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {PROJECTS_DATA.map((project) => (
          <StaggerChild key={project.id} className="h-full">
            <div
              onClick={() => setSelectedProject(project)}
              className="glass-card-light rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-[#FA4517] font-bold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#FA4517] transition-colors">{project.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-6 pt-0 text-xs font-bold text-[#FA4517] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Inspect Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </StaggerChild>
        ))}
      </StaggerParent>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlanner={onOpenPlanner}
      />

    </div>
  );
};
