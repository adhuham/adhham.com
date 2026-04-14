import { siteContent } from '@/lib/site-content'

export function CurrentlyBuilding() {
  const { building } = siteContent

  return (
    <section>
      <div className="mx-auto max-w-xl px-6 py-10">
        <h3 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground/80">{building.title}</h3>
        <p className="mb-5 max-w-lg text-[13px] leading-relaxed text-muted-foreground/90">
          {building.description}
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {building.items.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              className="rounded-2xl border border-border/60 bg-background px-3 py-3 transition-colors hover:border-foreground/20"
            >
              <div
                className={`mb-3 h-20 rounded-xl bg-gradient-to-br ${project.thumbnail}`}
                aria-hidden="true"
              />
              <h4 className="mb-1 text-sm font-semibold text-foreground">{project.title}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
