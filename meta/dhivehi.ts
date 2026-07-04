import type { Metadata } from 'next'

const latinTitle = 'Fikuraathu'
const description = 'Essays and reflections in Dhivehi'

export const dhivehiMeta = {
  name: 'ފިކުރާތު',
  latinTitle: 'Fikuraathu',
  tagline: 'އަހަންނަށް ވިސްނެއެވެ. އެހެންކަމުން، އަހަރެން ލިޔަމެވެ.',
  description,
  path: '/dhivehi',
  post: {
    back: '← ހުރިހާ ލިޔުންތައް',
  },
  metadata: {
    title: `${latinTitle} — ${description}`,
    description,
    openGraph: {
      title: `${latinTitle} — ${description}`,
      description,
    },
    twitter: {
      card: 'summary',
      title: `${latinTitle} — ${description}`,
      description,
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
