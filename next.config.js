/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src/app', 'src/components', 'src/lib'] // Only lint these directories
  },
  images: {
    domains: ['ui-avatars.com'],
  },
}

module.exports = nextConfig 