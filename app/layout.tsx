import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#06141B',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Osam Hills - Premium Tourism Destination',
  description: 'Discover the pristine beauty of Osam Hills, Patanvav, Gujarat. A premier tourism destination featuring temples, cultural heritage, and natural landscapes.',
  generator: 'v0.app',
  openGraph: {
    title: 'Osam Hills - Patanvav, Gujarat',
    description: 'Explore the cultural and natural wonders of Osam Hills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background dark">
      <body className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
