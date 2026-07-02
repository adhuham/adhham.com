import { siteContent } from '@/meta/site-content'

export function Contact() {
  const { connect, contact } = siteContent

  return (
    <section id="contact">
      <div className="max-w-xl mx-auto px-6 py-12">
        <h3 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.16em] text-foreground/80">{connect.title}</h3>
        <p className="mb-5 max-w-lg text-[13px] leading-relaxed text-muted-foreground/90">
          {connect.description}
        </p>
        <div className="space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Email</p>
            <a href={`mailto:${contact.email}`} className="text-foreground hover:text-accent transition-colors font-medium">
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3">Social</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {contact.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  <p className="text-sm font-medium text-foreground">{link.label}</p>
                  <p className="text-xs text-muted-foreground">{link.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
