export const siteContent = {
  profile: {
    name: 'Adhham',
    image: {
      src: '/profile.jpg',
      alt: 'Adhham',
      width: 100,
      height: 120,
      style: {
        width: '100px',
        height: '120px',
      },
    },
  },
  contact: {
    email: 'hey@adhham.com',
    inquirySubject: 'Let’s build something',
    socialLinks: [
      {
        label: 'Instagram',
        href: 'https://instagram.com/adhham.official',
        icon: 'instagram',
        handle: '@adhham.official',
      },
      {
        label: 'X',
        href: 'https://x.com/adhhamofficial',
        icon: 'x',
        handle: '@adhhamofficial',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/adhuham',
        icon: 'github',
        handle: 'github.com/adhuham',
      },
      {
        label: 'TikTok',
        href: 'https://tiktok.com/@adhhamofficial',
        icon: 'tiktok',
        handle: '@adhhamofficial',
      },
    ],
  },
  hero: {
    title: 'Shipping ideas into reality.',
    paragraphs: [
      'Hi, I’m Adhham. I’m a software developer who enjoys building impactful digital products. I like turning ideas into real, working applications that are stable, fast, and easy to use.',
      'I’m also interested in building and growing small, purposeful products as an indie entrepreneur. I write about technology, engineering, business, and science, sharing what I learn and exploring ideas that shape how we think and create.',
      'I currently work at the Government of Maldives. I hold a Bachelor’s degree in Marketing and an MBA focused on Information Technology.'
    ],
  },
  cta: {
    status: 'open' as 'open' | 'closed',
    openLabel: 'Open to work',
    closedLabel: 'Closed to work',
    buttonLabel: "Let's talk",
  },
  workExperience: {
    title: 'Work Experience',
    items: [
      {
        company: 'Government of Maldives',
        period: '2023 - Present',
      },
      {
        company: 'Ooredoo Maldives',
        period: '2021 - 2022',
      },
      {
        company: 'Sun Media Group',
        period: '2017 - 2021',
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        degree: 'Masters of Business Administration (Information Technology)',
        year: '2015 - 2018',
      },
      {
        degree: 'Bachelor of Marketing',
        year: '2020 - 2022',
      },
      {
        degree: 'Diploma in Information Technology',
        year: '2016 - 2019',
      },
      {
        degree: 'C3 in Electro-technical Technology',
        year: '2024 - 2024',
      },
    ],
  },
  building: {
    title: 'Building',
    description:
      'A few things I am shaping right now across product, content, and internal tools.',
    items: [
      {
        title: 'Portfolio Refresh',
        description: 'A cleaner personal site with tighter spacing and calmer typography.',
        thumbnail: 'from-stone-200 via-stone-100 to-white',
        url: '#',
      },
      {
        title: 'Notes System',
        description: 'A lightweight publishing flow for essays, links, and quick ideas.',
        thumbnail: 'from-emerald-200 via-emerald-100 to-white',
        url: '#',
      },
      {
        title: 'Project Archive',
        description: 'A simple way to present shipped work with context and process.',
        thumbnail: 'from-sky-200 via-sky-100 to-white',
        url: '#',
      },
      {
        title: 'Studio Toolkit',
        description: 'Small internal tools for content updates, assets, and experiments.',
        thumbnail: 'from-amber-200 via-amber-100 to-white',
        url: '#',
      },
    ],
  },
  writing: {
    title: 'Writing',
    description:
      'Essays, notes, and observations on building thoughtful digital experiences.',
    items: [
      {
        name: 'Transient',
        description: 'Thoughts on web development, design patterns, and digital innovation.',
        url: '#',
        tone: 'from-stone-900 via-stone-800 to-stone-700',
        category: 'Essay',
      },
      {
        name: 'Dhethiki',
        description: 'Explorations in user experience, accessibility, and thoughtful design.',
        url: '#',
        tone: 'from-emerald-700 via-emerald-600 to-emerald-500',
        category: 'Notes',
      },
    ],
  },  
  projects: {
    title: 'Projects',
    description:
      'Selected work spanning interfaces, systems, and practical tools for the web.',
    items: [
      {
        name: 'Web Automation Tool',
        description:
          'A tool for automating repetitive web development tasks and improving workflow efficiency.',
        url: '#',
      },
      {
        name: 'UI Component Library',
        description:
          'A curated collection of reusable, accessible React components for rapid development.',
        url: '#',
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      'Interested in collaborating or want to chat about web development, design, or technology? Feel free to reach out.',
  },
} as const
