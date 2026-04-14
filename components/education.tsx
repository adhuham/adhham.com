import { siteContent } from '@/lib/site-content'

export function Education() {
  const { education } = siteContent

  return (
    <section>
      <div className="max-w-xl mx-auto px-6 pb-10">
        <h3 className="mb-2 font-sans text-xs font-normal uppercase tracking-wide text-muted-foreground">{education.title}</h3>
        <div className="space-y-1">
          {education.items.map((edu, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 py-1">
                <div>
                  <p className="text-sm text-foreground/90">{edu.degree}</p>
                </div>
                <div className="h-px flex-1 bg-border/60" aria-hidden="true" />
                <p className="text-xs text-muted-foreground whitespace-nowrap">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
