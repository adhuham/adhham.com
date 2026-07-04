import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { siteMeta } from '@/meta/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#000000',
  userScalable: true,
}

const title = 'Adhham'
const description = 'Building software and exploring engineering through projects, experiments, and writing.'
const image = '/site-image.png'

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title,
  description,
  openGraph: {
    title ,
    description,
    images: [image],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: [image],
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased text-foreground`}>
        {children}
        {/*process.env.NODE_ENV === 'production' && <Analytics />*/}

        {process.env.NODE_ENV === 'production' && 
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "wzu1hiemn6");
              `,
            }}
          />
        }
      </body>
    </html>
  )
}
