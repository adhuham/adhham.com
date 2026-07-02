import { Inter, Noto_Sans_Thaana } from 'next/font/google'
import { DhivehiShell } from '@/components/dhivehi/dhivehi-shell'
import { dhivehiMeta } from '@/meta/dhivehi'
import '@/styles/dhivehi.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoThaana = Noto_Sans_Thaana({
  subsets: ['thaana'],
  variable: '--font-noto-thaana',
})

export const metadata = dhivehiMeta.metadata

export default function DhivehiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${inter.variable} ${notoThaana.variable}`} lang="dv">
      <DhivehiShell>{children}</DhivehiShell>
    </div>
  )
}
