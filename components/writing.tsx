import { siteContent } from '@/lib/site-content'

export function Writing() {
  const { writing } = siteContent

  return (
    <section>
      <div className="max-w-xl mx-auto px-6 py-12">
        <h3 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground/80">{writing.title}</h3>
        <p className="mb-5 max-w-lg text-[13px] leading-relaxed text-muted-foreground/90">
          {writing.description}
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {writing.items.map((blog, idx) => (
            <a
              key={idx}
              href={blog.url}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              <div
                className={`mb-4 h-24 rounded-2xl bg-gradient-to-br ${blog.tone}`}
                aria-hidden="true"
              />
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {blog.category}
              </p>
              <h4 className="mb-2 text-sm font-semibold text-foreground transition-colors group-hover:text-foreground/80">
                {blog.name}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {blog.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
