import type { Metadata } from 'next'

const latinTitle = 'Fikuraathu'
const author = 'Adhham'

export const dhivehiMeta = {
  name: 'ފިކުރާތު',
  latinTitle: 'Fikuraathu',
  tagline: 'ފިލްސޮފީ، ތަޖުރިބާ، އަދި ދިރިއުޅުމުގެ ގޮތެން ލިޔެނިވި ތަން.',
  author,
  path: '/dhivehi',
  post: {
    back: '← ހުރިހާ ލިޔުންތައް',
  },
  metadata: {
    title: `${latinTitle} — ${author}`,
    description: 'Dhivehi writing on philosophy, experience, and living.',
    openGraph: {
      title: `${latinTitle} — ${author}`,
      description: 'Dhivehi writing on philosophy, experience, and living.',
    },
    twitter: {
      card: 'summary',
      title: `${latinTitle} — ${author}`,
      description: 'Dhivehi writing on philosophy, experience, and living.',
    },
  } satisfies Metadata,
} as const
