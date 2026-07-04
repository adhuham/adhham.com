import Link from 'next/link'
import { dhivehiMeta } from '@/meta/dhivehi'

interface DhivehiShellProps {
  children: React.ReactNode
}

export function DhivehiShell({ children }: DhivehiShellProps) {
  return (
    <div className="dhivehi-theme">
      <div className="dhivehi-shell">
        <header className="dhivehi-blog-header">
          <Link href={dhivehiMeta.path} className="dhivehi-blog-header-link">
            <span className="dhivehi-blog-name">{dhivehiMeta.name}</span>
            <span className="dhivehi-blog-tagline">{dhivehiMeta.tagline}</span>
          </Link>
        </header>
        {children}
      </div>
    </div>
  )
}
