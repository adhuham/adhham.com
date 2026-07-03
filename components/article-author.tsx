import Image from 'next/image'
import Link from 'next/link'
import { authorMeta, getAuthorDisplayName } from '@/meta/author'

interface ArticleAuthorProps {
  author: string
  variant: 'writing' | 'dhivehi'
}

export function ArticleAuthor({ author, variant }: ArticleAuthorProps) {
  const prefix = variant === 'writing' ? 'writing' : 'dhivehi'
  const displayName = getAuthorDisplayName(variant, author)

  return (
    <footer className={`${prefix}-article-author`}>
      <div className={`${prefix}-article-author-inner`}>
        <Image
          src={authorMeta.image.src}
          alt={authorMeta.image.alt}
          width={56}
          height={56}
          className={`${prefix}-article-author-photo`}
        />
        <div className={`${prefix}-article-author-content`}>
          <p className={`${prefix}-article-author-name`}>{displayName}</p>
          <p className={`${prefix}-article-author-bio`}>{authorMeta.bio}</p>
          <Link
            href={authorMeta.twitter.url}
            className={`${prefix}-article-author-twitter`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {authorMeta.twitter.handle}
          </Link>
        </div>
      </div>
    </footer>
  )
}
