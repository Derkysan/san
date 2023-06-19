import './globals.css'
import { Inter, Titillium_Web } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const titillium = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-titillium',
  display: 'swap',
  weight: '200'
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
      <body className={`${inter.className} ${titillium.variable} flex flex-col h-screen`}>
        <div className="border hidden"></div>
        <div className="flex grow">{children}</div>
        <div className="border hidden"></div>
      </body>
    </html>
  )
}
