import { ANALYTICS_ID } from '../config.ts';

export type AnalyticsConsent = 'accepted' | 'declined' | null;
export const CONSENT_KEY = 'duokim.analytics-consent';
let sessionConsent: AnalyticsConsent = null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): AnalyticsConsent {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    sessionConsent = value === 'accepted' || value === 'declined' ? value : null;
    return sessionConsent;
  } catch {
    return sessionConsent;
  }
}

export function saveConsent(value: Exclude<AnalyticsConsent, null>): void {
  sessionConsent = value;
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* Apply this visit's preference even if storage is unavailable. */
  }
}

export function setAnalyticsEnabled(enabled: boolean, measurementId = ANALYTICS_ID): void {
  if (!measurementId || typeof window === 'undefined') return;
  const analyticsWindow = window as unknown as Record<string, unknown>;
  analyticsWindow[`ga-disable-${measurementId}`] = !enabled;
  if (!enabled) {
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    document.getElementById('duokim-analytics')?.remove();
    const domains = [
      '',
      location.hostname,
      `.${location.hostname}`,
      `.${location.hostname.replace(/^www\./, '')}`,
    ];
    for (const name of ['_ga', `_ga_${measurementId.slice(2)}`]) {
      for (const domain of domains)
        document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ''} SameSite=Lax`;
    }
    return;
  }
  window.dataLayer ??= [];
  window.gtag ??= function () {
    window.dataLayer?.push(arguments);
  };
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  if (!document.getElementById('duokim-analytics')) {
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    const script = document.createElement('script');
    script.id = 'duokim-analytics';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }
}

export function trackPageView(path: string, title: string): void {
  if (!ANALYTICS_ID || typeof window === 'undefined' || readConsent() !== 'accepted') return;
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: `${location.origin}${path}`,
    page_title: title,
  });
}

export function trackInquirySent(service: string): void {
  if (!ANALYTICS_ID || typeof window === 'undefined' || readConsent() !== 'accepted') return;
  window.gtag?.('event', 'generate_lead', { service });
}
