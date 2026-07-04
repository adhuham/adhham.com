import fs from 'fs'
import path from 'path'

const sections = ['writing', 'dhivehi']

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    return 0
  }

  fs.mkdirSync(dest, { recursive: true })

  let copied = 0

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copied += copyDir(srcPath, destPath)
    } else if (entry.isFile()) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true })
      fs.copyFileSync(srcPath, destPath)
      console.log(`  copied ${path.relative(process.cwd(), srcPath)} → ${path.relative(process.cwd(), destPath)}`)
      copied += 1
    }
  }

  return copied
}

let totalCopied = 0

for (const section of sections) {
  const src = path.join('content', section, 'media')
  const dest = path.join('public', 'content', section, 'media')

  if (!fs.existsSync(src)) {
    console.log(`sync-content-assets: no media dir for ${section}, skipping`)
    continue
  }

  console.log(`sync-content-assets: syncing ${section} media...`)
  totalCopied += copyDir(src, dest)
}

console.log(`sync-content-assets: done (${totalCopied} file${totalCopied === 1 ? '' : 's'} copied)`)
