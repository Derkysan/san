import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter, Titillium_Web } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const titillium = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-titillium',
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '900']
})

export const metadata = {
  openGraph: {
    title: 'Derkysan',
    description: 'Front-end developer',
    url: 'https://nextjs.org',
    siteName: 'Derkysan',
    // images: [
    //   {
    //     url: '../og-image.png',
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: '../og-image.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    // locale: 'en_US',
    // type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${titillium.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
