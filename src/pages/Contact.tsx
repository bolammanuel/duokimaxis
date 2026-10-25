import { ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL } from '../config';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <section className="container contact-layout">
      <header className="contact-intro">
        <p className="eyebrow">Start a conversation</p>
        <h1 tabIndex={-1}>
          What’s on
          <br />
          <span className="muted-heading">your mind?</span>
        </h1>
        <p className="page-lead">
          A new project, a difficult question, or an idea that needs a little shape. We’d like to
          hear it.
        </p>
      </header>
      <div className="contact-form-panel">
        <ContactForm />
      </div>
      <aside className="contact-aside">
        <p className="eyebrow">Prefer a direct conversation?</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
          {CONTACT_EMAIL}
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <div className="contact-location">
          <span className="small-cross" aria-hidden="true">
            ✳
          </span>
          <div>
            <strong>Abuja, Nigeria</strong>
            <span>West Africa Time · UTC+1</span>
          </div>
        </div>
        <p>
          A helpful first message includes what your organisation does, the problem you want to
          solve, and any timing you have in mind.
        </p>
      </aside>
    </section>
  );
}
