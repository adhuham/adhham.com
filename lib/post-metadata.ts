import type { Metadata } from 'next'
import type { Post } from '@/lib/content'
import { getPostLatinTitle } from '@/lib/get-post-latin-title'

interface BuildPostMetadataOptions {
  post: Post
  sectionTitle: string
}

export function buildPostMetadata({
  post,
  sectionTitle,
}: BuildPostMetadataOptions): Metadata {
  const title = `${getPostLatinTitle(post)} — ${sectionTitle}`
  const description = post.tags?.join(', ')
  const imageAlt = getPostLatinTitle(post)
  const images = post.featuredImage
    ? [{ url: post.featuredImage, alt: imageAlt }]
    : undefined

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      images,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: post.featuredImage ? 'summary_large_image' : 'summary',
      title,
      description,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  }
}
