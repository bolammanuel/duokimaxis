import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SITE_COPY } from '../data/copy';
import { AnimatedContainer, StaggerParent, StaggerChild } from './AnimatedContainer';

interface FaqSectionProps {
  onOpenPlanner?: () => void;
  limit?: number;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenPlanner, limit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const itemsToDisplay = limit ? SITE_COPY.faqs.items.slice(0, limit) : SITE_COPY.faqs.items;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="faq-heading" className="max-w-4xl mx-auto px-4 sm:px-6 my-20 space-y-8">
      
      {/* Header */}
      <AnimatedContainer delay={0.1} className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
          <span>{SITE_COPY.faqs.badge}</span>
        </div>

        <h2 id="faq-heading" className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
          {SITE_COPY.faqs.title}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
          {SITE_COPY.faqs.subtitle}
        </p>
      </AnimatedContainer>

      {/* FAQ Accordions */}
      <StaggerParent staggerDelay={0.08} className="space-y-3">
        {itemsToDisplay.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const accordionId = `faq-content-${idx}`;
          const headerId = `faq-header-${idx}`;

          return (
            <StaggerChild key={idx}>
              <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs transition-all">
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={accordionId}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none hover:bg-slate-50 transition-colors min-h-11 cursor-pointer"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div 
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#FA4517] text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={accordionId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-6 pt-1 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </StaggerChild>
          );
        })}
      </StaggerParent>

      {/* View All / Need Help CTA */}
      <div className="text-center pt-4">
        {onOpenPlanner ? (
          <button
            onClick={onOpenPlanner}
            className="text-xs font-bold text-[#FA4517] hover:underline focus-visible:ring-2 focus-visible:ring-[#FA4517] focus:outline-none"
          >
            Have a custom question? Speak with our diagnostic team &rarr;
          </button>
        ) : null}
      </div>

    </section>
  );
};
