import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenPlanner: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenPlanner }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const timeout = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }, 50);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          {/* Modal Card Sliding UP */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-900 z-10 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close case study modal"
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Title Header */}
            <div className="space-y-2 pr-12">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-bold bg-[#FA4517]/10 text-[#FA4517] font-mono">
                {project.category}
              </span>
              <h2 id="project-modal-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">{project.subtitle}</p>
            </div>

            {/* Solution Visual Screenshot */}
            <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950">
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full max-h-[380px] object-cover object-top" />
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <p className="font-heading font-black text-xl text-[#FA4517]">{m.value}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Challenge & Solution details */}
            <div className="space-y-5 my-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 space-y-1">
                <h3 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider text-red-600">The Friction / Challenge</h3>
                <p>{project.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-1">
                <h3 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-600">The Solution Delivered</h3>
                <p>{project.solution}</p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">Technologies & Architecture</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono text-xs font-medium">
                      ✓ {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => { onClose(); onOpenPlanner(); }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FA4517] text-white text-xs font-bold hover:bg-[#FF6B35] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FA4517]/25"
              >
                <span>Book Diagnostic Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
              >
                Close Case Study
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
