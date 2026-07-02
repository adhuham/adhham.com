import Link from 'next/link'
import { siteContent } from '@/meta/site-content'

export function Writing() {
  const { writing } = siteContent

  return (
    <section>
      <div className="max-w-xl mx-auto px-6 py-12">
        <h3 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground/80">{writing.title}</h3>
        <p className="mb-5 max-w-lg text-[13px] leading-relaxed text-muted-foreground/90">
          {writing.description}
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
          {writing.items.map((blog) => (
            <Link
              key={blog.url}
              href={blog.url}
              className="group relative overflow-hidden rounded-xl border border-border/60  p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              <h4 className="mb-2 text-sm font-semibold text-foreground transition-colors group-hover:text-foreground/80">
                {blog.name}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
