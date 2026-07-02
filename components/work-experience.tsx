import { siteContent } from '@/meta/site-content'

export function WorkExperience() {
  const { workExperience } = siteContent

  return (
    <section>
      <div className="max-w-xl mx-auto px-6 pb-10">
        <h3 className="mb-2 font-sans text-xs font-normal uppercase tracking-wide text-muted-foreground">{workExperience.title}</h3>
        <div className="space-y-1">
          {workExperience.items.map((exp, idx) => (
            <div key={idx} className="flex items-center gap-3 py-1">
              <p className="text-foreground/90 text-sm">{exp.company}</p>
              <div className="h-px flex-1 bg-border/60" aria-hidden="true" />
              <p className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
