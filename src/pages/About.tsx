import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TeamGrid } from '../components/TeamGrid';
import { AnimatedLogo } from '../components/AnimatedLogo';

export function About() {
  return (
    <>
      <section className="container page-intro studio-intro">
        <div className="studio-intro__heading">
          <div>
            <p className="eyebrow">The studio / Abuja, Nigeria</p>
            <h1 tabIndex={-1}>
              Different minds.
              <br />
              <span className="muted-heading">A common direction.</span>
            </h1>
          </div>
          <AnimatedLogo />
        </div>
        <div className="intro-split">
          <p className="page-lead">
            Duokim Axis brings strategy, creative work, and digital engineering into the same
            conversation.
          </p>
          <p>
            We work with organisations that need to explain something more clearly, build something
            useful, or make their everyday systems work better. Our job is to connect the problem to
            the right kind of solution.
          </p>
        </div>
      </section>
      <section className="container studio-team" aria-labelledby="team-heading">
        <div className="section-heading section-heading--small">
          <h2 className="eyebrow" id="team-heading">
            The people behind the work
          </h2>
          <span className="editorial-note">Four perspectives. One team.</span>
        </div>
        <TeamGrid />
      </section>
      <section className="studio-principles section-space">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2>
                Thoughtful work
                <br />
                starts with good questions.
              </h2>
            </div>
            <p className="section-description">
              Our work crosses disciplines. These ideas keep it connected.
            </p>
          </div>
          <div className="principles-grid">
            <article>
              <span className="service-number">01</span>
              <h3>Ask before assuming.</h3>
              <p>
                A brief is the beginning of a conversation. Research and diagnosis help us
                understand what is happening before we decide what to build.
              </p>
            </article>
            <article>
              <span className="service-number">02</span>
              <h3>Keep the disciplines connected.</h3>
              <p>
                A brand, a website, and an internal workflow affect one another. We bring those
                perspectives together instead of treating each in isolation.
              </p>
            </article>
            <article>
              <span className="service-number">03</span>
              <h3>Leave something useful behind.</h3>
              <p>
                The goal is work your team can understand and use: a clear identity, a working
                product, or a more practical way to get things done.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container studio-statement section-space">
        <p className="eyebrow">Align. Amplify. Refine.</p>
        <h2>
          Good thinking becomes
          <br />
          better when it’s shared.
        </h2>
        <Link to="/contact" className="text-link">
          Bring us your next question <ArrowUpRight size={22} aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
