import { CONTACT_EMAIL } from '../config';

export function Terms() {
  return (
    <article className="container legal-page">
      <header className="page-intro">
        <p className="eyebrow">Website information</p>
        <h1 tabIndex={-1}>A few clear terms.</h1>
        <p className="page-lead">About this website and starting a project with Duokim Axis.</p>
        <p className="legal-date">Updated 24 October 2026</p>
      </header>
      <div className="legal-content">
        <section>
          <h2>About the website</h2>
          <p>
            This site introduces our studio, services, and selected work. The descriptions are a
            starting point for a conversation about your requirements.
          </p>
        </section>
        <section>
          <h2>Discussing a project</h2>
          <p>
            Sending an inquiry does not book a call or create a project agreement. We discuss the
            brief with you before agreeing any work. Scope, fees, schedule, ownership, and support
            arrangements are set out separately in a written project agreement.
          </p>
        </section>
        <section>
          <h2>Work shown here</h2>
          <p>
            Project images and descriptions are presented to explain the work. Client names and
            materials belong to their respective owners. Please contact us before reproducing
            project materials or studio assets.
          </p>
        </section>
        <section>
          <h2>Questions or corrections</h2>
          <p>
            If you spot an error or would like clarification, email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
