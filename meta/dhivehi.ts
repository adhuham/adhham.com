import type { Metadata } from 'next'

const latinTitle = 'Fikuraathu'
const author = 'Adhham'

export const dhivehiMeta = {
  name: 'ފިކުރާތު',
  latinTitle: 'Fikuraathu',
  tagline: 'އަހަންނަށް ވިސްނެއެވެ. އެހެންކަމުން، އަހަރެން ލިޔަމެވެ.',
  author,
  path: '/dhivehi',
  post: {
    back: '← ހުރިހާ ލިޔުންތައް',
  },
  metadata: {
    title: `${latinTitle} — ${author}`,
    description: 'Reflections on thought, life, and perception, written in Dhivehi.',
    openGraph: {
      title: `${latinTitle} — ${author}`,
      description: 'Reflections on thought, life, and perception, written in Dhivehi.',
    },
    twitter: {
      card: 'summary',
      title: `${latinTitle} — ${author}`,
      description: 'Reflections on thought, life, and perception, written in Dhivehi.',
    },
    icons: {
      icon: [
        {
          url: '/favicon-fikuraathu.png',
          type: 'image/png',
        },
      ],
      apple: '/favicon-fikuraathu.png',
    },
  } satisfies Metadata,
} as const
