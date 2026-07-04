'use client'

import { Share2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface SharePlatform {
  id: string
  label: string
  href?: string
  action?: 'copy'
}

interface ShareButtonProps {
  url: string
  title: string
  variant: 'writing' | 'dhivehi'
}

function buildPlatforms(url: string, title: string): SharePlatform[] {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return [
    {
      id: 'x',
      label: 'X/Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    },
    {
      id: 'email',
      label: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
    {
      id: 'copy',
      label: 'Copy link',
      action: 'copy',
    },
  ]
}

export function ShareButton({ url, title, variant }: ShareButtonProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const prefix = variant === 'writing' ? 'writing' : 'dhivehi'
  const platforms = buildPlatforms(url, title)

  useEffect(() => {
    if (!open) {
      return
    }

    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  async function handlePlatformClick(platform: SharePlatform) {
    if (platform.action === 'copy') {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => {
        setCopied(false)
        setOpen(false)
      }, 1200)
      return
    }

    setOpen(false)
  }

  return (
    <div className={`${prefix}-share`} ref={rootRef}>
      <button
        type="button"
        className={`${prefix}-share-button`}
        aria-label="Share"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        <Share2 size={16} strokeWidth={2} aria-hidden="true" />
      </button>
      {open && (
        <div className={`${prefix}-share-menu`} role="menu">
          {platforms.map((platform) =>
            platform.href ? (
              <a
                key={platform.id}
                href={platform.href}
                className={`${prefix}-share-menu-item`}
                role="menuitem"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
              >
                {platform.label}
              </a>
            ) : (
              <button
                key={platform.id}
                type="button"
                className={`${prefix}-share-menu-item`}
                role="menuitem"
                onClick={() => handlePlatformClick(platform)}
              >
                {copied && platform.action === 'copy' ? 'Copied' : platform.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  )
}
