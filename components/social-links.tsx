import type { SVGProps } from 'react'
import { Github, Instagram, Mail } from 'lucide-react'
import { siteContent } from '@/meta/site-content'

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21l-6.014 6.873L22 22h-5.529l-4.33-8.01L5.134 22H2.376l6.433-7.352L2 2h5.67l3.914 7.278L18.244 2Zm-.967 18h1.527L6.83 3.895H5.192L17.277 20Z" />
    </svg>
  )
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.5 3c.46 1.81 1.54 3.15 3.5 3.59V9.3a7.03 7.03 0 0 1-3.5-1.07v6.15A5.45 5.45 0 1 1 9.05 9.1v2.82a2.64 2.64 0 1 0 2.64 2.64V3h2.81Z" />
    </svg>
  )
}

const iconMap = {
  instagram: Instagram,
  x: XIcon,
  github: Github,
  tiktok: TikTokIcon,
  contact: Mail,
} as const

type SocialLinksProps = {
  iconSize?: string
  linkClassName?: string
}

export function SocialLinks({
  iconSize = 'h-4 w-4',
  linkClassName = 'text-muted-foreground transition-colors hover:text-foreground',
}: SocialLinksProps) {
  const { socialLinks, email } = siteContent.contact

  return (
    <>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon]

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={linkClassName}
          >
            <Icon className={iconSize} />
            <span className="sr-only">{link.label}</span>
          </a>
        )
      })}
      <a
        href={`mailto:${email}`}
        aria-label="Contact"
        className={linkClassName}
      >
        <Mail className={iconSize} />
        <span className="sr-only">Contact</span>
      </a>
    </>
  )
}
