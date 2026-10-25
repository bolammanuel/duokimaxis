import type { Project, Service, TeamMember } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'multilingual-ai-learning-platform',
    title: 'Learning, in a language that feels like home.',
    shortTitle: 'Multilingual learning platform',
    category: 'Digital product · AI & automation',
    client: 'GBV-prevention programme',
    year: '2026',
    theme: 'learning',
    image: '/assets/projects/multilingual_dashboard.webp',
    imageAlt:
      'The learning dashboard showing module progression, language choices, and participant demographics.',
    summary:
      'A Telegram learning experience with voice interaction, five language options, and automated certificates.',
    challenge:
      'An English-only web portal made it harder for participants to access learning materials. The programme needed a way to make that content available across different languages.',
    approach:
      'We brought the learning experience into Telegram and combined speech recognition, text-to-speech, and automated certification in one workflow.',
    delivered: [
      'Telegram learning platform',
      'Voice interaction in five languages',
      'Speech recognition & text-to-speech',
      'Automated certificate generation',
    ],
    details: [
      {
        title: 'Language as a starting point',
        text: 'Voice interaction and multiple language options let the learning experience respond to the participant, rather than relying on an English-only interface.',
      },
      {
        title: 'A connected learning workflow',
        text: 'Learning content and automated certification sit within the Telegram experience. The accompanying dashboard brings module progression and participant information into view.',
      },
    ],
    disciplines: [
      'Product development',
      'Python',
      'Telegram API',
      'Speech-to-text',
      'Text-to-speech',
    ],
  },
  {
    id: 'anic-brand-architecture',
    title: 'One clear story. Three connected brands.',
    shortTitle: 'ANIC brand system',
    category: 'Brand strategy · Visual identity',
    client: 'ANIC ecosystem',
    year: '2025',
    theme: 'brand',
    image: '/assets/projects/anic_showcase.webp',
    imageAlt:
      'The ANIC brand presentation, including positioning, visual direction, and brand architecture.',
    summary:
      'A shared strategy and visual identity for a business working across AI, cybersecurity, and education.',
    challenge:
      'ANIC brought together several technology and education offerings. The challenge was to make those different parts understandable as one business, while giving each a clear role.',
    approach:
      'We developed the positioning, audience strategy, brand architecture, and visual identity around three connected offers: ANIC Learn, ANIC Pro, and ANIC Solutions.',
    delivered: [
      'Brand positioning & audience strategy',
      'Architecture for three sub-brands',
      'Visual identity, typography & colour',
      'Brand applications & communication direction',
    ],
    details: [
      {
        title: 'Structure before styling',
        text: 'Defining the relationship between ANIC Learn, ANIC Pro, and ANIC Solutions gave the brand a clear foundation for explaining its different offerings.',
      },
      {
        title: 'An identity with a shared language',
        text: 'Typography, colour, visual identity, and communication direction work together as a system that can be applied across the business.',
      },
    ],
    disciplines: [
      'Research & positioning',
      'Brand architecture',
      'Visual identity',
      'Communication strategy',
    ],
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Make the brand clear.',
    summary: 'Strategy, identity & communication',
    description:
      'We help you explain what your organisation does, who it is for, and why it matters. Then we give that thinking a visual and verbal identity people can recognise.',
    deliverables: [
      'Research & positioning',
      'Brand architecture',
      'Visual identity systems',
      'Content & communication direction',
    ],
    question: 'Your offer has grown, but your brand no longer tells the whole story.',
  },
  {
    id: 'digital-products',
    number: '02',
    title: 'Build something useful.',
    summary: 'Websites, applications & digital tools',
    description:
      'From a website to a custom learning platform, we design and build around the people who will use it. Strategy, interface, and development stay connected throughout.',
    deliverables: [
      'Website design & development',
      'Custom web applications',
      'User experience & interface design',
      'Product documentation & handover',
    ],
    question: 'You need a digital experience that does more than look the part.',
  },
  {
    id: 'automation',
    number: '03',
    title: 'Make the work flow.',
    summary: 'Automation, AI & connected systems',
    description:
      'We look at the work your team repeats, then build practical tools and connections to support it. That might mean an integration, a voice interface, or an automated workflow.',
    deliverables: [
      'Workflow mapping & automation',
      'API & platform integrations',
      'AI-assisted tools',
      'Ongoing technical support',
    ],
    question: 'Your team spends too much time working around disconnected tools.',
  },
];

export const ASSESSMENT_AREAS = [
  ['Positioning', 'What you offer and how clearly people understand it.'],
  ['Brand & communication', 'How your identity and messaging work together.'],
  ['Audience', 'The people you serve and what they need.'],
  ['Digital presence', 'How your websites and platforms support your goals.'],
  ['Customer experience', 'What it feels like to move through your service.'],
  ['Systems & operations', 'The processes behind the day-to-day work.'],
  ['Technology', 'The tools, connections, and infrastructure you rely on.'],
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Understand the problem.',
    text: 'We ask questions, look at what already exists, and agree on what needs to change.',
  },
  {
    number: '02',
    title: 'Give it a direction.',
    text: 'We turn what we learn into a clear scope, a shared direction, and a practical plan.',
  },
  {
    number: '03',
    title: 'Make it work.',
    text: 'We design, build, and refine the solution with you, then help your team take it forward.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'gideon',
    name: 'Gideon',
    role: 'Strategy & research',
    bio: 'Leads discovery, research, problem diagnosis, and brand strategy. Connects the brief to a clear direction for the work.',
    avatar: '/assets/team/Gideon.webp',
  },
  {
    id: 'emmanuel',
    name: 'Emmanuel',
    role: 'Technology & development',
    bio: 'Builds websites, digital products, automation, and AI workflows. Turns the team’s ideas into working tools.',
    avatar: '/assets/team/Emmanuel.webp',
  },
  {
    id: 'anu',
    name: 'Anuoluwapo',
    role: 'Communications & content',
    bio: 'Works across content, social strategy, and community engagement to help organisations communicate with their audiences.',
    avatar: '/assets/team/Anu.webp',
  },
  {
    id: 'marvellous',
    name: 'Marvellous',
    role: 'Motion & interaction',
    bio: 'Brings visual systems to life through motion and interaction, with attention to how an experience feels to use.',
    avatar: '/assets/team/Marvellous.webp',
  },
];

export const INQUIRY_OPTIONS = [
  { id: 'not-sure', name: 'Let’s work it out together' },
  { id: 'brand-strategy', name: 'Brand strategy & identity' },
  { id: 'digital-products', name: 'A website or digital product' },
  { id: 'automation', name: 'Automation & connected systems' },
  { id: 'diagnostic', name: 'A diagnostic assessment' },
  { id: 'ongoing-support', name: 'An ongoing partnership' },
];

export const FAQS = [
  {
    question: 'Do I need a detailed brief to get started?',
    answer:
      'A description of the problem is a useful place to start. Tell us what your organisation does, what feels difficult, and what you would like to change. We can help define the scope from there.',
  },
  {
    question: 'Can we work together on just one part of a project?',
    answer:
      'Yes. You can come to us for brand work, a website, a custom application, or automation. We agree the scope around what the project needs.',
  },
  {
    question: 'What does the diagnostic assessment involve?',
    answer:
      'We look across seven areas of your organisation, from positioning and customer experience to operations and technology. The output is a problem map and a practical implementation roadmap. The usual assessment window is one to two weeks, with the exact scope agreed beforehand.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'We can agree an ongoing partnership for communications, platform updates, or technical improvements. The responsibilities, schedule, and support arrangements are set out in the project agreement.',
  },
];
