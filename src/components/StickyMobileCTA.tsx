import React, { useState, useEffect } from 'react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenPlanner: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenPlanner }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-5 left-4 right-4 z-40 animate-in slide-in-from-bottom duration-300 pointer-events-none">
      <div className="bg-[#0A1318]/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl rounded-full p-2.5 flex items-center justify-between pointer-events-auto gap-3">
        <div className="pl-3.5 space-y-0.5 min-w-0">
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#FA4517] font-bold">Duokim Axis</p>
          <p className="text-xs font-bold text-white truncate">Accelerate Growth</p>
        </div>

        <button
          onClick={onOpenPlanner}
          className="px-5 py-3 rounded-full bg-[#FA4517] active:bg-[#e03a0f] text-white font-heading font-bold text-xs flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
          aria-label="Book Diagnostic Call"
        >
          <span>Book Call</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
