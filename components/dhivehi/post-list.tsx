import Link from 'next/link'
import type { PostMeta } from '@/lib/content'
import { formatArticleMeta } from '@/lib/format-article-meta'
import { getPostLatinTitle } from '@/lib/get-post-latin-title'

interface PostListProps {
  posts: PostMeta[]
}

export function DhivehiPostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="dhivehi-empty">މިވަގުތު ލިޔުންތައް ނެތް.</p>
  }

  return (
    <ul className="dhivehi-post-list">
      {posts.map((post) => (
        <li key={post.slug} className="dhivehi-post-item">
          <Link href={`/dhivehi/${post.slug}`} className="dhivehi-post-link">
            <h2 className="dhivehi-post-title">{post.title}</h2>
            {post.latinTitle && (
              <p className="dhivehi-post-latin-title">{getPostLatinTitle(post)}</p>
            )}
            <p className="dhivehi-post-meta">{formatArticleMeta(post.author, post.date)}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
