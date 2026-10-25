import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/content';
import { ProjectVisual } from '../components/ProjectVisual';
import { NotFound } from './NotFound';

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = PROJECTS_DATA.find((project) => project.id === projectId?.toLowerCase());
  if (!project) return <NotFound />;
  const next = PROJECTS_DATA[(PROJECTS_DATA.indexOf(project) + 1) % PROJECTS_DATA.length];
  return (
    <>
      <section className="container project-intro">
        <Link to="/work" className="back-link">
          <ArrowLeft size={17} aria-hidden="true" />
          All work
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1 tabIndex={-1}>{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
        <dl className="project-facts">
          <div>
            <dt>Project</dt>
            <dd>{project.shortTitle}</dd>
          </div>
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
        </dl>
      </section>
      <div className="container detail-visual">
        <ProjectVisual project={project} priority />
      </div>
      <section className="container case-story section-space">
        <p className="eyebrow">The brief</p>
        <div>
          <h2>A clear starting point.</h2>
          <p>{project.challenge}</p>
        </div>
      </section>
      <section className="container case-story case-story--ruled">
        <p className="eyebrow">Our approach</p>
        <div>
          <h2>Thinking, made tangible.</h2>
          <p>{project.approach}</p>
          <div className="case-detail-grid">
            {project.details.map((detail) => (
              <div key={detail.title}>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container case-delivery section-space">
        <div>
          <p className="eyebrow">What we delivered</p>
          <h2>
            The pieces
            <br />
            that came together.
          </h2>
        </div>
        <div>
          <ul className="deliverables">
            {project.delivered.map((item) => (
              <li key={item}>
                <ArrowUpRight size={17} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="eyebrow discipline-label">Disciplines & tools</p>
          <p className="discipline-list">{project.disciplines.join(' / ')}</p>
        </div>
      </section>
      <figure className="container source-artifact">
        <img
          src={project.image}
          width="1024"
          height={project.theme === 'learning' ? 624 : 681}
          loading="lazy"
          decoding="async"
          alt={project.imageAlt}
        />
        <figcaption>
          From the project:{' '}
          {project.theme === 'learning'
            ? 'the learning platform dashboard.'
            : 'the ANIC brand presentation.'}
        </figcaption>
      </figure>
      <section className="container next-project section-space">
        <div>
          <p className="eyebrow">Keep exploring</p>
          <h2>{next.shortTitle}</h2>
        </div>
        <Link to={`/work/${next.id}`} className="text-link">
          Next project <ArrowRight size={22} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
