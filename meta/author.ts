export const authorMeta = {
  name: 'Adhham',
  dhivehiName: 'އަދްހަމް',
  image: {
    src: '/profile.jpg?v=1',
    alt: 'Adhham',
  },
  bio: 'Software engineer writing on systems, philosophy, technology, and the ideas that shape how we think.',
  twitter: {
    url: 'https://x.com/adhhamofficial',
    handle: '@adhhamofficial',
  },
} as const

export function getAuthorDisplayName(
  variant: 'writing' | 'dhivehi',
  author: string
): string {
  return variant === 'dhivehi' ? authorMeta.dhivehiName : author
}
