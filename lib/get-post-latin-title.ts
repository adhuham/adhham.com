import type { PostMeta } from '@/lib/content'

export function getPostLatinTitle(post: Pick<PostMeta, 'title' | 'latinTitle'>): string {
  return post.latinTitle ?? post.title
}
