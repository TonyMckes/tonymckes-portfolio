/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "opengraph.githubassets.com",
        protocol: "https",
      },
      {
        hostname: "repository-images.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
