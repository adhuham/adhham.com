import type { ReactNode } from 'react'
import Image from 'next/image'
import { siteContent } from '@/meta/site'

const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g

function renderParagraph(paragraph: string | ReactNode) {
  if (typeof paragraph !== 'string') {
    return paragraph
  }

  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = linkRegex.exec(paragraph)) !== null) {
    const [matchText, text, href] = match
    const index = match.index

    if (lastIndex < index) {
      nodes.push(paragraph.slice(lastIndex, index))
    }

    const isExternal = /^https?:\/\//.test(href) || href.startsWith('//')

    nodes.push(
      <a
        key={`${href}-${index}`}
        href={href}
        className="text-accent underline-offset-4 hover:underline"
        {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {text}
      </a>
    )

    lastIndex = index + matchText.length
  }

  if (lastIndex < paragraph.length) {
    nodes.push(paragraph.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : paragraph
}

export function Hero() {
  const { hero, profile } = siteContent

  return (
    <section>
      <div className="max-w-xl mx-auto px-6">
        <div className="max-w-xl">
          <Image
            src={profile.image.src}
            alt={profile.image.alt}
            width={profile.image.width}
            height={profile.image.height}
            className="rounded-2xl object-cover mb-6"
            style={profile.image.style}
          />
          <div className="space-y-4">
            {hero.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-foreground">
                {renderParagraph(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
