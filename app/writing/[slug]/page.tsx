import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPost } from '@/lib/content'
import { formatArticleMeta } from '@/lib/format-article-meta'
import { getPostLatinTitle } from '@/lib/get-post-latin-title'
import { ArticleAuthor } from '@/components/article-author'
import { MarkdownContent } from '@/components/markdown-content'
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

  const latinTitle = getPostLatinTitle(post)

  return {
    title: `${latinTitle} — ${writingMeta.header}`,
    description: post.tags?.join(', '),
    openGraph: {
      title: `${latinTitle} — ${writingMeta.header}`,
      description: post.tags?.join(', '),
    },
    twitter: {
      card: 'summary',
      title: `${latinTitle} — ${writingMeta.header}`,
      description: post.tags?.join(', '),
    },
  }
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params
  const post = getPost('writing', slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <Link href={writingMeta.path} className="writing-back">
        {writingMeta.post.back}
      </Link>
      <header className="writing-article-header">
        <h1 className="writing-article-title">{post.title}</h1>
        <p className="writing-article-meta">
          {formatArticleMeta(post.author, post.date)}
        </p>
      </header>
      <MarkdownContent content={post.content} className="writing-prose" />
      <ArticleAuthor author={post.author} variant="writing" />
    </article>
  )
}
