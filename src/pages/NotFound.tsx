import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, ArrowLeft, Search, HelpCircle, PhoneCall } from 'lucide-react';

interface NotFoundProps {
  onOpenPlanner: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onOpenPlanner }) => {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you requested could not be found on Duokim Axis. Please navigate back to our homepage or explore our strategic services."
      />

      <div className="pt-36 pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Visual 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 border border-red-500/20 text-xs font-bold font-mono">
          <span>ERROR 404 — ROUTE UNCHARTED</span>
        </div>

        {/* Large 404 Display */}
        <div className="space-y-4">
          <h1 className="font-heading font-black text-6xl sm:text-8xl text-slate-900 tracking-tight">
            4<span className="text-[#FA4517]">0</span>4
          </h1>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-800">
            System Route Not Found
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto font-medium leading-relaxed">
            The page or asset you are attempting to inspect has been relocated, archived, or never existed in this environment.
          </p>
        </div>

        {/* Card Box with Quick Navigation Options */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl max-w-2xl mx-auto space-y-6">
          <h3 className="font-heading font-bold text-base text-slate-900">
            Where would you like to navigate next?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-[#FA4517]/5 border border-slate-200 hover:border-[#FA4517]/30 text-left transition-all group flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-slate-900 group-hover:bg-[#FA4517] group-hover:text-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-[#FA4517] transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#FA4517]">Return Homepage</h4>
                <p className="text-[11px] text-slate-500">Explore core agency services & solutions.</p>
              </div>
            </Link>

            <Link
              to="/services"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-[#FA4517]/5 border border-slate-200 hover:border-[#FA4517]/30 text-left transition-all group flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-slate-900 group-hover:bg-[#FA4517] group-hover:text-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-[#FA4517] transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#FA4517]">Our Services</h4>
                <p className="text-[11px] text-slate-500">Brand architecture & digital systems.</p>
              </div>
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenPlanner}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FA4517] hover:bg-[#e03a0f] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              Book Diagnostic Call
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center"
            >
              Contact Support Team
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default NotFound;
