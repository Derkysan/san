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
  title: 'Derkysan',
  description: 'Front-end developer',
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
