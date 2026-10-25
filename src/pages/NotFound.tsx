import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="container simple-page">
      <p className="eyebrow">404 / A small detour</p>
      <h1 tabIndex={-1}>
        This page
        <br />
        isn’t here.
      </h1>
      <p className="page-lead">
        The address may have changed, or the link may be incomplete. There’s still plenty to
        explore.
      </p>
      <div className="hero-actions">
        <Link to="/" className="button">
          <ArrowLeft size={19} aria-hidden="true" />
          Back to the studio
        </Link>
        <Link to="/work" className="text-link">
          See our work <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
