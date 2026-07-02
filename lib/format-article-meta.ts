import { formatDate } from '@/lib/format-date'

export function formatWrittenBy(author: string): string {
  return `Written by: ${author}`
}

export function formatArticleMeta(author: string, date?: string): string {
  const byline = formatWrittenBy(author)

  if (date) {
    return `${byline} · ${formatDate(date)}`
  }

  return byline
}
