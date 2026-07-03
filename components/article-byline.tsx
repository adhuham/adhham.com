import Image from 'next/image'
import { authorMeta, getAuthorDisplayName } from '@/meta/author'
import { formatLastUpdated, getPostUpdatedDate } from '@/lib/format-article-meta'
import { ShareButton } from '@/components/share-button'

interface ArticleBylineProps {
  author: string
  date?: string
  updated?: string
  shareUrl: string
  shareTitle: string
  variant: 'writing' | 'dhivehi'
}

export function ArticleByline({
  author,
  date,
  updated,
  shareUrl,
  shareTitle,
  variant,
}: ArticleBylineProps) {
  const prefix = variant === 'writing' ? 'writing' : 'dhivehi'
  const lastUpdated = getPostUpdatedDate({ date, updated })
  const displayName = getAuthorDisplayName(variant, author)

  return (
    <div className={`${prefix}-article-byline`}>
      <div className={`${prefix}-article-byline-main`}>
        <Image
          src={authorMeta.image.src}
          alt={authorMeta.image.alt}
          width={40}
          height={40}
          className={`${prefix}-article-byline-photo`}
        />
        <div className={`${prefix}-article-byline-text`}>
          <p className={`${prefix}-article-byline-name`}>{displayName}</p>
          {lastUpdated && (
            <p className={`${prefix}-article-byline-date`}>{formatLastUpdated(lastUpdated)}</p>
          )}
        </div>
      </div>
      <ShareButton url={shareUrl} title={shareTitle} variant={variant} />
    </div>
  )
}
