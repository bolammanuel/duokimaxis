import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WhyBentoSectionProps {
  onOpenPlanner?: () => void;
}

export const WhyBentoSection: React.FC<WhyBentoSectionProps> = ({ onOpenPlanner }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Subtitle (Pill badge removed as requested by user) */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight"
        >
          Why visionary leaders choose DUOKIM AXIS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto leading-relaxed"
        >
          Exceptional strategic diagnostic evaluation and digital execution that set the standard for organizational growth.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-10 items-stretch">
        
        {/* CARD 1: Left Tall Card (Spans 5 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-[#ECECEE] p-6 sm:p-7 rounded-[2.5rem] flex flex-col justify-between space-y-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
        >
          {/* Inner Image Container */}
          <div className="rounded-[2rem] overflow-hidden aspect-[4/3] bg-white shadow-inner">
            <img
              src="/assets/bento/craftsmanship.png"
              alt="Craftsmanship & Strategy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Heading Statement */}
          <div className="space-y-6 pt-2">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug tracking-tight">
              Engineered by master strategists to deliver timeless clarity and unmatched quality.
            </h3>

            {/* Pill CTA Button */}
            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#18181B] text-white text-xs font-bold hover:bg-slate-800 transition-all duration-300 shadow-md group/btn"
            >
              <span>Explore Solutions</span>
              <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTAINER (Spans 7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          
          {/* TOP ROW: Split into 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 flex-grow">
            
            {/* CARD 2: Middle Top Card (Spans 7 cols on sm) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sm:col-span-7 bg-[#ECECEE] p-5 sm:p-6 rounded-[2.5rem] flex flex-col justify-between space-y-4 border border-slate-200/80 shadow-sm group hover:shadow-md transition-all"
            >
              {/* Inner Image Container */}
              <div className="rounded-[1.8rem] overflow-hidden aspect-[16/9] bg-white shadow-inner">
                <img
                  src="/assets/bento/collaboration.png"
                  alt="Trusted Partnership"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text */}
              <h3 className="font-heading font-extrabold text-xl text-slate-900 leading-snug pt-1">
                Trusted by <span className="text-slate-400 font-medium">visionary leaders & growing enterprises worldwide.</span>
              </h3>
            </motion.div>

            {/* CARD 3: Stat Card with 3D Chess King (Spans 5 cols on sm) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sm:col-span-5 bg-[#ECECEE] p-6 rounded-[2.5rem] flex items-center justify-between border border-slate-200/80 shadow-sm relative overflow-hidden group hover:shadow-md transition-all min-h-[220px]"
            >
              {/* Stat Text */}
              <div className="z-10 space-y-1">
                <div className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
                  98%
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-snug max-w-[110px]">
                  Client retention & measurable ROI impact.
                </p>
              </div>

              {/* Floating 3D Blue Chess Piece */}
              <motion.img
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/assets/bento/chess_king.png"
                alt="Strategic Advantage"
                className="w-28 sm:w-32 h-auto object-contain absolute right-[-8px] bottom-[-8px] drop-shadow-xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* CARD 4: Bottom Wide Card (Spans full width of right column) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#ECECEE] rounded-[2.5rem] border border-slate-200/80 shadow-sm overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-center group hover:shadow-md transition-all"
          >
            {/* Text on Left */}
            <div className="sm:col-span-7 p-6 sm:p-8 space-y-2">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug tracking-tight">
                Elevates operational strategy and <span className="text-slate-400 font-medium">transforms your digital presence into a catalyst for growth.</span>
              </h3>
            </div>

            {/* Image on Right */}
            <div className="sm:col-span-5 h-full relative flex items-end justify-end">
              <img
                src="/assets/bento/visionary.png"
                alt="Elevate Personal Style & Brand"
                className="w-full h-56 sm:h-full object-cover object-top rounded-b-[2.5rem] sm:rounded-b-none sm:rounded-r-[2.5rem] group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
