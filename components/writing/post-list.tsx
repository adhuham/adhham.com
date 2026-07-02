import Link from 'next/link'
import type { PostMeta } from '@/lib/content'
import { formatArticleMeta } from '@/lib/format-article-meta'

interface PostListProps {
  posts: PostMeta[]
}

export function WritingPostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="writing-empty">No essays published yet.</p>
  }

  return (
    <ul className="writing-post-list">
      {posts.map((post) => (
        <li key={post.slug} className="writing-post-item">
          <Link href={`/writing/${post.slug}`} className="writing-post-link">
            <h2 className="writing-post-title">{post.title}</h2>
            <p className="writing-post-meta">{formatArticleMeta(post.author, post.date)}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
