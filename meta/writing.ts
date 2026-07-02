import type { Metadata } from 'next'

const header = 'Cogito Ergo Sum / Sine Fine'
const author = 'Adhham'

export const writingMeta = {
  name: 'Cogito Ergo Sum',
  tagline: 'Sine Fine',
  header,
  author,
  path: '/writing',
  post: {
    back: '← All essays',
  },
  metadata: {
    title: `${header} — ${author}`,
    description: 'Essays on systems thinking, philosophy, and intellectual exploration.',
    openGraph: {
      title: `${header} — ${author}`,
      description: 'Essays on systems thinking, philosophy, and intellectual exploration.',
    },
    twitter: {
      card: 'summary',
      title: `${header} — ${author}`,
      description: 'Essays on systems thinking, philosophy, and intellectual exploration.',
    },
  } satisfies Metadata,
} as const
