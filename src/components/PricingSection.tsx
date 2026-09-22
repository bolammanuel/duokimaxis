import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SITE_COPY } from '../data/copy';
import { AnimatedContainer, StaggerParent, StaggerChild } from './AnimatedContainer';

interface PricingSectionProps {
  onOpenPlanner: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenPlanner }) => {
  return (
    <section aria-labelledby="pricing-heading" className="bg-[#0F172A] text-white py-16 sm:py-20 px-4 sm:px-6 rounded-3xl sm:rounded-[2.5rem] max-w-6xl mx-auto my-12 overflow-hidden">
      <div className="space-y-12">
        
        {/* Section Header */}
        <AnimatedContainer delay={0.1} className="text-center max-w-2xl mx-auto space-y-4">
          <h2 id="pricing-heading" className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            {SITE_COPY.pricing.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
            {SITE_COPY.pricing.subtitle}
          </p>
        </AnimatedContainer>

        {/* Pricing Cards Grid (All 4 Tiers Displayed) */}
        <StaggerParent staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SITE_COPY.pricing.tiers.map((tier) => (
            <StaggerChild key={tier.id} className="h-full">
              <div 
                className={`rounded-3xl p-6 flex flex-col justify-between h-full border transition-all ${
                  tier.isPopular
                    ? 'bg-slate-900 border-[#FA4517] ring-1 ring-[#FA4517]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Tier Title & Category */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {tier.category}
                      </span>
                      {tier.isPopular && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FA4517]/20 text-[#FA4517] text-[10px] font-bold">
                          Recommended
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 leading-normal min-h-9">{tier.tagline}</p>
                  </div>

                  {/* Timeframe & Engagement Model (Bright White Text) */}
                  <div className="pt-3 pb-1 border-t border-slate-800 space-y-1">
                    <div className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight leading-none">
                      {tier.timeframe}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono font-medium">
                      Custom Proposal &bull; {tier.period}
                    </div>
                  </div>

                  {/* Feature List */}
                  <ul aria-label={`Features included in ${tier.name}`} className="space-y-2.5 text-xs text-slate-300 pt-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={onOpenPlanner}
                    className={`w-full py-3.5 px-4 rounded-full font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none ${
                      tier.isPopular
                        ? 'bg-[#FA4517] text-white hover:bg-[#FF6B35] shadow-md shadow-[#FA4517]/20'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                    aria-label={`${tier.ctaText} for ${tier.name} tier`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>

              </div>
            </StaggerChild>
          ))}
        </StaggerParent>

      </div>
    </section>
  );
};
