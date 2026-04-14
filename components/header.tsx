import { SocialLinks } from '@/components/social-links'

export function Header() {
  return (
    <header>
      <nav className="mx-auto flex max-w-xl justify-end px-6 py-6">
        <div className="flex items-center gap-4">
          <SocialLinks />
        </div>
      </nav>
    </header>
  )
}
