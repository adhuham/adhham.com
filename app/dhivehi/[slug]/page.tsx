import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPost } from '@/lib/content'
import { getPostLatinTitle } from '@/lib/get-post-latin-title'
import { buildPostMetadata } from '@/lib/post-metadata'
import { ArticleAuthor } from '@/components/article-author'
import { ArticleByline } from '@/components/article-byline'
import { MarkdownContent } from '@/components/markdown-content'
import { PostFeaturedImage } from '@/components/post-featured-image'
import { dhivehiMeta } from '@/meta/dhivehi'
import { siteMeta } from '@/meta/site'

interface DhivehiPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs('dhivehi').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: DhivehiPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost('dhivehi', slug)

  if (!post) {
    return { title: 'Not found' }
  }

  return buildPostMetadata({ post, sectionTitle: dhivehiMeta.latinTitle })
}

export default async function DhivehiPostPage({ params }: DhivehiPostPageProps) {
  const { slug } = await params
  const post = getPost('dhivehi', slug)

  if (!post) {
    notFound()
  }

  const shareTitle = getPostLatinTitle(post)
  const shareUrl = `${siteMeta.url}${dhivehiMeta.path}/${post.slug}`

  return (
    <article>
      <Link href={dhivehiMeta.path} className="dhivehi-back">
        {dhivehiMeta.post.back}
      </Link>
      <header className="dhivehi-article-header">
        <h1 className="dhivehi-article-title">{post.title}</h1>
        <ArticleByline
          author={post.author}
          date={post.date}
          updated={post.updated}
          shareUrl={shareUrl}
          shareTitle={shareTitle}
          variant="dhivehi"
        />
      </header>
      {post.featuredImage && (
        <PostFeaturedImage
          src={post.featuredImage}
          alt={shareTitle}
          variant="dhivehi"
        />
      )}
      <MarkdownContent content={post.content} className="dhivehi-prose" />
      <ArticleAuthor author={post.author} variant="dhivehi" />
    </article>
  )
}
