/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: 'derkysan.github.io/san/',
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
