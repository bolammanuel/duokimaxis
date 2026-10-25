import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, SERVICES_DATA, PROCESS_STEPS } from '../data/content';
import { ProjectVisual } from '../components/ProjectVisual';
import { ProjectShowcaseGrid } from '../components/ProjectShowcaseGrid';
import { TeamGrid } from '../components/TeamGrid';

export function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="home-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-cross" aria-hidden="true">
              ✳
            </span>{' '}
            Strategy, design & useful technology
          </p>
          <h1 id="home-heading" tabIndex={-1}>
            Clarity first.
            <br />
            <span>Then we build.</span>
          </h1>
          <p className="hero-description">
            We turn complex business problems into clear brands, useful digital products, and better
            ways of working.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button">
              Discuss a project <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <a href="#selected-work" className="text-link">
              Explore our work <ArrowDownRight size={21} aria-hidden="true" />
            </a>
          </div>
        </div>
        <Link
          to={`/work/${PROJECTS_DATA[1].id}`}
          className="hero-project"
          aria-label="Explore the ANIC brand system"
        >
          <div className="hero-project__label">
            <span>A glimpse of our work</span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </div>
          <ProjectVisual project={PROJECTS_DATA[1]} priority />
          <div className="hero-project__caption">
            <span>From complexity to clarity.</span>
            <span>ANIC brand system</span>
          </div>
          <span className="hero-project__index" aria-hidden="true">
            01 — 02
          </span>
        </Link>
      </section>
      <section
        id="selected-work"
        className="container selected-work section-space"
        aria-labelledby="work-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-heading">
              Different briefs.
              <br />
              Considered solutions.
            </h2>
          </div>
          <Link to="/work" className="text-link">
            A closer look <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
        <ProjectShowcaseGrid />
      </section>
      <section className="services-overview section-space" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / What we do</p>
              <h2 id="services-heading">
                The thinking.
                <br />
                And the making.
              </h2>
            </div>
            <p className="section-description">
              We connect strategy, creative work, and technology around what your organisation
              actually needs.
            </p>
          </div>
          <div className="service-rows">
            {SERVICES_DATA.map((service) => (
              <Link key={service.id} to={`/services#${service.id}`} className="service-row">
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <span className="service-summary">{service.summary}</span>
                </div>
                <p>{service.description}</p>
                <ArrowUpRight size={26} className="service-row__arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        className="container process-section section-space"
        aria-labelledby="process-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / How we work</p>
            <h2 id="process-heading">
              Get to the root.
              <br />
              Then move forward.
            </h2>
          </div>
          <p className="section-description">
            The tools change. The starting point stays the same: understand the problem before
            deciding what to make.
          </p>
        </div>
        <ol className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <li key={step.number}>
              <span className="process-number">
                {step.number}
                <span aria-hidden="true">/</span>
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="studio-section section-space" aria-labelledby="studio-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / The people behind the work</p>
              <h2 id="studio-heading">
                Different minds.
                <br />A shared direction.
              </h2>
            </div>
            <div className="section-description">
              <p>
                Researchers, builders, communicators, and makers. We bring our different
                perspectives to the same table.
              </p>
              <Link to="/about" className="text-link">
                Meet the studio <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <TeamGrid compact />
        </div>
      </section>
    </>
  );
}
