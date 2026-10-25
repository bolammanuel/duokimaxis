import { ProjectShowcaseGrid } from '../components/ProjectShowcaseGrid';

export function Work() {
  return (
    <div className="container work-page">
      <header className="page-intro">
        <p className="eyebrow">Selected work / 2025—2026</p>
        <h1 tabIndex={-1}>
          The work
          <br />
          <span className="muted-heading">speaks in specifics.</span>
        </h1>
        <p className="page-lead">
          A learning platform that crosses language barriers. A brand that makes a complex business
          clearer. Here’s how our thinking takes shape.
        </p>
      </header>
      <ProjectShowcaseGrid headingLevel={2} />
      <p className="work-footnote">Two different challenges. The same care for how things work.</p>
    </div>
  );
}
