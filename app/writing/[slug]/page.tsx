import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPost } from '@/lib/content'
import { getPostLatinTitle } from '@/lib/get-post-latin-title'
import { buildPostMetadata } from '@/lib/post-metadata'
import { ArticleAuthor } from '@/components/blog/article-author'
import { ArticleByline } from '@/components/blog/article-byline'
import { MarkdownContent } from '@/components/blog/markdown-content'
import { PostFeaturedImage } from '@/components/blog/post-featured-image'
import { siteMeta } from '@/meta/site'
import { writingMeta } from '@/meta/writing'

interface WritingPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs('writing').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost('writing', slug)

  if (!post) {
    return { title: 'Not found' }
  }

  return buildPostMetadata({ post, sectionTitle: writingMeta.header })
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params
  const post = getPost('writing', slug)

  if (!post) {
    notFound()
  }

  const shareTitle = getPostLatinTitle(post)
  const shareUrl = `${siteMeta.url}${writingMeta.path}/${post.slug}`

  return (
    <article>
      <Link href={writingMeta.path} className="writing-back">
        {writingMeta.post.back}
      </Link>
      <header className="writing-article-header">
        <h1 className="writing-article-title">{post.title}</h1>
        <ArticleByline
          author={post.author}
          date={post.date}
          updated={post.updated}
          shareUrl={shareUrl}
          shareTitle={shareTitle}
          variant="writing"
        />
      </header>
      {post.featuredImage && (
        <PostFeaturedImage
          src={post.featuredImage}
          alt={shareTitle}
          variant="writing"
        />
      )}
      <MarkdownContent content={post.content} className="writing-prose" />
      <ArticleAuthor author={post.author} variant="writing" />
    </article>
  )
}
