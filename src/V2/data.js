// Edit this file to personalize all the content on your portfolio.

export const profile = {
  name: 'Rakesh',
  role: 'Frontend Developer & React Instructor',
  tagline: 'I build clean, fast interfaces and teach people how to build them too.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'hello@email.dev',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
  },
};

export const whoami = [
  { key: 'name', value: '"Rakesh"' },
  { key: 'role', value: '"Frontend Developer"' },
  { key: 'focus', value: '["React", "UI Systems", "Teaching"]' },
  { key: 'basedIn', value: '"Coimbatore, India"' },
  { key: 'status', value: '"Open to work"' },
];

export const about = {
  paragraphs: [
    "I'm a frontend developer who likes turning rough ideas into interfaces people actually enjoy using. Most of my work lives in React — component systems, state, and the small details that make an app feel solid.",
    "Alongside building, I teach. I've put together multi-week React curriculums and mentored developers picking up the framework for the first time, which keeps me honest about explaining things simply, not just doing them quickly.",
    "Outside of code, I'm usually reading about design systems, tracking markets, or sketching out the next side project.",
  ],
  stats: [
    { label: 'Years coding', value: '5+' },
    { label: 'Projects shipped', value: '24' },
    { label: 'Students mentored', value: '60+' },
  ],
};

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Redux', 'Vite', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Tools',
    items: ['Node.js', 'Express', 'JSON Server', 'REST APIs', 'Git/GitHub'],
  },
  {
    category: 'Other',
    items: ['Figma', 'Jest', 'Webpack', 'CI/CD basics', 'Agile workflows'],
  },
];

export const projects = [
  {
    title: 'TodoFlow',
    description:
      'A standalone task manager built with React, featuring drag-and-drop reordering, filters, and persistent local storage.',
    tags: ['React', 'LocalStorage', 'CSS'],
    link: '#',
    code: '#',
  },
  {
    title: 'Property Rental Manager',
    description:
      'Full-stack rental management system with listing search, booking flow, and an admin dashboard, backed by JSON Server.',
    tags: ['React', 'Vite', 'JSON Server'],
    link: '#',
    code: '#',
  },
  {
    title: 'BharatTrade Terminal',
    description:
      'A trading terminal web app with live candlestick charts and broker API integration for Indian equity markets.',
    tags: ['React', 'Flask', 'Lightweight Charts'],
    link: '#',
    code: '#',
  },
  {
    title: 'F&O Trading Journal',
    description:
      'Interactive trading journal for tracking options trades, with CSV export and a dynamic daily analysis view.',
    tags: ['JavaScript', 'CSV Export', 'Data Viz'],
    link: '#',
    code: '#',
  },
];

export const achievements = [
  {
    title: 'Trained 60+ developers',
    detail: 'Delivered multi-week React curriculums covering components, state, and routing from first principles.',
    year: '2025',
  },
  {
    title: 'Shipped 4 production apps',
    detail: 'Took React applications from prototype to deployed product, including a full trading terminal.',
    year: '2025',
  },
  {
    title: 'Open source contributor',
    detail: 'Contributed fixes and small features to community React tooling projects.',
    year: '2024',
  },
  {
    title: 'Speaker, Frontend Meetup CBE',
    detail: 'Gave a talk on building maintainable component architecture for growing teams.',
    year: '2024',
  },
];

export const gallery = [
  { caption: 'Whiteboarding a component architecture' },
  { caption: 'Teaching a React fundamentals session' },
  { caption: 'Demo day for the rental management app' },
  { caption: 'Late-night debugging, coffee included' },
  { caption: 'Speaking at a local frontend meetup' },
  { caption: 'Pairing on the trading terminal charts' },
];
