/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // path: 'https://avatars.githubusercontent.com/',
  images: {
    unoptimized: true
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com/',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
}

module.exports = nextConfig
