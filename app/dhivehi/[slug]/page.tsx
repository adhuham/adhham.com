import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllSlugs, getPost } from '@/lib/content'
import { formatArticleMeta } from '@/lib/format-article-meta'
import { getPostLatinTitle } from '@/lib/get-post-latin-title'
import { ArticleAuthor } from '@/components/article-author'
import { MarkdownContent } from '@/components/markdown-content'
import { dhivehiMeta } from '@/meta/dhivehi'

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

  const latinTitle = getPostLatinTitle(post)

  return {
    title: `${latinTitle} — ${dhivehiMeta.latinTitle}`,
    description: post.tags?.join(', '),
    openGraph: {
      title: `${latinTitle} — ${dhivehiMeta.latinTitle}`,
      description: post.tags?.join(', '),
    },
    twitter: {
      card: 'summary',
      title: `${latinTitle} — ${dhivehiMeta.latinTitle}`,
      description: post.tags?.join(', '),
    },
  }
}

export default async function DhivehiPostPage({ params }: DhivehiPostPageProps) {
  const { slug } = await params
  const post = getPost('dhivehi', slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <Link href={dhivehiMeta.path} className="dhivehi-back">
        {dhivehiMeta.post.back}
      </Link>
      <header className="dhivehi-article-header">
        <h1 className="dhivehi-article-title">{post.title}</h1>
        {post.latinTitle && (
          <p className="dhivehi-article-latin-title">{getPostLatinTitle(post)}</p>
        )}
        <p className="dhivehi-article-meta">
          {formatArticleMeta(post.author, post.date)}
        </p>
      </header>
      <MarkdownContent content={post.content} className="dhivehi-prose" />
      <ArticleAuthor author={post.author} variant="dhivehi" />
    </article>
  )
}
