import { Link } from 'react-router-dom';
import type { AnalyticsConsent } from '../utils/analytics';

export function CookieBanner({
  onChoice,
}: {
  onChoice: (choice: Exclude<AnalyticsConsent, null>) => void;
}) {
  return (
    <aside className="consent-panel" aria-label="Optional analytics preferences">
      <p className="consent-panel__title">A little insight. Your choice.</p>
      <p>
        With your permission, we use Google Analytics to understand which pages are useful. You can
        change your choice in the footer. <Link to="/privacy">Read about privacy</Link>.
      </p>
      <div>
        <button type="button" className="button button--small" onClick={() => onChoice('accepted')}>
          Allow analytics
        </button>
        <button type="button" className="text-button" onClick={() => onChoice('declined')}>
          Continue without
        </button>
      </div>
    </aside>
  );
}
