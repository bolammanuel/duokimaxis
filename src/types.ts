export type CategoryType = 'All' | 'Creative Tech' | 'AI & Intelligence' | 'Cultural Systems' | 'Spatial Web' | 'Brand Systems';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  client: string;
  year: string;
  image: string;
  metrics: { label: string; value: string }[];
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string; // '01', '02', etc. (from Sample 14)
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  deliverables: string[];
  techTags: string[];
  iconName: string;
  previewImage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
}

export interface Article {
  id: string;
  title: string;
  readTime: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  image: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  type: string;
  description: string;
  interactiveType: 'canvas' | 'localization' | 'roi';
  tags: string[];
  badge: string;
}

export interface ScopeOption {
  id: string;
  name: string;
  timeframe: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  category: 'Diagnostic' | 'Implementation' | 'Retainer' | 'Enterprise';
  tagline: string;
  timeframe: string;
  period: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}
