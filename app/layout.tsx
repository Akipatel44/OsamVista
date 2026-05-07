import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({
  subsets: ['latin'],
})

const _geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#06141B',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'Osam Hills - Premium Tourism Destination',
  description:
    'Discover the pristine beauty of Osam Hills, Patanvav, Gujarat. Explore temples, cultural heritage, tourism attractions, festivals, and natural landscapes.',
  keywords: [
    'Osam Hills',
    'Osam Hills Gujarat',
    'Osam Hills Patanvav',
    'Patanvav tourism',
    'Chichod',
    'tapkeshwar mahadev temple',
    'jain temple osam hills',
    'matri mataji mandir osam hills',
    'bhim ni thali',
    'bhim ni theri',
    'hidimba no hichko',
    'waterfall osam hills',
    'Gujarat tourism',
    'tourist places in Gujarat',
    'Osam Hill',
    'Gujarat hills',
    'temples in Gujarat',
  ],
  metadataBase: new URL('https://osamhills.vercel.app'),

  verification: {
    google: '_Rsa-2EWYbP4oUmNqK1_BmcfDdHiNpSIp9PHxptiqzs',
  },

  openGraph: {
    title: 'Osam Hills - Patanvav, Gujarat',
    description:
      'Explore the cultural and natural wonders of Osam Hills.',
    url: 'https://osamhills.vercel.app',
    siteName: 'Osam Hills',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Osam Hills - Gujarat Tourism',
    description:
      'Discover Osam Hills, Patanvav Gujarat tourism destination.',
  },

  robots: {
    index: true,
    follow: true,
  },

  generator: 'Next.js',
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
