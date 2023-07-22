/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'opengraph.githubassets.com',
      'repository-images.githubusercontent.com',
      'github.com',
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
