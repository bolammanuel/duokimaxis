import type { Project } from '../types';

export function ProjectVisual({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (project.theme === 'brand')
    return (
      <div className="project-visual project-visual--brand">
        <div className="visual-caption" aria-hidden="true">
          <span>A connected brand ecosystem</span>
          <span>ANIC / 2025</span>
        </div>
        <div className="brand-composition">
          <div className="brand-composition__name" aria-hidden="true">
            ANIC<span>Learn. Pro. Solutions.</span>
          </div>
          <div className="brand-artwork">
            <img
              src={project.image}
              alt="Visual direction excerpt from the ANIC brand presentation."
              width="1024"
              height="681"
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        </div>
        <p className="visual-foot" aria-hidden="true">
          One story. Three connected offers.
        </p>
      </div>
    );
  return (
    <div className="project-visual project-visual--learning">
      <div className="visual-caption" aria-hidden="true">
        <span>Learning, with fewer barriers</span>
        <span>2026</span>
      </div>
      <div className="dashboard-frame">
        <div className="dashboard-frame__bar" aria-hidden="true">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>Learning overview</span>
          <span>↗</span>
        </div>
        <img
          src={project.image}
          alt={project.imageAlt}
          width="1024"
          height="624"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      <p className="visual-foot" aria-hidden="true">
        Five languages. One learning experience.
      </p>
    </div>
  );
}
