import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle2, ArrowRight, Calendar, Clock, ShieldCheck, Mail } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <>
      <SEO
        title="Thank You — Submission Received"
        description="Thank you for reaching out to Duokim Axis. Our strategic technology team will review your message and contact you within 24 hours."
      />

      <div className="pt-36 pb-24 px-4 sm:px-6 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold">
          <span>INQUIRY SUCCESSFULLY TRANSMITTED</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Thank You for Connecting with <br className="hidden sm:inline" />
            <span className="text-[#FA4517]">Duokim Axis</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            Your project brief and inquiry have been logged into our diagnostic queue. A lead strategic partner will review your requirements.
          </p>
        </div>

        {/* Timeline / Next Steps Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl max-w-2xl mx-auto space-y-8 text-left">
          
          <h2 className="font-heading font-bold text-lg text-slate-900 text-center sm:text-left">
            What Happens Next?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center shrink-0 font-heading font-bold text-sm">
                01
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span>Diagnostic Review</span>
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our engineering lead audits your organization's digital touchpoints and existing software architecture within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center justify-center shrink-0 font-heading font-bold text-sm">
                02
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span>Strategy Alignment Call</span>
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We invite your key stakeholders to a 30-minute alignment session to diagnose operational friction points.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center shrink-0 font-heading font-bold text-sm">
                03
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <span>Tailored Proposal & Scope</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You receive a transparent roadmap detailing execution timelines, technical specs, and milestone deliverables.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FA4517] hover:bg-[#e03a0f] text-white text-xs font-bold shadow-md transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center"
            >
              Inspect Case Studies
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};

export default ThankYou;
