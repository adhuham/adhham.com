import { Inter, Source_Serif_4 } from 'next/font/google'
import { WritingShell } from '@/components/writing/writing-shell'
import { writingMeta } from '@/meta/writing'
import '@/styles/writing.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
})

export const metadata = writingMeta.metadata

export default function WritingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${inter.variable} ${sourceSerif.variable}`}>
      <WritingShell>{children}</WritingShell>
    </div>
  )
}
