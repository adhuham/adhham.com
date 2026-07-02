import { dhivehiMeta } from '@/meta/dhivehi'

interface DhivehiShellProps {
  children: React.ReactNode
}

export function DhivehiShell({ children }: DhivehiShellProps) {
  return (
    <div className="dhivehi-theme">
      <div className="dhivehi-shell">
        <header className="dhivehi-blog-header">
          <h1 className="dhivehi-brand">{dhivehiMeta.name}</h1>
          <p className="dhivehi-tagline">{dhivehiMeta.tagline}</p>
        </header>
        {children}
      </div>
    </div>
  )
}
