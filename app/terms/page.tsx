import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section>
        <div className="mx-auto max-w-xl px-6 py-16">
          <Link
            href="/"
            className="mb-8 inline-block text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Back home
          </Link>
          <h1 className="mb-3 font-sans text-2xl font-semibold">Terms</h1>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            By using this site, you agree to use its content and contact channels
            responsibly and lawfully.
          </p>
          <div className="space-y-6 text-sm leading-relaxed text-foreground/90">
            <p>
              All content on this website is provided for general information and
              portfolio purposes. While care is taken to keep information accurate,
              no guarantee is made that everything will always be complete or current.
            </p>
            <p>
              You may reference or share the public content of this site with proper
              attribution, but you should not copy or republish it in a misleading
              way or present it as your own work.
            </p>
            <p>
              External links are provided for convenience. I am not responsible for
              the content, policies, or availability of third-party websites.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
