import { Analytics } from '@vercel/analytics/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { ServerThemeProvider } from 'next-themes'
import { Open_Sans } from 'next/font/google'
import './globals.css'

export { metadata } from 'config/metadata'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={`scroll-smooth ${openSans.className}`}>
        <body className="text-gray-600 before:fixed before:inset-0 before:-z-10 before:bg-neutral-100 before:bg-gradient-to-b before:from-neutral-100 before:to-night-100 dark:text-night-50 before:dark:bg-night-900 before:dark:from-night-800 before:dark:to-night-950">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </ServerThemeProvider>
  )
}
