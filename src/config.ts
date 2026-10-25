const environment = import.meta.env ?? {};

export const CONTACT_EMAIL = environment.VITE_CONTACT_EMAIL?.trim() || 'duokimaxis@gmail.com';
export const SITE_URL = (() => {
  try {
    const url = new URL(environment.VITE_SITE_URL || 'https://duokimaxis.com');
    return /^https?:$/.test(url.protocol) ? url.origin : 'https://duokimaxis.com';
  } catch {
    return 'https://duokimaxis.com';
  }
})();

export const EMAIL_CONFIG = {
  serviceId: environment.VITE_EMAILJS_SERVICE_ID?.trim() || '',
  templateId: environment.VITE_EMAILJS_TEMPLATE_ID?.trim() || '',
  publicKey: environment.VITE_EMAILJS_PUBLIC_KEY?.trim() || '',
};

export const ANALYTICS_ID = /^G-[A-Z0-9]+$/.test(environment.VITE_GA_MEASUREMENT_ID || '')
  ? (environment.VITE_GA_MEASUREMENT_ID as string)
  : '';
