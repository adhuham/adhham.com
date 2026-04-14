import Image from 'next/image'
import { siteContent } from '@/lib/site-content'

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
          <h2 className="mb-4 font-sans text-2xl font-bold leading-tight lg:text-4xl -tracking-[1px]">
            {hero.title}
          </h2>
          <div className="space-y-4">
            {hero.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
