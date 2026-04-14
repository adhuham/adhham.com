import { siteContent } from '@/lib/site-content'

type CallToActionProps = {
  status?: 'open' | 'closed'
}

export function CallToAction({ status = siteContent.cta.status }: CallToActionProps) {
  const isOpen = status === 'open'
  const inquiryHref = `mailto:${siteContent.contact.email}?subject=${encodeURIComponent(siteContent.contact.inquirySubject)}`

  return (
    <section>
      <div className="max-w-xl mx-auto px-6 pb-12 pt-10">
        <div className="flex items-center justify-between rounded-full bg-muted/40 px-5 py-3">
          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
            {isOpen && <span className="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />}
            {isOpen ? siteContent.cta.openLabel : siteContent.cta.closedLabel}
          </span>
          {isOpen ? (
            <a
              href={inquiryHref}
              className="text-xs font-medium px-4 py-1.5 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
            >
              {siteContent.cta.buttonLabel}
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="text-xs font-medium px-4 py-1.5 bg-foreground text-background rounded-full opacity-40 cursor-not-allowed"
            >
              {siteContent.cta.buttonLabel}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
