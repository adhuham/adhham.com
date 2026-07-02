import Image from 'next/image'
import { authorMeta } from '@/meta/author'

interface ArticleAuthorProps {
  author: string
  variant: 'writing' | 'dhivehi'
}

export function ArticleAuthor({ author, variant }: ArticleAuthorProps) {
  const prefix = variant === 'writing' ? 'writing' : 'dhivehi'

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
          <p className={`${prefix}-article-author-name`}>{author}</p>
          <p className={`${prefix}-article-author-bio`}>{authorMeta.bio}</p>
        </div>
      </div>
    </footer>
  )
}
