import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  review: string;
  avatar: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Dr. Amina Bello',
    role: 'Executive Director, Gender Rights & Inclusion Initiative',
    review: 'Duokim Axis diagnosed our exact operational friction. The Telegram AI platform brought our learning content to thousands of participants across 5 Nigerian languages with effortless voice interaction.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tunde Olanrewaju',
    role: 'Managing Director, ANIC Ecosystem',
    review: 'Transforming three complex tech offerings into one cohesive brand system was seamless. Duokim Axis gave us complete clarity, brand architecture, and a market-ready position.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chidi Nwachukwu',
    role: 'Head of Growth, West African SME Hub',
    review: 'Most agencies just sell logos and websites. Duokim Axis evaluated our business first, built the exact digital infrastructure we needed, and drove measurable outcomes.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'Khadijah Sanusi',
    role: 'Founder & CEO, TechVentures Africa',
    review: 'Their diagnostic approach saved us months of trial and error. The strategy and digital execution were world-class and delivered far beyond our expectations.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
  },
];

export const CustomerReviewsMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for seamless infinite loop
  const marqueeReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight"
        >
          Trusted by Leaders Driving Real Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-600 font-medium max-w-lg mx-auto"
        >
          Here is what organizational leaders say about partnering with DUOKIM AXIS.
        </motion.p>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge blur gradient fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track moving to the left */}
        <motion.div
          animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 32,
            ease: 'linear',
          }}
          className="flex gap-6 w-max"
        >
          {marqueeReviews.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="glass-card-light rounded-3xl p-6 sm:p-7 flex-shrink-0 w-[320px] sm:w-[380px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group"
            >
              {/* Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#FA4517]/20 group-hover:text-[#FA4517]/40 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                "{item.review}"
              </p>

              {/* Reviewer Profile */}
              <div className="flex items-center gap-3.5 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80';
                  }}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div className="space-y-0.5">
                  <h4 className="font-heading font-bold text-sm text-slate-900">{item.name}</h4>
                  <p className="text-[11px] text-[#FA4517] font-medium leading-tight">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};
