import { writingMeta } from '@/meta/writing'

interface WritingShellProps {
  children: React.ReactNode
}

export function WritingShell({ children }: WritingShellProps) {
  return (
    <div className="writing-theme">
      <div className="writing-shell">
        <header className="writing-blog-header">
          <h1 className="writing-brand">{writingMeta.header}</h1>
        </header>
        {children}
      </div>
    </div>
  )
}
