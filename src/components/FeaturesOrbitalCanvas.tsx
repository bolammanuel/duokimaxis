import React from 'react';
import { 
  Search, Code, Layers, 
  Workflow, ShieldCheck, BarChart3, Target, Cpu
} from 'lucide-react';
import { AnimatedContainer } from './AnimatedContainer';

interface FeatureBadge {
  id: string;
  name: string;
  icon: React.ElementType;
  position: string;
  color: string;
}

interface FeaturesOrbitalCanvasProps {
  onOpenPlanner: () => void;
}

export const FeaturesOrbitalCanvas: React.FC<FeaturesOrbitalCanvasProps> = ({ onOpenPlanner }) => {
  const featureBadges: FeatureBadge[] = [
    { id: '1', name: '7-Dimension Audit', icon: Search, position: 'top-4 left-6 sm:left-12', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { id: '2', name: 'Brand Architecture', icon: Layers, position: 'top-6 right-6 sm:right-16', color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { id: '3', name: 'Web Applications', icon: Code, position: 'top-1/3 left-2 sm:left-6', color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { id: '4', name: 'Workflow Automation', icon: Workflow, position: 'top-1/3 right-2 sm:right-6', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { id: '5', name: 'Growth Analytics', icon: BarChart3, position: 'bottom-20 left-4 sm:left-16', color: 'text-[#FA4517] bg-orange-50 border-orange-200' },
    { id: '6', name: 'Positioning Strategy', icon: Target, position: 'bottom-20 right-4 sm:right-16', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { id: '7', name: 'Systems Integration', icon: Cpu, position: 'bottom-4 left-1/4', color: 'text-teal-600 bg-teal-50 border-teal-200' },
    { id: '8', name: 'Accessible Engineering', icon: ShieldCheck, position: 'bottom-4 right-1/4', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  ];

  return (
    <section aria-labelledby="orbital-features-heading" className="max-w-6xl mx-auto px-4 sm:px-6">
      <AnimatedContainer delay={0.1}>
        <div className="relative bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 sm:p-16 min-h-[440px] sm:min-h-[480px] flex items-center justify-center overflow-hidden">
          
          {/* Subtle Grid Accent Pattern */}
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* Floating Outer Feature Badges */}
          {featureBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`absolute hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-xs ${badge.position} ${badge.color} transition-transform hover:scale-105 cursor-default z-10`}
                aria-label={`Feature capability: ${badge.name}`}
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span className="text-xs font-heading font-bold text-slate-900">{badge.name}</span>
              </div>
            );
          })}

          {/* Central Floating Headline Box */}
          <div className="max-w-xl mx-auto text-center relative z-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-mono font-bold tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FA4517]" aria-hidden="true" />
              <span>Align. Amplify. Refine.</span>
            </div>

            <h2 
              id="orbital-features-heading"
              className="font-heading font-black text-3xl sm:text-5xl text-slate-900 leading-tight"
            >
              One platform that unifies <br className="hidden sm:inline" />
              <span className="text-[#FA4517]">all the capabilities</span> your business needs to grow.
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
              Diagnose root problems, align strategic messaging, and engineer custom digital platforms tailored to your team.
            </p>

            <button
              onClick={onOpenPlanner}
              className="px-8 py-4 rounded-full bg-[#FA4517] text-white text-xs font-bold hover:bg-[#FF6B35] transition-all inline-flex items-center gap-2 shadow-md shadow-[#FA4517]/20 focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none"
              aria-label="Book a call to get started with Duokim Axis"
            >
              <span>Get Started</span>
            </button>
          </div>

        </div>
      </AnimatedContainer>
    </section>
  );
};
