import React from 'react';
import { SEO } from '../components/SEO';
import { ShieldCheck, Lock, Eye, FileText, Mail } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — Duokim Axis"
        description="Duokim Axis Privacy Policy detailing our data processing standards, confidentiality guarantees, user rights, and security protocols."
      />

      <div className="pt-36 pb-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-xs">
            <span>CONFIDENTIALITY & DATA PROTECTION</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Effective Date: September 26, 2026 • Version 1.2
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#FA4517]" />
              <span>1. Commitment to Data Privacy</span>
            </h2>
            <p>
              At Duokim Axis ("we", "us", or "our"), operational security and client data confidentiality are fundamental principles. This Privacy Policy outlines how we collect, process, store, and protect personal and organizational information transmitted through our website (<strong className="text-slate-900">duokimaxis.com</strong>), project planning portals, and client communications.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#FA4517]" />
              <span>2. Information We Collect</span>
            </h2>
            <p>We collect information strictly necessary to diagnose organizational requirements and deliver digital engineering services:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong className="text-slate-800">Contact Information:</strong> Full name, professional email address, telephone number, and organization name provided via contact forms or project planner modals.</li>
              <li><strong className="text-slate-800">Project Requirements:</strong> Strategic goals, software specifications, budget considerations, and operational challenges submitted during diagnostic intake.</li>
              <li><strong className="text-slate-800">Technical Analytics:</strong> Anonymized telemetry data including IP address, browser type, device specifications, and page navigation metrics collected via privacy-focused web analytics.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#FA4517]" />
              <span>3. How Information Is Used</span>
            </h2>
            <p>Collected information is processed exclusively for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Conducting 7-Dimension Diagnostic Audits and rendering tailored strategic proposals.</li>
              <li>Engineered delivery and maintenance of custom web applications and brand architecture systems.</li>
              <li>Communicating milestone updates, billing details, and emergency system diagnostics.</li>
              <li>Enforcing security standards and preventing unauthorized system access.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FA4517]" />
              <span>4. Data Security & Storage</span>
            </h2>
            <p>
              All client data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain strict access control protocols restricting data access solely to authorized engineering and strategic personnel assigned to your account. We never sell, lease, or monetize client data to third parties under any circumstance.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="font-heading font-bold text-lg text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#FA4517]" />
              <span>5. Contact & Data Subject Rights</span>
            </h2>
            <p>
              You possess full rights to access, rectify, or request deletion of your personal data stored within our systems. For all privacy inquiries or data access requests, please contact our Data Protection Officer at:
            </p>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono text-xs text-slate-800 space-y-1">
              <p>Email: privacy@duokimaxis.com / duokimaxis@gmail.com</p>
              <p>Location: Abuja, Nigeria (WAT / GMT+1)</p>
            </div>
          </section>

        </div>

      </div>
    </>
  );
};

export default PrivacyPolicy;
