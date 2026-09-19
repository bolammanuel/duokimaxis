import { Project, ServiceItem, TeamMember, Article, LabExperiment, ScopeOption } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'diagnostic-evaluation',
    number: '01',
    title: 'Diagnostic & Assessment Audit',
    badge: 'Diagnostic',
    shortDesc: 'Identifying operational friction across positioning, digital systems, and customer experience.',
    fullDesc: 'We evaluate your organization across 7 core dimensions to deliver a clear Problem Map, Diagnosis, and Implementation Plan.',
    capabilities: ['7-Dimension Audit', 'Problem Map', 'Implementation Roadmap', 'Executive Briefing'],
    deliverables: ['Diagnostic Report', 'Problem Map', 'Execution Roadmap'],
    techTags: ['Audit Matrix', 'Growth Analytics'],
    iconName: 'Search',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'implementation-projects',
    number: '02',
    title: 'Digital Systems & Development',
    badge: 'Implementation',
    shortDesc: 'Building custom web applications, digital transformation tools, and communication systems.',
    fullDesc: 'Executing recommended solutions to build high-performance digital reality tailored to your business goals.',
    capabilities: ['Web Application Development', 'Brand Systems', 'System Automation', 'Digital Tools'],
    deliverables: ['Production Web App', 'Brand Guidelines', 'Documentation'],
    techTags: ['React', 'TypeScript', 'Tailwind CSS'],
    iconName: 'Code',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'brand-communication',
    number: '03',
    title: 'Brand Strategy & Positioning',
    badge: 'Strategy',
    shortDesc: 'Transforming complex business propositions into clear, credible, and scalable brand systems.',
    fullDesc: 'Building complete brand strategy, visual architecture, positioning, and target audience engagement.',
    capabilities: ['Brand Positioning', 'Visual Identity', 'Audience Strategy', 'Brand Architecture'],
    deliverables: ['Brand Architecture', 'Visual Identity System', 'Communications Guide'],
    techTags: ['Brand System', 'Visual Identity'],
    iconName: 'Layers',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'retainer-services',
    number: '04',
    title: 'Strategic Advisory & Retainers',
    badge: 'Retainer',
    shortDesc: 'Ongoing strategic advisory, digital management, and continuous optimization.',
    fullDesc: 'Long-term partnership to measure outcomes, optimize digital channels, and support growth.',
    capabilities: ['Strategic Advisory', 'Channel Management', 'Performance Measurement', 'Continuous Updates'],
    deliverables: ['Executive Reviews', 'Platform Management'],
    techTags: ['Advisory', 'Optimization'],
    iconName: 'TrendingUp',
    previewImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'multilingual-ai-learning-platform',
    title: 'Multilingual Learning Platform',
    subtitle: 'AI-Powered Telegram Learning in 5 Languages',
    category: 'Creative Tech',
    client: 'GBV-Prevention Programme',
    year: '2026',
    image: '/assets/projects/multilingual_dashboard.png',
    featured: true,
    metrics: [
      { label: 'Languages', value: '5 Nigerian Languages' },
      { label: 'Platform', value: 'Telegram AI' }
    ],
    description: 'A multilingual learning platform on Telegram combining voice interaction in 5 Nigerian languages, speech recognition, and automated certificate generation.',
    challenge: 'Participants faced language barriers on English-only web portals.',
    solution: 'Built an accessible Telegram platform with voice interaction and automated certification.',
    techStack: ['Telegram API', 'Python', 'Speech-to-Text', 'TTS']
  },
  {
    id: 'anic-brand-architecture',
    title: 'ANIC Brand System',
    subtitle: 'From Complexity to Clarity',
    category: 'Brand Systems',
    client: 'ANIC Ecosystem',
    year: '2025',
    image: '/assets/projects/anic_showcase.png',
    featured: true,
    metrics: [
      { label: 'Architecture', value: '3 Sub-Brands' },
      { label: 'Reach', value: 'Complete Identity' }
    ],
    description: 'Transforming a complex business proposition across AI, cybersecurity, and edtech into a clear brand system (ANIC Learn, ANIC Pro & ANIC Solutions).',
    challenge: 'Unifying complex diverse offerings under one credible identity.',
    solution: 'Developed complete brand strategy, visual identity, and brand architecture.',
    techStack: ['Brand Strategy', 'Visual Identity', 'Architecture']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'gideon',
    name: 'Gideon',
    role: 'Strategic Creative Architect / Insight & Research Strategist',
    bio: 'Leads research, discovery, problem diagnosis, and strategic brand architecture.',
    avatar: '/assets/team/Gideon.avif',
    expertise: ['Insight & Research', 'Brand Strategy', 'Creative Architecture']
  },
  {
    id: 'emmanuel',
    name: 'Emmanuel',
    role: 'IT Support / Creative Technology Engineer',
    bio: 'Digital products, websites, technology, AI, automation, and intelligent workflows.',
    avatar: '/assets/team/Emmanuel.avif',
    expertise: ['Digital Products', 'Websites & Tech', 'AI & Automation']
  },
  {
    id: 'anu',
    name: 'Anuoluwapo',
    role: 'Digital Communications Strategist',
    bio: 'Content, social media strategy, and community engagement.',
    avatar: '/assets/team/Anu.avif',
    expertise: ['Communications', 'Content Strategy', 'Community']
  },
  {
    id: 'marvellous',
    name: 'Marvellous',
    role: 'Motion Architecture Lead',
    bio: 'Designs movement, interaction, and visual systems that make experiences engaging.',
    avatar: '/assets/team/Marvellous.avif',
    expertise: ['Motion Architecture', 'Interaction Design', 'Visual Systems']
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'why-problem-first-matters',
    title: 'Why Logos Don\'t Fix Broken Business Systems',
    readTime: '4 min read',
    category: 'Strategy',
    date: '2026',
    summary: 'Why a problem-first diagnostic approach is essential before spending budget on creative work.',
    content: 'Article content...',
    author: 'Gideon',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  }
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'diagnostic-matrix-demo',
    title: 'Interactive Diagnostic Audit',
    type: 'Assessment Engine',
    description: 'Evaluate your organization across 7 core dimensions.',
    interactiveType: 'roi',
    tags: ['7 Dimensions', 'Problem Map'],
    badge: 'Diagnostic Tool'
  }
];

export const SCOPE_OPTIONS: ScopeOption[] = [
  {
    id: 'diagnostic-audit',
    name: 'Diagnostic Audit Assessment',
    basePrice: 2500,
    timeframe: '1-2 Weeks',
    description: '7-dimension audit delivering a clear Problem Map and Execution Plan.'
  },
  {
    id: 'implementation-project',
    name: 'Implementation Project',
    basePrice: 7500,
    timeframe: '4-6 Weeks',
    description: 'End-to-end execution of strategy, web platforms, and brand systems.'
  },
  {
    id: 'retainer-advisory',
    name: 'Monthly Retainer Services',
    basePrice: 4000,
    timeframe: 'Monthly',
    description: 'Continuous strategic advisory, digital management, and optimization.'
  }
];
