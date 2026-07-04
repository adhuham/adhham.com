import { getPosts } from '@/lib/content'
import { DhivehiPostList } from '@/components/blog/dhivehi/post-list'

export default function DhivehiIndexPage() {
  const posts = getPosts('dhivehi')

  return <DhivehiPostList posts={posts} />
}
