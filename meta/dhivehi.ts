import type { Metadata } from 'next'

const latinTitle = 'Fikuraathu'
const description = 'Essays and reflections in Dhivehi'
const image = '/site-image-fikuraathu.png'

export const dhivehiMeta = {
  name: 'ފިކުރާތު',
  latinTitle: 'Fikuraathu',
  tagline: 'އަހަރެން ވިސްނަމެވެ. އެހެންކަމުން، އަހަރެން ލިޔަމެވެ.',
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
      images: [image],
    },
    twitter: {
      card: 'summary',
      title: `${latinTitle} — ${description}`,
      description,
      images: [image],
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
