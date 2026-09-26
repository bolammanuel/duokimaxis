import React from 'react';
import { SEO } from '../components/SEO';
import { FileCheck, Code2, Scale, Layers, AlertCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions — Duokim Axis"
        description="Duokim Axis Terms of Service governing platform usage, digital engineering contracts, intellectual property rights, and service agreements."
      />

      <div className="pt-36 pb-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-xs">
            <span>LEGAL SERVICE AGREEMENT</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Effective Date: September 26, 2026 • Version 1.2
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#FA4517]" />
              <span>1. Agreement & Acceptance</span>
            </h2>
            <p>
              By accessing the Duokim Axis website (<strong className="text-slate-900">duokimaxis.com</strong>), engaging our strategic advisory services, or signing a Master Services Agreement (MSA), you agree to be legally bound by these Terms & Conditions. If you represent an organization, you affirm that you possess full authority to bind that entity.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#FA4517]" />
              <span>2. Scope of Services & Engineering</span>
            </h2>
            <p>
              Duokim Axis provides custom web application engineering, brand architecture systems, 7-Dimension Diagnostic Audits, and automated growth infrastructure. Specific project deliverables, acceptance criteria, delivery schedules, and compensation terms are governed by individual Statements of Work (SOW) executed between Duokim Axis and the Client.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FA4517]" />
              <span>3. Intellectual Property Rights</span>
            </h2>
            <p>
              Upon complete settlement of agreed contract fees, Duokim Axis transfers full ownership rights of custom software codebases, custom design assets, and brand guidelines developed specifically for the Client under the relevant SOW. Duokim Axis retains ownership of proprietary core utility libraries, reusable software frameworks, and pre-existing diagnostic methodologies.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#FA4517]" />
              <span>4. Payment Terms & Invoicing</span>
            </h2>
            <p>
              Invoices are issued according to project milestones outlined in the SOW. Payment terms are net 14 days from date of invoice. Delayed payments exceeding 30 calendar days may incur a monthly service fee of 1.5% and temporary suspension of active engineering deployment.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#FA4517]" />
              <span>5. Limitation of Liability & Governing Law</span>
            </h2>
            <p>
              In no event shall Duokim Axis be liable for indirect, consequential, or punitive damages arising from platform usage or third-party service outages. Total aggregate liability under any contract shall not exceed the total fees paid by the Client to Duokim Axis during the preceding 6 months. These terms are governed by the laws of the Federal Republic of Nigeria.
            </p>
          </section>

        </div>

      </div>
    </>
  );
};

export default Terms;
