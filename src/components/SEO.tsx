import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../config';
import { getMetadata, normalisePath } from '../utils/metadata';

export function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const metadata = getMetadata(pathname);
    const canonical = `${SITE_URL}${normalisePath(pathname)}`;
    document.title = metadata.title;
    const tags: [string, string, string][] = [
      ['name', 'description', metadata.description],
      ['name', 'robots', metadata.noindex ? 'noindex, follow' : 'index, follow'],
      ['property', 'og:title', metadata.title],
      ['property', 'og:description', metadata.description],
      ['property', 'og:url', canonical],
      ['property', 'og:image', `${SITE_URL}/og-image.png`],
      ['name', 'twitter:title', metadata.title],
      ['name', 'twitter:description', metadata.description],
    ];
    for (const [attribute, name, content] of tags) {
      let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    }
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [pathname]);
  return null;
}
