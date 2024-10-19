module.exports = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
}