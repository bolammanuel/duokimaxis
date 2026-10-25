import { TEAM_MEMBERS } from '../data/content';

export function TeamGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`team-grid${compact ? ' team-grid--compact' : ''}`}>
      {TEAM_MEMBERS.map((member) => (
        <article key={member.id} className="team-member">
          <div className="team-member__portrait">
            <img
              src={member.avatar}
              width="719"
              height="900"
              loading="lazy"
              decoding="async"
              alt={`Portrait of ${member.name}`}
            />
          </div>
          <div className="team-member__heading">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
          {!compact && <p className="team-member__bio">{member.bio}</p>}
        </article>
      ))}
    </div>
  );
}
