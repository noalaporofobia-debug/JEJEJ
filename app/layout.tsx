import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
  themeColor: '#0f0f0f',
}

export const metadata: Metadata = {
  title: 'No a la Aporofobia | Conciencia Económica',
  description: 'La aporofobia es la discriminación económica. Aprende sobre este fenómeno social y cómo combatirlo. Un proyecto de conciencia escolar.',
  keywords: ['aporofobia', 'discriminación económica', 'conciencia escolar', 'desigualdad', 'pobreza'],
  authors: [{ name: 'No a la Aporofobia' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://noalaporofobia.com',
    siteName: 'No a la Aporofobia',
    title: 'No a la Aporofobia | Conciencia Económica',
    description: 'La aporofobia es la discriminación económica. Aprende sobre este fenómeno social y cómo combatirlo.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
