import fs from 'fs'
import path from 'path'

const sections = ['writing', 'dhivehi']

function copyDir(src, dest, { exclude = [] } = {}) {
  if (!fs.existsSync(src)) {
    return 0
  }

  fs.mkdirSync(dest, { recursive: true })

  let copied = 0

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (exclude.includes(entry.name)) {
      continue
    }

    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copied += copyDir(srcPath, destPath, { exclude })
    } else if (entry.isFile()) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true })
      fs.copyFileSync(srcPath, destPath)
      console.log(
        `  copied ${path.relative(process.cwd(), srcPath)} → ${path.relative(process.cwd(), destPath)}`,
      )
      copied += 1
    }
  }

  return copied
}

let totalCopied = 0

for (const section of sections) {
  const sectionDir = path.join('content', section)

  if (!fs.existsSync(sectionDir)) {
    continue
  }

  const sectionMedia = path.join(sectionDir, 'media')
  if (fs.existsSync(sectionMedia)) {
    const dest = path.join('public', 'content', section, 'media')
    console.log(`sync-content-assets: syncing ${section} section media...`)
    totalCopied += copyDir(sectionMedia, dest)
  }

  for (const entry of fs.readdirSync(sectionDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === 'media' || entry.name.startsWith('__')) {
      continue
    }

    const contentMd = path.join(sectionDir, entry.name, 'content.md')
    if (!fs.existsSync(contentMd)) {
      continue
    }

    const src = path.join(sectionDir, entry.name)
    const dest = path.join('public', 'content', section, entry.name)

    console.log(`sync-content-assets: syncing ${section}/${entry.name} post assets...`)
    totalCopied += copyDir(src, dest, { exclude: ['content.md'] })
  }
}

console.log(`sync-content-assets: done (${totalCopied} file${totalCopied === 1 ? '' : 's'} copied)`)
