import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { ServerThemeProvider } from 'next-themes'
import { Open_Sans } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Anthony Mackensen | TonyMckes',
  description: "Personal portfolio's website",
  manifest: 'manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1116' },
  ],
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      '/favicon.ico',
      { type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      { type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
    other: { rel: 'mask-icon', url: '/safari-pinned-tab.svg' },
  },
  openGraph: {
    siteName: 'Anthony Mackensen',
    title: 'Anthony Mackensen | TonyMckes',
    description: "Personal portfolio's website",
    url: 'https://tonymckes.vercel.app',
    images: [
      {
        url: 'https://tonymckes.vercel.app/api/og',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@TonyMckes',
    description: "Personal portfolio's website",
    images: ['https://tonymckes.vercel.app/api/og'],
    site: 'https://tonymckes.vercel.app',
    title: 'Anthony Mackensen | TonyMckes',
  },
}

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
        <body className="bg-neutral-100 text-neutral-800 dark:bg-night-900 dark:text-neutral-200">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ServerThemeProvider>
  )
}
