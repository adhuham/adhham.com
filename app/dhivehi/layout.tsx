import { Inter } from 'next/font/google'
import { DhivehiShell } from '@/components/dhivehi/dhivehi-shell'
import { dhivehiMeta } from '@/meta/dhivehi'
import '@/styles/dhivehi-fonts.css'
import '@/styles/dhivehi.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = dhivehiMeta.metadata

export default function DhivehiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${inter.variable}`} lang="dv">
      <DhivehiShell>{children}</DhivehiShell>
    </div>
  )
}
