import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type ContentSection = 'writing' | 'dhivehi'

export interface PostMeta {
  title: string
  latinTitle?: string
  slug: string
  author: string
  date?: string
  updated?: string
  featuredImage?: string
  tags?: string[]
}

export interface Post extends PostMeta {
  content: string
}

const contentRoot = path.join(process.cwd(), 'content')

function sectionDir(section: ContentSection): string {
  return path.join(contentRoot, section)
}

function parseFrontmatter(data: Record<string, unknown>, fallbackSlug: string): PostMeta {
  return {
    title: String(data.title ?? 'Untitled'),
    latinTitle: data.latinTitle ? String(data.latinTitle) : undefined,
    slug: String(data.slug ?? fallbackSlug),
    author: String(data.author ?? 'Adhham'),
    date: data.date ? String(data.date) : undefined,
    updated: data.updated ? String(data.updated) : undefined,
    featuredImage: data.featuredImage ? String(data.featuredImage) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  }
}

export function getPosts(section: ContentSection): PostMeta[] {
  const dir = sectionDir(section)

  if (!fs.existsSync(dir)) {
    return []
  }

  const posts = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const source = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data } = matter(source)
      return parseFrontmatter(data, slug)
    })

  return posts.sort((a, b) => {
    if (!a.date && !b.date) return a.title.localeCompare(b.title)
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPost(section: ContentSection, slug: string): Post | null {
  const filePath = path.join(sectionDir(section), `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  const meta = parseFrontmatter(data, slug)

  return { ...meta, content }
}

export function getAllSlugs(section: ContentSection): string[] {
  return getPosts(section).map((post) => post.slug)
}
