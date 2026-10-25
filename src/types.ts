export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  client: string;
  year: string;
  image: string;
  imageAlt: string;
  theme: 'learning' | 'brand';
  summary: string;
  challenge: string;
  approach: string;
  delivered: string[];
  details: { title: string; text: string }[];
  disciplines: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  question: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}
