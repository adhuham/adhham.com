import Link from 'next/link'
import type { PostMeta } from '@/lib/content'
import { formatDate } from '@/lib/format-date'

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
            {post.date && <p className="writing-post-meta">{formatDate(post.date)}</p>}
          </Link>
        </li>
      ))}
    </ul>
  )
}
