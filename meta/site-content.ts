import { dhivehiMeta } from '@/meta/dhivehi'
import { writingMeta } from '@/meta/writing'

export const siteContent = {
  profile: {
    name: 'Adhham',
    image: {
      src: '/profile.jpg?v=1',
      alt: 'Adhham',
      width: 110,
      height: 120,
      style: {
        width: '110px',
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
        label: 'X/Twitter',
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
    paragraphs: [
      'Hi, I’m Adhham. I’m a software engineer with approximately 8 years of experience building and working with production software systems.',
      'My interests span software engineering, cybersecurity, science, engineering, and emerging technologies, particularly where analytical thinking and creativity intersect. I am driven by curiosity and a desire to understand how things work at a fundamental level, whether through academic study, independent learning, or hands-on experimentation.',
      'Currently, I am focused on building stronger technical foundations while exploring areas such as cybersecurity, engineering, robotics, and intelligent systems. I write about science and technology, sharing what I learn and exploring ideas that shape how we think, create, and understand the world.',
      'I hold a Bachelor’s degree in Marketing and an MBA focused on Information Technology, and I work at the Ministry of Finance, Government of Maldives.',
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
    description: `Two writing systems: ${writingMeta.header} and ${dhivehiMeta.latinTitle}.`,
    items: [
      {
        name: writingMeta.header,
        description: writingMeta.metadata.description,
        url: writingMeta.path,
        category: 'English',
      },
      {
        name: dhivehiMeta.latinTitle,
        description: dhivehiMeta.metadata.description,
        url: dhivehiMeta.path,
        category: 'Dhivehi',
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
      'Got an interesting idea, problem, or project you think I’d be interested in? Send it over. I’d love to hear it.',
  },
} as const
