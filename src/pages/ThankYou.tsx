import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config';

export function ThankYou() {
  const { state } = useLocation();
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setSent(Boolean(state?.inquirySent));
  }, [state]);
  return (
    <section className="container simple-page">
      <p className="eyebrow">{sent ? 'Inquiry received' : 'A conversation starts here'}</p>
      <h1 tabIndex={-1}>
        {sent ? (
          <>
            Thank you.
            <br />
            We have your message.
          </>
        ) : (
          <>
            Let’s make
            <br />a useful start.
          </>
        )}
      </h1>
      <p className="page-lead">
        {sent
          ? 'Your inquiry has been delivered. Our team will review your message and reply to the email address you provided.'
          : 'Tell us about your organisation and what you have in mind. We can work out the next step together.'}
      </p>
      <div className="hero-actions">
        <Link to={sent ? '/work' : '/contact'} className="button">
          {sent ? 'Explore our work' : 'Tell us about your project'}
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
          Email us directly <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
