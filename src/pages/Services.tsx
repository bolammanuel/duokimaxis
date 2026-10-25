import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, ASSESSMENT_AREAS } from '../data/content';
import { FaqSection } from '../components/FaqSection';

export function Services() {
  return (
    <>
      <header className="container page-intro">
        <p className="eyebrow">What we do</p>
        <h1 tabIndex={-1}>
          The right thinking.
          <br />
          <span className="muted-heading">The right things, built.</span>
        </h1>
        <p className="page-lead">
          Brand strategy, digital products, and connected systems. Come with a clear brief or a
          problem you haven’t quite put your finger on.
        </p>
        <nav className="service-jump-links" aria-label="Service areas">
          {SERVICES_DATA.map((service) => (
            <a key={service.id} href={`#${service.id}`}>
              {service.summary.split(',')[0]} <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>
      <div className="container service-details">
        {SERVICES_DATA.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="service-detail"
            aria-labelledby={`${service.id}-heading`}
            tabIndex={-1}
          >
            <div className="service-detail__title">
              <span className="service-number">
                {service.number} / {service.summary}
              </span>
              <h2 id={`${service.id}-heading`}>{service.title}</h2>
              <p className="service-question">{service.question}</p>
            </div>
            <div className="service-detail__body">
              <p>{service.description}</p>
              <ul className="deliverables">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={`/contact?service=${service.id}`} className="text-link">
                Let’s talk about this <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>
          </section>
        ))}
      </div>
      <section className="diagnostic-section section-space">
        <div className="container diagnostic-layout">
          <div>
            <p className="eyebrow">When the starting point isn’t clear</p>
            <h2>
              First, a better
              <br />
              understanding.
            </h2>
            <p>
              A diagnostic assessment looks across seven areas of your organisation. We turn what we
              learn into a problem map, a diagnosis, and an implementation roadmap.
            </p>
            <p className="diagnostic-timing">Usually 1–2 weeks. Scope agreed together.</p>
            <Link to="/contact?service=diagnostic" className="button">
              Discuss an assessment <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <ol className="assessment-list">
            {ASSESSMENT_AREAS.map(([title, text], index) => (
              <li key={title}>
                <span className="service-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="container support-note section-space">
        <p className="eyebrow">After the first project</p>
        <div>
          <h2>
            A useful partnership
            <br />
            can keep growing.
          </h2>
          <p>
            For organisations that need ongoing communication, platform management, or technical
            improvements, we can agree a continuing scope and a rhythm that works for the team.
          </p>
          <Link to="/contact?service=ongoing-support" className="text-link">
            Talk about ongoing support <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="container faq-section section-space">
        <div>
          <p className="eyebrow">A few practical questions</p>
          <h2>
            Before we
            <br />
            get started.
          </h2>
        </div>
        <FaqSection />
      </section>
    </>
  );
}
