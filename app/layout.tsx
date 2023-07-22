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
        <body className="bg-neutral-100 bg-gradient-to-b from-neutral-100 to-night-100 bg-fixed text-gray-600 dark:bg-night-900 dark:from-night-800 dark:to-night-950 dark:text-night-50 md:isolate">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ServerThemeProvider>
  )
}
