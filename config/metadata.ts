import type { Metadata, Viewport } from 'next'
import { siteConfig } from './site'

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.skills as unknown as string[],
  authors: {
    name: siteConfig.title,
    url: siteConfig.url,
  },
  creator: siteConfig.title,
  manifest: 'manifest.json',
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
    type: 'website',
    locale: 'en-US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    site: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    creator: `@${siteConfig.username}`,
    card: 'summary_large_image',
    images: ['/api/og'],
  },
} satisfies Metadata
