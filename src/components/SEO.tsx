import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const DEFAULT_OG_IMAGE = 'https://duokimaxis.com/og-image.png';
const SITE_NAME = 'Duokim Axis';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'creative technology, brand architecture, digital engineering, custom web applications, workflow automation, organizational diagnostic, Abuja Nigeria',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonicalUrl,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Helper to set or create meta tags
    const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set canonical link
    const updateCanonicalLink = (url: string) => {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', url);
    };

    // 2. Standard Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // 3. Open Graph / Facebook Meta Tags
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', ogType);
    updateMetaTag('property', 'og:image', ogImage);
    updateMetaTag('property', 'og:site_name', SITE_NAME);

    // 4. Twitter Card Meta Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical URL
    const currentUrl = canonicalUrl || window.location.href;
    updateMetaTag('property', 'og:url', currentUrl);
    updateCanonicalLink(currentUrl);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
};

export default SEO;
