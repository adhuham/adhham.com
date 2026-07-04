import type { Metadata } from 'next'

const header = 'Cogito Ergo Scribo / Sine Fine'
const author = 'Adhham'

export const writingMeta = {
  name: 'Cogito Ergo Scribo',
  tagline: 'Sine Fine',
  header,
  author,
  path: '/writing',
  post: {
    back: '← All essays',
  },
  metadata: {
    title: `${header} — ${author}`,
    description: 'Essays on systems thinking, software, technology, and anything that sparks my curiosity.',
    openGraph: {
      title: `${header} — ${author}`,
      description: 'Essays on systems thinking, software, technology, and anything that sparks my curiosity.',
    },
    twitter: {
      card: 'summary',
      title: `${header} — ${author}`,
      description: 'Essays on systems thinking, software, technology, and anything that sparks my curiosity.',
    },
    icons: {
      icon: [
        {
          url: '/favicon-cogito-dark.png',
          type: 'image/png',
        },
      ],
      apple: '/favicon-cogito-dark.png',
    },
  } satisfies Metadata,
} as const
