import { PROJECTS_DATA } from '../data/content.ts';

export interface PageMetadata {
  title: string;
  description: string;
  noindex?: boolean;
}
const pages: Record<string, PageMetadata> = {
  '/': {
    title: 'Duokim Axis — Strategy, design & useful technology',
    description:
      'An independent strategy and technology studio in Abuja. We build clear brands, useful digital products, and connected workflows.',
  },
  '/work': {
    title: 'Selected work | Duokim Axis',
    description:
      'Explore our work in brand strategy, digital products, and automation, including the ANIC brand system and a multilingual Telegram learning platform.',
  },
  '/services': {
    title: 'What we do | Duokim Axis',
    description:
      'Brand strategy and identity, websites and digital products, automation and connected systems. Find the right starting point for your project.',
  },
  '/about': {
    title: 'The studio | Duokim Axis',
    description:
      'Meet the people behind Duokim Axis: a team working across strategy, research, development, communications, and motion in Abuja, Nigeria.',
  },
  '/contact': {
    title: 'Start a conversation | Duokim Axis',
    description:
      'Tell Duokim Axis about your organisation, your next project, or the problem you would like to solve.',
  },
  '/privacy': {
    title: 'Privacy | Duokim Axis',
    description:
      'How this website handles project inquiries, optional analytics, and your privacy preferences.',
  },
  '/terms': {
    title: 'Website terms | Duokim Axis',
    description:
      'Information about using the Duokim Axis website and discussing a project with our team.',
  },
  '/thank-you': {
    title: 'Your inquiry | Duokim Axis',
    description: 'Continue your conversation with Duokim Axis.',
    noindex: true,
  },
};

export function normalisePath(path: string): string {
  return path.split(/[?#]/)[0].replace(/\/+$/, '').toLowerCase() || '/';
}

export function getMetadata(path: string): PageMetadata {
  const pathname = normalisePath(path);
  if (pages[pathname]) return pages[pathname];
  const project = PROJECTS_DATA.find((project) => `/work/${project.id}` === pathname);
  if (project)
    return { title: `${project.shortTitle} | Duokim Axis`, description: project.summary };
  return {
    title: 'Page not found | Duokim Axis',
    description: 'Find your way back to the work, services, or studio at Duokim Axis.',
    noindex: true,
  };
}

export const PUBLIC_PATHS = [
  ...Object.keys(pages).filter((path) => !pages[path].noindex),
  ...PROJECTS_DATA.map((project) => `/work/${project.id}`),
];
