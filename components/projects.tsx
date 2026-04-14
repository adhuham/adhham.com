import { siteContent } from '@/lib/site-content'

export function Projects() {
  const { projects } = siteContent

  return (
    <section>
      <div className="max-w-xl mx-auto px-6 py-12">
        <h3 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground/80">{projects.title}</h3>
        <p className="mb-5 max-w-lg text-[13px] leading-relaxed text-muted-foreground/90">
          {projects.description}
        </p>
        <div className="space-y-3">
          {projects.items.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border/60 px-4 py-4 transition-colors hover:border-foreground/20 hover:bg-card/70"
            >
              <div className="min-w-0 flex-1">
                <h4 className="mb-1 text-sm font-semibold text-foreground transition-colors group-hover:text-foreground/75">
                  {project.name}
                </h4>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
