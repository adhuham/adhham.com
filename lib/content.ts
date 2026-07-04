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

function parseFrontmatter(data: Record<string, unknown>, fallbackSlug: string, section: ContentSection): PostMeta {
  const featuredImage = data.featuredImage ? String(data.featuredImage) : undefined

  return {
    title: String(data.title ?? 'Untitled'),
    latinTitle: data.latinTitle ? String(data.latinTitle) : undefined,
    slug: String(data.slug ?? fallbackSlug),
    author: String(data.author ?? 'Adhham'),
    date: data.date ? String(data.date) : undefined,
    updated: data.updated ? String(data.updated) : undefined,
    featuredImage: featuredImage
      ? resolveContentAssetPath(section, featuredImage)
      : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  }
}

export function resolveContentAssetPath(
  section: ContentSection,
  relativePath: string,
): string {
  if (
    relativePath.startsWith('/') ||
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://')
  ) {
    return relativePath
  }

  const normalized = relativePath.replace(/^\.\//, '').replace(/^media\//, '')
  return `/content/${section}/media/${normalized}`
}

export function rewriteContentAssetUrls(
  markdown: string,
  section: ContentSection,
): string {
  return markdown.replace(
    /(!\[[^\]]*]\()(\.\/)?(media\/[^)\s]+)(\))/g,
    (_match, prefix: string, _dotSlash: string | undefined, assetPath: string, suffix: string) =>
      `${prefix}${resolveContentAssetPath(section, assetPath)}${suffix}`,
  )
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
      return parseFrontmatter(data, slug, section)
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
  const meta = parseFrontmatter(data, slug, section)

  return { ...meta, content: rewriteContentAssetUrls(content, section) }
}

export function getAllSlugs(section: ContentSection): string[] {
  return getPosts(section).map((post) => post.slug)
}
