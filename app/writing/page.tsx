import { getPosts } from '@/lib/content'
import { WritingPostList } from '@/components/blog/writing/post-list'

export default function WritingIndexPage() {
  const posts = getPosts('writing')

  return <WritingPostList posts={posts} />
}
