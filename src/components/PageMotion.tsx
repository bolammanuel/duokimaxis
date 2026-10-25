import { useEffect, useRef, type ReactNode } from 'react';

const revealTargets = [
  '.hero-copy > *',
  '.hero-project',
  '.page-intro .eyebrow',
  '.page-intro h1',
  '.intro-split > p',
  '.section-heading',
  '.project-item',
  '.service-row',
  '.process-grid > li',
  '.team-member',
  '.principles-grid > article',
  '.service-detail',
  '.diagnostic-layout > div',
  '.assessment-list > li',
  '.support-note > div',
  '.faq-section > div:first-child',
  '.faq-list details',
  '.project-intro > *',
  '.detail-visual',
  '.case-story > div',
  '.case-delivery > div',
  '.source-artifact',
  '.next-project > *',
  '.contact-intro > *',
  '.contact-form-panel',
  '.contact-aside',
  '.studio-statement > *',
  '.legal-content section',
  '.simple-page > *',
].join(',');

export function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !('IntersectionObserver' in window)) return;
    const targets = [...root.current.querySelectorAll<HTMLElement>(revealTargets)];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;

    const clear = () => {
      observer?.disconnect();
      targets.forEach((target) => {
        target.classList.remove('reveal-enter');
        target.style.removeProperty('--reveal-delay');
      });
    };
    const start = () => {
      clear();
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            const siblings = [...(target.parentElement?.children || [])];
            const position = siblings.indexOf(target);
            target.style.setProperty('--reveal-delay', `${Math.min(position, 3) * 65}ms`);
            target.classList.add('reveal-enter');
            observer?.unobserve(target);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
      );
      targets.forEach((target) => observer?.observe(target));
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      clear();
      preference.removeEventListener('change', start);
    };
  }, []);

  return (
    <div ref={root} className="page-content">
      {children}
    </div>
  );
}
