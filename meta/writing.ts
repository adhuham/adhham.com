import type { Metadata } from 'next'

const header = 'Cogito Ergo Scribo / Sine Fine'
const description = 'Essays on systems thinking, software, technology, and anything that sparks my curiosity.'
const image = '/site-image-cogito.png'

export const writingMeta = {
  name: 'Cogito Ergo Scribo',
  tagline: 'Sine Fine',
  header,
  path: '/writing',
  post: {
    back: '← All essays',
  },
  metadata: {
    title: `${header} - ${description}`,
    description,
    openGraph: {
      title: `${header} — ${description}`,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary',
      title: `${header} — ${description}`,
      description,
      images: [image],
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
