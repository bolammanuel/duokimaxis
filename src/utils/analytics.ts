/**
 * Duokim Axis Privacy-Preserving Web Analytics Utility
 * Clean Google Analytics 4 (GA4) integration with IP anonymization.
 */

const GA_MEASUREMENT_ID = 'G-DUOKIMAXIS12'; // Replace with real GA4 ID when available

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const initAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  if (window.gtag) return; // Already initialized

  // Initialize dataLayer & gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());

  // Inject Google Analytics script dynamically
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });

  console.log('[Analytics] Google Analytics 4 initialized.');
};

export const trackPageView = (path: string, title?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
  });
};

export const trackEvent = (action: string, category: string, label?: string, value?: number): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
