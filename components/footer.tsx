import Link from 'next/link'
import { siteContent } from '@/meta/site-content'

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-xl border-t border-border px-6 py-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} {siteContent.profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/80">
            <Link href="/terms" className="transition-colors hover:text-muted-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-muted-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
