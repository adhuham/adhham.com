import Link from 'next/link'

export default function PrivacyPage() {
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
          <h1 className="mb-3 font-sans text-2xl font-semibold">Privacy</h1>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            This site keeps things simple. It may collect basic analytics and any
            information you choose to send through email or linked platforms.
          </p>
          <div className="space-y-6 text-sm leading-relaxed text-foreground/90">
            <p>
              Information you share voluntarily, such as emails or messages sent
              through linked contact methods, may be used only to respond to your
              inquiry or continue a conversation you started.
            </p>
            <p>
              Basic usage data may be collected to understand site performance and
              visitor activity. This information is used to improve the website
              experience and is not sold to third parties.
            </p>
            <p>
              If you would like any shared information removed, please get in touch
              directly and I will handle it as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
