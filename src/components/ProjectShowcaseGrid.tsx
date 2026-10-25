import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/content';
import { ProjectVisual } from './ProjectVisual';

export function ProjectShowcaseGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <div className="project-grid">
      {PROJECTS_DATA.map((project, index) => (
        <article key={project.id} className="project-item">
          <Link
            to={`/work/${project.id}`}
            className="project-link"
            aria-label={`View ${project.shortTitle} case study`}
          >
            <ProjectVisual project={project} />
            <div className="project-item__meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <div className="project-item__title">
              <Heading>{project.shortTitle}</Heading>
              <span className="project-arrow">
                <ArrowUpRight size={25} aria-hidden="true" />
              </span>
            </div>
            <p>{project.summary}</p>
            <span className="project-item__link">
              View case study <span aria-hidden="true">↗</span>
            </span>
            <span className="sr-only">
              Project {index + 1} of {PROJECTS_DATA.length}
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
}
