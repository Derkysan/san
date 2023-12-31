import Script from 'next/script'

import Navigation from '@/components/Navigation'
import { Inter, Titillium_Web } from 'next/font/google'
import './globals.css'
import { GTMnoscript, GTMscript } from '@/components/GtmScript'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

const titillium = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-titillium',
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export const metadata = {
  metadataBase: new URL('https://derkysan.github.io/san'),
  title: 'Derkysan | Front-end developer',
  description: 'Check out my website!',
  openGraph: {
    title: 'Derkysan | Front-end developer',
    description: 'Check out my website!',
    url: 'https://derkysan.github.io/san/',
    siteName: 'Derkysan',
    images: [
      {
        url: '../public/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: '../public/opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'Derkysan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-69RX759FMY" />
      <body className={`${inter.className} ${titillium.variable}`}>
        <GTMnoscript />
        <Navigation />
        {children}
      </body>
      <GTMscript />
    </html>
  )
}
