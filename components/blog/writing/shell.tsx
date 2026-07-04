import Link from 'next/link'
import { writingMeta } from '@/meta/writing'

interface WritingShellProps {
  children: React.ReactNode
}

export function WritingShell({ children }: WritingShellProps) {
  return (
    <div className="writing-theme">
      <div className="writing-shell">
        <header className="writing-blog-header">
          <Link href={writingMeta.path} className="writing-blog-header-link">
            <span className="writing-blog-name">{writingMeta.name}</span>
            <span className="writing-blog-tagline">{writingMeta.tagline}</span>
          </Link>
        </header>
        {children}
      </div>
    </div>
  )
}
