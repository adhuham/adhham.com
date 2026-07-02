import type { PostMeta } from '@/lib/content'
import { formatDate } from '@/lib/format-date'

export function getPostUpdatedDate(post: Pick<PostMeta, 'date' | 'updated'>): string | undefined {
  return post.updated ?? post.date
}

export function formatLastUpdated(date: string): string {
  return `Last updated ${formatDate(date)}`
}
