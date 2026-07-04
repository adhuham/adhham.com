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

interface PostSource {
  slug: string
  filePath: string
  isFolder: boolean
}

interface AssetResolveOptions {
  postSlug?: string
  postIsFolder?: boolean
}

const contentRoot = path.join(process.cwd(), 'content')

function isDraftEntry(name: string): boolean {
  return name.startsWith('__')
}

function sectionDir(section: ContentSection): string {
  return path.join(contentRoot, section)
}

function postDir(section: ContentSection, slug: string): string {
  return path.join(sectionDir(section), slug)
}

function discoverPostSources(section: ContentSection): PostSource[] {
  const dir = sectionDir(section)

  if (!fs.existsSync(dir)) {
    return []
  }

  const sources = new Map<string, PostSource>()

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (isDraftEntry(entry.name)) {
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      const slug = entry.name.replace(/\.md$/, '')
      sources.set(slug, {
        slug,
        filePath: path.join(dir, entry.name),
        isFolder: false,
      })
      continue
    }

    if (entry.isDirectory() && entry.name !== 'media') {
      const contentPath = path.join(dir, entry.name, 'content.md')
      if (fs.existsSync(contentPath)) {
        sources.set(entry.name, {
          slug: entry.name,
          filePath: contentPath,
          isFolder: true,
        })
      }
    }
  }

  return [...sources.values()]
}

function findPostSource(section: ContentSection, slug: string): PostSource | null {
  return discoverPostSources(section).find((source) => source.slug === slug) ?? null
}

function resolvePostFolderAssetPath(
  section: ContentSection,
  postSlug: string,
  relativePath: string,
): string | null {
  const filename = relativePath.replace(/^\//, '').replace(/^\.\//, '')

  if (!filename || filename.includes('..')) {
    return null
  }

  const assetPath = path.join(postDir(section, postSlug), filename)

  if (fs.existsSync(assetPath) && fs.statSync(assetPath).isFile()) {
    return `/content/${section}/${postSlug}/${filename.split(path.sep).join('/')}`
  }

  return null
}

export function resolveContentAssetPath(
  section: ContentSection,
  relativePath: string,
  options: AssetResolveOptions = {},
): string {
  if (
    relativePath.startsWith('http://') ||
    relativePath.startsWith('https://') ||
    relativePath.startsWith('/content/')
  ) {
    return relativePath
  }

  const { postSlug, postIsFolder } = options

  if (postIsFolder && postSlug) {
    const postLocal = resolvePostFolderAssetPath(section, postSlug, relativePath)
    if (postLocal) {
      return postLocal
    }

    if (relativePath.startsWith('/')) {
      return relativePath
    }
  } else if (relativePath.startsWith('/')) {
    return relativePath
  }

  const normalized = relativePath.replace(/^\.\//, '').replace(/^media\//, '')
  return `/content/${section}/media/${normalized}`
}

export function rewriteContentAssetUrls(
  markdown: string,
  section: ContentSection,
  options: AssetResolveOptions = {},
): string {
  return markdown.replace(
    /!\[([^\]]*)\]\(([^)\s]+)\)/g,
    (_match, alt: string, url: string) =>
      `![${alt}](${resolveContentAssetPath(section, url, options)})`,
  )
}

function parseFrontmatter(
  data: Record<string, unknown>,
  fallbackSlug: string,
  section: ContentSection,
  options: AssetResolveOptions,
): PostMeta {
  const featuredImage = data.featuredImage ? String(data.featuredImage) : undefined

  return {
    title: String(data.title ?? 'Untitled'),
    latinTitle: data.latinTitle ? String(data.latinTitle) : undefined,
    slug: String(data.slug ?? fallbackSlug),
    author: String(data.author ?? 'Adhham'),
    date: data.date ? String(data.date) : undefined,
    updated: data.updated ? String(data.updated) : undefined,
    featuredImage: featuredImage
      ? resolveContentAssetPath(section, featuredImage, options)
      : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  }
}

function loadPostSource(source: PostSource, section: ContentSection): Post {
  const sourceText = fs.readFileSync(source.filePath, 'utf8')
  const { data, content } = matter(sourceText)
  const options: AssetResolveOptions = {
    postSlug: source.slug,
    postIsFolder: source.isFolder,
  }
  const meta = parseFrontmatter(data, source.slug, section, options)

  return {
    ...meta,
    content: rewriteContentAssetUrls(content, section, options),
  }
}

export function getPosts(section: ContentSection): PostMeta[] {
  const posts = discoverPostSources(section).map((source) => {
    const sourceText = fs.readFileSync(source.filePath, 'utf8')
    const { data } = matter(sourceText)
    return parseFrontmatter(data, source.slug, section, {
      postSlug: source.slug,
      postIsFolder: source.isFolder,
    })
  })

  return posts.sort((a, b) => {
    if (!a.date && !b.date) return a.title.localeCompare(b.title)
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPost(section: ContentSection, slug: string): Post | null {
  const source = findPostSource(section, slug)

  if (!source) {
    return null
  }

  return loadPostSource(source, section)
}

export function getAllSlugs(section: ContentSection): string[] {
  return getPosts(section).map((post) => post.slug)
}
